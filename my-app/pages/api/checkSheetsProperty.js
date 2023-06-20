const { google } = require('googleapis');
const creds = require('../../webnext-388317-a94d4d8e4e94.json');

async function getSheetProperties() {
  try {
    // Authenticate with Google Sheets API
    const client = new google.auth.JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    await client.authorize();

    const sheets = google.sheets({ version: 'v4', auth: client });
    
    const spreadsheetId = '1Ql3bTvFLXkzRTHTVCcRoIQE0VVsO7HIjEjx7iegQN2E';

    const response = await sheets.spreadsheets.get({
      spreadsheetId,
      includeGridData: false,
    });

    console.log(response.data.sheets.map(sheet => sheet.properties));

  } catch (error) {
    console.error(error);
  }
}

getSheetProperties();
