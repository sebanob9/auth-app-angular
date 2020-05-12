import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styles: []
})
export class RestrictedComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe( profile => {
      console.log(profile);
    })
  }

}
