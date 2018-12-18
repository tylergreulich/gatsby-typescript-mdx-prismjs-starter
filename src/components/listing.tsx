import * as React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { PostsQueryData } from '../interfaces/PostsQuery.interface';

const Post = styled.article`
  box-shadow: 0 0.3rem 1rem rgba(25, 17, 34, 0.05);
  padding: 0.5rem;
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
  }

  .read-more {
    font-size: 0.8rem;
    text-decoration: underline;
    color: ${props => props.theme.colorPrimary};
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMdx }: PostsQueryData) =>
      allMdx.edges!.map(({ node }) => {
        const { path, title, date } = node.frontmatter;

        return (
          <Post key={path}>
            <Link to={`/posts${path}`}>
              <h2>{title}</h2>
            </Link>
            <p>{date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/posts${path}`} className="read-more">
              Read More
            </Link>
          </Post>
        );
      })
    }
  />
);

const LISTING_QUERY = graphql`
  query LISTING_QUERY {
    allMdx(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default Listing;
