import { Component, OnInit, Input, Output } from "@angular/core";
import { Questions } from "../../models/Questions";
@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input("question") question: Questions;
  constructor() {}
  ngOnInit() {}
}
