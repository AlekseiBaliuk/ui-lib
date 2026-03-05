export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        UI Library
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        Explore a collection of reusable UI components. Browse the available
        variants and examples to see how each component works.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/components"
          className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          View Components
        </a>

        <a
          href="/docs"
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Documentation
        </a>
      </div>
    </div>
  );
}
