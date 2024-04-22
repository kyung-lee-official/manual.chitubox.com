type SubItems = {
	item: string;
	label: string;
	path: string;
	toc: any[];
};

export type CategoryContext = {
	item: string;
	label: string;
	path: string;
	toc: any[];
	subItems: SubItems[];
};

type PageContext = {
	item: string;
	label: string;
	path: string;
	toc: any[];
};

type ItemContext = PageContext | CategoryContext;

type VersionedContext = {
	versionCode: string;
	versionNumber: string;
	pagesContext: ItemContext[];
};

type DocInstance = {
	docInstance: string;
	docInstanceName: string;
	isVersioned: boolean;
	versionedContexts: VersionedContext[];
};

type LocaleDocsContext = {
	locale: string;
	localizedDocInstances: DocInstance[];
};

export type DocsContext = LocaleDocsContext[];

export const enum MediaQuery {
	sm = "(min-width: 640px)",
	md = "(min-width: 768px)",
	lg = "(min-width: 1024px)",
	xl = "(min-width: 1280px)",
	"2xl" = "(min-width: 1536px)",
}
