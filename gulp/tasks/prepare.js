const gulp = require('gulp');
const argv = require('yargs').argv;
const runSequence = require('run-sequence');

const isDev = argv.dev || false;
//const devSequence = ['clean', ['tpl', 'styles', 'js', 'img', 'fonts']];
//const devSequence = ['clean', 'tpl'];
const devSequence = ['tpl', 'styles', 'js', 'img', 'fonts'];
const buildSequence = devSequence;
const sequence = isDev ? devSequence : buildSequence;

gulp.task('prepare', () => runSequence(...sequence));
