import Marquee from "@/components/Marquee";
import Landing from "@/components/section/Landing";
import Screen from "@/components/section/Screen";

export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor min-h-[200vh]">
      <Landing />
      <Marquee />
      <Screen />
    </div>

  );
}
