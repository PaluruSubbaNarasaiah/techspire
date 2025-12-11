const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxheY9IUoDysXaT_0sHQckqUNp7pnts1dyvUu2vrLsTsHPhI4OwkI3_4i419DvKaxJ4/exec';

export const submitToGoogleSheets = async (data: any, type: string) => {
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        type,
        timestamp: new Date().toISOString()
      })
    });
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};