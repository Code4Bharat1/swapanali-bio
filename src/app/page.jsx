import Field from "@/components/home/feild";
import Homepage from "@/components/home/home";
import Home1 from "@/components/home/home1";
import Hometest from "@/components/home/hometest";
import FieldMobile from "@/components/home/mobilefeild";
import HomepageMobile from "@/components/home/mobilehome";
import Home1Mobile from "@/components/home/mobilehome1";
import TestMobile from "@/components/home/mobilehometest";
import Footer from "@/components/layout/footer";
import FooterMobile from "@/components/layout/mobilefooter";
import NavbarMobile from "@/components/layout/mobilenavbar";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div>
    <div className="hidden md:block">
<Navbar/>
<Homepage/>
<Home1/>
<Field/>
<Hometest/>
<Footer/>
    </div>
    <div className="block md:hidden">
      <NavbarMobile/>
      <HomepageMobile/>
      <Home1Mobile/>
      <FieldMobile/>
      <TestMobile/>
      <FooterMobile/>
    </div>
    </div>
    
  );
}
