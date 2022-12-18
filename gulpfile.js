'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.css = css;