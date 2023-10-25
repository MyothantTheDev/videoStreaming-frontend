import { Box } from "@mui/material";
import Header from "../../conponents/layout/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../actions/studentsAction"
import Loader from "../../conponents/layout/loader";

const Dashboard = () => {

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
            {
                !loading && (students.length) ? (
                    <Box>
                        <DataGrid columns={columns} rows={DataRow()}/>
                    </Box>
                ) : <Loader />
            }
        </Box>
    )
}

export default Dashboard;