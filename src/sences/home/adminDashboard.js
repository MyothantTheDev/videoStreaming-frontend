import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from '../global/topBar';
import SideBar from '../global/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard';
import Student from '../students';
import Batch from '../batch';
import Video from '../video';


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