import NewsContents from "../components/newsPage/newsContents/newsContents";
import { getList } from "../libs/microcms";
import { use } from "react";

export default function Home() {
    const contents = use(getList());
    return (
        <>
                <NewsContents contents={contents}/>
        </>
    );
}
