
function doPost(e) {
    try {
      var doc = SpreadsheetApp.openById('1R_Jo4GwWs_OTNjfOgHHdCquQWOUx7lBVR255uew9SgY');
      var sheet = doc.getSheetByName('DataSheet');
  
      var lastRow = sheet.getLastRow(); 
      var foundRow = ''; 
  
      for(var index = 1; index <= lastRow; index = index + 1) 
        {
          var counerRow = sheet.getRange(index,1).getValue(); 
          if(counerRow == e.parameter['row']) 
            {
              sheet.getRange(index,2).setValue(e.parameter['third']); 
              sheet.getRange(index,3).setValue(e.parameter['second']); 
              foundRow = counerRow;
            }
        }
      if(foundRow == '') {
        sheet.appendRow([e.parameter['row'],e.parameter['second'],e.parameter['third']]);
      }
  
       return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'success': 1 }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    catch(e) {
       return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': 0 }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }