import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideo, deleteVideo, clearErrors } from "../../actions/videoAction";
import Loader from "../../conponents/layout/loader";
import { tokens } from "../../theme";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
    DataGrid,
    GridActionsCellItem
  } from '@mui/x-data-grid';


const VideoDataGrid = () => {

    const [rows, setRows] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();

    const { loading, video, error } = useSelector(state => state.video);

    //Data Fetch
    useEffect(() => {
        if (!dataFetched) {
            dispatch(getAllVideo());
            setDataFetched(true);
        }
    }, [dispatch, dataFetched])

    //Clear Error
    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
    }, [dispatch, error])

    //Clean Data For Row
    useEffect(() => {
        const cleanedData = [];
        if (video) {
            for (let i = 0; i < video.length; i++) {
                const id = i + 1;
                const item = video[i];
                const videoData = {
                    id,
                    ...item,
                    batch: item.batchId.name,
                }
                delete videoData.batchId;
                cleanedData.push(videoData);
            }
            setRows(cleanedData);
        }
    },[video])

    // BTN FOR EIDT

    const handleDelete = (params) => () => {
        setDataFetched(false);
        console.log(params.row._id);
        dispatch(deleteVideo(params.row._id));
        }

    // TABLE COLUMS

    const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title' , headerName: 'Title', width: 200 }, 
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'actions', headerName: 'Action', width: 100, type: 'actions', 
        getActions: (params) => [
            <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDelete(params)} />
        ]
    }
    ];

    return (
        <Box m="20px">
            <Box display="flex" width='30%' bgcolor={colors.primary[400]} sx={{ marginBottom: "30px" }} borderRadius="3px">
                <InputBase sx={{ ml:2, flex: 1 }} placeholder="Search" />
                <IconButton type='button' sx={{ p:1 }}>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box> 
            {
                loading || !video ?     
                <Loader /> : (<Box sx={{
                    "& .MuiDataGrid-root": {
                        border: 'none'
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: 'none'
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none'
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700]
                    }
                }}>
                    <DataGrid 
                        columns={columns} 
                        rows={rows}
                        editMode="rows"
                    />
                </Box>)
            }
        </Box>
    )
}

export default VideoDataGrid;