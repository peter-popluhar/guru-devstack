const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config');

const src = config.paths.src;
const dist = config.paths.dist;

gulp.task('fonts', () => {
    return gulp.src(src.fonts)
        .pipe(gulp.dest(dist.fonts))
        .pipe(browserSync.stream({ once: true }));
});
