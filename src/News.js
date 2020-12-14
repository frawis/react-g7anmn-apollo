import React from "react";
import { useQuery, gql } from "@apollo/client";

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
const News = () => {
  const { loading, data, fetchMore } = useQuery(ALL_POSTS, {
    variables: {
      offset: 0,
      limit: 8
    }
  });
  if (loading) return <p>Lade...</p>;
  console.log(data);
  return (
    <div>
      <div className="">
        <h2>News</h2>
      </div>
    </div>
  );
};

export default News;
