import React from "react";
import Container from "./Container";
import TitleText from "./ui/TitleText";
import FadeInOut from "./ui/fade-in-out";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Lim",
      role: "Busy Professional",
      rating: 5,
      quote:
        "With Glucobites, I can track my meals and glucose levels in minutes. It’s simple, accurate, and helps me stay on top of my health without disrupting my schedule.",
    },
    {
      name: "Alicia Gomez",
      role: "Type 2 Diabetic",
      rating: 4,
      quote:
        "Glucobites makes managing my condition so much easier. I get real-time insights, reminders, and daily summaries that help me feel in control of my health.",
    },
    {
      name: "Emily Tan",
      role: "Nutrition Coach",
      rating: 4,
      quote:
        "I recommend Glucobites to all my clients. It’s intuitive, customizable, and helps them make informed food choices based on real glucose data.",
    },
    {
      name: "David Ong",
      role: "Health-Conscious Parent",
      rating: 5,
      quote:
        "Glucobites gives me peace of mind. I can plan healthier meals for my family and keep track of how food affects our energy and wellness throughout the day.",
    },
    {
      name: "Rachel Lee",
      role: "University Student",
      rating: 5,
      quote:
        "Between lectures and late nights, it’s hard to eat right. Glucobites helps me make smarter food choices and keep my energy levels stable—even during exam season!",
    },
    {
      name: "Jonathan Teo",
      role: "Fitness Enthusiast",
      rating: 5,
      quote:
        "I use Glucobites to track how my diet affects performance and recovery. It’s been eye-opening to see how my glucose levels react to different foods.",
    },
  ];

  return (
    <section className="mt-40">
      <Container>
        <FadeInOut>
          <div className="bg-white mb-40 text-ink">
            <div className="flex justify-center items-center flex-col space-y-10">
              <p className="w-4/5  text-3xl text-center">
                " With Glucobites, I save hours each week tracking meals and
                glucose levels — giving me more time to focus on what truly
                matters: staying healthy, enjoying life, and making informed
                choices without the daily hassle. "
              </p>
              <div className="flex justify-center items-center gap-4">
                <img
                  className="size-16 rounded-full"
                  src="/public/testimonial-profile.jpg"
                  alt=""
                />
                <div className="font-medium text-xl dark:text-white">
                  <div>Amanda Lee</div>
                  <div className="text-base text-neutral-500 dark:text-neutral-400">
                    Joined since Jan 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOut>
        <FadeInOut>
          <TitleText
            title="Testimonials"
            description="Hear what our users have to say about their experience with us. These stories reflect the impact we've made — real people, real results."
          />
        </FadeInOut>
        <FadeInOut>
          <div className="columns-1 md:columns-3 auto-cols-auto gap-5 space-y-5 mt-10 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-100/50 rounded-xl px-6 py-5 flex flex-col mb-4 break-inside-avoid"
              >
                <div className="flex space-x-1 ">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <div className="p-1 rounded-sm bg-cyan">
                      <Star
                      color="#ffffff"
                        strokeWidth={1.2}
                        key={i}
                        className="fill-white size-4"
                      />
                     
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-ink/80 text-sm">{testimonial.quote}</p>
                <div className="flex gap-3 mt-5 items-center">
                 
                  <div className="flex flex-col leading-5">
                    <span className="font-medium">{testimonial.name}</span>
                    <span className="text-ink/50 text-sm">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInOut>

      </Container>
    </section>
  );
};

export default TestimonialsSection;
