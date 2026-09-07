import React from "react";
import { useRTL } from "../../hooks/useRTL.js";
import { Heading, Text } from "../../components/ui/Typography.jsx";

export default function HeaderSection({ t }) {
  const { isRTL } = useRTL();

  return (
    <header
      className={`space-y-4 ${
        isRTL ? "pr-8 border-r-4" : "pl-8 border-l-4"
      } border-[#D4AF37]`}
    >
      <Text className="text-[10px] font-black tracking-[0.4em] text-[#D4AF37] uppercase">
        {t.eyebrow}
      </Text>
      <Heading level={2} className="sm:text-5xl tracking-tight">
        {t.title}
      </Heading>
      <Text className="max-w-2xl sm:text-lg text-gray-500 font-medium">
        {t.subtitle}
      </Text>
    </header>
  );
}