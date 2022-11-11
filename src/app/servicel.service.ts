import { Injectable } from '@angular/core';
/*Pour déclarer qu’une classe est un service dans Angular, il suffit de
créer une classe TypeScript et de la décorer avec le décorateur
@Injectable():décorateur qui permet de fournir
les métadonnées permettant à Angular d'injecter
le service dans un composant en tant que
dépendance.
providedIn: 'root' : fournir le service au niveau
racine.une seule instance du service disponible dans toute l'application
*/
@Injectable({
  providedIn: 'root'
})
export class ServicelService {

  constructor() { }
}
