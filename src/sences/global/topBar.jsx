import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import  PowerInputOutlined  from '@mui/icons-material/PowerInputOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.auth);
    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml:2, flex: 1}} placeholder="Search" />
                <IconButton type='button' sx={{ p:1 }}>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box>
            <Box display='flex'>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon/>
                    ) : <LightModeOutlinedIcon/> }
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PowerInputOutlined onClick={logoutHandler} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;