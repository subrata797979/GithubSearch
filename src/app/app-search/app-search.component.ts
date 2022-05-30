import { Component, OnInit } from '@angular/core';
import { GithubService } from "../services/github.service";

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {

  public searchString: string = "";
  users!: any[];

  // extra
  public count: number = 1;
  public storeTime: number = 0;
  private storeDate: any;

  constructor(private githubService: GithubService) { }
  ngOnInit(): void {
  }

  public getUsers() {
    this.githubService.getData(this.searchString).subscribe((data) => {
      this.users = data.items;
      console.log(this.users)
    })
  }

  search() {
    const now = this.timeToMinutes(new Date());
    // console.log(now)
    // console.log(this.storeTime+60)
    if(this.count==8) {
      this.storeDate = new Date();
      this.storeTime = this.timeToMinutes(this.storeDate)
    }
    if(this.count>8) {
      if(this.storeTime!=0 && this.storeTime+60>now) {
        const timeDiff = this.storeTime+60-now;
        console.log("wait for "+timeDiff+" seconds as 8 request/minute allowed only");
      }
      else {
        this.count=1;
        this.getUsers()
      }
    }
    else {
      this.getUsers()
    }
    console.log(this.count)
    this.count++;
  }

  // extra
  timeToMinutes(time: any):number {
    const hours = (new Date(time)).getHours() * 60;
    const minutes = (new Date(time)).getMinutes()*60;
    const seconds = (new Date(time)).getSeconds();
    time = hours + minutes + seconds;
    return time;
  }
}
