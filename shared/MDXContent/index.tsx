import React from "react";
import MDXHead from "@shared/MDXHead";
import Cover from "@shared/Cover";
// import Anchors from "@shared/Anchors";

import styles from "./Content.module.scss";

interface IMDXContentProps {
  children: any;
  meta: BLOG.IMeta;
}

function MDXContent({ children, meta }: IMDXContentProps) {
  // let anchors: Array<{
  //   url: string;
  //   text: React.ReactNode;
  //   depth: number;
  // }> = React.Children.toArray(children)
  //   .filter((child: any) => {
  //     if (child.props?.mdxType) {
  //       return ["h1", "h2", "h3", "Challenges", "Recap"].includes(
  //         child.props.mdxType
  //       );
  //     }
  //     return false;
  //   })
  //   .map((child: any) => {
  //     // if (child.props.mdxType === "Challenges") {
  //     //   return {
  //     //     url: "#challenges",
  //     //     depth: 0,
  //     //     text: "Challenges"
  //     //   };
  //     // }
  //     // if (child.props.mdxType === "Recap") {
  //     //   return {
  //     //     url: "#recap",
  //     //     depth: 0,
  //     //     text: "Recap"
  //     //   };
  //     // }
  //     return {
  //       url: "#" + child.props.id,
  //       depth:
  //         (child.props?.mdxType &&
  //           parseInt(child.props.mdxType.replace("h", ""), 0)) ??
  //         0,
  //       text: child.props.children
  //     };
  //   });

  return (
    <>
      <MDXHead meta={meta} />
      <Cover meta={meta} />
      {/* <Anchors anchors={anchors} /> */}
      <div className={styles.content}>
        <article>{children}</article>
      </div>
    </>
  );
}

export default MDXContent;
