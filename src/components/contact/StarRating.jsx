import { useState } from "react";

export default function StarRating({ value, onChange, isRTL }) {
  const [hovered, setHovered] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={`flex gap-1 ${isRTL ? "flex-row-reverse" : ""}`} dir="ltr">
      {stars.map((star) => {
        const filled = star <= (hovered || value);
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="p-0.5 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 rounded"
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
          >
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9"
              viewBox="0 0 24 24"
              fill={filled ? "#D4AF37" : "none"}
              stroke={filled ? "#D4AF37" : "#9CA3AF"}
              strokeWidth={filled ? "0" : "1.5"}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
