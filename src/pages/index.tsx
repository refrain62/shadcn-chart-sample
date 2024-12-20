import localFont from "next/font/local";

import { Component } from "@/components/example-chat";
import Layout from "@/components/layout";
import { ModeToggle } from '@/components/theme-change';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Layout>
        <ModeToggle />
        <Component />
      </Layout>
    </main>
  );
}
