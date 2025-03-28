import Docsboard from "./Docsboard/Docsboard";
import { setRequestLocale } from "next-intl/server";
import { Locale } from "@/utils/types";
import { DynamicHero } from "./hero/DynamicHero";

export default async function Page(props: {
	params: Promise<{ locale: Locale }>;
}) {
	const { params } = props;
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<div
			className="flex flex-col
			bg-neutral-100 dark:bg-neutral-900"
		>
			<div
				className="p-4
				sm:p-6
				md:p-10
				lg:p-10
				xl:p-20
				bg-[radial-gradient(circle_at_20%_20%,#f5d0fe80,transparent_600px),radial-gradient(circle_at_80%_20%,#67e8f955,transparent_600px)]
				dark:bg-[radial-gradient(circle_at_20%_20%,#d946ef33,transparent_500px),radial-gradient(circle_at_80%_20%,#0369a144,transparent_600px)]"
			>
				<DynamicHero />
				<Docsboard />
			</div>
		</div>
	);
}
