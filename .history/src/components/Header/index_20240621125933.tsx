import {
	Dialog,
	DialogPanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Transition,
	TransitionChild,
} from '@headlessui/react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import {
	Fragment,
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactNode,
	ReactPortal,
	useState,
} from 'react';
import logoSmartHome from '/src/assets/smart-home-svgrepo-com.svg';

const navigation = {
	categories: [
		{
			id: 'Smartphone',
			name: 'Smart-phone',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
					imageAlt:
						'Models sitting back to back, wearing Basic Tee in black and bone.',
				},
				{
					name: 'Basic Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
					imageAlt:
						'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
				},
			],
			sections: [
				{
					id: 'clothing',
					name: 'Clothing',
					items: [
						{ name: 'Tops', href: '#' },
						{ name: 'Dresses', href: '#' },
						{ name: 'Pants', href: '#' },
						{ name: 'Denim', href: '#' },
						{ name: 'Sweaters', href: '#' },
						{ name: 'T-Shirts', href: '#' },
						{ name: 'Jackets', href: '#' },
						{ name: 'Activewear', href: '#' },
						{ name: 'Browse All', href: '#' },
					],
				},
				{
					id: 'accessories',
					name: 'Accessories',
					items: [
						{ name: 'Watches', href: '#' },
						{ name: 'Wallets', href: '#' },
						{ name: 'Bags', href: '#' },
						{ name: 'Sunglasses', href: '#' },
						{ name: 'Hats', href: '#' },
						{ name: 'Belts', href: '#' },
					],
				},
				{
					id: 'brands',
					name: 'Brands',
					items: [
						{ name: 'Full Nelson', href: '#' },
						{ name: 'My Way', href: '#' },
						{ name: 'Re-Arranged', href: '#' },
						{ name: 'Counterfeit', href: '#' },
						{ name: 'Significant Other', href: '#' },
					],
				},
			],
		},
		{
			id: 'Smart-home',
			name: 'Smart-home',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
					imageAlt:
						'Drawstring top with elastic loop closure and textured interior padding.',
				},
				{
					name: 'Artwork Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
					imageAlt:
						'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
				},
			],
			sections: [
				{
					id: 'clothing',
					name: 'Clothing',
					items: [
						{ name: 'Tops', href: '#' },
						{ name: 'Pants', href: '#' },
						{ name: 'Sweaters', href: '#' },
						{ name: 'T-Shirts', href: '#' },
						{ name: 'Jackets', href: '#' },
						{ name: 'Activewear', href: '#' },
						{ name: 'Browse All', href: '#' },
					],
				},
				{
					id: 'accessories',
					name: 'Accessories',
					items: [
						{ name: 'Watches', href: '#' },
						{ name: 'Wallets', href: '#' },
						{ name: 'Bags', href: '#' },
						{ name: 'Sunglasses', href: '#' },
						{ name: 'Hats', href: '#' },
						{ name: 'Belts', href: '#' },
					],
				},
				{
					id: 'brands',
					name: 'Brands',
					items: [
						{ name: 'Re-Arranged', href: '#' },
						{ name: 'Counterfeit', href: '#' },
						{ name: 'Full Nelson', href: '#' },
						{ name: 'My Way', href: '#' },
					],
				},
			],
		},
	],
	pages: [
		{ name: 'Life Style', href: '#' },
		{ name: 'Stores', href: '#' },
	],
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<div className='bg-white'>
			{/* Mobile menu */}
			<Transition show={open}>
				<Dialog
					className='relative z-40 lg:hidden'
					onClose={() => setOpen(false)}
				>
					<TransitionChild
						enter='transition-opacity ease-linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-linear duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</TransitionChild>

					<div className='fixed inset-0 z-40 flex'>
						<TransitionChild
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<DialogPanel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
								<div className='flex px-4 pb-2 pt-5'>
									<button
										type='button'
										className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
										onClick={() => setOpen(false)}
									>
										<span className='absolute -inset-0.5' />
										<span className='sr-only'>Close menu</span>
										<XMarkIcon className='h-6 w-6' aria-hidden='true' />
									</button>
								</div>

								{/* Links */}
								<TabGroup className='mt-2'>
									<div className='border-b border-gray-200'>
										<TabList className='-mb-px flex space-x-8 px-4'>
											{navigation.categories.map(category => (
												<Tab
													key={category.name}
													className={({ selected }) =>
														classNames(
															selected
																? 'border-indigo-600 text-indigo-600'
																: 'border-transparent text-gray-900',
															'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
														)
													}
												>
													{category.name}
												</Tab>
											))}
										</TabList>
									</div>
									<TabPanels as={Fragment}>
										{navigation.categories.map(category => (
											<TabPanel
												key={category.name}
												className='space-y-10 px-4 pb-8 pt-10'
											>
												<div className='grid grid-cols-2 gap-x-4'>
													{category.featured.map(item => (
														<div
															key={item.name}
															className='group relative text-sm'
															id={item.name}
														>
															<div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
																<img
																	src={item.imageSrc}
																	alt={item.imageAlt}
																	className='object-cover object-center'
																/>
															</div>
															<a
																href={item.href}
																className='mt-6 block font-medium text-gray-900'
															>
																<span
																	className='absolute inset-0 z-10'
																	aria-hidden='true'
																/>
																{item.name}
															</a>
															<p aria-hidden='true' className='mt-1'>
																Shop now
															</p>
														</div>
													))}
												</div>
												{category.sections.map(section => (
													<div key={section.name}>
														<p
															id={`${category.id}-${section.id}-heading-mobile`}
															className='font-medium text-gray-900'
														>
															{section.name}
														</p>
														<ul
															role='list'
															aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
															className='mt-6 flex flex-col space-y-6'
														>
															{section.items.map(item => (
																<li key={item.name} className='flow-root'>
																	<a
																		href={item.href}
																		className='-m-2 block p-2 text-gray-500'
																	>
																		{item.name}
																	</a>
																</li>
															))}
														</ul>
													</div>
												))}
											</TabPanel>
										))}
									</TabPanels>
								</TabGroup>

								<div className='space-y-6 border-t border-gray-200 py-6 px-4'>
									{navigation.pages.map(page => (
										<div key={page.name} className='flow-root'>
											<a
												href={page.href}
												className='-m-2 block p-2 font-medium text-gray-900'
											>
												{page.name}
											</a>
										</div>
									))}
								</div>

								<div className='space-y-6 border-t border-gray-200 py-6 px-4'>
									<div className='flow-root'>
										<a
											href='#'
											className='-m-2 block p-2 font-medium text-gray-900'
										>
											Sign in
										</a>
									</div>
									<div className='flow-root'>
										<a
											href='#'
											className='-m-2 block p-2 font-medium text-gray-900'
										>
											Create account
										</a>
									</div>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>

			<header className='relative bg-white'>
				<nav aria-label='Top'>
					<div className='bg-gray-900'>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div>
								<div className='flex h-10 items-center justify-between'>
									<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:space-x-6'>
										<a
											href='#'
											className='text-sm font-medium text-white hover:text-gray-100'
										>
											Discounts
										</a>
										<a
											href='#'
											className='text-sm font-medium text-white hover:text-gray-100'
										>
											Shipping
										</a>
										<a
											href='#'
											className='text-sm font-medium text-white hover:text-gray-100'
										>
											Returns
										</a>
									</div>
									<div className='flex items-center lg:hidden'>
										<button
											type='button'
											className='relative -ml-2 rounded-md bg-white p-2 text-gray-400'
											onClick={() => setOpen(true)}
										>
											<span className='absolute -inset-0.5' />
											<span className='sr-only'>Open menu</span>
											<Bars3Icon className='h-6 w-6' aria-hidden='true' />
										</button>
									</div>
									<div className='flex lg:flex-1 lg:items-center lg:justify-end'>
										<a
											href='#'
											className='hidden text-sm font-medium text-white hover:text-gray-100 lg:block'
										>
											Sign in
										</a>
										<a
											href='#'
											className='hidden text-sm font-medium text-white hover:text-gray-100 lg:block'
										>
											Create account
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white'>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='flex h-16 items-center justify-between'>
								{/* Logo */}
								<div className='flex'>
									<a href='#'>
										<span className='sr-only'>Your Company</span>
										<img className='h-8 w-auto' src={logoSmartHome} alt='' />
									</a>
								</div>

								{/* Flyout menus */}
								<PopoverGroup className='hidden lg:block lg:flex lg:items-center lg:space-x-4'>
									{navigation.categories.map(category => (
										<Popover key={category.name} className='relative'>
											{({ open }) => (
												<>
													<PopoverButton
														className={classNames(
															open ? 'text-gray-900' : 'text-gray-700',
															'group inline-flex items-center text-sm font-medium'
														)}
													>
														{category.name}
													</PopoverButton>

													<Transition
														show={open}
														as={Fragment}
														enter='transition ease-out duration-200'
														enterFrom='opacity-0'
														enterTo='opacity-100'
														leave='transition ease-in duration-150'
														leaveFrom='opacity-100'
														leaveTo='opacity-0'
													>
														<PopoverPanel
															className='absolute inset-x-0 top-full z-10 bg-white shadow-lg'
															static
														>
															<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
																<div className='grid grid-cols-2 gap-x-8 gap-y-10 py-8'>
																	{category.featured.map(item => (
																		<div
																			key={item.name}
																			className='group relative text-sm'
																		>
																			<div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
																				<img
																					src={item.imageSrc}
																					alt={item.imageAlt}
																					className='object-cover object-center'
																				/>
																			</div>
																			<a
																				href={item.href}
																				className='mt-6 block font-medium text-gray-900'
																			>
																				<span
																					className='absolute inset-0 z-10'
																					aria-hidden='true'
																				/>
																				{item.name}
																			</a>
																			<p aria-hidden='true' className='mt-1'>
																				Shop now
																			</p>
																		</div>
																	))}
																</div>
															</div>
														</PopoverPanel>
													</Transition>
												</>
											)}
										</Popover>
									))}
								</PopoverGroup>

								<div className='flex lg:hidden'>
									<button
										type='button'
										className='-ml-2 rounded-md bg-white p-2 text-gray-400'
										onClick={() => setOpen(true)}
									>
										<span className='sr-only'>Open menu</span>
										<Bars3Icon className='h-6 w-6' aria-hidden='true' />
									</button>
								</div>

								{/* Search */}
								<div className='hidden lg:ml-6 lg:flex'>
									<a href='#' className='p-2 text-gray-400 hover:text-gray-500'>
										<span className='sr-only'>Search</span>
										<MagnifyingGlassIcon
											className='h-6 w-6'
											aria-hidden='true'
										/>
									</a>
								</div>

								{/* Cart */}
								<div className='ml-4 flow-root lg:ml-6'>
									<a href='#' className='group -m-2 flex items-center p-2'>
										<ShoppingBagIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
										<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
											0
										</span>
										<span className='sr-only'>items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main>
				<div className='bg-gray-50'>
					<div className='mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4'>
						<div className='sm:flex sm:items-baseline sm:justify-between'>
							<h1 className='text-4xl font-bold tracking-tight text-gray-900'>
								New Arrivals
							</h1>
							<a
								href='#'
								className='hidden text-sm font-semibold text-gray-900 hover:text-gray-700 sm:block'
							>
								Browse all new arrivals
								<span aria-hidden='true'> &rarr;</span>
							</a>
						</div>

						<div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
							{products.map(
								(product: {
									id: Key | null | undefined;
									imageSrc: string | undefined;
									imageAlt: string | undefined;
									href: string | undefined;
									name:
										| string
										| number
										| boolean
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| null
										| undefined;
									color:
										| string
										| number
										| boolean
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| null
										| undefined;
									price:
										| string
										| number
										| boolean
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| null
										| undefined;
								}) => (
									<div key={product.id} className='group relative'>
										<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
											<img
												src={product.imageSrc}
												alt={product.imageAlt}
												className='h-full w-full object-cover object-center lg:h-full lg:w-full'
											/>
										</div>
										<div className='mt-4 flex justify-between'>
											<div>
												<h3 className='text-sm text-gray-700'>
													<a href={product.href}>
														<span
															aria-hidden='true'
															className='absolute inset-0'
														/>
														{product.name}
													</a>
												</h3>
												<p className='mt-1 text-sm text-gray-500'>
													{product.color}
												</p>
											</div>
											<p className='text-sm font-medium text-gray-900'>
												{product.price}
											</p>
										</div>
									</div>
								)
							)}
						</div>

						<div className='mt-6 sm:hidden'>
							<a
								href='#'
								className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
							>
								Browse all new arrivals
								<span aria-hidden='true'> &rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
