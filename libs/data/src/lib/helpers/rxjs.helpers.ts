import { Subject, Subscriber, Subscription } from 'rxjs';

/**
 * The QueueingSubject is very similar to the ReplaySubject but it only queues values when it has no observers. The queued values are delivered to the first observer that subscribes at which point the queue is reset.
 * @author https://github.com/insidewhy/queueing-subject
 */
export class QueueingSubject<T> extends Subject<T> {
  private queuedValues: T[] = [];

  next(value: T): void {
    if (this.closed || this.observers.length) super.next(value);
    else this.queuedValues.push(value);
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    // tslint:disable-next-line: deprecation
    const subscription = super._subscribe(subscriber);

    if (this.queuedValues.length) {
      this.queuedValues.forEach((value) => super.next(value));
      this.queuedValues.splice(0);
    }

    return subscription;
  }
}
