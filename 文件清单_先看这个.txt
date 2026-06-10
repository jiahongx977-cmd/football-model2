JAX的AI模型 V4.3 Vercel部署修正版

修复内容：
1. 修复 Vercel 部署失败：移除 vercel.json 里的 runtime 配置。
2. 保留 V4.2 的所有功能：
   - 标题：JAX的AI模型
   - 原下注截图 OCR
   - 实时赔率截图 OCR
   - 自动生成对冲池
   - 自动计算权重、建议金额、收益、ROI
   - 联网赔率、Dutching、赛后复盘
3. 不需要重新申请 The Odds API Key。
4. 不需要重建 Vercel 项目。

升级方式：
把这个压缩包解压后，重新覆盖上传到 GitHub 仓库 football-model2。
重点：vercel.json 也要覆盖上传。
