import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Canvadata {

	canva: any;
	canvaList: any = {
		lean: {
			title: 'Lean Canvas',
			case1: 'Problèmes', case2: 'Customer Segment', case3: 'Solutions',
			case4: 'Canaux', case5: 'Keys Metrics', case6: 'Avantages Concurrentiels',
			case7: 'Coûts', case8: 'Revenus', case9: 'Proposition Unique de Valeur'},
		bmc: {
			title: 'Buisiness Model Canvas',
			case1: 'Partenaires Clés', case2: 'Activités clés', case3: 'Solutions',
			case4: 'Canaux', case5: 'Keys Metrics', case6: 'Avantages Concurrentiels',
			case7: 'Coûts', case8: 'Revenus', case9: 'Proposition Unique de Valeur'},
		mvp: {
			title: 'MVP Canvas',
			case1: 'Problèmes', case2: 'Business Unit', case3: 'Solutions',
			case4: 'Saboteurs', case5: 'Keys Metrics', case6: 'Sponsors',
			case7: 'Minimum Viable Product', case8: 'Retour sur Investissement', case9: 'Proposition Unique de Valeur'}
	}

	placeholder: any;
	placeholderList: any = {
		lean: {
			case1: 'Top 3 Problèmes\r\nAvant de poser votre idée sur le papier de façon désorganisée, veillez à avoir, au préalable, compris la problématique de vos clients en identifant les 3 problèmes les plus importants auxquels ils sont régulièrement exposés',
			case2: 'Clients cibles, persona',
			case3: 'Top 3 Solutions',
			case4: 'Vos moyens de communiquer avec vos clients',
			case5: 'Vos activités clés à mesurer',
			case6: 'Ne peux être facilement acheté ou copié',
			case7: 'Vos coûts de structure (salaires, loyers, serveurs,...) et vos coûts d\'acquisitions (publicité, stand sur les salons, SEO, etc...)',
			case8: 'Comment vous gagnez de l\'argent ?\r\nQui sont vos acheteurs ?',
			case9: 'Un message clair et compact : Vous devez vous poser de nouveau ces questions pour être certain d’avoir bien identifié vos valeurs ajoutées et déni votre promesse : en quoi votre offre répond-elle efficacement aux besoins du marché? En quoi est-elle différente et meilleure que les autres? Votre proposition de valeur doit pouvoir être formulée en une phrase avec une accroche unique et inédite. C’est la principale raison qui fait que vos prospects devraient dépenser chez vous plutôt que chez la concurrence. En une phrase, la proposition de valeur est une déclaration claire qui explique comment votre produit résout les problèmes des clients, améliore leur situation et fournit des avantages spécifques.'},
		bmc: {
			case1: 'Qui sont vos trois partenaires clés? Quels sont vos fournisseurs clés ? Quelles ressources sont acquises via nos partenaires ? Quelles activités clés réalisent nos partenaires ?',
			case2: 'Pour qui créons nous de la valeur ? Qui sont nos principaux clients ?',
			case3: 'Quelles activités sont nécessaires pour : Notre proposition de valeur ? Nos canaux de distribution ? Nos relations clients ? Nos sources de revenus ?',
			case4: 'Vos moyens de communiquer avec vos clients',
			case5: 'Vos activités clés à mesurer',
			case6: 'Ne peux être facilement acheté ou copié',
			case7: 'Vos coûts de structure (salaires, loyers, serveurs,...) et vos coûts d\'acquisitions (publicité, stand sur les salons, SEO, etc...)',
			case8: 'Comment vous gagnez de l\'argent ?\r\nQui sont vos acheteurs ?',
			case9: 'Un message clair et compact : Vous devez vous poser de nouveau ces questions pour être certain d’avoir bien identifié vos valeurs ajoutées et déni votre promesse : en quoi votre offre répond-elle efficacement aux besoins du marché? En quoi est-elle différente et meilleure que les autres? Votre proposition de valeur doit pouvoir être formulée en une phrase avec une accroche unique et inédite. C’est la principale raison qui fait que vos prospects devraient dépenser chez vous plutôt que chez la concurrence. En une phrase, la proposition de valeur est une déclaration claire qui explique comment votre produit résout les problèmes des clients, améliore leur situation et fournit des avantages spécifques.'},
		mvp: {
			case1: 'Qui sont vos trois partenaires clés? Quels sont vos fournisseurs clés ? Quelles ressources sont acquises via nos partenaires ? Quelles activités clés réalisent nos partenaires ?',
			case2: 'Service\r\nCommercial\r\nMarketing\r\nLégal\r\netc',
			case3: 'Top 3 Solutions',
			case4: 'Qui sont les personnes susceptibles de vous mettre des batons dans les roues lors du déploiement de votre solution ? DSI, Légal, Ceux qui ont peur pour leur boulot, Politique interne',
			case5: 'Vos activités clés à mesurer',
			case6: '',
			case7: 'Sur quel support allez-vous tester votre solution ?',
			case8: 'Quels sont les avantages/apports humains/financiers ?',
			case9: 'Un message clair et compact : Vous devez vous poser de nouveau ces questions pour être certain d’avoir bien identifié vos valeurs ajoutées et déni votre promesse : en quoi votre offre répond-elle efficacement aux besoins du marché? En quoi est-elle différente et meilleure que les autres? Votre proposition de valeur doit pouvoir être formulée en une phrase avec une accroche unique et inédite. C’est la principale raison qui fait que vos prospects devraient dépenser chez vous plutôt que chez la concurrence. En une phrase, la proposition de valeur est une déclaration claire qui explique comment votre produit résout les problèmes des clients, améliore leur situation et fournit des avantages spécifques.'}
	}

	constructor() {}

	initData(canvatype) {
		this.canva = this.canvaList[canvatype];
		this.placeholder = this.placeholderList[canvatype];
	}
}