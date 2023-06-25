import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const creds = require('../../dynamic-digit-390619-551ea0bc41c6.json');

interface RowData {
    id: number;
    date: Date;
    name: string;
    lorry: string;
    c12: string;
    c12Tong: string;
    c14: string;
    c14Tong: string;
    a14c: string;
    a14cTong: string;
    c50: string;
    c50Tong: string;
    gasPayment: string;
    hutang: string;
    tongPayment: string;
    bayarHutang: string;
    pinjamTong: string;
    pulangTong: string;
    totalTong: string;
    totalCashCollection: string;
    notes: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      console.log('this is fetchSalesData.ts');
      const { field, condition, value, secondValue } = req.query;
      console.log(JSON.stringify(req.query));

      // Authenticate with Google Sheets API
      const client = new google.auth.JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      });
      await client.authorize();

      const sheets = google.sheets({ version: 'v4', auth: client });

      // Fetch all rows
      const { data } = await sheets.spreadsheets.values.get({
        spreadsheetId: '1NfUFFrGI7KCfzLAGdw5MQ8CsAnFj5bhh_IYKegY0-ds',
        range: 'Sales!A2:T', // Adjust depending on your sheet structure
      });

      const rows = data.values || [];


      if (!field || !condition || !value) {
        console.error('Missing required query parameter:', { field, condition, value });
        res.status(400).json({ error: 'Missing required query parameter' });
        return;
      }

      // Filter and format the data
      let filteredRows = rows.map((row: any[], index: number) => {
        const rowDate = new Date(row[0]);
        const rowName = row[1];
        const rowLorry = row[2];
        const rowC12= row[3];
        const rowC12Tong= row[4];
        const rowC14= row[5];
        const rowC14Tong= row[6];
        const rowA14C= row[7];
        const rowA14CTong= row[8];
        const rowC50= row[9];
        const rowC50Tong= row[10];
        const rowGasPayment= row[11];
        const rowHutang= row[12];
        const rowTongPayment= row[13];
        const rowBayarPayment= row[14];
        const rowPinjamTong = row[15];
        const rowPulangTong = row[16];
        const rowNotes = row[17];
        const rowTotalTong = row[18];
        const rowTotalCashCollection = row[19];

        let shouldIncludeRow = false;
        const queryDate = new Date(new Date(value as string).setHours(0, 0, 0, 0));
        const rowDateWithoutTime = new Date(rowDate.setHours(0, 0, 0, 0));
        switch (field) {
          case 'Date':
            // shouldIncludeRow = false; // Assume it shouldn't be included by default
            if (condition === 'equals' && rowDateWithoutTime.getTime() === queryDate.getTime()) {
                shouldIncludeRow = true;
            } 
            else if(condition === 'not equals' && rowDateWithoutTime.getTime() !== queryDate.getTime()){
              shouldIncludeRow = true;
            }
            else if(condition === 'greater than' && rowDateWithoutTime.getTime() > queryDate.getTime()){
              shouldIncludeRow = true;
            }
            else if(condition === 'less than' && rowDateWithoutTime.getTime() < queryDate.getTime()){
              shouldIncludeRow = true;
            }
            else if(condition === 'greater or equal to' && rowDateWithoutTime.getTime() >= queryDate.getTime()){
              shouldIncludeRow = true;
            }
            else if(condition === 'smaller or equal to' && rowDateWithoutTime.getTime() <= queryDate.getTime()){
              shouldIncludeRow = true;
            }
            else if (condition === 'between') {
                const start = new Date(value as string).setHours(0, 0, 0, 0);
                const end = new Date(secondValue as string).setHours(23, 59, 59, 999);
                if(rowDate.getTime() >= start && rowDate.getTime() <= end) {
                    shouldIncludeRow = true;
                }
            }
          break;

          case 'Name':
            if (condition === 'equals' && row[1] === value) {
              shouldIncludeRow = true;
            }
            if (condition === 'not equals' && row[1] !== value) {
              shouldIncludeRow = true;
            }        
            if (condition === 'contain') {
              if (typeof value === 'string' && row[1].toLowerCase().includes(value.toLowerCase())) {
                shouldIncludeRow = true;
              }
            }
            break;
          case 'Lorry':
            if (condition === 'equals' && row[2] === value) {
              shouldIncludeRow = true;
            }
            if (condition === 'not equals' && row[2] !== value) {
              shouldIncludeRow = true;
            }
            if (condition === 'contain') {
              if (typeof value === 'string' && row[2].toLowerCase().includes(value.toLowerCase())) {
                shouldIncludeRow = true;
              }
            }
            break;

          default:
            shouldIncludeRow = false;
            console.error('Unexpected field:', field, 'typeof field:', typeof field);
            break;
        }

        // Filter based on query parameters
        if (shouldIncludeRow) {
          // Format the row into the format that the DataGrid expects
          return {
            id: index,
            date: rowDate,
            name: rowName,
            lorry: rowLorry,
            c12: rowC12,
            c12Tong: rowC12Tong,
            c14: rowC14,
            c14Tong: rowC14Tong,
            a14c: rowA14C,
            a14cTong: rowA14CTong,
            c50: rowC50,
            c50Tong: rowC50Tong,
            gasPayment: rowGasPayment,
            hutang: rowHutang,
            tongPayment: rowTongPayment,
            bayarHutang: rowBayarPayment,
            pinjamTong: rowPinjamTong,
            pulangTong: rowPulangTong,
            notes: rowNotes,
            totalTong: rowTotalTong,
            totalCashCollection: rowTotalCashCollection,
          };
        }
      }).filter((row: RowData | undefined): row is RowData => row !== undefined);


      if (filteredRows.length > 0) {
        res.status(200).json(filteredRows);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      console.error('Fetch failed:', error);
      res.status(500).json({ error: 'Fetch failed' });
      
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
