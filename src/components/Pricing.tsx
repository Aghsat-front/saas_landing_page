import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";
import CountUp from "react-countup";
import Button from "./Button";

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    return ( 
        <section>
            <Element name="pricing">
                <div className="container">
                    <div className="flex flex-col items-center mt-32">
                        <h3 className="h3 max-lg:h4 max-md:h5 mb-14 text-center text-p4">Flexible pricing for <br /> teams of all sizes</h3>
                        <div className="relative flex justify-between w-full max-w-[350px] bg-s1/50 border-[3px] border-s4/25 p-2 rounded-3xl">
                            <div className={`absolute h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden g4 before:h-100 pricing-head_btn_before rounded-2xl shadow-400 top-2 left-2 ${isMonthly ? "translate-x-0" : "translate-x-full"} transition-all duration-500`}/>
                            <button className="pricing-head_btn text-p4" onClick={() => setIsMonthly(true)}>Monthly</button>
                            <button className="pricing-head_btn text-p4" onClick={() => setIsMonthly(false)}>Annual</button>
                        </div>
                    </div>
                    <div className="flex justify-center max-lg:flex-col max-lg:items-center items-start max-lg:gap-24 mt-40">
                        {
                            plans.map(({id, title, caption, features, icon, logo, priceMonthly, priceYearly},i) => {
                                return (
                                    <div key={i} className="relative w-full max-w-96 max-lg:rounded-20 lg:pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even border-2">
                                        {id === "1" && (
                                            <div className="g4 absolute h-[300px] sm:h-330 left-0 right-0 top-0 rounded-tl-3xl rounded-tr-3xl" />
                                        )}

                                        <div className="absolute -top-12 right-1/2 translate-x-1/2">
                                            <img src={logo} className={`${id === "1" ? "w-24 sm:w-32 h-24 sm:h-32" : "w-24 h-24"}`} alt="pricing-logo" />
                                        </div>
                                        <div className={`flex flex-col items-center pb-6 ${id === "1" ? "mt-20 sm:mt-28" : "mt-20"}`}>
                                            <div className={`${id === "1" && "relative z-10"} w-full flex flex-col items-center mb-8`}>
                                            <span className={`small-2 rounded-20 mb-6 border-2 px-4 py-1.5 uppercase ${id === "1" ? "border-p3 text-p3" : "border-p1 text-p1"}`}>{title}</span>
                                            <div className="flex gap-1">
                                                <div className={`font-inter text-[56px] font-bold leading-[84px] sm:h-num ${id === "1" ? "text-p3" : "text-p4"}`}>
                                                    <span>$</span>
                                                    <CountUp
                                                        start={priceYearly}
                                                        end={isMonthly ? priceMonthly : priceYearly}
                                                        duration={0.4}
                                                        useEasing={false}
                                                        preserveValue
                                                    />
                                                </div>
                                                <span className="small-1 self-end mb-6">/ MO</span>
                                            </div>
                                            <p className="body-1 pb-9 text-center text-p4">{caption}</p>
                                            </div>
                                            <ul className="flex flex-col gap-4">
                                                {
                                                    features.map((feature,i) => (
                                                        <li className="flex items-center gap-5" key={i}>
                                                            <img src={"/images/check.png"} alt="feature-icon" width={40} height={40}/>
                                                            <p>{feature}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="mt-12">
                                                <Button icon={icon}>get started</Button>
                                            </div>
                                            {
                                                id === "1" && <p className="small-compact mt-9 text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">Limited time offer</p>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Element>
        </section>
     );
}
 
export default Pricing;