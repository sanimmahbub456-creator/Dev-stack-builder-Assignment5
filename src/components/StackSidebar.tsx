import type { Technology } from "../types/Technology";
interface Props {
  stack: Technology[];
  removeFromStack: (id: string) => void;
  clearStack: () => void;
}

export default function StackSidebar({ stack, removeFromStack, clearStack }: Props) {
  const count = stack.length;

  return (
    <aside className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white w-full max-w-xs h-fit">

      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>

      {/* Selected Count */}
      <p className="text-gray-500 text-sm mt-1">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology${count > 1 ? "ies" : "y"} Selected`}
      </p>

      {/* Empty State */}
      {count === 0 ? (
        <div className="mt-3 border border-gray-200 rounded-lg p-3 text-gray-500 text-sm italic">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3 mt-4">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="p-3 bg-gray-100 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />

                <div className="leading-tight">
                  <p className="font-medium text-gray-800 text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.category}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromStack(tech.id)}
                className="text-red-500 text-sm font-medium"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={clearStack}
            className="mt-4 w-full px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}
