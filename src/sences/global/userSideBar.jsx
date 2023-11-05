import React, { useState } from 'react';
import { ProSidebar,Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";

//Modify Component for MenuItem
const Item = ({title, videoId, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem active={selected === title} style={{color: colors.grey[100]}} onClick={() => setSelected(title)} icon={icon}>
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const userSideBar = ({ objects }) => {

    //Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Default For ProSider Bar
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('');

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
            <Box paddingLeft={ isCollapsed ? undefined : "10%"}>
              {
                objects.map((item) => )
              }
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  )
}

export default userSideBar
