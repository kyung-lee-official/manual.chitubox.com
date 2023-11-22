const Table = (props: any) => {
	const { children } = props;
	return (
		<table
			className="w-full min-w-[700px] border-separate border-spacing-0 text-center
            [&_>_thead_>_tr_>_th]:bg-gray-100 dark:[&_>_thead_>_tr_>_th]:bg-gray-600
            [&_>_thead_>_tr_>_th]:p-4
            [&_>_tbody_>_tr_>_td]:px-4 [&_>_tbody_>_tr_>_td]:py-2
            [&_>_tbody_>_tr_>_td]:text-left
            [&_>_tbody_>_tr_>_td]:border-[1px] dark:[&_>_tbody_>_tr_>_td]:border-gray-600
            [&_>_tbody_>_tr:last-child_>_td:first-child]:rounded-bl-[10px]
            [&_>_tbody_>_tr:last-child_>_td:last-child]:rounded-br-[10px]"
		>
			{children}
		</table>
	);
};

export const ResponsiveTable: React.FC<any> = ({ children }) => {
	return (
		<div
			className="flex w-full my-8 overflow-x-auto horizontal-scrollbar
            shadow-md rounded-md"
		>
			<Table>{children}</Table>
		</div>
	);
};
