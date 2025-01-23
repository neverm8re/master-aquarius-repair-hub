import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { Shop } from "@/components/Shop";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Shop />
      <Contact />
    </div>
  );
};

export default Index;