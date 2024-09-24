export default function SideNav({ categories }: { categories: string[] }) {
  return (
    <div className="sticky top-2">
      <h2 className="mt-4 mb-4 font-semibold text-3xl">Menu</h2>
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-2">
              <a
                href={`#${category.toLowerCase().replace(/ /g, "_")}`}
                className="text-gray-600 hover:text-gray-900"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
