// pages/api/fetchSalesData.ts
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const creds = require('../../webnext-388317-a94d4d8e4e94.json'); // replace with your path

interface RowData {
    id: number;
    date: Date;
    name: string;
    lorry: string;
    c12: string; // Or whatever type these are
    c12Tong: string; // Or whatever type these are
    //... and all other fields
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { dateFrom, dateTo, name, lorry } = req.query;

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
        spreadsheetId: '1Ql3bTvFLXkzRTHTVCcRoIQE0VVsO7HIjEjx7iegQN2E',
        range: 'Sheet1', // Adjust depending on your sheet structure
      });

      const rows = data.values || [];

      // Filter and format the data
      let filteredRows = rows.map((row: any[], index: number) => {
        const rowDate = new Date(row[0]);
        const rowName = row[1];
        const rowLorry = row[2];

        // Filter based on query parameters
        if (
          (!dateFrom || rowDate >= new Date(dateFrom as string)) && 
          (!dateTo || rowDate <= new Date(dateTo as string)) &&
          (!name || rowName === name) &&
          (!lorry || rowLorry === lorry)
        ) {
          // Format the row into the format that the DataGrid expects
          return {
            id: index, // add an id field here
            date: rowDate,
            name: rowName,
            lorry: rowLorry,
            c12: row[3],
            c12Tong: row[4],
            //... and all other fields
          };
        }
        }).filter((row: RowData | undefined): row is RowData => row !== undefined);


      if (filteredRows.length > 0) {
        res.status(200).json(filteredRows);
      } else {
        res.status(404).json({ error: 'No data found' });
      }
    } catch (error) {
      console.error('Fetch failed:', error);
      res.status(500).json({ error: 'Fetch failed' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
