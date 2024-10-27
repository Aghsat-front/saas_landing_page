import { Element } from "react-scroll";
import { details, features } from "../constants";
import Button from "./Button";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative lg:border-2 border-s3 rounded-7xl lg:g7 overflow-hidden lg:feature-after">
            <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-3 max-lg:py-4">
              {features.map(
                ({ id, icon, caption, title, text, button }) => (
                  <div className="px-5 md:px-10 lg:w-1/2 max-md:w-full max-lg:w-3/4 max-lg:g7 max-lg:pb-10 max-lg:rounded-[25px] max-lg:border-[2px] max-lg:border-s3" key={id}>
                    <div className="relative">
                      <div className="w-0.5 h-16 bg-s3 ml-14" />
                      <img
                        src={icon}
                        alt={title}
                        className="size-28 object-contain absolute left-0"
                      />
                    </div>
                    <p className="caption mt-40 mb-5 max-md:mb-6">{caption}</p>
                    <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                      {title}
                    </h2>
                    <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                      {text}
                    </p>
                    <Button icon={button.icon}>{button.title}</Button>
                  </div>
                )
              )}
            </div>
            <ul className="relative feature-horizontal-line flex justify-around items-center border-2 border-s3 rounded-7xl px-10 py-12 mt-10 max-lg:hidden">
              {
                details.map(({id, icon, title}) => (
                  <li className="feature-vertical-line relative z-10 w-36 flex flex-col items-center gap-4" key={id}>
                    <div className="relative z-10 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 p-2">
                      <img src={icon} width={70} height={70} alt="" />
                    </div>
                    <p className="base-small uppercase text-center">{title}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
