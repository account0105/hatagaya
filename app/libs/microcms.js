import { createClient } from "microcms-js-sdk";

// 環境変数のチェック
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// ブログ一覧を取得する関数
export const getList = async (queries) => {
    const listData = await client.getList({
        customRequestInit: {
			next: {
				revalidate: 0,
			},
		},
        endpoint: "blog",
        queries,
    });

    return listData;
};

// ブログの詳細を取得する関数
export const getDetail = async (contentId, queries) => {
    const detailData = await client.getListDetail({
        customRequestInit: {
			next: {
				revalidate: 0,
			},
		},
        endpoint: "blog",
        contentId,
        queries,
    });
    return detailData;
};

