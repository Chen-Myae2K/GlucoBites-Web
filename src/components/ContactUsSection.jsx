import React from "react";
import Container from "./Container";
import TitleText from "./ui/TitleText";
import FadeInOut from "./ui/fade-in-out";

const ContactUsSection = () => {
  return (
    <FadeInOut>
      <section id="contact" className="pt-40 ">
        <Container>
          <TitleText
            title="Contact Us"
            description="Have a question or need help? We’re here for you! Our support team is ready to assist with any issue or inquiry—big or small."
          />
          <div className="mt-10 grid grid-cols-2 gap-16 mb-20">
            <div className="col-span-1 space-y-5 border bg-neutral-100/50  p-8 rounded-xl">
              <div className="flex flex-col space-y-2 border-b  pb-5">
                <div className="flex flex-col">
                  <p className="font-medium">Chat with us</p>
                  <p className="text-[15px] text-ink/60">
                    Connect with us for personalized support.
                  </p>
                </div>
                <p className="text-blue-500">support@sense.com</p>
              </div>
              <div className="flex flex-col space-y-2 border-b  pb-5">
                <div className="flex flex-col">
                  <p className="font-medium">Call us</p>
                  <p className="text-[15px] text-ink/60">
                    Need Help? Call Us Now!
                  </p>
                </div>
                <p className="text-blue-500 underline">+95 945 6789 120</p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col">
                  <p className="font-medium">Visit us</p>
                  <p className="text-[15px] text-ink/60">
                    We're Waiting to Welcome You!
                  </p>
                </div>
                <p className="text-blue-500 w-2/3">
                  789 Prestige Towers, Suite 405, Downtown District, Central
                  City, 12345
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center space-y-10">
              <form className="flex flex-col gap-8">
                <div>
                  <div>
                    <label
                      for="user_name"
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label
                    for="user_message"
                    className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    id="user_message"
                    className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                    placeholder="Write your message"
                    required
                  />
                </div>
                <button type="submit">
                  <div className="flex items-center font-medium justify-center px-5 py-2.5 text-center text-white bg-cyan hover:shadow-sm rounded-lg sm:w-auto">
                    Submit
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="">
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=SENSE%20Company,%20211%20Bukit%20Batok%20Street%20211+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/collections/personal-trackers/">
                Elderly trackers
              </a>
            </iframe>
          </div>
        </Container>
      </section>
    </FadeInOut>
  );
};

export default ContactUsSection;
