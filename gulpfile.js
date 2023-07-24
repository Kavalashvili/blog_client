const gulp = require('gulp');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

const paths = {
  pugSrc: 'views/**/*.pug',
  htmlDest: 'views/',
};

// Compile Pug to HTML
function compilePug() {
  return gulp
    .src(paths.pugSrc)
    .pipe(plumber())
    .pipe(pug())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(paths.htmlDest));
}

// Watch for changes in Pug files
function watch() {
  gulp.watch(paths.pugSrc, compilePug);
}

exports.default = gulp.series(watch, compilePug);

