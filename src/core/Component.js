import { DomListener } from '@core/DomListener';

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubs = [];

    this.prepare();
  }
  //Prepare component before init
  prepare() {}

  //Return component template
  toHTML() {
    return '';
  }

  //Emit listener about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  //Subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubs.push(unsub);
  }

  //Init component and add DOM listeners
  init() {
    this.initDOMListeners();
  }

  //Destroy DOM listeners
  destroy() {
    this.removeDOMListeners();
    this.unsubs.forEach(unsub => unsub());
  }
}
