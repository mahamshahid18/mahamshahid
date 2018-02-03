'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');

gulp.task('default', () => {
	gutil.log('Gulp is running!');
    gulp.watch('sass/*.scss',['sass-to-css', 'minify-css']);
    gulp.watch('js/*.js',['minify-js']);
});

gulp.task('sass-to-css', () => {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('minify-js', () => {
    gulp.src('./js/*.js')
    	.pipe(rename({
    		suffix: '.min'
    	}))
        .pipe(uglify().on('error', function(err) {
        	gutil.log(gutil.colors.red('[Error]'), err.toString());
        }))
        .pipe(gulp.dest('./js/min/'));
});

gulp.task('minify-css', () => {
    gulp.src('./css/*.css')
    	.pipe(rename({
    		suffix: '.min'
    	}))
        .pipe(cssmin().on('error', function(err) {
        	gutil.log(gutil.colors.red('[Error]'), err.toString());
        }))
        .pipe(gulp.dest('./css/min/'));
});