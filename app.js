class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [currentService, setCurrentService] = React.useState('dashboard');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [showLoginModal, setShowLoginModal] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const services = [
      { id: 'dashboard', name: '总览', icon: 'layout-dashboard' },
      { id: 'crm', name: '客户管理', icon: 'users' },
      { id: 'analytics', name: '数据分析', icon: 'chart-bar' },
      { id: 'storage', name: '云存储', icon: 'cloud' },
      { id: 'email', name: '邮件营销', icon: 'mail' },
      { id: 'project', name: '项目管理', icon: 'calendar' },
      { id: 'finance', name: '财务工具', icon: 'dollar-sign' },
      { id: 'txt_deal_img', name: '文字修改/生成图片', icon: 'image' }
    ];

    const handleLogin = (userData) => {
      setIsLoggedIn(true);
      setUser(userData);
      setShowLoginModal(false);
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      setUser(null);
    };

    React.useEffect(() => {
      const handleServiceNavigation = (event) => {
        const serviceId = event.detail;
        setCurrentService(serviceId);
      };

      window.addEventListener('navigateToService', handleServiceNavigation);
      
      return () => {
        window.removeEventListener('navigateToService', handleServiceNavigation);
      };
    }, []);

    return (
      <div className="min-h-screen bg-[var(--secondary-color)] flex" data-name="app" data-file="app.js">
        <Sidebar 
          currentService={currentService}
          setCurrentService={setCurrentService}
          services={services}
        />
        <div className="flex-1 flex flex-col">
          <Header 
            isLoggedIn={isLoggedIn}
            user={user}
            onLogin={() => setShowLoginModal(true)}
            onLogout={handleLogout}
          />
          <ServiceView 
            currentService={currentService}
            isLoggedIn={isLoggedIn}
            services={services}
          />
        </div>
        
        {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);