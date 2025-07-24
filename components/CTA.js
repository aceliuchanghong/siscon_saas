function CTA() {
  try {
    return (
      <section className="section-padding bg-[var(--primary-color)]" data-name="cta" data-file="components/CTA.js">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            准备好转变您的企业了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            加入已经在使用我们平台简化运营并推动增长的数千家公司。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--primary-color)] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              开始免费试用
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[var(--primary-color)] px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              预约演示
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            无需信用卡 • 14天免费试用 • 随时取消
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CTA component error:', error);
    return null;
  }
}