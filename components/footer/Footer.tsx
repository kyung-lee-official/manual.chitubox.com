import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUrlLocale } from "redux/language/slice";
import styled from "styled-components";
import { Document, More, Community } from "..";
import { RootState } from "../../redux/store";

const StyledFooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #1c2d3f;
`;

const StyledFooterInfoColContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top: 2rem;
	padding-bottom: 2rem;
	color: #c3d9ee;
	@media (max-width: 1224px) {
		justify-content: flex-start;
		flex-direction: column;
		align-items: center;
		padding-bottom: 0.5rem;
	}
`;

const StyledFooterInfoCol = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 20rem;
	@media (max-width: 1224px) {
		justify-content: flex-start;
		align-items: flex-start;
		width: 15rem;
		margin-bottom: 1.5rem;
	}
`;

const StyledFooterInfoCenteredCol = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledFooterInfoTitle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	padding-bottom: 1rem;
	font-family: "system-ui";
	font-size: 1.1rem;
	font-weight: bold;
`;

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	margin: 0.25rem 0rem;
	font-family: "system-ui";
	font-size: 1.03rem;
	color: #c3d9ee;
	cursor: pointer;
`;

const StyledCopyRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #c3d9ee;
	padding-top: 2rem;
	padding-bottom: 3rem;
	font-family: "system-ui";
	font-size: 1.03rem;
	@media (max-width: 1224px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		flex-direction: column;
		padding-top: 0;
		padding-bottom: 3rem;
	}
`;

export const Footer = () => {
	const { t } = useTranslation();
	const reduxLanguageState = useSelector(
		(state: RootState) => state.language
	);
	const reduxUrlLocale = getUrlLocale(reduxLanguageState.currentLocale);
	const [fullYear, setDate] = useState(new Date().getFullYear());
	const router = useRouter();

	useEffect(() => {
		setDate(new Date().getFullYear());
	}, []);

	return (
		<StyledFooterContainer>
			<StyledFooterInfoColContainer>
				<StyledFooterInfoCol>
					<StyledFooterInfoCenteredCol>
						<StyledFooterInfoTitle>
							<Document size={"36"} fill="#c3d9ee" />
							{t("footer.relevantDocs")}
						</StyledFooterInfoTitle>
						<StyledLink
							onClick={() => {
								router.push(
									"/" +
										reduxUrlLocale +
										"/docs/chitubox-basic/latest/introduction"
								);
							}}
						>
							{t("footer.chituboxBasicDoc")}
						</StyledLink>
						<StyledLink
							onClick={() => {
								router.push(
									"/" +
										reduxUrlLocale +
										"/docs/chitubox-pro/latest/introduction"
								);
							}}
						>
							{t("footer.chituboxProDoc")}
						</StyledLink>
						<StyledLink
							onClick={() => {
								router.push(
									"/" +
										reduxUrlLocale +
										"/docs/faq/latest/chitubox-basic-faq"
								);
							}}
						>
							{t("footer.faqDoc")}
						</StyledLink>
					</StyledFooterInfoCenteredCol>
				</StyledFooterInfoCol>
				<StyledFooterInfoCol>
					<StyledFooterInfoCenteredCol>
						<StyledFooterInfoTitle>
							<Community size={"36"} fill="#c3d9ee" />
							{t("footer.community")}
						</StyledFooterInfoTitle>
						<StyledLink
							target={"_blank"}
							href={t("footer.DiscordLink") as string}
						>
							{t("footer.Discord")}
						</StyledLink>
						<StyledLink
							target={"_blank"}
							href={t("footer.facebookLink") as string}
						>
							{t("footer.facebook")}
						</StyledLink>
						<StyledLink
							target={"_blank"}
							href={t("footer.twitterLink") as string}
						>
							{t("footer.twitter")}
						</StyledLink>
						<StyledLink
							target={"_blank"}
							href={t("footer.instagramLink") as string}
						>
							{t("footer.instagram")}
						</StyledLink>
						<StyledLink
							target={"_blank"}
							href={t("footer.youtubeLink") as string}
						>
							{t("footer.youtube")}
						</StyledLink>
					</StyledFooterInfoCenteredCol>
				</StyledFooterInfoCol>
				<StyledFooterInfoCol>
					<StyledFooterInfoCenteredCol>
						<StyledFooterInfoTitle>
							<More size={"36"} fill="#c3d9ee" />
							{t("footer.more")}
						</StyledFooterInfoTitle>
						<StyledLink
							target={"_blank"}
							href={t("footer.chituboxSiteLink") as string}
						>
							{t("footer.chituboxSite")}
						</StyledLink>
						<StyledLink
							href={t("footer.supportEmailLink") as string}
						>
							{t("footer.supportEmail")}
						</StyledLink>
						{reduxLanguageState.currentLocale === "en_US" ? (
							<StyledLink
								target={"_blank"}
								href={t("footer.chituSystemsLink") as string}
							>
								{t("footer.chituSystems")}
							</StyledLink>
						) : null}
					</StyledFooterInfoCenteredCol>
				</StyledFooterInfoCol>
			</StyledFooterInfoColContainer>
			<StyledCopyRight>
				<div>
					{t("footer.copyright")} {fullYear} &nbsp;
				</div>
				<div>{t("footer.companyName")}</div>
			</StyledCopyRight>
		</StyledFooterContainer>
	);
};
