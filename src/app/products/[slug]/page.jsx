import dynamic from 'next/dynamic';
import Ingredients from "@/components/Ingredients";
import ProductTitle from "@/components/ProductTittle";
import { notFound } from "next/navigation";
import TransitionOut from '@/components/TransitionOut';
import Screen from '@/components/section/Screen';
import Marquee from '@/components/Marquee';
import Infos from '@/components/section/Infos';
import Single from '@/components/experience/view/Single';

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
    <div className="bg-mainColor text-secondColor dark:text-secondDarkColor dark:bg-mainDarkColor min-h-[200vh] w-full">
      <div id="single" className="w-full min-h-[200vh] relative">
        <Single obj={params.slug}/>
        <ProductTitle name={data.title} />
        <Infos />
        <Marquee />
        <Ingredients ingredients={data.ingredients} nutritionel={data.nutritionel} />
        <Screen />
      </div>
    </div>
    </>
  );
};

export default page;
