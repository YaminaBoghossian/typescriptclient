import {Compteur} from './eg';

const compteur = new Compteur();

compteur.increment();
compteur.increment();
compteur.increment();

console.log(compteur.showCount());

