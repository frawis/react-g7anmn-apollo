import React from "react";
import "./style.css";
import { useQuery, gql } from "@apollo/client";
import Card from "./components/Card";

const ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 10) {
      nodes {
        id
        slug
        title
        excerpt
        date
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
    <div className="post-grid">
      {data && data.posts.nodes.map(p => <Card key={p.id} post={p} />)}
    </div>
  );
}
