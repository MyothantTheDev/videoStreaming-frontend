import Header from "../../conponents/layout/Header";
import { Box } from "@mui/material";
import UserDataGrid from "./userDataGrid";

const Dashboard = () => {
    return (
        <Box m='20px'>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <UserDataGrid />
        </Box>
    )
}

export default Dashboard;