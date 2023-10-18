let endirim = 20 //endirimin faizini buradan deyise bilerik
class Kitablar {
    constructor(kitab, yazar, il, qiymet) {
        this.kitab = kitab
        this.yazar = yazar
        this.il = il
        this.qiymet = qiymet
    }
    QiymetIste() {
        console.log("Endirimli qiymet ($) : " + (this.qiymet - (this.qiymet * endirim / 100)));
    }
}

let myKitablar = new Kitablar("The Adventures of Sherlock Holmes", "Arthur Conan Doyle", 1892, 200)
myKitablar.QiymetIste()
console.log("Kitab  : " + (myKitablar.kitab));
console.log("Yazar  : " + (myKitablar.yazar));
console.log("il : " + (myKitablar.il));
console.log("Qiymet ($) : " + (myKitablar.qiymet));
console.log("Endirim (%) : " + endirim);
