足球投注模型 V3.4 完整部署包

用途：
- 朋友打开网址即可使用，不需要每个人自己填 The Odds API Key。
- API Key 放在 Vercel 后台环境变量，不写进网页源码，避免泄露。

部署方法：
1. 解压本压缩包。
2. 确认解压后有 index.html、package.json、vercel.json、api 文件夹。
3. 打开 https://vercel.com 登录。
4. 新建项目，把整个文件夹 football_model_v3_4_complete 上传/导入。
5. 在 Vercel 项目设置里找到 Environment Variables。
6. 新增环境变量：
   Name: THE_ODDS_API_KEY
   Value: 你的 The Odds API Key
7. 保存后 Redeploy。
8. 部署成功后，把 Vercel 给的网址发给朋友。

重要：
- 不要把 API Key 写进 index.html。
- api/sports.js 和 api/odds.js 是服务器接口，不是网页。
- 本地双击 index.html 只能看界面，无法通过服务器代理联网。
- 如果接口没有某场比赛，仍可用“手动分析模式”输入盘口数据。
