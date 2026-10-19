import type { Metadata } from "next";
import SiteHeader from "@/components/ui/SiteHeader";
import { dmSans, manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataLife e-Health | Clinical Portal",
  description:
    "A privacy-conscious consultation and audit console for the DataLife e-Health ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <SiteHeader />

        {children}

        <footer className="site-footer">
          <div className="section-container footer-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} DataLife e-Health.
              Built with accessibility in mind.
            </p>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#main-content">Home</a>
              <a href="#application-status">Application status</a>
              <a href="#overview">Accessibility</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
