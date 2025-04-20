export default function Navbar() {
	return (
		<nav className='flex bg-blue-800 backdrop-opacity-30 p-2 m-2'>
			<span>Home</span>
			<div className='flex flex-1'></div>
			<a
				className='mr-2'
				href='/about'
			>
				About
			</a>
			<a
				className='mr-2'
				href='/pricing'
			>
				Pricing
			</a>
			<a
				className='mr-2'
				href='/contact'
			>
				Contact
			</a>
		</nav>
	);
}
