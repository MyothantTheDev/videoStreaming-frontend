import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from '../global/topBar';
import UserSideBar from '../global/userSideBar';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBatchVideo, clearErrors } from '../../actions/videoAction';
import VideoPlayer from '../../conponents/layout/videoPlayer';

const UserHome = () => {
  const [theme, colorMode] = useMode();

  const [dataFetched, setDataFetched] = useState(false);

  const { video, error } = useSelector(state => state.video);
  const { user } = useSelector(state => state.auth);
  const { videoId } = useSelector(state => state.singleVideo);

  const dispatch = useDispatch();

  // DataFetch
  useEffect(() => {
    if (!dataFetched) {
      dispatch(getBatchVideo(user.batchId))
      setDataFetched(true)
    }
  },[dispatch, dataFetched])

  //
  useEffect(() => {
    if (error) {
      dispatch(clearErrors())
    }
  },[dispatch, error])

  return (
    <>
    {
      video && (
        <ColorModeContext.Provider value={colorMode} >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <UserSideBar objects={video} />
              <main className="Content">
                <Topbar/>
                <Routes>
                  <Route path='video/:id' element={<VideoPlayer videoId={videoId}/>} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )
    }
    </>
  )
}

export default UserHome;