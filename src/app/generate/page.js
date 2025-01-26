"use client"

import { useState } from "react"

export default function Generate() {
  const [topic, setTopic] = useState("")
  const [generatedCopy, setGeneratedCopy] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里应该是调用AI接口生成文案的逻辑
    // 为了演示，我们只是简单地返回一些模拟的文本
    setGeneratedCopy(
      `这是关于"${topic}"的小红书文案：\n\n🌟 探索${topic}的魅力\n💖 ${topic}带给我的惊喜\n🔥 ${topic}：你不知道的秘密\n\n#${topic} #小红书 #分享生活`,
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">生成你的小红书文案</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">
            输入主题：
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="例如：旅行、美食、时尚"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            生成文案
          </button>
        </div>
      </form>
      {generatedCopy && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold mb-4">生成的文案：</h2>
          <pre className="whitespace-pre-wrap">{generatedCopy}</pre>
        </div>
      )}
    </div>
  )
}

