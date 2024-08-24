function sendEmails() {
  try {
    // Open the Google Sheets spreadsheet by its ID
    var spreadsheet = SpreadsheetApp.openById('your-sheet-id-here');

    // Select the first sheet in the spreadsheet
    var sheet = spreadsheet.getSheets()[0];

    // Get all the data from the sheet
    var data = sheet.getDataRange().getValues();

    // Loop through each row in the sheet (starting from the second row to skip the header row)
    for (var i = 1; i < data.length; i++) {
      var emailAddress = data[i][1]; // Assuming email addresses are in the second column

      // Validate the email address format
      if (emailAddress && emailAddress.indexOf('@') > -1) {
        var subject = 'your-subject';

        var textFromColumnA = data[i][0];
        var textFromColumnC = data[i][2];

        var message = `your email body
Username: ${textFromColumnA}
Password: ${textFromColumnC}
`;
        // Send the email
        GmailApp.sendEmail(emailAddress, subject, message);

        // Log successful email sending
        Logger.log('Email sent to: ' + emailAddress);
      } else {
        // Log invalid email addresses
        Logger.log('Invalid email address: ' + emailAddress);
      }
    }
  } catch (e) {
    // Log any errors that occur during the execution
    Logger.log('Error in sending emails: ' + e.message);
  }
}
