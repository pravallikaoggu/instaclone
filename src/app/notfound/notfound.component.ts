import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    
  }
  logout(){
    this.router.navigate(['about']);
  }
  top(){
    this.router.navigate(['top']);
  }
  accounts(){
    this.router.navigate(['account']);
  }
  tags(){
    this.router.navigate(['tag']);
  }
  places(){
    this.router.navigate(['place']);
  }
}
