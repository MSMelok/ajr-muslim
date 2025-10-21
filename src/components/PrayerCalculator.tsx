import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

interface PrayerResults {
  totalDailyMinutes: number;
  totalDailyHours: number;
  percentageOfDay: number;
}

export const PrayerCalculator = () => {
  const [wuduTime, setWuduTime] = useState(5);
  const [fajrTime, setFajrTime] = useState(10);
  const [dhuhrTime, setDhuhrTime] = useState(15);
  const [asrTime, setAsrTime] = useState(15);
  const [maghribTime, setMaghribTime] = useState(12);
  const [ishaTime, setIshaTime] = useState(15);
  const [results, setResults] = useState<PrayerResults | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ajr-prayer-data');
    if (saved) {
      const data = JSON.parse(saved);
      setWuduTime(data.wuduTime || 5);
      setFajrTime(data.fajrTime || 10);
      setDhuhrTime(data.dhuhrTime || 15);
      setAsrTime(data.asrTime || 15);
      setMaghribTime(data.maghribTime || 12);
      setIshaTime(data.ishaTime || 15);
    }
  }, []);

  const saveData = () => {
    localStorage.setItem('ajr-prayer-data', JSON.stringify({
      wuduTime, fajrTime, dhuhrTime, asrTime, maghribTime, ishaTime
    }));
  };

  const calculate = () => {
    const totalPrayerTime = fajrTime + dhuhrTime + asrTime + maghribTime + ishaTime;
    const totalWuduTime = wuduTime * 5;
    const totalDailyMinutes = totalPrayerTime + totalWuduTime;
    const totalDailyHours = totalDailyMinutes / 60;
    const percentageOfDay = (totalDailyMinutes / 1440) * 100;

    setResults({
      totalDailyMinutes,
      totalDailyHours,
      percentageOfDay
    });
    saveData();
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">حاسبة الصلاة</h2>
        <p className="text-muted-foreground">احسب الوقت اليومي الذي تقضيه في الصلاة</p>
      </div>

      <Card className="p-6 space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="wudu">وقت الوضوء لكل صلاة (دقائق)</Label>
            <Input
              id="wudu"
              type="number"
              value={wuduTime}
              onChange={(e) => setWuduTime(Number(e.target.value))}
              min="0"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fajr">صلاة الفجر (دقائق)</Label>
              <Input
                id="fajr"
                type="number"
                value={fajrTime}
                onChange={(e) => setFajrTime(Number(e.target.value))}
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dhuhr">صلاة الظهر (دقائق)</Label>
              <Input
                id="dhuhr"
                type="number"
                value={dhuhrTime}
                onChange={(e) => setDhuhrTime(Number(e.target.value))}
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="asr">صلاة العصر (دقائق)</Label>
              <Input
                id="asr"
                type="number"
                value={asrTime}
                onChange={(e) => setAsrTime(Number(e.target.value))}
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maghrib">صلاة المغرب (دقائق)</Label>
              <Input
                id="maghrib"
                type="number"
                value={maghribTime}
                onChange={(e) => setMaghribTime(Number(e.target.value))}
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="isha">صلاة العشاء (دقائق)</Label>
              <Input
                id="isha"
                type="number"
                value={ishaTime}
                onChange={(e) => setIshaTime(Number(e.target.value))}
                min="0"
              />
            </div>
          </div>
        </div>

        <Button onClick={calculate} className="w-full gap-2" size="lg">
          <Calculator className="w-5 h-5" />
          احسب وقت الصلاة
        </Button>

        {results && (
          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="text-center space-y-1">
                <p className="text-sm text-muted-foreground">إجمالي الوقت اليومي</p>
                <p className="text-2xl font-bold text-primary">{results.totalDailyMinutes.toFixed(0)} دقيقة</p>
              </div>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="text-center space-y-1">
                <p className="text-sm text-muted-foreground">بالساعات</p>
                <p className="text-2xl font-bold text-primary">{results.totalDailyHours.toFixed(2)} ساعة</p>
              </div>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="text-center space-y-1">
                <p className="text-sm text-muted-foreground">من يومك</p>
                <p className="text-2xl font-bold text-primary">{results.percentageOfDay.toFixed(1)}%</p>
              </div>
            </Card>
          </div>
        )}
      </Card>
    </div>
  );
};
