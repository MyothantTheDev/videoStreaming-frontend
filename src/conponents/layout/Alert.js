import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const NotiAlert = ({ message }) => {

    const [toggle, setToggle] = useState('block');

    const closeHandler = () => {
        toggle === 'block' ? setToggle('none') : setToggle('block')
    }

    return (
        <Stack sx={{width: '100%', marginBottom: '20px', display: toggle}} spacing={2} >
            <Alert severity="success" onClose={closeHandler} >{message}</Alert>
        </Stack>
    )
}

export default NotiAlert;