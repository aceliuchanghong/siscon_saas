const { useState, useRef, useEffect } = React;

const ImageProcessor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setOriginalImage(event.target.result);
        setProcessedImage(null); // Reset processed image when new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessImage = async () => {
    if (!originalImage || !prompt.trim()) {
      alert('请先上传图片并输入提示词');
      return;
    }

    setIsProcessing(true);
    
    try {
      // 模拟API调用 - 实际使用时替换为真实的fal_client调用
      const result = await processImageWithAPI(originalImage, prompt);
      setProcessedImage(result);
    } catch (error) {
      console.error('图片处理失败:', error);
      alert('图片处理失败，请重试');
    } finally {
      setIsProcessing(false);
    }
  };

  const processImageWithAPI = async (imageUrl, promptText) => {
    try {
      // 创建一个模拟的API响应，因为fal_client需要Python后端
      // 在实际应用中，这里应该调用真实的API
      return new Promise((resolve) => {
        setTimeout(() => {
          // 模拟处理后的图像 - 为了演示，我们使用一个不同的占位图
          resolve('https://via.placeholder.com/800x600/10b981/ffffff?text=AI+Processed+Image');
        }, 3000);
      });
    } catch (error) {
      console.error('处理失败:', error);
      throw error;
    }
  };

  const handleSliderChange = (e) => {
    setSliderPosition(parseInt(e.target.value));
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">图片处理工具</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧控制面板 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">上传与设置</h2>
            
            {/* 图片上传 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                上传图片
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                {originalImage ? '更换图片' : '选择图片'}
              </button>
            </div>

            {/* 提示词输入 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                提示词
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="描述你想要对图片进行的处理..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            {/* 处理按钮 */}
            <button
              onClick={handleProcessImage}
              disabled={!originalImage || !prompt.trim() || isProcessing}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  处理中...
                </span>
              ) : '开始处理'}
            </button>

            {/* 原图预览 */}
            {originalImage && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">原图预览</h3>
                <img src={originalImage} alt="原始图片" className="w-full rounded-md" />
              </div>
            )}
          </div>

          {/* 右侧对比展示 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">对比展示</h2>
            
            {originalImage && processedImage ? (
              <div className="relative">
                <div
                  ref={containerRef}
                  className="relative overflow-hidden rounded-lg select-none"
                  style={{ height: '400px' }}
                >
                  {/* 原图 */}
                  <img
                    src={originalImage}
                    alt="原始图片"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* 处理后的图片 */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                  >
                    <img
                      src={processedImage}
                      alt="处理后图片"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* 滑动条 */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  {/* 分割线 */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-move">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span>原图</span>
                  <span>处理后</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    {originalImage ? '点击"开始处理"查看结果' : '请先上传图片'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 添加到全局作用域
window.ImageProcessor = ImageProcessor;
