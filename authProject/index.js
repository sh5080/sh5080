import express from 'express';
import session from 'express-session';

const app = express();

// session 설정
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// 미들웨어 및 라우터 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//로그인
app.post('/login', (req, res) => {
  // 사용자 인증 로직 구현
  const { username, password } = req.body;

  //     사용자 인증 성공
  if (username === 'admin' && password === 'password') {
    req.session.authenticated = true; // 세션에 인증 정보 저장
    req.session.user = { username }; // 세션에 사용자 정보 저장
    res.send('Login successful');
  } else {
    res.send('Login failed');
  }
});

// 로그아웃
app.get('/logout', (req, res) => {
  req.session.destroy(); // 세션 제거
  res.send('Logged out successfully');
});

// 서버 시작
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
