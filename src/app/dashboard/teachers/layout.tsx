// RootLayout.tsx
import { Sidebars } from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Ibarra_Real_Nova } from "next/font/google";

const Ibbara = Ibarra_Real_Nova({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const user = await isAuthenticated();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Ibbara.className} relative h-screen font-sans antialiased`}
      >
        <main className="flex h-screen overflow-hidden">
          <div className="w-[12%] h-full ">
            <Sidebars user={user} />
          </div>
          <section className="w-[88%] h-full overflow-y-auto">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
