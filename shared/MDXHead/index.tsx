import React, { FC } from "react";
import Head from "next/head";

interface IMDXHeadProps {
  meta: BLOG.IMeta;
}

const MDXHead: FC<IMDXHeadProps> = ({ meta }) => (
  <>
    <Head>
      <title>{`${meta.title} (ShineShao)`}</title>
      <meta name="description" content={`${meta.description} ShineShao 博客`} />
      <meta name="keywords" content="ShineShao freeshineit Next.js Blog " />
    </Head>
  </>
);

export default MDXHead;
