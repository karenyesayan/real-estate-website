import type { Metadata } from "next";
import { urbanist } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Estatein Home Page",
  description: "Real Estate Website",
  metadataBase: new URL("http://localhost:3000/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
