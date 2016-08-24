const gulp = require('gulp'),
    del = require('del'),
    gulpif = require('gulp-if'),
    htmlhint = require('gulp-htmlhint'),
    jshint = require('gulp-jshint'),
    jsxhint = require('jshint-jsx').JSXHINT,
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    glob = require('glob').sync,
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    fs = require('fs'),
    properties = require('properties'),
    mobileTPList = require('./web/static/tp/mobile-tp-list'),
    pcTPList = require('./web/static/tp/pc-tp-list'),
    config = require('./config/config'),
    babelify = require('babelify');

const isProdMode = process.env.NODE_ENV === 'production';

// Views
gulp.task('views', function(){
  return gulp.src(['web/views/**/*.html'])
    .pipe(htmlhint({
      'doctype-first': false
    }))
    .pipe(htmlhint.failReporter())
    .pipe(gulp.dest('web/static/compiled/views'));
});

// Stylesheets
gulp.task('stylesheets', function(){
  return gulp.src(['web/stylesheets/**/*.less'])
    .pipe(less({
      paths: ['./web']
    }))
    .on('error', gutil.log)
    .pipe(autoprefixer({browsers: ['> 1% in CN'], cascade: false}))
    .pipe(gulpif(isProdMode, cleanCSS()))
    .pipe(gulp.dest('web/static/compiled/stylesheets'));
});

// Scripts
gulp.task('scripts', ['jshint'], function(){
  gulp.start('pc_scripts', 'isomorphic_components');
});

gulp.task('jshint', function() {
  return gulp.src(['./web/components/**/*.jsx', './web/components/**/*.js'])
    .pipe(jshint({linter: jsxhint}))
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

//PC Scripts
gulp.task('pc_scripts', ['pc_lib'], function() {
  return browserify({
    entries: ['./web/components/pc/reaclate.jsx'],
    transform: [babelify],
    extensions: ['.jsx']
  }).bundle()
    .pipe(source('reaclate.js'))
    .pipe(buffer())
    .pipe(gulpif(isProdMode, uglify({
      mangle: false
    })))
    .pipe(gulp.dest('./web/static/compiled/scripts/pc'));
});

gulp.task('isomorphic_components', function() {
  return browserify({
    entries: ['./web/components/pc/isomorphic/components.js'],
    transform: [babelify],
    extensions: ['.jsx'],
    standalone: 'WebComponents'
  }).bundle()
    .pipe(source('isomorphic_components.js'))
    .pipe(buffer())
    .pipe(gulpif(isProdMode, uglify({
      mangle: false
    })))
    .pipe(gulp.dest('./web/static/compiled/scripts/pc'));
});

// Third party libraries for PC script.
gulp.task('pc_lib', ['pc_lib_map'], function(){
  return gulp.src(pcTPList.lib)
    .pipe(gulpif(isProdMode, uglify({
      mangle: false,
      compress: true
    })))
    .pipe(concat('reaclate.lib.js'))
    .pipe(gulp.dest('web/static/compiled/scripts/pc'));
});
//Third party libraries map for PC script.
gulp.task('pc_lib_map', function(){
  var glob = gulp.src(pcTPList.map);
  if (!isProdMode) {
    return glob.pipe(gulp.dest('web/static/compiled/scripts/pc'));
  } else {
    return glob;
  }
});

// Clean
gulp.task('clean', function(cb) {
  del(['web/static/compiled/views', 'web/static/compiled/stylesheets', 'web/static/compiled/scripts']).then(function(){
    cb();
  });
});

// Default task
gulp.task('default', ['clean'], function() {
  config.load(function(obj) {
    var content = '//This file is dynamically generated by config.properties. Please do not change. \n';
    var constants = content + 'exports.API_X = "' + obj.API_X + '"';
    fs.writeFileSync('config/constants.js', constants);

    gulp.start('views', 'stylesheets', 'scripts');
  });
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['web/stylesheets/**/*.less'], ['stylesheets']);
  gulp.watch(['web/components/**/*.js', 'web/components/**/*.jsx'], ['scripts']);
  gulp.watch('web/views/*.html', ['views']);
});