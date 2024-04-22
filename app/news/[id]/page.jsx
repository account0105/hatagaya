import { notFound } from "next/navigation";
import { getDetail, getList } from "../../libs/microcms";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import styles from "./page.module.css";
import { use ,} from "react";


async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
        return {
            id: post.id,
        };
    });

    return [...paths];
}


export default  function StaticDetailPage({ params }) {
    const postId = params.id;
    const post = use(getDetail(postId));
    // const post = await getDetail(postId);


    if (!post) {
        notFound();
    }

    function cutString(s, maxLength) {
        return s.substring(0, maxLength);
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.contentsBox}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p>{cutString(post.createdAt, 10)}</p>
                    <Image
                        src={post.image.url}
                        width={100}
                        height={100}
                        alt="blogImage"
                        className={styles.image}
                    ></Image>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(post.text),
                        }}
                        className={styles.text}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export { generateStaticParams };
