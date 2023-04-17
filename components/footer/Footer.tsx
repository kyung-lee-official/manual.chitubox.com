import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getUrlLocale, useLanguageStore } from "stores/language";
import { Document, Community, More } from "../icons/Icons";

const ColTitle = (props: any) => {
	const { children } = props;
	return (
		<div
			className="flex justify-start items-center gap-4 mb-4
            font-bold text-xl"
		>
			{children}
		</div>
	);
};

// const Link = (props: any) => {
// 	const { href, target, children } = props;
// 	return (
// 		<a href={href} target={target} className="hover:text-sky-500">
// 			{children}
// 		</a>
// 	);
// };

const FooterCol = (props: any) => {
	const { children } = props;
	return (
		<div className="flex flex-col justify-start xl:justify-center items-start w-40 mb-6 xl:m-0 gap-2">
			{children}
		</div>
	);
};

const Footer = () => {
	const { t } = useTranslation();
	const { language } = useLanguageStore();
	const urlLocale = getUrlLocale(language);
	const [fullYear, setDate] = useState(new Date().getFullYear());

	useEffect(() => {
		setDate(new Date().getFullYear());
	}, []);

	return (
		<div
			className="flex flex-col w-full py-6
            font-sans text-blue-200 bg-gray-900"
		>
			<div className="flex flex-col xl:flex-row justify-start xl:justify-center items-center xl:items-start pb-2 xl:py-8 xl:gap-28">
				<FooterCol>
					<ColTitle>
						<Document size={"36"} />
						{t("footer.relevantDocs")}
					</ColTitle>
					{/* <Link
						href={`/${urlLocale}/docs/chitubox-basic/latest/introduction`}
					>
						{t("footer.chituboxBasicDoc")}
					</Link>
					<Link
						href={`/${urlLocale}/docs/chitubox-pro/latest/introduction`}
					>
						{t("footer.chituboxProDoc")}
					</Link>
					<Link
						href={`/${urlLocale}/docs/faq/latest/chitubox-basic-faq`}
					>
						{t("footer.faqDoc")}
					</Link> */}
				</FooterCol>
				<FooterCol>
					<ColTitle>
						<Community size={"36"} />
						{t("footer.community")}
					</ColTitle>
					{/* <Link
						target={"_blank"}
						href={t("footer.DiscordLink") as string}
					>
						{t("footer.Discord")}
					</Link>
					<Link
						target={"_blank"}
						href={t("footer.facebookLink") as string}
					>
						{t("footer.facebook")}
					</Link>
					<Link
						target={"_blank"}
						href={t("footer.twitterLink") as string}
					>
						{t("footer.twitter")}
					</Link>
					<Link
						target={"_blank"}
						href={t("footer.instagramLink") as string}
					>
						{t("footer.instagram")}
					</Link>
					<Link
						target={"_blank"}
						href={t("footer.youtubeLink") as string}
					>
						{t("footer.youtube")}
					</Link> */}
				</FooterCol>
				<FooterCol>
					<ColTitle>
						<More size={"36"} />
						{t("footer.more")}
					</ColTitle>
					{/* <Link
						target={"_blank"}
						href={t("footer.chituboxSiteLink") as string}
					>
						{t("footer.chituboxSite")}
					</Link>
					<Link href={t("footer.supportEmailLink") as string}>
						{t("footer.supportEmail")}
					</Link>
					{language === "en_US" ? (
						<Link
							target={"_blank"}
							href={t("footer.chituSystemsLink") as string}
						>
							{t("footer.chituSystems")}
						</Link>
					) : null} */}
				</FooterCol>
			</div>
			<div className="flex flex-col xl:flex-row flex-start xl:justify-center items-center py-4 gap-2 xl:gap-0">
				<div>
					{t("footer.copyright")} {fullYear} &nbsp;
				</div>
				<div>{t("footer.companyName")}</div>
			</div>
		</div>
	);
};

export default Footer;
