import React from "react";
import useSWR from "swr";
import CourseCard from "./components/CourseCard";

const Kurse = () => {
  const { data: courses, loading } = useSWR(
    "https://www.btc-echo.de/academy/wp-json/ldlms/v1/btca-kurse?orderby=date"
  );

  if (loading) return <p>Lade...</p>;
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-10">
        <h3 className="font-bold text-2xl mb-2">Kurse</h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {courses && courses.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </div>
  );
};

export default Kurse;
