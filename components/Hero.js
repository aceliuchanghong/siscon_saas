function Hero() {
  try {
    return (
      <section id="home" className="section-padding bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              强大的SaaS解决方案
              <span className="block text-[var(--primary-color)]">为您的企业</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
              通过我们专为现代企业设计的全面云服务套件，简化运营、提高生产力并扩展您的业务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                开始免费试用
              </button>
              <button className="btn-secondary">
                查看演示
              </button>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="icon-check text-xl text-green-600"></div>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">简易设置</h3>
                  <p className="text-sm text-[var(--text-secondary)]">通过我们简单的入门流程，几分钟内即可开始使用</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="icon-shield text-xl text-blue-600"></div>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">安全可靠</h3>
                  <p className="text-sm text-[var(--text-secondary)]">企业级安全保障，99.9%正常运行时间保证</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="icon-trending-up text-xl text-purple-600"></div>
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">轻松扩展</h3>
                  <p className="text-sm text-[var(--text-secondary)]">发展您的业务无需担心基础设施问题</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}