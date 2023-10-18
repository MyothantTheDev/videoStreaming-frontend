import { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses, menuClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
    
    return (
        <Box sx={{
            "& .ps-sidebar-container": {
                backgroundColor: `${colors.primary[400]} !important`,
            },
            "&. .ps-menu-root": {
                backgroundColor: 'transparent !important',
            },
            

        }}>
            {/* <Sidebar collapsed={isCollapsed}>
                <Menu rootStyles={{
                    [`.${menuClasses.button}:hover`]
                }}>
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
                </Menu>
            </Sidebar> */}
        </Box>
    )
}

export default SideBar;