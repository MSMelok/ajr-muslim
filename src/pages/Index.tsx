import { useState } from "react";
import { Hero } from "@/components/Hero";
import { PrayerCalculator } from "@/components/PrayerCalculator";
import { AgeCalculator } from "@/components/AgeCalculator";
import { Marketplace } from "@/components/Marketplace";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Section = 'home' | 'prayer' | 'age' | 'marketplace';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {currentSection !== 'home' && (
        <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Button
              variant="ghost"
              onClick={() => handleNavigate('home')}
              className="gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              العودة للرئيسية
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {currentSection === 'home' && (
          <Hero onNavigate={(section) => handleNavigate(section)} />
        )}
        
        {currentSection === 'prayer' && <PrayerCalculator />}
        
        {currentSection === 'age' && <AgeCalculator />}
        
        {currentSection === 'marketplace' && <Marketplace />}
      </div>

      <footer className="mt-16 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2024 أجر - منصة حساب العبادة والأذكار الإسلامية
            </p>
            <p className="text-xs text-muted-foreground">
              جميع الأحاديث من مصادر صحيحة ومعتمدة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
