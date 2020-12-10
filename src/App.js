import React from "react";
import "./style.css";
import { useQuery, gql } from "@apollo/client";
import Card from "./components/Card";

const ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 12) {
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

export default function App() {
  const { loading, error, data } = useQuery(ALL_POSTS);
  if (loading) return <p>Lade...</p>;
  if (error) return <p>Fehler:</p>;
  console.log("Daten: ", data);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {data && data.posts.nodes.map(p => <Card key={p.id} post={p} />)}
      </div>
    </div>
  );
}
