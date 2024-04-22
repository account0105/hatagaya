import React, { Suspense, use } from "react";
import { getList } from "../libs/menu_cms";
import MenuList from "../components/menuPage/menuHeader/MenuList";
import Recommend from "../components/menuPage/menuHeader/recommend/Reccomend";
import "./css/base.css";
import "./css/embla.css";
import "./css/style.css";

// export const revalidate = 3600;

export default function Page({ params, searchParams }) {
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
            <div className="container">
                <div className="title">メニュー</div>
         
                    {searchParams.name ? (
                        <MenuList data={menuList} params={searchParams} />
                    ) : (
                        <Recommend slides={SLIDES} options={OPTIONS} />
                    )}
                    {searchParams.name ? (
                        <Recommend slides={SLIDES} options={OPTIONS} />
                    ) : (
                        <MenuList data={menuList} params={searchParams} />
                    )}
            </div>
        </>
    );
}
