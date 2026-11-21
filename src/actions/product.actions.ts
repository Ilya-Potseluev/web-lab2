'use server';

import {
	createProduct,
	deleteProductById,
	IProduct,
	updateProductById,
} from '@/lib/api';
import { revalidateTag } from 'next/cache';

export async function createProductAction(
	data: Omit<IProduct, 'id'>
): Promise<IProduct> {
	const created = await createProduct(data);
	revalidateTag('products', 'max');
	return created;
}

export async function updateProductAction(
	product: IProduct
): Promise<IProduct> {
	const { id, ...fields } = product;
	await updateProductById(id, fields);
	revalidateTag('products', 'max');
	revalidateTag(`product-${id}`, 'max');
	return product;
}

export async function deleteProductAction(id: number): Promise<number> {
	await deleteProductById(id);
	revalidateTag('products', 'max');
	return id;
}
