import { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./_styles/globalStyles.linaria.global";

// loading fonts
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-poppins",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

// metadata
export const metadata: Metadata = {
  title: "Half Century Health and Fitness",
  description: "Personal training for adults over 50",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
