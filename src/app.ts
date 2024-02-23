import  express, { Request, Response } from "express"
import { upload } from "./uploadS3";
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  }),
  )

app.post('/upload', upload.single('img'), (req: Request, res: Response) => {
    res.json(req.file)
}); // 업로드 후에, (req, res) => {} 부분이 실행
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server has started on ' + port);
});