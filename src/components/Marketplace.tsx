import { useState, useEffect } from "react";
import { rewards } from "@/data/rewards";
import { RewardCard } from "./RewardCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";

export const Marketplace = () => {
  const [starredIds, setStarredIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showStarredOnly, setShowStarredOnly] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ajr-starred');
    if (saved) {
      setStarredIds(JSON.parse(saved));
    }
  }, []);

  const toggleStar = (id: number) => {
    const newStarred = starredIds.includes(id)
      ? starredIds.filter(sid => sid !== id)
      : [...starredIds, id];
    setStarredIds(newStarred);
    localStorage.setItem('ajr-starred', JSON.stringify(newStarred));
  };

  const filteredRewards = rewards.filter(reward => {
    const matchesSearch = reward.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         reward.thikr.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStarred = !showStarredOnly || starredIds.includes(reward.id);
    return matchesSearch && matchesStarred;
  });

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">سوق الجنة</h2>
        <p className="text-muted-foreground">اكتشف كنوز الأجر من الأذكار والأعمال الصالحة</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="ابحث عن ذكر أو ثواب..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>
        <Button
          variant={showStarredOnly ? "default" : "outline"}
          onClick={() => setShowStarredOnly(!showStarredOnly)}
          className="gap-2"
        >
          <Star className={`w-5 h-5 ${showStarredOnly ? "fill-current" : ""}`} />
          المفضلة ({starredIds.length})
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredRewards.map(reward => (
          <RewardCard
            key={reward.id}
            reward={reward}
            isStarred={starredIds.includes(reward.id)}
            onToggleStar={() => toggleStar(reward.id)}
          />
        ))}
      </div>

      {filteredRewards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">لا توجد نتائج للبحث</p>
        </div>
      )}
    </div>
  );
};
