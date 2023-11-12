import "@/app/ui/global.css"
import { inter, lusitanaFont } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitanaFont.className} antialised`} >{children}</body>
    </html>
  );
}
