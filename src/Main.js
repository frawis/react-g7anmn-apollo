import React from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "./components/Card";
import CourseCard from "./components/CourseCard";
import useSWR from "swr";

const ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 4) {
      nodes {
        id
        slug
        title
        excerpt
        date
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function Main() {
  const { loading, data, fetchMore } = useQuery(ALL_POSTS, {
    variables: {
      offset: 0,
      limit: 8
    }
  });
  const { data: courses } = useSWR(
    "https://www.btc-echo.de/academy/wp-json/ldlms/v1/btca-kurse?orderby=date"
  );

  if (loading) return <p>Lade...</p>;

  console.log(courses);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data && data.posts.nodes.map(p => <Card key={p.id} post={p} />)}
      </div>
      <div className="py-10">
        <h3 className="font-bold text-2xl mb-2">Kurse</h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {courses && courses.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </div>
  );
}
