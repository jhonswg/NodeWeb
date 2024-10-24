import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import avail from "@/assets/images/project/avail.png";
import crossfi from "@/assets/images/project/crossfi.png";
import empe from "@/assets/images/project/empe.png";
import initia from "@/assets/images/project/initia.png";
import selfchain from "@/assets/images/project/selfchain.png";
import symphony from "@/assets/images/project/symphony.png";
import tangle from "@/assets/images/project/tangle.png";
import warden from "@/assets/images/project/warden.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/Sectionheader";
import { Fragment } from "react";

interface Testimonial {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData; // pastikan StaticImageData diimpor
}

const testimonials: Testimonial[] = [
  {
    name: "Cross Finance",
    position: "Games Partnership Manager at Nuon",
    text: "I've had the pleasure of working alongside Galih for years and he has consistently demonstrated his unwavering dedication and hard work.",
    avatar: crossfi,
  },
  {
    name: "Avail",
    position: "Games Partnership Manager at Nuon",
    text: "I've had the pleasure of working alongside Galih for years and he has consistently demonstrated his unwavering dedication and hard work.",
    avatar: avail,
  },
  {
    name: "Empeiria",
    position: "Mobile Developer",
    text: "I highly recommend Galih as Frontend Developer. He is very passionate and has great vision for his work.",
    avatar: empe,
  },
  {
    name: "Initia",
    position: "Software Engineer | MSIG life",
    text: "Mas Galih and I work together at Sinarmas MSIG, He is a front end engineer, I'm not in doubt with his skills.",
    avatar: initia,
  },
  {
    name: "Self Chain",
    position: "Software Engineer | UI Developer",
    text: "Good working adaptation",
    avatar: selfchain,
  },
  {
    name: "Symphony",
    position: "Software Engineer | UI Developer",
    text: "Good working adaptation",
    avatar: symphony,
  },
  {
    name: "Tangle",
    position: "Software Engineer | UI Developer",
    text: "Good working adaptation",
    avatar: tangle,
  },
  {
    name: "Warden",
    position: "Software Engineer | UI Developer",
    text: "Good working adaptation",
    avatar: warden,
  },
];

// Mendefinisikan tipe untuk kunci testimonialLinks
type TestimonialNames =
  | "Initia"
  | "Self Chain"
  | "Warden"
  | "Cross Finance"
  | "Avail"
  | "Empeiria"
  | "Symphony"
  | "Tangle";

const testimonialLinks: Record<TestimonialNames, { services: string; stake: string }> = {
  Initia: {
    services: "https://services.jhonswg.com/Testnet/Initia",
    stake: "https://explorer.jhonswg.com/initia",
  },
  "Self Chain": {
    services: "https://services.jhonswg.com/Mainnet/Selfchain",
    stake: "https://explorer.jhonswg.com/selfchain",
  },
  Warden: {
    services: "https://services.jhonswg.com/warden/",
    stake: "https://explorer.jhonswg.com/warden",
  },
  "Cross Finance": {
    services: "https://services.jhonswg.com/Mainnet/CrossFi",
    stake: "https://explorer.jhonswg.com/crossfi",
  },
  Avail: {
    services: "#",
    stake: "#",
  },
  Empeiria: {
    services: "https://services.jhonswg.com/Testnet/Empeiria",
    stake: "https://explorer.jhonswg.com/empeiria",
  },
  Symphony: {
    services: "https://services.jhonswg.com/Testnet/Symphony",
    stake: "https://explorer.jhonswg.com/symphony",
  },
  Tangle: {
    services: "#",
    stake: "#",
  },
};

export const TestimonialsSection = () => {
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([]);

  const handleMainnetClick = () => {
    const mainnetTestimonials = testimonials.filter((testimonial) =>
      ["Tangle", "Self Chain", "Avail", "Cross Finance"].includes(testimonial.name)
    );
    setFilteredTestimonials(mainnetTestimonials);
  };

  const handleTestnetClick = () => {
    const testnetTestimonials = testimonials.filter((testimonial) =>
      ["Empeiria", "Symphony", "Initia", "Warden"].includes(testimonial.name)
    );
    setFilteredTestimonials(testnetTestimonials);
  };

  useEffect(() => {
    handleMainnetClick();
  }, []);

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Portofolio"
          title="Project"
          description="Recap project Testnet and Mainnet."
        />

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 font-mono ">
          <button
            className="rounded-xl bg-emerald-400 text-white py-2 px-6 rounded-lg hover:bg-sky-400 hover:text-black transition duration-300 mx-2"
            onClick={handleMainnetClick}
          >
            Mainnet
          </button>
          <button
            className="rounded-xl bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-sky-400 hover:text-black transition duration-300 mx-2"
            onClick={handleTestnetClick}
          >
            Testnet
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3 grid-cols-2 mt-10 items-strech ">
          {filteredTestimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-500 "
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 ">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="max-w-full max-h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold mt-6 text-base md:text-lg lg:text-xl">
                    {testimonial.name}
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-6">
                <a
                  href={testimonialLinks[testimonial.name as TestimonialNames]?.services} // Casting
                  className="rounded-xl py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services
                </a>
                <a
                  href={testimonialLinks[testimonial.name as TestimonialNames]?.stake} // Casting
                  className="rounded-xl py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stake us!
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
