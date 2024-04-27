import { createClient } from "microcms-js-sdk";

// 環境変数のチェック
// if (!process.env.MICROCMS_SERVICE_DOMAIN) {
//     throw new Error("MICROCMS_SERVICE_DOMAIN is required");
// }

// if (!process.env.MICROCMS_API_KEY) {
//     throw new Error("MICROCMS_API_KEY is required");
// }

// API取得用のクライアントを作成
const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得する関数
const getMenuList = async (queries) => {
    const listData = await client.getAllContents({
        endpoint: "menu",
        queries,
        customRequestInit: {
            next: {
                revalidate: 3600,
            },
        },
    });

    return listData;
};

// モジュールとしてエクスポート

export { client, getMenuList };
