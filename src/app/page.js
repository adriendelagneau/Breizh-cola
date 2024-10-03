import FlipLayout from "@/components/FlipLayout";
import Marquee from "@/components/Marquee";
import Footer from "@/components/section/Footer";
import Fun from "@/components/section/Fun";
import Gallery from "@/components/section/Gallery";
import Infos from "@/components/section/Infos";
import Landing from "@/components/section/Landing";
import Screen from "@/components/section/Screen";
import VideoStory from "@/components/section/VideoStory";
import Sponsorship from "@/components/Sponsortship";


export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor ">
      <Landing />
      <Infos />
      <Marquee />
      <VideoStory />
      <Gallery />
      <Sponsorship />
      <FlipLayout />
      <Marquee />
      <Screen />
      <Footer />
    </div>

  );
}
