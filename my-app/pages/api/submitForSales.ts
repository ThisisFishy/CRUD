import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const creds = require('../../webnext-388317-a94d4d8e4e94.json'); // replace with your path

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("Received POST request with data:", req.body);
    try {
      const { date, name, lorry, c12, c12Tong, c14, c14Tong, a14c, a14cTong, c50, c50Tong, gasPayment, hutang, tongPayment, bayarHutang, pinjamTong, pulangTong } = req.body;

      // Authenticate with Google Sheets API
      const client = new google.auth.JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      await client.authorize();

      const sheets = google.sheets({ version: 'v4', auth: client });
      
      const spreadsheetId = '1Ql3bTvFLXkzRTHTVCcRoIQE0VVsO7HIjEjx7iegQN2E'; // replace with your Google Sheets ID

      const range = 'Sheet1!A:Q'; // Adjust depending on your sheet structure

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[date, name, lorry, c12, c12Tong, c14, c14Tong, a14c, a14cTong, c50, c50Tong, gasPayment, hutang, tongPayment, bayarHutang, pinjamTong, pulangTong]], // data to be appended
        },
      });

      res.status(200).json({ message: 'Data submitted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}
