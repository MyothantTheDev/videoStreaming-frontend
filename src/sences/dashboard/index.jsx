import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import Header from "../../conponents/layout/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../actions/studentsAction"
import Loader from "../../conponents/layout/loader";
import { tokens } from "../../theme";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const { loading, students, studentsCount } = useSelector(state => state.student);

    const DataRow = () => {
        const cleanedData = [];
        for (let i = 0; i < studentsCount; i++) {
            const id = i + 1;
            const student = students[i];
            const studentData = {
                id,
                ...student,
                batch: student.batchId.name
            };
            delete studentData.batchId
            cleanedData.push(studentData);
        }
        return cleanedData;
    }

    useEffect(() => {
        dispatch(getAllStudents());
    },[dispatch])

      
    const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'username' , headerName: 'Student Name', width: 200 }, 
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    ];


    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <Box display="flex" width='30%' bgcolor={colors.primary[400]} sx={{ marginBottom: "30px" }} borderRadius="3px">
                <InputBase sx={{ ml:2, flex: 1 }} placeholder="Search" />
                <IconButton type='button' sx={{ p:1 }}>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box> 
            {
                !loading && (students.length) ? (
                    <Box sx={{
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
                        <DataGrid columns={columns} rows={DataRow()}/>
                    </Box>
                ) : <Loader />
            }
        </Box>
    )
}

export default Dashboard;