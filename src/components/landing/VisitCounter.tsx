import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Eye } from "lucide-react";

const SOURCE_LABELS: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "Twitter/X",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  google: "Google",
  direct: "Direto",
};

function detectSource(): string {
  const params = new URLSearchParams(window.location.search);
  const utm = params.get("utm_source")?.toLowerCase();
  if (utm && SOURCE_LABELS[utm]) return utm;

  const ref = document.referrer.toLowerCase();
  if (ref.includes("instagram")) return "instagram";
  if (ref.includes("facebook") || ref.includes("fb.com")) return "facebook";
  if (ref.includes("twitter") || ref.includes("x.com") || ref.includes("t.co")) return "twitter";
  if (ref.includes("linkedin")) return "linkedin";
  if (ref.includes("tiktok")) return "tiktok";
  if (ref.includes("youtube") || ref.includes("youtu.be")) return "youtube";
  if (ref.includes("whatsapp") || ref.includes("wa.me")) return "whatsapp";
  if (ref.includes("telegram") || ref.includes("t.me")) return "telegram";
  if (ref.includes("google")) return "google";
  return "direct";
}

interface SourceCount {
  source: string;
  count: number;
}

const VisitCounter = () => {
  const [totalVisits, setTotalVisits] = useState<number>(0);
  const [topSources, setTopSources] = useState<SourceCount[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const recorded = sessionStorage.getItem("visit_recorded");
    const source = detectSource();

    if (!recorded) {
      supabase
        .from("page_visits")
        .insert({ referrer_source: source })
        .then(() => {
          sessionStorage.setItem("visit_recorded", "true");
          fetchStats();
        });
    } else {
      fetchStats();
    }
  }, []);

  async function fetchStats() {
    const { count } = await supabase
      .from("page_visits")
      .select("*", { count: "exact", head: true });

    setTotalVisits(count ?? 0);

    const { data } = await supabase
      .from("page_visits")
      .select("referrer_source");

    if (data) {
      const counts: Record<string, number> = {};
      data.forEach((row) => {
        const src = row.referrer_source || "direct";
        counts[src] = (counts[src] || 0) + 1;
      });

      const sorted = Object.entries(counts)
        .map(([source, count]) => ({ source, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setTopSources(sorted);
    }
  }

  return (
    <div
      className="fixed bottom-4 left-4 z-50 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 shadow-sm text-[11px] text-muted-foreground flex items-center gap-1.5 hover:bg-background/95 transition-colors">
        <Eye className="w-3 h-3" />
        <span>{totalVisits} visitas</span>
      </div>

      {expanded && topSources.length > 0 && (
        <div className="absolute bottom-full left-0 mb-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-md min-w-[140px]">
          <p className="text-[10px] text-muted-foreground font-medium mb-1">Origem</p>
          {topSources.map(({ source, count }) => (
            <div key={source} className="flex justify-between text-[10px] text-muted-foreground py-0.5">
              <span>{SOURCE_LABELS[source] || source}</span>
              <span className="ml-3 tabular-nums">{count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisitCounter;
