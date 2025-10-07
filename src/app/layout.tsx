import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ponto de venda",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
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
