import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Single from "./menuCategory/Single";
import Course from "./menuCategory/Course";
import Lunch from "./menuCategory/Lunch";
import Drink from "./menuCategory/Drink";
import TakeOut from "./menuCategory/TakeOut";

const MenuHeader = ({ data, params }) => {
    const componentList = [
        {
            name: "単品",
            component: Single,
        },
        {
            name: "コース",
            component: Course,
        },
        {
            name: "ランチ",
            component: Lunch,
        },
        {
            name: "ドリンク",
            component: Drink,
        },
        {
            name: "テイクアウト",
            component: TakeOut,
        },
    ];

    function sortComponentList(list, matchValue) {
        return list.sort((a, b) => {
            // If 'a' matches the data, it should come first
            if (a.name === matchValue) {
                return -1;
            }
            // If 'b' matches the data, 'a' should not come first
            if (b.name === matchValue) {
                return 1;
            }
            // If neither 'a' nor 'b' match, maintain original order
            return 0;
        });
    }

    const sortedComponentList = sortComponentList(componentList, params.name);

    return (
        <div>
            <div
                style={{
                    maxWidth: "1000px",
                    width: "90%",
                    margin: "0 auto",
                    padding: "0 0 20px 0",
                }}
            >
                {componentList.map((item, index) => {
                    const Component = item.component;
                    return (
                        <div key={index}>
                            {item.name === params.name ? (

                                <Accordion defaultExpanded
                                    sx={{
                                        backgroundColor: "#1d1d1d",
                                        margin: "15px 10px",
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                           
                                            />
                                        }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{
                                            fontSize: {
                                                xs: "20px",
                                                sm: "22px",
                                                md: "26px",
                                            },

                                            
                                        }}
                                    >
                                        {item.name}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Component data={data} />
                                    </AccordionDetails>
                                </Accordion>
                            ) : (
                                <Accordion
                                    sx={{
                                        backgroundColor: "#1d1d1d",
                                        margin: "15px 10px",
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                            
                                            />
                                        }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{
                                            fontSize: {
                                                xs: "20px",
                                                sm: "22px",
                                                md: "26px",

                                            },

                                        }}
                                    >
                                        {item.name}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Component data={data} />
                                    </AccordionDetails>
                                </Accordion>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuHeader;
