import { ScrollRevealItem } from "../common/ScrollReveal.jsx";

export default function StatCard({ label, value }) {
  return (
    <ScrollRevealItem>
      <div className="ds-stat-card">
        <p className="text-[9px] font-black tracking-widest text-gray-400 uppercase mb-2">
          {label}
        </p>
        <p className="text-lg font-black text-[#374151]">{value}</p>
      </div>
    </ScrollRevealItem>
  );
}
