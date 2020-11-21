import { IMeta } from "src/@types";
import MDXHead from "../MDXHead";

interface IMDXContenxProps {
  children: any;
  meta: IMeta;
}

function MDXContenx({ children, meta }: IMDXContenxProps) {
  return (
    <>
      <MDXHead meta={meta} />
      <article>{children}</article>
    </>
  );
}

export default MDXContenx;
