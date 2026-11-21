import { getProducts } from '@/lib/api';
import { ProductsClient } from '@/components/ProductsClient';

export default async function HomePage() {
	const initialData = await getProducts({ limit: 10, skip: 0 });

	return <ProductsClient initialData={initialData} />;
}
