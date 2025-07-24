##  姐控SaaS



## install

```shell
# 依赖安装
uv run install.py

# 1. 安装Python后，在项目文件夹中运行：
python -m http.server 8000
# 访问：http://localhost:8000
# 或者
# 2. 使用Node.js
# 全局安装：
npm install -g http-server
# 在项目文件夹运行：
http-server
# 或者
# 3. 手动部署到：
# Netlify: 直接拖拽文件夹到netlify.com
# Vercel: 上传到GitHub后连接Vercel
# GitHub Pages: 推送到GitHub仓库并启用Pages

# win
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.venv/Scripts/activate
# linux
source .venv/bin/activate

# 设置代理源
pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple
uv pip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests 
uv add requests -i https://pypi.tuna.tsinghua.edu.cn/simple
vi ~/.bashrc==>export PIP_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple==>source ~/.bashrc
```

