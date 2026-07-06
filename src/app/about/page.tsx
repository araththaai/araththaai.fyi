export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            About The Firm
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            A Legacy of Legal Excellence
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-primary text-muted-foreground">
          <p className="lead text-xl text-foreground font-medium mb-8">
            AKM Associates & Legal Consultants is a premier legal advisory firm dedicated to delivering exceptional legal strategies and representation to clients worldwide.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Our Core Philosophy</h2>
          <p className="mb-6">
            We believe that every legal challenge presents an opportunity for strategic growth and protection. Our approach is grounded in three core principles: clarity in counsel, authority in representation, and transparency in all dealings.
          </p>
          <p className="mb-6">
            With over two decades of consolidated experience, our team of legal experts brings unparalleled insight into corporate structures, family matters, real estate, and dispute resolution.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">Why Choose Us?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-secondary mr-2 font-bold">•</span>
              <span><strong>Tailored Strategies:</strong> We do not believe in one-size-fits-all solutions. Every case is meticulously analyzed to craft a bespoke legal strategy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2 font-bold">•</span>
              <span><strong>Global Standards:</strong> While deeply rooted in local jurisprudence, our operational standards match top-tier international law firms.</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2 font-bold">•</span>
              <span><strong>Client-Centric:</strong> Your goals are our priority. We maintain open communication and provide transparent, actionable advice.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
