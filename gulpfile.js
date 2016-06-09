var gulp = require('gulp');
var browserSync = require('browser-sync');


//watch index

var pub = {
  index: 'public/index.html',
  filter: 'public/filterquery.html',
  js: 'public/**/*.js'
};

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
  gulp.watch(pub.index).on('change', browserSync.reload);
  gulp.watch(pub.js).on('change', browserSync.reload);
  // gulp.watch(pub.filter).on('change', browserSync.reload);

});



gulp.task('default',['browser-sync']);
