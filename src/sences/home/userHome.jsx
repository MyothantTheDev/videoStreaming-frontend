import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from '../global/topBar';
import SideBar from '../global/SideBar';
import { Route, Routes } from 'react-router-dom';

const UserHome = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar/>
                    <main className="Content">
                        <Topbar/>

                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default UserHome;