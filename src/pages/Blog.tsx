import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock } from "lucide-react";

export const blogPosts = [
  {
    slug: "understanding-pmla-investigations",
    title: "Understanding PMLA Search & Seizure Operations",
    summary: "An overview of constitutional protections and rights during enforcement searches under the Prevention of Money Laundering Act.",
    category: "Personal Rights",
    date: "August 12, 2026",
    readTime: "8 min read",
    author: "Karthik Munusamy",
    authorTitle: "Senior Litigating Partner",
    initials: "KM"
  },
  {
    slug: "gst-compliance-audits-2026",
    title: "Navigating GST Audits: Key Focus Areas for Businesses",
    summary: "Tax assessment frameworks are shifting. Discover critical compliance points and classification dispute guidelines to mitigate liability.",
    category: "Compliance",
    date: "July 28, 2026",
    readTime: "6 min read",
    author: "A. K. Munusamy",
    authorTitle: "Senior Managing Partner",
    initials: "AKM"
  },
  {
    slug: "trademark-infringement-digital-brand",
    title: "Brand Protection: Enforcing Trademarks in Digital Spaces",
    summary: "As platforms evolve, copycats multiply. Learn how to secure permanent injunctions and quash trademark passing-off acts.",
    category: "Intellectual Property",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: "David Chen",
    authorTitle: "Partner (IPR)",
    initials: "DC"
  },
  {
    slug: "rera-disputes-builder-delays",
    title: "Delayed RERA Project Handovers: Legal Remedies for Buyers",
    summary: "Filing complaints and securing compensation under real estate development regulations. Know your statutory rights.",
    category: "Property Law",
    date: "May 20, 2026",
    readTime: "7 min read",
    author: "Meera Raman",
    authorTitle: "Senior Associate",
    initials: "MR"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Compliance", "Personal Rights", "Intellectual Property", "Property Law"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === "All" || post.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Legal Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Knowledge Hub & Resources
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Stay informed with legal articles, legislative reviews, and compliance briefs draft by our senior partners.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCat === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-surface hover:bg-muted text-muted-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredPosts.map((post, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
                
                {/* Visual Header */}
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-heading mb-4 leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Author Info */}
                <div className="p-8 pt-6 mt-6 border-t border-border/60 flex items-center justify-between bg-muted/40">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                      {post.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-primary">{post.author}</h4>
                      <p className="text-[10px] text-muted-foreground">{post.authorTitle}</p>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-secondary font-bold hover:text-primary transition-colors text-xs uppercase tracking-wider inline-flex items-center gap-1 group/link"
                  >
                    Read Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl max-w-5xl mx-auto">
            <p className="text-muted-foreground text-lg">No insights matched your query.</p>
          </div>
        )}

      </div>
    </div>
  );
}
