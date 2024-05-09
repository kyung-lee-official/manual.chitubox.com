export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en-US">
			<body className="font-[NotoSansCJKsc-Regular]">
				{children}
			</body>
		</html>
	);
}
