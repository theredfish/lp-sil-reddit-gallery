const gulp = require('gulp');
const babel = require('gulp-babel');

var paths = {
  scripts_src: './js/resources/**/*.js',
  srcipts_dest: './js/build/',
};

gulp.task('build', function() {
    return gulp.src(paths.scripts_src)
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest(paths.srcipts_dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts_src, ['build']);
});
