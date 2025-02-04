import Header from "./components/landingComponent/header"; 
import HeroSection from "./components/landingComponent/section/HeroSection";
import FiturSection from "./components/landingComponent/section/FiturSection";
import BenefitSection from "./components/landingComponent/section/BenefitSection";
import Footer from "./components/landingComponent/footer";
export default function Home() {
    return(
    <div>
<Header/>
<HeroSection/>
<FiturSection/>
<BenefitSection/>
<Footer/>
</div>
)
}
