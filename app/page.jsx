import Section from "./components/topPage/section/Section";
import MenuSlider from "./components/topPage/menu_slider/MenuSlider";
import SlideShow from "./components/topPage/commitment/SlideShow";
import Map from "./components/map/Map";
import Recommend from "./components/menuPage/menuHeader/recommend/Reccomend";
import TopNews from "./components/topPage/topNews/TopNews";

import { Suspense, use } from "react";
import { getMenuList } from "./libs/menu_cms";
import { getList } from "./libs/microcms";
import "./menu/css/base.css";
import "./menu/css/style.css";
import "./menu/css/embla.css";

export default function Home() {
    const data = use(getMenuList());

    const contents = use(getList());
    const newsData = contents.contents;

    const NEWSOPTIONS = { dragFree: true };
    const NEWSSLIDES = newsData;

    function categorizeItems(items) {
        const categorizedObject = {};
        const sortedObj = {};

        items.forEach((item) => {
            const categoryName = item.category.category; // カテゴリー名を取得
            if (!categorizedObject[categoryName]) {
                categorizedObject[categoryName] = []; // カテゴリーがまだオブジェクトになければ、配列を初期化
            }
            categorizedObject[categoryName].push(item); // アイテムをカテゴリーの配列に追加
        });

        Object.keys(categorizedObject).forEach((category) => {
            // 各カテゴリー内のアイテムをソート
            sortedObj[category] = categorizedObject[category].sort((a, b) => {
                // aにimageがあり、bにはない場合、aを前に
                if (a.image && !b.image) {
                    return -1;
                }
                // bにimageがあり、aにはない場合、bを前に
                if (b.image && !a.image) {
                    return 1;
                }
                // 両方またはどちらにもimageがない場合は順序を変更しない
                return 0;
            });
        });

        return categorizedObject;
    }
    const menuList = categorizeItems(data);
    const recommendMenu = menuList["おすすめ"];
    const OPTIONS = {};
    const SLIDES = recommendMenu;

    return (
        <>
            <div>
                <SlideShow />
                <Suspense
                    fallback={<div style={{ margin: "100px" }}>loading</div>}
                >
                    <Recommend slides={SLIDES} options={OPTIONS} />
                </Suspense>
                <MenuSlider />
                <Section />
                <Map />
                <TopNews data={newsData} slides={NEWSSLIDES} options={NEWSOPTIONS} />
            </div>
        </>
    );
}
