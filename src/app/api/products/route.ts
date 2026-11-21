import { getProducts } from '@/lib/api';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = request.nextUrl;
		const limit = Number(searchParams.get('limit') ?? 10);
		const skip = Number(searchParams.get('skip') ?? 0);
		const q = searchParams.get('q') ?? '';

		const data = await getProducts({ limit, skip, q });
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{
				message:
					error instanceof Error ? error.message : 'Ошибка сервера',
			},
			{ status: 500 }
		);
	}
}
