"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinSection() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: true,
      }
    });
  }, []);

  return (
    <div ref={ref} className="h-[500px] bg-blue-500 flex items-center justify-center text-white text-5xl">
      Pinned Section
    </div>
  );
}
