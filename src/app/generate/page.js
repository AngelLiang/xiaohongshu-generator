"use client"

import { useState } from "react"

export default function Generate() {
  const [topic, setTopic] = useState("")
  const [generatedCopy, setGeneratedCopy] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里应该是调用AI生成文案的逻辑
    // 为了演示，我们只是返回一个简单的模板文案
    const template = `#${topic} 
今天给大家分享一个超级实用的小技巧！🌟

你们知道吗？${topic}其实有一个秘密...

🔍 首先，...
💡 其次，...
🎉 最后，...

希望这个小贴士能帮到你们！如果觉得有用的话，别忘了点赞关注哦~ 
有什么想法也可以在评论区告诉我，我们一起讨论！❤️`

    setGeneratedCopy(template)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">生成小红书文案</h1>
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
            placeholder="例如：护肤、美食、旅游等"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            生成文案
          </button>
        </div>
      </form>
      {generatedCopy && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">生成的文案：</h2>
          <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">{generatedCopy}</pre>
        </div>
      )}
    </div>
  )
}

