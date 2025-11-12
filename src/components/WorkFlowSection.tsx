import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkflowCarousel from "./WorkflowCarousel";

const WorkflowSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      image: "/trinetraPoster2.png",
      title: "Slack Integration",
      desc: "Get instant project updates directly in your Slack channels.",
    },
    {
      image: "/trinetraPoster2.png",
      title: "GitHub Sync",
      desc: "Connect issues and pull requests seamlessly with your code.",
    },
    {
      image: "/trinetraPoster2.png",
      title: "Figma Plugin",
      desc: "Embed designs and get real-time feedback inside Linear.",
    },
    {
      image: "/trinetraPoster2.png",
      title: "Zapier Automations",
      desc: "Automate repetitive tasks and connect to 5000+ apps.",
    },
    {
      image: "/trinetraPoster2.png",
      title: "Notion Link",
      desc: "Link project docs and tasks from Notion easily.",
    },
    {
      image: "/trinetraPoster2.png",
      title: "Google Calendar",
      desc: "Sync deadlines and project schedules effortlessly.",
    },
    {
      image: "/trinetraPoster2.png",
      title: "Jira Importer",
      desc: "Migrate issues from Jira with one click.",
    },
  ];

  return (
    <section className="py-16 px-4 space-y-10 max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top 2-Part Layout */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
          {/* Left */}
          <div className="w-lg">
            <span className=" font-medium text-sm uppercase">
              Core Services
            </span>
            <h2 className="text-4xl font-semibold ">
              TrinetraAI Services – AI-Powered Cybersecurity Solutions
            </h2>
          </div>

          {/* Right */}
          <div className="text-white space-y-2 w-sm">
            <p className="text-gray-600 text-sm font-semibold">
              At TrinetraAI, we provide cutting-edge AI-driven security
              solutions to protect businesses, developers, and enterprises from
              modern cyber threats.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <WorkflowCarousel />
      </div>
    </section>
  );
};
export default WorkflowSection;
