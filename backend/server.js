import { express } from "express.js";


const app = express()

app.get((req, res) =>
res.send('api is running')
)

app.listen(5000, console.log('server listening at port', 5000))