import Nav from "../app/components/Nav";
import Title from "../app/components/Title";
import Work from "../app/components/Work";
import About from "../app/components/About";
import Contact from "../app/components/Contact";

export default function Home() {
  return (
    <div className="w-5/5 min-h-screen bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-900 overflow-x-hidden">
      <div className="flex flex-col items-center justify-start w-full h-screen" id="home">
        <Nav />
        <Title />
      </div>
      <div className="flex flex-wrap w-4/5 justify-center mx-auto min-h-screen overflow-auto" id="about">
        <About />
      </div>
      <div className="flex flex-wrap w-4/5 justify-center mx-auto min-h-screen overflow-auto" id="work">
        <Work />
      </div>
      <div className="flex flex-wrap w-4/5 justify-center mx-auto min-h-screen overflow-auto" id="contact">
        <Contact />
      </div>
    </div>
  );
}
