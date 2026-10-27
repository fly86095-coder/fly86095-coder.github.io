(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1024_today_1") {
    throw new Error("1027 practice patch requires PRACTICE_CATALOG 1024_today_1");
  }

  const publishedOn = "2026-10-27";

  const newSentences = [
    {
      id: "s-a1-111", level: "A1", title: "Saying You Left Something in the Car", titleZh: "说明把东西留在车里",
      scene: "forgotten item in the car", pattern: "I left _____ in the car.", zh: "我把_____留在车里了。",
      hints: [{ en: "my charger", zh: "我的充电器" }, { en: "my jacket", zh: "我的外套" }, { en: "the tickets", zh: "车票" }],
      example: { en: "I left my charger in the car.", zh: "我把充电器留在车里了。" }, publishedOn
    },
    {
      id: "s-a1-112", level: "A1", title: "Noticing Something Is Nearly Empty", titleZh: "发现某样东西快用完了",
      scene: "nearly empty supplies", pattern: "The _____ is almost empty.", zh: "_____快用完了。",
      hints: [{ en: "water jug", zh: "饮水桶" }, { en: "soap bottle", zh: "洗手液瓶" }, { en: "paper tray", zh: "纸盘" }],
      example: { en: "The water jug is almost empty.", zh: "饮水桶快空了。" }, publishedOn
    },
    {
      id: "s-a1-113", level: "A1", title: "Asking Someone to Save You a Place", titleZh: "请别人替自己留位置",
      scene: "saving a place", pattern: "Please save _____ for me.", zh: "请帮我留_____。",
      hints: [{ en: "a seat", zh: "一个座位" }, { en: "a place in line", zh: "排队的位置" }, { en: "one piece", zh: "一份" }],
      example: { en: "Please save a seat for me.", zh: "请帮我留一个座位。" }, publishedOn
    },
    {
      id: "s-a1-114", level: "A1", title: "Saying a Device Will Not Start", titleZh: "说明设备无法启动",
      scene: "device not starting", pattern: "The _____ won't turn on.", zh: "_____打不开。",
      hints: [{ en: "screen", zh: "屏幕" }, { en: "lamp", zh: "灯" }, { en: "machine", zh: "机器" }],
      example: { en: "The screen won't turn on.", zh: "屏幕打不开。" }, publishedOn
    },
    {
      id: "s-a2-111", level: "A2", title: "Explaining What You Chose in the End", titleZh: "说明最后选择了什么",
      scene: "a change of transportation", pattern: "I ended up taking _____.", zh: "我最后搭了_____。",
      hints: [{ en: "the local bus", zh: "普通公车" }, { en: "a taxi", zh: "计程车" }, { en: "the later train", zh: "较晚的一班火车" }],
      example: { en: "I ended up taking the local bus.", zh: "我最后搭了普通公车。" }, publishedOn
    },
    {
      id: "s-a2-112", level: "A2", title: "Saying You Used Up Something", titleZh: "说明某样东西已经用完",
      scene: "running out of a daily necessity", pattern: "I ran out of _____ this morning.", zh: "我今天早上把_____用完了。",
      hints: [{ en: "dog food", zh: "狗粮" }, { en: "coffee", zh: "咖啡" }, { en: "clean socks", zh: "干净袜子" }],
      example: { en: "I ran out of dog food this morning.", zh: "我今天早上把狗粮用完了。" }, publishedOn
    },
    {
      id: "s-a2-113", level: "A2", title: "Saying You Finally Made Time for Something", titleZh: "说明终于抽出时间做某事",
      scene: "making time for a personal task", pattern: "I finally found time to _____.", zh: "我终于抽出时间_____了。",
      hints: [{ en: "get a haircut", zh: "去剪头发" }, { en: "clean the balcony", zh: "打扫阳台" }, { en: "call my aunt", zh: "打电话给阿姨" }],
      example: { en: "I finally found time to get a haircut.", zh: "我终于抽出时间去剪头发了。" }, publishedOn
    },
    {
      id: "s-a2-114", level: "A2", title: "Talking about a Recent Habit", titleZh: "谈论最近养成的习惯",
      scene: "a useful recent habit", pattern: "I've been using _____ lately.", zh: "我最近一直在用_____。",
      hints: [{ en: "a paper planner", zh: "纸本计划本" }, { en: "a sleep mask", zh: "眼罩" }, { en: "a reusable bottle", zh: "环保水瓶" }],
      example: { en: "I've been using a paper planner lately.", zh: "我最近一直在用纸本计划本。" }, publishedOn
    },
    {
      id: "s-b1-111", level: "B1", title: "Sharing Something That Has Helped", titleZh: "分享对自己有帮助的方法",
      scene: "a helpful everyday routine", pattern: "One thing that has helped me is _____.", zh: "对我有帮助的一件事是_____。",
      hints: [{ en: "packing my bag the night before", zh: "前一晚先整理好袋子" }, { en: "writing a short list", zh: "写一张简短清单" }, { en: "turning off notifications", zh: "关掉通知" }],
      example: { en: "One thing that has helped me is packing my bag the night before.", zh: "对我有帮助的一件事，是前一晚先整理好袋子。" }, publishedOn
    },
    {
      id: "s-b1-112", level: "B1", title: "Describing an Adjustment That Took Time", titleZh: "说明自己花了一段时间才适应",
      scene: "adjusting to something unfamiliar", pattern: "It took me a while to get used to _____.", zh: "我花了一段时间才习惯_____。",
      hints: [{ en: "the induction stove", zh: "电磁炉" }, { en: "the early shift", zh: "早班" }, { en: "wearing new glasses", zh: "戴新眼镜" }],
      example: { en: "It took me a while to get used to the induction stove.", zh: "我花了一段时间才习惯这台电磁炉。" }, publishedOn
    },
    {
      id: "s-b1-113", level: "B1", title: "Explaining How a Problem Could Have Been Avoided", titleZh: "说明原本可以如何避免问题",
      scene: "preventing an avoidable problem", pattern: "I could have avoided _____ by _____.", zh: "如果我_____，本来就可以避免_____。",
      hints: [{ en: "missing the pickup / checking the schedule", zh: "错过清运时间／查看时间表" }, { en: "the extra fee / paying online", zh: "额外费用／在线付款" }, { en: "the long wait / leaving earlier", zh: "长时间等候／早点出发" }],
      example: { en: "I could have avoided missing the pickup by checking the schedule.", zh: "如果我查看时间表，本来就可以避免错过清运时间。" }, publishedOn
    },
    {
      id: "s-b1-114", level: "B1", title: "Describing the Most Unexpected Part", titleZh: "说明最出乎意料的部分",
      scene: "an unexpected part of an experience", pattern: "What surprised me most was _____.", zh: "最让我意外的是_____。",
      hints: [{ en: "how much walking the job involves", zh: "这份工作需要走那么多路" }, { en: "how quiet the room was", zh: "房间那么安静" }, { en: "how quickly everyone helped", zh: "大家帮忙的速度那么快" }],
      example: { en: "What surprised me most was how much walking the job involves.", zh: "最让我意外的是，这份工作需要走那么多路。" }, publishedOn
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
      id: "a1-coach-terminal-charger", level: "A1", linkedSentence: "s-a1-111",
      title: "Going Back for a Charger before Boarding a Coach", titleZh: "搭长途客运前回车上拿充电器", scene: "intercity coach terminal",
      goal: "Two travel companions handle a forgotten charger without missing their coach.", goalZh: "两位旅伴在不耽误搭车的情况下，处理忘在车里的充电器。",
      roles: [["A", "A traveler who left a charger in the parked car", "把充电器忘在停车场车内的旅客"], ["B", "A travel companion waiting near the boarding gate", "在乘车门附近等候的旅伴"]],
      lines: [
        ["A", "I left my charger in the car.", "我把充电器留在车里了。", "I left _____ in the car.", "我把_____留在车里了。"],
        ["B", "We still have fifteen minutes before boarding.", "距离上车还有十五分钟。", "We still have _____ before boarding.", "距离上车还有_____。"],
        ["A", "Can you hold my ticket and bag?", "你可以帮我拿着车票和袋子吗？"],
        ["B", "Sure. Which parking row is the car in?", "可以。车停在哪一排？", "Which _____ is the car in?", "车停在哪_____？"],
        ["A", "It's in row C, beside the exit sign.", "在C排，出口标志旁边。", "It's in _____, beside the exit sign.", "在_____，出口标志旁边。"],
        ["B", "Take your phone so I can call you.", "带着手机，这样我才能打给你。"],
        ["A", "Good idea. I'll be back in five minutes.", "好主意。我五分钟后回来。"],
        ["B", "I'll wait by gate six.", "我会在六号乘车门旁边等。", "I'll wait by _____.", "我会在_____旁边等。"],
        ["A", "If the line starts moving, send me a message.", "如果队伍开始移动，就传讯息给我。"],
        ["B", "I will. Don't run across the parking area.", "好。不要在停车区里奔跑。"]
      ],
      groups: [
        ["Forgotten item", [["my charger", "我的充电器"], ["my jacket", "我的外套"], ["the tickets", "车票"]]],
        ["Time left", [["fifteen minutes", "十五分钟"], ["ten minutes", "十分钟"], ["a little time", "一点时间"]]],
        ["Parking place", [["parking row", "停车排"], ["parking level", "停车楼层"], ["section", "区域"]]],
        ["Row", [["row C", "C排"], ["row B", "B排"], ["the second row", "第二排"]]],
        ["Waiting point", [["gate six", "六号乘车门"], ["the ticket counter", "售票柜台"], ["the main door", "大门"]]]
      ]
    }),
    makeDialogue({
      id: "a1-office-water-jug", level: "A1", linkedSentence: "s-a1-112",
      title: "Replacing the Water Jug in a Break Room", titleZh: "更换休息室里的饮水桶", scene: "office break room",
      goal: "Two coworkers replace a heavy water jug safely.", goalZh: "两位同事一起安全更换较重的饮水桶。",
      roles: [["A", "A coworker who notices the water is running low", "发现饮用水快用完的同事"], ["B", "A coworker who knows where the replacement jug is", "知道备用饮水桶位置的同事"]],
      lines: [
        ["A", "The water jug is almost empty.", "饮水桶快空了。", "The _____ is almost empty.", "_____快空了。"],
        ["B", "I'll help you replace it.", "我来帮你更换。", "I'll help you _____.", "我来帮你_____。"],
        ["A", "Is the full jug under the counter?", "装满水的桶在柜台下面吗？"],
        ["B", "Yes, but it's quite heavy.", "是的，但它很重。", "Yes, but it's quite _____.", "是的，但它很_____。"],
        ["A", "Let's lift it together.", "我们一起抬吧。"],
        ["B", "First, remove the empty jug.", "先把空桶拿下来。", "First, remove _____.", "先把_____拿下来。"],
        ["A", "Should I wipe the top of the dispenser?", "我要擦一下饮水机顶部吗？"],
        ["B", "Yes, use this clean cloth.", "要，用这块干净的布。"],
        ["A", "Ready? I'll hold the bottom.", "准备好了吗？我来托住底部。", "I'll hold _____.", "我来托住_____。"],
        ["B", "Good. Set it down slowly.", "好。慢慢把它放下。"]
      ],
      groups: [
        ["Container", [["water jug", "饮水桶"], ["soap bottle", "洗手液瓶"], ["coffee pot", "咖啡壶"]]],
        ["Action", [["replace it", "更换它"], ["move it", "移动它"], ["clean it", "清洁它"]]],
        ["Weight", [["heavy", "重"], ["full", "满"], ["awkward", "不好拿"]]],
        ["Remove", [["the empty jug", "空桶"], ["the old bottle", "旧瓶子"], ["the lid", "盖子"]]],
        ["Hold", [["the bottom", "底部"], ["the handle", "把手"], ["this side", "这一边"]]]
      ]
    }),
    makeDialogue({
      id: "a1-food-hall-seat", level: "A1", linkedSentence: "s-a1-113",
      title: "Saving a Seat in a Busy Food Hall", titleZh: "在拥挤的美食街帮朋友留座", scene: "busy food hall",
      goal: "Two friends divide small tasks while keeping a table at lunchtime.", goalZh: "两位朋友在午餐尖峰时分工拿餐具并保留座位。",
      roles: [["A", "A diner getting napkins before sitting down", "准备去拿餐巾的用餐者"], ["B", "A friend keeping their table", "负责留住餐桌的朋友"]],
      lines: [
        ["A", "Please save a seat for me.", "请帮我留一个座位。", "Please save _____ for me.", "请帮我留_____。"],
        ["B", "I can keep the chair beside me.", "我可以帮你留旁边的椅子。", "I can keep _____.", "我可以帮你留_____。"],
        ["A", "I'm going to get some napkins.", "我要去拿一些餐巾。"],
        ["B", "Could you bring two forks too?", "你也可以拿两支叉子吗？", "Could you bring _____ too?", "你也可以拿_____吗？"],
        ["A", "Sure. Do you want some water?", "可以。你要喝水吗？"],
        ["B", "No, thanks. I already have tea.", "不用，谢谢。我已经有茶了。"],
        ["A", "The lunch line is getting longer.", "午餐队伍越来越长了。", "The _____ is getting longer.", "_____越来越长了。"],
        ["B", "Then get your food first.", "那你先去拿餐吧。"],
        ["A", "Okay. I'll be back soon.", "好。我很快回来。"],
        ["B", "Your seat is safe.", "你的座位会帮你留着。", "Your _____ is safe.", "你的_____会帮你留着。"]
      ],
      groups: [
        ["Save", [["a seat", "一个座位"], ["a place", "一个位置"], ["this chair", "这张椅子"]]],
        ["Keep", [["the chair beside me", "我旁边的椅子"], ["your place", "你的位置"], ["the corner seat", "角落的座位"]]],
        ["Bring", [["two forks", "两支叉子"], ["some napkins", "一些餐巾"], ["a spoon", "一支汤匙"]]],
        ["Line", [["lunch line", "午餐队伍"], ["drink line", "饮料队伍"], ["checkout line", "结账队伍"]]],
        ["Place", [["seat", "座位"], ["table", "桌子"], ["bag", "袋子"]]]
      ]
    }),
    makeDialogue({
      id: "a1-parking-machine-screen", level: "A1", linkedSentence: "s-a1-114",
      title: "Using Another Parking Payment Machine", titleZh: "改用另一台停车缴费机", scene: "parking garage payment area",
      goal: "A driver asks an attendant what to do when a payment machine is dark.", goalZh: "驾驶发现缴费机没有反应，向停车场工作人员询问替代方式。",
      roles: [["A", "A driver trying to pay for parking", "准备缴停车费的驾驶"], ["B", "A parking attendant helping with the machines", "协助操作缴费机的停车场工作人员"]],
      lines: [
        ["A", "The screen won't turn on.", "屏幕打不开。", "The _____ won't turn on.", "_____打不开。"],
        ["B", "Try pressing the green button.", "试着按绿色按钮。", "Try pressing _____.", "试着按_____。"],
        ["A", "Nothing happened.", "还是没有反应。"],
        ["B", "Is the card slot lit?", "卡片插槽有亮灯吗？", "Is _____ lit?", "_____有亮灯吗？"],
        ["A", "No, the whole machine is dark.", "没有，整台机器都是暗的。"],
        ["B", "This machine may be out of service.", "这台机器可能暂停使用了。"],
        ["A", "Can I use the machine near the elevator?", "我可以用电梯旁边那台机器吗？", "Can I use _____?", "我可以用_____吗？"],
        ["B", "Yes, that one is working.", "可以，那台可以使用。"],
        ["A", "Do I need my parking ticket?", "我需要停车票吗？"],
        ["B", "Yes, put it into the slot first.", "需要，先把它插进卡槽。", "Put it into _____ first.", "先把它插进_____。"]
      ],
      groups: [
        ["Device part", [["screen", "屏幕"], ["light", "灯"], ["reader", "读取器"]]],
        ["Button", [["the green button", "绿色按钮"], ["the start button", "启动按钮"], ["the button again", "再按一次按钮"]]],
        ["Lit part", [["the card slot", "卡片插槽"], ["the small light", "小灯"], ["the keypad", "键盘"]]],
        ["Other machine", [["the machine near the elevator", "电梯旁边的机器"], ["the machine upstairs", "楼上的机器"], ["the exit machine", "出口的机器"]]],
        ["Slot", [["the slot", "卡槽"], ["the reader", "读取器"], ["the machine", "机器"]]]
      ]
    }),
    makeDialogue({
      id: "a2-local-bus-commute", level: "A2", linkedSentence: "s-a2-111",
      title: "Taking the Local Bus after a Subway Delay", titleZh: "地铁延误后改搭普通公车", scene: "workplace lobby after the commute",
      goal: "Two coworkers compare a slower but less crowded route to work.", goalZh: "两位同事讨论一条虽然较慢、但没那么拥挤的通勤路线。",
      roles: [["A", "A commuter who changed routes this morning", "今天早上临时改路线的通勤者"], ["B", "A coworker looking for another way to work", "想找其他通勤方式的同事"]],
      lines: [
        ["A", "I ended up taking the local bus.", "我最后搭了普通公车。", "I ended up taking _____.", "我最后搭了_____。"],
        ["B", "Was the subway still delayed?", "地铁还是延误吗？", "Was _____ still delayed?", "_____还是延误吗？"],
        ["A", "Yes, and the line outside the station was long.", "是的，而且车站外面的队伍很长。"],
        ["B", "How long did the bus ride take?", "搭公车花了多久？", "How long did _____ take?", "_____花了多久？"],
        ["A", "About forty minutes, but I found a seat.", "大约四十分钟，不过我有找到座位。"],
        ["B", "Did it stop near the office?", "它有停在办公室附近吗？"],
        ["A", "It dropped me two blocks away.", "它让我在两个街区外下车。", "It dropped me _____.", "它让我在_____下车。"],
        ["B", "That doesn't sound too bad.", "听起来还不算太糟。"],
        ["A", "It was slower, but much less crowded.", "虽然比较慢，但没那么拥挤。"],
        ["B", "I might try that route tomorrow.", "我明天可能也会试试那条路线。", "I might try _____ tomorrow.", "我明天可能会试试_____。"]
      ],
      groups: [
        ["Transport", [["the local bus", "普通公车"], ["a taxi", "计程车"], ["the later train", "较晚的一班火车"]]],
        ["Delayed service", [["the subway", "地铁"], ["the train", "火车"], ["your usual bus", "你平常搭的公车"]]],
        ["Travel time", [["the bus ride", "公车车程"], ["the trip", "这段路程"], ["the new route", "新路线"]]],
        ["Drop-off", [["two blocks away", "两个街区外"], ["near the corner", "街角附近"], ["behind the office", "办公室后面"]]],
        ["Route", [["that route", "那条路线"], ["the local bus", "普通公车"], ["your shortcut", "你的捷径"]]]
      ]
    }),
    makeDialogue({
      id: "a2-dog-food-neighbor", level: "A2", linkedSentence: "s-a2-112",
      title: "Borrowing Dog Food from a Neighbor", titleZh: "向邻居借一餐狗粮", scene: "neighborhood dog-walking area",
      goal: "One dog owner solves a short-term problem with help from a neighbor.", goalZh: "一位狗主人在邻居协助下，解决临时没有狗粮的问题。",
      roles: [["A", "A dog owner who used the last food at breakfast", "早餐时把最后一点狗粮用完的狗主人"], ["B", "A neighbor who keeps extra food in the car", "车里备有额外狗粮的邻居"]],
      lines: [
        ["A", "I ran out of dog food this morning.", "我今天早上把狗粮用完了。", "I ran out of _____ this morning.", "我今天早上把_____用完了。"],
        ["B", "I have some extra food in my car.", "我车里有一些额外的狗粮。", "I have _____ in my car.", "我车里有_____。"],
        ["A", "Is it okay for small dogs?", "小型犬也可以吃吗？"],
        ["B", "Yes, I buy the same kind for mine.", "可以，我也给我的狗买同一种。"],
        ["A", "Could I borrow one meal's worth?", "我可以借一餐的份量吗？", "Could I borrow _____?", "我可以借_____吗？"],
        ["B", "Of course. It will get you through breakfast.", "当然可以。这样早餐就没问题了。"],
        ["A", "I'll replace it after work.", "我下班后会补给你。"],
        ["B", "No hurry. The pet store closes at nine.", "不急。宠物店九点关门。", "The pet store closes at _____.", "宠物店_____关门。"],
        ["A", "I'll keep an extra bag from now on.", "以后我会多备一袋。", "I'll keep _____ from now on.", "以后我会多备_____。"],
        ["B", "That's what I do too.", "我也是这么做的。"]
      ],
      groups: [
        ["Supply", [["dog food", "狗粮"], ["treats", "零食"], ["medicine", "药"]]],
        ["Extra", [["some extra food", "一些额外的狗粮"], ["a spare bag", "一袋备用品"], ["one unopened pack", "一包未开封的"]]],
        ["Amount", [["one meal's worth", "一餐的份量"], ["a small bowl", "一小碗"], ["enough for today", "今天够用的份量"]]],
        ["Closing time", [["nine", "九点"], ["eight thirty", "八点半"], ["ten", "十点"]]],
        ["Backup", [["an extra bag", "多一袋"], ["a spare can", "一罐备用罐头"], ["a small supply", "少量备用品"]]]
      ]
    }),
    makeDialogue({
      id: "a2-haircut-free-time", level: "A2", linkedSentence: "s-a2-113",
      title: "Getting a Simple Haircut after a Busy Month", titleZh: "忙了一个月后终于去简单剪发", scene: "neighborhood hair salon",
      goal: "A customer explains a practical haircut without requesting a major change.", goalZh: "顾客说明想要实用、但变化不大的发型。",
      roles: [["A", "A customer who has postponed a haircut", "把剪发延后了好一阵子的顾客"], ["B", "A stylist asking what kind of trim is needed", "询问修剪需求的发型师"]],
      lines: [
        ["A", "I finally found time to get a haircut.", "我终于抽出时间来剪头发了。", "I finally found time to _____.", "我终于抽出时间_____了。"],
        ["B", "What would you like today?", "你今天想怎么剪？", "What would you like _____?", "你_____想怎么剪？"],
        ["A", "Just trim the sides and the back.", "只要修一下两侧和后面。", "Just trim _____.", "只要修一下_____。"],
        ["B", "Would you like the same length on top?", "顶部要保留原来的长度吗？"],
        ["A", "Yes, but please take a little weight out.", "要，不过请稍微打薄一点。"],
        ["B", "Do you usually part your hair to the left?", "你通常把头发分到左边吗？", "Do you usually part your hair _____?", "你通常把头发分到_____吗？"],
        ["A", "Mostly, but I wear it forward on weekends.", "大多是，不过周末我会把头发往前梳。"],
        ["B", "I'll leave enough length for both styles.", "我会保留足够长度，让两种造型都可以。"],
        ["A", "That sounds good. I don't want a big change.", "听起来很好。我不想有太大的变化。", "I don't want _____.", "我不想有_____。"],
        ["B", "I'll show you the back with a mirror when I'm done.", "完成后我会用镜子让你看看后面。"]
      ],
      groups: [
        ["Personal task", [["get a haircut", "去剪头发"], ["trim my hair", "修剪头发"], ["visit the salon", "去发廊"]]],
        ["Time", [["today", "今天"], ["this afternoon", "今天下午"], ["before work", "上班前"]]],
        ["Trim", [["the sides and the back", "两侧和后面"], ["the ends", "发尾"], ["the front", "前面"]]],
        ["Direction", [["to the left", "到左边"], ["to the right", "到右边"], ["down the middle", "从中间分开"]]],
        ["Change", [["a big change", "很大的变化"], ["very short hair", "很短的头发"], ["a new style", "新的造型"]]]
      ]
    }),
    makeDialogue({
      id: "a2-paper-planner-habit", level: "A2", linkedSentence: "s-a2-114",
      title: "Trying a Paper Planner for Daily Tasks", titleZh: "用纸本计划本安排日常任务", scene: "café break between friends",
      goal: "Two friends compare a paper planner with phone reminders.", goalZh: "两位朋友比较纸本计划本与手机提醒的使用感受。",
      roles: [["A", "A friend testing a paper planner", "正在尝试纸本计划本的朋友"], ["B", "A friend who normally uses a phone calendar", "平常使用手机日历的朋友"]],
      lines: [
        ["A", "I've been using a paper planner lately.", "我最近一直在用纸本计划本。", "I've been using _____ lately.", "我最近一直在用_____。"],
        ["B", "Is it helping you stay organized?", "它有帮助你把事情安排好吗？", "Is it helping you _____?", "它有帮助你_____吗？"],
        ["A", "Yes. I write down three important tasks each morning.", "有。我每天早上会写下三件重要的事。", "I write down _____ each morning.", "我每天早上会写下_____。"],
        ["B", "Do you carry it everywhere?", "你到哪里都带着它吗？"],
        ["A", "I keep it in my work bag.", "我把它放在工作袋里。"],
        ["B", "I usually use my phone calendar.", "我通常用手机日历。", "I usually use _____.", "我通常用_____。"],
        ["A", "I tried that, but I kept ignoring the reminders.", "我试过，但总是忽略提醒。"],
        ["B", "Writing by hand may make plans easier to remember.", "手写也许会让计划更容易记住。"],
        ["A", "Exactly. I also leave space for quick notes.", "没错。我也会留一些空间写简短笔记。"],
        ["B", "Maybe I'll try a small planner next month.", "也许我下个月也试试小本的计划本。", "Maybe I'll try _____ next month.", "也许我下个月会试试_____。"]
      ],
      groups: [
        ["Tool", [["a paper planner", "纸本计划本"], ["a notebook", "笔记本"], ["a wall calendar", "墙上日历"]]],
        ["Benefit", [["stay organized", "把事情安排好"], ["remember appointments", "记住约会"], ["plan your week", "规划一周"]]],
        ["Daily list", [["three important tasks", "三件重要的事"], ["tomorrow's errands", "明天要办的事"], ["a short list", "一张简短清单"]]],
        ["Usual tool", [["my phone calendar", "我的手机日历"], ["a reminder app", "提醒应用程序"], ["sticky notes", "便利贴"]]],
        ["Try", [["a small planner", "小本计划本"], ["your method", "你的方法"], ["writing things down", "把事情写下来"]]]
      ]
    }),
    makeDialogue({
      id: "b1-night-before-packing", level: "B1", linkedSentence: "s-b1-111",
      title: "Making Mornings Easier the Night Before", titleZh: "前一晚准备好，让早晨更从容", scene: "staff break room before work",
      goal: "Two coworkers discuss a realistic way to reduce rushed mornings.", goalZh: "两位同事讨论如何用实际做法减少早晨的匆忙。",
      roles: [["A", "A coworker who prepares work items before bed", "睡前先准备好工作用品的同事"], ["B", "A coworker whose mornings often feel rushed", "早晨经常手忙脚乱的同事"]],
      lines: [
        ["A", "One thing that has helped me is packing my bag the night before.", "对我有帮助的一件事，是前一晚先整理好袋子。", "One thing that has helped me is _____.", "对我有帮助的一件事是_____。"],
        ["B", "Does that make your mornings less rushed?", "这样会让你的早晨没那么匆忙吗？", "Does that make _____ less rushed?", "这样会让_____没那么匆忙吗？"],
        ["A", "Much less. I used to look for my keys while leaving.", "轻松多了。我以前总是在要出门时才找钥匙。"],
        ["B", "What do you prepare in advance?", "你会事先准备什么？", "What do you prepare _____?", "你会_____准备什么？"],
        ["A", "My lunch, badge, and gym clothes if I need them.", "午餐、识别证，还有需要时会带的运动服。"],
        ["B", "I might start doing the same thing.", "我也许要开始这么做。"],
        ["A", "Put everything near the door so you don't make several trips.", "把东西都放在门边，就不用来回跑好几趟。", "Put everything _____ so you don't make several trips.", "把东西都放在_____，就不用来回跑好几趟。"],
        ["B", "That's smart. My mornings get messy when I oversleep.", "这很聪明。我睡过头时，早上就会一团乱。"],
        ["A", "Start with the items you forget most often.", "先从你最常忘记的物品开始。"],
        ["B", "I'll try it tonight and see how it goes.", "我今晚会试试看效果如何。", "I'll try it _____ and see how it goes.", "我会在_____试试看效果如何。"]
      ],
      groups: [
        ["Helpful routine", [["packing my bag the night before", "前一晚整理好袋子"], ["writing a short list", "写一张简短清单"], ["laying out my clothes", "先摆好衣服"]]],
        ["Less rushed", [["your mornings", "你的早晨"], ["leaving for work", "出门上班"], ["the school run", "送孩子上学的过程"]]],
        ["Timing", [["in advance", "事先"], ["before bed", "睡前"], ["the evening before", "前一晚"]]],
        ["Place", [["near the door", "门边"], ["on one shelf", "同一个架子上"], ["beside your shoes", "鞋子旁边"]]],
        ["Try it", [["tonight", "今晚"], ["this week", "这周"], ["tomorrow morning", "明天早上"]]]
      ]
    }),
    makeDialogue({
      id: "b1-induction-stove-adjustment", level: "B1", linkedSentence: "s-b1-112",
      title: "Getting Used to an Induction Stove", titleZh: "适应电磁炉的使用方式", scene: "shared apartment kitchen",
      goal: "A resident explains what was different about cooking on an induction stove.", goalZh: "住户说明改用电磁炉后，需要适应哪些不同之处。",
      roles: [["A", "A resident learning to cook on an induction stove", "正在学习使用电磁炉的住户"], ["B", "A neighbor familiar with induction cookware", "熟悉电磁炉与锅具的邻居"]],
      lines: [
        ["A", "It took me a while to get used to the induction stove.", "我花了一段时间才习惯这台电磁炉。", "It took me a while to get used to _____.", "我花了一段时间才习惯_____。"],
        ["B", "Were the controls confusing, or was the heat different?", "是控制方式难懂，还是火力不同？", "Were _____ confusing, or was the heat different?", "是_____难懂，还是火力不同？"],
        ["A", "Both. It heats pans much faster than my old stove.", "两者都是。它加热锅子的速度比旧炉子快很多。", "It heats pans _____ than my old stove.", "它加热锅子的速度比旧炉子_____。"],
        ["B", "Did any of your pans fail to work?", "你有锅子不能用吗？", "Did any of _____ fail to work?", "你的_____有不能用的吗？"],
        ["A", "One pot wasn't magnetic, so the stove couldn't detect it.", "有一个锅子没有磁性，所以炉子侦测不到。"],
        ["B", "How did you find that out?", "你怎么发现的？"],
        ["A", "I tested the bottom with a fridge magnet.", "我用冰箱磁铁测试锅底。"],
        ["B", "That's an easy check.", "这是很简单的检查方法。"],
        ["A", "Now I lower the heat earlier so the food doesn't burn.", "现在我会早点调低火力，才不会把食物烧焦。", "Now I _____ earlier so the food doesn't burn.", "现在我会早点_____，才不会把食物烧焦。"],
        ["B", "It sounds like you've figured it out.", "听起来你已经掌握诀窍了。"]
      ],
      groups: [
        ["Adjustment", [["the induction stove", "电磁炉"], ["the touch controls", "触控面板"], ["the new cookware", "新锅具"]]],
        ["Controls", [["the controls", "控制方式"], ["the power levels", "火力等级"], ["the symbols", "图示"]]],
        ["Speed", [["much faster", "快很多"], ["more evenly", "更均匀"], ["right away", "马上"]]],
        ["Cookware", [["your pans", "你的锅子"], ["the old pots", "旧锅子"], ["your cookware", "你的锅具"]]],
        ["Heat", [["lower the heat", "调低火力"], ["move the pan", "移动锅子"], ["turn it off", "把它关掉"]]]
      ]
    }),
    makeDialogue({
      id: "b1-recycling-pickup-schedule", level: "B1", linkedSentence: "s-b1-113",
      title: "Missing a Changed Recycling Pickup", titleZh: "错过临时更改的资源回收时间", scene: "apartment recycling area",
      goal: "Two neighbors set up a simple backup after a holiday schedule change.", goalZh: "两位邻居在假期清运时间变动后，建立简单的提醒方式。",
      roles: [["A", "A resident who missed the recycling truck", "错过资源回收车的住户"], ["B", "A neighbor who saw the holiday notice", "看过假期通知的邻居"]],
      lines: [
        ["A", "I could have avoided missing the pickup by checking the schedule.", "如果我查看时间表，本来就可以避免错过清运时间。", "I could have avoided _____ by _____.", "如果我_____，本来就可以避免_____。"],
        ["B", "Was collection day changed this week?", "这周的清运日期有改变吗？", "Was _____ changed this week?", "这周的_____有改变吗？"],
        ["A", "Yes. The holiday moved it one day earlier.", "有。因为假期，清运提前了一天。"],
        ["B", "Did you notice after the truck had gone?", "你是在回收车离开后才发现吗？"],
        ["A", "Exactly. The full bin was still by my back door.", "没错。装满的回收箱还放在后门旁。", "The _____ was still by my back door.", "_____还放在后门旁。"],
        ["B", "The building app usually sends a reminder.", "大楼应用程序通常会发提醒。"],
        ["A", "I had turned off its notifications.", "我把它的通知关掉了。"],
        ["B", "You could also set a repeating calendar alert.", "你也可以设定重复的日历提醒。", "You could also set _____.", "你也可以设定_____。"],
        ["A", "I did that now and shared it with my roommate.", "我现在已经设好了，也分享给室友了。", "I shared it with _____.", "我把它分享给_____了。"],
        ["B", "Then you won't get caught out next time.", "那你下次就不会措手不及了。"]
      ],
      groups: [
        ["Avoidable issue", [["missing the pickup / checking the schedule", "错过清运／查看时间表"], ["the delay / leaving earlier", "延误／早点出发"], ["the fee / paying online", "费用／在线付款"]]],
        ["Changed item", [["collection day", "清运日期"], ["the pickup time", "清运时间"], ["the weekly schedule", "每周时间表"]]],
        ["Container", [["full bin", "装满的回收箱"], ["recycling bag", "回收袋"], ["box of bottles", "一箱瓶子"]]],
        ["Reminder", [["a repeating calendar alert", "重复的日历提醒"], ["a phone reminder", "手机提醒"], ["a note by the door", "门边的纸条"]]],
        ["Share with", [["my roommate", "我的室友"], ["the neighbors", "邻居们"], ["my family", "我的家人"]]]
      ]
    }),
    makeDialogue({
      id: "b1-retail-first-shift", level: "B1", linkedSentence: "s-b1-114",
      title: "Adjusting to a First Shift in a Large Store", titleZh: "适应大型商店的第一班工作", scene: "retail staff room after a shift",
      goal: "A new employee reflects on the physical side of a varied retail job.", goalZh: "新员工分享第一班工作后，对零售工作体力需求的实际感受。",
      roles: [["A", "A new employee finishing a first full shift", "刚完成第一个完整班次的新员工"], ["B", "An experienced coworker offering practical advice", "提供实际建议的资深同事"]],
      lines: [
        ["A", "What surprised me most was how much walking the job involves.", "最让我意外的是，这份工作需要走那么多路。", "What surprised me most was _____.", "最让我意外的是_____。"],
        ["B", "A large store can make the first few shifts exhausting.", "大型商店会让最开始的几班特别累。", "_____ can make the first few shifts exhausting.", "_____会让最开始的几班特别累。"],
        ["A", "I thought I would mainly work at the register.", "我原本以为自己主要会在收银台工作。"],
        ["B", "New staff rotate through stocking, returns, and customer help.", "新员工会轮流负责补货、退货和协助顾客。", "New staff rotate through _____.", "新员工会轮流负责_____。"],
        ["A", "That explains why you told me to wear comfortable shoes.", "难怪你叫我要穿舒适的鞋子。"],
        ["B", "Did your feet hurt after the first half of the day?", "上半天结束后，你的脚会痛吗？"],
        ["A", "A little, but taking shorter breaks more often helped.", "有一点，不过更常休息一下有帮助。", "Taking _____ helped.", "_____有帮助。"],
        ["B", "You'll learn the quickest routes between sections.", "你会慢慢学会各区域之间最快的路线。"],
        ["A", "I already know where the most common items are.", "我已经知道最常见的商品放在哪里了。"],
        ["B", "In another week, the whole layout will feel familiar.", "再过一个星期，整个店面配置就会变得熟悉。", "In another week, _____ will feel familiar.", "再过一个星期，_____就会变得熟悉。"]
      ],
      groups: [
        ["Unexpected part", [["how much walking the job involves", "这份工作需要走这么多路"], ["how busy the store gets", "商店会这么忙"], ["how many tasks change", "工作任务变化这么多"]]],
        ["Workplace", [["a large store", "大型商店"], ["a busy warehouse", "繁忙仓库"], ["the weekend shift", "周末班次"]]],
        ["Rotating tasks", [["stocking, returns, and customer help", "补货、退货和协助顾客"], ["three different sections", "三个不同区域"], ["register and floor work", "收银台与卖场工作"]]],
        ["Helpful action", [["shorter breaks more often", "更常进行短暂休息"], ["comfortable shoes", "舒适的鞋子"], ["drinking more water", "多喝水"]]],
        ["Familiar area", [["the whole layout", "整个店面配置"], ["your section", "你的区域"], ["the daily routine", "日常流程"]]]
      ]
    })
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.dialogues.push(...newDialogues);
  catalog.version = "1027_today_1";

  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1027_today_1";
})();
