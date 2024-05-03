import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import sanitizeHtml from "sanitize-html";

export default function NewsContents({ contents }) {
    const data = contents.contents;

    return (
        <div style={{ padding: "95px 0 0 0", margin: "0 auto", width: "80%" }}>
            <Typography
                variant="h1"
                sx={{
                    marginBottom: "40px",
                }}
            >
                お知らせ一覧
            </Typography>

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
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h2"
                                    
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    variant="p"
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHtml(
                                                data.text.length > 40
                                                    ? data.text.substring(
                                                          0,
                                                          40
                                                      ) + "...."
                                                    : data.text
                                            ),
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
                                        fontSize: { xs: 16, sm: 16, md: 18 },
                                        fontFamily: "Shippori Mincho, serif",
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
