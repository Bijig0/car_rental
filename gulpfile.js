// The require statement tells Node to look into the node_modules folder for a package
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
"use strict";

import { create } from "browser-sync";
import gulp from "gulp";
const { dest, parallel, series, src, watch } = gulp;
const browserSync = create();

import gulpSass from "gulp-sass";
import * as dartSass from "sass";
const sass = gulpSass(dartSass);

import { includePaths } from "node-bourbon";
const bourbon = includePaths;

import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import concat from "gulp-concat";
import cssmin from "gulp-cssmin";
import htmlreplace from "gulp-html-replace";
import jshint from "gulp-jshint";
import removeCode from "gulp-remove-code";
import rename from "gulp-rename";
import sassLint from "gulp-sass-lint";
import sourcemaps from "gulp-sourcemaps";

// ------------ DEVELOPMENT TASKS -------------

// COMPILE SCSS INTO CSS
function compileSCSS() {
  console.log("---------------COMPILING SCSS---------------");
  return src(["public/scss/*.scss"])
    .pipe(
      sass({
        outputStyle: "expanded",
        sourceComments: "map",
        sourceMap: "scss",
        includePaths: bourbon,
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("public/dist/css"))
    .pipe(browserSync.stream());
}

// COPY CUSTOM JS
function compileJS() {
  console.log("---------------COMPILE CUSTOM.JS---------------");
  return src(["public/js/app.js"])
    .pipe(babel())
    .pipe(dest("public/dist/js/"))
    .pipe(browserSync.stream());
}

// SASS LINT
function scssLint() {
  console.log("---------------SASS LINTING---------------");
  return src("src/assets/scss/**/*.scss")
    .pipe(
      sassLint({
        configFile: ".scss-lint.yml",
      })
    )
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

// JS LINTER
function jsLint() {
  return src("src/assets/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
}

// WATCH FILES
function watchFiles() {
  watch(["public/scss/**/*.scss", "public/scss/*.scss"], compileSCSS);
  watch("public/js/*.js", compileJS);
}

// BROWSER SYNC
function browserSyncInit(done) {
  console.log("---------------BROWSER SYNC---------------");
  browserSync.init({
    server: "./public/dist",
  });
  return done();
}

// ------------ PRODUCTION TASKS -------------

// MINIFY SCRIPTS
function minifyScripts() {
  console.log("---------------MINIFY SCRIPTS---------------");
  return (
    src("public/dist/js/app.js")
      // .pipe(removeLog())
      .pipe(
        removeCode({
          production: true,
        })
      )
      .pipe(rename("app.min.js"))
      .pipe(dest("public/dist/js"))
  );
}

// MINIFY CSS
function minifyCss() {
  console.log("---------------MINIFY CSS---------------");
  return src(["src/assets/vendor/css/**/*", "public/dist/css/main.css"])
    .pipe(sourcemaps.init())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(cssmin())
    .pipe(rename("main.min.css"))
    .pipe(dest("public/dist/css"));
}

// CHANGE TO MINIFIED VERSIONS OF JS AND CSS
// If you run the build comment second time then JS and CSS replace will not work.
// You need to put
//   <!-- build:<name> -->
//     Everything here will be replaced
//   <!-- endbuild -->
// More info: https://www.npmjs.com/package/gulp-html-replace
function renameSources() {
  console.log("---------------RENAMING SOURCES---------------");
  return src("dist/*.html")
    .pipe(
      htmlreplace({
        js: [
          "assets/js/vendors/jquery.min.js",
          "assets/js/vendors/popper.min.js",
          "assets/js/vendors/bootstrap.min.js",
          "assets/js/vendors/easing.min.js",
          "assets/js/vendors/swiper.min.js",
          "assets/js/vendors/massonry.min.js",
          "assets/js/vendor/bootstrap-slider.js",
          "assets/js/vendor/magnific-popup.js",
          "assets/js/vendor/waypoints.js",
          "assets/js/vendor/counterup.js",
          "assets/js/vendor/isotop.pkgd.min.js",
          "assets/js/app.js",
        ],
        css: "assets/css/main.min.css",
      })
    )
    .pipe(dest("dist/"));
}

// RUN ALL LINTERS
export const linters = series(scssLint, jsLint);

// DEV
export const dev = series(parallel(compileJS, compileSCSS), watchFiles);

// PRODUCTION VERSION
export const build = series(
  parallel(compileSCSS, compileJS),
  // parallel(minifyScripts, minifyCss),
  // renameSources,
  // browserSyncInit
);
