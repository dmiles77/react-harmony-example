import * as _ from 'lodash';
import { NamedLanguage } from 'react-localize-redux';
import en from './json/en.json';
import fr from './json/fr.json';
import he from './json/he.json';

export const languageTypes: string[] | NamedLanguage[] = ['en', 'fr', 'he'];

const mapTranslations = () => {
	const translations = {};
	_.keys(en).forEach((key) => {
		translations[key] = {};
		_.each(_.keys(en[key]), (innerKey) => {
			translations[key][innerKey] = [
				en[key][innerKey],
				fr[key][innerKey],
				he[key][innerKey]
			];
		});
	});
	return translations;
};

export const translations = mapTranslations();

