function Features() {
  try {
    return (
      <section id="features" className="section-padding bg-[var(--secondary-color)]" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              为什么选择我们的平台？
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              采用现代技术构建，专为可扩展性、安全性和易用性而设计
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-zap text-xl text-orange-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">闪电般快速</h3>
                    <p className="text-[var(--text-secondary)]">通过全球CDN优化性能，确保您的应用程序在世界任何地方都能瞬间加载。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-lock text-xl text-green-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">企业级安全</h3>
                    <p className="text-[var(--text-secondary)]">银行级加密、SOC 2合规性和定期安全审计确保您的数据安全。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-globe text-xl text-purple-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">全球规模</h3>
                    <p className="text-[var(--text-secondary)]">部署在多个地区，具备自动扩展基础设施以处理任何工作负载。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-headphones text-xl text-blue-600"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">24/7支持</h3>
                    <p className="text-[var(--text-secondary)]">通过聊天、邮件和电话提供全天候专家支持，确保您的业务顺利运行。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">平台统计</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">99.9%</div>
                  <div className="text-sm text-[var(--text-secondary)]">正常运行保证</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">5万+</div>
                  <div className="text-sm text-[var(--text-secondary)]">活跃用户</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">100万+</div>
                  <div className="text-sm text-[var(--text-secondary)]">API调用/月</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">24/7</div>
                  <div className="text-sm text-[var(--text-secondary)]">专家支持</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}