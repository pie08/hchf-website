import Modal from "@/app/_components/Modal";
import { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ContactModal from "./_components/ContactModal";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import ProgressBar from "./_components/ProgressBar";
import "./_styles/globalStyles.linaria.global";

// todo: add DOB and start date to client profile data, compute for each profile

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
        <ProgressBar />
        <Toaster />
        <Modal>
          <ContactModal />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Modal>
      </body>
    </html>
  );
}
