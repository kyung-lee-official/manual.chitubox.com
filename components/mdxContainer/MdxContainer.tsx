import { MDXProvider } from "@mdx-js/react";
import React, { useContext } from "react";
import { DocContext } from "../docsLayout";
import { MDXComponent } from "..";
import { VersionTag } from "../versionTag";

export const MdxContainer: React.FC<any> = (props) => {
	const { children } = props;
	const {
		docInstanceContext: { isVersioned },
	} = useContext(DocContext);

	return (
		<div className="flex-auto min-w-0 px-12 py-8">
			{isVersioned && <VersionTag />}
			<MDXProvider components={MDXComponent}>{children}</MDXProvider>
		</div>
	);
};
