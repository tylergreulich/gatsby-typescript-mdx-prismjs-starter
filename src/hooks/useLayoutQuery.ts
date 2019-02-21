import { graphql, useStaticQuery } from 'gatsby';
import { LayoutQueryData } from '../interfaces/LayoutQuery.interface';

export const useLayoutQuery = () => {
  const { site } = useStaticQuery<LayoutQueryData>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          # change siteMetaData in 'gatsby-config.js'
          title
          description
          keywords
        }
      }
    }
  `);

  return { site };
};
