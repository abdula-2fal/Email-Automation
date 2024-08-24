# Google Email Automation

This repository contains two Google Apps Scripts designed to automate email sending.

## Scripts Included:
1. **email_with_placeholders.gs**:  
   Sends personalized emails with credentials or placeholders that are dynamically filled for each recipient.

2. **email_with_drive_attachments.gs**:  
   Sends emails with file attachments directly from Google Drive.

---

## How to Use These Scripts

### 1. Setting Up Google Apps Script
- Open the Google Sheet where you want to use the script.
- Click on `Extensions > Apps Script`.
- In the Script Editor, remove any existing code and copy-paste the code from either `email_with_placeholders.gs` or `email_with_drive_attachments.gs` into the editor.

### 2. Required Modifications
1. **Permissions**:  
   The first time you run the script, it will ask for necessary permissions to access Gmail, Google Sheets, and Google Drive. Grant all permissions when prompted.
   
2. **Change the Sheet ID and Folder ID**:  
   - Replace the `sheetId` in the code with the ID of your Google Sheet (found in the URL).
   - For the email with Drive attachments script, replace `imageFolderId` with the ID of the folder containing your attachments in Google Drive.
   
3. **Customize Email Body**:  
   Modify the email body in the script to fit your needs. You can use placeholders in the text that correspond to your Google Sheet data, such as names, passwords, or any other custom fields.

### 3. Sheet Format

#### For Credentials:
Use the following format in your Google Sheet for sending emails with credentials:

| Name     | Email           | Password |
|----------|-----------------|----------|
| Abdullah | mail@mail.com   | pass123  |
| Person2  | mail2@mail.com  | A1bC2dE3 |

#### For Attachments:
If sending emails with file attachments from Google Drive, structure your Google Sheet like this (filename should be same as in drive folder):

| Email             | Filename |
|-------------------|----------|
| mail@mail.com     | 1.jpg    |
| mail2@mail.com    | 2.jpg    |

---
