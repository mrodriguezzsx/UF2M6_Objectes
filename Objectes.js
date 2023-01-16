var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1','UF2','UF3','UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1','alu2','alu13','alu4','alu5']
    };

//Ex 1
console.log("Ex1");
console.log(Asignatura.ref);
console.log("");

//Ex 2
console.log("Ex2");
console.log(Asignatura);
delete Asignatura.alumnes;
console.log(Asignatura);
console.log("");

//Ex 3
console.log("Ex3");
var length = Object.keys(Asignatura).length;
console.log(length);
console.log("");

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

//Ex 4
console.log("Ex4");
for(n=0;n < library.length;n++) {
    console.log(library[n].author + " - " + library[n].title)   
}
console.log("");

//Ex 5
console.log("Ex5");
class Cilindre {
    constructor(pi,r,h) {
        this.pi = pi;
        this.r = r;
        this.h = h;
    }

    calcV() {
        let V = this.pi * (this.r*2) * this.h;
        return V;
    }
}
var cilindro1 = new Cilindre(3.1416,30,45)
var cilindro2 = new Cilindre(3.1416,43,33)

console.log(cilindro1.calcV())
console.log(cilindro2.calcV())
console.log("");

//Ex 6
console.log("Ex6");
function Cercle(r) {
    this.r = r;
    this.color_contorn = "";
    this.color_fons = "";
    this.color_gruix = "";

}

Cercle.prototype.calcL = function() {
    let L = 2 * 3.1416 * this.r;
    return L;
}

Cercle.prototype.calcA = function() {
    let A = 3.1416 * (this.r * this.r);
    return A;
}

Cercle.prototype.cContorn = function() {
    return this.color_contorn;
}

Cercle.prototype.cFons = function() {
    return this.color_fons;
}

Cercle.prototype.cGruix = function() {
    return this.color_gruix;
}

var cercle = new Cercle(5)

console.log(cercle.calcL());
console.log(cercle.calcA());
console.log("");

//Ex 7
console.log(Object.keys(Cercle.prototype));