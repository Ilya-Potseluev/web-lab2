'use client';

import { IProduct } from '@/lib/api';
import { useState } from 'react';

type ProductFormData = Omit<IProduct, 'id'>;

interface ProductFormProps {
	initialData?: ProductFormData;
	submitLabel?: string;
	disabled?: boolean;
	onSubmit: (data: ProductFormData) => void;
	onCancel?: () => void;
}

const emptyData: ProductFormData = {
	title: '',
	description: '',
	category: '',
	price: 0,
	stock: 0,
	rating: 5,
};

export function ProductForm({
	initialData = emptyData,
	submitLabel = 'Сохранить',
	disabled = false,
	onSubmit,
	onCancel,
}: ProductFormProps) {
	const [form, setForm] = useState<ProductFormData>(initialData);

	const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		onSubmit(form);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-3 rounded-lg border border-blue-400 bg-white p-4 text-sm"
		>
			<input
				required
				disabled={disabled}
				value={form.title}
				onChange={e => setForm({ ...form, title: e.target.value })}
				placeholder="Название"
				className="w-full"
			/>
			<textarea
				required
				disabled={disabled}
				value={form.description}
				onChange={e =>
					setForm({ ...form, description: e.target.value })
				}
				placeholder="Описание"
				className="w-full"
			/>
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
				<input
					required
					disabled={disabled}
					value={form.category}
					onChange={e =>
						setForm({ ...form, category: e.target.value })
					}
					placeholder="Категория"
				/>
				<input
					required
					disabled={disabled}
					type="number"
					step="0.01"
					value={form.price || ''}
					onChange={e => setForm({ ...form, price: +e.target.value })}
					placeholder="Цена"
				/>
				<input
					required
					disabled={disabled}
					type="number"
					value={form.stock || ''}
					onChange={e => setForm({ ...form, stock: +e.target.value })}
					placeholder="Остаток"
				/>
				<input
					required
					disabled={disabled}
					type="number"
					step="0.1"
					min="0"
					max="5"
					value={form.rating}
					onChange={e =>
						setForm({ ...form, rating: +e.target.value })
					}
					placeholder="Рейтинг"
				/>
			</div>
			<div className="flex justify-end gap-2">
				{onCancel && (
					<button
						className="rnd"
						type="button"
						disabled={disabled}
						onClick={onCancel}
					>
						Отмена
					</button>
				)}
				<button
					type="submit"
					disabled={disabled}
					className="bg-blue-600 text-white rnd"
				>
					{submitLabel}
				</button>
			</div>
		</form>
	);
}
