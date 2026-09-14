import { useEffect, useState } from "react";
import type { Technology } from "./types/Technology";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import TechnologyGridSkeleton from "./components/TechnologyGridSkeleton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON from public folder
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Failed to load technologies.json");
        setLoading(false);
      });
  }, []);

  // Add to stack
  const addToStack = (tech: Technology) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warning("This technology is already added!");
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack`);
  };

  // Remove single item
  const removeFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Removed from stack");
  };

  // Remove all
  const clearStack = () => {
    setStack([]);
    toast.error("All technologies removed");
  };

  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[2fr,1fr] gap-8">

        {/* TECHNOLOGY GRID */}
        <div>
          {loading ? (
            <TechnologyGridSkeleton />
          ) : (
            <TechnologyGrid
              technologies={technologies}
              stack={stack}
              addToStack={addToStack}
            />
          )}
        </div>

        {/* STACK SIDEBAR */}
        <StackSidebar
          stack={stack}
          removeFromStack={removeFromStack}
          clearStack={clearStack}
        />
      </main>

      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}
