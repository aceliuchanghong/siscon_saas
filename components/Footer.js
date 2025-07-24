function Footer() {
  try {
    return (
      <footer id="contact" className="bg-gray-900 text-gray-300 section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mr-3">
                  <div className="icon-zap text-lg text-white"></div>
                </div>
                <span className="text-xl font-bold text-white">SaaSCorp</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                通过创新的SaaS解决方案为企业赋能，推动数字时代的增长、效率和成功。
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                  <div className="icon-twitter text-sm"></div>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                  <div className="icon-linkedin text-sm"></div>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                  <div className="icon-github text-sm"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">服务</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">客户管理</a></li>
                <li><a href="#" className="hover:text-white transition-colors">分析与报告</a></li>
                <li><a href="#" className="hover:text-white transition-colors">云存储</a></li>
                <li><a href="#" className="hover:text-white transition-colors">邮件营销</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">公司</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">招聘</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SaaSCorp. 保留所有权利。
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}