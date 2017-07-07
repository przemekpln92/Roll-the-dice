var scores, roundScore, activePlayer, gamePlaying;
start();



document.querySelector('.btn-rzuc').addEventListener('click', function () {
    if (gamePlaying) {
        //1.Przypadkowa liczba

        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Ustawienie wyniku na kostce
        var diceDOM = document.querySelector('.kostka');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/dice-' + dice + '.png';

        //3. Zaktualizuj wynik rundy jeżeli wynik nie jest 1
        if (dice != 1) {
            //Dodaj do aktualnego wyniku
            roundScore += dice;
            document.querySelector('#aktualny-' + activePlayer).textContent = roundScore;
        } else {
            //Następny gracz
            nextPlayer();
        }

    };


});


document.querySelector('.btn-zachowaj').addEventListener('click', function () {
    if (gamePlaying) {
        //Dodaj aktualny wynik do głównego wyniku
        scores[activePlayer] += roundScore;

        //Zaktualizuj interfejs
        document.querySelector('#wynik-' + activePlayer).textContent = scores[activePlayer];

        //Sprawdź czy gracz wygrał grę

        if (scores[activePlayer] >= 100) {
            document.querySelector('#imie-' + activePlayer).textContent = 'Wygrany';
            document.querySelector('.kostka').style.display = 'none';
            document.querySelector('.panel-gracza-' + activePlayer).classList.remove('aktywny');
            document.querySelector('.panel-gracza-' + activePlayer).classList.add('wygrany');
            gamePlaying = false;
        } else {
            //Następny gracz

            nextPlayer();


        };
    };

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('aktualny-0').textContent = '0';
    document.getElementById('aktualny-1').textContent = '0';

    document.querySelector('.panel-gracza-0').classList.toggle('aktywny');
    document.querySelector('.panel-gracza-1').classList.toggle('aktywny');

    document.querySelector('.kostka').style.display = 'none';
};


document.querySelector('.btn-nowy').addEventListener('click', start);

function start() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.kostka').style.display = 'none';
    document.getElementById('wynik-0').textContent = '0';
    document.getElementById('wynik-1').textContent = '0';
    document.getElementById('aktualny-0').textContent = '0';
    document.getElementById('aktualny-1').textContent = '0';
    document.querySelector('#imie-0').textContent = 'Gracz 1';
    document.querySelector('#imie-1').textContent = 'Gracz 2';
    document.querySelector('.panel-gracza-0').classList.remove('wygrany');
    document.querySelector('.panel-gracza-1').classList.remove('wygrany');
    document.querySelector('.panel-gracza-0').classList.remove('aktywny');
    document.querySelector('.panel-gracza-1').classList.remove('aktywny');
    document.querySelector('.panel-gracza-0').classList.add('aktywny');
};






//document.querySelector('#aktualny-' + activePlayer).textContent = dice;
