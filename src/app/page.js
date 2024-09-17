import Landing from "@/components/section/Landing";
import Infos from "@/components/section/Infos";
import Gallery from "@/components/section/Gallery";
import Screen from "@/components/section/Screen";


export default function Home() {

  return (

    <div className="w-full bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor">
      <Landing />
      <Infos />
      <Gallery />
      <Screen /> 
    </div>

  );
}
