import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Questions } from "../../models/Questions";
@Component({
  selector: "app-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.css"]
})
export class QuestionListComponent implements OnInit {
  questions: Questions[];

  constructor(public dataServices: DataService) {}
  ngOnInit() {
    this.questions = this.dataServices.getQuestions();
  }

  OnParenHideShow(e, i) {
    console.log(e);
    //  console.log("INDEX" + i);
    this.questions[i].hide = !this.questions[i].hide;
  }
}
