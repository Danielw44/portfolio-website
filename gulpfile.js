var gulp = require('gulp'),
    notify = require('gulp-notify'),
    filter = require('gulp-filter'),
    sass = require('gulp-ruby-sass'),
    order = require('gulp-order'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    minify = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    ftp = require('vinyl-ftp'),
    rename = require('gulp-rename');


  //SCCS Compile
  gulp.task('sass', () =>
    sass('app/scss/*.scss', {style: 'expanded'})
      .on('error', sass.logError)
      .pipe(gulp.dest('app/css/'))
      .pipe(notify({message: 'SCCS task complete innit!'}))
);

  //minify CSS
  gulp.task('minify', function() {
    var cssFiles = ['app/css/*.css'];

    gulp.src(cssFiles)
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({message: 'Task complete innit!'}));
  });


  //JS Files
  gulp.task('uglify', function() {
    var jsFiles = ['app/js/*.js'];

    gulp.src(jsFiles)
    .pipe(order([
      'jquery.min.js',
      '*',
      'scripts.js'
    ]))
    .pipe(concat('main.js'))
    .pipe(uglify().on('error', util.log))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({message: 'Task complete innit!'}));
  });

  //FTP
  gulp.task( 'upload', function () {

    var conn = ftp.create( {
        host: 'danielworthington.co.uk',
        user: 'daniel@danielworthington.co.uk',
        pass: 'daniel_FTP!',
        log:      util.log
    } );

    var globs = [
        'dist/**'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );

} );

  //watch
  gulp.task('watch', function() {

    //css files
    gulp.watch('app/css/*', ['minify']);

    //js files
    gulp.watch('app/js/*', ['uglify']);

    //sass files
    gulp.watch('app/scss/**/*', ['sass']);
  });
