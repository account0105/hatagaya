"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import {
    Tooltip,
    IconButton,
    useMediaQuery,
    useTheme,
    Fade,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const pages = [
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
        name: "UberEats",
        url: "https://www.ubereats.com/store/%E7%84%BC%E8%82%89-%E3%81%AF%E3%81%9F%E3%81%8B%E3%82%84-yakiniku-hatagaya/cj5ppEE6Vj6sI01GWBEFUQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMiVFNSU4OCU5RCVFNSU4RSU5RiUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUp4YXlkcFQtY2lWOFIyenVuVkhWMXhwayUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EzOC40MDE4OTA0JTJDJTIybG9uZ2l0dWRlJTIyJTNBMTQxLjA0NzUxNjYlN0Q%3D",
    },
    {
        name: "出前館",
        url: "https://demae-can.com/shop/menu/3098831",
    },
];

const reservation = [
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
];

function ResponsiveAppBar() {
    // スマホ予約初期表示
    const [sxTooltipOpen, setSxTooltipOpen] = useState(false);
    const [smTooltipOpen, setSmTooltipOpen] = useState(false);
    const resvIconDisplay = useTheme();
    const isXs = useMediaQuery(resvIconDisplay.breakpoints.down("sm"));

    useEffect(() => {
        if (isXs) {
            // Show the tooltip on initial page mount for xs screen sizes
            setSxTooltipOpen(true);
            setSmTooltipOpen(false);

            // Hide the tooltip after 3 seconds
            const timer = setTimeout(() => {
                setSxTooltipOpen(false);
            }, 10000);
        } else {
            setSxTooltipOpen(false);
            setSmTooltipOpen(true);
            const timer = setTimeout(() => {
                setSmTooltipOpen(false);
            }, 10000);
        }
    }, [isXs]);

    // スマホメニューリスト
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // コミュニティリスト
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // 予約リスト
    const [anchorElReservation, setAnchorElReservation] = useState(null);
    const openReservation = Boolean(anchorElReservation);
    const handleClickReservation = (event) => {
        setAnchorElReservation(event.currentTarget);
        setSmTooltipOpen(false);
        setSxTooltipOpen(false);
    };
    const handleCloseReservation = () => {
        setAnchorElReservation(null);
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
                    sx={{
                        gap: "5px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/*-----------------------デスクトップアイコン -----------------------------------------------*/}
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
                                width={45}
                                height={45}
                                alt="logo"
                                property="true"
                            ></Image>
                        </Typography>
                    </Link>
                    {/* --------------------------------スマホメニュー-------------------------------------------*/}
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
                            <MenuIcon sx={{ width: "60px", height: "35px" }} />
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
                                    sx={{ minWidth: "152px" }}
                                >
                                    <Link href={page.path}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                padding: "5px 20px",
                                                "&:hover": {
                                                    transform: `scale(1.1)`,
                                                    transition: "0.2s",
                                                },
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
                                    aria-controls={open ? "mobMenu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                    sx={{
                                        fontSize: "16px",
                                        padding: "5px 0 5px 0",
                                        width: "100%",
                                        textAlign: "center",
                                        color: "white",
                                        "&:hover": {
                                            transform: `scale(1.1)`,
                                            transition: "0.2s",
                                            backgroundColor: "#1d1d1d",
                                        },
                                    }}
                                >
                                    コミュニティ
                                </Button>
                                {/* <Menu
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
                                                "&:hover": {
                                                    transform: `scale(1.1)`,
                                                    transition: "0.2s",
                                                },
                                            }}
                                        >
                                            <Link href={data.url} passHref>
                                                <Typography
                                                    sx={{
                                                        
                                                        fontSize: "10px",
                                                    }}
                                                >
                                                    {data.name}
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu> */}
                            </div>
                        </Menu>
                    </Box>
                    {/* --------------------------スマホアイコン------------------------------------------------- */}
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
                                width={40}
                                height={40}
                                alt="logo"

                            ></Image>
                        </Typography>
                    </Link>
                    {/* ----------------------------スマホ予約---------------------------------------- */}
                    <Tooltip
                        arrow
                        title="予約はこちらから"
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            position: "fixed",
                            top: 10,
                            right: 5,
                            zIndex: 10,
                        }}
                        open={sxTooltipOpen}
                        componentsProps={{
                            tooltip: {
                                sx: {
                                    fontSize: "1.5rem", // Adjust the font size to your needs
                                    padding: "10px",
                                },
                            },
                        }}
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: "offset",
                                        options: {
                                            offset: [0, -14],
                                        },
                                    },
                                ],
                            },
                        }}
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <IconButton
                            onClick={handleClickReservation}
                            size="small"
                            aria-controls={
                                openReservation ? "account-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openReservation ? "true" : undefined}
                        >
                            <EventAvailableIcon
                                sx={{ width: "60px", height: "36px" }}
                            />
                        </IconButton>
                    </Tooltip>
                    {/* -----------------------------デスクトップメニュー------------------------------ */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "space-around",
                            "& > :last-child": {
                                marginRight: "0",
                            },
                            margin: "0 0 0 50px",
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
                                    <Typography variant="h3">
                                        {page.name}
                                    </Typography>
                                </Link>
                            </Button>
                        ))}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                sx={{
                                    color: "white",
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
                                                variant="h3"
                                                sx={{
                                                    "&:hover": {
                                                        transform: `scale(1.1)`,
                                                        transition: "0.2s",
                                                    },
                                                }}
                                            >
                                                {data.name}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        {/* ------------------------------デスクトップ予約----------------------- */}
                        <Tooltip
                            arrow
                            title="予約はこちらから"
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                position: "fixed",
                                top: 13,
                                right: { sm: 10, md: 40, lg: 80 },
                                zIndex: 10,
                            }}
                            open={smTooltipOpen}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        fontSize: "2rem", // Adjust the font size to your needs
                                        padding: "10px",
                                    },
                                },
                            }}
                            slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: "offset",
                                            options: {
                                                offset: [0, -14],
                                            },
                                        },
                                    ],
                                },
                            }}
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <IconButton
                                onClick={handleClickReservation}
                                size="small"
                                aria-controls={
                                    openReservation ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={
                                    openReservation ? "true" : undefined
                                }
                            >
                                <EventAvailableIcon
                                    sx={{ width: "60px", height: "36px" }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorElReservation}
                            id="account-menu"
                            open={openReservation}
                            onClose={handleCloseReservation}
                            onClick={handleCloseReservation}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&::before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{
                                horizontal: "right",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                            sx={{
                                "& .MuiPaper-root": {
                                    // MUIのPaperコンポーネントにスタイルを適用
                                    backgroundColor: "#1D1D1D", // ここで背景色を設定
                                },
                                "& .MuiPopover-paper": {
                                    // アンカーを非表示にする
                                    "&::before": {
                                        content: "none",
                                    },
                                    "&::after": {
                                        content: "none",
                                    },
                                },
                            }}
                        >
                            {reservation.map((data, index) => (
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
                                            variant="h3"
                                            sx={{
                                                "&:hover": {
                                                    transform: `scale(1.1)`,
                                                    transition: "0.2s",
                                                },
                                            }}
                                        >
                                            {data.name}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
