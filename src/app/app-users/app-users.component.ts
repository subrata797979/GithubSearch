import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {

  @Input() users!: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
