const containsChck = document.querySelector('.js-button');
     
      console.log(containsChck.classList.contains('js-button'));

      function gamingTogle(type) {
        /*
        document.querySelector('.js-gaming').classList.remove('is-toggled');
        document.querySelector('.js-music').classList.remove('is-toggled');
        document.querySelector('.js-tech').classList.remove('is-toggled');
        */

        const buttonState = document.querySelector(`.js-${type}`);

        if (!(buttonState.classList.contains('is-toggled'))) {
          turnOffPrevious();
          buttonState.classList.add('is-toggled');
        } else {
          buttonState.classList.remove('is-toggled');
        }
      }
      function turnOffPrevious() {
        const previousMove = document.querySelector(`.is-toggled`);
        if (previousMove) {
          previousMove.classList.remove('is-toggled');
        }
      }

