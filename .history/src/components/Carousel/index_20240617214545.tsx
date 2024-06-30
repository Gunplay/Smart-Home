import { TECarousel, TECarouselItem } from 'tw-elements-react';

export default function Carousel(): JSX.Element {
	return (
		<>
			<TECarousel
				showControls
				showIndicators
				crossfade
				ride='carousel'
				className='w-full md:h-[400px]'
				nextBtnIcon={true}
			>
				{' '}
				{/* Added responsive height for medium screens */}
				<TECarouselItem
					itemID={1}
					className='relative block w-full transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none'
				>
					<img
						src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
						className='block w-full h-full object-cover'
						alt='...'
					/>
				</TECarouselItem>
				<TECarouselItem
					itemID={2}
					className='relative block w-full transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none opacity-0'
				>
					<img
						src='https://mdbcdn.b-cdn.net/img/new/slides/042.webp'
						className='block w-full h-full object-cover'
						alt='...'
					/>
				</TECarouselItem>
				<TECarouselItem
					itemID={3}
					className='relative block w-full transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none opacity-0'
				>
					<img
						src='https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
						className='block w-full h-full object-cover'
						alt='...'
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
					>
						PREV{' '}
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>{' '}
					</svg>{' '}
				</TECarouselItem>
				Template for the next button. Use this
			</TECarousel>
		</>
	);
}
