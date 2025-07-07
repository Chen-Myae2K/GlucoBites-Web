import { ArrowRight, Check } from "lucide-react";
import React from "react";
import Container from "./Container";
import TitleText from "./ui/TitleText";
import FadeInOut from "./ui/fade-in-out";

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Freemium",
      startingText: "",
      price: "$0",
      unit: "/month",
      description: "Get started for free.",
      features: [
        "Blood Glucose Tracker",
        "Calorie & Sugar Tracker",
        "Food Label Scanning",
        "View Community Post (Only Users)",
        "Add Post on Community",
        "Challenge Leaderboard",
        "View and Download Graphical Insight",
        "Glucose Reminder Alert",
      ],
      buttonText: "Start for Free",
      isHighlighted: true,
      bgColor: "bg-cyan",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Premium",
      startingText: "",
      price: "$14.98",
      unit: "/month",
      description: "Includes 30-day free trial.",
      features: [
        "Everything in Freemium, plus:",
        "AI Scanning",
        "View Community Post (Can see Healthcare Provider post)",
        "Perform QnA session with Healthcare Provider",
      ],
      buttonText: "Upgrade to Premium",
      isHighlighted: false,
      bgColor: "bg-gray-50",
      textColor: "text-ink",
    },
    {
      id: 3,
      title: "Premium Annual",
      startingText: "",
      price: "$149.80",
      unit: "/year",
      description: "Save 17% with annual billing.",
      features: [
        "Everything in Premium Monthly plan",
        "Priority customer support",
        "Early access to new features",
      ],
      buttonText: "Get Annual Plan",
      isHighlighted: false,
      bgColor: "bg-gray-50",
      textColor: "text-ink",
    },
  ];

  return (
    <section className="mt-40">
      <FadeInOut>
        <Container>
          <TitleText
            title="Pricing"
            description="Whether you're just getting started or need advanced features,affordable pricing to help you track smarter, live healthier. Join the glucose journey."
          />
          <div className="mt-10 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`${plan.bgColor} rounded-2xl p-7 border ${
                      plan.isHighlighted ? "" : "border-gray-200"
                    } flex flex-col`}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h3
                        className={`text-2xl font-semibold mb-4 ${plan.textColor}`}
                      >
                        {plan.title}
                      </h3>

                      <p
                        className={`text-base mb-2 ${
                          plan.isHighlighted ? "text-white" : "text-ink/80"
                        }`}
                      >
                        {plan.startingText}
                      </p>

                      <div className="mb-4">
                        <span
                          className={`text-4xl font-semibold ${plan.textColor}`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`text-lg ms-3 ${
                            plan.isHighlighted ? "text-white" : "text-ink/80"
                          }`}
                        >
                          {plan.unit}
                        </span>
                      </div>

                      <p
                        className={`text-base ${
                          plan.isHighlighted ? "text-white" : "text-ink/80"
                        }`}
                      >
                        {plan.description}
                      </p>

                      {plan.additionalInfo && (
                        <div className="mt-3">
                          {plan.additionalInfo.map((info, index) => (
                            <p
                              key={index}
                              className="text-sm text-gray-500 mb-1"
                            >
                              {info}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div
                      className={`border-t ${
                        plan.isHighlighted
                          ? "border-white border-dashed"
                          : "border-ink/80 border-dashed"
                      } mb-6`}
                    ></div>

                    {/* Features */}
                    <div className="flex-grow">
                      <ul className="space-y-4">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check
                              className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                                plan.isHighlighted
                                  ? "text-white"
                                  : "text-[#1ADB00]"
                              }`}
                            />
                            <span
                              className={`text-sm leading-relaxed ${
                                plan.isHighlighted
                                  ? "text-white"
                                  : "text-ink/80"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <button
                        className={`w-full flex items-center justify-center hover:underline underline-offset-2 gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                          plan.isHighlighted ? " text-white" : ""
                        }  `}
                      >
                        {plan.buttonText}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </FadeInOut>
    </section>
  );
};

export default PricingSection;
