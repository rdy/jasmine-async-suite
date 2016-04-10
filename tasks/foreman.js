const gulp = require('gulp');
const {spawn} = require('child_process');

gulp.task('foreman', callback => {
  spawn('nf', ['start', '-j', 'Procfile'], {stdio: 'inherit', env: process.env})
    .on('close', callback);
});