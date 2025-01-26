import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">欢迎使用小红书文案生成器</h1>
      <p className="text-xl text-center mb-8">轻松创建吸引人的小红书文案，提高你的社交媒体影响力！</p>
      <div className="text-center">
        <Link
          href="/generate"
          className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
        >
          开始生成文案
        </Link>
      </div>
    </div>
  )
}

