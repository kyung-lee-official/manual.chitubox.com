import { MainPage } from "./home/Home";
import { Locale } from "../../../messages/Locale";
import { ImageContainer } from "@/components/imageContainer/ImageContainer";

export default function Home(props: { params: { locale: Locale; }; }) {
	return (
		<ImageContainer
			src={"/images/docs/docs.png"}
		/>
	);
}