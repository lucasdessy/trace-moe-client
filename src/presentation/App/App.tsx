import { Button, Card, TextField } from "@mui/material"
import styles from "./App.module.css"

export const App: React.FC = () => {
    return (
        <>
            <Card variant="elevation" className={styles.card}>
                <h1>
                    trace.moe API
                </h1>
                <TextField label="URL da imagem" />
                <div className={styles.buttons}>
                    <Button onClick={() => {
                        // Show image upload dialog



                    }}>Upload</Button>
                    <Button variant="contained" color="primary" >Enviar</Button>
                </div>
            </Card>
        </>
    )
}