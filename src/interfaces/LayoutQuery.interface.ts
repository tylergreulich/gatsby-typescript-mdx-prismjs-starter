interface Site {
  siteMetadata: {
    title: string;
    description: string | undefined;
    keywords: string | undefined;
  };
}

export interface LayoutQueryData {
  site: Site;
}
