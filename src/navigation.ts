import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en-US', 'zh-CN', 'zh-TW'];

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales });
