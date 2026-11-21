import Link from 'next/link';

export function Header() {
	return (
		<header className="border-b bg-white">
			<div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
				<Link href="/" className="text-lg font-bold">
					Products
				</Link>
			</div>
		</header>
	);
}
