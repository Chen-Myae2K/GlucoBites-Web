import React from "react";
import Container from "./Container";
import TitleText from "./ui/TitleText";

import {
  AudioWaveform,
  BellRing,
  Bubbles,
  MessageSquareQuote,
  ScanText,
  Shredder,
  SquareKanban,
  ToolCase,
  TrendingUpDown,
} from "lucide-react";
import FadeInOut from "./ui/fade-in-out";

const FeaturesSection = () => {
  const coreFeatList = [
    {
      id: 1,
      icon: <AudioWaveform strokeWidth={1.3} className="size-8" />,
      title: "Calorie & Sugar Tracker",
      description:
        "Log your food consumption and monitor your calories and sugar intake to manage your nutrition effectively.",
    },
    {
      id: 2,
      icon: <Bubbles strokeWidth={1.3} className="size-8" />,
      title: "Blood Glucose Tracker",
      description:
        "Track your blood glucose levels throughout the day by entering readings measured with your glucose meter.",
    },
    {
      id: 3,
      icon: <ScanText strokeWidth={1.3} className="size-8" />,
      title: "Food Label Scanning",
      description:
        "Scan food labels to quickly extract calorie and sugar information, making meal logging faster and more accurate.",
    },
  ];

  const otherFeatList = [
    {
      id: 1,
      icon: <BellRing strokeWidth={1.3} className="size-8" />,
      title: "Glucose Test Reminder",
      description:
        "Get timely reminders to test our blood glucose - especially after meal.",
    },
    {
      id: 2,
      icon: <TrendingUpDown strokeWidth={1.3} className="size-8" />,
      title: "Glucose Predictor",
      description:
        "Estimate future glucose levels based on your meals using smart learning from past calorie and glucose level.",
    },
    {
      id: 3,
      icon: <ToolCase strokeWidth={1.3} className="size-8" />,
      title: "Graphical Insight",
      description:
        "Visualize your blood glucose trends over time with simple charts that help you identify patterns and make informed health decision.",
    },
    {
      id: 4,
      icon: <Shredder strokeWidth={1.3} className="size-8" />,
      title: "Data Sharing Alerts",
      description:
        "Send weekly health reports to your healthcare providers with adjustable schedules and recipient options for monitoring.",
    },
    {
      id: 5,
      icon: <MessageSquareQuote strokeWidth={1.3} className="size-8" />,
      title: "Community Posts",
      description:
        "Inquiring, share wellness tips, and post recipes in a supportive forum and connect with others.",
    },
    {
      id: 6,
      icon: <SquareKanban strokeWidth={1.3} className="size-8" />,
      title: "Challenge Leaderboard",
      description:
        "Track your activity and have a friendly competition with others users and earn a profile badges.",
    },
  ];
  return (
    <section id="features" className="pt-40">
      <Container>
        <FadeInOut>
          <div className="flex flex-col space-y-10">
            <TitleText
              title="Core Features"
              description="Glucobites combines intelligent food logging, real-time glucose tracking, and personalized insights into one seamless experience."
            />
            <div className="grid grid-cols-3 gap-5">
              {coreFeatList.map((el) => (
                <div
                  key={el.id}
                  className="col-span-1 p-7 bg-gray-100 rounded-3xl shadow-xs"
                >
                  <div className=" text-ink flex flex-col space-y-5 ">
                    <div className="text-cyan">{el.icon}</div>
                    <p className="font-medium text-xl">{el.title}</p>
                    <p className="text-ink/80">{el.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOut>
        <FadeInOut>
          <div className="flex flex-col space-y-10 mt-40">
            <TitleText
              title="Other Features"
              description="From personalized insights to real-time monitoring, every tool is crafted to help you build healthier habits and take control of your daily journey."
            />
            <div className="grid grid-cols-3 gap-5">
              {otherFeatList.map((el) => (
                <div
                  key={el.id}
                  className="col-span-1 p-7 bg-gray-100 rounded-3xl shadow-xs"
                >
                  <div className=" text-ink flex flex-col space-y-5 ">
                    <div className="text-cyan">{el.icon}</div>
                    <p className="font-medium text-lg">{el.title}</p>
                    <p className="text-ink/80 text-sm">{el.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOut>
        <div className="mt-40"></div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
