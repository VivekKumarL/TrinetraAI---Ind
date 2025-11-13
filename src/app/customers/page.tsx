import CustomersHeader from "@/components/customers/CustomersHeader";
import CustomerStats from "@/components/customers/CustomerStats";
import CustomerTabs from "@/components/customers/CustomerTabs";
import Testimonials from "@/components/customers/Testimonials";

const demoTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The service was fantastic! Quick, reliable, and very easy to work with.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "CEO, Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Professional team and excellent customer support. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Anita Das",
    role: "Freelancer",
    quote:
      "I loved how the process was smooth and transparent throughout. Great job!",
    rating: 5,
  },
   {
    id: 4,
    name: "Rahul Mehta",
    role: "CEO, Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Professional team and excellent customer support. Highly recommended!",
    rating: 4,
  },
  {
    id: 5,
    name: "Anita Das",
    role: "Freelancer",
    quote:
      "I loved how the process was smooth and transparent throughout. Great job!",
    rating: 5,
  },
];



const Customers = () => {
  return (
    <div className="mx-auto max-w-md md:max-w-5xl">
      <div className="p-4 rounded-lg">
        <CustomersHeader />
      </div>
      <div className="p-4 rounded-lg">
        <Testimonials testimonials={demoTestimonials} />
      </div>
      <div className="">
        <CustomerStats />
      </div>
      <div className="">
        <CustomerTabs />
      </div>
    </div>
  );
};

export default Customers;
