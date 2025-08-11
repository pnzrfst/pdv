import type { Metadata } from "next";

import "./globals.css";
import LateralMenu from "@/components/LateralMenu";

export const metadata: Metadata = {
  title: "Ponto de venda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <LateralMenu />
          <div
            className="pageContent"
            style={{
              overflowY: "auto",
              flex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
