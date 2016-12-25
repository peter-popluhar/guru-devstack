module.exports = {
    port: 5002,
    paths: {
        src: {
            base: '',
            tpl: {
                base: './src/tpl',
                entry: './src/tpl/*.nunj',
                all: './src/tpl/**/*.nunj'
            },
            styles: {
                base: './src/styles',
                entry: './src/styles/main.scss',
                all: './src/styles/**/*.scss'
            },
            app: {
                base: './src/app',
                entry: './src/app/app.js',
                vendor: './src/app/vendor/**/*.js',
                all: './src/app/**/*.js'
            },
            img: './src/img/**/*.*',
            fonts: './src/fonts/**/*.*'
        },
        dist: {
            base: './dist',
            html: './dist/*.html',
            css: './dist/css',
            js: './dist/js',
            img: './dist/img',
            fonts: './dist/fonts'
        }
    },
    message: 'Local server address has been copied to your clipboard',
    names: {
        js: {
            src: 'app.js',
            min: 'app.min.js'
        }
    }
};
