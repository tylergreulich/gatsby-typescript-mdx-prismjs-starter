export interface EdgeNode<T> {
  node: {
    frontmatter: { [P in keyof T]: T[P] };
    excerpt?: string;
  };
};
