import type { Technology } from "../types/Technology";

interface Props {
  tech: Technology;
  isAdded: boolean;
  onAdd: () => void;
}

export default function TechnologyCard({ tech, isAdded, onAdd }: Props) {
  const badgeColors: Record<string, string> = {
    Popular: "bg-pink-100 text-pink-700",
    Versatile: "bg-blue-100 text-blue-700",
    BeginnerFriendly: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  const badgeClass = badgeColors[tech.badge] || "bg-gray-100 text-gray-700";

  return (
    <div className="border p-6 rounded-2xl shadow-sm bg-white flex flex-col gap-4 w-full">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain"
        />

        <span className={`text-xs px-3 py-1 rounded-full font-medium ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {tech.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
          {tech.category}
        </span>

        <span className="text-xs">{tech.difficulty}</span>

        <span className="font-semibold text-xs">★ {tech.rating}</span>
      </div>

      {/* Add Button */}
      <button
        disabled={isAdded}
        onClick={onAdd}
        className={`mt-2 w-full py-2 rounded-full text-sm font-medium ${
          isAdded
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-brand-gradient text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
