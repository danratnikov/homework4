var
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	concatCss = require('gulp-concat-css'),
	connect = require('gulp-connect'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	imageMin = require('gulp-imagemin');

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
	gulp.src('dev/stylus/*.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(gulp.dest('app/css'))
		.pipe(notify("<%= file.relative %> STYLUSED!"))
		.pipe(connect.reload());
});

gulp.task('font', function(){
	gulp.src('dev/font/**/*')
		.pipe(gulp.dest('app/font'))
		.pipe(notify("Fonts copied!"));
});

gulp.task('image', function(){
	gulp.src('dev/img/**/*')
		.pipe(imageMin())
		.pipe(gulp.dest('app/img'))
		.pipe(notify("Images copied!"));
});

gulp.task('js', function(){
	gulp.src('dev/js/**/*.js')
		.pipe(gulp.dest('app/js/app'))
		.pipe(notify("JavaScript moved!"));
});

gulp.task('build', ['jade-page', 'jade-template', 'stylus', 'image' ,'font', 'js'], function(){
	gulp.src('dev/vendor/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('app/css/vendor/bootstrap'));
	gulp.src('dev/vendor/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('app/js/vendor/jquery'));
	gulp.src('dev/vendor/angular/angular.min.js+(.*)')
		.pipe(gulp.dest('app/js/vendor/angular'));
	gulp.src('dev/vendor/angular-route/angular-route.min.js+(.*)')
		.pipe(gulp.dest('app/js/vendor/angular'));
	gulp.src('dev/vendor/jquery-file-upload/js/jquery.fileupload-angular.js')
		.pipe(gulp.dest('app/js/vendor/jquery-file-upload'));
});

gulp.task('watch', function(){
	gulp.watch('dev/jade/*.jade', ['jade-page']);
	gulp.watch('dev/jade/templates/*.jade', ['jade-template']);
	gulp.watch('dev/stylus/*.styl', ['stylus']);
	gulp.watch('dev/font/**/*', ['font']);
	gulp.watch('dev/img/**/*', ['image']);
	gulp.watch('dev/js/**/*', ['js']);
});

gulp.task('default', ['build', 'connect', 'watch']);