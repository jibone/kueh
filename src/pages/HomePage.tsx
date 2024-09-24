import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProductCard, ProductModal, SideNav } from "../components";
import { useQuery, gql } from "@apollo/client";
import type { Product } from "../components/ProductCard";

type Section = {
  id: string;
  label: string;
  disable?: boolean;
  items: Product[];
};

const GET_SECTIONS_WITH_ITEMS = gql`
  query GetSectionsWithItems {
    sections {
      id
      label
      items {
        id
        label
        description
        price
      }
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_SECTIONS_WITH_ITEMS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error.message} </div>;

  const categories = data.sections.map((section: Section) => section.label);
  const sections = data.sections.map((section: Section) => {
    // This is temporary code, just to show a disabled section and item.
    // In the real application the disable flag should come from the API.
    // The GraphQL API model made for the previous assignment does not
    // have disable for section and items.
    if (section.label === "Breakfast Specials") {
      const newSection = { ...section, disable: true };
      newSection.items = newSection.items.map((item) => {
        const newItem = { ...item, disable: true };
        return newItem;
      });
      return newSection;
    }
    if (section.label === "Main Courses") {
      const newSection = { ...section };
      newSection.items = newSection.items.map((item) => {
        if (item.label === "Omelette") {
          const newItem = { ...item, disable: true };
          return newItem;
        }
        return item;
      });
      return newSection;
    }
    return section;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-stone-100">
      <aside className="w-full md:w-64 p-6 bg-stone-100">
        <SideNav categories={categories} />
      </aside>
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6 mt-4">Kueh and Cakes</h2>
        {sections.map((section: Section) => {
          const disableStyle = "opacity-50";
          const enableStyle = "opacity-100";
          return (
            <div className={section.disable ? disableStyle : enableStyle}>
              <h2
                id={`${section.label.toLowerCase().replace(/ /g, "_")}`}
                className="mt-8 mb-4 text-xl font-semibold"
              >
                {section.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item: Product) => {
                  return (
                    <ProductCard
                      key={item.id}
                      product={item}
                      onClick={() => setSelectedProduct(item)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
