(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1016_today_1") {
    throw new Error("1019 practice patch requires PRACTICE_CATALOG 1016_today_1");
  }

  const find = (items, id) => items.find(item => item.id === id);
  const replace = (target, values) => Object.assign(target, values);

  const sentenceRepairs = [
    {
      id: "s-a2-95",
      title: "Realizing You Left Something Behind",
      titleZh: "发现自己把东西忘在某处",
      scene: "forgotten belongings",
      pattern: "I just realized I left _____ behind.",
      zh: "我刚发现自己把_____忘下了。",
      hints: [
        { en: "my keys", zh: "钥匙" },
        { en: "my umbrella", zh: "雨伞" },
        { en: "the library book", zh: "图书馆的书" }
      ],
      example: { en: "I just realized I left my keys behind.", zh: "我刚发现自己把钥匙忘下了。" }
    },
    {
      id: "s-a2-96",
      title: "Explaining When You Can Do Something",
      titleZh: "说明什么时候才能做某件事",
      scene: "time constraints",
      pattern: "I won't be able to _____ until _____.",
      zh: "我要等到_____以后才能_____。",
      hints: [
        { en: "call you back / my meeting ends", zh: "回电话给你／会议结束" },
        { en: "pick it up / after work", zh: "去取／下班以后" },
        { en: "move the shelf / the paint is dry", zh: "搬架子／油漆干了" }
      ],
      example: { en: "I won't be able to pick it up until after work.", zh: "我要等到下班以后才能去取。" }
    },
    {
      id: "s-a2-97",
      title: "Doing Two Things at the Same Time",
      titleZh: "礼貌协调同时进行的事情",
      scene: "sharing a task",
      pattern: "Do you mind if I _____ while you _____?",
      zh: "你_____的时候，我_____可以吗？",
      hints: [
        { en: "cut the vegetables / make the soup", zh: "切菜／煮汤" },
        { en: "sort these bags / wait for the truck", zh: "整理这些袋子／等卡车" },
        { en: "make coffee / finish your call", zh: "煮咖啡／讲完电话" }
      ],
      example: { en: "Do you mind if I make coffee while you finish your call?", zh: "你讲完电话的时候，我煮咖啡可以吗？" }
    },
    {
      id: "s-a2-98",
      title: "Saying Something Can Wait",
      titleZh: "说明某件事不用马上做",
      scene: "non-urgent tasks",
      pattern: "There's no need to _____ right away.",
      zh: "不用马上_____。",
      hints: [
        { en: "water every plant", zh: "给每一盆植物浇水" },
        { en: "finish the whole loaf", zh: "吃完整条面包" },
        { en: "answer the email", zh: "回复电子邮件" }
      ],
      example: { en: "There's no need to answer the email right away.", zh: "不用马上回复电子邮件。" }
    }
  ];
  sentenceRepairs.forEach(item => replace(find(catalog.sentencePractice, item.id), item));

  const dialogue95 = find(catalog.dialogues, "a2-forgotten-swim-goggles");
  replace(dialogue95.example[0], { en: "I just realized I left your goggles behind.", zh: "我刚发现把你的泳镜忘下了。" });
  replace(dialogue95.turns[0], { en: "I just realized I left _____ behind.", zh: "我刚发现把你的泳镜忘下了。", practiceZh: "我刚发现把_____忘下了。" });
  replace(dialogue95.referenceBank[0], { label: "Forgotten item", items: [
    { en: "your goggles", zh: "你的泳镜" },
    { en: "the towel", zh: "毛巾" },
    { en: "your swim cap", zh: "你的泳帽" }
  ] });

  const dialogue96 = find(catalog.dialogues, "a2-wait-for-paint-to-dry");
  replace(dialogue96.example[1], { en: "I won't be able to move the shelf back until the paint is dry.", zh: "我要等到油漆干了以后才能把架子搬回去。" });
  replace(dialogue96.turns[1], { en: "I won't be able to _____ until _____.", zh: "我要等到油漆干了以后才能把架子搬回去。", practiceZh: "我要等到_____以后才能_____。" });
  replace(dialogue96.referenceBank[1], { label: "Action and condition", items: [
    { en: "move the shelf / the paint is dry", zh: "搬架子／油漆干了" },
    { en: "put the books back / tomorrow morning", zh: "把书放回去／明天早上" },
    { en: "close the window / the smell is gone", zh: "关窗／气味散去" }
  ] });

  const dialogue97 = find(catalog.dialogues, "a2-park-cleanup-wait");
  replace(dialogue97.example[2], { en: "Do you mind if I sort these bags while you wait for the truck?", zh: "你等卡车的时候，我整理这些袋子可以吗？" });
  replace(dialogue97.turns[2], { en: "Do you mind if I _____ while you _____?", zh: "你等卡车的时候，我整理这些袋子可以吗？", practiceZh: "你_____的时候，我_____可以吗？" });
  replace(dialogue97.referenceBank[1], { label: "Parallel tasks", items: [
    { en: "sort these bags / wait for the truck", zh: "整理这些袋子／等卡车" },
    { en: "flatten the boxes / check the labels", zh: "压平纸箱／检查标签" },
    { en: "move the glass / clear the gate", zh: "搬玻璃瓶／清理入口" }
  ] });

  const dialogue98 = find(catalog.dialogues, "a2-water-plants-after-sunset");
  replace(dialogue98.example[2], { en: "There's no need to water every plant right away.", zh: "不用马上给每一盆植物浇水。" });
  replace(dialogue98.turns[2], { en: "There's no need to _____ right away.", zh: "不用马上给每一盆植物浇水。", practiceZh: "不用马上_____。" });
  replace(dialogue98.referenceBank[1], { label: "Task that can wait", items: [
    { en: "water every plant", zh: "给每一盆植物浇水" },
    { en: "move every planter", zh: "移动每一个花盆" },
    { en: "trim the dry leaves", zh: "修剪枯叶" }
  ] });

  function repairTranslation(id, line, en, zh, toEnglishHint, toChineseHint, vocabZh, vocabEn) {
    const item = find(catalog.translations, id);
    item.enLines[line - 1] = en;
    item.zhLines[line - 1] = zh;
    replace(item.patternLinks[0], { line, toEnglishHint, toChineseHint });
    const hint = item.lineHints.find(entry => entry.line === line);
    replace(hint, {
      toEnglishHint: `${vocabZh} ${vocabEn}`,
      toChineseHint: `Key words: ${vocabEn}`,
      toChineseVocab: [{ zh: vocabZh, en: vocabEn }]
    });
  }

  repairTranslation(
    "tr-a2-library-book-slipped-mind", 2,
    "I just realized I left the library book behind.",
    "我刚发现自己把图书馆的书忘下了。",
    "I just realized I left + item + behind.",
    "我刚发现自己把……忘下了。",
    "忘下", "leave behind"
  );
  const translation95 = find(catalog.translations, "tr-a2-library-book-slipped-mind");
  translation95.enLines[2] = "This morning, I found the book on my desk at work.";
  translation95.zhLines[2] = "今天早上，我在办公室的桌上找到了那本书。";
  replace(translation95.lineHints[2], {
    toEnglishHint: "办公室的桌上 on my desk at work",
    toChineseHint: "Key words: on my desk at work",
    toChineseVocab: [{ zh: "办公室的桌上", en: "on my desk at work" }]
  });
  repairTranslation(
    "tr-a2-cycle-after-traffic", 4,
    "I won't be able to cycle home safely until traffic is lighter.",
    "我要等到车流少一点以后才能安全骑车回家。",
    "I won't be able to + action + until + condition.",
    "我要等到……以后才能……。",
    "等车流少一点", "until traffic is lighter"
  );
  repairTranslation(
    "tr-a2-breakfast-while-soup-cools", 4,
    "Do you mind if I prepare breakfast while you watch the soup?",
    "你看着汤的时候，我准备早餐可以吗？",
    "Do you mind if I + action + while you + action?",
    "你……的时候，我……可以吗？",
    "准备早餐", "prepare breakfast"
  );
  repairTranslation(
    "tr-a2-freeze-half-bread", 4,
    "There's no need to finish the whole loaf right away.",
    "不用马上吃完整条面包。",
    "There's no need to + action + right away.",
    "不用马上……。",
    "整条面包", "the whole loaf"
  );

  const publishedOn = "2026-10-19";
  const newSentences = [
    { id: "s-a1-99", level: "A1", title: "Asking How to Do Something", titleZh: "请别人示范怎么做", scene: "learning a simple action", pattern: "Could you show me how to _____?", zh: "你可以示范怎么_____吗？", hints: [{ en: "use this air pump", zh: "使用这个打气筒" }, { en: "fold this cart", zh: "折叠这辆推车" }, { en: "adjust the strap", zh: "调整背带" }], example: { en: "Could you show me how to use this air pump?", zh: "你可以示范怎么使用这个打气筒吗？" }, publishedOn },
    { id: "s-a1-100", level: "A1", title: "Saying You Cannot Find Something", titleZh: "说明东西怎么找都找不到", scene: "lost belongings", pattern: "I can't find _____ anywhere.", zh: "我到处都找不到_____。", hints: [{ en: "my keys", zh: "我的钥匙" }, { en: "the receipt", zh: "收据" }, { en: "my other shoe", zh: "我的另一只鞋" }], example: { en: "I can't find my keys anywhere.", zh: "我到处都找不到我的钥匙。" }, publishedOn },
    { id: "s-a1-101", level: "A1", title: "Requesting Another One", titleZh: "请求再拿一个", scene: "simple replacement", pattern: "Could I get another _____?", zh: "我可以再拿一个_____吗？", hints: [{ en: "map", zh: "地图" }, { en: "towel", zh: "毛巾" }, { en: "cup", zh: "杯子" }], example: { en: "Could I get another map?", zh: "我可以再拿一张地图吗？" }, publishedOn },
    { id: "s-a1-102", level: "A1", title: "Asking for Help Carrying Something", titleZh: "请别人帮忙搬东西", scene: "carrying something", pattern: "Can you help me carry _____?", zh: "你可以帮我搬_____吗？", hints: [{ en: "this folded table", zh: "这张折叠桌" }, { en: "the box of water", zh: "这箱水" }, { en: "the stroller", zh: "婴儿车" }], example: { en: "Can you help me carry this folded table?", zh: "你可以帮我搬这张折叠桌吗？" }, publishedOn },
    { id: "s-a2-99", level: "A2", title: "Trying to Finish Something First", titleZh: "希望在某件事之前完成任务", scene: "planning around a deadline", pattern: "I was hoping to _____ before _____.", zh: "我原本希望在_____之前_____。", hints: [{ en: "pick up my shoes / the shop closes", zh: "取鞋／店铺打烊" }, { en: "wash the raincoat / this evening", zh: "洗雨衣／今晚" }, { en: "finish the form / lunch", zh: "填完表格／午餐" }], example: { en: "I was hoping to pick up my shoes before the shop closes.", zh: "我原本希望在店铺打烊前取鞋。" }, publishedOn },
    { id: "s-a2-100", level: "A2", title: "Asking for Help Finding the Cause", titleZh: "请别人一起找出原因", scene: "everyday troubleshooting", pattern: "Could you help me figure out why _____?", zh: "你可以帮我弄清楚为什么_____吗？", hints: [{ en: "these leaves are turning brown", zh: "这些叶子变成褐色" }, { en: "the light keeps going out", zh: "这盏灯一直熄灭" }, { en: "the drawer will not close", zh: "抽屉关不上" }], example: { en: "Could you help me figure out why these leaves are turning brown?", zh: "你可以帮我弄清楚为什么这些叶子变成褐色吗？" }, publishedOn },
    { id: "s-a2-101", level: "A2", title: "Suggesting You Do It Together", titleZh: "建议一起完成任务", scene: "shared tasks", pattern: "Would it be easier to _____ together?", zh: "一起_____会不会比较容易？", hints: [{ en: "sort these clothes", zh: "整理这些衣服" }, { en: "move the chairs", zh: "搬椅子" }, { en: "prepare the room", zh: "布置房间" }], example: { en: "Would it be easier to sort these clothes together?", zh: "一起整理这些衣服会不会比较容易？" }, publishedOn },
    { id: "s-a2-102", level: "A2", title: "Agreeing with a Simple Condition", titleZh: "在简单条件下答应帮忙", scene: "setting a practical limit", pattern: "I can _____, as long as _____.", zh: "只要_____，我就可以_____。", hints: [{ en: "give you a ride / we leave by six", zh: "载你一程／我们六点前出发" }, { en: "help at the sale / I can leave early", zh: "帮忙顾摊／我可以提早离开" }, { en: "lend you the cart / you bring it back tonight", zh: "借你推车／你今晚归还" }], example: { en: "I can give you a ride, as long as we leave by six.", zh: "只要我们六点前出发，我就可以载你一程。" }, publishedOn },
    { id: "s-b1-99", level: "B1", title: "Offering Help with a Clear Condition", titleZh: "提出有明确条件的协助", scene: "fair exchanges", pattern: "I'm willing to _____, but I need _____ in return.", zh: "我愿意_____，但我需要对方_____作为交换。", hints: [{ en: "cover your shift / more notice next time", zh: "替你代班／下次早点通知" }, { en: "lend you the car / a full tank", zh: "把车借给你／把油加满" }, { en: "take the first task / help later", zh: "先处理第一项任务／之后帮忙" }], example: { en: "I'm willing to cover your shift, but I need more notice next time in return.", zh: "我愿意替你代班，但作为交换，我需要你下次早点通知。" }, publishedOn },
    { id: "s-b1-100", level: "B1", title: "Trying to Solve a Repeated Problem", titleZh: "想办法解决反复发生的问题", scene: "recurring everyday problems", pattern: "I'd rather find a way to _____ than keep _____.", zh: "我宁愿想办法_____，也不想一直_____。", hints: [{ en: "use the leftovers / throwing food away", zh: "利用剩菜／丢掉食物" }, { en: "fix the chain / stopping every few blocks", zh: "修好链条／每骑几条街就停下" }, { en: "share the chores / arguing about them", zh: "分担家务／为了家务争执" }], example: { en: "I'd rather find a way to use the leftovers than keep throwing food away.", zh: "我宁愿想办法利用剩菜，也不想一直丢掉食物。" }, publishedOn },
    { id: "s-b1-101", level: "B1", title: "Drawing a Practical Distinction", titleZh: "区分两种不同程度的事情", scene: "realistic expectations", pattern: "It's one thing to _____; it's another to _____.", zh: "_____是一回事，_____又是另一回事。", hints: [{ en: "join a hike / lead a group", zh: "参加健行／带领一群人" }, { en: "try a recipe / cook for ten people", zh: "试做一道菜／煮给十个人吃" }, { en: "offer advice / take responsibility", zh: "提供建议／承担责任" }], example: { en: "It's one thing to join a hike; it's another to lead a group.", zh: "参加健行是一回事，带领一群人又是另一回事。" }, publishedOn },
    { id: "s-b1-102", level: "B1", title: "Naming a Backup Plan", titleZh: "说明无法执行时的备用方案", scene: "practical contingencies", pattern: "If we can't _____, we may have to _____.", zh: "如果我们无法_____，可能就得_____。", hints: [{ en: "restore the internet / move the interview", zh: "恢复网络／更换面试地点" }, { en: "arrange pickup / leave work early", zh: "安排接送／提早下班" }, { en: "repair it today / rent one", zh: "今天修好／租一台" }], example: { en: "If we can't restore the internet, we may have to move the interview.", zh: "如果我们无法恢复网络，可能就得更换面试地点。" }, publishedOn }
  ];

  catalog.sentencePractice.push(...newSentences);

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
      id: "a1-bike-pump-help", level: "A1", linkedSentence: "s-a1-99",
      title: "Using an Air Pump at a Bike Repair Station", titleZh: "在自行车维修站使用打气筒", scene: "public bike repair station",
      goal: "A cyclist asks a station volunteer to demonstrate a public air pump.", goalZh: "骑车者请维修站志愿者示范公共打气筒的使用方法。",
      roles: [["A", "A cyclist using the repair station for the first time", "第一次使用维修站的骑车者"], ["B", "A volunteer who explains each step", "逐步说明操作方式的志愿者"]],
      lines: [
        ["A", "Could you show me how to use this air pump?", "你可以示范怎么使用这个打气筒吗？", "Could you show me how to _____?", "你可以示范怎么_____吗？"],
        ["B", "Sure. First, place the pump head on the valve.", "可以。先把打气筒接头套在气嘴上。", "First, place _____ on _____.", "先把_____套在_____上。"],
        ["A", "Does this lever need to be up or down?", "这个拉杆要朝上还是朝下？", "Does _____ need to be up or down?", "_____要朝上还是朝下？"],
        ["B", "Push it down after the head is attached.", "接头套好以后，把它往下压。"],
        ["A", "How do I know when the tire has enough air?", "我要怎么知道轮胎的气够了？"],
        ["B", "Check the number on the small gauge.", "查看小压力表上的数字。", "Check _____ on _____.", "查看_____上的_____。"],
        ["A", "The pump head feels loose.", "打气筒接头感觉有点松。", "The _____ feels loose.", "_____感觉有点松。"],
        ["B", "Hold it straight while you push the lever down.", "压下拉杆时要把接头扶正。"],
        ["A", "That's much better. Thank you.", "这样好多了，谢谢。"],
        ["B", "You're welcome. Check the other tire too.", "不客气。另一边的轮胎也检查一下。"]
      ],
      groups: [
        ["Action", [["use this air pump", "使用这个打气筒"], ["check the tire pressure", "检查胎压"], ["attach the pump head", "装上打气筒接头"]]],
        ["Part and place", [["the pump head / the valve", "打气筒接头／气嘴"], ["the cap / the bench", "气嘴盖／长椅"], ["the bike / the stand", "自行车／维修架"]]],
        ["Part", [["this lever", "这个拉杆"], ["the red handle", "红色把手"], ["the small switch", "小开关"]]],
        ["Reading", [["the number / the gauge", "数字／压力表"], ["the green mark / the screen", "绿色标记／屏幕"], ["the arrow / the label", "箭头／标签"]]],
        ["Loose part", [["pump head", "打气筒接头"], ["valve cap", "气嘴盖"], ["bike seat", "自行车座椅"]]]
      ]
    }),
    makeDialogue({
      id: "a1-market-missing-hat", level: "A1", linkedSentence: "s-a1-100",
      title: "Looking for a Hat at an Outdoor Market", titleZh: "在露天市集寻找帽子", scene: "outdoor market",
      goal: "A shopper describes a missing hat, and a fruit seller helps locate it.", goalZh: "顾客描述遗失的帽子，水果摊贩协助寻找。",
      roles: [["A", "A shopper who cannot find a hat", "找不到帽子的顾客"], ["B", "A fruit seller who noticed a lost item", "注意到遗失物的水果摊贩"]],
      lines: [
        ["A", "I can't find my blue hat anywhere.", "我到处都找不到我的蓝色帽子。", "I can't find _____ anywhere.", "我到处都找不到_____。"],
        ["B", "When did you last see it?", "你最后一次看到它是什么时候？", "When did you last see _____?", "你最后一次看到_____是什么时候？"],
        ["A", "I had it near the fruit stand.", "我在水果摊附近时还戴着。", "I had it near _____.", "我在_____附近时还有它。"],
        ["B", "A hat is hanging beside the cashier.", "收银台旁边挂着一顶帽子。", "A _____ is hanging beside _____.", "_____旁边挂着一个_____。"],
        ["A", "Is there a red pin on the side?", "旁边有一枚红色别针吗？", "Is there _____ on the side?", "旁边有_____吗？"],
        ["B", "Yes, there is.", "有。"],
        ["A", "That's mine. Where did you find it?", "那是我的。你在哪里找到的？"],
        ["B", "It was under the next table.", "它在隔壁桌子下面。"],
        ["A", "Thank you for keeping it safe.", "谢谢你替我保管。"],
        ["B", "No problem. It almost blew into the street.", "不客气。它差点被吹到马路上。"]
      ],
      groups: [
        ["Missing item", [["my blue hat", "我的蓝色帽子"], ["my cloth bag", "我的布袋"], ["my sunglasses", "我的太阳眼镜"]]],
        ["Item", [["the hat", "帽子"], ["your bag", "你的袋子"], ["the sunglasses", "太阳眼镜"]]],
        ["Last place", [["the fruit stand", "水果摊"], ["the coffee cart", "咖啡餐车"], ["the entrance", "入口"]]],
        ["Object and location", [["hat / the cashier", "帽子／收银台"], ["bag / the chair", "袋子／椅子"], ["pair of glasses / the basket", "眼镜／篮子"]]],
        ["Detail", [["a red pin", "一枚红色别针"], ["a white label", "白色标签"], ["a small pocket", "小口袋"]]]
      ]
    }),
    makeDialogue({
      id: "a1-visitor-center-new-map", level: "A1", linkedSentence: "s-a1-101",
      title: "Replacing a Wet Map at a Visitor Center", titleZh: "在游客中心更换弄湿的地图", scene: "visitor center",
      goal: "A visitor asks a guide for a clean map and chooses a useful version.", goalZh: "游客向导览人员索取干净地图，并选择适合的版本。",
      roles: [["A", "A visitor whose paper map got wet", "纸本地图被弄湿的游客"], ["B", "A guide at the visitor center", "游客中心的导览人员"]],
      lines: [
        ["A", "Could I get another map?", "我可以再拿一张地图吗？", "Could I get another _____?", "我可以再拿一个_____吗？"],
        ["B", "Of course. What happened to this one?", "当然可以。这一张怎么了？", "What happened to _____?", "_____怎么了？"],
        ["A", "It got wet in the rain.", "它被雨淋湿了。", "It got wet in _____.", "它被_____弄湿了。"],
        ["B", "Would you like the city map or the walking map?", "你想要城市地图还是步行地图？"],
        ["A", "Which one shows the riverside path?", "哪一张有标出河边步道？"],
        ["B", "The walking map shows the full path.", "步行地图有完整标示那条步道。", "The _____ shows the full path.", "_____有完整标示那条步道。"],
        ["A", "Then I'll take that one, please.", "那我就拿那一张，谢谢。", "Then I'll take _____, please.", "那我就拿_____，谢谢。"],
        ["B", "Here you are. I can also give you a plastic cover.", "给你。我也可以给你一个塑料套。"],
        ["A", "That would be helpful.", "那会很有帮助。"],
        ["B", "Keep it folded until you are indoors.", "进到室内以前先把它折好收着。"]
      ],
      groups: [
        ["Replacement", [["map", "地图"], ["guide sheet", "导览单"], ["trail card", "步道卡"]]],
        ["Damaged item", [["this map", "这张地图"], ["the guide sheet", "导览单"], ["your ticket", "你的票券"]]],
        ["Cause", [["the rain", "雨水"], ["my water bottle", "我的水瓶"], ["a puddle", "水坑"]]],
        ["Useful version", [["walking map", "步行地图"], ["city map", "城市地图"], ["trail guide", "步道指南"]]],
        ["Choice", [["that one", "那一张"], ["the smaller map", "较小的地图"], ["the waterproof copy", "防水版本"]]]
      ]
    }),
    makeDialogue({
      id: "a1-recycling-carry-box", level: "A1", linkedSentence: "s-a1-102",
      title: "Carrying a Heavy Box at a Recycling Drop-Off", titleZh: "在回收站搬运重箱子", scene: "neighborhood recycling drop-off",
      goal: "A resident asks a site volunteer to help carry and sort a heavy box safely.", goalZh: "居民请回收站志愿者协助安全搬运并分类重箱子。",
      roles: [["A", "A resident carrying a heavy box", "搬着重箱子的居民"], ["B", "A volunteer who knows where each item goes", "知道各类物品放置位置的志愿者"]],
      lines: [
        ["A", "Can you help me carry this box?", "你可以帮我搬这个箱子吗？", "Can you help me carry _____?", "你可以帮我搬_____吗？"],
        ["B", "Sure. What's inside it?", "可以。里面装了什么？", "What's inside _____?", "_____里面装了什么？"],
        ["A", "It has glass jars and old magazines.", "里面有玻璃罐和旧杂志。", "It has _____ and _____.", "里面有_____和_____。"],
        ["B", "Let's put it on the sorting table first.", "我们先把它放到分类桌上。", "Let's put it on _____ first.", "我们先把它放到_____上。"],
        ["A", "Should the jars go in the blue bin?", "玻璃罐要放进蓝色回收箱吗？"],
        ["B", "Yes, but remove the metal lids.", "对，不过要先把金属盖拿掉。"],
        ["A", "Where do the magazines go?", "杂志要放在哪里？", "Where do _____ go?", "_____要放在哪里？"],
        ["B", "Put them with the clean paper.", "把它们放在干净纸类区。"],
        ["A", "Thanks. The box is much lighter now.", "谢谢。现在箱子轻多了。"],
        ["B", "I'll carry the empty box back for you.", "我帮你把空箱子搬回去。"]
      ],
      groups: [
        ["Heavy item", [["this box", "这个箱子"], ["the bag of cans", "这袋罐子"], ["the old printer", "旧打印机"]]],
        ["Container", [["the box", "箱子"], ["the bag", "袋子"], ["the basket", "篮子"]]],
        ["Contents", [["glass jars / old magazines", "玻璃罐／旧杂志"], ["cans / cardboard", "罐子／纸板"], ["bottles / newspapers", "瓶子／报纸"]]],
        ["First stop", [["the sorting table", "分类桌"], ["the blue cart", "蓝色推车"], ["the scale", "磅秤"]]],
        ["Material", [["the magazines", "杂志"], ["the cardboard", "纸板"], ["the metal lids", "金属盖"]]]
      ]
    }),
    makeDialogue({
      id: "a2-shoe-repair-deadline", level: "A2", linkedSentence: "s-a2-99",
      title: "Picking Up Repaired Shoes before a Weekend Walk", titleZh: "周末散步前取回修好的鞋子", scene: "shoe repair shop",
      goal: "A customer and a repairer choose a realistic repair that can be finished before closing.", goalZh: "顾客与修鞋师傅选择能在打烊前完成的实际维修方式。",
      roles: [["A", "A customer who needs comfortable shoes for the weekend", "周末需要穿舒适鞋子的顾客"], ["B", "A repairer balancing time and repair quality", "需要兼顾时间与维修品质的修鞋师傅"]],
      lines: [
        ["A", "I was hoping to pick these up before the shop closes on Friday.", "我原本希望星期五店铺打烊前来取鞋。", "I was hoping to _____ before _____.", "我原本希望在_____之前_____。"],
        ["B", "I can replace the heel by then, but the full sole needs more time.", "我可以在那之前换好鞋跟，但更换整片鞋底需要更多时间。", "I can _____ by then, but _____ needs more time.", "我可以在那之前_____，但_____需要更多时间。"],
        ["A", "The heel is the part that hurts when I walk.", "走路时让我不舒服的是鞋跟。", "The _____ is the part that hurts when I walk.", "走路时让我不舒服的是_____。"],
        ["B", "Then we can repair that first and check the sole afterward.", "那我们可以先修鞋跟，之后再检查鞋底。", "We can repair _____ first and check _____ afterward.", "我们可以先修_____，之后再检查_____。"],
        ["A", "Will the temporary repair last through the weekend?", "临时维修可以撑过这个周末吗？"],
        ["B", "Yes, as long as you avoid heavy rain.", "可以，只要你不要让鞋子淋到大雨。"],
        ["A", "Could you call me if anything else is damaged?", "如果发现其他损坏，可以打电话告诉我吗？", "Could you call me if _____?", "如果_____，可以打电话告诉我吗？"],
        ["B", "Of course. Otherwise, they will be ready Friday afternoon.", "当然。没有其他问题的话，星期五下午就会完成。"],
        ["A", "That timing works for me.", "这个时间我可以。"],
        ["B", "I'll write the pickup time on your receipt.", "我会把取鞋时间写在收据上。"]
      ],
      groups: [
        ["Goal and deadline", [["pick these up / the shop closes Friday", "取鞋／星期五店铺打烊"], ["have them ready / the weekend", "完成维修／周末"], ["get the heel fixed / my walk", "修好鞋跟／散步"]]],
        ["Repair options", [["replace the heel / the full sole", "换鞋跟／整片鞋底"], ["stitch the side / a full repair", "缝补侧边／完整维修"], ["add a pad / new lining", "加鞋垫／更换内衬"]]],
        ["Problem area", [["heel", "鞋跟"], ["left side", "左侧"], ["inside edge", "内侧边缘"]]],
        ["Order of work", [["the heel / the sole", "鞋跟／鞋底"], ["the loose seam / the lining", "松开的缝线／内衬"], ["the strap / the buckle", "鞋带／扣环"]]],
        ["Possible discovery", [["anything else is damaged", "发现其他损坏"], ["the sole needs replacing", "鞋底需要更换"], ["the repair will take longer", "维修需要更久"]]]
      ]
    }),
    makeDialogue({
      id: "a2-basil-brown-leaves", level: "A2", linkedSentence: "s-a2-100",
      title: "Finding Out Why a Basil Plant Is Turning Brown", titleZh: "找出罗勒叶变褐的原因", scene: "community garden table",
      goal: "A new gardener describes a plant problem, and an experienced neighbor helps test likely causes.", goalZh: "新手园艺者描述植物问题，经验较多的邻居协助检查可能原因。",
      roles: [["A", "A new gardener with a struggling basil plant", "罗勒生长不佳的新手园艺者"], ["B", "A neighbor who grows herbs", "有香草种植经验的邻居"]],
      lines: [
        ["A", "Could you help me figure out why these leaves are turning brown?", "你可以帮我弄清楚为什么这些叶子变成褐色吗？", "Could you help me figure out why _____?", "你可以帮我弄清楚为什么_____吗？"],
        ["B", "How often do you water the plant?", "你多久给这盆植物浇一次水？", "How often do you _____?", "你多久_____一次？"],
        ["A", "I water it every morning, even when the soil feels wet.", "我每天早上都会浇水，即使土摸起来还是湿的。", "I _____ every morning, even when _____.", "我每天早上都会_____，即使_____。"],
        ["B", "The roots may be staying wet for too long.", "根部可能湿得太久了。", "The _____ may be staying _____ for too long.", "_____可能维持_____太久了。"],
        ["A", "Should I move it into stronger sunlight?", "我应该把它移到阳光更强的地方吗？"],
        ["B", "Not yet. Let the top soil dry first.", "先不用。让表层土先干一点。"],
        ["A", "How will I know when it needs water again?", "我要怎么知道什么时候需要再浇水？", "How will I know when _____?", "我要怎么知道什么时候_____？"],
        ["B", "Press a finger into the soil about two centimeters.", "把手指压进土里大约两厘米。"],
        ["A", "I'll check it before watering tomorrow.", "明天浇水前我会先检查。"],
        ["B", "Good. New leaves should look healthier within a week.", "好。一周内新叶应该会看起来更健康。"]
      ],
      groups: [
        ["Plant problem", [["these leaves are turning brown", "这些叶子变褐"], ["the stems are getting soft", "茎变软"], ["the plant is dropping leaves", "植物正在掉叶"]]],
        ["Care action", [["water the plant", "给植物浇水"], ["check the soil", "检查土壤"], ["move the pot", "移动花盆"]]],
        ["Routine and condition", [["water it / the soil feels wet", "浇水／土还是湿的"], ["mist the leaves / the room is humid", "喷湿叶片／房间很潮湿"], ["add water / the tray is full", "加水／托盘还是满的"]]],
        ["Plant part and state", [["roots / wet", "根部／湿润"], ["soil / damp", "土壤／潮湿"], ["leaves / crowded", "叶片／过于拥挤"]]],
        ["Next sign", [["it needs water again", "需要再次浇水"], ["the soil is dry enough", "土够干了"], ["the plant needs more light", "植物需要更多光线"]]]
      ]
    }),
    makeDialogue({
      id: "a2-donation-sort-together", level: "A2", linkedSentence: "s-a2-101",
      title: "Sorting Clothing Donations before Opening", titleZh: "开放前整理衣物捐赠品", scene: "clothing donation center",
      goal: "Two volunteers divide and combine tasks to finish sorting before visitors arrive.", goalZh: "两位志愿者分工合作，在访客抵达前完成衣物分类。",
      roles: [["A", "A volunteer opening mixed donation bags", "负责打开混合捐赠袋的志愿者"], ["B", "A volunteer labeling shelves by type and size", "按照种类与尺寸替架子贴标签的志愿者"]],
      lines: [
        ["A", "Would it be easier to sort these clothes together?", "一起整理这些衣服会不会比较容易？", "Would it be easier to _____ together?", "一起_____会不会比较容易？"],
        ["B", "Yes. We can separate them by type first.", "可以。我们可以先按照种类分开。", "We can separate them by _____ first.", "我们可以先按照_____分开。"],
        ["A", "I'll make piles for shirts, pants, and jackets.", "我来把上衣、裤子和外套分成几堆。", "I'll make piles for _____, _____, and _____.", "我来把_____、_____和_____分成几堆。"],
        ["B", "Then I'll check the sizes and add labels.", "然后我来检查尺寸并贴上标签。", "Then I'll check _____ and add _____.", "然后我来检查_____并贴上_____。"],
        ["A", "What should we do with clothes that need washing?", "需要清洗的衣服该怎么办？"],
        ["B", "Put them in the gray basket for now.", "先把它们放进灰色篮子。"],
        ["A", "Could you look at this coat? The zipper is stuck.", "你可以看看这件外套吗？拉链卡住了。", "Could you look at _____?", "你可以看看_____吗？"],
        ["B", "Set it aside. Someone can repair it later.", "先放到一旁，之后可以请人修理。"],
        ["A", "We are moving much faster now.", "我们现在整理快多了。"],
        ["B", "We should finish before the doors open.", "我们应该可以在开放前完成。"]
      ],
      groups: [
        ["Shared task", [["sort these clothes", "整理这些衣服"], ["open the donation bags", "打开捐赠袋"], ["label the shelves", "替架子贴标签"]]],
        ["Sorting rule", [["type", "种类"], ["size", "尺寸"], ["season", "季节"]]],
        ["Categories", [["shirts / pants / jackets", "上衣／裤子／外套"], ["adult / child / baby clothes", "成人／儿童／婴儿衣物"], ["shoes / bags / hats", "鞋子／袋子／帽子"]]],
        ["Check and add", [["sizes / labels", "尺寸／标签"], ["pockets / tags", "口袋／吊牌"], ["condition / notes", "状况／说明"]]],
        ["Item to inspect", [["this coat", "这件外套"], ["this pair of shoes", "这双鞋"], ["this backpack", "这个背包"]]]
      ]
    }),
    makeDialogue({
      id: "a2-ride-with-condition", level: "A2", linkedSentence: "s-a2-102",
      title: "Giving a Friend a Ride with One Condition", titleZh: "在一个条件下开车载朋友", scene: "after-work ride",
      goal: "A driver agrees to help a friend while protecting an important time limit.", goalZh: "驾驶者答应载朋友一程，同时说明必须遵守的时间限制。",
      roles: [["A", "A friend asking for a ride across town", "想请朋友开车载自己到城里另一端的人"], ["B", "A driver who must be home by a certain time", "必须在特定时间前回家的驾驶者"]],
      lines: [
        ["A", "Could you give me a ride to the west side after work?", "下班后你可以载我到城西吗？", "Could you give me a ride to _____ after _____?", "_____以后你可以载我到_____吗？"],
        ["B", "I can drive you, as long as we leave by six.", "只要我们六点前出发，我就可以载你。", "I can _____, as long as _____.", "只要_____，我就可以_____。"],
        ["A", "That works. I only need to stop at the repair shop.", "可以。我只需要在维修店停一下。", "I only need to stop at _____.", "我只需要在_____停一下。"],
        ["B", "How long do you expect the stop to take?", "你预计会停多久？", "How long do you expect _____ to take?", "你预计_____会花多久？"],
        ["A", "About ten minutes if the item is ready.", "如果东西准备好了，大约十分钟。"],
        ["B", "I need to be home before seven for a family call.", "我七点前要到家参加家庭通话。"],
        ["A", "If the shop is busy, I can come back tomorrow.", "如果维修店很忙，我可以明天再来。", "If _____, I can _____.", "如果_____，我可以_____。"],
        ["B", "Good. Meet me by the south entrance at five forty-five.", "好。五点四十五分在南侧入口和我碰面。"],
        ["A", "I'll be there with everything ready.", "我会准备好东西准时到。"],
        ["B", "Then the timing should be fine.", "那时间上应该没问题。"]
      ],
      groups: [
        ["Place and time", [["the west side / work", "城西／下班"], ["the repair shop / lunch", "维修店／午餐"], ["the station / class", "车站／下课"]]],
        ["Help and condition", [["drive you / we leave by six", "开车载你／六点前出发"], ["take the highway / traffic is light", "走高速公路／车流顺畅"], ["wait ten minutes / you are ready", "等十分钟／你准备好"]]],
        ["Short stop", [["the repair shop", "维修店"], ["the pharmacy", "药局"], ["the post office", "邮局"]]],
        ["Time question", [["the stop", "停留"], ["the pickup", "取件"], ["the drive", "车程"]]],
        ["Backup", [["the shop is busy / come back tomorrow", "店里很忙／明天再来"], ["traffic is heavy / take the train", "车流拥挤／搭火车"], ["we leave late / skip the stop", "出发太晚／取消停留"]]]
      ]
    }),
    makeDialogue({
      id: "b1-cover-shift-boundary", level: "B1", linkedSentence: "s-b1-99",
      title: "Covering a Coworker's Shift with Clear Limits", titleZh: "在明确条件下替同事代班", scene: "staff break room",
      goal: "Two coworkers negotiate emergency shift coverage without creating an unfair pattern.", goalZh: "两位同事协商临时代班，同时避免形成不公平的惯例。",
      roles: [["A", "A coworker requesting last-minute shift coverage", "临时请求别人代班的同事"], ["B", "A coworker willing to help under a fair condition", "愿意在公平条件下帮忙的同事"]],
      lines: [
        ["A", "Could you cover the first half of my shift tonight?", "今晚你可以帮我代前半段的班吗？", "Could you cover _____ tonight?", "今晚你可以帮我代_____吗？"],
        ["B", "I'm willing to cover it, but I need more notice next time in return.", "我愿意代班，但作为交换，我需要你下次早点通知。", "I'm willing to _____, but I need _____ in return.", "我愿意_____，但我需要对方_____作为交换。"],
        ["A", "That's fair. My childcare plan changed this afternoon.", "这很公平。我的托儿安排今天下午临时改变了。", "My _____ changed this afternoon.", "我的_____今天下午临时改变了。"],
        ["B", "I can stay until eight, but not until closing.", "我可以留到八点，但无法待到打烊。", "I can stay until _____, but not until _____.", "我可以留到_____，但无法待到_____。"],
        ["A", "I can return for the last two hours.", "最后两个小时我可以回来。"],
        ["B", "Then leave me a note about the unfinished tasks.", "那就留张纸条告诉我哪些工作还没完成。"],
        ["A", "I'll update the task board before I leave.", "离开前我会更新工作板。", "I'll update _____ before _____.", "我会在_____以前更新_____。"],
        ["B", "Good. I don't want customers waiting because we missed a handoff.", "好。我不希望因为交接遗漏而让顾客等待。"],
        ["A", "Thanks for helping me handle this.", "谢谢你帮我处理这次状况。"],
        ["B", "No problem. Just message me earlier next time.", "没问题。下次早点传讯息给我就好。"]
      ],
      groups: [
        ["Coverage", [["the first half of my shift", "前半段的班"], ["the dinner rush", "晚餐尖峰时段"], ["the front desk", "柜台"]]],
        ["Exchange", [["cover it / more notice next time", "代班／下次早点通知"], ["stay late / swap Saturday", "晚点下班／交换星期六的班"], ["handle the desk / help tomorrow", "顾柜台／明天帮忙"]]],
        ["Changed plan", [["childcare plan", "托儿安排"], ["ride home", "回家交通"], ["medical appointment", "就医预约"]]],
        ["Time limit", [["eight / closing", "八点／打烊"], ["seven thirty / nine", "七点半／九点"], ["the rush / cleanup", "尖峰时段／清洁时间"]]],
        ["Update and deadline", [["the task board / I leave", "工作板／离开"], ["the customer notes / dinner", "顾客备注／晚餐时间"], ["the stock list / six", "库存清单／六点"]]]
      ]
    }),
    makeDialogue({
      id: "b1-shared-fridge-labels-1019", level: "B1", linkedSentence: "s-b1-100",
      title: "Reducing Food Waste in a Shared Apartment", titleZh: "减少合租公寓里的食物浪费", scene: "shared apartment kitchen",
      goal: "Two roommates replace repeated food waste with a simple shared system.", goalZh: "两位室友用简单的共用制度改善反复发生的食物浪费。",
      roles: [["A", "A roommate frustrated by forgotten leftovers", "对被遗忘的剩菜感到困扰的室友"], ["B", "A roommate who wants a system that is easy to maintain", "希望建立容易维持制度的室友"]],
      lines: [
        ["A", "I'd rather find a way to use the leftovers than keep throwing food away.", "我宁愿想办法利用剩菜，也不想一直丢掉食物。", "I'd rather find a way to _____ than keep _____.", "我宁愿想办法_____，也不想一直_____。"],
        ["B", "The problem is that we never know whose food is whose.", "问题是我们一直不知道哪些食物是谁的。", "The problem is that _____.", "问题是_____。"],
        ["A", "We could label each container with a name and date.", "我们可以在每个容器上写名字和日期。", "We could label _____ with _____.", "我们可以在_____上标示_____。"],
        ["B", "That would help, as long as we remove old labels.", "那会有帮助，只要我们记得移除旧标签。", "That would help, as long as _____.", "那会有帮助，只要_____。"],
        ["A", "Let's also keep one shelf for food that should be eaten first.", "我们也留一层架子放应该先吃的食物吧。"],
        ["B", "We can call it the use-first shelf.", "我们可以叫它优先食用区。"],
        ["A", "If something stays there for three days, we should check it.", "如果食物在那里放了三天，我们就该检查。", "If _____ for three days, we should _____.", "如果_____三天，我们就该_____。"],
        ["B", "Agreed, but let's not throw away unopened food without asking.", "同意，不过没有先问过，不要丢掉未开封的食物。"],
        ["A", "That's reasonable. We can start after dinner.", "这很合理。我们晚餐后就可以开始。"],
        ["B", "I'll bring labels, and you can clear the shelf.", "我拿标签，你来清空架子。"]
      ],
      groups: [
        ["Goal and repeated problem", [["use the leftovers / throwing food away", "利用剩菜／丢掉食物"], ["share the produce / buying too much", "分享蔬果／买太多"], ["plan meals / forgetting ingredients", "规划餐点／忘记食材"]]],
        ["Root problem", [["we never know whose food is whose", "我们不知道食物是谁的"], ["nothing has a date", "食物都没有日期"], ["the back shelf is too full", "后面的架子太满"]]],
        ["Labeling", [["each container / a name and date", "每个容器／名字和日期"], ["the shelf / simple categories", "架子／简单分类"], ["the leftovers / today's date", "剩菜／今天日期"]]],
        ["Condition", [["we remove old labels", "移除旧标签"], ["everyone uses the same shelf", "大家使用同一层架子"], ["we check it twice a week", "每周检查两次"]]],
        ["Time and action", [["something stays there / check it", "食物放在那里／检查"], ["a container has no date / ask about it", "容器没有日期／询问"], ["fruit gets soft / use it", "水果变软／食用"]]]
      ]
    }),
    makeDialogue({
      id: "b1-hike-participant-leader", level: "B1", linkedSentence: "s-b1-101",
      title: "Joining a Hike versus Leading the Group", titleZh: "参加健行与带队的差别", scene: "hiking club planning table",
      goal: "A club member and organizer separate personal ability from responsibility for a group.", goalZh: "社团成员与组织者区分个人能力和带领团队的责任。",
      roles: [["A", "A regular hiker invited to lead a weekend group", "受邀带领周末队伍的固定健行者"], ["B", "A club organizer responsible for safety", "负责安全安排的社团组织者"]],
      lines: [
        ["A", "It's one thing to join a hike; it's another to lead a group.", "参加健行是一回事，带领一群人又是另一回事。", "It's one thing to _____; it's another to _____.", "_____是一回事，_____又是另一回事。"],
        ["B", "You're right. A leader has to watch the pace and the weather.", "你说得对。带队者必须注意速度和天气。", "A leader has to watch _____ and _____.", "带队者必须注意_____和_____。"],
        ["A", "I know the trail, but I haven't managed a mixed group before.", "我熟悉步道，但以前没有带过程度不同的队伍。", "I know _____, but I haven't _____ before.", "我熟悉_____，但以前没有_____。"],
        ["B", "We can pair you with an experienced second leader.", "我们可以安排一位有经验的副领队和你搭档。", "We can pair you with _____.", "我们可以安排_____和你搭档。"],
        ["A", "That would make me more comfortable.", "那会让我安心一些。"],
        ["B", "You would guide the front, and the second leader would stay at the back.", "你负责带前方，副领队留在队伍后方。"],
        ["A", "Could we choose a shorter route for the first time?", "第一次可以选择短一点的路线吗？", "Could we choose _____ for the first time?", "第一次可以选择_____吗？"],
        ["B", "Yes. We can use the lake loop and set two rest points.", "可以。我们走湖边环线，并设置两个休息点。"],
        ["A", "With that plan, I'm willing to try.", "有这样的安排，我愿意试试看。"],
        ["B", "Great. We'll review the route together on Friday.", "很好。星期五我们一起确认路线。"]
      ],
      groups: [
        ["Two levels of responsibility", [["join a hike / lead a group", "参加健行／带领队伍"], ["know the trail / manage the pace", "熟悉步道／控制速度"], ["help one person / guide everyone", "帮助一个人／带领所有人"]]],
        ["Leader checks", [["the pace / the weather", "速度／天气"], ["the head count / the route", "人数／路线"], ["rest stops / water", "休息点／饮水"]]],
        ["Experience", [["the trail / managed a mixed group", "步道／带过不同程度的队伍"], ["the route / led beginners", "路线／带过新手"], ["the area / handled an emergency", "地区／处理过紧急状况"]]],
        ["Support person", [["an experienced second leader", "有经验的副领队"], ["a first-aid volunteer", "急救志愿者"], ["someone who knows the route", "熟悉路线的人"]]],
        ["Safer first option", [["a shorter route", "较短路线"], ["an easier trail", "较简单步道"], ["a smaller group", "较小队伍"]]]
      ]
    }),
    makeDialogue({
      id: "b1-internet-interview-backup", level: "B1", linkedSentence: "s-b1-102",
      title: "Preparing a Backup for an Online Interview", titleZh: "为线上面试准备备用方案", scene: "shared apartment before an interview",
      goal: "Two roommates respond to an unstable internet connection before an important call.", goalZh: "两位室友在重要通话前处理不稳定的网络，并准备备用方案。",
      roles: [["A", "A job seeker with an online interview", "即将参加线上面试的求职者"], ["B", "A roommate helping test backup options", "协助测试备用方案的室友"]],
      lines: [
        ["A", "The internet has disconnected twice this morning.", "今天早上网络已经断线两次了。", "The internet has disconnected _____ this morning.", "今天早上网络已经断线_____了。"],
        ["B", "If we can't stabilize it, we may have to move the interview.", "如果我们无法让网络稳定，可能就得更换面试地点。", "If we can't _____, we may have to _____.", "如果我们无法_____，可能就得_____。"],
        ["A", "The interview starts in ninety minutes.", "面试九十分钟后开始。", "The interview starts in _____.", "面试_____后开始。"],
        ["B", "Let's test your phone hotspot and the study room downstairs.", "我们来测试手机热点和楼下的自习室。", "Let's test _____ and _____.", "我们来测试_____和_____。"],
        ["A", "The hotspot works, but the signal is weaker by my desk.", "热点可以用，但书桌旁的信号比较弱。"],
        ["B", "Then place the phone near the window and connect again.", "那就把手机放到窗边，再重新连接。"],
        ["A", "Could you join a short test call with me?", "你可以和我进行一通简短的测试通话吗？", "Could you join _____ with me?", "你可以和我进行_____吗？"],
        ["B", "Sure. We should also keep the study room as a backup.", "可以。我们也应该保留自习室作为备用地点。"],
        ["A", "I'll pack my laptop and charger in case I need to move.", "我会把笔记本电脑和充电器收好，以防需要换地方。"],
        ["B", "Good. You won't have to make a rushed decision later.", "很好。之后你就不用匆忙做决定。"]
      ],
      groups: [
        ["Frequency", [["twice", "两次"], ["three times", "三次"], ["every hour", "每小时"]]],
        ["Problem and backup", [["stabilize it / move the interview", "让网络稳定／更换面试地点"], ["restore the router / use the study room", "恢复路由器／使用自习室"], ["improve the signal / use a hotspot", "改善信号／使用热点"]]],
        ["Time remaining", [["ninety minutes", "九十分钟"], ["one hour", "一小时"], ["forty-five minutes", "四十五分钟"]]],
        ["Options to test", [["your phone hotspot / the study room", "手机热点／自习室"], ["the new router / a cable", "新路由器／网线"], ["the window desk / the lobby", "窗边书桌／大厅"]]],
        ["Test", [["a short test call", "简短测试通话"], ["a video call", "视讯通话"], ["an audio check", "声音测试"]]]
      ]
    })
  ];
  const makeTranslation = data => ({
    id: data.id,
    level: data.level,
    title: data.title,
    titleZh: data.titleZh,
    topic: data.topic,
    goal: data.goal,
    goalZh: data.goalZh,
    zhLines: data.zhLines,
    enLines: data.enLines,
    alternatives: [],
    keyPhrases: [],
    publishedOn,
    hintType: "vocabulary",
    patternLinks: [{
      line: data.patternLine,
      sentenceId: data.linkedSentence,
      toEnglishHint: data.toEnglishHint,
      toChineseHint: data.toChineseHint
    }],
    linkedSentence: data.linkedSentence,
    lineHints: data.vocab.map(([zh, en], index) => ({
      line: index + 1,
      toEnglishHint: `${zh} ${en}`,
      toChineseHint: `Key words: ${en}`,
      toChineseVocab: [{ zh, en }]
    }))
  });

  const newTranslations = [
    makeTranslation({
      id: "tr-a1-stove-timer", level: "A1", linkedSentence: "s-a1-99", patternLine: 4,
      title: "Learning to Set a Stove Timer", titleZh: "学习设定炉灶计时器", topic: "kitchen timer",
      goal: "Learn one unfamiliar kitchen control before cooking alone.", goalZh: "独自做饭前，先学会一个不熟悉的厨房控制功能。",
      zhLines: ["今晚我在煮蔬菜汤。", "汤还要煮二十分钟。", "我以前没用过炉灶上的计时器。", "我问室友：‘你可以示范怎么设定这个计时器吗？’", "她先按了一下时钟按钮。", "然后，她用加号按钮增加时间。", "屏幕显示二十分钟。", "时间到了以后，计时器发出声音。", "我关掉炉火，并搅拌了汤。", "下次我就可以自己设定。"],
      enLines: ["I was making vegetable soup tonight.", "The soup needed twenty more minutes.", "I had never used the timer on the stove before.", "I asked my roommate, 'Could you show me how to set this timer?'", "She pressed the clock button first.", "Then she used the plus button to add time.", "The screen showed twenty minutes.", "The timer made a sound when the time was up.", "I turned off the heat and stirred the soup.", "Next time, I can set it by myself."],
      toEnglishHint: "Could you show me how to + action?", toChineseHint: "你可以示范怎么……吗？",
      vocab: [["蔬菜汤", "vegetable soup"], ["二十分钟", "twenty minutes"], ["计时器", "timer"], ["示范", "show me how to"], ["时钟按钮", "clock button"], ["加号按钮", "plus button"], ["屏幕", "screen"], ["发出声音", "make a sound"], ["关掉炉火", "turn off the heat"], ["自己", "by myself"]]
    }),
    makeTranslation({
      id: "tr-a1-phone-in-laundry", level: "A1", linkedSentence: "s-a1-100", patternLine: 3,
      title: "Finding a Phone before Leaving Home", titleZh: "出门前找到手机", topic: "missing phone",
      goal: "Describe a missing item and search one place at a time.", goalZh: "说明物品不见，并依序检查可能的位置。",
      zhLines: ["我准备出门买东西。", "钥匙和钱包都在我的包里。", "我说：‘可是我到处都找不到手机。’", "我先检查了床和书桌。", "手机不在那里。", "接着，我听见洗衣篮附近有震动声。", "手机在一条毛巾下面。", "我早上收衣服时把它放在那里。", "电量只剩百分之十。", "我带上行动电源以后才出门。"],
      enLines: ["I was getting ready to go shopping.", "My keys and wallet were already in my bag.", "I said, 'However, I can't find my phone anywhere.'", "I checked the bed and the desk first.", "The phone was not there.", "Then I heard a vibration near the laundry basket.", "The phone was under a towel.", "I had put it there while folding clothes that morning.", "The battery was only at ten percent.", "I took a power bank before leaving."],
      toEnglishHint: "I can't find + item + anywhere.", toChineseHint: "我到处都找不到……。",
      vocab: [["准备出门", "get ready to leave"], ["钱包", "wallet"], ["到处都找不到", "can't find anywhere"], ["检查", "check"], ["在那里", "there"], ["震动声", "vibration"], ["毛巾下面", "under a towel"], ["收衣服", "fold clothes"], ["电量", "battery level"], ["行动电源", "power bank"]]
    }),
    makeTranslation({
      id: "tr-a1-extra-cup-picnic", level: "A1", linkedSentence: "s-a1-101", patternLine: 5,
      title: "Getting an Extra Cup at a Picnic", titleZh: "野餐时多拿一个杯子", topic: "picnic supplies",
      goal: "Ask for one simple extra item and solve a small problem.", goalZh: "请求一个额外用品，解决简单的小问题。",
      zhLines: ["星期日下午，我们在河边野餐。", "朋友带了果汁和纸杯。", "一阵风把我的杯子吹到地上。", "杯口沾到了沙子。", "我问：‘我可以再拿一个杯子吗？’", "朋友从袋子里拿了一个新的给我。", "我把旧杯子放进垃圾袋。", "这次我用水瓶压住新杯子。", "风还是很大。", "不过，我们可以安心继续吃东西。"],
      enLines: ["On Sunday afternoon, we had a picnic by the river.", "A friend brought juice and paper cups.", "A gust of wind knocked my cup onto the ground.", "Sand got around the rim.", "I asked, 'Could I get another cup?'", "My friend took a new one from the bag for me.", "I put the old cup in the trash bag.", "This time, I used my water bottle to hold the new cup down.", "The wind was still strong.", "However, we could continue eating without worrying."],
      toEnglishHint: "Could I get another + item?", toChineseHint: "我可以再拿一个……吗？",
      vocab: [["河边", "by the river"], ["纸杯", "paper cup"], ["一阵风", "a gust of wind"], ["杯口", "rim"], ["再拿一个", "get another one"], ["从袋子里", "from the bag"], ["垃圾袋", "trash bag"], ["压住", "hold down"], ["风很大", "the wind is strong"], ["安心继续", "continue without worrying"]]
    }),
    makeTranslation({
      id: "tr-a1-carry-plant-pot", level: "A1", linkedSentence: "s-a1-102", patternLine: 4,
      title: "Moving a Plant Pot to the Balcony", titleZh: "把花盆搬到阳台", topic: "moving a plant",
      goal: "Ask for help carrying something that is awkward and heavy.", goalZh: "请别人协助搬运又重又不好拿的物品。",
      zhLines: ["客厅里的植物需要更多阳光。", "我想把它移到阳台。", "花盆不大，但是装满了湿土。", "我问室友：‘你可以帮我搬这个花盆吗？’", "我们先移开了门边的小地毯。", "他扶住花盆底部。", "我抓住两边的把手。", "我们慢慢穿过阳台门。", "花盆放在一个有早晨阳光的位置。", "搬完以后，我们把地板擦干净。"],
      enLines: ["The plant in the living room needed more sunlight.", "I wanted to move it to the balcony.", "The pot was not large, but it was full of wet soil.", "I asked my roommate, 'Can you help me carry this plant pot?'", "We moved the small rug away from the doorway first.", "He supported the bottom of the pot.", "I held the handles on both sides.", "We moved slowly through the balcony door.", "We placed the pot where it could get morning sun.", "Afterward, we wiped the floor clean."],
      toEnglishHint: "Can you help me carry + item?", toChineseHint: "你可以帮我搬……吗？",
      vocab: [["更多阳光", "more sunlight"], ["阳台", "balcony"], ["湿土", "wet soil"], ["帮忙搬", "help carry"], ["门边", "doorway"], ["扶住底部", "support the bottom"], ["把手", "handle"], ["慢慢穿过", "move slowly through"], ["早晨阳光", "morning sun"], ["擦干净", "wipe clean"]]
    }),
    makeTranslation({
      id: "tr-a2-raincoat-before-walk", level: "A2", linkedSentence: "s-a2-99", patternLine: 2,
      title: "Drying a Raincoat before an Evening Walk", titleZh: "傍晚散步前晾干雨衣", topic: "wet raincoat",
      goal: "Plan one household task around a clear deadline.", goalZh: "按照明确时间安排一项家务。",
      zhLines: ["早上的大雨把我的雨衣弄得很湿。", "我原本希望在傍晚散步前把它洗好。", "不过，厚袖口需要很久才会干。", "我先用毛巾压掉多余的水。", "然后，我把雨衣挂在阳台门旁。", "那里有风，但是没有直射阳光。", "下午，我把袖子翻到外面。", "傍晚时，雨衣大部分已经干了。", "我在口袋里放了一把小雨伞。", "这样即使再下雨，我也有备用办法。"],
      enLines: ["The heavy rain in the morning left my raincoat very wet.", "I was hoping to wash it before my evening walk.", "However, the thick cuffs needed a long time to dry.", "I pressed out the extra water with a towel first.", "Then I hung the raincoat beside the balcony door.", "There was a breeze there but no direct sunlight.", "In the afternoon, I turned the sleeves outward.", "By evening, most of the raincoat was dry.", "I put a small umbrella in the pocket.", "This gave me a backup if it rained again."],
      toEnglishHint: "I was hoping to + action + before + time/event.", toChineseHint: "我原本希望在……之前……。",
      vocab: [["大雨", "heavy rain"], ["傍晚散步", "evening walk"], ["厚袖口", "thick cuffs"], ["多余的水", "extra water"], ["挂在", "hang beside"], ["直射阳光", "direct sunlight"], ["把袖子翻到外面", "turn the sleeves outward"], ["大部分", "most of"], ["口袋", "pocket"], ["备用办法", "backup"]]
    }),
    makeTranslation({
      id: "tr-a2-bike-light-cause", level: "A2", linkedSentence: "s-a2-100", patternLine: 3,
      title: "Finding Out Why a Bike Light Keeps Turning Off", titleZh: "找出自行车灯一直熄灭的原因", topic: "bike light",
      goal: "Describe a recurring problem and test simple causes one by one.", goalZh: "描述反复发生的问题，并逐一测试简单原因。",
      zhLines: ["我的自行车前灯骑几分钟后就会熄灭。", "我已经替它换过新电池。", "我请朋友帮我弄清楚为什么灯还是一直熄灭。", "他先检查电池盖。", "盖子没有完全扣紧。", "骑过不平的路面时，电池会轻微移动。", "我们清洁了接触点，并重新盖紧。", "接着，我在街区骑了十分钟。", "这次灯没有再熄灭。", "我还在车包里放了一盏小备用灯。"],
      enLines: ["My front bike light kept turning off after a few minutes of riding.", "I had already replaced the batteries.", "I asked a friend, 'Could you help me figure out why the light keeps turning off?'", "He checked the battery cover first.", "The cover had not clicked fully into place.", "The batteries moved slightly on rough roads.", "We cleaned the contact points and closed the cover firmly.", "Then I rode around the block for ten minutes.", "The light did not turn off again.", "I also put a small backup light in my bike bag."],
      toEnglishHint: "Could you help me figure out why + problem?", toChineseHint: "你可以帮我弄清楚为什么……吗？",
      vocab: [["前灯", "front light"], ["换电池", "replace the batteries"], ["弄清楚原因", "figure out why"], ["电池盖", "battery cover"], ["扣紧", "click into place"], ["不平的路面", "rough roads"], ["接触点", "contact points"], ["绕街区", "around the block"], ["不再熄灭", "not turn off again"], ["备用灯", "backup light"]]
    }),
    makeTranslation({
      id: "tr-a2-guest-room-together", level: "A2", linkedSentence: "s-a2-101", patternLine: 3,
      title: "Preparing a Guest Room Together", titleZh: "一起整理客房", topic: "guest room",
      goal: "Combine two people's efforts to finish a room efficiently.", goalZh: "结合两个人的力量，有效率地整理房间。",
      zhLines: ["周末有亲戚要来我们家住。", "客房里放着几个还没整理的箱子。", "我问伴侣：‘一起整理这个房间会不会比较容易？’", "他先把箱子移到储藏室。", "我换上干净的床单。", "接着，我们一起把书桌搬到窗边。", "他擦了镜子和床头灯。", "我在椅子上放了两条干净毛巾。", "不到一个小时，房间就整理好了。", "我们还留了一张便条，写上无线网络密码。"],
      enLines: ["Relatives were coming to stay with us for the weekend.", "Several unpacked boxes were still in the guest room.", "I asked my partner, 'Would it be easier to prepare the room together?'", "He moved the boxes to the storage room first.", "I put clean sheets on the bed.", "Next, we moved the desk beside the window together.", "He cleaned the mirror and the bedside lamp.", "I placed two clean towels on the chair.", "The room was ready in less than an hour.", "We also left a note with the Wi-Fi password."],
      toEnglishHint: "Would it be easier to + action + together?", toChineseHint: "一起……会不会比较容易？",
      vocab: [["亲戚", "relatives"], ["还没整理的箱子", "unpacked boxes"], ["一起整理", "prepare together"], ["储藏室", "storage room"], ["干净床单", "clean sheets"], ["搬书桌", "move the desk"], ["床头灯", "bedside lamp"], ["干净毛巾", "clean towels"], ["不到一小时", "less than an hour"], ["无线网络密码", "Wi-Fi password"]]
    }),
    makeTranslation({
      id: "tr-a2-yard-sale-limit", level: "A2", linkedSentence: "s-a2-102", patternLine: 4,
      title: "Helping at a Yard Sale with an Early Finish", titleZh: "在能提早离开的条件下帮忙顾摊", topic: "yard sale",
      goal: "Agree to help while setting one clear and reasonable limit.", goalZh: "答应帮忙，同时提出一个清楚合理的限制。",
      zhLines: ["邻居星期六要办庭院旧货销售。", "她需要有人在早上帮忙摆桌子。", "我下午已经有家庭活动。", "我说：‘只要我能在中午离开，我就可以帮忙。’", "她同意，并请我七点半到。", "我们先把价格标签贴在较大的物品上。", "接着，我们按照价格把书分成几箱。", "九点以后，来的人渐渐变多。", "中午以前，大部分家具都卖掉了。", "我收好空箱子后准时离开。"],
      enLines: ["My neighbor was holding a yard sale on Saturday.", "She needed someone to help set up tables in the morning.", "I already had a family activity in the afternoon.", "I said, 'I can help, as long as I can leave at noon.'", "She agreed and asked me to arrive at seven thirty.", "We put price labels on the larger items first.", "Next, we sorted the books into boxes by price.", "More people began arriving after nine.", "Most of the furniture was sold before noon.", "I packed the empty boxes and left on time."],
      toEnglishHint: "I can + action, as long as + condition.", toChineseHint: "只要……，我就可以……。",
      vocab: [["庭院旧货销售", "yard sale"], ["摆桌子", "set up tables"], ["家庭活动", "family activity"], ["中午离开", "leave at noon"], ["七点半", "seven thirty"], ["价格标签", "price labels"], ["按照价格", "by price"], ["渐渐变多", "begin arriving"], ["家具", "furniture"], ["准时离开", "leave on time"]]
    }),
    makeTranslation({
      id: "tr-b1-lend-car-condition", level: "B1", linkedSentence: "s-b1-99", patternLine: 4,
      title: "Lending a Car with a Clear Condition", titleZh: "在明确条件下把车借给家人", topic: "lending a car",
      goal: "Offer meaningful help while protecting a shared resource.", goalZh: "提供实际帮助，同时保护共用的重要物品。",
      zhLines: ["我弟弟的车要在维修厂待两天。", "他星期一需要开车去郊区工作。", "我的车那天原本不会使用。", "我说：‘我愿意把车借给你，但我需要你加满油作为交换。’", "他觉得这个条件很公平。", "我们一起检查了车身现有的刮痕。", "我把保险资料和备用钥匙交给他。", "他答应不会让其他人驾驶。", "星期一晚上，他准时把车开回来。", "油箱是满的，车里也很整洁。"],
      enLines: ["My brother's car needed to stay at the repair shop for two days.", "He needed to drive to a job outside the city on Monday.", "I was not planning to use my car that day.", "I said, 'I'm willing to lend you the car, but I need a full tank in return.'", "He thought that condition was fair.", "We checked the existing scratches on the car together.", "I gave him the insurance information and the spare key.", "He agreed not to let anyone else drive it.", "He returned the car on time on Monday evening.", "The tank was full, and the inside was clean."],
      toEnglishHint: "I'm willing to + action, but I need + condition + in return.", toChineseHint: "我愿意……，但我需要……作为交换。",
      vocab: [["维修厂", "repair shop"], ["郊区", "outside the city"], ["原本不会使用", "was not planning to use"], ["加满油", "a full tank"], ["公平条件", "fair condition"], ["现有刮痕", "existing scratches"], ["保险资料", "insurance information"], ["其他人驾驶", "let anyone else drive"], ["准时归还", "return on time"], ["车内整洁", "inside was clean"]]
    }),
    makeTranslation({
      id: "tr-b1-bike-chain-repair", level: "B1", linkedSentence: "s-b1-100", patternLine: 3,
      title: "Fixing a Bicycle Chain That Keeps Slipping", titleZh: "处理不断滑落的自行车链条", topic: "bike maintenance",
      goal: "Choose a lasting repair instead of repeatedly accepting the same interruption.", goalZh: "选择长久的维修方式，而不是反复忍受同一个问题。",
      zhLines: ["最近，我的自行车链条骑到上坡时常常滑落。", "我每次都会停下来把链条重新装好。", "我宁愿想办法把问题修好，也不想每骑几条街就一直停下来。", "维修人员先检查了链条的长度。", "旧链条已经拉长，齿轮也有磨损。", "只换链条会暂时改善问题。", "不过，磨损的齿轮可能很快损坏新链条。", "我决定同时更换链条和后齿轮。", "维修后，我在附近的坡道试骑。", "换挡顺畅，而且链条没有再滑落。"],
      enLines: ["Recently, my bicycle chain often slipped when I rode uphill.", "Each time, I stopped and put the chain back on.", "I'd rather find a way to fix the problem than keep stopping every few blocks.", "The mechanic checked the length of the chain first.", "The old chain had stretched, and the gears were also worn.", "Replacing only the chain would improve the problem for a while.", "However, the worn gears could quickly damage the new chain.", "I decided to replace both the chain and the rear gears.", "After the repair, I tested the bike on a nearby hill.", "The gears changed smoothly, and the chain did not slip again."],
      toEnglishHint: "I'd rather find a way to + solve + than keep + repeated problem.", toChineseHint: "我宁愿想办法……，也不想一直……。",
      vocab: [["链条滑落", "chain slip"], ["重新装好", "put back on"], ["每几条街停下", "stop every few blocks"], ["检查长度", "check the length"], ["齿轮磨损", "gears were worn"], ["暂时改善", "improve for a while"], ["损坏新链条", "damage the new chain"], ["后齿轮", "rear gears"], ["试骑", "test the bike"], ["换挡顺畅", "change smoothly"]]
    }),
    makeTranslation({
      id: "tr-b1-recipe-for-guests", level: "B1", linkedSentence: "s-b1-101", patternLine: 3,
      title: "Testing a Recipe before Cooking for Guests", titleZh: "招待客人前先试做食谱", topic: "cooking for guests",
      goal: "Recognize the difference between a casual trial and responsibility for a group meal.", goalZh: "分清随手试做和负责多人餐点之间的差异。",
      zhLines: ["我在网上看到一道看起来很简单的烤鱼食谱。", "周末有八位朋友要来吃晚餐。", "试做一道食谱是一回事，煮给八个人吃又是另一回事。", "我先把份量缩小，在星期三试做一次。", "味道不错，但烤盘里出现很多水。", "我发现鱼在烤以前必须完全擦干。", "第二次测试时，表面变得更酥脆。", "我也记录了实际需要的烹调时间。", "星期六，我可以提早准备配菜。", "经过测试以后，我更有把握按时完成晚餐。"],
      enLines: ["I found a baked-fish recipe online that looked simple.", "Eight friends were coming for dinner on the weekend.", "It's one thing to test a recipe; it's another to cook it for eight people.", "I reduced the amount and tried it once on Wednesday.", "The flavor was good, but a lot of water collected in the baking tray.", "I learned that the fish needed to be completely dry before baking.", "During the second test, the surface became much crisper.", "I also recorded the actual cooking time.", "On Saturday, I could prepare the side dishes early.", "After testing the recipe, I felt more confident about finishing dinner on time."],
      toEnglishHint: "It's one thing to + simple action; it's another to + larger responsibility.", toChineseHint: "……是一回事，……又是另一回事。",
      vocab: [["烤鱼食谱", "baked-fish recipe"], ["八位朋友", "eight friends"], ["试做食谱", "test a recipe"], ["缩小份量", "reduce the amount"], ["烤盘", "baking tray"], ["完全擦干", "completely dry"], ["酥脆", "crisp"], ["实际时间", "actual time"], ["配菜", "side dishes"], ["更有把握", "feel more confident"]]
    }),
    makeTranslation({
      id: "tr-b1-childcare-closure-backup", level: "B1", linkedSentence: "s-b1-102", patternLine: 5,
      title: "Making a Backup Plan for a Childcare Closure", titleZh: "托儿服务临时关闭时准备备用方案", topic: "childcare backup",
      goal: "Respond to a sudden closure with a realistic sequence of backup options.", goalZh: "面对临时关闭，以实际顺序安排备用选择。",
      zhLines: ["星期一早上，托儿中心因为水管问题临时关闭。", "维修人员无法确定下午以前能不能恢复开放。", "我和伴侣都已经安排了工作会议。", "我们先问住在附近的家人能否帮忙。", "如果无法安排接送，我们可能就得轮流提早下班。", "我的姐姐可以照顾孩子到中午。", "伴侣把下午的会议改成线上进行。", "我则取消了一个不紧急的现场拜访。", "我们也把一位合格临时保母的号码存进手机。", "下次再遇到临时关闭时，我们会有更完整的备用计划。"],
      enLines: ["On Monday morning, the childcare center closed because of a plumbing problem.", "The repair team could not say whether it would reopen before the afternoon.", "My partner and I both had work meetings scheduled.", "We first asked whether a relative who lived nearby could help.", "If we can't arrange pickup, we may have to take turns leaving work early.", "My sister could care for our child until noon.", "My partner moved the afternoon meeting online.", "I canceled one in-person visit that was not urgent.", "We also saved the number of a qualified backup caregiver on our phones.", "The next time there is a sudden closure, we will have a stronger backup plan."],
      toEnglishHint: "If we can't + preferred plan, we may have to + backup action.", toChineseHint: "如果我们无法……，可能就得……。",
      vocab: [["临时关闭", "close unexpectedly"], ["恢复开放", "reopen"], ["工作会议", "work meetings"], ["住在附近的家人", "relative nearby"], ["安排接送", "arrange pickup"], ["照顾到中午", "care until noon"], ["改成线上", "move online"], ["现场拜访", "in-person visit"], ["临时保母", "backup caregiver"], ["备用计划", "backup plan"]]
    })
  ];

  catalog.dialogues.push(...newDialogues);
  catalog.translations.push(...newTranslations);
  catalog.version = "1019_today_1";
  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const translationPath = catalog.paths.find(path => path.id === "translation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (translationPath) translationPath.meta = `${catalog.translations.length} practice texts · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1019_today_1";
})();
