import type { LayoutLoad } from "./$types";
import { docsPages, docsTree } from "$data/fetchDocsData";
import { waitLocale } from "svelte-i18n";
import i18n from "$i18n";

export const load: LayoutLoad = ({ url, route }) => {
	i18n();
	waitLocale();

	return {
		docs: docsTree,
		docsPages: docsPages
	}
};

export const prerender = true;

