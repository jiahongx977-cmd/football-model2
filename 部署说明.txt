JAX的AI模型 V6.1 赛后复盘历史保存修正版

修复内容：
1. 修复“保存当前复盘记录”后，点击“查看复盘历史”仍显示为空的问题。
2. 兼容旧版字段和新版赛前赛后闭环字段：
   - reviewMatch / reviewScore / reviewBet / reviewResult / reviewNote
   - reviewLoopSport / reviewLoopMatch / reviewLoopStart / reviewLoopPrematch / reviewLoopScorelines / reviewLoopFinalScore
3. 复盘历史显示为中文卡片：
   - 赛事
   - 比赛
   - 开赛时间
   - 实际比分
   - 模型判断
   - 误差类型
   - 赛前AI推理
   - 赛前波胆推荐
   - 赛后复盘备注
4. 技术JSON默认收起。
