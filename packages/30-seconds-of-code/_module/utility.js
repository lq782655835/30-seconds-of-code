/**
 * EXAMPLES
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // returns virtually instantly since it's now cached
console.log(anagramsCached.cache); // The cached anagrams map
 * @param {*} fn 
 */
export const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

/**
   * EXAMPLES
  const handler = data => console.log(data);
  const hub = createEventHub();
  let increment = 0;
  
  // Subscribe: listen for different types of events
  hub.on('message', handler);
  hub.on('message', () => console.log('Message event fired'));
  hub.on('increment', () => increment++);
  
  // Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
  hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
  hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
  hub.emit('increment'); // `increment` variable is now 1
  
  // Unsubscribe: stop a specific handler from listening to the 'message' event
  hub.off('message', handler);
   */
export const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});

/**
 * var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
 * @param {*} fn 
 * @param  {...any} args 
 */
export const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

/**
 * window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
 * @param {*} fn 
 * @param {*} wait 
 */
export const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function() {
      const context = this,
        args = arguments;
      if (!inThrottle) {
        fn.apply(context, args);
        lastTime = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(function() {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args);
            lastTime = Date.now();
          }
        }, Math.max(wait - (Date.now() - lastTime), 0));
      }
    };
  };
