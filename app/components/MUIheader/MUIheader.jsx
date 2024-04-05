"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";

const pages = [
    { name: "ホーム", path: "/" },
    { name: "メニュー", path: "/menu" },
    { name: "店舗情報", path: "/shop" },
    { name: "お知らせ", path: "/news" },
]; 
const communities = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/yakiniku_hatagaya/",
    },
    {
        name: "食べログ",
        url: "https://tabelog.com/tokyo/A1318/A131807/13213734/",
    },
    {
        name: "ホットペッパー",
        url: "https://www.hotpepper.jp/strJ001193236/",
    },
    {
        name: "一休",
        url: "https://restaurant.ikyu.com/123506",
    },
    {
        name: "UberEats",
        url: "https://www.ubereats.com/store/%E7%84%BC%E8%82%89-%E3%81%AF%E3%81%9F%E3%81%8B%E3%82%84-yakiniku-hatagaya/cj5ppEE6Vj6sI01GWBEFUQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMiVFNSU4OCU5RCVFNSU4RSU5RiUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUp4YXlkcFQtY2lWOFIyenVuVkhWMXhwayUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EzOC40MDE4OTA0JTJDJTIybG9uZ2l0dWRlJTIyJTNBMTQxLjA0NzUxNjYlN0Q%3D",
    },
    {
        name: "出前館",
        url: "https://demae-can.com/shop/menu/3098831",
    },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // コミュニティ
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#161616",
                position: "fixed",
                top: 0,
                zIndex: 10,
                height: {
                    xs: 60,
                    sm: 65,
                },
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: "#161616",
                    position: "fixed",
                    top: 0,
                    zIndex: 10,
                    height: {
                        xs: 60,
                        sm: 65,
                    },
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{ gap: "5px", display: "flex", alignItems: "center" }}
                >
                    {/* デスクトップアイコン */}
                    <Link href="/" passHref>
                        <Typography
                            variant="h6"
                            noWrap
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <Image
                                src="/image/mobile-logo-removebg.png"
                                width={35}
                                height={35}
                                alt="logo"
                                property="true"
                            ></Image>
                        </Typography>
                    </Link>
                    {/* スマホメニューバー */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", sm: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ width: "60px", height: "60px" }}
                        >
                            <MenuIcon sx={{ width: "60px", height: "30px" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", sm: "none" },
                                "& .MuiPaper-root": {
                                    // MUIのPaperコンポーネントにスタイルを適用
                                    backgroundColor: "#1D1D1D", // ここで背景色を設定
                                },
                                width: "100%",
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link href={page.path}>
                                        <Typography
                                            textAlign="center"
                                            sx={{
                                                fontFamily:
                                                    "Shippori Mincho, serif",
                                                fontSize: "20px",
                                                padding: "5px 20px",
                                            }}
                                        >
                                            {page.name}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <div>
                                <Button
                                    id="mobile"
                                    aria-controls={
                                        open ? "mobMenu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                    sx={{
                                        fontFamily: "Shippori Mincho, serif",
                                        fontSize: "22px",
                                        padding: "5px 20px",
                                        color: "white",
                                        fontWeight: "400",
                                    }}
                                >
                                    コミュニティ
                                </Button>
                                <Menu
                                    id="mobMenu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "mobile",
                                    }}
                                    sx={{
                                        "& .MuiPaper-root": {
                                            // MUIのPaperコンポーネントにスタイルを適用
                                            backgroundColor: "#1D1D1D", // ここで背景色を設定
                                        },
                                        width: "100%",
                                    }}
                                >
                                    {communities.map((data, index) => (
                                        <MenuItem
                                            onClick={handleClose}
                                            key={index}
                                            sx={{
                                                padding: "20px 20px 10px 20px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <Link href={data.url} passHref>
                                                <Typography
                                                    sx={{
                                                        "&:hover": {
                                                            transform: `scale(1.1)`,
                                                            transition: "0.2s",
                                                        },
                                                        fontSize: "10px",
                                                        fontFamily: `"Shippori Mincho", serif`,
                                                    }}
                                                >
                                                    {data.name}
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        </Menu>
                    </Box>
                    {/* スマホアイコン */}{" "}
                    <Link href="/" passHref>
                        <Typography
                            noWrap
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: "flex", sm: "none" },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <Image
                                src="/image/mobile-logo-removebg.png"
                                width={35}
                                height={35}
                                alt="logo"
                            ></Image>
                        </Typography>
                    </Link>
                    {/* デスクトップメニューバー */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "space-around",
                            "& > :last-child": {
                                marginRight: "0",
                            },
                            margin: " 0 0 0 50px",
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    marginRight: "48px",
                                }}
                            >
                                <Link href={page.path}>
                                    <Typography
                                        sx={{
                                            fontFamily:
                                                "Shippori Mincho, serif",
                                            fontSize: "18px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </Link>
                            </Button>
                        ))}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                sx={{
                                    color: "white",
                                    fontFamily: "Shippori Mincho, serif",
                                    fontSize: "18px",
                                    fontWeight: "300",
                                }}
                            >
                                コミュニティ
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                                sx={{
                                    "& .MuiPaper-root": {
                                        // MUIのPaperコンポーネントにスタイルを適用
                                        backgroundColor: "#1D1D1D", // ここで背景色を設定
                                    },
                                    width: "100%",
                                }}
                            >
                                {communities.map((data, index) => (
                                    <MenuItem
                                        onClick={handleClose}
                                        key={index}
                                        sx={{
                                            padding: "20px 20px 10px 20px",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <Link href={data.url} passHref>
                                            <Typography
                                                sx={{
                                                    "&:hover": {
                                                        transform: `scale(1.1)`,
                                                        transition: "0.2s",
                                                    },
                                                    fontSize: "18px",
                                                    fontFamily: `"Shippori Mincho", serif`,
                                                }}
                                            >
                                                {data.name}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
