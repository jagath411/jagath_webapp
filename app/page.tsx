import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-black flex justify-center items-center flex-col 
      overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
