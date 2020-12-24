import { Component, OnDestroy, ElementRef, ViewChild } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { StopWatch } from "./stop-watch.interface";
import { TimeService } from "./timer.service";
import { take, tap} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  public stopwatch: StopWatch;
  public startBtn = true;
  private subscriptions: Subscription = new Subscription();
  private subscriptionsDbClick: Subscription = new Subscription();
  @ViewChild('dbClick') dbClick: ElementRef

  constructor(private timerService: TimeService) {
    this.subscriptions.add(
      this.timerService.stopWatch$.subscribe(
        (val: StopWatch) => (this.stopwatch = val)
      )
    );
  }

  public startCount(): void {
    this.startBtn = !this.startBtn;
    this.timerService.startCount();
  }

  public waitTimer(): void {
    this.timerService.stopTimer();
    this.startBtn = !this.startBtn;
  }

  public resetTimer(): void {
    this.timerService.resetTimer();
    this.timerService.startCount();
  }

  public stopTimer(): void {
    this.startBtn = true;
    this.timerService.resetTimer();
  }

  public dbClickCheck(): void {
    let lastClicked = 0;
    this.subscriptionsDbClick = fromEvent(this.dbClick.nativeElement, 'click').pipe(take(2), tap(v => {
      const timeNow = new Date().getTime();
      if (timeNow < (lastClicked + 300)) this.waitTimer();
      lastClicked = timeNow;
    })).subscribe();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.subscriptionsDbClick.unsubscribe();
  }
}
