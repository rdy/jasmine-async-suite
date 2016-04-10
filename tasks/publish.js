const gulp = require('gulp');
const npm = require('npm');

gulp.task('publish', ['build'], done => {
  npm.load({}, error => {
    if (error) {
      done(error);
      return;
    }
    npm.commands.publish(['dist'], error => {
      if (error) {
        done(error);
        return;
      }
    });
  });
});