import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const creds = require('../../webnext-388317-a94d4d8e4e94.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("Received POST request with data:", req.body);
    try {
      const { date, name, lorry, c12, c12Tong, c14, c14Tong, a14c, a14cTong, c50, c50Tong, receiptNumber, account, notes } = req.body;

      // Authenticate with Google Sheets API
      const client = new google.auth.JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      await client.authorize();

      const sheets = google.sheets({ version: 'v4', auth: client });
      
      const spreadsheetId = '1Ql3bTvFLXkzRTHTVCcRoIQE0VVsO7HIjEjx7iegQN2E';

      // Insert a new row at position 2 (0-indexed)
      const insertRequest = {
        spreadsheetId,
        resource: {
          requests: [
            {
              insertDimension: {
                range: {
                  sheetId: 1057925945,
                  dimension: 'ROWS',
                  startIndex: 1,
                  endIndex: 2
                },
                inheritFromBefore: false
              }
            }
          ]
        }
      };

      await sheets.spreadsheets.batchUpdate(insertRequest);

      // Now update the values at the second row
      const range = 'Purchase!A2:N2';

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[date, name, lorry, c12, c12Tong, c14, c14Tong, a14c, a14cTong, c50, c50Tong, receiptNumber, account, notes]],
        },
      });

      res.status(200).json({ message: 'Data submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error'});
    }
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
