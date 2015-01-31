var
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	concatCss = require('gulp-concat-css'),
	connect = require('gulp-connect'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	opn = require('opn');

gulp.task('connect', function(){
	connect.server({
		root: 'app/',
		port: 8000,
		livereload: true
	});
});

gulp.task('jade-page', function(){
	gulp.src('dev/jade/[^_]*.jade')
		.pipe(jade({pretty: true}))
		.on('error', console.log)
		.pipe(rename({dirname: ""}))
		.pipe(gulp.dest('app'))
		.pipe(notify("<%= file.relative %> JADED!"))
		.pipe(connect.reload());
});

gulp.task('jade-template', function(){
	gulp.src('dev/jade/templates/*.jade')
		.pipe(jade({pretty: true}))
		.on('error', console.log)
		.pipe(rename({extname: ".tmpl"}))
		.pipe(gulp.dest('app/template'))
		.pipe(notify("<%= file.relative %> JADED!"))
		.pipe(connect.reload());
});

gulp.task('stylus', function(){
	console.log('stylus');
	gulp.src('dev/stylus/*.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(gulp.dest('app/css'))
		.pipe(notify("<%= file.relative %> STYLUSED!"))
		.pipe(connect.reload());
});

gulp.task('build', ['jade-page', 'jade-template', 'stylus'], function(){
	gulp.src('dev/vendor/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('app/css/vendor/bootstrap'));
	gulp.src('dev/vendor/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('app/js/vendor/jquery'));
	gulp.src('dev/vendor/angular/angular.min.js')
		.pipe(gulp.dest('app/js/vendor/angular'));
});

gulp.task('watch', function(){
	gulp.watch('dev/jade/*.jade', ['jade-page']);
	gulp.watch('dev/jade/templates/*.jade', ['jade-template']);
	gulp.watch('dev/stylus/*.styl', ['stylus']);
});

gulp.task('default', ['build', 'connect', 'watch']);