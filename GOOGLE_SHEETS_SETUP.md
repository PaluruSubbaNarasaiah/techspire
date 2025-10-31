# Google Sheets Setup for Tech Spire Academy

## Quick Setup Steps:

### 1. Create Google Sheet
- Create new Google Sheet: "Tech Spire Academy - All Inquiries"
- Add headers: `Name | Phone | Email | Course/Subject | Message | Type | Timestamp`

### 2. Add Apps Script
- Go to Extensions > Apps Script
- Replace code with content from `google-apps-script.js`
- Save the script

### 3. Deploy Script
- Click Deploy > New deployment
- Type: Web app
- Execute as: Me
- Access: Anyone
- Click Deploy and copy the URL

### 4. Update Code
- Replace `YOUR_SCRIPT_ID` in `src/utils/googleSheets.ts` with your script URL

## Data Structure:
- **Enrollments**: Name, Phone, Email, Course, "", "enrollment", Timestamp
- **Contact**: Name, Phone, Email, Subject, Message, "contact", Timestamp

Both forms now automatically save to the same Google Sheet with type classification.