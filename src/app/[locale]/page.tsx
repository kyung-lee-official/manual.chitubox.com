import { Locale } from "../../../messages/Locale";
import dynamic from "next/dynamic";
import DocsLinks from "./DocsLinks";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const DynamicHero = dynamic(() => import("./hero/Hero"), {
	ssr: false,
});

export default function Page(props: { params: { locale: Locale } }) {
	const { locale } = props.params;
	unstable_setRequestLocale(locale);

	const t = useTranslations("footer");

	return (
		<div className="flex flex-col">
			<DynamicHero />
			<DocsLinks
				chituboxBasic={"CHITUBOX Basic"}
				chituboxPro={"CHITUBOX Pro"}
				chituManager="ChituManager"
				faq={t("faqDoc")}
			/>
		</div>
	);
}
