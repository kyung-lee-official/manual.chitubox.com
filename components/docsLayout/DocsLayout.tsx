import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import docsContext from "preload/docsContext.json";
import { getFlattenPagesContext } from "helpers/functions";
import { IsPageUseful } from "../userFeedback/IsPageUseful";
import { DocContext } from "./DocContext";
import dynamic from "next/dynamic";

const DynamicDocsHeader = dynamic(
	() => import("@/components/docsHeader/DocsHeader"),
	{
		ssr: false,
	}
);

const DynamicDocsContent = dynamic(
	() => import("@/components/docsContent/DocsContent"),
	{
		ssr: false,
	}
);

const DynamicFooter = dynamic(() => import("@/components/footer/Footer"), {
	ssr: false,
});

export const DocsLayout: React.FC<any> = (props) => {
	const { meta, children } = props;
	const {
		title = "CHITUBOX Docs",
		description = "CHITUBOX Docs",
		keywords = "CHITUBOX Docs",
		ogDescription = "CHITUBOX Docs",
		ogImage = "/images/pages/logo.svg",
	} = meta;
	const router = useRouter();
	const urlLocale = router.pathname.split("/")[1];
	const docInstance = router.pathname.split("/")[3];
	/* Either be "latest" or "vx.x.x" */
	const versionCode = router.pathname.split("/")[4];

	function getContexts(urlLocale: string) {
		/* Get the localized context, which contains the context of all doc instances for the designated language. */
		const localizedContext = docsContext.find((locallizedSidebar: any) => {
			return locallizedSidebar.locale === urlLocale;
		});
		/* Get the doc instance context, which contains all version contexts of the designated doc instance. */
		const docInstanceContext = localizedContext!.localizedDocInstances.find(
			(localizedDocInstance: any) => {
				return localizedDocInstance.docInstance === docInstance;
			}
		);
		/* Get the versioned context, which contains all page contexts of the designated doc instance and version. */
		const versionedContext = docInstanceContext!.versionedContexts.find(
			(versionedContext: any) => {
				return versionedContext.versionCode === versionCode;
			}
		);
		/* Get the page context, which contains all TOC contexts of the designated page. */
		const flattenPagesContext = getFlattenPagesContext(
			versionedContext!.pagesContext
		);
		const pageContext = flattenPagesContext.find((pageContext: any) => {
			return pageContext.path === router.pathname;
		});
		return {
			localizedContext,
			docInstanceContext,
			versionedContext,
			flattenPagesContext,
			pageContext,
		};
	}
	const {
		localizedContext,
		docInstanceContext,
		versionedContext,
		flattenPagesContext,
		pageContext,
	} = getContexts(urlLocale);
	const [searchResults, setSearchResults] = useState<any>([]);
	const [showBanner, setShowBanner] = useState(false);

	return (
		<DocContext.Provider
			value={{
				localizedContext,
				docInstanceContext,
				versionedContext,
				flattenPagesContext,
				pageContext,
				searchResults,
				setSearchResults,
			}}
		>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:description" content={ogDescription} />
				<meta
					property="og:image"
					content={ogImage}
				/>
			</Head>
			<DynamicDocsHeader setShowBanner={setShowBanner} />
			<DynamicDocsContent showBanner={showBanner}>
				{children}
			</DynamicDocsContent>
			<DynamicFooter />
			<IsPageUseful meta={meta} />
		</DocContext.Provider>
	);
};
