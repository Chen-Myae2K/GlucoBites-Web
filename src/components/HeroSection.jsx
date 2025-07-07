import React from "react";
import Container from "./Container";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ArrowRight } from "lucide-react";
import Heading from "./ui/Heading";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";
import FadeInOut from "./ui/fade-in-out";

const HeroSection = () => {
  return (
   
      <section id="home">
        {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      /> */}

        <Container>
          <div className="h-dvh bg-white z-20 flex flex-col justify-center items-center">
            <AnimatedGradientText className=" py-3 tracking-tighter text-[95px] leading-24 font-semibold w-5xl text-center ">
              Healthy Habits Start With Smart Tracking
            </AnimatedGradientText>
            <Heading>
              We design intuitive, intelligent tools to simplify food and
              glucose tracking—empowering you to make better choices and improve
              your daily health.
            </Heading>
            <div className="flex justify-center items-center gap-5">
              <a
                href="#"
                className="px-6 py-3 flex items-center gap-3 border-[1.5px] font-medium border-cyan rounded-sm text-cyan hover:bg-cyan/10 duration-200 mt-6"
              >
                All Features
                <ArrowRight strokeWidth={1.75} />
              </a>
              <a className="px-6 py-3 flex items-center gap-3 font-medium bg-cyan rounded-sm text-white hover:bg-sky-400 duration-200 mt-6">
                Watch Demo
                <ArrowRight strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    
  );
};

export default HeroSection;
