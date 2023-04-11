import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  phoneno: any;
  password: any;
  constructor(private router:Router){
    
  }

  ngOnInit(): void {
    
  }


 loginuser() {
  this.router.navigate(['contract']);
}
loginuser1() {
  this.router.navigate(['home']);
}
loginuser2() {
  this.router.navigate(['contact']);
}
facebook(){
  alert('not found');
  this.router.navigate(['about']);
}
}

