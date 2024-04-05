import React from "react";
import Image from "next/image";
import styles from "./news.module.css";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { getDetail, getList } from "../../../libs/microcms";
import sanitizeHtml from "sanitize-html";
import { use } from "react";

export const revalidate = 10;

export default function NewsContents() {
    // function cutString(s, maxLength) {
    //     if (s.length > maxLength) {
    //         return s.substring(0, maxLength) + "...";
    //     } else {
    //         return s + "...";
    //     }
    // }

    const contents = use(getList());
    const data = contents.contents;

    return (
        <div style={{ padding: "95px 0 0 0", margin: "0 auto", width: "80%" }}>
            <h2 className={styles.newsTitle}>
                お知らせ一覧
            </h2>

            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
                sx={{ margin: "auto" }}
            >
                {data.map((data, index) => (
                    <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                maxWidth: 500,
                                minHeight: {
                                    xs: 300,
                                    sm: 350,
                                },
                                backgroundColor: "#1D1D1D",
                                margin: "0 auto",
                                position: "relative",
                            }}
                            key={index}
                        >
                            <CardMedia
                                sx={{ height: 140 }}
                                image={data.image.url}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="p"
                                    component="h2"
                                    sx={{ fontWeight: "200",fontSize:{sx:"20px",sm:"24px"}}}
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    variant="div"
                                    color="text.secondary"
                                    sx={{
                                        color: "black",
                                        fontSize: { xs: 16, sm: 20 },
                                       
                                    }}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHtml(
                                                data.text.length > 45
                                                    ? data.text.substring(
                                                          0,
                                                          45
                                                      ) + "...."
                                                    : data.text
                                            ),
                                        }}
                                        className={styles.text}
                                    ></div>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={`/news/${data.id}`}
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        fontSize: { xs: 16, sm: 16, md: 18 },
                                        fontFamily:
                                                                "Shippori Mincho, serif",
                                    }}
                                >
                                    続きを読む
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
