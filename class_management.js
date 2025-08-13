const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get(`/`,(req,res)=>{
res.send(`
<!DOCTYPE html>
<html>
    <head>
    <style>
        body {
            background-color: #ffffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding-top: 100px;
            color: rgba(51, 51, 51, 1);
        }
        .container {
            border:10px solid hsl(213.05deg 69.21% 42.2%);
            border-radius: 10px;
            padding: 20px;
            max-width:70%;
            margin: 0 auto;
            box-shadow:0 0 12px #000000bf;
        }
        h1 {
            color:rgb(88 133 218);
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: 800%;
            margin-bottom:20px;
            filter: drop-shadow(2px 4px 0.1px black);
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1> Class Management</h1>
    </div>
    </body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});