module.exports = info => `
<strong> Hello! ${info.name}</strong> 
        <br> 
        <br>
        <p> 
          Thanks For Interest in Our Application
          We Have Received Your Registration Request
        </p>
        <br> 
        <br>
       
        <p>
            to Verify  Please Click The Below Link  
            <br> 
            <br>
        
          
            <a href=${info.link}>Verify</a>
            <br> 
        <br>
        
              or Copy Paste on Your Favorite Browser
              <br> 
              <br>
            
              ${info.link}
        </p>
      
    

`;
