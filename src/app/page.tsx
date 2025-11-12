import CardList from "@/components/CardList";
import PlanningSection from "@/components/PlanningSection";
import HeroSection from "@/components/HeroSection";
import TodoList from "@/components/TodoList";
import CustomersSection from "@/components/ui/CustomersSection";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import WorkflowSection from "@/components/WorkFlowSection";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="mx-auto max-w-md md:max-w-5xl">
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"> */}

      <div className=" p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <HeroSection />
      </div>
      <div className=" p-4 rounded-lg">
        <CustomersSection />
      </div>
      <div className="mask-y-from-70% mask-y-to-90% bg-primary-foreground p-4 rounded-lg">
        <WhatMakesUsDifferent />
      </div>
      <div
        style={{
          background: `
      linear-gradient(to bottom,var(--primary-foreground) 20px, transparent 100px),
      var(--background)
    `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100px, 100% 100%",
        }}
      >
        <PlanningSection />
      </div>
      {/* <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"> */}
      <div
        style={{
          background: `
      linear-gradient(to bottom,var(--primary-foreground) 20px, transparent 100px),
      var(--background)
    `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100px, 100% 100%",
        }}
      >
        <WorkflowSection />
      </div>
      <div className=" p-4 rounded-lg">
        <Prefooter />
      </div>
    </div>
  );
};

export default Homepage;
