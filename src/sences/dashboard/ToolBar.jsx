import { GridToolbarContainer, GridActionsCellItem } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const DeleteButton = ({action}) => {
    return (
        <Button
            variant='contained'
            color='secondary'
            onClick={action}
            startIcon={<DeleteIcon sx={{ fontSize: "25px"}} />}
            size='large'
            sx={{ marginBottom: '5px'}}
        >
            Delete Selected Items
        </Button>
    )
}

const ToolBar = ({action}) => {
    return (
        <GridToolbarContainer>
            {/* <GridActionsCellItem 
                icon={ <DeleteIcon sx={{ fontSize: "25px"}} /> }
                onClick={action}
            /> */}
            <DeleteButton action={action} />
        </GridToolbarContainer>
    )
}

export default ToolBar;