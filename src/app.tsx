import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { HomePage } from "./presentation/home/home";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
export const App: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <HomePage />
        </ThemeProvider>
    )
}