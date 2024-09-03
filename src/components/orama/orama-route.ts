import { usePathname } from "next/navigation";

const routes = ["/en-US/chitubox-basic/latest"];

export function useOramaPage() {
	const pathname = usePathname();
	if (
		pathname === "/en-US" ||
		routes.some((route) => pathname.startsWith(route))
	) {
		return true;
	} else {
		return false;
	}
}
