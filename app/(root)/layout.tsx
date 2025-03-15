import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import Categories from "@/components/shared/header/categories";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper">{children}</main>
        <Footer />
      </div>
    );
  }