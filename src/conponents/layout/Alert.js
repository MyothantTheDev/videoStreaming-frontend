import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const NotiAlert = ({ message, severity = 'success' }) => {

    const [toggle, setToggle] = useState('block');

    const closeHandler = () => {
        toggle === 'block' ? setToggle('none') : setToggle('block')
    }

    return (
        <Stack sx={{width: '100%', margin: '20px 0', display: toggle}} spacing={2} >
            <Alert severity={severity} onClose={closeHandler} >{message}</Alert>
        </Stack>
    )
}

export default NotiAlert;