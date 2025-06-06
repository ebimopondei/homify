import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AuthProvider } from "@/hooks/auth-provider";
import { Toaster } from "react-hot-toast";



const montserrat = Montserrat( {
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  antialiased relative`}
      >
        <AuthProvider>
          <header className="bg-blue-1000 shadow-sm">
            <div className="container mx-auto px-6 md:px-16 py-3 md:py-5 flex items-center justify-between">
              <div className="flex items-center justify-between gap-8 w-full">
                <div>
                  <Image src="/logo.png" alt="Homely Buy Logo" width={40} height={40} />
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                  <a href="#" className="text-blue-600 font-medium">
                    Buy
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Rent
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Short Rent
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    About
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Agents
                  </a>
                </nav>
                <div>
                  <Button className="bg-blue-500 hover:bg-blue-600 rounded-full">
                    PAUL SLACK <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
