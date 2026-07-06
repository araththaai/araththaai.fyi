"use client";

import { useState } from "react";
import { Database, Trash2 } from "lucide-react";
import { updateRecord, deleteRecord } from "./actions";

export default function DataTable({ 
  data, 
  columns, 
  table 
}: { 
  data: any[]; 
  columns: string[]; 
  table: string;
}) {
  const [editingCell, setEditingCell] = useState<{ rowId: string, col: string } | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this record?")) return;
    
    setLoading(true);
    try {
      const res = await deleteRecord(table, id);
      if (!res.success) throw new Error(res.error);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to delete record");
    } finally {
      setLoading(false);
    }
  };

  const handleCellClick = (row: any, col: string) => {
    if (col.toLowerCase().includes('id') || col === 'createdAt' || col === 'updatedAt') {
      return; // Prevent editing IDs and timestamps
    }
    setEditingCell({ rowId: row.id, col });
    
    // Convert value to string for the input
    let initialValue = row[col];
    if (initialValue === null) initialValue = "";
    else if (initialValue instanceof Date) initialValue = initialValue.toISOString();
    else if (typeof initialValue === 'object') initialValue = JSON.stringify(initialValue);
    
    setEditValue(String(initialValue));
    setErrorMsg("");
  };

  const handleSave = async (row: any, col: string) => {
    if (!editingCell) return;
    setEditingCell(null); // Optimistically close input

    const originalValue = row[col];
    let stringifiedOriginal = originalValue === null ? "" : String(originalValue);
    if (originalValue instanceof Date) stringifiedOriginal = originalValue.toISOString();
    
    // If value didn't change, do nothing
    if (stringifiedOriginal === editValue) return;

    let newValue: any = editValue;

    // Type casting based on original value
    if (typeof originalValue === 'number') {
      newValue = Number(editValue);
      if (isNaN(newValue)) {
        setErrorMsg(`Invalid number format for ${col}`);
        return;
      }
    } else if (typeof originalValue === 'boolean') {
      newValue = editValue.toLowerCase() === 'true' || editValue === '1';
    } else if (editValue === "" && originalValue === null) {
      newValue = null;
    }

    setLoading(true);
    try {
      const res = await updateRecord(table, row.id, { [col]: newValue });
      
      if (!res.success) {
        throw new Error(res.error);
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to update record");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: any, col: string) => {
    if (e.key === 'Enter') {
      handleSave(row, col);
    } else if (e.key === 'Escape') {
      setEditingCell(null);
    }
  };

  return (
    <div className="overflow-x-auto overflow-y-auto flex-1 relative min-h-[400px]">
      {errorMsg && (
        <div className="sticky top-0 z-10 w-full bg-red-900 text-white text-xs px-4 py-2 text-center shadow-lg">
          {errorMsg}
          <button onClick={() => setErrorMsg("")} className="ml-4 font-bold hover:text-red-300">X</button>
        </div>
      )}
      
      {data.length > 0 ? (
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="sticky top-0 bg-gray-950 shadow-md z-0">
            <tr className="border-b border-gray-800 text-green-500 uppercase tracking-wider text-[10px]">
              {columns.map(col => (
                <th key={col} className="py-3 px-4 font-bold border-r border-gray-800">{col}</th>
              ))}
              <th className="py-3 px-4 font-bold border-gray-800 text-center w-12 text-red-500/70">Act</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-300">
            {data.map((row, i) => (
              <tr key={row.id || i} className="hover:bg-gray-800/50 transition-colors">
                {columns.map(col => {
                  const isEditing = editingCell?.rowId === row.id && editingCell?.col === col;
                  const isReadOnly = col.toLowerCase().includes('id') || col === 'createdAt' || col === 'updatedAt';
                  
                  let val = row[col];
                  let displayVal = String(val);
                  let colorClass = "text-gray-300";
                  
                  if (col.toLowerCase() === 'id') {
                    displayVal = String(i + 1); // Display sequence instead of UUID
                    colorClass = "text-amber-500 font-bold px-4"; 
                  } else if (val === null) {
                    displayVal = "NULL";
                    colorClass = "text-gray-600 italic";
                  } else if (col === 'password' && typeof val === 'string' && !val.includes(':') && !val.startsWith('$2b$')) {
                    colorClass = "text-emerald-400 font-bold font-mono tracking-widest";
                  } else if (val instanceof Date) {
                    displayVal = val.toISOString();
                    colorClass = "text-blue-300";
                  } else if (typeof val === 'boolean') {
                    colorClass = val ? "text-green-400" : "text-red-400";
                  } else if (typeof val === 'object') {
                    displayVal = JSON.stringify(val).substring(0, 50) + "...";
                    colorClass = "text-purple-400";
                  } else if (isReadOnly) {
                    colorClass = "text-amber-300/70";
                  }

                  return (
                    <td 
                      key={col} 
                      onClick={() => handleCellClick(row, col)}
                      title={col.toLowerCase() === 'id' ? String(val) : undefined}
                      className={`py-2 px-4 border-r border-gray-800 text-xs max-w-xs truncate ${!isReadOnly && !isEditing ? 'cursor-pointer hover:bg-gray-800' : ''} ${colorClass}`}
                    >
                      {isEditing ? (
                        <input 
                          autoFocus
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => handleSave(row, col)}
                          onKeyDown={(e) => handleKeyDown(e, row, col)}
                          disabled={loading}
                          className="w-full bg-black text-green-400 border border-green-500 px-2 py-1 rounded outline-none font-mono"
                        />
                      ) : (
                        displayVal
                      )}
                    </td>
                  );
                })}
                <td className="py-2 px-2 border-gray-800 text-center">
                  <button 
                    onClick={() => handleDelete(row.id)}
                    disabled={loading}
                    className="p-1.5 bg-red-900/30 text-red-400 rounded hover:bg-red-900/50 transition-colors disabled:opacity-50"
                    title="Delete Record"
                  >
                    <Trash2 className="h-4 w-4 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 py-12 absolute inset-0">
          <Database className="h-12 w-12 text-gray-800 mb-4" />
          <p>No records found in table "{table}"</p>
        </div>
      )}
    </div>
  );
}
