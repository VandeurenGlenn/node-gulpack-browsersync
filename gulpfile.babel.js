import gulp from 'gulp';
import gulpack from 'gulpack';


let glob = {
  del: 'dist/*',
  babel: 'src/**/*.es6',
};

gulpack.task('del', {
  glob: glob.del,
});

gulpack.task('babel', {
  glob: glob.babel,
  dest: 'dist',
  uglify: true,
});

gulp.task('watch', ['del', 'babel'], () => {
  gulp.watch(glob.babel, ['babel']);
});

gulp.task('default', ['watch']);
