import { createClient } from "microcms-js-sdk";

// API取得用のクライアント
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧取得
export const getList = async (queries) => {
    try {
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
    } catch (error) {
        console.error("Error fetching blog list:", error);
        throw error;
    }
};

// ブログ詳細取得
export const getDetail = async (contentId, queries) => {
    try {
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
    } catch (error) {
        console.error("Error fetching blog detail:", error);
        throw error;
    }
};
