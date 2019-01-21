const gulp = require('gulp')
const wathc = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    wathc('app/**/*.html', () => gulp.start('app.html'))
    wathc('app/**/*.css', () => gulp.start('app.css'))
    wathc('app/**/*.scss', () => gulp.start('app.css'))
    wathc('app/**/*.js', () => gulp.start('app.js'))
    wathc('app/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public')
        .pipe(webserver({
            livereload: true,
            port: 3000,
            open: true
        }))
})