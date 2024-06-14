"use client";

import { useLocale } from "next-intl";
import docsContext from "../../../preload/docsContext.json";
import { DocsContext } from "@/utils/types";
import Link from "next/link";

const Subtitle = (props: { docInstanceName: string }) => {
	const { docInstanceName } = props;
	const locale = useLocale();
	const localizedContext = (docsContext as DocsContext).find((doc) => {
		return doc.locale === locale;
	});
	if (!localizedContext) {
		return null;
	}
	const docInstance = localizedContext.localizedDocInstances.find(
		(docInstance) => docInstance.docInstanceName === docInstanceName
	);
	if (!docInstance) {
		return null;
	}
	const latestVersion = docInstance.versionedContexts.find((version) => {
		return version.versionCode === "latest";
	});
	if (!latestVersion) {
		return null;
	}
	const { pagesContext } = latestVersion;

	return (
		<div
			className="flex flex-col w-full 
			min-h-fit
			sm:min-h-40
			gap-2
			text-sm
			text-neutral-500
			dark:text-neutral-400"
		>
			{pagesContext.map((item) => {
				return (
					<Link
						key={item.path}
						href={item.path}
						className="
						hover:text-neutral-800
						dark:hover:text-neutral-300
						duration-200"
					>
						{item.label}
					</Link>
				);
			})}
		</div>
	);
};

export default Subtitle;
