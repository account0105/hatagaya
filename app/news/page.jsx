import React, { Suspense } from "react";
import NewsContents from "../components/newsPage/newsContents/newsContents";
export default function Home() {
    return (
        <>
            {/* <Suspense fallback={<div style={{margin:"100px 0  0 100px" }}>loading</div>}> */}
                <NewsContents />
            {/* </Suspense> */}
        </>
    );
}
