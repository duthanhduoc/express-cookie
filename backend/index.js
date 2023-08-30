const cookieParser = require('cookie-parser')
const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000
app.use(
  cors({
    credentials: true, // Cho phép gửi cookie
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)
app.use(cookieParser())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  res.cookie('jwt', '123456789', {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    httpOnly: true
  })
  res.json({
    message: 'Đăng nhập thành công'
  })
})

app.get('/me', (req, res) => {
  console.log(req.cookies)
  res.json({
    message: 'Thông tin người dùng thành công'
  })
})

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`)
})
