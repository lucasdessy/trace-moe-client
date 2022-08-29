import { Alert, Button, Card, CircularProgress, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";
import { useHomeBloc } from "../../application/home/home_bloc";
import { ImageComponent } from "./components/image";
import styles from "./home.module.css";

import DeleteIcon from '@mui/icons-material/Delete';
import { ResultBuilder } from "./components/result_builder";

export const HomePage = () => {
    const { error, loading, analyzeImage, clearError, clearResult } = useHomeBloc();
    const [imageUrl, setImageUrl] = useState<File>();
    return (
        <>
            <Card variant="elevation" className={styles.card}>
                <Snackbar
                    open={error !== undefined}
                    onClose={clearError}
                >
                    <Alert severity="error" onClose={clearError}>
                        {error ?? ""}
                    </Alert>
                </Snackbar>
                {
                    <>
                        <h1>
                            trace.moe API
                        </h1>
                        <ImageComponent src={imageUrl ? URL.createObjectURL(imageUrl) : undefined} />
                        {loading && <CircularProgress />}
                        <div className={styles.buttons}>
                            <Button variant="outlined" component="label">
                                Upload
                                <input hidden accept="image/*" type="file" onChange={(e) => {
                                    e.preventDefault();
                                    if (e.target.files) {
                                        setImageUrl(e.target.files[0]);
                                    }
                                }} />
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => analyzeImage(imageUrl!)}
                                disabled={imageUrl === undefined}
                            >
                                Enviar
                            </Button>
                            <IconButton
                                onClick={() => {
                                    setImageUrl(undefined);
                                    clearResult();
                                }}
                                disabled={imageUrl === undefined}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        <ResultBuilder />
                    </>
                }

            </Card>
        </>
    )
}