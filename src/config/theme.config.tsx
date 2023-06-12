import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { FC} from "react";

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = "#12181b",
    LIME = "#C8FA5F",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    // Alert styles
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(224,67,54,0.1)",
    SUCCESS_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,287,106,0.1)"
}

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.LIME
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5"
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.8em",
                    fontSize: "1em"
                }
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN
                },
                standardSuccess: {
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        }
    }
})

export const ThemeConfig: FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}