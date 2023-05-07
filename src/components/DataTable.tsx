import { DataGrid, GridActionsCellItem, GridColDef, GridRowId, GridRowModel, GridRowsProp } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

interface DataTableProps {
    rows: GridRowsProp
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
    isEditable: boolean
}

// Reference: https://mui.com/x/react-data-grid/editing/#full-featured-crud-component
export const DataTable = (props: DataTableProps) => {

    // First define what are the columns
    const columns: GridColDef[] = [

        // Date
        {
            field: "date",
            headerName: "Date",
            type: "dateTime",
            width: 180,
            editable: true,

            // In case given a string, converts given string into a Date() object
            // https://mui.com/x/react-data-grid/column-definition/#converting-types
            valueGetter: ({ value }) => value && new Date(value)
        },

        // Name
        {
            field: "name",
            headerName: "Name",
            type: "string",
            width: 150,
            editable: true,
        },

        // Lorry
        {
            field: "lorry",
            headerName: "Lorry",
            type: "number",
            editable: true,
        },

        // C12
        {
            field: "c12",
            headerName: "C12",
            type: "number",
            editable: true,
        },

        // Actions
        // https://mui.com/x/react-data-grid/column-definition/#special-properties
        {
            field: "actions",
            type: "actions",
            getActions: ({ id }) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={handleDeleteClick(id)}
                />
            ]
        }
    ];

    // Method to call when row is updated by user, to theoretically save changes to server
    // https://mui.com/x/react-data-grid/editing/#persistence
    const onRowUpdate = async (newRow: GridRowModel) => {
        console.log(`Row updated! Saving data to server and updating global state...`);
        console.table(newRow);

        // Set global state!
        props.setRows(
            // For each row in the current rows, check if the row ID is the same as the new updated row ID.
            // If it is the same row ID, map the current row to the new row instead of the old row.
            // Other rows maps to themselves, remain unchanged.
            props.rows.map((row) => (row.id === newRow.id ? newRow : row))
        )

        return newRow; // Required! Can return an old value if somehow cannot save to server
    }

    const handleDeleteClick = (id: GridRowId) => () => {
        console.log("Deleting: ", id);

        // Delete is the same as filtering all the rows, filter out the row with the same ID as the row to delete
        props.setRows(props.rows.filter((row) => row.id !== id));
    }

    if (props.rows.length === 0) {
        return (
            <p className="text-gray-500" >Nothing is added yet.</p>
        )
    }

    return (
        <div>
            <DataGrid
                columns={columns}
                rows={props.rows}
                // editMode="row" // Set to "row" to edit the entire row instead of per cell
                processRowUpdate={onRowUpdate}
                isCellEditable={() => props.isEditable}
            />
        </div>
    )
}