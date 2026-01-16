function dis(val)
         {
             document.getElementById("value").value+=val
         }
           
        
         function solve()
         {
             let x = document.getElementById("value").value
             let y = eval(x)
             document.getElementById("value").value = y
         }
           
         
         function clr()
         {
             document.getElementById("value").value = ""
         }