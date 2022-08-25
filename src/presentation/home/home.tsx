import { Button, Card, CircularProgress, Snackbar, TextField } from "@mui/material";
import { useHomeBloc } from "../../application/home/home_bloc";
import styles from "./home.module.css";



export const HomePage = () => {
    const { error, loading, analyzeImage, clearError } = useHomeBloc();
    return (
        <>
            <Card variant="elevation" className={styles.card}>
                <Snackbar open={error !== undefined} onClose={clearError} />
                {loading ? <CircularProgress /> :
                    <>
                        <h1>
                            trace.moe API
                        </h1>
                        <TextField label="URL da imagem" />
                        <div className={styles.buttons}>
                            <Button onClick={() => {
                                // Show image upload dialog
                            }}>Upload</Button>
                            <Button variant="contained" color="primary" onClick={() => analyzeImage("sussus")} >Enviar</Button>
                        </div>
                    </>
                }

            </Card>
        </>
    )
}