import { Box } from "@mui/material";
import Header from "../../conponents/layout/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllStudents } from "../../actions/studentsAction";

const Dashboard = () => {

    const [row, setRow] = useState([]);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(getAllStudents());
    },[dispatch])

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];
      
      const columns = [
        { field: 'id' , headerName: 'id', width: 100 }, 
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];


    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <Box>
                <DataGrid columns={columns} rows={rows}>

                </DataGrid>
            </Box>
        </Box>
    )
}

export default Dashboard;