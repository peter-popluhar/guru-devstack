const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const config = require('../config');

const src = config.paths.src;
const dist = config.paths.dist;
const names = config.names;

gulp.task('concateJs',() => {
    return gulp.src([src.app.entry, src.app.vendor])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dist.js))
        .pipe(browserSync.stream({ once: true }));
});
