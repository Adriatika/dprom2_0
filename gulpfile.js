let gulp    		= require('gulp'),
	less    		= require('gulp-less'),
	browserSync 	= require('browser-sync'),
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify'),
	pipeline		= require('readable-stream').pipeline;
	csso 			= require('gulp-csso'),
	rename 			= require('gulp-rename'),
	del     		= require('del'),
	cache  			= require('gulp-cache'),
	imagemin 		= require('gulp-imagemin'),
	pngquant 		= require('imagemin-pngquant'),
	autoprefixer 	= require('gulp-autoprefixer'),
	source 			= require('gulp-sourcemaps');



gulp.task('css-libs', ['less'],function(){
	return gulp.src("app/precss/**/*.css")
	.pipe(source.init())
	.pipe(csso())
	.pipe(source.write('maps'))
	.pipe(gulp.dest("app"))
})

gulp.task('less', function(){
	return gulp.src('app/less/**/*.less')
	.pipe(less()).on('error', handleError)
	.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade:true
			})
	)
	.pipe(concat('style.css'))
	.pipe(gulp.dest('app/precss/'))
	.pipe(browserSync.reload({stream:true}))
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


gulp.task('scripts', function(){
	return pipeline(
	gulp.src("app/prejs/**/*.js"),
	uglify(),
	gulp.dest("app/js")
		);
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced:true,
		progressive:true,
		svgoPlugins:[{removeViewBox:false}],
		use:[pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch',['css-libs', 'scripts','browser-sync'], function(){
	gulp.watch('app/less/**/*.less', ['less','css-libs']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/prejs/**/*.js', browserSync.reload);
});

gulp.task('build',['clean', 'less', 'scripts', 'img'],function(){
	var buildCss = gulp.src(['app/css/style.css'])
	.pipe(gulp.dest('dist/css'));

	var  buildJs = gulp.src(['app/js/libs.min.js', 'app/js/common.js'])
	.pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
	
	var buildCss2 = gulp.src('app/*.css')
	.pipe(gulp.dest('dist'));
});