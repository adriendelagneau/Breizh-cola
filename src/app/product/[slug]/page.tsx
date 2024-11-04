import Marquee from '@/components/Marquee';
import FlyCan from '@/components/sections/flyCan/FlyCan';
import HeroSingle from '@/components/sections/heroSingle/HeroSingle';
import Ingredients from '@/components/sections/ingredients/Ingredients';


type Props = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: Props) => {
  return (
    <div className='pt-24 bg-mainColor min-h-[300vh] relative'>
      <HeroSingle />
      <FlyCan />
      {/* <Marquee /> */}
      <Ingredients />
    </div>
  );
};

export default Page;
