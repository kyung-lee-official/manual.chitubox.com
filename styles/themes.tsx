import {
	red,
	volcano,
	gold,
	yellow,
	lime,
	green,
	cyan,
	blue,
	geekblue,
	purple,
	magenta,
	grey,
} from "@ant-design/colors";

export type ThemeType = {
	headerBackground: string;
	headerShadow: string;
	headerItemHighlight: string;
	headerItemShadow: string;
	drawerBackground: string;
	headerIcons: string;
	searchbarText: string;
	searchbarPlaceholder: string;
	searchbarBackground: string;
	searchbarFocusedBackground: string;
	searchResultText: string;
	searchbarResultsShadow: string;
	searchbarResultsBackground: string;
	sidebarActiveItem: string;
	sidebarActiveBackground: string;
	sidebarScrollbar: string;
	sidebarScrollbarThumb: string;
	sidebarScrollbarHover: string;
	versionNumber: string;
	versionNumberBackground: string;
	tableThBackground: string;
	tableTdBackground: string;
	tableTdBorder: string;
	admonitionNoteBorder: string;
	admonitionNoteColor: string;
	admonitionNoteBackground: string;
	admonitionTipBorder: string;
	admonitionTipColor: string;
	admonitionTipBackground: string;
	admonitionWarningBorder: string;
	admonitionWarningColor: string;
	admonitionWarningBackground: string;
	admonitionDangerBorder: string;
	admonitionDangerColor: string;
	admonitionDangerBackground: string;
	tocColorActive: string;
	tocColor: string;
	tocBackground: string;
	tocBackgroundActive: string;
	footerBackground: string;

	basic: string;

	textTitle: string;
	textContent: string;
	textPrimaryText: string;
	textSecondaryText: string;
	textDisable: string;
	textBorder: string;
	textDividers: string;
	textBackground: string;
	textTableHeader: string;
	background: string;
	secondaryBackground: string;
	docName: string;
	activeDocName: string;
	mdxComponentCode: string;
	mdxComponentCodeBorder: string;

	transitionDuration: string;
};

export const light: ThemeType = {
	headerBackground: `hsla(0, 0%, 96%, 0.4)`,
	headerShadow: "hsla(0, 0%, 0%, 0.1)",
	headerItemHighlight: "hsla(0, 0%, 100%, 1)",
	headerItemShadow: "hsla(0, 0%, 85%, 1)",
	drawerBackground: `hsla(0, 0%, 100%, 0.6)`,
	headerIcons: "hsla(0, 0%, 25%, 1)",
	searchbarText: "hsla(0, 0%, 40%, 1)",
	searchbarPlaceholder: "hsla(0, 0%, 70%, 1)",
	searchbarBackground: `hsla(0, 0%, 94%, 0.6)`,
	searchbarFocusedBackground: `hsla(0, 0%, 94%, 1)`,
	searchResultText: "hsla(0, 0%, 40%, 1)",
	searchbarResultsShadow: "hsla(0, 0%, 40%, 0.3)",
	searchbarResultsBackground: "hsla(0, 0%, 96%, 0.4)",
	sidebarActiveItem: "#00aeff",
	sidebarActiveBackground: "hsla(200, 100%, 50%, 0.1)",
	sidebarScrollbar: "hsla(0, 0%, 94%, 1)",
	sidebarScrollbarThumb: "hsla(0, 0%, 85%, 1)",
	sidebarScrollbarHover: "hsla(0, 0%, 75%, 1)",
	versionNumber: "hsla(0, 0%, 50%, 1)",
	versionNumberBackground: "hsla(0, 0%, 97%, 1)",
	tableThBackground: "hsla(0, 0%, 80%, 1)",
	tableTdBackground: "",
	tableTdBorder: "hsla(0, 0%, 85%, 1)",
	admonitionNoteBorder: "#1890ff",
	admonitionNoteColor: "hsla(209, 100%, 25%, 1)",
	admonitionNoteBackground: "hsla(209, 100%, 55%, 0.12)",
	admonitionTipBorder: "#52c41a",
	admonitionTipColor: "hsla(100, 77%, 14%, 1)",
	admonitionTipBackground: "hsla(100, 77%, 44%, 0.12)",
	admonitionWarningBorder: "#faad14",
	admonitionWarningColor: "hsla(40, 96%, 23%, 1)",
	admonitionWarningBackground: "hsla(40, 96%, 53%, 0.12)",
	admonitionDangerBorder: "#ff4d4f",
	admonitionDangerColor: "hsla(359, 100%, 35%, 1)",
	admonitionDangerBackground: "hsla(359, 100%, 65%, 0.12)",
	tocColorActive: "#1890ff",
	tocColor: "hsla(0, 0%, 50%, 1)",
	tocBackgroundActive: "#e6f7ff",
	tocBackground: `hsla(0, 0%, 98%, 1)`,
	footerBackground: `hsla(0, 0%, 15%, 1)`,

	basic: "#1890ff",

	textTitle: "hsla(0, 0%, 25%, 1)",
	textContent: "hsla(0, 0%, 35%, 1)",
	textPrimaryText: "hsla(0, 0%, 15%, 1)",
	textSecondaryText: "hsla(0, 0%, 55%, 1)",
	textDisable: "hsla(0, 0%, 75%, 1)",
	textBorder: "hsla(0, 0%, 85%, 1)",
	textDividers: "hsla(0, 0%, 94%, 1)",
	textBackground: "hsla(0, 0%, 96%, 1)",
	textTableHeader: "hsla(0, 0%, 98%, 1)",
	background: `hsla(0, 0%, 96%, 1)`,
	secondaryBackground: `hsla(0, 0%, 98%, 1)`,
	docName: `#595959`,
	activeDocName: `#1890ff`,
	mdxComponentCode: `hsla(200, 30%, 50%, 1)`,
	mdxComponentCodeBorder: `hsla(200, 30%, 50%, 0.7)`,

	transitionDuration: "0.5s",
};

