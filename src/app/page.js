import Landing from "@/components/section/Landing";
import Infos from "@/components/section/Infos";
import VideoStory from "@/components/section/VideoStory";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/section/Gallery";
import Sponsorship from "@/components/Sponsortship";
import FlipLayout from "@/components/FlipLayout";
import Fun from "@/components/section/Fun";
import Footer from "@/components/section/Footer";
import Screen from "@/components/section/Screen";


export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor ">
      <Landing />
      <Infos />
      <Marquee />
      <VideoStory />
      <Gallery />
      <Sponsorship />
      {/* <FlipLayout /> */}
      <Marquee />
      <Fun />
      <Screen />
      <Footer />
    </div>

  );
}
