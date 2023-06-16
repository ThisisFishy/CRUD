import { DataGrid, GridColDef, GridRowModel, GridRowsProp, GridToolbar } from "@mui/x-data-grid"
import { useState } from "react";

interface DataTableProps {
    salesRows: GridRowsProp
}

export const SalesSummeryTable = (props: DataTableProps) => {
    console.log(props.salesRows);
    const columns: GridColDef[] = [
        // Date
        {
            field: "date",
            headerName: "Date",
            type: "dateTime",
            width: 180,
            valueGetter: ({ value }) => value && new Date(value),
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },
        // and other similar columns as needed
    ];

    const [filterModel, setFilterModel] = useState<any>({
        items: [],
    });

    return (
        <div>
            <DataGrid
                columns={columns}
                rows={props.salesRows}
                slots={{ toolbar: GridToolbar }}
                filterModel={filterModel}
                onFilterModelChange={(model) => setFilterModel(model)}
            />
        </div>
    )
}

