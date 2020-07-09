const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send( `
    <div>
    <form method="POST">
    <h1>Sing Up</h1>
    <input name="name" type="text" placeholder="Name" required />
   <input name="email" type="email" placeholder="Email" required /> 
   <input name="password" type="password" placeholder="Password" required />
   <input name="confirm_password" type="password" placeholder="Confirm Password" required /> 
   <button>Sign Up</button>
    </form>
    </div>`
    )
});
app.post("/",(req,res)=>{
    res.send("Successfully Created!!!")
})
app.listen(3000,()=>{
    console.log("listenging");
})
