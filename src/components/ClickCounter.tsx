import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Counter {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

export const BasicCounter: Counter = new Counter();

export const ClickCounter: React.FC<{ timer: Counter }> = observer(
  ({ timer }) => {
    return (
      <div className="Click-counter-container">
        <button className="Click-counter" onClick={() => timer.increase()}>
          :::{timer.secondsPassed}:::
        </button>
        <button className="Click-counter-reset" onClick={() => timer.reset()}>
          :::reset counts:::
        </button>
      </div>
    );
  }
);
