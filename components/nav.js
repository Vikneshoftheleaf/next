import Link from "next/link"
export default function Nav() {
    return (
        <div className="container m-auto flex justify-between gap-5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl shadow-xl p-5 my-5 items-center">
            <div className="logo">
                <h1 className="text-4xl font-black">LOGO</h1>
            </div>
            <div className="links flex gap-3 font-bold">
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>

        </div>
    )
}
