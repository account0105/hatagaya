import Section from "./components/topPage/section/Section";
import ResponsiveAppBar from "./components/MUIheader/MUIheader";
import MenuSlider from "./components/topPage/menu_slider/MenuSlider";
import SlideShow from "./components/topPage/commitment/SlideShow";
import Map from "./components/map/Map";
import Recommend from "./components/menuPage/menuHeader/recommend/Reccomend";
import { use } from "react";
import { getList } from "./libs/menu_cms";
import "./menu/css/base.css";
import "./menu/css/style.css";
import "./menu/css/embla.css";

export default function Home() {
    const data = use(getList());

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
            
                    <Recommend slides={SLIDES} options={OPTIONS} />
                <MenuSlider />
                <Section />
                <Map />
            </div>
        </>
    );
}
