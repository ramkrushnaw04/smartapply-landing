"use client";

import { useEffect, useState } from "react";

export function useSectionTextColor(navbarHeight: number = 66): string {
  const [textColor, setTextColor] = useState<string>("text-gray-900");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".content"));

    const updateColor = (): void => {
      const scrollPos = window.scrollY + navbarHeight + 1; // +1 to avoid exact border
      const currentSection = sections.find(
        (section) => {
          const htmlSection = section as HTMLElement;
          return htmlSection.offsetTop <= scrollPos && htmlSection.offsetTop + htmlSection.offsetHeight > scrollPos;
        }
      );

      if (currentSection) {
        const bgType = (currentSection as HTMLElement).dataset.bg;
        setTextColor(bgType === "light" ? "text-gray-900" : "text-white");
      }
    };

    window.addEventListener("scroll", updateColor);
    window.addEventListener("resize", updateColor);

    updateColor(); // initial check

    return () => {
      window.removeEventListener("scroll", updateColor);
      window.removeEventListener("resize", updateColor);
    };
  }, [navbarHeight]);

  return textColor;
}
