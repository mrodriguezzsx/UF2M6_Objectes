Introducció
A classe hem estat veient la teoria d'expressions regulars:

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
Desenvolupament
Tasques a realitzar
0. Crea l'objecte Assignatura:

var Asignatura = {
ref: 'BBDD',
nom: 'Bases de Dades',
hores: 180,
UF: ['UF1','UF2','UF3','UF4'],
professor: 'Pep Parés',
alumnes: ['alu1','alu2','alu13','alu4','alu5']
};
1. Amb JavaScript, llista les propietats de l'objecte Assignatura.

2. Amb JavaScript, esborra la propietat alumnes de l'objecte Assignatura. Printa l'objecte abans i després de l'esborrat.

3. Amb Javascript, digues la longitud de l'objecte (és a dir, el número de propietats que té).

4. Amb Javascript, mostra la informació de l'autor i el títol de tots els llibres:

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
5. Amb Javascript, utilitzant objectes (funció constructora), troba el volum d'un cilindre amb 4 decimals. El volum d'un cilindre de radi r i altura h és: V = π*r^2*h


6. Amb Javascript, crea l'objecte Cercle. Com a paràmetre d'entrada tenim el radi. Crea dos mètodes per calcular el perímetre i l'àrea. A part de la propietat radi, crea també les propietats color_contorn, color_fons, gruix_contorn.

7. Amb Javascript, crea una funció per printar tots els mètodes d'un objecte Javascript. Aplica-ho per exemple a l'objecte Cercle que has creat abans. Només els mètodes, no les propietats.

8. Amb Javascript, escriu un programa per posar totes les propietats d'un objecte i els seus valors, a una matriu bidimensional:

[[prop1, value1],[prop2, value2],...]
9. Amb Javascript, escriu un programa que obtingui un objecte a partir d'un altre objecte (que només conté propietats), de manera que les claus passen a ser els valors, i els valors passen a ser les claus.

10. Amb Javascript, escriu un programa que comprovi si una propietat (paràmetre d'entrada) està dins de l'objecte (retorna true o false).

Entrega
Entrega al Classroom, en format pdf o google docs, dels codis generats i les sortides per pantalla que demostrin el bon funcionament dels exercicis.
