var cols = ['Abort', 'Education', 'Immigration', 'Gun', 'Health', 'Gay'] 
var cands = ['sanders', 'clinton', 'omalley', 'rubio', 'bush', 'trump']

$(document).ready(function(){
//   $('#MyModal').modal('hide');   
    $("#abortion").click(function(){
      console.log("let's try this");
      $('.abortion-title').show();
      for (i = 0; i < cols.length; i++) { 
        for (ii = 0; ii < cands.length; ii++) { 
          console.log('.' + cands[ii] + cols[i]); 
           if(cols[i].indexOf("Abort") == -1){
            $('.' + cands[ii] + cols[i]).hide(); 
           }
           else {
             console.log("Is abortion.")
             $('.' + cands[ii] + cols[i]).show(); 
           }
        }
      }
    });  
});