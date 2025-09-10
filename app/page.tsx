import About from "@/components/About"
import Works from "@/components/Works";
import Languages from "@/components/Languages";
import Events from "@/components/Events";
// import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <div className="space-y-8">
      <About />
      <Works />
      <Languages />
      <Events />
      {/* <ContactForm /> */}
    </div>
  );
}
