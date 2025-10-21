import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Reward } from "@/data/rewards";
import { toast } from "sonner";

interface RewardCardProps {
  reward: Reward;
  isStarred: boolean;
  onToggleStar: () => void;
}

export const RewardCard = ({ reward, isStarred, onToggleStar }: RewardCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyThikr = () => {
    navigator.clipboard.writeText(reward.thikr);
    setCopied(true);
    toast.success("تم نسخ الذكر");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-6 space-y-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{reward.icon}</span>
            <h3 className="text-xl font-bold">{reward.title}</h3>
          </div>
          <p className="text-muted-foreground">{reward.description}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleStar}
          className={isStarred ? "text-warning" : "text-muted-foreground"}
        >
          <Star className={`w-5 h-5 ${isStarred ? "fill-current" : ""}`} />
        </Button>
      </div>

      <div className="space-y-3">
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="font-serif text-lg text-center leading-relaxed">{reward.thikr}</p>
        </div>

        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={copyThikr}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              تم النسخ
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              نسخ الذكر
            </>
          )}
        </Button>
      </div>

      <div className="pt-3 border-t space-y-2">
        <p className="text-sm text-muted-foreground italic">"{reward.hadith}"</p>
        <p className="text-xs text-muted-foreground">{reward.source}</p>
      </div>
    </Card>
  );
};
