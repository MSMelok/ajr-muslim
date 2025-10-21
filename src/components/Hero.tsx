import { Button } from "@/components/ui/button";
import { Clock, Calendar, Gift } from "lucide-react";

interface HeroProps {
  onNavigate: (section: 'prayer' | 'age' | 'marketplace') => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-xl">✨</span>
          <span className="text-sm font-medium text-primary">منصة الأجر والثواب</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            أجر
          </h1>
          <p className="text-xl text-muted-foreground">
            سوق الجنة في يديك
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          اكتشف الوقت الحقيقي المتاح لك للعبادة، واستثمر كل لحظة في الأعمال الصالحة
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Button 
            onClick={() => onNavigate('prayer')}
            size="lg"
            className="gap-2 flex-1"
          >
            <Clock className="w-5 h-5" />
            حاسبة الصلاة
          </Button>
          <Button 
            onClick={() => onNavigate('age')}
            size="lg"
            className="gap-2 flex-1"
          >
            <Calendar className="w-5 h-5" />
            العمر الحقيقي
          </Button>
          <Button 
            onClick={() => onNavigate('marketplace')}
            size="lg"
            className="gap-2 flex-1"
          >
            <Gift className="w-5 h-5" />
            سوق الجنة
          </Button>
        </div>
      </div>
    </section>
  );
};
