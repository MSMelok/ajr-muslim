import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

interface AgeResults {
  totalLifeYears: number;
  timeLostYears: number;
  worshipTimeYears: number;
  worshipPercentage: number;
}

export const AgeCalculator = () => {
  const [expectedAge, setExpectedAge] = useState(70);
  const [sleepHours, setSleepHours] = useState(8);
  const [bathroomMinutes, setBathroomMinutes] = useState(30);
  const [workHours, setWorkHours] = useState(8);
  const [eatingMinutes, setEatingMinutes] = useState(120);
  const [results, setResults] = useState<AgeResults | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ajr-age-data');
    if (saved) {
      const data = JSON.parse(saved);
      setExpectedAge(data.expectedAge || 70);
      setSleepHours(data.sleepHours || 8);
      setBathroomMinutes(data.bathroomMinutes || 30);
      setWorkHours(data.workHours || 8);
      setEatingMinutes(data.eatingMinutes || 120);
    }
  }, []);

  const saveData = () => {
    localStorage.setItem('ajr-age-data', JSON.stringify({
      expectedAge, sleepHours, bathroomMinutes, workHours, eatingMinutes
    }));
  };

  const calculate = () => {
    const totalLifeYears = Math.max(0, expectedAge - 14);
    
    const dailyTimeLostHours = sleepHours + workHours + (bathroomMinutes / 60) + (eatingMinutes / 60);
    const yearlyTimeLostHours = dailyTimeLostHours * 365;
    const timeLostYears = yearlyTimeLostHours / (365 * 24);
    
    const totalTimeLostYears = timeLostYears * totalLifeYears;
    const worshipTimeYears = totalLifeYears - totalTimeLostYears;
    const worshipPercentage = (worshipTimeYears / totalLifeYears) * 100;

    setResults({
      totalLifeYears,
      timeLostYears: totalTimeLostYears,
      worshipTimeYears,
      worshipPercentage
    });
    saveData();
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">حاسبة العمر الحقيقي</h2>
        <p className="text-muted-foreground">احسب الوقت الحقيقي المتاح لك للعبادة</p>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">العمر المتوقع (سنوات)</Label>
            <Input
              id="age"
              type="number"
              value={expectedAge}
              onChange={(e) => setExpectedAge(Number(e.target.value))}
              min="14"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sleep">ساعات النوم يومياً</Label>
              <Input
                id="sleep"
                type="number"
                value={sleepHours}
                onChange={(e) => setSleepHours(Number(e.target.value))}
                min="0"
                max="24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bathroom">وقت الحمام يومياً (دقائق)</Label>
              <Input
                id="bathroom"
                type="number"
                value={bathroomMinutes}
                onChange={(e) => setBathroomMinutes(Number(e.target.value))}
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work">ساعات العمل يومياً</Label>
              <Input
                id="work"
                type="number"
                value={workHours}
                onChange={(e) => setWorkHours(Number(e.target.value))}
                min="0"
                max="24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eating">وقت الأكل يومياً (دقائق)</Label>
              <Input
                id="eating"
                type="number"
                value={eatingMinutes}
                onChange={(e) => setEatingMinutes(Number(e.target.value))}
                min="0"
              />
            </div>
          </div>
        </div>

        <Button onClick={calculate} className="w-full gap-2" size="lg">
          <Calculator className="w-5 h-5" />
          احسب العمر الحقيقي
        </Button>

        {results && (
          <div className="space-y-4 pt-4 border-t">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">إجمالي عمرك بعد البلوغ</p>
                  <p className="text-2xl font-bold">{results.totalLifeYears.toFixed(1)} سنة</p>
                </div>
              </Card>
              <Card className="p-4 bg-destructive/10 border-destructive/20">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">الوقت الضائع</p>
                  <p className="text-2xl font-bold text-destructive">{results.timeLostYears.toFixed(1)} سنة</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-6 bg-gradient-primary text-white">
              <div className="text-center space-y-2">
                <p className="text-sm opacity-90">الوقت المتاح للعبادة</p>
                <p className="text-4xl font-bold">{results.worshipTimeYears.toFixed(1)} سنة</p>
                <p className="text-sm opacity-90">
                  {results.worshipPercentage.toFixed(1)}% من عمرك
                </p>
              </div>
            </Card>
          </div>
        )}
      </Card>
    </div>
  );
};
