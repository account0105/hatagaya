import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import sanitizeHtml from "sanitize-html";
import "./style.css";

import {
    Box,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

const Course = ({ data }) => {
    const course = data["コース"];

    return (
        <div>
            {course.map((item, index) => {
                const price = new Intl.NumberFormat("en-US").format(item.price);
                return (
                    <div key={index} style={{}}>
                        <Box sx={{ flexGrow: 1, padding: "20px" }}>
                            <Grid
                                container
                                spacing={2}
                                columns={{ xs: 8, sm: 8, md: 8 }}
                            >
                                <Grid item xs={8} sm={5}>
                                    <Image
                                        src={item.image.url}
                                        alt="image"
                                        width={300}
                                        height={100}
                                        className={styles.image}
                                    />
                                </Grid>
                                <Grid item xs={8} sm={3}>
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontSize: {
                                                xs: "20px",
                                                sm: "22px",
                                                md: "26px",
                                            },
                                            marginBottom: "20px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily:
                                                "Shippori Mincho, serif",
                                            marginBottom: "20px",
                                            fontSize: {
                                                xs: "16px",
                                                sm: "18px",
                                                md: "24px",
                                            },
                                            fontWeight: "100",
                                        }}
                                    >{`￥${price}`}</Typography>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHtml(item.text),
                                        }}
                                        className={styles.courseDetail}
                                    ></div>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider variant="middle" component="li" />
                    </div>
                );
            })}
        </div>
    );
};

export default Course;
