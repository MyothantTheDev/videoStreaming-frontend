import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './sences/global/topBar';
import SideBar from './sences/global/SideBar';
import { Route, Routes } from 'react-router-dom';


export const AdminDashBoard = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar/>
                    <main className="Content">
                        <Topbar/>
                        <Routes>
                            <Route path='' />
                            {/* <Route path='students' /> */}
                            {/* <Route path='batch' /> */}
                            {/* <Route path='videos' /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
