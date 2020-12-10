import React from "react";
import Date from "./Date";
import Categories from "./Categories";
import Tags from "./Tags";

const Card = ({ post }) => (
  <div className="flex flex-col flex-1 border-b border-dotted borde-gray-500">
    <div className="flex-1 flex flex-col justify-between">
      <div className="overflow-hidden">
        <img
          className="object-cover object-center h-52"
          src={post.featuredImage.node.sourceUrl}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-xl leading-6 mb-2">{post.title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Categories categories={post.categories} />
          </div>
          <div className="">
            <Date dateString={post.date} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
