function Services() {
  try {
    const services = [
      {
        icon: 'users',
        title: '客户管理',
        description: '全面的CRM解决方案，管理客户关系、跟踪互动并提升销售业绩。',
        features: ['联系人管理', '销售漏斗', '分析仪表板', '邮件集成']
      },
      {
        icon: 'chart-bar',
        title: '分析与报告',
        description: '先进的分析平台，提供实时洞察和可定制的报告，助力数据驱动决策。',
        features: ['实时数据', '自定义报告', '数据可视化', '导出选项']
      },
      {
        icon: 'cloud',
        title: '云存储',
        description: '安全的云存储解决方案，提供无限空间、文件共享和团队协作工具。',
        features: ['无限存储', '文件共享', '团队协作', '版本控制']
      },
      {
        icon: 'mail',
        title: '邮件营销',
        description: '强大的邮件营销平台，具备自动化、细分和详细的活动分析功能。',
        features: ['邮件自动化', '受众细分', 'A/B测试', '活动分析']
      },
      {
        icon: 'calendar',
        title: '项目管理',
        description: '完整的项目管理套件，包含任务跟踪、团队协作和截止日期管理。',
        features: ['任务管理', '团队协作', '时间线跟踪', '资源规划']
      },
      {
        icon: 'dollar-sign',
        title: '财务工具',
        description: '全面的财务管理，包括发票开具、费用跟踪和财务报告。',
        features: ['发票生成', '费用跟踪', '财务报告', '支付处理']
      }
    ];

    return (
      <section id="services" className="section-padding bg-white" data-name="services" data-file="components/Services.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              我们的服务
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              探索我们全面的SaaS解决方案套件，旨在转变您的业务运营
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <div className={`icon-${service.icon} text-xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[var(--text-secondary)]">
                      <div className="icon-check text-xs text-green-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 btn-secondary">
                  了解更多
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}