import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-red-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          小红书文案生成器
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              首页
            </Link>
          </li>
          <li>
            <Link href="/generate" className="hover:underline">
              生成文案
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