export const dark: ThemeType = {
	headerBackground: `hsla(0, 0%, 23%, 0.6)`,
	headerShadow: "hsla(0, 0%, 0%, 0.25)",
	headerItemHighlight: "hsla(0, 0%, 35%, 1)",
	headerItemShadow: "hsla(0, 0%, 15%, 1)",
	headerIcons: "hsla(0, 0%, 90%, 1)",
	drawerBackground: `hsla(0, 0%, 23%, 0.2)`,
	searchbarText: "hsla(0, 0%, 85%, 1)",
	searchbarPlaceholder: "hsla(0, 0%, 55%, 1)",
	searchbarBackground: "hsla(0, 0%, 23%, 0.6)",
	searchbarFocusedBackground: "hsla(0, 0%, 25%, 1)",
	searchResultText: "hsla(0, 0%, 65%, 1)",
	searchbarResultsShadow: "hsla(0, 0%, 4%, 0.4)",
	searchbarResultsBackground: `hsla(0, 0%, 27%, 0.6)`,
	sidebarActiveItem: "#00aeff",
	sidebarActiveBackground: "hsla(200, 100%, 50%, 0.2)",
	sidebarScrollbar: "hsla(0, 0%, 20%, 1)",
	sidebarScrollbarThumb: "hsla(0, 0%, 35%, 1)",
	sidebarScrollbarHover: "hsla(0, 0%, 40%, 1)",
	versionNumber: `hsla(0, 0%, 75%, 1)`,
	versionNumberBackground: "hsla(0, 0%, 25%, 1)",
	tableThBackground: "hsla(0, 0%, 35%, 1)",
	tableTdBackground: "",
	tableTdBorder: "hsla(0, 0%, 35%, 1)",
	admonitionNoteBorder: "#1890ff",
	admonitionNoteColor: "hsla(209, 100%, 95%, 1)",
	admonitionNoteBackground: "hsla(209, 100%, 55%, 0.12)",
	admonitionTipBorder: "#52c41a",
	admonitionTipColor: "hsla(100, 77%, 84%, 1)",
	admonitionTipBackground: "hsla(100, 77%, 44%, 0.12)",
	admonitionWarningBorder: "#faad14",
	admonitionWarningColor: "hsla(40, 96%, 83%, 1)",
	admonitionWarningBackground: "hsla(40, 96%, 53%, 0.12)",
	admonitionDangerBorder: "#ff4d4f",
	admonitionDangerColor: "hsla(359, 100%, 95%, 1)",
	admonitionDangerBackground: "hsla(359, 100%, 65%, 0.12)",
	tocColorActive: "#46a5ff",
	tocColor: "hsla(0, 0%, 75%, 1)",
	tocBackgroundActive: "hsla(0, 0%, 25%, 1)",
	tocBackground: `hsla(0, 0%, 14%, 1)`,
	footerBackground: `hsla(0, 0%, 5%, 1)`,

	basic: "#43a4ff",

	textTitle: "hsla(0, 0%, 90%, 1)",
	textContent: "hsla(0, 0%, 85%, 1)",
	textPrimaryText: "hsla(0, 0%, 85%, 1)",
	textSecondaryText: "hsla(0, 0%, 45%, 1)",
	textDisable: "hsla(0, 0%, 25%, 1)",
	textBorder: "hsla(0, 0%, 15%, 1)",
	textDividers: "hsla(0, 0%, 6%, 1)",
	textBackground: "hsla(0, 0%, 4%, 1)",
	textTableHeader: "hsla(0, 0%, 2%, 1)",
	background: `hsla(0, 0%, 24%, 1)`,
	secondaryBackground: `hsla(0, 0%, 14%, 1)`,
	docName: `#595959`,
	activeDocName: `#1890ff`,
	mdxComponentCode: `hsla(200, 30%, 50%, 1)`,
	mdxComponentCodeBorder: `hsla(200, 30%, 50%, 0.7)`,

	transitionDuration: "0.5s",
};
