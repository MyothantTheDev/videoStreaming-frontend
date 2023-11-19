import Header from "../../conponents/layout/Header";
import { Box } from "@mui/material";
import UserDataGrid from "./userDataGrid";
import VideoDataGrid from "./videoDataGrid";

const Dashboard = () => {
    return (
        <Box m='20px' >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <Box height="50vh" width="100%" overflow="scroll">
                <UserDataGrid />
                <VideoDataGrid />
            </Box>
        </Box>
    )
}

export default Dashboard;