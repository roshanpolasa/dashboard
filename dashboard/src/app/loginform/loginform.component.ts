import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import{RouterModule} from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginuse(e){
    e.preventDefault();
    console.log(e);

    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username == 'admin' && password == 'admin123'){
      this.router.navigate(['dashboard']);
    }

  }

}
