"use client";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopCaseActions({ caseId }: { caseId: string }) {
  const handleUpdateStatus = () => {
    import('sweetalert2').then(Swal => {
      Swal.default.fire({
        title: 'Update Status',
        input: 'select',
        inputOptions: {
          'OPEN': 'Open',
          'IN_PROGRESS': 'In Progress',
          'ON_HOLD': 'On Hold',
          'CLOSED': 'Closed'
        },
        inputPlaceholder: 'Select a status',
        showCancelButton: true,
        confirmButtonColor: '#0B132B',
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value) {
              resolve(null);
            } else {
              resolve('You need to select a status');
            }
          });
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.default.fire({
            title: 'Success!',
            text: `Status updated to ${result.value} successfully.`,
            icon: 'success',
            confirmButtonColor: '#0B132B'
          });
        }
      });
    });
  };

  const handleUploadDocument = () => {
    import('sweetalert2').then(Swal => {
      Swal.default.fire({
        title: 'Upload Document',
        input: 'file',
        inputAttributes: {
          'accept': 'application/pdf, image/*',
          'aria-label': 'Upload your document'
        },
        showCancelButton: true,
        confirmButtonText: 'Upload',
        confirmButtonColor: '#0B132B',
        showLoaderOnConfirm: true,
        preConfirm: async (file) => {
          if (!file) {
            Swal.default.showValidationMessage('Please select a file to upload');
            return false;
          }

          const formData = new FormData();
          formData.append('file', file);
          
          try {
            // dynamically import the server action to avoid client/server module bleed issues if necessary,
            // or just use a standard import at the top. Let's import it inline to ensure it works in preConfirm.
            const { uploadFile } = await import('@/app/actions/upload');
            const result = await uploadFile(formData, `cases/${caseId}`);
            
            if (!result.success) {
              throw new Error(result.error);
            }
            return result;
          } catch (error: any) {
            Swal.default.showValidationMessage(`Upload failed: ${error.message}`);
            return false;
          }
        },
        allowOutsideClick: () => !Swal.default.isLoading()
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          Swal.default.fire({
            title: 'Uploaded!',
            html: `Your document has been securely uploaded.<br/><br/><a href="${result.value.url}" target="_blank" class="text-primary hover:underline font-medium">View Document</a>`,
            icon: 'success',
            confirmButtonColor: '#0B132B'
          });
        }
      });
    });
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleUpdateStatus} variant="outline" className="h-9">Update Status</Button>
      <Button onClick={handleUploadDocument} className="bg-primary text-primary-foreground h-9 gap-2">
        <Upload className="h-4 w-4" /> Upload Document
      </Button>
    </div>
  );
}

export function AddUpdateAction({ caseId }: { caseId: string }) {
  const handleAddUpdate = () => {
    import('sweetalert2').then(Swal => {
      Swal.default.fire({
        title: 'Log New Update',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Update Title">' +
          '<textarea id="swal-input2" class="swal2-textarea" placeholder="Update Description"></textarea>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonColor: '#0B132B',
        preConfirm: () => {
          const title = (document.getElementById('swal-input1') as HTMLInputElement).value;
          const description = (document.getElementById('swal-input2') as HTMLTextAreaElement).value;
          if (!title || !description) {
            Swal.default.showValidationMessage('Please fill in both fields');
          }
          return { title, description };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.default.fire({
            title: 'Update Logged!',
            text: 'Your update has been added to the case timeline.',
            icon: 'success',
            confirmButtonColor: '#0B132B'
          });
        }
      });
    });
  };

  return (
    <Button onClick={handleAddUpdate} variant="ghost" size="sm" className="h-8 text-xs text-primary">
      Add Update
    </Button>
  );
}
