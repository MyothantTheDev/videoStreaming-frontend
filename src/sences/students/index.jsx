import Header from "../../conponents/layout/Header";

const Student = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
        </Box>
    )
}

export default Student;