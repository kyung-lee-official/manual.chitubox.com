import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { DocsContext } from "./types";
import docsContext from "../preload/docsContext.json";
import { getDocContexts } from "./data";

export function useDocsContext() {
	const pathname = usePathname();
	const locale = useLocale();
	const docInstance = pathname.split("/")[2];
	/* "latest" or "vx.x.x" */
	const versionCode = pathname.split("/")[3];
	const {
		localizedContext,
		docInstanceContext,
		versionedContext,
		flattenPagesContext,
		pageContext,
	} = getDocContexts(
		docsContext as DocsContext,
		locale,
		docInstance,
		versionCode,
		pathname
	);
	return {
		localizedContext,
		docInstanceContext,
		versionedContext,
		flattenPagesContext,
		pageContext,
	};
}
