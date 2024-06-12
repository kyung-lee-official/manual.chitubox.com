import axios from "axios";
import qs from "qs";

export const getBannerInfo = async (locale: string): Promise<any> => {
	let lang: "en" | "zh-Hans" = "en";
	if (locale === "en-US") {
		lang = "en";
	} else {
		lang = "zh-Hans";
	}

	const query = qs.stringify(
		{
			dataType: "chitubox-activity-page",
			pageLang: lang,
			dataName: "chitubox-page-data-activity",
		},
		{
			encodeValuesOnly: true,
		}
	);

	const res = await axios.get(
		`https://cms.chitubox.com/page/data/getPageDataDetail.do2?${query}`
	);
	// const res = await axios.get(`http://localhost:3001/chitubox-tests/activities`);

	return res.data.data;
};

export const sendFeedback = async (data: any): Promise<any> => {
	const res = await axios.post("/chitubox-manual-feedbacks", data, {
		baseURL: process.env.NEXT_PUBLIC_API_HOST,
	});
	return res.data;
};
