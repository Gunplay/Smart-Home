import React, { useState } from 'react';

interface Category {
	name: string;
	description: string;
	imageUrl: string;
}

interface Product {
	name: string;
	description: string;
	imageUrl: string;
}

const categories: Record<string, Category[]> = {
	'Флагманські продукти': [
		{
			name: 'Серія Xiaomi 14',
			description:
				'Камера – легенда. Оптика Leica наступного покоління. Мобільна платформа Snapdragon® 8 Gen 3',
			imageUrl: 'url-to-image',
		},
	],
	'Трендові смартфони': [
		{
			name: 'Xiaomi 12',
			description: 'Найкращий смартфон',
			imageUrl: 'url-to-image',
		},
	],
	'Трендові гаджети': [
		{
			name: 'Xiaomi Mi Band',
			description: 'Фітнес-браслет',
			imageUrl: 'url-to-image',
		},
	],
};

const products: Product[] = [
	{
		name: 'Xiaomi Pad 6S Pro 12.4',
		description: '12.4" кришталево чіткий 3К-дисплей, 144 Гц',
		imageUrl: 'url-to-image',
	},
	{
		name: 'Xiaomi Watch S3',
		description: 'Універсальний безель для безмежної індивідуалізації',
		imageUrl: 'url-to-image',
	},
	{
		name: 'Xiaomi Smart Band 8 Pro',
		description: 'Великий прямокутний 1.74" AMOLED-дисплей',
		imageUrl: 'url-to-image',
	},
	{
		name: 'Xiaomi Pad 6',
		description: 'WQHD+-дисплей, 144 Гц, Snapdragon® 870',
		imageUrl: 'url-to-image',
	},
];

const CategoryComponent: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		'Флагманські продукти'
	);

	return (
		<div className='container mx-auto py-8'>
			<h2 className='text-2xl font-bold mb-4'>Рекомендовані товари</h2>
			<div className='flex space-x-4 mb-8'>
				{Object.keys(categories).map(category => (
					<button
						key={category}
						className={`py-2 px-4 ${
							selectedCategory === category
								? 'border-b-2 border-orange-500 text-orange-500'
								: ''
						}`}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				))}
			</div>
			<div className='bg-gray-100 p-4 rounded-lg flex'>
				<img
					src={categories[selectedCategory][0].imageUrl}
					alt={categories[selectedCategory][0].name}
					className='w-1/2 h-auto'
				/>
				<div className='ml-4'>
					<h3 className='text-xl font-bold'>
						{categories[selectedCategory][0].name}
					</h3>
					<p className='mt-2'>{categories[selectedCategory][0].description}</p>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
				{products.map((product, index) => (
					<div key={index} className='bg-white p-4 rounded-lg shadow'>
						<img
							src={product.imageUrl}
							alt={product.name}
							className='w-full h-48 object-cover'
						/>
						<h4 className='mt-2 font-bold'>{product.name}</h4>
						<p className='mt-1 text-sm'>{product.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryComponent;
