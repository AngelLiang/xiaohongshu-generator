import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "小红书文案生成器",
  description: "轻松生成吸引人的小红书文案",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

