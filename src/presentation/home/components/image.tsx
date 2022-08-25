import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { Paper } from "@mui/material";
interface ImageProps {
    src?: string;
}
export const ImageComponent = ({ src }: ImageProps) => {
    return (
        <Paper sx={{
            width: "22rem",
            aspectRatio: "16/9",
            objectFit: "contain",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} elevation={3}>
            {src ? <img src={src} alt="image" /> : <NoPhotographyIcon sx={{ fontSize: "6rem" }} />}

        </Paper>
    )
}