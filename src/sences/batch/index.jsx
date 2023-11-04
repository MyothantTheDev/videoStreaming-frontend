import { Box, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../conponents/layout/Header";
import NotiAlert from '../../conponents/layout/Alert';
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import { newBatch } from "../../actions/batchAction";
import { useState } from "react";


const Batch = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState(null);

    const initialValue = {
        name: ''
    }

    const nameRegex = /\S+/;

    const handleErrorMsg = () => {
        if (errorMsg === 'Batch name don\'t accept White Space. Try again!') {
            setErrorMsg(null);
        }
    } 

    const batchScheme = yup.object().shape({
        name: yup.string().required('Batch name is required.')
    })

    const { message } = useSelector(state => state.batch)

    const handleFormSubmit = (values, { resetForm }) => {
        const matches = values.name.match(nameRegex)
        if (matches[0] === matches.input) {
            dispatch(newBatch(values));
            resetForm({
                values: initialValue
            })
        } else {
            setErrorMsg('Batch name don\'t accept White Space. Try again!');
        }

    } 

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="CREATE BATCH" subtitle="Batch name don't accept White Spaces." />
            </Box>
            {
                message ? <NotiAlert message={message} /> : undefined
            }
            <Box m="20px">
            <Formik onSubmit={handleFormSubmit} initialValues={initialValue} validationSchema={batchScheme}>
                    {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit} encType="application/json" >
                            <Box display='grid' gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": {gridColumn : isNonMobile ? undefined : "span 4"}
                                }}>
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    label="Name" 
                                    type="text" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.name} 
                                    name="name" 
                                    error={!!touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                    sx={{ gridColumn: "span 2" }}
                                />
                            </Box>
                            {
                                errorMsg ? <NotiAlert message={errorMsg} severity="error" onClick={handleErrorMsg} /> : null
                            }
                            <Box display='flex' justifyContent="end" mt="20px">
                                <Button type="submit" color="secondary" variant="contained">
                                    Create Batch
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>

    )
}

export default Batch;