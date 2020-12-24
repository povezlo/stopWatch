import { Injectable } from "@angular/core";
import {
  Observable,
  timer,
  BehaviorSubject,
  Subscription
} from "rxjs";
import { map } from "rxjs/operators";
import { StopWatch } from "./stop-watch.interface";

@Injectable({
  providedIn: "root"
})
export class TimeService {
  private readonly initialTime = 0;

  private timer$: BehaviorSubject<number> = new BehaviorSubject(
    this.initialTime
  );
  private lastStopedTime: number = this.initialTime;
  private timerSubscription: Subscription = new Subscription();
  private isRunning: boolean = false;
  private intervalSec = 0;

  constructor() {}

  public get stopWatch$(): Observable<StopWatch> {
    return this.timer$.pipe(
      map((miliseconds: number): StopWatch => this.secondsToStopWatch(miliseconds))
    );
  }

  startCount(): void {
    if (this.isRunning) {
      return;
    }
    this.timerSubscription = timer(0, 100).pipe(map((value: number): number => value + this.lastStopedTime)).subscribe(this.timer$);
    this.isRunning = true;
  }

  stopTimer(): void {
    this.lastStopedTime = this.timer$.value;
    this.timerSubscription.unsubscribe();
    this.isRunning = false;
  }

  resetTimer(): void {
    this.timerSubscription.unsubscribe();
    this.lastStopedTime = this.initialTime;
    this.timer$.next(this.initialTime);
    this.isRunning = false;
  }

  private secondsToStopWatch(ms: number): StopWatch {
    let rest = ms % 10;
    let miliseconds = rest;
    if(ms % 10 === 0) this.intervalSec = Math.floor(ms / 10);
    const seconds = this.intervalSec % 60;
    const hours = Math.floor(ms / 36000);
    rest = ms % 36000;
    const minutes = Math.floor(rest / 600);

    return {
      hours: this.convertToNumberString(hours),
      minutes: this.convertToNumberString(minutes),
      seconds: this.convertToNumberString(seconds),
      ms: miliseconds + ''
    };
  }

  private convertToNumberString(value: number): string {
    return `${value < 10 ? "0" + value : value}`;
  }
}
