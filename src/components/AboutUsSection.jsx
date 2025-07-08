import React from "react";
import TitleText from "./ui/TitleText";
import Container from "./Container";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ArrowUpRight } from "lucide-react";
import FadeInOut from "./ui/fade-in-out";

const AboutUsSection = () => {
  return (
    <FadeInOut>
      <Container>
        <div
          id="about"
          className="flex pt-40 flex-col space-y-10 justify-center items-start"
        >
          <TitleText
            title="About GlucoBites"
            description="Designed with simplicity and accuracy in mind, GlucoBites brings together powerful tools in one intuitive app."
          />

          <div className=" bg-neutral-100 rounded-3xl p-16  text-ink leading-relaxed">
            <p>
              GlucoBites was founded on a simple yet powerful idea: when people
              can effortlessly see the impact of every bite, they gain the
              confidence and motivation to transform their health. We blend
              nutritional science with intuitive technology to create a single,
              smart platform that turns the scattered tasks of calorie counting,
              sugar monitoring, and glucose logging into one seamless
              experience. From the moment you wake up, GlucoBites is ready to
              help you “Track Smarter, Live Healthier” by capturing your meals
              with a quick label scan, automatically calculating their calorie
              and sugar values, and pairing that data with your real‑time
              blood‑glucose readings.
            </p>
            <br />
            <p>
              Over time, these insights reveal patterns that empower you to
              fine‑tune your diet, stabilize energy levels, and prevent
              blood‑sugar spikes before they happen—whether you’re managing
              diabetes, pursuing weight‑loss goals, or simply aiming to feel
              better every day. Behind the app is a team of nutritionists, data
              scientists, and designers united by the belief that small,
              consistent choices drive big, lasting change; that’s why
              GlucoBites emphasizes gentle reminders, clear visual trends, and
              science‑backed tips rather than rigid rules or guilt. We are
              committed to safeguarding your data, supporting your wellness
              journey with evidence‑based features, and continuously
              innovating—so each update makes healthy living a little easier
              than the last. Join the GlucoBites community today, and let’s
              build a future where balanced nutrition and optimal glucose
              control fit naturally into your daily routine.
            </p>
            <div className="flex w-fit text-cyan mt-6 justify-between items-center gap-3">
              <a href="#">Learn more</a>
              <ArrowUpRight strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </Container>
    </FadeInOut>
  );
};

export default AboutUsSection;
