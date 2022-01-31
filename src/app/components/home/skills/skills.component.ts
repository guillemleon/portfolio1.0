import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  icons: any = this.getIconsList();

  constructor() { }

  ngOnInit(): void {
  }

  getIconsList(): any {
    return [
      {name: "react", src: '../../../assets/images/react.png'},
      {name: "react native", src: '../../../assets/images/react-native.png'},
      {name: "redux", src: '../../../assets/images/redux.png'},
      {name: "angular", src: '../../../assets/images/angular.png'},
      {name: "typescript", src: '../../../assets/images/typescript.png'},
      {name: "javascript", src: '../../../assets/images/javascript.png'},
      {name: "html", src: '../../../assets/images/html.png'},
      {name: "css", src: '../../../assets/images/css.png'},
      {name: "nodejs", src: '../../../assets/images/nodejs.png'},
      {name: "django", src: '../../../assets/images/django.png'},
      {name: "mysql", src: '../../../assets/images/mysql.png'},
      {name: "postgres", src: '../../../assets/images/postgres.png'},
      {name: "mongo", src: '../../../assets/images/mongo.png'},
    ]
  }

}
