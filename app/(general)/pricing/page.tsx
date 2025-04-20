import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pricing - Our Plans',
	description:
		'Explore our pricing plans and choose the best option for your needs.',
};
export default function PricingPage() {
	return (
		<>
			<span className='text-7xl'>Pricing</span>
		</>
	);
}
