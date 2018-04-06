import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})

export class SallesComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
    const boxes = document.getElementsByClassName('image-box');

    Array.prototype.forEach.call(boxes, function (box) {
      const detail = box.getElementsByClassName('image-detail')[0];
      const img = box.getElementsByTagName('img')[0];
      const btn = box.getElementsByClassName('button')[0];

      box.addEventListener('mouseover', function () {
        detail.classList.add('hide');
        img.classList.add('detail-hover-state');
        btn.classList.add('show');
      });

      box.addEventListener('mouseout', function() {
        detail.classList.remove('hide');
        img.classList.remove('detail-hover-state');
        btn.classList.remove('show');
      });
    });

  }


}
