import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const operatorMono = localFont({
  src: "./fonts/OperatorMonoLig-BookItalic.otf",
  variable: "--font-operator-mono",
});

export const metadata: Metadata = {
  title: "Visionary TT",
  description:
    "Personal website of Tshepo Theodore Khumako. I build websites and web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-[url('/bg-image.jpg')] bg-no-repeat"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "font-sans antialiased backdrop-blur-sm backdrop-saturate-200 bg-transparent/60",
          geistSans.variable,
          geistMono,
          operatorMono.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container">
            <div className="lg:w-1/2 mx-auto min-h-screen flex flex-col gap-8">
              <header className="sticky top-6 p-3 rounded-xl flex flex-col justify-start gap-4 items-center w-full">
                <Navbar />
              </header>
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
