export const BackgroundDoodle = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top right decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-primary/10 animate-spin"
           style={{ animationDuration: '20s' }} />
      
      {/* Top left */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-accent/5 blur-2xl animate-pulse"
           style={{ animationDuration: '5s' }} />
      
      {/* Islamic geometric patterns */}
      <svg className="absolute top-1/4 right-10 w-24 h-24 text-primary/10 animate-spin"
           style={{ animationDuration: '30s' }}
           viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1"/>
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1"/>
      </svg>
      
      <svg className="absolute top-1/3 left-10 w-20 h-20 text-accent/10"
           viewBox="0 0 100 100">
        <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="currentColor" opacity="0.3"/>
      </svg>
      
      {/* Bottom decorative elements */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse"
           style={{ animationDuration: '6s' }} />
      
      <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-accent/5 blur-2xl animate-pulse"
           style={{ animationDuration: '7s' }} />
      
      {/* Floating stars/sparkles */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"
           style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-ping"
           style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute top-1/4 left-2/3 w-2 h-2 bg-primary rounded-full animate-ping"
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, hsl(158 64% 42%) 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }} />
    </div>
  );
};
