function doGet(e) {
    const id = '1R_Jo4GwWs_OTNjfOgHHdCquQWOUx7lBVR255uew9SgY';
    const sheet = SpreadsheetApp.openById(id).getSheetByName('DataSheet');
    const data = sheet.getDataRange().getValues();
    const holder = [];
    data.forEach((row)=>{
        const temp = {
        first: row[0],
        second: row[1],
        third: row[2]
      }
      holder.push(temp);
    })
    Logger.log(holder);
    return ContentService.createTextOutput(JSON.stringify(holder)).setMimeType(ContentService.MimeType.JSON);
  }
  
  
  