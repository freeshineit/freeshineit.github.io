export interface CommponentCommProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface IMeta {
  title: string; // "Blog Title",
  description: string; // "Blog Description",
  date: string; // "Blog Create Date",
  cover?: string; // "Blog cover"
}
