import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>云术工作室 | ClouderyStudio</title>
        <meta charSet="utf-8" />
      </head>
      <body>
    <div data-wrapper="" className="border-grid flex flex-1 flex-col min-h-svh bg-background font-sans antialiased">
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
      </ThemeProvider>
    </div>
      </body>
    </html>
  );
}