import { MDXProvider } from "@mdx-js/react";
import React, { useContext } from "react";
import { DocContext } from "../docsLayout/DocContext";
import { VersionTag } from "../versionTag/VersionTag";
import { MDXComponent } from "../mdxComponent/MDXComponent";
import { useRouter } from "next/router";
import { NotLatestHint } from "../notLatestHint/NotLatestHint";

export const MdxContainer: React.FC<any> = (props) => {
	const { children } = props;
	const { docInstanceContext } = useContext(DocContext);
	const router = useRouter();

	return (
		<div className="flex-auto min-w-0 px-12 py-8">
			{router.pathname.split("/")[4] !== "latest" && <NotLatestHint />}
			{docInstanceContext.isVersioned && <VersionTag />}
			<MDXProvider components={MDXComponent as any}>
				{children}
			</MDXProvider>
		</div>
	);
};
