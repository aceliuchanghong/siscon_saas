from flask import Flask, request, jsonify
from flask_cors import CORS
import fal_client
import base64
import io
import os
from PIL import Image
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/process-image', methods=['POST'])
def process_image():
    try:
        data = request.json
        image_data = data.get('image')
        prompt = data.get('prompt')
        
        if not image_data or not prompt:
            return jsonify({'error': '缺少图片或提示词'}), 400

        # 解码base64图片
        image_data = image_data.split(',')[1]  # 移除data:image/jpeg;base64,前缀
        image_bytes = base64.b64decode(image_data)
        
        # 将图片转换为URL（这里简化处理，实际应该上传到云存储）
        # 为了演示，我们使用一个示例URL
        image_url = "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Original+Image"
        
        def on_queue_update(update):
            if isinstance(update, fal_client.InProgress):
                for log in update.logs:
                    print(log["message"])

        # 调用fal_client API
        result = fal_client.subscribe(
            "fal-ai/flux-pro/kontext",
            arguments={
                "prompt": prompt,
                "image_url": image_url
            },
            with_logs=True,
            on_queue_update=on_queue_update,
        )
        
        # 返回处理后的图片URL
        processed_image_url = result.get('images', [{}])[0].get('url', '')
        
        return jsonify({
            'success': True,
            'processed_image': processed_image_url
        })
        
    except Exception as e:
        print(f"处理失败: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
