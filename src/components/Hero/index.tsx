import { useState } from "react";
import greenPlay from "../../assets/green_play.png";
import Button from "../Button";
import Input from "../Input";

const Hero: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <section className="flex flex-col md:flex-row container mx-auto pt-16 mt-16 md:mt-36">
      <div className="flex flex-col flex-1 md:flex-grow-[2] gap-10 px-5">
        <h1 className="text-3xl font-bold text-center md:text-left md:text-5xl lg:text-6xl lg:leading-[74px]">
          Managing business
          <br /> payments has never
          <br /> been easier
        </h1>
        <p className="text-[#64607D] text-base text-center md:text-left md:text-lg lg:text-xl">
          Yet bed any for travelling assistance indulgence
          <br /> unpleasing. Not thoughts all exercise blessing.
          <br /> Indulgence way everything.
        </p>
        <div className="flex flex-row gap-5 justify-center md:justify-start">
          <Button roundedFull className="text-white bg-[#3734A9]">
            Our Proccess
          </Button>
          <span className="flex flex-row items-center gap-3">
            <img src={greenPlay} alt="Tune in" />
            <span className="text-[#3734A9]">See How It Works</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 flex-1 items-center md:items-start ">
        <h3 className="font-bold text-xl text-[#3734A9] self-center md:place-self-start">
          Get Started Free
        </h3>
        <Input
          type="email"
          theme="white"
          border
          className="max-w-[300px]"
          placeholder="Email Address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          className="max-w-[300px]"
          border
          theme="white"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          orangeBg
          className="text-white w-full rounded-[5px] max-w-[300px]"
        >
          GET STARTED
        </Button>
      </div>
    </section>
  );
};

export default Hero;
