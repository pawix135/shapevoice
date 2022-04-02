import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProsSection from "./components/Sections/Pros";
import TrustedSection from "./components/Sections/Trusted";

const App = () => {
  return (
    <div className="App pb-[1000px]">
      <Navbar />
      <Hero />
      <TrustedSection />
      <ProsSection />
    </div>
  );
};

export default App;
