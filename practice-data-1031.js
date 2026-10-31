(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1030_today_1") {
    throw new Error("1031 sentence patch requires PRACTICE_CATALOG 1030_today_1");
  }

  const publishedOn = "2026-10-31";
  const newSentences = [
    {
      id: "s-a1-127", level: "A1", title: "Asking for a Little More Space", titleZh: "请别人稍微挪动一下物品",
      scene: "making room at a shared table", pattern: "Could you move your _____ a little?", zh: "你可以把你的_____稍微挪一下吗？",
      hints: [{ en: "bag", zh: "包" }, { en: "chair", zh: "椅子" }, { en: "cup", zh: "杯子" }],
      example: { en: "Could you move your bag a little?", zh: "你可以把你的包稍微挪一下吗？" }, publishedOn
    },
    {
      id: "s-a1-128", level: "A1", title: "Warning That Something Is Very Hot", titleZh: "提醒某样东西很烫",
      scene: "handling freshly heated food or cookware", pattern: "This _____ is too hot to touch.", zh: "这个_____太烫了，不能碰。",
      hints: [{ en: "bowl", zh: "碗" }, { en: "pan", zh: "平底锅" }, { en: "lid", zh: "盖子" }],
      example: { en: "This bowl is too hot to touch.", zh: "这个碗太烫了，不能碰。" }, publishedOn
    },
    {
      id: "s-a1-129", level: "A1", title: "Asking Someone to Hold the Door", titleZh: "请别人帮忙扶门",
      scene: "entering a building with someone behind you", pattern: "Please hold the door for _____.", zh: "请帮_____扶一下门。",
      hints: [{ en: "her", zh: "她" }, { en: "the delivery driver", zh: "送货员" }, { en: "the person behind you", zh: "你后面的人" }],
      example: { en: "Please hold the door for the delivery driver.", zh: "请帮送货员扶一下门。" }, publishedOn
    },
    {
      id: "s-a1-130", level: "A1", title: "Saying You Cannot Hear Something", titleZh: "说明自己听不清楚",
      scene: "speaking in a noisy public place", pattern: "I can't hear the _____ clearly.", zh: "我听不清楚_____。",
      hints: [{ en: "announcement", zh: "广播" }, { en: "cashier", zh: "收银员" }, { en: "music", zh: "音乐" }],
      example: { en: "I can't hear the announcement clearly.", zh: "我听不清楚广播。" }, publishedOn
    },
    {
      id: "s-a2-127", level: "A2", title: "Explaining That There Was Not Enough Time", titleZh: "说明先前没有足够时间",
      scene: "leaving home in a hurry", pattern: "I didn't have time to _____ before _____.", zh: "我在_____之前没时间_____。",
      hints: [{ en: "charge my phone / leaving", zh: "给手机充电／出门" }, { en: "eat breakfast / work", zh: "吃早餐／上班" }, { en: "check the weather / going out", zh: "查看天气／外出" }],
      example: { en: "I didn't have time to charge my phone before leaving.", zh: "我出门之前没时间给手机充电。" }, publishedOn
    },
    {
      id: "s-a2-128", level: "A2", title: "Comparing How Well Something Fits", titleZh: "比较物品是否更合适",
      scene: "choosing between two everyday items", pattern: "This _____ fits better than the other one.", zh: "这个_____比另一个更合适。",
      hints: [{ en: "jacket", zh: "外套" }, { en: "lid", zh: "盖子" }, { en: "phone case", zh: "手机壳" }],
      example: { en: "This jacket fits better than the other one.", zh: "这件外套比另一件更合身。" }, publishedOn
    },
    {
      id: "s-a2-129", level: "A2", title: "Saying How Long You Have Been Waiting", titleZh: "说明自己等了多久",
      scene: "waiting for a person, ride, or service", pattern: "I've been waiting for _____ for _____.", zh: "我已经等_____等了_____。",
      hints: [{ en: "the bus / twenty minutes", zh: "公车／二十分钟" }, { en: "my friend / half an hour", zh: "朋友／半小时" }, { en: "a table / fifteen minutes", zh: "座位／十五分钟" }],
      example: { en: "I've been waiting for the bus for twenty minutes.", zh: "我已经等公车等了二十分钟。" }, publishedOn
    },
    {
      id: "s-a2-130", level: "A2", title: "Explaining Why You Brought Something", titleZh: "说明带某样东西的用途",
      scene: "preparing something useful for a shared activity", pattern: "I brought _____ so we could _____.", zh: "我带了_____，这样我们就可以_____。",
      hints: [{ en: "an extra bag / carry everything", zh: "一个备用袋／把东西全部带走" }, { en: "a charger / use the tablet", zh: "充电器／使用平板电脑" }, { en: "some towels / sit on the grass", zh: "几条毛巾／坐在草地上" }],
      example: { en: "I brought an extra bag so we could carry everything.", zh: "我带了一个备用袋，这样我们就可以把东西全部带走。" }, publishedOn
    },
    {
      id: "s-b1-127", level: "B1", title: "Noticing the Effect of a Small Change", titleZh: "说明小改变带来的明显效果",
      scene: "reflecting on a useful everyday adjustment", pattern: "I didn't expect _____ to make such a difference.", zh: "我没想到_____会带来这么明显的变化。",
      hints: [{ en: "moving the desk", zh: "移动书桌" }, { en: "preparing lunch the night before", zh: "前一晚准备午餐" }, { en: "wearing better shoes", zh: "穿更合适的鞋" }],
      example: { en: "I didn't expect moving the desk to make such a difference.", zh: "我没想到移动书桌会带来这么明显的变化。" }, publishedOn
    },
    {
      id: "s-b1-128", level: "B1", title: "Comparing Two Different Difficulties", titleZh: "比较两种不同的困难",
      scene: "explaining which part of a task is truly difficult", pattern: "I can manage _____, but _____ is another story.", zh: "我能应付_____，但_____就是另一回事了。",
      hints: [{ en: "the cooking / cleaning up", zh: "做饭／收拾善后" }, { en: "the drive / finding parking", zh: "开车／找停车位" }, { en: "the paperwork / meeting the deadline", zh: "填写文件／赶上期限" }],
      example: { en: "I can manage the cooking, but cleaning up is another story.", zh: "我能应付做饭，但收拾善后就是另一回事了。" }, publishedOn
    },
    {
      id: "s-b1-129", level: "B1", title: "Clarifying a Personal Boundary", titleZh: "说明自己的顾虑与界线",
      scene: "responding to a plan without rejecting it completely", pattern: "I'm not against _____; I just don't want _____.", zh: "我不反对_____；我只是不希望_____。",
      hints: [{ en: "going out / to stay out too late", zh: "出门／在外面待得太晚" }, { en: "sharing the car / to be left without a ride", zh: "共用汽车／最后没车可用" }, { en: "having guests / the apartment to get too crowded", zh: "请客人来／家里变得太拥挤" }],
      example: { en: "I'm not against going out; I just don't want to stay out too late.", zh: "我不反对出门；我只是不希望在外面待得太晚。" }, publishedOn
    },
    {
      id: "s-b1-130", level: "B1", title: "Balancing Two Everyday Priorities", titleZh: "平衡两项日常需求",
      scene: "finding a workable balance in daily life", pattern: "I'm trying to find a balance between _____ and _____.", zh: "我正在设法在_____和_____之间取得平衡。",
      hints: [{ en: "saving money / eating well", zh: "省钱／吃得健康" }, { en: "helping others / protecting my own time", zh: "帮助别人／保留自己的时间" }, { en: "getting enough rest / staying active", zh: "充分休息／保持活动量" }],
      example: { en: "I'm trying to find a balance between saving money and eating well.", zh: "我正在设法在省钱和吃得健康之间取得平衡。" }, publishedOn
    }
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.version = "1031_today_1";

  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1031_today_1";
})();
