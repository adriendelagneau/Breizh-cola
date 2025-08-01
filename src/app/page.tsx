import Bg from "@/components/bg";
import Marquee from "@/components/Marquee";
import Carousel from "@/components/sections/carousel/Carousel";
// import Carousel from "@/components/sections/carousel/Carousel";
import Hero from "@/components/sections/hero/Hero";
import ProductCherry from "@/components/sections/productCherry/ProductCherry";
import ProductOriginal from "@/components/sections/productOriginal/ProductOriginal";
import ProductZero from "@/components/sections/productZero/ProductZero";
import Social from "@/components/sections/social/Social";

export default function Home() {
  return (
    <div className="">
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
      <Bg />
      <Social />
    </div>
  );
}
