var isValid = function(s) {

    var array = s.split("");
    var done = false;
    console.log(array);
    
    while(done == false){
     var length = array.length;
                    for(var x = 0; x <= array.length-1; x++){
                        
                        if(array[x] == "(" && array[x+1] == ")"){
                            array.splice(x,2);
                           
                        }
                        if(array[x] == "[" && array[x+1] == "]"){
                            array.splice(x,2); 
                          
                        }
                        if(array[x] == "{" && array[x+1] == "}"){
                            array.splice(x,2); 
                          
                        }
                        
                    }
      if(length == array.length){
          done = true;
      }
    }
        
        
    
    
    
    console.log(array, "final array");
   if(array.length == 0){
       return true;
   }
    else{
        return false;
    }
};