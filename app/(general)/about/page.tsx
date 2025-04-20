import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Title',
	description: 'About Title',
	keywords: ['About Page', 'Gabriel', 'Info'],
};

export default function AboutPage() {
	return (
		<main className='flex flex-col items-center p-24'>
			<span className='text-7xl'>About page</span>
		</main>
	);
}
