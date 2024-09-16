import Marquee from "@/components/Marquee";
import HorizontalScrollSection from "@/components/section/HorizontalSection";
import Infos from "@/components/section/Infos";
import Landing from "@/components/section/Landing";

import Screen from "@/components/section/Screen";
import SponsortsMusic from "@/components/section/SponsortsMusic";



export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor min-h-[200vh]">
      <Landing />
      <Infos />

   <HorizontalScrollSection />
      <Screen />
      {/* <SponsortsMusic /> */}
    </div>

  );
}
