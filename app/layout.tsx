import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";

export const metadata = {
  title: 'TriForMine',
  description: "Welcome, I'm TriForMine and I'm an independent programmer. Creator of the discord bot Isekai Maid and much more!"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
