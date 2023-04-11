import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit{

  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    
  }

  Insto(){
    this.router.navigate(['about']);
  }
  Insto1(){
    this.router.navigate(['about']);
  }

}
