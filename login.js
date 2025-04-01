import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { username, password });
            // 成功後の処理
            console.log(response.data);
            // ユーザーID、ユーザー名を保持し、ホーム画面へ遷移
            // 例: router.push('/home');
        } catch (error) {
            // エラーハンドリング
            console.error(error);
        }
    };

    return (
        <div>
            <h1>ログイン</h1>
            <input
                type="text"
                placeholder="ユーザー名"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>ログイン</button>
            <p>アカウントをお持ちでない方はこちら</p>
            <button onClick={() => router.push('/register')}>新規登録</button>
        </div>
    );
};

export default LoginPage;
