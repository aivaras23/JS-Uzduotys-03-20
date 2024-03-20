/*
Garso signalas gali būti koduojamas sveikųjų skaičių seka. Šie skaičiai rodo signalo stiprumą periodiniais laiko intervalais. 
Signalą iškraipantis triukšmas šiek tiek pakeičia tų skaičių reikšmes. Signalo „išlyginimo“ metu triukšmas pašalinamas tokiu būdu: 
kiekvienas skaičius keičiamas jo ir dviejų jam gretimų skaičių vidurkiu (vidutinės reikšmės sveikąja dalimi). Pirmas ir paskutinis skaičiai 
atitinkamai keičiami dviejų pirmųjų arba dviejų paskutinių skaičių vidurkiu.Faile yra garso signalo seka, kuri sudaryta iš k nuoskaitų. 
Pirmojoje failo eilutėje yra pateikiami skaičius k. Toliau surašytos visa seka. Sudarykite programą kuri nufiltruotų šias sekas 
ir išvestų jas į ekraną. 

Pradiniai duomenys 4 7 3 5 8
*/

const fs = require('fs');
const data = fs.readFileSync('./js3/data.csv').toString().split(' ').map(Number);

const newArr = [];

for (let i = 0; i < data.length; i++) {
    let n = data[i];
    if (i > 0) {
        n += (data[i - 1]);
    }
    if (i < data.length - 1) {
        n += (data[i + 1])
    }
    newArr.push(n);
}

const result = [];
for (let i = 0; i < newArr.length; i++) {
    let avg = 0;

    if (i === 0 || i === newArr.length - 1) {
        avg = newArr[i] / 2
    }
    else {
        avg = newArr[i] / 3
    }
    result.push(Number(avg.toFixed(1)));
}

console.log(result.join(' '));

