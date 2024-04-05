import "./globals.css";
import { Shippori_Mincho } from "next/font/google";
import ResponsiveAppBar from "./components/MUIheader/MUIheader";
import Footer from "./components/footer/Footer";

const ShipporiMincho = Shippori_Mincho({ weight: "400", subsets: ["latin"] });
export const metadata = {
    title: "焼肉 はたがや",
    description: "焼肉はたがや　ホームページ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body style={{ backgroundColor: "#161616" }}  className="theme-light">
                <ResponsiveAppBar />
                <main style={{ minHeight: "88vh" }}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
