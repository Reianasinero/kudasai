var counter = 0;

    function count(){
        counter = counter +1;
        var audio = new Audio('yamete.mp3');
        var audio2 = new Audio('yeah boy.mp3');
        var audio3 = new Audio('spidey.mp3');
        var out = document.querySelector('h1');

            switch(counter){

                case 1:
                    out.innerHTML = 'Press it again senpai UwU';
                    break;
                case 2:
                    document.getElementById("gambare").style.display = "block";
                    out.innerHTML = 'More Senpai';
                    break;
                case 3:
                    out.innerHTML = 'More!!!';
                    break;
                case 4:
                    out.innerHTML = '1';
                    break;
                case 5:
                    out.innerHTML = '2';
                    break;
                case 6:
                    out.innerHTML = '3';
                    break;
                case 7:
                    out.innerHTML = '4';
                    break;
                case 8:
                    out.innerHTML = '5';
                    break;
                case 9:
                    out.innerHTML = '6';
                    break;
                case 10:
                    out.innerHTML = '7';
                    break;
                case 11:
                    out.innerHTML = '8';
                    break;
                case 12:
                    document.getElementById("gambare").style.display = "none";
                    document.getElementById("waifu").style.display = "block";
                    out.innerHTML = '9';
                    break;
                case 13:
                    out.innerHTML = "Don't stop Senpai!";
                    break;
                case 14:
                    out.innerHTML = "Keep pressing!";
                    break;
                case 15:
                    out.innerHTML = '12';
                    break;
                case 16:
                    out.innerHTML = '13';
                    break;
                case 17:
                    out.innerHTML = '14';
                    break;
                case 18:
                    out.innerHTML = '15';
                    break;
                case 19:
                    document.getElementById("waifu").style.display = "none";
                    out.innerHTML = '16';
                    break;
                case 20:
                    document.getElementById("yeah_boy").style.display = "block";
                    audio2.play();
                    out.innerHTML = '17';
                    break;
                case 21:
                    out.innerHTML = '18';
                    break;
                case 22:
                    out.innerHTML = '19';
                    break;
                case 23:
                    out.innerHTML = '20';
                    break;
                case 24:
                    out.innerHTML = '21';
                    break;
                case 25:
                    out.innerHTML = '22';
                    break;
                case 26:
                    document.getElementById("yeah_boy").style.display = "none";
                    document.getElementById("spiderman").style.display = "block";
                    audio3.play();
                    out.innerHTML = '23';
                    break;
                case 27:
                    out.innerHTML = '24';
                    break;
                case 28:
                    out.innerHTML = '25';
                    break;
                case 29:
                    out.innerHTML = '26';
                    break;
                case 30:
                    out.innerHTML = '27';
                    break;
                case 31:
                    document.getElementById("spiderman").style.display = "none";
                    out.innerHTML = '28';
                    break;
                case 32:
                    document.getElementById("uwu").style.display = "block";
                    out.innerHTML = '29';
                    break;
                case 33:
                    out.innerHTML = "Don't Stop Senpaiiii";
                    break;
                case 34:
                    out.innerHTML = 'More!';
                    break;
                case 35:
                    out.innerHTML = 'More!!';
                    break;
                case 36:
                    document.getElementById("uwu").style.display = "none";
                    out.innerHTML = 'More!!!';
                    break;
                case 37:
                    out.innerHTML = 'Hya';
                    break;
                case 38:
                    out.innerHTML = 'Hyaaa';
                    break;
                case 39:
                    out.innerHTML = 'Hyaaaaahhhhh';
                    break;
                case 40:
                    out.innerHTML = 'HYAAAHHHHHHHHHHHH!!!!';
                    break;
                case 41:
                    document.getElementById("wife").style.display = "block";
                    audio.play();
                    break;
                default:
                    document.getElementById("wife").style.display = "none";
                    out.innerHTML = 'Yamete Kudasai!';
                    return out = (counter=0);
            }}