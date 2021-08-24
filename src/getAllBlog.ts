import { IMeta } from "src/@types";
import dayjs from "dayjs";
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
  const bs = r.keys().map(fileName => {
    return {
      link: fileName.substr(1).replace(/(\.md|\.mdx)$/, ""),
      module: r(fileName)
    };
  });

  return bs.sort((a: ImportAll, b: ImportAll) => {
    if (a.module.meta.date == null && b.module.meta.date) {
      return -1;
    }

    // console.log(
    //   a.module.meta.date,
    //   b.module.meta.date,
    //   dayjs(a.module.meta.date + "") < dayjs(b.module.meta.date + "")
    // );

    return dayjs(a.module.meta.date) > dayjs(b.module.meta.date) ? -1 : 1;
  });
}

/** 获取`pages/blog/` 下所有博客 */
export const blogs = importAll(
  // @ts-ignore
  require.context("./pages/blog/", true, /(\.md|\.mdx)$/)
);
