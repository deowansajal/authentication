module.exports = info => `
<strong> Hello! ${info.name}</strong> 
        <br> 
        
        <p>  Thanks for verified your account! </p>
        <br>
       
        <p> 
         Your account has been verified now you can login and explore our awesome stuff
        <br>
       <a href=${info.link}>Verify</a>
       <br>
    
        </p>
`;
