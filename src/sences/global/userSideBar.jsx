import { useState } from 'react';
import { ProSidebar,Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from 'react-router-dom';
import { singleVideoURL } from '../../actions/singlevideoAction';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch, useSelector } from 'react-redux';

//Modify Component for MenuItem
const Item = ({title, videoId, icon, selected, setSelected, to}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

 const setValues = (videoTitle, videoID) => {
  setSelected(videoTitle);
  dispatch(singleVideoURL(videoID));
 }

  return (
    <MenuItem active={selected === title} style={{color: colors.grey[100]}} onClick={() => setValues(title, videoId)} icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const UserSideBar = ({ objects }) => {

    //Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Default For ProSider Bar
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('');

    // Retrieve User Data from Store
    const { user } = useSelector(state => state.auth);

  return (
    <>
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            background: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape='square'>
            <MenuItem 
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {
                !isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"  
                  >
                    <Typography variant='h4' color={colors.grey[100]} >
                    {`${user.username}`.toUpperCase()}
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )
              }
            </MenuItem>
            <Box paddingLeft={ isCollapsed ? undefined : "10%"}>
              {
               objects.map( item => <Item 
                to={`/account/user/video/${item._id}`}
                key={item._id} 
                title={item.title} 
                videoId={item._id} 
                icon={<PlayCircleOutlinedIcon/>} 
                selected={selected} 
                setSelected={setSelected}
                />)
              }
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  )
}

export default UserSideBar;
