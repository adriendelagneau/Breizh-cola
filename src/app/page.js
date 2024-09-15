import Marquee from "@/components/Marquee";
import Infos from "@/components/section/Infos";
import Landing from "@/components/section/Landing";
import Screen from "@/components/section/Screen";
import SponsortsMusic from "@/components/section/SponsortsMusic";
import SponsortsSport from "@/components/section/SponsortsSport";


export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor min-h-[200vh]">
      <Landing />
      <Infos />
      <Marquee />
      {/* <SponsortsMusic /> */}
      {/* <SponsortsSport /> */}
      <Screen />
    </div>

  );
}
