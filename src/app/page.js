import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">小红书文案生成器</h1>
      <p className="text-xl text-center mb-8">轻松创作吸引人的小红书文案，提高你的影响力！</p>
      <div className="text-center">
        <Link href="/generate" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          开始生成文案
        </Link>
      </div>
    </div>
  )
}

