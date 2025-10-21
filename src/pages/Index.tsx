import { useState } from "react";
import { Hero } from "@/components/Hero";
import { PrayerCalculator } from "@/components/PrayerCalculator";
import { AgeCalculator } from "@/components/AgeCalculator";
import { Marketplace } from "@/components/Marketplace";
import { BackgroundDoodle } from "@/components/BackgroundDoodle";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

type Section = 'home' | 'prayer' | 'age' | 'marketplace';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundDoodle />
      
      {currentSection !== 'home' && (
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <Button
              variant="ghost"
              onClick={() => handleNavigate('home')}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              الرئيسية
            </Button>
          </div>
        </div>
      )}

      <main className="flex-1 container mx-auto px-4 py-8">
        {currentSection === 'home' && (
          <Hero onNavigate={(section) => handleNavigate(section)} />
        )}
        
        {currentSection === 'prayer' && <PrayerCalculator />}
        
        {currentSection === 'age' && <AgeCalculator />}
        
        {currentSection === 'marketplace' && <Marketplace />}
      </main>

      <footer className="border-t py-6 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 أجر - جميع الأحاديث من مصادر صحيحة ومعتمدة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
