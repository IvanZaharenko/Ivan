( function () {
    'use strict';


    function duplicated() {

        let massif = [].slice.apply(arguments).sort();
        let main = [];

        for(let i = 0;i < massif.length;i++){
            if(massif[i] !== massif[i + 1] && massif[i] !== massif[i - 1]){
                main.push(i);
            }
        }

        let r = 0;

        for(let k = 0;k < main.length; k++){
            let ind = main[k] - r;
            massif.splice(ind,1);
            r++
        }

        for(let j = 0;j < massif.length; j++){
            let repeat = 0;
            for(let i = 0;i < massif.length; i++){
                if(massif[j] === massif[i]){
                    repeat++
                }
            }
             (repeat > 1 && repeat < 5)?console.log('число ' + massif[j]  + ' - повторяется ' + repeat + ' раза'):console.log
             ('число ' + massif[j]  + ' - повторяется ' + repeat + ' раз')

        }


    }

    duplicated(8,4,28,8,21,4,8,1,77,77,25,77,77,77);


}());
