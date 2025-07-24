function LoginModal({ onClose, onLogin }) {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isGuest, setIsGuest] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (isGuest) {
        onLogin({ name: '游客用户', email: 'guest@example.com', isGuest: true });
      } else {
        onLogin({ name: email.split('@')[0], email, isGuest: false });
      }
    };

    const handleGuestLogin = () => {
      setIsGuest(true);
      onLogin({ name: '游客用户', email: 'guest@example.com', isGuest: true });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="login-modal" data-file="components/LoginModal.js">
        <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">登录</h2>
            <button 
              onClick={onClose}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">邮箱</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none"
                placeholder="请输入邮箱"
                required={!isGuest}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none"
                placeholder="请输入密码"
                required={!isGuest}
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary"
            >
              登录
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="text-[var(--text-secondary)] text-sm mb-4">或者</div>
            <button
              onClick={handleGuestLogin}
              className="w-full btn-secondary"
            >
              游客体验
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginModal component error:', error);
    return null;
  }
}