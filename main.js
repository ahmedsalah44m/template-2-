// start header 
// bars 


 
let numclick =0 ;
document.querySelector(".fa-bars").onclick = ()=>{
if( numclick  % 2) {
    
    document.querySelector(".fa-bars + nav").style.cssText = `
    @media (max-width:767px;){
    display: none;
}
    `
    document.querySelector(".fa-bars + nav ul").style.cssText = `
                
                    display: usnset;
                  
                
                `
        }else{
            document.querySelector(".fa-bars + nav").style.cssText = `
            
               display: block;
                position: absolute;
                background-color: hsl(0, 0%, 0% , .4);
                right: 30px;
                top: 40px;
            
            
             
                `
                document.querySelector(".fa-bars + nav ul").style.cssText = `
                
                    display: flex;
                    flex-direction: column;
                
                `

        }
        numclick++
    }
 
// end  header 

// start cercle 
let cercle =  document.querySelectorAll(".cercle")

cercle.forEach(p=>{
   p.childNodes.forEach(e=>{
    e.onclick = function(){
        p.childNodes.forEach(e=> e.style = "background-color:#fff;"
        ) 
        this.style = "background-color:#00c4f9;"
    }
}) 
})



// end cercle


// start skills stats



document.querySelectorAll("div[data-num]").forEach(e=>{
// create randum num from 50 to 99 
    
        let num = Math.ceil(Math.random() * 50 + 50)
        // git data num and sit it in span and ::after
    e.children[0].setAttribute("data-num",num) 
    
    
    e.childNodes[0].style.width = num+"%";
    



})


// end skills stats
