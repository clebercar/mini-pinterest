var gulp       = require('gulp')
    uglify     = require("gulp-uglify") // minifica codigo
    browserify = require("gulp-browserify") //traz arquivos de forma organizada
    rename     = require("gulp-rename")
    concat     = require('gulp-concat'),
    gls       = require('gulp-live-server');

gulp.task("default",["browserify","all-css","watch","serve"]);


gulp.task("watch", function(){
    gulp.watch("./public/resources/js/**/*.js",["browserify"]);
    gulp.watch("./public/resources/css/**/*.css",["all-css"]);
});


gulp.task("browserify", function(){
    return gulp.src(["./public/resources/js/angular/app.js"])
    .pipe(browserify())
    // .pipe(uglify()) // minifica codigo
    .pipe(rename("app.js"))
    .pipe(gulp.dest("./public/assets/js/"))
});



gulp.task("all-css", function(){
    return gulp.src([
        "./public/resources/css/**/*.css",
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "./node_modules/angular-material/angular-material.min.css",
    ])
    .pipe(concat("app.css"))
    .pipe(gulp.dest("./public/assets/css"));
});

gulp.task('serve', function(){

    var server = gls.static('./public',8080);
    server.start();

    gulp.watch('public/assets/css/**/*.css', function(file){
        gls.notify.apply(server,[file])
    });
    gulp.watch('assets/js/**/*.js', function(file){
        gls.notify.apply(server,[file])
    });
    gulp.watch('public/index.html', function(file){
        gls.notify.apply(server,[file])
    });
  });



