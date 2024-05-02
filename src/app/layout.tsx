import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/Layout/Layout";

export const metadata: Metadata = {
  title: "1sonia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>1sonia</title>
        <meta
          name="description"
          content="1sonia is best solution for remote orders"
        />
        <meta name="keywords" content="1sonia, sonia, sonia1" />
        <link rel="icon" href="image/sonia.svg" />
      </head>
      <body className="">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
