import Marquee from "@/components/Marquee";
import Carousel from "@/components/sections/carousel/Carousel";
import BubblesComponent from "@/components/sections/bubbles/BubblesComponent";
import Hero from "@/components/sections/hero/Hero";
import ProductCherry from "@/components/sections/productCherry/ProductCherry";
import ProductOriginal from "@/components/sections/productOriginal/ProductOriginal";
import ProductZero from "@/components/sections/productZero/ProductZero";
import Social from "@/components/sections/social/Social";
import BubblesShaderLayer from "@/components/sections/shaderBubbles/BubblesShaderLayer";


export default function Home() {
  return (
    <div className="relative top-0 z-0">
      <BubblesComponent />
    {/* <BubblesShaderLayer /> */}
      <Hero />
      <Marquee
        initialDirection={1}
        speed={1}
        sentence="A gentle breeze swept through the meadow, rustling leaves and swaying tall grasses."
      />
      <Marquee
        initialDirection={-1}
        speed={0.7}
        sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky."
      />
      <Marquee
        initialDirection={1}
        speed={0.9}
        sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky."
      />
      <ProductOriginal />
      <Marquee
        initialDirection={-1}
        speed={1.1}
        sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky."
      />

      <ProductZero />
      <Marquee
        initialDirection={1}
        speed={1.1}
        sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky."
      />

      <ProductCherry />
      <Marquee
        initialDirection={-1}
        speed={1.1}
        sentence="The beautiful landscape stretched out before us, filled with rolling hills, lush trees, and vibrant wildflowers swaying in the gentle breeze under a clear blue sky."
      />

      <Carousel />

      <Social />
       
    </div>
  );
}
