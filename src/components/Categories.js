import React from "react";

export default function Categories({ categories }) {
  return (
    <>
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <a
            key={index}
            className="ml-1 text-gray-500 hover:text-yellow-500 text-sm tracking-wide font-semibold uppercase"
            href={`/kategorie/${category.node.slug}`}
          >
            {category.node.name}
          </a>
        ))
      ) : (
        <a
          href={`/kategorie/${categories.edges.node.slug}`}
          className="ml-1 text-gray-500 hover:text-yellow-500 text-sm tracking-wide font-semibold uppercase"
        >
          {categories.edges.node.name}
        </a>
      )}
    </>
  );
}
