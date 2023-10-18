import { useState } from "react";
import { ProSidebar,Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useSelector } from "react-redux";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
    const {user} = useSelector(state => state.auth);
    
    return (
        <Box 
            sx={{
                "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
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
                <Menu iconShape="square">
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
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
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        ADMINS PANLE
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>
                    {
                        !isCollapsed && (
                            <Box mb="25px">
                                <Box textAlign='center'>
                                    <Typography variant="h2" color={colors.grey[100]} fontWeight='bold' sx={{m: "10px 0 0 0"}}>
                                        {`${user.username}`.toUpperCase()}
                                    </Typography>
                                </Box>
                                <Box textAlign='center'>
                                    <Typography variant="h5" color={colors.greenAccent[500]}>
                                        {`${user.role}`.toUpperCase()}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    }
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default SideBar;