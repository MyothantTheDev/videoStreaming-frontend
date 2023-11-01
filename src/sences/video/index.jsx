import Header from "../../conponents/layout/Header";
import { Box, Button, Select, MenuItem, FormControl, InputLabel, useTheme } from "@mui/material";
import { Formik, Field } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getAllBatch } from "../../actions/batchAction";
import Loader from "../../conponents/layout/loader";
import { registerVideo } from "../../actions/videoAction";
import NotiAlert from "../../conponents/layout/Alert";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { tokens } from "../../theme";

const initialValues = {
    files: [],
    batchId: ''
}

const videoSchema = yup.object().shape({
    batchId: yup.string().required('required')
})

const Video = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)");

    // Ref to button support for invisible input
    const fileInputRef = useRef(null);

    //color theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFileClick = () => {
        fileInputRef.current.click();
    }
    
    const handleFormSubmit = (values) => {
        //combine values
        console.log(values);
        // dispatch(registerVideo(values));
    }

    const dispatch = useDispatch();
    const { loading, batch } = useSelector(state => state.batch);
    const { message } = useSelector(state => state.student);

    useEffect(() => {
        dispatch(getAllBatch());
    },[dispatch])

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Create User" subtitle="Create Student Account" />
            </Box>
                {
                    message ? <NotiAlert message={message} /> : undefined
                }
            <Box m="20px" >
                <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={videoSchema}>
                    {({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
                        <form onSubmit={handleSubmit} encType="application/json" >
                        <Box m="20px" display='grid' gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": {gridColumn : isNonMobile ? undefined : "span 4"}
                            }}>
                            <FormControl>
                                <InputLabel id="bachId-label">BatchID</InputLabel>
                                <Select
                                    labelId="bachId-label" 
                                    variant="filled"
                                    value={values.batchId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    label="BatchID"
                                    name="batchId"
                                    error={!!touched.batchId && !!errors.batchId}
                                    sx={{gridColumn: "span 2"}}>
                                        {
                                            !loading && (batch.length) ? (
                                                batch.map(({_id, name}, index) => <MenuItem key={index} value={`${_id}`} >{name}</MenuItem>)
                                            ) : <Loader />
                                        }
                                </Select>
                            </FormControl>
                        </Box>
                        <Box m="20px" display="grid" gridTemplateColumns="repeat(5, minmax(0, 1fr))" gridTemplateRows="repeat(5, minmax(0, 1fr))"
                            sx={{
                                border: `2px solid ${colors.primary[4]}`
                            }}
                        >
                            <Field name="files" onBlur={handleBlur}>
                                {
                                    ({field}) => (
                                        <input
                                            multiple
                                            type="file"
                                            name={field.name}
                                            ref={fileInputRef}
                                            onBlur={field.onBlur}
                                            style={{
                                                display: 'none'
                                            }}
                                            onChange={
                                                e => {
                                                    let selectedFiles = e.currentTarget.files;
                                                    if (field.value.length > 0) {
                                                        // Destructe the FileList to a List
                                                        let fileStore = [...field.value, ...selectedFiles];
                                                        // Build Custom File List to the File Objects
                                                        const customFileList = new DataTransfer();
                                                        fileStore.forEach((file) => {
                                                            customFileList.items.add(file);
                                                        })
                                                        setFieldValue(field.name, customFileList.files);
                                                    } else {
                                                        setFieldValue(field.name, selectedFiles);
                                                    }
                                                }
                                            }
                                        />
                                    )
                                }
                            </Field>
                            <AddPhotoAlternateOutlinedIcon sx={{fontSize: "5vw", gridColumn: 2, gridRow: 2, marginLeft: "50%"}}/>
                            <h3 style={{ gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 2, paddingTop: "20px"}}>
                                Drag and Drop Files Here
                            </h3>
                            <Button 
                                sx={{
                                    gridColumnStart: 3,
                                    gridRowStart: 4,
                                }}
                                startIcon={<AddPhotoAlternateOutlinedIcon/>}
                                color="secondary" 
                                variant="contained"
                                onClick={handleFileClick}
                            >
                                Add Files
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create Student Account
                            </Button>
                        </Box>
                    </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default Video;