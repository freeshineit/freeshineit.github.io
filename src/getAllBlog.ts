import { IMeta } from "src/@types";

export interface ImportAll {
  link: string;
  module: {
    default: any;
    meta: IMeta;
  };
}

/**
 * 获取博客url 和 meta 数据
 * @param {*} r webpackContext
 *
 * @return {ImportAll}
 */
// @ts-ignore
function importAll(r) {
  // @ts-ignore
  return r.keys().map(fileName => {
    return {
      link: fileName.substr(1).replace(/(\.md|\.mdx)$/, ""),
      module: r(fileName)
    };
  });
}

/** 获取`pages/blog/` 下所有博客 */
export const blogs = importAll(
  // @ts-ignore
  require.context("./pages/blog/", true, /(\.md|\.mdx)$/)
);
