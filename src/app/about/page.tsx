import AboutSection from "@/components/about/AboutSection";
import TeamMemberList from "@/components/about/TeamMemberList";
import TeamSection from "@/components/about/TeamSection";

const About = () => {
  return (
    <div className="mx-auto max-w-md md:max-w-5xl">
      <div className="p-4 rounded-lg">
        <AboutSection />
      </div>
      <div className="p-4 rounded-lg">
        <TeamSection />
      </div>
      <div className="">
        <TeamMemberList />
      </div> 
    </div>
  );
};

export default About;
