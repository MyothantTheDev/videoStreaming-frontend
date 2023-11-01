import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './sences/global/topBar';
import SideBar from './sences/global/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './sences/dashboard';
import Student from './sences/students';
import Batch from './sences/batch';
import Video from './sences/video';


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
                            <Route path='/' element={ <Dashboard /> }/>
                            <Route path='students' element={<Student />} />
                            <Route path='batches' element={<Batch />} />
                            <Route path='video'  element={<Video />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
