import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";

const style = {
    py: 0,
    width: "100%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "#212121",
};
const Drink = ({ data }) => {
    const drink = data["ドリンク"];
    const softDrink = data["ソフトドリンク"];
    const wine = data["ワイン"];
    const menuList = [
        { data: drink, name: "アルコール" },
        { data: softDrink, name: "ソフトドリンク" },
        { data: wine, name: "ワイン" },
    ];
    return (
        <div className={style.menuBox}>
            {menuList.map((category, index) => (
                <div key={index}>
                    <h2 className={styles.title}>{category.name}</h2>
                    <List sx={style}>
                        {category.data?.map((item, index) => {
                            const price = new Intl.NumberFormat("en-US").format(
                                item.price
                            );
                            if (item.image) {
                                return (
                                    <div key={index}>
                                        <Card
                                            sx={{
                                                backgroundColor: "#212121",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "10px 20px 10px 10px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    width: "100%",
                                                }}
                                            >
                                                <CardContent
                                                    sx={{
                                                        display: { sm: "flex" },
                                                        justifyContent: {
                                                            sm: "space-between",
                                                        },
                                                        width: {
                                                            sm: "250px",
                                                            md: "100%",
                                                        },
                                                        padding: { md: "40px" },
                                                    }}
                                                >
                                                    <Typography
                                                        component="div"
                                                        variant="h4"
                                                        sx={{
                                                            fontFamily:
                                                                "Shippori Mincho, serif",
                                                            fontSize: {
                                                                xs: "14px",
                                                                sm: "22px",
                                                            },
                                                            width: {
                                                                md: "80%",
                                                            },
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="div"
                                                        component="p"
                                                        sx={{
                                                            fontSize: {
                                                                xs: "14px",
                                                                sm: "22px",
                                                            },
                                                        }}
                                                    >
                                                        {`￥${price}`}
                                                    </Typography>
                                                </CardContent>
                                            </Box>
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    width: {
                                                        xs: "50%",
                                                        sm: "50%",
                                                    },
                                                    borderRadius: "2px",
                                                    boxShadow:
                                                        "0px 0px 4px 0px #161616",
                                                }}
                                                image={item.image.url}
                                                alt={item.title}
                                            />
                                        </Card>
                                        <Divider
                                            variant="middle"
                                            component="li"
                                        />
                                    </div>
                                );
                            }
                            return (
                                <div key={index}>
                                    <ListItem
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: {
                                                xs: "100%",
                                                sm: "70%",
                                                md: "50%",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="p"
                                            sx={{
                                                fontSize: {
                                                    xs: "14px",
                                                    sm: "22px",
                                                },
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                fontSize: {
                                                    xs: "14px",
                                                    sm: "22px",
                                                },
                                            }}
                                        >
                                            {`￥${price}`}
                                        </Typography>
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </div>
                            );
                        })}
                    </List>
                </div>
            ))}
        </div>
    );
};

export default Drink;
