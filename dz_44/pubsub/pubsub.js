class PubSub {
  subscribers = {};
  
  subscribe(event, listener) {
    const subscribers = this.subscribers;
    console.log(subscribers, 'subscribers');

    if (!subscribers[event]) {
      // if i first
      subscribers[event] = [listener];
    } else {
      // if i second
      subscribers[event].push(listener);
    }
  }

  // unsubscribe -- HT
  unsubscribe(event, listener) {
    const listeners = this.subscribers[event];

    if (!listeners || !listeners.length) {
      return;
    } 
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
      console.log('Deleted listener');
    }
  }

  publish(event, ...args) {
    const listeners = this.subscribers[event];

    if (!listeners || !listeners.length) {
      return;
    }

    listeners.forEach((listener) => listener.apply(null, args));
  }
}

// console.log('---starting module PubSub -----');
export default new PubSub();

const pubsub = new PubSub;

const listenerOne = () => {
  console.log('Listener one');
};

const listenerTwo = () => {
  console.log('Listener two');
};

const listenerThree = () => {
  console.log('Listener three');
};

pubsub.subscribe('event1', listenerOne);
pubsub.subscribe('event1', listenerTwo);
pubsub.subscribe('event1', listenerThree);

pubsub.unsubscribe('event1', listenerOne);   //перевiряю на видалення





