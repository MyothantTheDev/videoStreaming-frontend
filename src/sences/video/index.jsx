import Header from "../../conponents/layout/Header";
import { Box, Button, Select, MenuItem, FormControl, InputLabel, useTheme } from "@mui/material";
import { Formik, Field } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getAllBatch } from "../../actions/batchAction";
import Loader from "../../conponents/layout/loader";
import { registerVideo } from "../../actions/videoAction";
import NotiAlert from "../../conponents/layout/Alert";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
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

    //File Store for Preview And Delete
    const [storeFiles, setStoreFiles] = useState([]);

    let deletedFiles = '';
    //color theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Event

    const event = new Event("change", { bubbles:true });

    //Drag and Drop States
    const [isDragOver, setDragOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    }

    const handleDragLeave = () => {
        setDragOver(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);

        const fileData = e.dataTransfer.files;
        fileInputRef.current.files = fileData;
        fileInputRef.current.dispatchEvent(event);
    }

    const handleFileClick = () => {
        fileInputRef.current.click();
    }
    
    const handleFormSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('batchId', values.batchId);
        storeFiles.map(item => formData.append('file', item.file));
        dispatch(registerVideo(formData));
        resetForm({
            values: initialValues
        })
    }

    //Read File Handler For Preview
    const ReadFile = (files, filestore= []) => {
        let sortedFiles = [...filestore];
        const listFile = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = e => {
                listFile.push({
                    file,
                    dataURL: reader.result
                });

                if (listFile.length === files.length) {
                    sortedFiles = [...sortedFiles, ...listFile]
                    setStoreFiles(sortedFiles);
                }
            }
        }
    }

    //Remove Selected Files
    const handleRemoveFile = (name) => {
        const filterFiles = [];
        deletedFiles = name;
        for (const file of storeFiles) {
            if (file.file.name !== name) {
                filterFiles.push(file);
            }

            if (filterFiles.length + 1 === storeFiles.length) {
                setStoreFiles(filterFiles);
                fileInputRef.current.dispatchEvent(event);
            }
        }
    }

    const dispatch = useDispatch();
    const { loading, batch } = useSelector(state => state.batch);
    const { message } = useSelector(state => state.video);

    useEffect(() => {
        dispatch(getAllBatch());
    },[dispatch])

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Create Video" subtitle="Add Video for Batch" />
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
                                            !loading && (batch) ? (
                                                batch.map(({_id, name}, index) => <MenuItem key={index} value={`${_id}`} >{name}</MenuItem>)
                                            ) : <Loader />
                                        }
                                </Select>
                            </FormControl>
                        </Box>
                        <Box m="20px" display="grid" gridTemplateColumns="repeat(5, minmax(0, 1fr))" gridTemplateRows="repeat(5, minmax(0, 1fr))"
                            sx={{
                                border: `2px dashed ${colors.primary[300]}`,
                                background: isDragOver ? colors.primary[300] : colors.primary[400]
                            }}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <Field name="files" onBlur={handleBlur}>
                                {
                                    ({ field }) => (
                                        <input
                                            multiple
                                            type="file"
                                            accept="video/*"
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
                                                        console.log(deletedFiles);
                                                        if (!deletedFiles) {
                                                            
                                                            // Destructe the FileList to a List
                                                            let fileStore = [...field.value, ...selectedFiles];
                                                            
                                                            // Build Custom File List to the File Objects
                                                            const customFileList = new DataTransfer();
                                                            fileStore.forEach((file) => {
                                                                customFileList.items.add(file);
                                                            })
                                                            setFieldValue(field.name, customFileList.files);
                                                            ReadFile(selectedFiles, storeFiles);
                                                        } else {
                                                            const customFileList = new DataTransfer();
                                                            storeFiles.forEach((item) => {
                                                                if (item.file.name !== deletedFiles) {
                                                                    customFileList.items.add(item.file);
                                                                }
                                                            });
                                                            setFieldValue(field.name, customFileList.files);
                                                            
                                                        }

                                                    } else {
                                                        setFieldValue(field.name, selectedFiles);
                                                        ReadFile(selectedFiles);
                                                    }
                                                }
                                            }
                                        />
                                    )
                                }
                            </Field>
                            <AttachFileOutlinedIcon sx={{fontSize: "5vw", gridColumn: 2, gridRow: 2, marginLeft: "50%"}}/>
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
                                Upload Videos
                            </Button>
                        </Box>
                    </form>
                    )}
                </Formik>
                <Box m="20px" display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
                    {
                        storeFiles.length > 0 && (
                            storeFiles.map((value, index) => {
                                return (
                                    <figure key={index}>
                                        <figcaption>{value.file.name}</figcaption>
                                        <Button 
                                            color="error" 
                                            variant="outlined" 
                                            endIcon={<HighlightOffOutlinedIcon/>}
                                            onClick={() => handleRemoveFile(value.file.name)}
                                        >
                                            Remove
                                        </Button>
                                    </figure>
                                )
                            })
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Video;