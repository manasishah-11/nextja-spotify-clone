import { Figtree } from "next/font/google";

// import getSongsByUserId from '@/actions/getSongsByUserId'
// import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import Sidebar from "@/components/Sidebar";
import ToastProvider from "@/providers/ToastProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
// import Player from '@/components/Player'

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
