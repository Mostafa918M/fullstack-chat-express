const app = require('./app');
const connectDB = require('./config/db');
const userRoute = require('./routes/user.routes')
require('dotenv').config();
connectDB();
const PORT = process.env.PORT;
app.use('/',userRoute)

app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
})
 