'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("./public/css"));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', function() {
    console.log('Gulp funcionando...');
  });
  