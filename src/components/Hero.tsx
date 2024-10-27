import { Element } from "react-scroll";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <Element name="hero">
        <div className="container relative pt-40 sm:pt-52 flex max-sm:flex-col min-h-screen">
          <div className="relative pt-8 z-4 max-w-512 max-sm:px-4 max-sm:max-w-full max-lg:max-w-388">
            <p className="caption">
              Video Editing
            </p>
            <h1 className="h3 sm:h2 lg:h1 text-p4 uppercase">Amazingly simple</h1>
            <p className="w-full sm:pr-12 mt-8 mb-14 max-sm:body-2 sm:body-1">We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.</p>
            <Button icon="/images/zap.svg">try it now</Button>
          </div>
          <div className="max-sm:relative max-sm:h-[500px]">
            <img
              className="absolute -top-5 right-0 sm:top-0 sm:-right-36 md:-top-32 md:-right-64 size-full sm:size-960 md:size-1230"
              src="/images/hero.png"
              alt="xora"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
