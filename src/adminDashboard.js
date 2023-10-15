import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './sences/global/topBar';
import Sidebar from './sences/global/SideBar';

export const AdminDashBoard = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <main className="Content">
                        <Topbar/>
                        <Sidebar/>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
