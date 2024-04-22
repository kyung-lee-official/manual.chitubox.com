import { Locale } from "../../../messages/Locale";
import dynamic from "next/dynamic";
import DocsLinks from "./DocsLinks";
import { useTranslations } from "next-intl";

const DynamicHero = dynamic(() => import("./hero/Hero"), {
	ssr: false,
});

export default function Page(props: { params: { locale: Locale } }) {
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
