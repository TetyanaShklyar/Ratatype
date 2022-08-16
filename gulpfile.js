let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename');

gulp.task('html', function (done) {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
    done();
});
gulp.task('css', function (done) {
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.reload({ stream: true }))
    done();
});

gulp.task('script', function (done) {
    gulp.src(['src/js/*.js'])
        .pipe(gulp.dest('build/assets/js'))
        .pipe(browserSync.reload({ stream: true }))
    done();
});

gulp.task('webServer', function(done) {
    browserSync.init({
        server: "build/"
    });
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/scss/*.scss', gulp.series('css'));
    gulp.watch('src/js/*.js', gulp.series('script'));
    done();
});

gulp.task('default', gulp.series('html', 'css', 'script', 'webServer'));