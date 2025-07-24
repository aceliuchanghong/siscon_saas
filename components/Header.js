function Header({ isLoggedIn, user, onLogin, onLogout }) {
  try {
    const [showUserMenu, setShowUserMenu] = React.useState(false);

    return (
      <header className="bg-white border-b border-[var(--border-color)] px-6 py-4" data-name="header" data-file="components/Header.js">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="icon-search text-lg text-[var(--text-secondary)]"></div>
            <input 
              type="text" 
              placeholder="搜索功能..." 
              className="bg-gray-100 px-4 py-2 rounded-lg border-none outline-none focus:bg-white focus:ring-2 focus:ring-[var(--primary-color)] transition-all"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <div className="icon-bell text-lg text-[var(--text-secondary)]"></div>
            </button>
            
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 transition-colors"
                >
                  <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{user?.name?.[0] || 'U'}</span>
                  </div>
                  <span className="text-[var(--text-primary)] font-medium">{user?.name || '用户'}</span>
                  <div className="icon-chevron-down text-sm text-[var(--text-secondary)]"></div>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[var(--border-color)] py-2 z-50">
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors">
                      个人设置
                    </button>
                    <button 
                      onClick={onLogout}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-red-600"
                    >
                      退出登录
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={onLogin}
                className="btn-primary"
              >
                登录
              </button>
            )}
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
