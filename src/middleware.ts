import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	/* A list of all locales that are supported */
	locales: ['en-US', 'zh-CN', 'zh-TW'],

	/* Used when no locale matches */
	defaultLocale: 'en-US',
	localePrefix: "always"
});

export const config = {
	/* Match only internationalized pathnames */
	matcher: ['/', '/(en-US|zh-CN|zh-TW)/:path*']
};
