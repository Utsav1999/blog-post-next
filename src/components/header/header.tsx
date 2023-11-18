import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-purple-500/10 text-blue-500/100 p-4 flex justify-between item-center">
            <h1 className="text-2xl">
                BlogX
            </h1>
            <div className="flex item-center">
                <div className="relative inline-block text-left">
                    <Link className="cursor-pointer hover:text-purple-700" href="/">
                        <span className="ml-5">Home</span>
                    </Link>
                    <Link className="cursor-pointer hover:text-purple-700" href="/about">
                        <span className="ml-5">About Us</span>
                    </Link>
                    <Link className="cursor-pointer hover:text-purple-700" href="/contact">
                        <span className="ml-5">Contact Us</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}