// keep track of events
const events = new Map();

// export method to deal with events, setup, emit
export default {
  $on(eventName, fn) {
    // if the event is not in Map, create one and initialize it to empty array
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }
    // get the array for a given event and push in its array the function 
    // to listen for
    events.get(eventName).push(fn);
  },

  $off(eventName, fn) {
    throw { message: 'Not Implemented'};
  },
 
  $emit(eventName, data) {
    // if the event is in Map, get it and for each function 
    // execute it with that data
    if (events.has(eventName)) {
      events.get(eventName).forEach(fn => fn(data));
    }
  }
  
};
