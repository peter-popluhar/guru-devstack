const gulp = require('gulp');
const argv = require('yargs').argv;
const gutil = require('gulp-util');
const browserSync = require('browser-sync');
const copyToClipboard = require('copy-paste').copy;
const config = require('../config');

const port = config.port;
const src = config.paths.src;
const dist = config.paths.dist;
const isDev = argv.dev || false;

gulp.task('serve', ['prepare'], () => {
    const baseDir = [src.base, dist.base];
    const message = config.message;

    browserSync({
        port,
        server: { baseDir },
        open: false
        },
            () => copyToClipboard(`localhost:${port}`,
            () => gutil.log(gutil.colors.green(message)))
    );

    const sanitize = pathname => pathname.replace(/^\.\//, '');
    const watch = (pathname, tasks) => gulp.watch(sanitize(pathname), tasks);

    watch(src.tpl.all, ['tpl']);
    watch(src.styles.all, ['styles']);
    //watch(src.app.all, ['js']);
    watch(src.img, ['img']);
    watch(src.fonts, ['fonts']);
});
