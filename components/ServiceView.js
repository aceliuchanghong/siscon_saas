function ServiceView({ currentService, isLoggedIn, services }) {
  try {
    const getServiceContent = () => {
      switch (currentService) {
        case 'dashboard':
          return (
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">欢迎来到AI-SaaS平台</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.id !== 'dashboard').map(service => (
                  <div 
                    key={service.id} 
                    className="service-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    onClick={() => window.dispatchEvent(new CustomEvent('navigateToService', { detail: service.id }))}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <div className={`icon-${service.icon} text-xl text-blue-600`}></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                    <p className="text-[var(--text-secondary)]">点击查看详情</p>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'crm':
          return (
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">客户管理系统</h1>
              <div className="bg-white rounded-xl p-6 border border-[var(--border-color)]">
                <p className="text-[var(--text-secondary)] mb-4">全面的客户关系管理解决方案</p>
                {!isLoggedIn && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800">提示：登录后可使用完整功能</p>
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>客户数据管理</span>
                    <div className="icon-check text-green-600"></div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>销售漏斗跟踪</span>
                    <div className="icon-check text-green-600"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return (
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{getServiceTitle(currentService)}</h1>
              <div className="bg-white rounded-xl p-6 border border-[var(--border-color)]">
                <p className="text-[var(--text-secondary)]">该服务正在开发中，敬请期待...</p>
              </div>
            </div>
          );
      }
    };

    const getServiceTitle = (service) => {
      const titles = {
        analytics: '数据分析',
        storage: '云存储',
        email: '邮件营销',
        project: '项目管理',
        finance: '财务工具'
      };
      return titles[service] || '服务';
    };

    return (
      <main className="flex-1 p-6 overflow-y-auto" data-name="service-view" data-file="components/ServiceView.js">
        {getServiceContent()}
      </main>
    );
  } catch (error) {
    console.error('ServiceView component error:', error);
    return null;
  }
}