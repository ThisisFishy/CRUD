import { DataGrid, GridActionsCellItem, GridColDef, GridRowId, GridRowModel, GridRowsProp, GridFilterModel, GridToolbar } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from "react";

interface DataTableProps {
    purchaseRows: any
    purchaseSetRows: React.Dispatch<React.SetStateAction<any>>
    isEditable: boolean
}

// Reference: https://mui.com/x/react-data-grid/editing/#full-featured-crud-component
const PurchaseDataTable = (props: DataTableProps) => {

    // First define what are the columns
    const columns: GridColDef[] = [

        // Date
        {
            field: "date",
            headerName: "Date",
            type: "dateTime",
            width: 180,
            editable: true,
            hideable: false,

            // In case given a string, converts given string into a Date() object
            // https://mui.com/x/react-data-grid/column-definition/#converting-types
            valueGetter: ({ value }) => value && new Date(value),
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        // Name
        {
            field: "name",
            headerName: "Name",
            type: "string",
            width: 130,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        // Lorry
        {
            field: "lorry",
            headerName: "Lorry",
            type: "string",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        // C12
        {
            field: "c12",
            headerName: "C12",
            type: "number",
            width:90,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },
        
        //C12Tong
        {
            field: "c12Tong",
            headerName: "C12 Tong",
            type: "number",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c14",
            headerName: "C14",
            type: "number",
            width:90,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c14Tong",
            headerName: "C14 Tong",
            type: "number",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "a14c",
            headerName: "14C",
            type: "number",
            width:90,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "a14cTong",
            headerName: "14C Tong",
            type: "number",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c50",
            headerName: "C50",
            type: "number",
            width:90,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c50Tong",
            headerName: "C50 Tong",
            type: "number",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "receiptNumber",
            headerName: "Receipt No.",
            type: "string",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "account",
            headerName: "Account",
            type: "string",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "notes",
            headerName: "Notes",
            type: "string",
            width:110,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },


        // Actions
        // https://mui.com/x/react-data-grid/column-definition/#special-properties
        {
            field: "actions",
            // headerName: "Actions",
            type: "actions",
            hideable: false,
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
        props.purchaseSetRows(
            // For each row in the current rows, check if the row ID is the same as the new updated row ID.
            // If it is the same row ID, map the current row to the new row instead of the old row.
            // Other rows maps to themselves, remain unchanged.
            props.purchaseRows.map((row: GridRowModel) => (row.id === newRow.id ? newRow : row))
        )

        return newRow; // Required! Can return an old value if somehow cannot save to server
    }

    const handleDeleteClick = (id: GridRowId) => () => {
        // Dont allow delete if not editable
        if (!props.isEditable) return;

        console.log("Deleting: ", id);

        // Delete is the same as filtering all the rows, filter out the row with the same ID as the row to delete
        props.purchaseSetRows(props.purchaseRows.filter((row: GridRowModel) => row.id !== id));
    }

    const [filterModel, setFilterModel] = useState<GridFilterModel>({
        items: [],
      });

    // if (props.purchaseRows.length === 0) {
    //     return (
    //         <p className="text-gray-500" >Nothing is added yet.</p>
    //     )
    // }

    return (
        <div>
            <DataGrid
                columns={columns}
                rows={props.purchaseRows}
                slots={{ toolbar: GridToolbar }}
                // editMode="row" // Set to "row" to edit the entire row instead of per cell
                processRowUpdate={onRowUpdate}
                isCellEditable={() => props.isEditable}
                filterModel={filterModel}
                onFilterModelChange={(model) => setFilterModel(model)}
                initialState={{
                    columns: {
                        // Hide columns if false
                        columnVisibilityModel: {
                            actions: props.isEditable,
                        },
                    },
                }}
            />
        </div>
    )
}

export default PurchaseDataTable;