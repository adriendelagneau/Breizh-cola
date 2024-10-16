import Landing from "@/components/section/Landing";
import Infos from "@/components/section/Infos";
import VideoStory from "@/components/section/VideoStory";
import Marquee from "@/components/Marquee";
import TransitionOut from "@/components/TransitionOut";
import Sponsorship from "@/components/Sponsortship";
import Screen from "@/components/section/Screen";
import FlipLayout from "@/components/FlipLayout";
import Gimg from "@/components/GalleryImg";



export default function Home() {

  return (
      <div className="w-full bg-mainColor text-secondColor dark:bg-secondColor dark:text-mainColor ">
        <TransitionOut />
        <Landing />
        <Infos />
        <Marquee />
        <VideoStory />
        <Sponsorship />
        <FlipLayout />
        <Screen />
        <Screen />
        <Gimg />
        <Screen />
      </div>
  );
}
