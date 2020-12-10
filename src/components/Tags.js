import React from "react";

export default function Tags({ tags }) {
  return (
    <>
      <p className="mt-8 text-sm">
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        ))}
      </p>
    </>
  );
}
