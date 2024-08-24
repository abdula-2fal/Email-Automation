function sendCertificates() {
  // Sheet information
  const sheetId = 'your-sheet-id-here';
  const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];

  // Image folder ID
  const imageFolderId = 'your-Gdrive-folder-id-here';

  // Column numbers (1-based)
  const emailColumn = 1;
  const imageNameColumn = 2;

  // Email subject and text
  const subject = "email subject";
  const text =  `
email body
`;

  // Loop through each row in the sheet
  const lastRow = sheet.getLastRow();
  for (let row = 2; row <= lastRow; row++) {
    const email = sheet.getRange(row, emailColumn).getValue();
    const imageName = sheet.getRange(row, imageNameColumn).getValue();

    // Get the image from Drive
    const imageBlob = DriveApp.getFolderById(imageFolderId).getFilesByName(imageName).next().getBlob();

    // Send the email with the certificate attached
    GmailApp.sendEmail(email, subject, text, { attachments: [imageBlob] });
  }
}
