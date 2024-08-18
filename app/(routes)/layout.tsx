import { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "../_styles/globalStyles.linaria.global";
import { ModalContextProvider } from "../_context/ModalContext";
import Modal from "../_components/Modal";
import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";

// loading fonts
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

// metadata
export const metadata: Metadata = {
  title: {
    template: "%s | HCHF",
    default: "Half Century Health and Fitness",
  },
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
      <body>
        <ModalContextProvider>
          <Modal />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ModalContextProvider>
      </body>
    </html>
  );
}
