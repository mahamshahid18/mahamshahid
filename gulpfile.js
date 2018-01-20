'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');

gulp.task('default', () => {
	gutil.log('Gulp is running!');
    gulp.watch('sass/*.scss',['styles']);
});

gulp.task('styles', () => {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/styles/'));
});