export default function TechnologyGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border p-4 rounded-lg shadow-sm bg-white flex flex-col gap-3 animate-pulse"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>

            <div className="flex flex-col gap-2 w-full">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-2 bg-gray-200 rounded w-16"></div>
            </div>
          </div>

          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>

          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-10"></div>
          </div>

          <div className="h-8 bg-gray-200 rounded-full w-full mt-2"></div>
        </div>
      ))}
    </div>
  );
}
