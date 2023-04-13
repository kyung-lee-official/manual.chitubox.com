import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { MDXComponent } from "..";
import { VersionTag } from "../versionTag";

export const MdxContainer: React.FC<any> = (props) => {
	const { children } = props;

	return (
		<div className="flex-auto min-w-0 px-12 py-8">
			<VersionTag />
			<MDXProvider components={MDXComponent}>{children}</MDXProvider>
		</div>
	);
};
