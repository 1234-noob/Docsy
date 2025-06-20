import { Button } from "@/components/ui/button";
import { link } from "fs";
import Image from "next/image";
import BgGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import PricingSection from "@/components/home/pricing-section";
export default function Home() {
  return (
    <div className="relative">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
      </div>
    </div>
  );
}
