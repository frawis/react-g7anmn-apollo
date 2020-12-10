import React from "react";
import { Link } from "react-router-dom";
import Date from "./Date";

const CourseCard = ({ course }) => (
  <div className="flex flex-col flex-1 border-b border-dotted borde-gray-500">
    <div className="flex-1 flex flex-col justify-between">
      <div className="overflow-hidden">
        <img
          className="object-cover object-center h-52"
          src={course.uagb_featured_image_src.medium[0]}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-xl leading-6 mb-2">
          <Link
            to={{
              pathname: `/kurse/${course.id}`
            }}
          >
            {course.title.rendered}
          </Link>
        </h2>
        <div className="flex justify-between items-center">
          <div className="">
            <Date dateString={course.modified} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCard;
