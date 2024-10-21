import React from 'react';
import { productsDetails } from '@/utils/data'; 
import ProductTitle from '@/components/ProductTittle';
import Ingredients from '@/components/Ingredients';
import Screen from '@/components/section/Screen';
import TransitionOut from '@/components/TransitionOut';
import Single from '@/components/experience/view/Single';
import SingleInfos from '@/components/section/SingleInfos';
import Marquee from '@/components/Marquee';

const Page = ({ params }) => {
  const { slug } = params;

  // Find the product based on the slug
  const product = productsDetails.find((item) => item.slug === slug);

  // Handle case where no product is found for the given slug
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full min-h-[200vh] bg-mainColor text-secondColor dark:text-mainColor dark:bg-secondColor">
        <TransitionOut />
     
      <ProductTitle name={product.name} />
      <Single obj={product.slug}/>
      <SingleInfos infos={product.description} />
      <Marquee />
      <Ingredients ingredients={product.ingredients} nutritionel={product.nutritionel} />
      <Screen />
    </div>
  );
};

export default Page;
