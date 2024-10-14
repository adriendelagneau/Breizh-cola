import Ingredients from "@/components/Ingredients";
import ProductTitle from "@/components/ProductTittle";
import { notFound } from "next/navigation";
import TransitionOut from '@/components/TransitionOut';
import Screen from '@/components/section/Screen';
import Marquee from '@/components/Marquee';
import Single from '@/components/experience/view/Single';
import Infos from '@/components/section/Infos';
import Gimg from "@/components/section/Gimg";

async function getData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}


const page = async ({ params }) => {
  const data = await getData(params.slug);

  return (
    <>
      <TransitionOut />

      <div className="w-full h-auto bg-mainColor text-secondColor dark:text-secondDarkColor dark:bg-mainDarkColor">
 
          <ProductTitle name={data.title} />
          <Single obj={params.slug} />
          <Infos />
          <Marquee />
          <Ingredients ingredients={data.ingredients} nutritionel={data.nutritionel} />
          <Gimg />
      
      </div>
    </>
  );
};

export default page;
