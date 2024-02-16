import  express, { Request, Response } from "express"
import { upload } from "./uploadS3";

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/upload', upload.single('img'), (req: Request, res: Response) => {
    res.json(req.file)
}); // 업로드 후에, (req, res) => {} 부분이 실행

app.listen(3000, () => {
    console.log("Express server has started on port 3000")
})