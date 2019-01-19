var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');
var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

var jsPaths = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/what-input/dist/what-input.js',
  'node_modules/foundation-sites/dist/js/foundation.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'js/Chart.min.js'
];

var bundle = require('gulp-bundle-assets');

gulp.task('scripts', function() {
    return gulp.src(jsPaths)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});


function sass() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
    ]))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
};


function serve() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("scss/*.scss", sass);
  gulp.watch("*.html").on('change', browserSync.reload);
}

gulp.task('sass', sass);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('default', gulp.series('sass', serve));
gulp.task('build', gulp.series(gulp.parallel('scripts', sass)));
