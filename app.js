
//0-1 bir arası verir math.random.
console.log(sayi);
var hak = 5;
var tahmin, sayac=0;
var sayi = Math.floor((Math.random()*10)+1);
console.log(sayi);
while (hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt("bir sayı giriniz"));

    if (sayi == tahmin){
    console.log(`tebrikler ${sayac} defada bildiniz`);
    console.log(`puan : ${100-(20)*(sayac-1)}`);
        break;
    }else if (sayi >  tahmin){
       console.log("yukarı");
    }else {
        console.log("aşağı");
    }
    if (hak == 0){
        console.log("hakkınız bitti")
    }
}
