"use client";
import Button from "@mui/material/Button";

export default function Error({ error, reset }) {
    return (
        <div style={{ margin: "100px 0 0 0" }}>
            <div
                style={{ margin: "0 auto", width: "50%", textAlign: "center" }}
            >
                <h2 style={{marginBottom:"20px"}}>データの取得に失敗しました</h2>
             
                <Button
                    variant="outlined"
                    onClick={() => {
                        reset();
                    }}
                    color="error"
                    
                >
                    再読み込み
                </Button>
            </div>
        </div>
    );
}
