import Landing from "@/components/section/Landing";
import Infos from "@/components/section/Infos";
import VideoStory from "@/components/section/VideoStory";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/section/Gallery";
import Sponsorship from "@/components/Sponsortship";
import FlipLayout from "@/components/FlipLayout";
import Fun from "@/components/section/Fun";
import Screen from "@/components/section/Screen";
import TransitionOut from "@/components/TransitionOut";
import ImgGallery from "@/components/section/ImgGallery";
import Gimg from "@/components/section/Gimg";


export default function Home() {

  return (

    <>
    
    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor ">
    <TransitionOut />
      <Landing />
      <Infos />
      <Marquee />
      <VideoStory />
      <Gallery />
      <Sponsorship />
      <FlipLayout />
      <Marquee />
      <Fun />
  <Gimg />
    </div>
    </>

  );
}
