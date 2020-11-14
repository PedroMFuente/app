import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appCompras';

  ngOnInit(){
    firebase.initializeApp({
      authDomain: 'https://comprasapp-dc4fb.web.app'
    })
  }
}
