const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config');

const src = config.paths.src;
const dist = config.paths.dist;

gulp.task('img', () => {
    return gulp.src(src.img)
        .pipe(gulp.dest(dist.img))
        .pipe(browserSync.stream({ once: true }));
});
