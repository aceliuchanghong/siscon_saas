function Sidebar({ currentService, setCurrentService, services }) {
  try {

    return (
      <div className="w-64 bg-white border-r border-[var(--border-color)] flex flex-col" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <div className="icon-heart text-lg text-white"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[var(--text-primary)]">欢迎</h1>
              <p className="text-sm text-[var(--text-secondary)]">SaaS平台</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setCurrentService(service.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left ${
                  currentService === service.id
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-gray-100'
                }`}
              >
                <div className={`icon-${service.icon} text-lg mr-3`}></div>
                <span className="font-medium">{service.name}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-[var(--border-color)]">
          <div className="text-xs text-[var(--text-secondary)] text-center">
            © 2025 姐控拯救世界的SaaS
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}