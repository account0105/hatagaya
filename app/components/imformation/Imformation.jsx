import { Box, Divider, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./style.css";

const Imfomation = () => {


    return (
        <div style={{ width: "100%" }}>
            <div className="informationBox">
                <div className="title">
                    <Image
                        width={150}
                        height={100}
                        alt="image"
                        src="/image/logo-removebg.png"
                        className="image"
                    />
                    <h1 className="text">焼肉　はたがや</h1>
                </div>

                <div className="gridBox">
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8 }}
                        sx={{
                            width: "100%",
                            padding: "22px",
                            maxWidth: "1300px",
                            fontSize: { xs: "12px", sm: "14px", md: "20px" },
                        }}
                    >
                        <Grid item xs={2} sm={4}>
                            <p>住所</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>
                                〒151-0072　 東京都渋谷区幡ヶ谷1丁目2-8
                                スカイマンション幡ヶ谷林ビル1F
                            </p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>電話番号</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>050-5594-7310</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>営業時間</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>ランチ</p>
                            <p> 11:30 ～ 14:00 ( L.O 13:30)</p>

                            <p>ディナー</p>
                            <p> 17:00 ～ 23:00 ( L.O 22:30)</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>定休日</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>年末年始</p>
                            <p>詳細はお知らせをご覧ください</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>決済方法</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>スマレジ対応</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>備考</p>
                        </Grid>
                        <Grid item xs={2} sm={4}>
                            <p>席数8</p>
                            <p>禁煙</p>
                            <p>半個室あり</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Imfomation;
