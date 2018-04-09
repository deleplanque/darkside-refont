import {Component, OnInit} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    $(document).ready(function() {
      $('.parallax').parallax();
    });

    const wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         false,
        callback:     function(box) {
        },
        scrollContainer: null
      }
    );
    wow.init();
  }

}
