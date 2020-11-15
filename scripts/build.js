const rimraf = require("rimraf");
const shell = require("shelljs");

const start = () => {
  try {
    // 清除.next, docs 文件夹
    rimraf.sync("./.next");
    rimraf.sync("./docs");
  } catch (error) {
    // throw new Error("清除.next, docs 文件夹");
    shell.exit(1);
  }

  // next build
  if (shell.exec("next build && next export -o docs").code !== 0) {
    shell.echo("Error: next build failed");
    shell.exit(1);
  }
};

start();
