// Sass configuration - start watch task by initializing 'gulp'
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default', function() {
    gulp.watch('sass/styles.scss', ['styles']);
});