var gulp = require('gulp'),
    // concat = require('gulp-concat'),
    sync = require('browser-sync'),
    reload = sync.reload,
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function () {
    gulp.src("app/scripts/**/*.js")
        .pipe(gulp.dest("dist/scripts"))
        .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    gulp.src("images/**/*.*")
        .pipe(gulp.dest("dist/images"))
        .pipe(reload({stream: true}));
});

gulp.task('html', function () {
    gulp.src("app/views/**/*.html")
        .pipe(gulp.dest("dist/views"))
        .pipe(reload({stream: true}));
});

gulp.task('index', function () {
    gulp.src("app/index.html")
        .pipe(gulp.dest("dist"))
        .pipe(reload({stream: true}));
});

gulp.task('bower', function () {
    gulp.src("app/bower_components/**")
        .pipe(gulp.dest("dist/bower_components"))
        .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function () {
    sync({
        port: 3000,
        ui: {
            port: 8000
        },
        server: {
            baseDir: "./dist"
        }
    })
});

gulp.task('watch', function () {
    gulp.watch("app/styles/**/*.scss", ['styles']);
    gulp.watch("app/scripts/**/*.js", ['scripts']);
    gulp.watch("app/views/**", ['html']);
    gulp.watch("app/bower_components/**", ['bower']);
    gulp.watch("app/index.html", ['index']);
    gulp.watch("app/images/**/*.*", ['images']);
});

gulp.task('default', ['styles', 'scripts', 'images', 'html', 'index', 'bower', 'watch', 'browser-sync']);
