import React from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "./components/Card";

const PostsQuery = gql`
  query GET_PAGINATED_POSTS(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          postId
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
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
};

const News = () => {
  const variables = {
    first: 12,
    last: null,
    after: null,
    before: null
  };
  const { data, error, loading, fetchMore } = useQuery(PostsQuery, {
    variables
  });
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (loading) return <p>Lade...</p>;

  const { posts } = data;
  return (
    <div className="px-4 pb-8">
      {posts && posts.edges ? (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4">
            {posts.edges.map(edge => {
              const { node } = edge;
              return <Card key={node.id} post={node} />;
            })}
          </div>
          <div className="flex items-center justify-center">
            {posts.pageInfo.hasPreviousPage ? (
              <button
                className="bg-yellow-600 px-4 py-2 text-white text-sm rounded-sm focus:outline-none mr-4"
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: null,
                      after: null,
                      last: 12,
                      before: posts.pageInfo.startCursor || null
                    },
                    updateQuery
                  });
                }}
              >
                Previous
              </button>
            ) : null}
            {posts.pageInfo.hasNextPage ? (
              <button
                className="bg-yellow-600 px-4 py-2 text-white text-sm rounded-sm focus:outline-none"
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: 12,
                      after: posts.pageInfo.endCursor || null,
                      last: null,
                      before: null
                    },
                    updateQuery
                  });
                }}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div>No posts were found...</div>
      )}
    </div>
  );
};

export default News;
