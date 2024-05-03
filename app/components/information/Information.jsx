import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

const Imfomation = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className={styles.informationBox}>
                <div className={styles.title}>
                    <Image
                        width={150}
                        height={100}
                        alt="image"
                        src="/image/logo-removebg.png"
                        className={styles.image}
                    />
                    <h1 className="text">焼肉　はたがや</h1>
                </div>

                <div className={styles.gridBox}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8 }}
                        sx={{
                            width: "100%",
                            padding: { xs: "22px", sm: "30px", md: "40px" },
                            maxWidth: "1300px",
                            fontSize: { xs: "12px", sm: "14px", md: "20px" },
                        }}
                    >
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">住所</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">
                                〒151- 0072　 東京都渋谷区幡ヶ谷1-2-8
                                スカイマンション幡ヶ谷林ビル1F
                            </Typography>
                        </Grid>

                        <Divider
                       
                        />
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">電話番号</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">03-5333-2410</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">営業時間</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">ランチ</Typography>
                            <br></br>
                            <Typography variant="p">
                                11:30 ～ 14:00 ( L.O 13:30)
                            </Typography>
                            <br></br>

                            <Typography variant="p">ディナー</Typography>
                            <br></br>
                            <Typography variant="p">
                                17:00 ～ 23:00 ( L.O 22:30)
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">定休日</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">年末年始</Typography>
                            <Typography variant="p">
                                詳細はお知らせをご覧ください
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">決済方法</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">スマレジ対応</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">備考</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <Typography variant="p">席数8</Typography>
                            <Typography variant="p">禁煙</Typography>
                            <Typography variant="p">半個室あり</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Imfomation;
