import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents, deleteStudent, deleteMulitStudent, clearErrors } from "../../actions/studentsAction"
import Loader from "../../conponents/layout/loader";
import { tokens } from "../../theme";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
    DataGrid,
    GridActionsCellItem
  } from '@mui/x-data-grid';
import ToolBar from "./ToolBar";

const UserDataGrid = () => {

    const [rows, setRows] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const [selectedRowModels, setSelectedRowModels] = useState([]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    
    const { loading, students, studentsCount, error } = useSelector(state => state.student);

    // DATA FETCH

    useEffect(() => {
        if (!dataFetched) {
            dispatch(getAllStudents());
            setDataFetched(true);
        }
    },[dispatch, dataFetched])


    // Clear Error

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
    },[dispatch,error])

    // UPDATE DATA ROW

    useEffect(() => {
        if (students) {
            const cleanedData = [];
            for (let i = 0; i < studentsCount; i++) {
                const id = i + 1;
                const student = students[i];
                const studentData = {
                    id,
                    ...student,
                    batch: student.batchId.name
                };
                delete studentData.batchId;
                cleanedData.push(studentData)
            }
            setRows(cleanedData);
        }
    },[students, studentsCount])

    // BTN FOR EIDT

     const handleDelete = (params) => () => {
        setDataFetched(false);
        dispatch(deleteStudent(params.row._id));
     }

    // TABLE COLUMS

    const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'username' , headerName: 'Student Name', width: 200 }, 
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'actions', headerName: 'Action', width: 100, type: 'actions', 
        getActions: (params) => [
            <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDelete(params)} />
        ]
    }
    ];

    //Row Selection
    const selectedRow = (selectedRows) => {
        setSelectedRowModels(selectedRows);
    }

    const CustomToolBar = () => {
        return (
            <ToolBar action={handleSelectedRow}/>
        )
    }

    const handleSelectedRow = () => {
        const removedRows = []
        for (let index = 0; index < selectedRowModels.length; index++) {
            const id = selectedRowModels[index];
            const filterRow = rows.filter( row => row.id == id);
            removedRows.push(filterRow[0]._id);
        }
        dispatch(deleteMulitStudent(removedRows));
    }

    // DATA TABLE

    return (
        <Box m="20px">
            <Box display="flex" width='30%' bgcolor={colors.primary[400]} sx={{ marginBottom: "30px" }} borderRadius="3px">
                <InputBase sx={{ ml:2, flex: 1 }} placeholder="Search" />
                <IconButton type='button' sx={{ p:1 }}>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box> 
            {
                loading || !students ?     
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
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                }
                            }
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        onRowSelectionModelChange={selectedRow}
                        slots={{ toolbar: CustomToolBar }}
                    />
                </Box>)
            }
        </Box>
    )
}

export default UserDataGrid;