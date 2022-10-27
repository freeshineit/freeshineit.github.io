export interface ComponentCommProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 元信息
 */
export interface IMeta {
  title: string; // "Blog Title",
  description: string; // "Blog Description",
  date: string; // "Blog Create Date",
  cover: string; // "Blog cover"
}
