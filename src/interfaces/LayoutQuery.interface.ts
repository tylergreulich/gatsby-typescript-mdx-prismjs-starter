interface Site {
  siteMetadata: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export interface LayoutQueryData {
  site: Site;
};
