import { series, parallel } from "gulp";
import babel from "gulp-babel";

function defaultTask(callback) {
  gulp.task("utils", () => {
    gulp.src("utils/test/");
  });
}

exports.default = defaultTask;
