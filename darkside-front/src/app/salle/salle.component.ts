import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.writeText();
  }


  writeText(): void {
    let openComment, styles, time, writeStyleChar, writeStyles;

    styles = 'Depuis aussi loin qu\'il puisse s \'en souvenir "Von Bron", comme il aime se faire appeler, déteste les humains. ' +
      'Personne ne sait vraiment qui est cet homme, qui enchaîne des meurtres plus sanglants les uns que les autres.' +
      ' A chaque fois, la police retrouve des cadavres mutilés, qui ont subis d\'insuportables sévices. Il a la particularité de ' +
      'laisser une chance à ses victimes: s\'ils arrivent à sortir de son antre par eux mêmes, il leur laisse la vie sauve. /' +
      'Le misanthrope sait cependant se faire discret. Aucun indice n\'a jamais pu être récolté sur une scène de crime. ' +
      'Les témoignages des maigres survivants de son jeu morbide n\'ont pas non plus permis d\'identifier son repaire, ni sa ' +
      'méthode pour kidnapper ses proies. /Vous faites partie d\'un groupe de personnes capturées par le psychopate. Vous ' +
      'allez devoir suivre ses règles et vous ' +
      'armer de courage pour espérer revoir la lumière du jour ! *';

    openComment = false;

    writeStyleChar = function(which) {
      // begin wrapping open comments
      if (which === '/') {
        styles = $('#synopsis').html() + '<br><br>';
      } else if (which === '*') {
        $('#btn-book-room').removeClass('hidden');
      } else {
        styles = $('#synopsis').html() + which;
      }
      $('#synopsis').html(styles);
      return $('#style-tag').append(which);
    };

    writeStyles = function(message, index, interval) {
      let pre;
      if (index < message.length) {
        pre = document.getElementById('synopsis');
        pre.scrollTop = pre.scrollHeight;
        writeStyleChar(message[index++]);
        return setTimeout((function() {
          return writeStyles(message, index, interval);
        }), interval);
      }
    };

    // faster typing in small iframe on codepen homepage
    // time = window.innerWidth <= 578 ? 4 : 16;
    time = 15;


    // starting it off
    writeStyles(styles, 0, time);
  }

}
