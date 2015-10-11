import Base from 'gulpack-base';
import gulp from 'gulp';
import browserSync from 'browser-sync';


export default class extends Base {

  get defaults() {
    return this._.merge({}, super.defaults, {
      name: 'browsersync',
      opts: {},
    });
  }

  task() {
    let c = this.conf;
    (c.bs = browserSync.create()).init(c.opts);
  }

};
