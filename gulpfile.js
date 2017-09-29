var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var del = require("del");
var autoprefixer = require("gulp-autoprefixer");

var nameProject = "app";

gulp.task('sass', function() {
    gulp.src(["!" + nameProject + "/lib/**/*", "./" + nameProject + "/**/*.+(scss|sass)"])
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest("./" + nameProject));
});

gulp.task("clean", function() {
    del.sync("dist");
})

gulp.task("scripts", function() {
    gulp.src([
            nameProject + "/lib/jquery/dist/jquery.min.js",
            nameProject + "/lib/material-design-lite/material.min.js"
        ])
        .pipe(concat("libs.min.js")) //объеденение в один файл, бандл
        .pipe(uglify()) //сжатие
        .pipe(gulp.dest("./" + nameProject + "/js")); //куда записывать файл
})


gulp.task("css", function() {
    gulp.src([
            "!" + nameProject + "/lib/**/*", nameProject + "/**/*.css",
        ])
        .pipe(concat("custom.css"))
        .pipe(cssnano()) //минификация
        .pipe(rename({ suffix: ".min" })) //переименование
        .pipe(gulp.dest("./" + nameProject + "/css")); //куда записывать файл
})
gulp.task("css-lib", function() {
    gulp.src([
            "!" + nameProject + "/lib/**/*.min.css", nameProject + "/lib/**/*.css"
        ])
        .pipe(concat("libs.css"))
        .pipe(cssnano()) //минификация
        .pipe(rename({ suffix: ".min" })) //переименование
        .pipe(gulp.dest("./" + nameProject + "/css")); //куда записывать файл
})

gulp.task("build", ["clean", "sass", "scripts", "css", "css-lib"], function() {
    gulp.src([
            nameProject + "/css/**/*.min.css"
        ])
        .pipe(gulp.dest("dist/css"));
    gulp.src([
            nameProject + "/js/**/*.min.js"
        ])
        .pipe(gulp.dest("dist/js"));
    gulp.src([
            nameProject + "/fonts/**/*"
        ])
        .pipe(gulp.dest("dist/fonts"));
})

gulp.task('sass:watch', ['scripts', "css"], function() {
    gulp.watch("./" + nameProject + "/**/*.+(scss|sass)", ["sass"]);
});