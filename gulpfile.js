const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const uglify = require('gulp-uglifyes');
const imagemin = require('gulp-imagemin');

//Compile Sass
gulp.task('sass', () => {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
});

//Optimize images (here images are already small, so we could've skip this step, but for demonstration purposes I leave it here)
gulp.task('images', () => {
    return gulp.src(['src/images/*.jpg', 'src/images/*.png'])
        .pipe(imagemin([
            imagemin.jpegtran(),
            imagemin.gifsicle()
        ]))
        .pipe(gulp.dest('dist/images'))
});

//Minify JS 
gulp.task('scripts',  () => {
    return gulp.src('src/scripts/*.js')
        .pipe(uglify({ 
            mangle: false, 
            ecma: 6 
         }))
        .pipe(gulp.dest('dist/scripts'))
  });

//Watch JS
gulp.task('js-watch', ['scripts'],  (done) => {
    browserSync.reload;
    done();
});

//Copy HTML task
gulp.task('copyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

//Copy DB
gulp.task('copyDB', () => {
    return gulp.src('src/db.json')
        .pipe(gulp.dest('dist'))
});

//Watch and serve
gulp.task('serve', ['sass', 'copyHtml', 'scripts', 'images', 'copyDB'], () => {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']).on('change', browserSync.reload);
    gulp.watch('src/scripts', ['js-watch'])
});

gulp.task('default', ['serve']);