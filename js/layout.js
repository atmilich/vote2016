var cols = ['Abort', 'Education', 'Immigration', 'Gun', 'Health', 'Gay'] 
var cands = ['sanders', 'clinton', 'omalley', 'rubio', 'bush', 'trump']
var titles = ['abortion', 'education', 'immigration', 'gun', 'health', 'gay']

function updatePage(cells){
  for (i = 0; i < cols.length; i++) {   
     for (ii = 0; ii < cands.length; ii++) {
       if(cells[i][ii]){
         $('.' + cands[ii] + cols[i]).show(); 
       }
       else {
         $('.' + cands[ii] + cols[i]).hide(); 
       }
     }
  } 
}

function hideTitles(){
  for (ii = 0; ii < titles.length; ii++) {
    $('.' + titles[ii] + '-title').hide();
  }
}

function setFalse(cells){
  for (out = 0; out < cells.length; out++) {   
     for (inner = 0; inner < cells[out].length; inner++) {
       cells[out][inner] = false; 
     }
  } 
}

$(document).ready(function(){
  var cells = new Array(6); 
  for (i = 0; i < cols.length; i++) { 
     cells[i] = new Array(6);  
     for (ii = 0; ii < cands.length; ii++) {
         cells[i][ii] = false;
     }
  }
  $("#comp").click(function(){
    hideTitles(); 
    setFalse(cells); 
    for (ii = 0; ii < titles.length; ii++) {
      if (document.getElementById(titles[ii]).checked){
        $('.' + titles[ii] + '-title').show(); 
        for (jj = 0; jj < cands.length; jj++) { 
          cells[ii][jj] = true; 
        }
      }
    }
    var checked = []; 
    for (ii = 0; ii < cands.length; ii++) {
      if (document.getElementById(cands[ii] + 'Check').checked){
        console.log(cands[ii] + 'Check');
        checked.push(ii); 
      }
    }
    if(checked.length > 0){
        console.log(checked); 
        for (out = 0; out < cells.length; out++) {   
          for (inner = 0; inner < cells[out].length; inner++) {
            if(cells[out][inner] && checked.indexOf(inner) == -1){
              cells[out][inner] = false; 
            }
          }
        } 
      }
    updatePage(cells); 
  });
//   $('#MyModal').modal('hide'); 
//     $("#abortion").click(function(){
//       hideTitles(); 
//       $('.abortion-title').show();
      // for (i = 0; i < cols.length; i++) { 
      //   for (ii = 0; ii < cands.length; ii++) { 
      //     console.log('.' + cands[ii] + cols[i]); 
      //      if(cols[i].indexOf("Abort") == -1){
      //         cells[i][ii] = false; 
      //      }
      //      else {
      //        console.log("Is abortion.")
      //        cells[i][ii] = true; 
      //      }
      //   }
      // }
//       updatePage(cells);
//     }); 
});