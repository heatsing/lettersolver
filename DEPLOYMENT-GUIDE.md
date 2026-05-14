# 部署指南
## Word Unscrambler - lettersolver.net

**最后更新**: 2026-01-28  
**状态**: 代码已推送到 GitHub，等待部署

---

## ✅ 已完成

- ✅ 代码已推送到 GitHub `main` 分支
- ✅ 项目构建成功（121 个页面）
- ✅ 修复了语法错误

---

## 🚀 部署方式

### 方式 1: GitHub 自动部署（推荐）

如果你的 GitHub 仓库已连接到 Vercel，推送代码后会自动触发部署：

1. **检查 Vercel 连接**
   - 访问: https://vercel.com/dashboard
   - 查看项目: `word-unscrambler` 或 `heatsinghaiqing-2741s-projects/v0-word-unscrambler-bo`
   - 确认 GitHub 集成已启用

2. **自动部署**
   - 代码推送到 `main` 分支后，Vercel 会自动检测并部署
   - 部署通常需要 2-5 分钟
   - 在 Vercel Dashboard 查看部署状态

3. **验证部署**
   ```bash
   # 检查网站是否可访问
   curl -I https://lettersolver.net
   
   # 检查 sitemap
   curl https://lettersolver.net/sitemap.xml
   ```

### 方式 2: Vercel CLI 手动部署

如果需要手动部署：

1. **登录 Vercel**
   ```bash
   cd "C:\Users\heats\Desktop\word-unscrambler-main"
   vercel login
   ```
   - 会打开浏览器进行登录
   - 或使用 `vercel login --github` 通过 GitHub 登录

2. **部署到生产环境**
   ```bash
   vercel --prod --yes
   ```

3. **查看部署状态**
   ```bash
   vercel ls
   ```

---

## 📋 部署检查清单

### 部署前
- [x] 代码已提交到 Git
- [x] 代码已推送到 GitHub
- [x] 本地构建成功（`npm run build`）
- [x] 无构建错误

### 部署后验证

#### 1. 网站可访问性
- [ ] 首页可访问: https://lettersolver.net
- [ ] 主要工具页面可访问
- [ ] 新页面可访问:
  - https://lettersolver.net/text-twist
  - https://lettersolver.net/word-search-solver
  - https://lettersolver.net/hangman-solver
  - https://lettersolver.net/letter-boxed-solver

#### 2. SEO 文件
- [ ] Sitemap 可访问: https://lettersolver.net/sitemap.xml
- [ ] Robots.txt 可访问: https://lettersolver.net/robots.txt
- [ ] Sitemap 格式正确（XML）
- [ ] Sitemap 包含所有页面（740+）

#### 3. 功能验证
- [ ] 导航菜单正常工作
- [ ] Daily Game Hints 下拉菜单显示正确
- [ ] 页脚评分组件可点击
- [ ] 评分后投票数增加
- [ ] 所有工具页面功能正常

#### 4. Google Search Console
- [ ] 提交更新的 sitemap
- [ ] 验证结构化数据
- [ ] 检查索引状态

---

## 🔧 环境变量（如需要）

如果项目需要环境变量，在 Vercel Dashboard 中设置：

1. 访问项目设置: https://vercel.com/dashboard
2. 进入 **Settings** → **Environment Variables**
3. 添加必要的环境变量

**当前项目可能需要的环境变量**:
- `NEXT_PUBLIC_*` - 公共环境变量
- `SENTRY_DSN` - Sentry 错误监控（如果使用）

---

## 📊 部署统计

### 构建结果
- **总页面数**: 121 个
- **静态页面**: 大部分页面
- **动态页面**: 字母组合页面（SSG）
- **构建时间**: ~15-20 秒

### 页面类型
- ○ Static - 静态预渲染
- ● SSG - 静态站点生成（使用 generateStaticParams）
- ƒ Dynamic - 按需服务器渲染

---

## 🆘 故障排除

### 问题 1: 部署失败

**可能原因**:
- 构建错误
- 环境变量缺失
- 依赖安装失败

**解决方案**:
```bash
# 本地测试构建
npm run build

# 检查错误日志
# 在 Vercel Dashboard 查看部署日志
```

### 问题 2: 网站无法访问

**可能原因**:
- DNS 未配置
- 域名未绑定
- 部署未完成

**解决方案**:
1. 检查 Vercel Dashboard 部署状态
2. 确认域名绑定正确
3. 等待 DNS 传播（最多 24-48 小时）

### 问题 3: Sitemap 404

**可能原因**:
- 路由配置问题
- 文件未正确生成

**解决方案**:
```bash
# 验证 sitemap.ts 存在
ls app/sitemap.ts

# 检查 next.config.mjs 配置
# 确认 vercel.json 头部配置正确
```

---

## 📝 部署命令参考

```bash
# 构建项目
npm run build

# 本地预览
npm run start

# Vercel 部署
vercel --prod --yes

# 查看部署列表
vercel ls

# 查看部署日志
vercel logs
```

---

## 🔗 有用链接

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub 仓库**: https://github.com/heatsing/word-unscrambler
- **Google Search Console**: https://search.google.com/search-console
- **网站**: https://lettersolver.net

---

**部署完成后，请验证所有功能并提交 sitemap 到 Google Search Console！**
