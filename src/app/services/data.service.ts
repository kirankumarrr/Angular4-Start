import { Injectable } from "@angular/core";
import { Questions } from "../models/Questions";
@Injectable()
export class DataService {
  questions: Questions[];
  constructor() {
    this.questions = [
      {
        text: "What is your name ? ",
        answer: "My name is Beat",
        hide: true
      },
      {
        text: "What is your fav sport ? ",
        answer: "My  fav sport  is snooker",
        hide: true
      },
      {
        text: "What is your fav color  ? ",
        answer: "My fav color  is Blue",
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }
}
