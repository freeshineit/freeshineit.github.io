import dayjs from "dayjs";
export interface ImportAll {
  link: string;
  module: {
    default: any;
    meta: BLOG.IMeta;
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
  // console.log(r.keys());

  const fileKeys = r.keys().filter((p: string) => !/^src/.test(p));

  // @ts-ignore
  const bs = fileKeys.map(fileName => {
    return {
      // fileName.substr(1) 移除路径中第一个字符`.`
      link: fileName.substr(1).replace(/(\.md|\.mdx)$/, ""),
      module: r(fileName)
    };
  });

  // 按时间排序
  return bs.sort((a: ImportAll, b: ImportAll) => {
    if (a.module.meta?.date == null && b.module.meta?.date) {
      return -1;
    }
    return dayjs(a.module.meta.date) > dayjs(b.module.meta.date) ? -1 : 1;
  });
}

/** 获取`pages/blog/` 下所有博客 */
export const blogs = importAll(
  // @ts-ignore
  require.context("./pages/blog/", true, /(\.md|\.mdx)$/)
);
