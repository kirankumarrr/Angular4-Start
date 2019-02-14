import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Questions } from "../../models/Questions";
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  //@Output() hideShowBtn = new EventEmitter();

  @Input("question") question: Questions;

  @Output() OnParenHideShow = new EventEmitter<any>();
  ViewChildMessage: string = "This msg is form Child Question Component";
  constructor() {}
  ngOnInit() {}

  hideShowBtn(e, i) {
    this.OnParenHideShow.emit(e, i);
    console.log("hi");
  }
}
