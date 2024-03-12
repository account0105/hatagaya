'use client';
import Header from "./components/header/Header";
import { Shippori_Mincho } from "next/font/google";
import Commitment from "./components/commitment/Commitment";

const shipporiMincho = Shippori_Mincho({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <div>
                <Header />
                <Commitment />
            </div>
        </>
    );
}
