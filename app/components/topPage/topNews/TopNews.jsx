"use client";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import sanitizeHtml from "sanitize-html";
import { use } from "react";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
const TopNews = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [scrollProgress, setScrollProgress] = useState(0);

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onScroll(emblaApi);
        emblaApi.on("reInit", onScroll);
        emblaApi.on("scroll", onScroll);
    }, [emblaApi, onScroll]);
    const topNewsSlides = slides.slice(0, 5);
    return (
        <div>
            <div className="news_embla">
                <Typography
                variant="h1"
                    sx={{
                        fontFamily: "Shippori Mincho, serif",
                      
                        m: "15px 0 0 15px",
                        fontWeight: "100",
                    }}
                >
                    最新のお知らせ
                </Typography>
                <div className="news_embla__viewport" ref={emblaRef}>
                    <div className="news_embla__container">
                        {topNewsSlides.map((data, index) => (
                            <div className="news_embla__slide" key={index}>
                                <div className="news_embla__slide__number">
                                    <div
                                        style={{
                                            padding: "20px 0 0 0",
                                            margin: "0 auto",
                                            width: "100%",
                                        }}
                                    >
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
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h2"
                                                    sx={{
                                                        margin: "0 0 10px 0",
                                                    }}
                                                >
                                                    {data.title}
                                                </Typography>
                                                <Typography variant="p">
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: sanitizeHtml(
                                                                data.text
                                                                    .length > 40
                                                                    ? data.text.substring(
                                                                          0,
                                                                          40
                                                                      ) + "...."
                                                                    : data.text
                                                            ),
                                                        }}
                                                        style={{
                                                            fontWeight: "100",
                                                        }}
                                                    ></div>
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    href={`/news/${data.id}`}
                                                    sx={{
                                                        position: "absolute",
                                                        bottom: 0,
                                                        fontSize: {
                                                            xs: 14,
                                                            sm: 14,
                                                            md: 14,
                                                        },
                                                        fontFamily:
                                                            "Shippori Mincho, serif",
                                                    }}
                                                >
                                                    続きを読む
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="news_embla__controls">
                    <div className="embla__progress">
                        <div
                            className="embla__progress__bar"
                            style={{
                                transform: `translate3d(${scrollProgress}%,0px,0px)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNews;
