(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1027_today_1") {
    throw new Error("1028 practice patch requires PRACTICE_CATALOG 1027_today_1");
  }

  const publishedOn = "2026-10-28";

  const newSentences = [
    {
      id: "s-a1-115", level: "A1", title: "Checking Whether Anything Is Left", titleZh: "确认某样东西是否还有剩余",
      scene: "checking remaining supplies", pattern: "Do we have any _____ left?", zh: "我们还有_____吗？",
      hints: [{ en: "bottles of water", zh: "瓶装水" }, { en: "clean towels", zh: "干净毛巾" }, { en: "tape", zh: "胶带" }],
      example: { en: "Do we have any bottles of water left?", zh: "我们还有瓶装水吗？" }, publishedOn
    },
    {
      id: "s-a1-116", level: "A1", title: "Saying What You Will Bring", titleZh: "说明自己会带什么",
      scene: "bringing something useful", pattern: "I'll bring _____ with me.", zh: "我会带_____一起去。",
      hints: [{ en: "an umbrella", zh: "一把雨伞" }, { en: "an extra bag", zh: "一个备用袋" }, { en: "a light jacket", zh: "一件薄外套" }],
      example: { en: "I'll bring an umbrella with me.", zh: "我会带一把雨伞一起去。" }, publishedOn
    },
    {
      id: "s-a1-117", level: "A1", title: "Saying Something Is in Another Bag", titleZh: "说明东西放在另一个袋子里",
      scene: "item in another bag", pattern: "My _____ is in my other bag.", zh: "我的_____在另一个袋子里。",
      hints: [{ en: "house key", zh: "家门钥匙" }, { en: "wallet", zh: "钱包" }, { en: "ID card", zh: "身份证件" }],
      example: { en: "My house key is in my other bag.", zh: "我的家门钥匙在另一个袋子里。" }, publishedOn
    },
    {
      id: "s-a1-118", level: "A1", title: "Asking Someone to Lower the Volume", titleZh: "请别人把音量调小",
      scene: "lowering the volume", pattern: "Can you turn down _____?", zh: "你可以把_____调小声一点吗？",
      hints: [{ en: "the music", zh: "音乐" }, { en: "the TV", zh: "电视" }, { en: "the speaker", zh: "音箱" }],
      example: { en: "Can you turn down the music?", zh: "你可以把音乐调小声一点吗？" }, publishedOn
    },
    {
      id: "s-a2-115", level: "A2", title: "Remembering an Early Closing Time", titleZh: "想起某处会提早关门",
      scene: "early closing time", pattern: "I forgot that _____ closes early.", zh: "我忘了_____会提早关门。",
      hints: [{ en: "the market", zh: "市场" }, { en: "the bank", zh: "银行" }, { en: "the post office", zh: "邮局" }],
      example: { en: "I forgot that the market closes early.", zh: "我忘了市场会提早关门。" }, publishedOn
    },
    {
      id: "s-a2-116", level: "A2", title: "Saying Something Needed More Time", titleZh: "说明某件事比预期花更多时间",
      scene: "an unexpected amount of time", pattern: "_____ took longer than I expected.", zh: "_____比我预期花了更久。",
      hints: [{ en: "The drive across town", zh: "开车穿过市区" }, { en: "Cooking dinner", zh: "准备晚餐" }, { en: "The phone update", zh: "手机更新" }],
      example: { en: "The drive across town took longer than I expected.", zh: "开车穿过市区比我预期花了更久。" }, publishedOn
    },
    {
      id: "s-a2-117", level: "A2", title: "Mentioning a Task You Have Wanted to Do", titleZh: "提到一直想做的事情",
      scene: "a postponed everyday task", pattern: "I've been meaning to _____.", zh: "我一直想找时间_____。",
      hints: [{ en: "clean out the freezer", zh: "整理冷冻库" }, { en: "call my cousin", zh: "打电话给表亲" }, { en: "replace the old light", zh: "更换旧灯具" }],
      example: { en: "I've been meaning to clean out the freezer.", zh: "我一直想找时间整理冷冻库。" }, publishedOn
    },
    {
      id: "s-a2-118", level: "A2", title: "Talking about Something You Often Forget", titleZh: "谈论自己经常忘记的事情",
      scene: "a repeated small mistake", pattern: "I keep forgetting to _____.", zh: "我总是忘记_____。",
      hints: [{ en: "charge my earbuds", zh: "替耳机充电" }, { en: "bring a reusable bag", zh: "带环保袋" }, { en: "lock the back door", zh: "锁后门" }],
      example: { en: "I keep forgetting to charge my earbuds.", zh: "我总是忘记替耳机充电。" }, publishedOn
    },
    {
      id: "s-b1-115", level: "B1", title: "Explaining Why You Avoided a Risk", titleZh: "说明自己为什么不愿冒险",
      scene: "avoiding unnecessary risk", pattern: "I didn't want to risk _____.", zh: "我不想冒着_____的风险。",
      hints: [{ en: "damaging the camera", zh: "弄坏相机" }, { en: "missing the last bus", zh: "错过末班车" }, { en: "losing the original receipt", zh: "弄丢收据正本" }],
      example: { en: "I didn't want to risk damaging the camera.", zh: "我不想冒着弄坏相机的风险。" }, publishedOn
    },
    {
      id: "s-b1-116", level: "B1", title: "Describing the Most Difficult Part", titleZh: "说明最困难的部分",
      scene: "the difficult part of a situation", pattern: "The hardest part was _____.", zh: "最困难的部分是_____。",
      hints: [{ en: "finding a safe place to stop", zh: "找到安全的停车处" }, { en: "keeping everyone calm", zh: "让大家保持冷静" }, { en: "choosing what to leave behind", zh: "决定哪些东西不带走" }],
      example: { en: "The hardest part was finding a safe place to stop.", zh: "最困难的部分是找到安全的停车处。" }, publishedOn
    },
    {
      id: "s-b1-117", level: "B1", title: "Describing a Usual Reaction", titleZh: "说明自己在某种情况下的习惯反应",
      scene: "a recurring personal habit", pattern: "I tend to _____ when _____.", zh: "我在_____的时候往往会_____。",
      hints: [{ en: "skip lunch / work gets busy", zh: "不吃午餐／工作变忙" }, { en: "overpack / I travel", zh: "带太多行李／旅行" }, { en: "speak too quickly / I feel nervous", zh: "说得太快／紧张" }],
      example: { en: "I tend to skip lunch when work gets busy.", zh: "工作一忙起来，我往往就会不吃午餐。" }, publishedOn
    },
    {
      id: "s-b1-118", level: "B1", title: "Planning a Sensible First Step", titleZh: "计划先采取稳妥的步骤",
      scene: "preparing before a change", pattern: "I should probably _____ before _____.", zh: "我可能应该先_____，再_____。",
      hints: [{ en: "back up my phone / updating it", zh: "备份手机／更新手机" }, { en: "eat something / taking the medicine", zh: "吃点东西／吃药" }, { en: "measure the space / ordering the shelf", zh: "量空间／订购架子" }],
      example: { en: "I should probably back up my phone before updating it.", zh: "我可能应该先备份手机，再进行更新。" }, publishedOn
    }
  ];

  const makeDialogue = data => ({
    id: data.id,
    level: data.level,
    title: data.title,
    titleZh: data.titleZh,
    scene: data.scene,
    goal: data.goal,
    goalZh: data.goalZh,
    roles: data.roles.map(([speaker, en, zh]) => ({ speaker, en, zh })),
    linkedSentence: data.linkedSentence,
    example: data.lines.map(([speaker, en, zh]) => ({ speaker, en, zh })),
    turns: data.lines.map(([speaker, en, zh, practiceEn, practiceZh]) => practiceEn
      ? { speaker, en: practiceEn, zh, practiceZh, blankType: "pattern" }
      : { speaker, en, zh }),
    referenceBank: data.groups.map(([label, items]) => ({
      label,
      items: items.map(([en, zh]) => ({ en, zh }))
    })),
    publishedOn
  });

  const newDialogues = [
    makeDialogue({
      id: "a1-coach-ride-water", level: "A1", linkedSentence: "s-a1-115",
      title: "Packing Water for a Long Coach Ride", titleZh: "为长途客运准备饮用水", scene: "kitchen before a day trip",
      goal: "Two friends check a few essentials before leaving for a long coach ride.", goalZh: "两位朋友搭长途客运前，确认几样必要用品。",
      roles: [["A", "A traveler packing drinks for the trip", "正在准备旅途饮料的旅客"], ["B", "A friend checking the rest of the day bag", "正在检查其他随身用品的朋友"]],
      lines: [
        ["A", "Do we have any bottles of water left?", "我们还有瓶装水吗？", "Do we have any _____ left?", "我们还有_____吗？"],
        ["B", "There are three bottles in the fridge.", "冰箱里还有三瓶。", "There are _____ in the fridge.", "冰箱里还有_____。"],
        ["A", "That should be enough for the ride.", "车程中应该够喝了。"],
        ["B", "I'll put two in the day bag.", "我会把两瓶放进随身袋。", "I'll put _____ in the day bag.", "我会把_____放进随身袋。"],
        ["A", "Please leave one here for later.", "请留一瓶在这里晚点喝。"],
        ["B", "Do we need any snacks too?", "我们也需要带些点心吗？"],
        ["A", "I packed some crackers and two bananas.", "我装了一些饼干和两根香蕉。", "I packed _____.", "我装了_____。"],
        ["B", "Good. The coach may not stop for two hours.", "好。客运可能两小时内都不会停靠。"],
        ["A", "I'll fill my reusable bottle as well.", "我也会把环保水瓶装满。"],
        ["B", "Then we're ready to go.", "那我们可以出发了。", "Then we're ready to _____.", "那我们可以_____了。"]
      ],
      groups: [
        ["Supply", [["bottles of water", "瓶装水"], ["juice boxes", "盒装果汁"], ["paper cups", "纸杯"]]],
        ["Amount", [["three bottles", "三瓶"], ["two bottles", "两瓶"], ["one full bottle", "一整瓶"]]],
        ["Pack", [["two", "两瓶"], ["one for each of us", "一人一瓶"], ["the cold ones", "冰的那些"]]],
        ["Food", [["some crackers and two bananas", "一些饼干和两根香蕉"], ["two sandwiches", "两个三明治"], ["some fruit", "一些水果"]]],
        ["Action", [["go", "出发"], ["leave", "离开"], ["catch the coach", "搭客运"]]]
      ]
    }),
    makeDialogue({
      id: "a1-rainy-lunch-umbrella", level: "A1", linkedSentence: "s-a1-116",
      title: "Taking an Umbrella on a Walk to Lunch", titleZh: "走去吃午餐时带上雨伞", scene: "office entrance on a cloudy day",
      goal: "Two coworkers prepare for a short walk when the weather may change.", goalZh: "两位同事在天气可能转变时，为短程步行做好准备。",
      roles: [["A", "A coworker checking the weather before lunch", "午餐前查看天气的同事"], ["B", "A coworker carrying a small umbrella", "带着小雨伞的同事"]],
      lines: [
        ["A", "The sky looks very dark.", "天空看起来很暗。", "The sky looks _____.", "天空看起来很_____。"],
        ["B", "I'll bring an umbrella with me.", "我会带一把雨伞一起去。", "I'll bring _____ with me.", "我会带_____一起去。"],
        ["A", "The restaurant is only ten minutes away.", "餐厅只要走十分钟。"],
        ["B", "It can still rain before we get there.", "我们到达前还是可能会下雨。"],
        ["A", "Do you have room under that umbrella?", "那把雨伞下面还有位置吗？", "Do you have room under _____?", "_____下面还有位置吗？"],
        ["B", "Yes, it's wide enough for two people.", "有，它够宽，两个人可以一起撑。", "It's wide enough for _____.", "它够宽，_____可以一起撑。"],
        ["A", "Great. I'll carry the takeout bag on the way back.", "太好了。回来时我来拿外带袋。"],
        ["B", "Let's leave now before the wind gets stronger.", "我们趁风还没变强先走吧。"],
        ["A", "I'll get my jacket from my desk.", "我去座位拿外套。", "I'll get _____ from my desk.", "我去座位拿_____。"],
        ["B", "I'll wait by the front door.", "我会在前门等你。"]
      ],
      groups: [
        ["Weather", [["dark", "暗"], ["cloudy", "多云"], ["windy", "有风"]]],
        ["Bring", [["an umbrella", "一把雨伞"], ["a light jacket", "一件薄外套"], ["a raincoat", "一件雨衣"]]],
        ["Under", [["that umbrella", "那把雨伞"], ["the covered walkway", "有遮棚的走道"], ["the awning", "遮雨棚"]]],
        ["Enough for", [["two people", "两个人"], ["both of us", "我们两个人"], ["you too", "也容得下你"]]],
        ["Pick up", [["my jacket", "我的外套"], ["my phone", "我的手机"], ["the lunch list", "午餐清单"]]]
      ]
    }),
    makeDialogue({
      id: "a1-house-key-other-bag", level: "A1", linkedSentence: "s-a1-117",
      title: "Realizing Your House Key Is in Another Bag", titleZh: "发现家门钥匙放在另一个袋子里", scene: "workplace exit after a shift",
      goal: "Two coworkers find a simple way to avoid waiting outside a locked home.", goalZh: "两位同事想出简单方法，避免其中一人回家后在门外久等。",
      roles: [["A", "A coworker who changed bags this morning", "今天早上换了袋子的同事"], ["B", "A coworker helping think through the options", "帮忙想解决方法的同事"]],
      lines: [
        ["A", "My house key is in my other bag.", "我的家门钥匙在另一个袋子里。", "My _____ is in my other bag.", "我的_____在另一个袋子里。"],
        ["B", "Is anyone at home right now?", "现在有人在家吗？", "Is anyone _____ right now?", "现在有人_____吗？"],
        ["A", "My roommate should be home after six.", "我室友六点后应该会在家。"],
        ["B", "Do you want to wait here a little longer?", "你要不要在这里多等一下？"],
        ["A", "I can finish one small task while I wait.", "等待时我可以完成一件小任务。", "I can finish _____ while I wait.", "等待时我可以完成_____。"],
        ["B", "You could also call your roommate now.", "你也可以现在打给室友。"],
        ["A", "Good idea. I'll ask when they'll arrive.", "好主意。我会问他们什么时候到。"],
        ["B", "If it's late, I can drive you to get the other bag.", "如果太晚，我可以载你去拿另一个袋子。", "I can drive you to _____.", "我可以载你去_____。"],
        ["A", "Thanks. I don't think that will be necessary.", "谢谢。我想应该不用。"],
        ["B", "Keep a spare key at work next time.", "下次在工作地点放一把备用钥匙吧。", "Keep _____ at work next time.", "下次在工作地点放_____吧。"]
      ],
      groups: [
        ["Missing item", [["house key", "家门钥匙"], ["wallet", "钱包"], ["building card", "大楼门卡"]]],
        ["At home", [["at home", "在家"], ["nearby", "在附近"], ["awake", "醒着"]]],
        ["Task", [["one small task", "一件小任务"], ["this report", "这份报告"], ["tomorrow's list", "明天的清单"]]],
        ["Destination", [["get the other bag", "拿另一个袋子"], ["meet your roommate", "去找你的室友"], ["pick up the key", "拿钥匙"]]],
        ["Backup", [["a spare key", "一把备用钥匙"], ["an extra card", "一张备用门卡"], ["a copy of the key", "一把钥匙副本"]]]
      ]
    }),
    makeDialogue({
      id: "a1-courtyard-music-volume", level: "A1", linkedSentence: "s-a1-118",
      title: "Lowering the Music at an Evening Gathering", titleZh: "晚间聚会时把音乐调小", scene: "apartment courtyard in the evening",
      goal: "A neighbor makes a polite request while a small gathering continues.", goalZh: "邻居礼貌提出请求，同时让小型聚会可以继续。",
      roles: [["A", "A neighbor who needs a quieter evening", "晚上需要安静一点的邻居"], ["B", "The host of a small courtyard gathering", "小型庭院聚会的主人"]],
      lines: [
        ["A", "Can you turn down the music?", "你可以把音乐调小声一点吗？", "Can you turn down _____?", "你可以把_____调小声一点吗？"],
        ["B", "Of course. Is it too loud upstairs?", "当然可以。楼上听起来太大声吗？", "Is it too loud _____?", "_____听起来太大声吗？"],
        ["A", "Yes, the sound comes through my bedroom window.", "是的，声音会从卧室窗户传进来。"],
        ["B", "I'll move the speaker away from the building.", "我会把音箱移得离大楼远一点。", "I'll move _____ away from the building.", "我会把_____移得离大楼远一点。"],
        ["A", "Thank you. I have to get up early tomorrow.", "谢谢。我明天得早起。", "I have to get up _____ tomorrow.", "我明天得_____起床。"],
        ["B", "We'll finish the gathering by ten.", "我们的聚会会在十点前结束。", "We'll finish _____ by ten.", "我们会在十点前结束_____。"],
        ["A", "That works for me.", "这样我可以接受。"],
        ["B", "Please tell me if it's still too loud.", "如果还是太大声，请告诉我。"],
        ["A", "I will. You don't have to stop the music.", "好。你们不用把音乐关掉。"],
        ["B", "Thanks for coming down to ask politely.", "谢谢你下来礼貌地告诉我。"]
      ],
      groups: [
        ["Sound", [["the music", "音乐"], ["the TV", "电视"], ["the speaker", "音箱"]]],
        ["Place", [["upstairs", "楼上"], ["in your bedroom", "在你的卧室"], ["across the courtyard", "在庭院另一边"]]],
        ["Move", [["the speaker", "音箱"], ["the chairs", "椅子"], ["the table", "桌子"]]],
        ["Wake-up time", [["early", "早起"], ["before six", "六点前"], ["at six", "六点"]]],
        ["Event", [["the gathering", "聚会"], ["the music", "音乐"], ["the evening", "今晚的活动"]]]
      ]
    }),
    makeDialogue({
      id: "a2-sunday-market-closing", level: "A2", linkedSentence: "s-a2-115",
      title: "Changing Grocery Plans on a Sunday", titleZh: "周日临时更改采购计划", scene: "walking toward a neighborhood market",
      goal: "Two roommates adjust their grocery plan after remembering an early closing time.", goalZh: "两位室友想起市场会提早关门后，调整采购计划。",
      roles: [["A", "A roommate who planned to visit the market", "原本计划去市场的室友"], ["B", "A roommate who knows another nearby store", "知道附近另一间商店的室友"]],
      lines: [
        ["A", "I forgot that the market closes early.", "我忘了市场会提早关门。", "I forgot that _____ closes early.", "我忘了_____会提早关门。"],
        ["B", "It closes at four on Sundays.", "它星期日四点关门。", "It closes at _____ on Sundays.", "它星期日_____关门。"],
        ["A", "We won't make it there in time.", "我们来不及在关门前到达。"],
        ["B", "The smaller store on Oak Street stays open later.", "橡树街那间较小的商店会开得晚一点。"],
        ["A", "Does it carry fresh vegetables?", "那里有卖新鲜蔬菜吗？", "Does it carry _____?", "那里有卖_____吗？"],
        ["B", "Yes, but the selection is limited.", "有，不过选择比较少。"],
        ["A", "That's fine. We only need a few things.", "没关系。我们只需要几样东西。"],
        ["B", "Let's check the list before we go in.", "进去前先看一下清单吧。", "Let's check _____ before we go in.", "进去前先看一下_____吧。"],
        ["A", "We need tomatoes, eggs, and some fruit.", "我们需要番茄、鸡蛋和一些水果。"],
        ["B", "I'll add bread for tomorrow's breakfast.", "我会再加上明天早餐要吃的面包。", "I'll add _____ for tomorrow's breakfast.", "我会再加上明天早餐要吃的_____。"]
      ],
      groups: [
        ["Early closing", [["the market", "市场"], ["the bank", "银行"], ["the pharmacy", "药店"]]],
        ["Time", [["four", "四点"], ["five", "五点"], ["three thirty", "三点半"]]],
        ["Fresh food", [["fresh vegetables", "新鲜蔬菜"], ["eggs", "鸡蛋"], ["fruit", "水果"]]],
        ["List", [["the list", "清单"], ["what we need", "需要的东西"], ["our budget", "预算"]]],
        ["Breakfast", [["bread", "面包"], ["milk", "牛奶"], ["yogurt", "优格"]]]
      ]
    }),
    makeDialogue({
      id: "a2-cross-town-drive", level: "A2", linkedSentence: "s-a2-116",
      title: "Arriving Later after a Slow Drive across Town", titleZh: "穿过市区车程变长而晚到", scene: "community theater lobby",
      goal: "Two friends adjust calmly after traffic makes one of them arrive later than planned.", goalZh: "塞车让其中一人比计划晚到，两位朋友冷静调整安排。",
      roles: [["A", "A driver arriving after heavy traffic", "遇到塞车后抵达的驾驶"], ["B", "A friend waiting inside the theater lobby", "在剧场大厅等候的朋友"]],
      lines: [
        ["A", "The drive across town took longer than I expected.", "开车穿过市区比我预期花了更久。", "_____ took longer than I expected.", "_____比我预期花了更久。"],
        ["B", "Was there an accident on the main road?", "主要道路上有事故吗？", "Was there _____ on the main road?", "主要道路上有_____吗？"],
        ["A", "No, one lane was closed for road work.", "没有，有一条车道因为施工封闭。"],
        ["B", "The show hasn't started yet.", "表演还没开始。"],
        ["A", "Did you already pick up our programs?", "你已经拿节目单了吗？", "Did you already pick up _____?", "你已经拿_____了吗？"],
        ["B", "Yes, and I saved you a seat near the aisle.", "拿了，而且我帮你留了一个走道旁的座位。"],
        ["A", "Thanks. I need a minute to put away my coat.", "谢谢。我需要一点时间把外套收好。"],
        ["B", "The coat rack is around the corner.", "衣帽架就在转角处。", "The _____ is around the corner.", "_____就在转角处。"],
        ["A", "I'll meet you by the entrance in two minutes.", "我两分钟后在入口处跟你会合。", "I'll meet you _____ in two minutes.", "我两分钟后在_____跟你会合。"],
        ["B", "Take your time. We still have a few minutes.", "慢慢来。我们还有几分钟。"]
      ],
      groups: [
        ["Longer task", [["The drive across town", "开车穿过市区"], ["The bus ride", "公车车程"], ["Finding parking", "找停车位"]]],
        ["Road issue", [["an accident", "事故"], ["road work", "道路施工"], ["heavy traffic", "塞车"]]],
        ["Collect", [["our programs", "我们的节目单"], ["the tickets", "票"], ["the seat numbers", "座位号码"]]],
        ["Location", [["coat rack", "衣帽架"], ["restroom", "洗手间"], ["water fountain", "饮水机"]]],
        ["Meeting point", [["by the entrance", "入口旁"], ["near our seats", "我们的座位附近"], ["in the main hall", "大厅里"]]]
      ]
    }),
    makeDialogue({
      id: "a2-freezer-cleanout", level: "A2", linkedSentence: "s-a2-117",
      title: "Clearing Space in a Crowded Freezer", titleZh: "整理塞满的冷冻库", scene: "shared home kitchen",
      goal: "Two roommates sort frozen food without throwing away usable items.", goalZh: "两位室友整理冷冻食品，同时避免丢掉仍可使用的食物。",
      roles: [["A", "A roommate starting a delayed freezer cleanup", "开始整理拖延已久的冷冻库的室友"], ["B", "A roommate checking dates and making room", "负责查看日期并腾出空间的室友"]],
      lines: [
        ["A", "I've been meaning to clean out the freezer.", "我一直想找时间整理冷冻库。", "I've been meaning to _____.", "我一直想找时间_____。"],
        ["B", "It's hard to see what's in the back.", "很难看清楚后面放了什么。", "It's hard to see _____.", "很难看清楚_____。"],
        ["A", "Let's put everything on the counter first.", "我们先把所有东西放到台面上吧。"],
        ["B", "Keep the frozen vegetables together.", "把冷冻蔬菜放在一起。"],
        ["A", "This soup has no date on it.", "这盒汤上面没有日期。", "This _____ has no date on it.", "这_____上面没有日期。"],
        ["B", "I made it last month, so it's still fine.", "那是我上个月做的，所以还能吃。"],
        ["A", "I'll label it before we put it back.", "放回去前我会贴上标签。"],
        ["B", "These two empty containers can come out.", "这两个空盒子可以拿出来。", "These _____ can come out.", "这些_____可以拿出来。"],
        ["A", "Now there's room for the bread.", "现在有空间放面包了。"],
        ["B", "Let's check the freezer once a month from now on.", "以后我们每个月检查一次冷冻库吧。", "Let's check the freezer _____.", "以后我们_____检查一次冷冻库吧。"]
      ],
      groups: [
        ["Delayed task", [["clean out the freezer", "整理冷冻库"], ["label the containers", "替容器贴标签"], ["sort the frozen food", "整理冷冻食品"]]],
        ["Back area", [["what's in the back", "后面放了什么"], ["the bottom drawer", "最下面的抽屉"], ["the small packages", "小包装"]]],
        ["Undated item", [["soup", "汤"], ["container", "容器"], ["bag", "袋子"]]],
        ["Remove", [["two empty containers", "两个空盒子"], ["the empty bags", "空袋子"], ["old ice trays", "旧冰盒"]]],
        ["Frequency", [["once a month", "每个月一次"], ["every few weeks", "每隔几周"], ["before shopping", "采购前"]]]
      ]
    }),
    makeDialogue({
      id: "a2-earbuds-not-charged", level: "A2", linkedSentence: "s-a2-118",
      title: "Forgetting to Charge Earbuds before a Break", titleZh: "休息前又忘了替耳机充电", scene: "staff lounge during a break",
      goal: "Two coworkers find a quick solution to an everyday charging problem.", goalZh: "两位同事为日常的充电疏忽找到快速解决方式。",
      roles: [["A", "A coworker whose earbuds have no power", "耳机没电的同事"], ["B", "A coworker carrying a compatible charging cable", "带着相容充电线的同事"]],
      lines: [
        ["A", "I keep forgetting to charge my earbuds.", "我总是忘记替耳机充电。", "I keep forgetting to _____.", "我总是忘记_____。"],
        ["B", "Do they use a USB-C cable?", "它们使用USB-C充电线吗？", "Do they use _____?", "它们使用_____吗？"],
        ["A", "Yes, but my cable is at home.", "是的，不过我的充电线在家里。"],
        ["B", "You can use the cable in my locker.", "你可以用我置物柜里的充电线。", "You can use _____.", "你可以用_____。"],
        ["A", "Thanks. Even ten minutes should help.", "谢谢。就算充十分钟应该也有帮助。"],
        ["B", "The outlet by the window is free.", "窗边的插座没人用。"],
        ["A", "I'll charge the case during my break.", "我会在休息时替充电盒充电。", "I'll charge _____ during my break.", "我会在休息时替_____充电。"],
        ["B", "Set a phone reminder for tonight.", "今晚设一个手机提醒吧。"],
        ["A", "That's a good idea. I'll do it now.", "好主意。我现在就设定。"],
        ["B", "Then you'll have them ready tomorrow.", "那你明天就能直接使用了。", "Then you'll have them ready _____.", "那你_____就能直接使用了。"]
      ],
      groups: [
        ["Repeated task", [["charge my earbuds", "替耳机充电"], ["charge the case", "替充电盒充电"], ["bring the cable", "带充电线"]]],
        ["Connection", [["a USB-C cable", "USB-C充电线"], ["the same cable", "相同的充电线"], ["this charger", "这个充电器"]]],
        ["Borrow", [["the cable in my locker", "我置物柜里的充电线"], ["my spare charger", "我的备用充电器"], ["this power bank", "这个行动电源"]]],
        ["Charge", [["the case", "充电盒"], ["the earbuds", "耳机"], ["my phone too", "也替手机"]]],
        ["Ready", [["tomorrow", "明天"], ["after lunch", "午餐后"], ["for the ride home", "下班回家时"]]]
      ]
    }),
    makeDialogue({
      id: "b1-borrowed-camera-rain", level: "B1", linkedSentence: "s-b1-115",
      title: "Protecting a Borrowed Camera from Sudden Rain", titleZh: "在突如其来的雨中保护借来的相机", scene: "outdoor family event",
      goal: "Two friends protect borrowed equipment without ending the event early.", goalZh: "两位朋友在不提早结束活动的情况下，保护借来的设备。",
      roles: [["A", "A guest using a borrowed camera", "正在使用借来相机的宾客"], ["B", "The camera owner carrying a weatherproof bag", "带着防水袋的相机主人"]],
      lines: [
        ["A", "I didn't want to risk damaging the camera.", "我不想冒着弄坏相机的风险。", "I didn't want to risk _____.", "我不想冒着_____的风险。"],
        ["B", "That was sensible. The rain started without much warning.", "这样做很稳妥。这场雨几乎没有预兆就下起来了。", "The rain started _____.", "这场雨_____就下起来了。"],
        ["A", "I wrapped it in my scarf before placing it in the bag.", "放进袋子前，我先用围巾把它包起来。"],
        ["B", "This bag is water-resistant, but the zipper must stay closed.", "这个袋子防泼水，不过拉链必须一直拉好。", "The _____ must stay closed.", "_____必须一直拉好。"],
        ["A", "Should we move the family photos under the pavilion?", "我们要移到凉亭下拍家庭照吗？"],
        ["B", "Yes. The light there is still good enough.", "要。那里的光线还是够用。"],
        ["A", "I'll wipe my hands before touching the camera again.", "再次碰相机前，我会先把手擦干。", "I'll _____ before touching the camera again.", "再次碰相机前，我会先_____。"],
        ["B", "Use this dry cloth instead of your sleeve.", "用这块干布，不要用袖子。"],
        ["A", "Once the rain eases, we can take a few outdoor pictures.", "雨势变小后，我们可以再拍几张户外照片。"],
        ["B", "Until then, keep the camera inside the bag.", "在那之前，把相机留在袋子里。", "Until then, keep _____ inside the bag.", "在那之前，把_____留在袋子里。"]
      ],
      groups: [
        ["Risk", [["damaging the camera", "弄坏相机"], ["getting the lens wet", "弄湿镜头"], ["dropping the equipment", "摔落设备"]]],
        ["Sudden change", [["without much warning", "几乎没有预兆"], ["very suddenly", "突然"], ["earlier than expected", "比预期早"]]],
        ["Keep closed", [["zipper", "拉链"], ["camera bag", "相机袋"], ["side pocket", "侧袋"]]],
        ["Before touching", [["wipe my hands", "擦干双手"], ["dry the table", "擦干桌面"], ["check the lens", "检查镜头"]]],
        ["Protected item", [["the camera", "相机"], ["the spare lens", "备用镜头"], ["the batteries", "电池"]]]
      ]
    }),
    makeDialogue({
      id: "b1-flat-tire-safe-stop", level: "B1", linkedSentence: "s-b1-116",
      title: "Finding a Safe Place after a Tire Problem", titleZh: "轮胎出问题后寻找安全停车处", scene: "phone call from a roadside parking area",
      goal: "A driver explains a tire problem clearly while waiting in a safe place.", goalZh: "驾驶在安全位置等候时，清楚说明轮胎问题。",
      roles: [["A", "A driver who noticed a tire losing air", "发现轮胎漏气的驾驶"], ["B", "A roadside assistance worker assessing the situation", "评估状况的道路救援人员"]],
      lines: [
        ["A", "The hardest part was finding a safe place to stop.", "最困难的部分是找到安全的停车处。", "The hardest part was _____.", "最困难的部分是_____。"],
        ["B", "Are you completely off the road now?", "你现在已经完全离开车道了吗？", "Are you completely _____ now?", "你现在已经完全_____了吗？"],
        ["A", "Yes. I'm in a well-lit parking area beside a gas station.", "是的。我在加油站旁边光线充足的停车区。"],
        ["B", "Good. Turn on your hazard lights while you wait.", "很好。等候时请打开警示灯。", "Turn on _____ while you wait.", "等候时请打开_____。"],
        ["A", "The rear tire is low, but it isn't completely flat.", "后轮胎压很低，不过还没有完全没气。"],
        ["B", "Don't drive farther unless the area becomes unsafe.", "除非这个地方变得不安全，否则不要继续开。"],
        ["A", "I have a spare tire, but I don't have the right tool.", "我有备胎，不过没有合适的工具。", "I have _____, but I don't have the right tool.", "我有_____，不过没有合适的工具。"],
        ["B", "A technician can reach you in about twenty minutes.", "技术人员大约二十分钟后可以到达。"],
        ["A", "I'll stay inside the car and keep the doors locked.", "我会待在车内，并把车门锁好。"],
        ["B", "Call again if your location changes.", "如果你的位置改变，请再打来。", "Call again if _____.", "如果_____，请再打来。"]
      ],
      groups: [
        ["Difficult step", [["finding a safe place to stop", "找到安全的停车处"], ["getting away from traffic", "远离车流"], ["describing my location", "说明我的位置"]]],
        ["Road position", [["off the road", "离开车道"], ["in a parking area", "在停车区"], ["away from traffic", "远离车流"]]],
        ["Safety lights", [["your hazard lights", "警示灯"], ["the parking lights", "停车灯"], ["the interior light", "车内灯"]]],
        ["Equipment", [["a spare tire", "备胎"], ["the car jack", "千斤顶"], ["a tire pump", "打气机"]]],
        ["Change", [["your location changes", "你的位置改变"], ["the tire gets worse", "轮胎状况恶化"], ["you feel unsafe", "你觉得不安全"]]]
      ]
    }),
    makeDialogue({
      id: "b1-busy-day-lunch", level: "B1", linkedSentence: "s-b1-117",
      title: "Avoiding Missed Lunches on Busy Workdays", titleZh: "避免忙碌工作日错过午餐", scene: "workplace break area",
      goal: "Two coworkers build a realistic plan for eating during busy days.", goalZh: "两位同事为忙碌工作日拟定可实行的用餐方式。",
      roles: [["A", "A coworker who often works through lunch", "经常忙到错过午餐的同事"], ["B", "A coworker suggesting a practical routine", "提出实际做法的同事"]],
      lines: [
        ["A", "I tend to skip lunch when work gets busy.", "工作一忙起来，我往往就会不吃午餐。", "I tend to _____ when _____.", "我在_____的时候往往会_____。"],
        ["B", "Does that leave you tired in the afternoon?", "这样会让你下午感到疲倦吗？", "Does that leave you _____ in the afternoon?", "这样会让你下午感到_____吗？"],
        ["A", "Yes, and then I eat too much when I get home.", "会，而且回家后就会吃得太多。"],
        ["B", "Try blocking fifteen minutes on your calendar.", "试着在日历上保留十五分钟。", "Try blocking _____ on your calendar.", "试着在日历上保留_____。"],
        ["A", "That might work on days with back-to-back meetings.", "连续开会的日子这样也许可行。"],
        ["B", "Keep something simple in the fridge as a backup.", "在冰箱里备一份简单的食物。"],
        ["A", "I could prepare a sandwich the night before.", "我可以前一晚准备三明治。", "I could prepare _____ the night before.", "我可以前一晚准备_____。"],
        ["B", "That would be easier than ordering when you're already hungry.", "这会比已经饿了才点餐更轻松。"],
        ["A", "I'll also move one meeting away from noon.", "我也会把一场会议移开中午时段。"],
        ["B", "A small change like that can make the routine easier to keep.", "这样的小改变会让这个习惯更容易维持。", "A small change like that can make _____ easier to keep.", "这样的小改变会让_____更容易维持。"]
      ],
      groups: [
        ["Habit", [["skip lunch / work gets busy", "不吃午餐／工作变忙"], ["eat too quickly / I'm rushed", "吃得太快／赶时间"], ["forget water / meetings run long", "忘记喝水／会议拖长"]]],
        ["Afternoon result", [["tired", "疲倦"], ["hungry", "饥饿"], ["unable to focus", "无法专心"]]],
        ["Protected time", [["fifteen minutes", "十五分钟"], ["a short lunch break", "短暂午休"], ["half an hour", "半小时"]]],
        ["Prepare", [["a sandwich", "三明治"], ["some fruit", "一些水果"], ["a simple lunch", "简单午餐"]]],
        ["Routine", [["the routine", "这个习惯"], ["your lunch plan", "你的午餐计划"], ["the new schedule", "新安排"]]]
      ]
    }),
    makeDialogue({
      id: "b1-phone-update-backup", level: "B1", linkedSentence: "s-b1-118",
      title: "Backing Up a Phone before an Update", titleZh: "手机更新前先备份资料", scene: "family living room",
      goal: "Two family members prepare a phone update without risking important photos.", goalZh: "两位家人先做好准备，再更新手机，避免重要照片遗失。",
      roles: [["A", "A phone owner ready to install a large update", "准备安装大型更新的手机主人"], ["B", "A family member checking the backup first", "先检查备份状态的家人"]],
      lines: [
        ["A", "I should probably back up my phone before updating it.", "我可能应该先备份手机，再进行更新。", "I should probably _____ before _____.", "我可能应该先_____，再_____。"],
        ["B", "When was your last backup?", "你上次备份是什么时候？", "When was your last _____?", "你上次_____是什么时候？"],
        ["A", "About two months ago, before our family trip.", "大约两个月前，在家庭旅行之前。"],
        ["B", "Then your recent photos may not be saved yet.", "那你最近的照片可能还没储存。"],
        ["A", "I'll connect to the home Wi-Fi and start a new backup.", "我会连接家里的Wi-Fi并开始新的备份。", "I'll connect to _____ and start a new backup.", "我会连接_____并开始新的备份。"],
        ["B", "Make sure the phone is plugged in too.", "也要确认手机接上电源。"],
        ["A", "It says the backup will take about thirty minutes.", "画面显示备份大约需要三十分钟。"],
        ["B", "Wait until it finishes before installing the update.", "等备份完成后再安装更新。", "Wait until _____ before installing the update.", "等_____后再安装更新。"],
        ["A", "I'll leave the phone on the table for now.", "我暂时会把手机放在桌上。"],
        ["B", "Check that your photos are there when the backup is done.", "备份完成后，检查照片是否都还在。", "Check that _____ when the backup is done.", "备份完成后，检查_____。"]
      ],
      groups: [
        ["First step", [["back up my phone / updating it", "备份手机／更新手机"], ["charge the battery / installing it", "替电池充电／安装更新"], ["save my photos / resetting it", "储存照片／重设手机"]]],
        ["Previous action", [["backup", "备份"], ["update", "更新"], ["photo transfer", "照片转存"]]],
        ["Connection", [["the home Wi-Fi", "家里的Wi-Fi"], ["a stable network", "稳定的网络"], ["the charger", "充电器"]]],
        ["Completion", [["the backup finishes", "备份完成"], ["all files are saved", "所有档案都储存好"], ["the phone is charged", "手机充好电"]]],
        ["Final check", [["your photos are there", "照片都还在"], ["the files open normally", "档案能正常开启"], ["the backup date is current", "备份日期是最新的"]]]
      ]
    })
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.dialogues.push(...newDialogues);
  catalog.version = "1028_today_1";

  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1028_today_1";
})();
