import { DomListener } from '@core/DomListener';

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.store = options.store;
    this.unsubs = [];
    this.storeSub = null;

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

  $dispatch(action) {
    this.store.dispatch(action);
  }

  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn);
  }

  //Init component and add DOM listeners
  init() {
    this.initDOMListeners();
  }

  //Destroy DOM listeners
  destroy() {
    this.removeDOMListeners();
    this.unsubs.forEach(unsub => unsub());
    this.storeSub.unsubscribe();
  }
}
