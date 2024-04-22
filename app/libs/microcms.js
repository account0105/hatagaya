import { createClient } from "microcms-js-sdk";



// API取得用のクライアント
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧取得
export const getList = async (queries) => {
    const listData = await client.getList({
        customRequestInit: {
            next: {
                revalidate: 3600,
            },
        },
        endpoint: "blog",
        queries,
    });

    return listData;
};

// ブログ詳細取得
export const getDetail = async (contentId, queries) => {
    const detailData = await client.getListDetail({
        customRequestInit: {
            next: {
                revalidate: 3600,
            },
        },
        endpoint: "blog",
        contentId,
        queries,
    });
    return detailData;
};
