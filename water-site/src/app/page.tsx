import Image from "next/image";
import TopSection from "./components/TopSection/TopSection";
import Welcome from "./components/Welcome/Welcome";
import OurServices from "./components/OurServices/OurServices";
export default function Home() {
  return (
    <>
      <TopSection />
      <Welcome title="Welcome" />
      <Welcome title="Services" />
      <OurServices />
    </>
  );
}
