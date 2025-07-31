import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/hero/Hero";


export default function Home() {
  return (
   <div className="">
        <Hero />
      <Marquee initialDirection={1} speed={1} sentence="A gentle breeze swept through the meadow, rustling leaves and swaying tall grasses." />
      <Marquee initialDirection={-1} speed={0.7} sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky." />
      <Marquee initialDirection={1} speed={0.9} sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky." />

   </div>
  );
}
