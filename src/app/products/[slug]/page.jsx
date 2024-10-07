import dynamic from 'next/dynamic';
import Ingredients from "@/components/Ingredients";
import ProductTitle from "@/components/ProductTittle";
import { notFound } from "next/navigation";

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

  // Dynamically import the corresponding model based on the slug
  let ModelComponent;

  switch (data.slug) {
    case 'breizh-cola-original':
      ModelComponent = dynamic(() => import('@/components/experience/view/SingleOriginal'));
      break;
    case 'breizh-cola-zero':
      ModelComponent = dynamic(() => import('@/components/experience/view/SingleZero'));
      break;
    case 'breizh-cola-cherry':
      ModelComponent = dynamic(() => import('@/components/experience/view/SingleCherry'));
      break;
    default:
      return notFound(); // If the slug does not match any known models
  }

  return (
    <div className="bg-mainColor text-secondColor dark:text-secondDarkColor dark:bg-mainDarkColor min-h-[200vh] w-full">
      <div id="single" className="w-full min-h-[200vh] relative">
        <ProductTitle name={data.title} />
        <Ingredients ingredients={data.ingredients} nutritionel={data.nutritionel} />
        {/* Render the appropriate model based on the slug */}
        <ModelComponent />
      </div>
    </div>
  );
};

export default page;
