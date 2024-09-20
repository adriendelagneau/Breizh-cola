import Landing from "@/components/section/Landing";
import Infos from "@/components/section/Infos";
import Gallery from "@/components/section/Gallery";
import Screen from "@/components/section/Screen";
import SponsortsMusic from "@/components/section/SponsortsMusic";
import Marquee from "@/components/Marquee";
import SportsSponsorship from "@/components/SportsSponsortship";
import MusicSponsorship from "@/components/MusicSponsortship";
import Sponsorship from "@/components/Sponsortship";
import SponsortsSport from "@/components/section/SponsortsSport";
import Footer from "@/components/section/Footer";


export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor ">
      <Landing />
      <Infos />
      <Marquee />
      <Screen />
      <Gallery />
      <Sponsorship />
      <MusicSponsorship />
      <SponsortsMusic />
      <SportsSponsorship />
      <SponsortsSport />
      <Marquee />
      <Screen />
      <Footer />
    </div>

  );
}
