import React from "react";
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="text-gray-500 text-sm" dateTime={dateString}>
      {format(date, "dd.M.yyyy")}
    </time>
  );
}
