import { MediaQuery } from "@/utils/types";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useDocsContext } from "@/utils/hooks";

const InstanceTitles = () => {
	const { docInstanceContext, localizedContext } = useDocsContext();

	const isDesktopOrLaptop = useMediaQuery({ query: MediaQuery.lg });

	if (isDesktopOrLaptop) {
		return (
			<div
				className="flex gap-6
				text-xl
				cursor-default"
			>
				{localizedContext.localizedDocInstances.map(
					(instance: any, i: number) => {
						let isActive: boolean =
							instance.docInstanceName ===
							docInstanceContext?.docInstanceName
								? true
								: false;
						return (
							<Link
								href={
									instance.versionedContexts[0]
										.pagesContext[0].path
								}
								key={i}
								className={`${
									isActive &&
									" text-blue-500 dark:text-sky-400"
								} cursor-pointer`}
							>
								{instance.docInstanceName}
							</Link>
						);
					}
				)}
			</div>
		);
	} else {
		return null;
	}
};

export default InstanceTitles;
