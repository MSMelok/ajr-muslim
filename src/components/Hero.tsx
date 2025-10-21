import { Button } from "@/components/ui/button";
import { Clock, Calendar, Gift } from "lucide-react";

interface HeroProps {
  onNavigate: (section: 'prayer' | 'age' | 'marketplace') => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-medium text-primary">منصة الأجر والثواب</span>
            </div>
            
            <h1 className="space-y-2">
              <span className="block text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                أجر
              </span>
              <span className="block text-2xl md:text-3xl text-foreground/80">
                سوق الجنة في يديك
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              اكتشف الوقت الحقيقي المتاح لك للعبادة، واستثمر كل لحظة في الأعمال الصالحة التي تقربك إلى الجنة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button 
                onClick={() => onNavigate('prayer')}
                size="lg"
                className="gap-2"
              >
                <Clock className="w-5 h-5" />
                حاسبة الصلاة
              </Button>
              <Button 
                onClick={() => onNavigate('age')}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Calendar className="w-5 h-5" />
                العمر الحقيقي
              </Button>
              <Button 
                onClick={() => onNavigate('marketplace')}
                variant="outline"
                size="lg"
                className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Gift className="w-5 h-5" />
                سوق الجنة
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative bg-card rounded-2xl shadow-lg p-8 border border-border">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="mosqueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(158 64% 42%)" />
                      <stop offset="100%" stopColor="hsl(158 64% 52%)" />
                    </linearGradient>
                  </defs>
                  
                  <circle cx="30" cy="20" r="1.5" fill="currentColor" className="text-primary/60">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="170" cy="25" r="1.5" fill="currentColor" className="text-primary/60">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  
                  <path d="M60 140 L60 80 Q60 75 65 75 L75 75 Q80 75 80 80 L80 140 Z" fill="url(#mosqueGradient)"/>
                  <path d="M120 140 L120 80 Q120 75 125 75 L135 75 Q140 75 140 80 L140 140 Z" fill="url(#mosqueGradient)"/>
                  <path d="M50 140 L50 90 Q50 85 55 85 L145 85 Q150 85 150 90 L150 140 Z" fill="url(#mosqueGradient)"/>
                  
                  <ellipse cx="100" cy="85" rx="25" ry="15" fill="url(#mosqueGradient)"/>
                  <path d="M100 70 Q97 65 100 60 Q103 65 100 70" fill="hsl(35 90% 55%)"/>
                  
                  <rect x="67" y="55" width="6" height="30" fill="url(#mosqueGradient)"/>
                  <rect x="127" y="55" width="6" height="30" fill="url(#mosqueGradient)"/>
                  <ellipse cx="70" cy="55" rx="5" ry="4" fill="url(#mosqueGradient)"/>
                  <ellipse cx="130" cy="55" rx="5" ry="4" fill="url(#mosqueGradient)"/>
                  <path d="M70 51 Q69 48 70 45 Q71 48 70 51" fill="hsl(35 90% 55%)"/>
                  <path d="M130 51 Q129 48 130 45 Q131 48 130 51" fill="hsl(35 90% 55%)"/>
                  
                  <rect x="40" y="140" width="120" height="10" fill="url(#mosqueGradient)" opacity="0.8"/>
                  
                  <path d="M55 125 Q55 120 60 120 Q65 120 65 125" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
                  <path d="M95 125 Q95 120 100 120 Q105 120 105 125" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
                  <path d="M135 125 Q135 120 140 120 Q145 120 145 125" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
