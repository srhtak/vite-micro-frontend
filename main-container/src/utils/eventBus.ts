/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
interface EventBus {
  events: {
    [key: string]: Function[];
  };
  subscribe: (event: string, callback: Function) => () => void; // Unsubscribe fonksiyonu döndürmeli
  publish: (event: string, data?: any) => void;
}

const eventBus: EventBus = {
  events: {},
  subscribe(event: string, callback: Function) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);

    // Unsubscribe fonksiyonu döner
    return () => {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    };
  },
  publish(event: string, data?: any) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  },
};

(window as any).eventBus = eventBus;
