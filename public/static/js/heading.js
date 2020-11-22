(function () {
  let headingsObj = {};

  const headings = document.querySelectorAll("h2[id],h3[id]");

  for (let heading of headings) {
    // console.log(heading.tagName);
  }

  // function handleChange(mediaQueryListEvent) {
  //   if (mediaQueryListEvent.matches) {
  //     // 用户切换到了暗色(dark)主题
  //   } else {
  //     // 用户切换到了亮色(light)主题
  //   }
  // }

  // const mediaQueryListDark = window.matchMedia("(prefers-color-scheme: dark)");

  // // 添加主题变动监控事件
  // mediaQueryListDark.addEventListener(handleChange);

  // // 移除主题变动监控事件
  // mediaQueryListDark.removeEventListener(handleChange);

  // const mediaQueryListDark = window.matchMedia("(prefers-color-scheme: dark)");
  // if (mediaQueryListDark.matches) {
  //   // 系统当前是暗色(dark)主题
  //   console.log("系统当前是暗色(dark)主题");
  // }

  // const mediaQueryListLight = window.matchMedia(
  //   "(prefers-color-scheme: light)"
  // );
  // if (mediaQueryListLight.matches) {
  //   // 系统当前是亮色(light)主题
  // }
})();
