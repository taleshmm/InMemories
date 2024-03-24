import "@fontsource/roboto";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Description from "./components/Description";
import Footer from "./components/Footer";
import About from "./components/About";
import Forms from "./components/Forms";
import SecondBanner from "./components/SecondBanner";

export default function App() {
  return <main className="h-full w-full">
    <Header />
    <Banner />
    <About />
    <Description />
    <SecondBanner />
    <Forms />
    <Footer />
  </main>;
}
