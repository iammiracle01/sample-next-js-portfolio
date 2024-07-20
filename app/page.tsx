import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ToastContainer position="top-center" autoClose={3000} />
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
