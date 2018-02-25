const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const gcmq = require('gulp-group-css-media-queries');

const config = {
    root: './src/',
    html: {
        src: 'index.html'
    },
    css: {
        watch: 'less/**/*.less',
        src: 'less/+(styles).less',
        dest: 'css'
    }
};

gulp.task('build', function () {
    gulp.src()
});