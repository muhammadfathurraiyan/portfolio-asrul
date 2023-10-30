import { TypeAnimation } from "react-type-animation";
import Layer0 from "../assets/layer_0.png";
import Layer1 from "../assets/layer_1.png";
import Layer2 from "../assets/layer_2.png";
import Layer3 from "../assets/layer_3.png";
import Layer4 from "../assets/layer_4.png";
import Layer5 from "../assets/layer_5.png";
import Layer6 from "../assets/layer_6.png";
import {
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const Home = () => {
  return (
    <>
      <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-7xl text-[#E4AEA7] font-['Bebas_Neue']">
          Asrullah
        </h1>
        <TypeAnimation
          sequence={[
            "Hello I am Asrullah.",
            1000,
            "Hello I am a Runner.",
            1000,
            "Hello I am a Graphic Designer.",
            1000,
            "Hello I am an Engineer.",
            1000,
            "Welcome to my personal website!",
            500,
          ]}
          className="text-xl text-[#E4AEA7]"
          speed={50}
          repeat={Infinity}
        />
        <div className="flex items-center gap-2 mt-2">
          <a
            href="https://www.instagram.com/tuepat/"
            target="_blank"
            className="p-2 rounded-full bg-[#E4AEA7] hover:bg-[#2D112B] text-[#2D112B] hover:text-[#E4AEA7] duration-300"
          >
            <InstagramLogo weight="bold" size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/asrullah-asrul-767655262/"
            target="_blank"
            className="p-2 rounded-full bg-[#E4AEA7] hover:bg-[#2D112B] text-[#2D112B] hover:text-[#E4AEA7] duration-300"
          >
            <LinkedinLogo weight="bold" size={26} />
          </a>
          <a
            href="mailto:asrul010302@gmail.com"
            target="_blank"
            className="p-2 rounded-full bg-[#E4AEA7] hover:bg-[#2D112B] text-[#2D112B] hover:text-[#E4AEA7] duration-300"
          >
            <EnvelopeSimple weight="bold" size={26} />
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-0">
        <img className="block absolute bottom-0" src={Layer0} />
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-1">
        <img className="block absolute bottom-0" src={Layer1} />
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-2">
        <img className="block absolute bottom-0" src={Layer2} />
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-3">
        <img className="block absolute bottom-0" src={Layer3} />
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-4">
        <img className="block absolute bottom-0" src={Layer4} />
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-5">
        <img className="block absolute bottom-0 left-0" src={Layer5} />
      </div>
      <div className="absolute inset-x-0 max-lg:-inset-x-72 max-sm:-inset-x-96 inset-y-0 parallax-6">
        <img className="block absolute bottom-0" src={Layer6} />
      </div>
      <div className="bg-gradient-to-b to-[#E9503B] from-[#2D112B] absolute inset-x-0 inset-y-0 parallax-[translateZ(-600px)_scale(7)] -z-10" />
    </>
  );
};

export default Home;
