import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Questions } from "../../models/Questions";
@Component({
  selector: "add-question-list",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"]
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  // What is Output?
  // What is EventEmitter
  text: string;
  answer: string;
  constructor() {}
  ngOnInit() {}

  addQuestion() {
    this.questionAdded.emit({
      text: this.text,
      answer: this.answer,
      hide: true
    });
  }
}
