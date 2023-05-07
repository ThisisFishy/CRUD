import { DataGrid, GridColDef, GridRowModel, GridRowsProp } from "@mui/x-data-grid"
import { randomCreatedDate, randomId } from "@mui/x-data-grid-generator";

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
    }
];

interface DataTableProps {
    rows: GridRowsProp
    setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>
    isEditable: boolean
}

export const DataTable = (props: DataTableProps) => {

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