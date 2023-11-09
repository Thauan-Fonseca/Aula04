import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import "dotenv/config";
import { randomUUID } from "crypto"

const { API_PORT, API_HOST } = process.env

interface RequestWithToken extends Request  {
    token?: string
} 

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

const tokens = []

const app = express()
app.use(cors())
app.use(express.json())

function autenticacaoMiddleware (req: RequestWithToken, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const usersFind = users.find(user => user.username === username && user.password === password);

    if(!usersFind){
        return res.status(401).send("Esse usúario não está autorizado")
    } 

    const token = randomUUID()
    tokens.push({username, token})
    req.token = token
    next()
}

app.post('/autenticacao', autenticacaoMiddleware, (req: RequestWithToken, res: Response) => {
    res.status(200).send({token: req.token})
})

app.listen(API_PORT, () => {
    console.log(`Server started ${API_HOST}:${API_PORT}`)
})


