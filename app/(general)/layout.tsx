export default function GeneralLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<span className='text-lg'>Hola Mundo</span>
			{children}
		</div>
	);
}
