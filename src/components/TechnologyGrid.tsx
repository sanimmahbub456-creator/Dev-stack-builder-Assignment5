import type { Technology } from "../types/Technology";
import TechnologyCard from "./TechnologyCard";

interface Props {
  technologies: Technology[];
  stack: Technology[];
  addToStack: (tech: Technology) => void;
}

export default function TechnologyGrid({ technologies, stack, addToStack }: Props) {
  if (!technologies) return null; // prevents crash

  return (
    <div>

      {/* Title + Subtitle */}
      <h2 className="text-3xl font-bold text-gray-900">Explore the Technologies</h2>
      <p className="text-gray-600 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            isAdded={!!stack.find((item) => item.id === tech.id)}
            onAdd={() => addToStack(tech)}
          />
        ))}
      </div>
    </div>
  );
}
