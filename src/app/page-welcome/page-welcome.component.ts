import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageWelcomeService } from '../services/page-welcome.service'
import { Game } from '../Game';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.css']
})
export class PageWelcomeComponent implements OnInit {

  enter_name_by_user: string = "";
  click_join:   boolean = false;
  click_create: boolean = false;
  click_join_code: string = "";
  click_join_code_good: boolean = false;

  constructor(
    private service: PageWelcomeService,
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Welcome page');
  }

  ngOnInit(): void {
    this.enter_name_by_user = "";
    this.click_join   = false;
    this.click_create = false;
    this.click_join_code = "";
    this.click_join_code_good = false;
  }

  onKey_Name(event: any){
    this.enter_name_by_user = event.target.value;
    this.click_join = false;
    this.click_join_code_good = false;
  }

  onKey_JoinCode(event: any){
    this.click_join_code = event.target.value;
    if(this.click_join_code.length == 3){
      this.click_join_code_good = true;
    }else{
      this.click_join_code_good = false;
    }
  }

  clickJoin(): void {
    // click
    this.click_join = true;
    this.click_create = false;
  }

  clickCreate(): void {
     this.service.getGame(1)
       .subscribe((data: Game) => { console.log(data) });
    this.click_create = true;
    this.click_join = false;
    if(this.enter_name_by_user != ''){
      this.router.navigate(['pregame']);
    }
  }

  
}
