import { DataGrid, GridColDef, GridRowModel, GridRowsProp, GridToolbar } from "@mui/x-data-grid"
import { useState } from "react";

interface DataTableProps {
    salesRows: GridRowsProp
}

export const SalesSummeryTable = (props: DataTableProps) => {
    // console.log(props.salesRows);
    const columns: GridColDef[] = [
        {
            field: "date",
            headerName: "Date",
            type: "date",
            width: 100,
            hideable: false,
            valueGetter: ({ value }) => {
                const timestamp = Date.parse(value);
                return isNaN(timestamp) ? null : new Date(timestamp);
            },
              
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },
        {
            field: "name",
            headerName: "Name",
            type: "string",
            width: 130,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        // Lorry
        {
            field: "lorry",
            headerName: "Lorry",
            type: "string",
            width:90,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        // C12
        {
            field: "c12",
            headerName: "C12",
            type: "number",
            width:70,
            editable: false,
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
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c14",
            headerName: "C14",
            type: "number",
            width:70,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c14Tong",
            headerName: "C14 Tong",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "a14c",
            headerName: "14C",
            type: "number",
            width:70,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "a14cTong",
            headerName: "14C Tong",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c50",
            headerName: "C50",
            type: "number",
            width:70,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "c50Tong",
            headerName: "C50 Tong",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "gasPayment",
            headerName: "Gas Payment",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "hutang",
            headerName: "Hutang",
            type: "number",
            width:90,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "tongPayment",
            headerName: "Tong Payment",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "bayarHutang",
            headerName: "Bayar Hutang",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "pinjamTong",
            headerName: "Pinjam Tong",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "pulangTong",
            headerName: "Pulang Tong",
            type: "number",
            width:110,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "notes",
            headerName: "Notes",
            type: "string",
            width:150,
            editable: true,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "totalTong",
            headerName: "Total Tong",
            type: "number",
            width:120,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },

        {
            field: "totalCashCollection",
            headerName: "TotalCashCollection",
            type: "number",
            width:160,
            editable: false,
            renderHeader: (params) => {
                return <span style={{ fontSize: '15px' }}>{params.colDef.headerName}</span>
            }
        },
        // add more column definitions here
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

