import "@/app/ui/global.css";
import { interFont as inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fallback to an empty string if inter.className is undefined
  const fontClassName = inter?.className || "";

  return (
    <html lang="en">
      <body className={`${fontClassName} antialiased`}>{children}</body>
    </html>
  );
}
