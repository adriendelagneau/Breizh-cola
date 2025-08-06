import Carousel from "@/components/sections/carousel/Carousel";
import HeroSingle from "@/components/sections/heroSingle/HeroSingle";
import Social from "@/components/sections/social/Social";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {

  const slug = await params;
  console.log(slug);
  return (


    <div className="pt-24  min-h-[300vh] relative w-full">
      <HeroSingle />
      <h3 className="w-full text-center text-2xl text-primary uppercase font-poppins">
        choose your favorite one
      </h3>
      <Carousel />
      <Social />
    </div>
  );
};

export default Page;
