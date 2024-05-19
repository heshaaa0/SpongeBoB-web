import Header from "./components/HeroSection";
import Table from "./components/Table";
import Accordion from "./components/Accordian";
import HeroSection from "./components/HeroSection";
import Grid from "./components/Grid";
import FlexText from "./components/FllexText";
import DashboardOpt from "./components/DashboardOpt";


const Home =()=> {

  return (
    <main>
      <HeroSection/>
      <DashboardOpt/>
      <Grid/>
      <FlexText/>
      <Accordion/>
      {/* <Table/> */}
    </main>
  )
}

export default Home
