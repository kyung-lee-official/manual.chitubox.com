import { getBannerInfo } from "helpers/api";
import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import axios from "axios";
import { useQuery } from "react-query";
import { useLanguageStore } from "stores/language";
dayjs.extend(isBetween);

const StyledImgWrapper = styled.div`
	width: 100%;
	max-height: 8rem;
	overflow-y: hidden;
`;

const StyledImg = styled.img`
	width: 100%;
	vertical-align: middle;
`;

function getQualifiedActivities(activities: any[]): any {
	const qualifiedActivities = activities.filter((activity) => {
		if (activity.isShow === "false") {
			return false;
		} else {
			const startDate = dayjs(activity.startTime);
			const endDate = dayjs(activity.endTime);
			const now = dayjs();
			if (now.isBetween(startDate, endDate)) {
				if (activity.noticeImg !== "") {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
	});
	return qualifiedActivities;
}

function blockCountdownActivities(activities: any) {
	return activities.filter((activity: any) => {
		return activity.isShowCountDown === "false";
	});
}

export const Banner: React.FC<any> = () => {
	const { language } = useLanguageStore();
	const [isImageAva, setIsImageAva] = useState(false);

	let bannerQuery;
	let activities;
	let currentActivity;

	bannerQuery = useQuery("bannerQuery", () => getBannerInfo("en"), {
		enabled: language === "en_US",
	});
	bannerQuery = useQuery("bannerQuery", () => getBannerInfo("zh-Hans"), {
		enabled: language === "zh_CN",
	});

	if (bannerQuery?.isLoading) {
		return null;
	}

	if (bannerQuery?.error) {
		console.error("Failed to fetch the banner image");
		console.error(bannerQuery.error);
		return null;
	}

	if (bannerQuery?.data?.dataValue) {
		activities = JSON.parse(bannerQuery.data.dataValue);
		if (activities) {
			const qualifiedActivities = blockCountdownActivities(
				getQualifiedActivities(activities)
			);
			if (qualifiedActivities.length > 0) {
				currentActivity = qualifiedActivities[0];
				axios
					.get(currentActivity.noticeImg)
					.then(() => {
						setIsImageAva(true);
					})
					.catch((error) => {
						console.error("Failed to fetch the banner image");
					});
				return isImageAva ? (
					<a href={currentActivity.noticeLink}>
						<StyledImgWrapper>
							<picture>
								<StyledImg
									src={currentActivity.noticeImg}
									alt="banner"
								/>
							</picture>
						</StyledImgWrapper>
					</a>
				) : null;
			} else {
				return null;
			}
		}
	}
	return null;
};
