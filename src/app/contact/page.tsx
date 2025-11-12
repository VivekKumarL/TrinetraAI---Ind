import ContactCards from "@/components/contact/ContactCards";
import ContactThirdSection from "@/components/contact/ContactThirdSection";
import { CircleCheck, ShieldCheck } from "lucide-react";

const Contact = () => {
  return (
    <section className="mx-auto max-w-md md:max-w-5xl">
      <div className="max-w-3xl mx-auto px-4 pb-4 pt-20">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Join Us in Shaping the Future
        </h1>
        <h2 className="max-w-md mx-auto font-semibold text-center text-lg text-muted-foreground mb-10">
          The digital landscape is evolving—and so are its risks. TrinetraAI is
          here to lead the charge with AI-driven solutions that redefine what’s
          possible. We’re not just protecting today; we’re building a safer
          tomorrow
        </h2>
      </div>
      <div className="p-4 rounded-lg">
        <ContactCards />
      </div>
      <div className="p-4 rounded-lg">
        <ContactThirdSection />
      </div>
      <div className="rounded-lg pb-10 text-blue-600 font-semibold">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck size={20} />
          <p className="text-center">Let’s secure the future, together.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
