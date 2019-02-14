import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Questions } from "../../models/Questions";

import { QuestionComponent } from "../question/question.component";

@Component({
  selector: "app-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.css"]
})
export class QuestionListComponent implements OnInit, AfterViewInit {
  questions: Questions[];
  MessageReadfromChild: string = "Parent Msg will replace";
  @ViewChild(QuestionComponent) child;

  constructor(public dataServices: DataService) {}
  ngOnInit() {
    this.questions = this.dataServices.getQuestions();
  }
  ngAfterViewInit() {
    this.MessageReadfromChild = this.child.ViewChildMessage;
  }
  OnParenHideShow(e, i) {
    console.log(e);
    //  console.log("INDEX" + i);
    this.questions[i].hide = !this.questions[i].hide;
  }
}
