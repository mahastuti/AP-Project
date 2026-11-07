import "./globals.css";

export const metadata = {
  title: "Next.js Fullstack App",
  description: "next.js app router + api routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
