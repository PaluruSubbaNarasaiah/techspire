function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  if (data.type === 'enrollment') {
    sheet.appendRow([
      data.name,
      data.phone,
      data.email,
      data.course,
      data.type,
      data.timestamp
    ]);
  } else if (data.type === 'contact') {
    sheet.appendRow([
      data.name,
      data.phone,
      data.email,
      data.subject,
      data.message,
      data.type,
      data.timestamp
    ]);
  }
  
  return ContentService.createTextOutput('Success');
}