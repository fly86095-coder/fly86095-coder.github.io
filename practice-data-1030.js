(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1029_today_1") {
    throw new Error("1030 practice patch requires PRACTICE_CATALOG 1029_today_1");
  }

  const publishedOn = "2026-10-30";

  const newSentences = [
    {
      id: "s-a1-123", level: "A1", title: "Saying Something Is Not Dry Yet", titleZh: "说明某样东西还没干",
      scene: "checking laundry before folding it", pattern: "The _____ is still damp.", zh: "_____还是湿的。",
      hints: [{ en: "blanket", zh: "毯子" }, { en: "towel", zh: "毛巾" }, { en: "sleeve", zh: "袖子" }],
      example: { en: "The blanket is still damp.", zh: "这条毯子还是湿的。" }, publishedOn
    },
    {
      id: "s-a1-124", level: "A1", title: "Asking Someone to Keep Something Steady", titleZh: "请别人帮忙扶稳物品",
      scene: "setting up something with another person", pattern: "Please keep this _____ steady.", zh: "请帮我扶稳这个_____。",
      hints: [{ en: "pole", zh: "杆子" }, { en: "frame", zh: "架子" }, { en: "box", zh: "箱子" }],
      example: { en: "Please keep this pole steady.", zh: "请帮我扶稳这根杆子。" }, publishedOn
    },
    {
      id: "s-a1-125", level: "A1", title: "Reporting a Strange Sound", titleZh: "通报奇怪的声音",
      scene: "noticing that a machine may need attention", pattern: "The _____ is making a strange sound.", zh: "_____发出奇怪的声音。",
      hints: [{ en: "ceiling fan", zh: "吊扇" }, { en: "washing machine", zh: "洗衣机" }, { en: "air conditioner", zh: "空调" }],
      example: { en: "The ceiling fan is making a strange sound.", zh: "吊扇发出奇怪的声音。" }, publishedOn
    },
    {
      id: "s-a1-126", level: "A1", title: "Pointing Out a Loose Part", titleZh: "指出某个部件松动",
      scene: "reporting a small safety problem", pattern: "The _____ feels loose.", zh: "_____感觉有点松。",
      hints: [{ en: "handrail", zh: "扶手" }, { en: "handle", zh: "把手" }, { en: "chair leg", zh: "椅子腿" }],
      example: { en: "The handrail feels loose.", zh: "这个扶手感觉有点松。" }, publishedOn
    },
    {
      id: "s-a2-123", level: "A2", title: "Noticing That a Part Is Missing", titleZh: "发现少了一个部件",
      scene: "finding the cause of an uneven table", pattern: "It looks like one of the _____ is missing.", zh: "看起来少了一个_____。",
      hints: [{ en: "rubber feet", zh: "橡胶脚垫" }, { en: "screws", zh: "螺丝" }, { en: "clips", zh: "夹扣" }],
      example: { en: "It looks like one of the rubber feet is missing.", zh: "看起来少了一个橡胶脚垫。" }, publishedOn
    },
    {
      id: "s-a2-124", level: "A2", title: "Trying Something before Making a Choice", titleZh: "做决定前先试试看",
      scene: "checking whether something is comfortable", pattern: "I'd rather _____ before deciding.", zh: "我想先_____再决定。",
      hints: [{ en: "walk around in them", zh: "穿着走一走" }, { en: "try both sizes", zh: "试试两个尺寸" }, { en: "compare the two", zh: "比较两者" }],
      example: { en: "I'd rather walk around in them before deciding.", zh: "我想先穿着走一走再决定。" }, publishedOn
    },
    {
      id: "s-a2-125", level: "A2", title: "Saying You Have Not Used Something Before", titleZh: "说明自己以前没用过某样东西",
      scene: "learning to use rented equipment", pattern: "I've never used _____ before.", zh: "我以前从没用过_____。",
      hints: [{ en: "a carpet cleaner", zh: "地毯清洗机" }, { en: "this model", zh: "这个型号" }, { en: "a steam mop", zh: "蒸汽拖把" }],
      example: { en: "I've never used a carpet cleaner before.", zh: "我以前从没用过地毯清洗机。" }, publishedOn
    },
    {
      id: "s-a2-126", level: "A2", title: "Finding a Way to Avoid Damage", titleZh: "找到避免损坏的做法",
      scene: "moving a large item through a narrow space", pattern: "I found a way to _____ without _____.", zh: "我找到一个能_____又不会_____的方法。",
      hints: [{ en: "move it / bending the leaves", zh: "移动它／折弯叶子" }, { en: "carry it / scratching the floor", zh: "搬运它／刮伤地板" }, { en: "pack it / crushing the corners", zh: "包装它／压坏边角" }],
      example: { en: "I found a way to move it without bending the leaves.", zh: "我找到一个能移动它又不会折弯叶子的方法。" }, publishedOn
    },
    {
      id: "s-b1-123", level: "B1", title: "Explaining What You Wanted to Improve", titleZh: "说明自己想改善的地方",
      scene: "adjusting a workspace for better concentration", pattern: "What I was trying to improve was _____.", zh: "我当时想改善的是_____。",
      hints: [{ en: "my concentration in the afternoon", zh: "下午的专注力" }, { en: "the way I organize my day", zh: "安排一天的方式" }, { en: "how clearly I hear calls", zh: "听取通话的清晰度" }],
      example: { en: "What I was trying to improve was my concentration in the afternoon.", zh: "我当时想改善的是下午的专注力。" }, publishedOn
    },
    {
      id: "s-b1-124", level: "B1", title: "Choosing the More Practical Option", titleZh: "选择更实际的处理方式",
      scene: "repairing an item instead of replacing it", pattern: "I could have _____, but _____ seemed more practical.", zh: "我本来可以_____，但_____似乎更实际。",
      hints: [{ en: "replaced the lamp / repairing the cord", zh: "换掉整盏灯／维修电线" }, { en: "bought a new bag / fixing the strap", zh: "买新包／修理背带" }, { en: "thrown it away / replacing one part", zh: "丢掉它／更换一个零件" }],
      example: { en: "I could have replaced the lamp, but repairing the cord seemed more practical.", zh: "我本来可以换掉整盏灯，但维修电线似乎更实际。" }, publishedOn
    },
    {
      id: "s-b1-125", level: "B1", title: "Explaining That the Suspected Cause Was Wrong", titleZh: "说明原本怀疑的原因并不正确",
      scene: "finding the actual cause of a household problem", pattern: "It turns out _____ wasn't the problem.", zh: "结果发现，_____并不是问题所在。",
      hints: [{ en: "the water heater", zh: "热水器" }, { en: "the battery", zh: "电池" }, { en: "the internet connection", zh: "网络连接" }],
      example: { en: "It turns out the water heater wasn't the problem.", zh: "结果发现，热水器并不是问题所在。" }, publishedOn
    },
    {
      id: "s-b1-126", level: "B1", title: "Regretting That You Did Not Check First", titleZh: "后悔没有事先确认",
      scene: "checking restrictions before using a purchase", pattern: "I wish I'd checked _____ before _____.", zh: "我真希望自己在_____之前先确认过_____。",
      hints: [{ en: "the size limit / removing the tags", zh: "尺寸限制／拆掉标签" }, { en: "the return policy / opening the box", zh: "退货规定／打开包装" }, { en: "the measurements / moving the furniture", zh: "尺寸／移动家具" }],
      example: { en: "I wish I'd checked the size limit before removing the tags.", zh: "我真希望自己在拆掉标签之前先确认过尺寸限制。" }, publishedOn
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
      id: "a1-damp-blanket-laundry", level: "A1", linkedSentence: "s-a1-123",
      title: "Drying a Blanket for a Few More Minutes", titleZh: "让毯子再烘几分钟", scene: "shared laundry room",
      goal: "Two neighbors check a damp blanket and keep the shared dryer available on time.", goalZh: "两位邻居检查还没干的毯子，并准时腾出共用烘衣机。",
      roles: [["A", "A resident checking a blanket in the dryer", "正在检查烘衣机里毯子的住户"], ["B", "A neighbor waiting to use the dryer next", "正在等候使用下一轮烘衣机的邻居"]],
      lines: [
        ["A", "The blanket is still damp.", "这条毯子还是湿的。", "The _____ is still damp.", "_____还是湿的。"],
        ["B", "You can run the dryer for ten more minutes.", "你可以让烘衣机再转十分钟。", "You can run the dryer for _____.", "你可以让烘衣机再转_____。"],
        ["A", "Is the lower dryer free?", "下面那台烘衣机有空吗？", "Is _____ free?", "_____有空吗？"],
        ["B", "Yes, I just took my clothes out.", "有，我刚把衣服拿出来。"],
        ["A", "Thanks. I don't want to fold the blanket yet.", "谢谢。我还不想把这条毯子折起来。"],
        ["B", "Put it in by itself so it dries evenly.", "让它单独烘，这样会干得比较均匀。"],
        ["A", "Should I use the low setting?", "我应该用低温模式吗？"],
        ["B", "Yes, the care label says low heat.", "对，洗护标签写着低温。", "The care label says _____.", "洗护标签写着_____。"],
        ["A", "I'll set a timer on my phone.", "我会在手机上设定计时器。", "I'll set _____ on my phone.", "我会在手机上设定_____。"],
        ["B", "Good. Then the dryer will be free when my wash finishes.", "好。这样我的衣服洗好时，烘衣机就空出来了。"]
      ],
      groups: [
        ["Damp item", [["blanket", "毯子"], ["towel", "毛巾"], ["sleeve", "袖子"]]],
        ["Extra time", [["ten more minutes", "再十分钟"], ["one more cycle", "再一轮"], ["a little longer", "再久一点"]]],
        ["Available machine", [["the lower dryer", "下面那台烘衣机"], ["the dryer by the door", "门边的烘衣机"], ["the small machine", "小台机器"]]],
        ["Heat setting", [["low heat", "低温"], ["a gentle cycle", "柔和模式"], ["air only", "只送风"]]],
        ["Reminder", [["a timer", "计时器"], ["an alarm", "闹钟"], ["a ten-minute reminder", "十分钟提醒"]]]
      ]
    }),
    makeDialogue({
      id: "a1-market-canopy-pole", level: "A1", linkedSentence: "s-a1-124",
      title: "Opening a Canopy at a Street Market", titleZh: "在市集撑开遮棚", scene: "street market before opening",
      goal: "Two neighboring vendors open a canopy safely before customers arrive.", goalZh: "两位相邻摊主在顾客抵达前安全撑开遮棚。",
      roles: [["A", "A fruit vendor setting up a folding canopy", "正在架设折叠遮棚的水果摊主"], ["B", "A neighboring vendor helping with the frame", "协助固定棚架的邻摊摊主"]],
      lines: [
        ["A", "Please keep this pole steady.", "请帮我扶稳这根杆子。", "Please keep this _____ steady.", "请帮我扶稳这个_____。"],
        ["B", "Sure. Are you opening the canopy?", "可以。你要把遮棚撑开吗？"],
        ["A", "Yes, one corner is caught.", "对，有一个角卡住了。", "One _____ is caught.", "有一个_____卡住了。"],
        ["B", "I have it. You can open the frame.", "我扶好了。你可以把棚架打开。"],
        ["A", "Please stand on this side.", "请站到这一边。"],
        ["B", "Is the leg locked now?", "现在支架脚锁好了吗？", "Is _____ locked now?", "现在_____锁好了吗？"],
        ["A", "Not yet. Push the button near the bottom.", "还没有。按一下靠近底部的按钮。", "Push the button near _____.", "按一下靠近_____的按钮。"],
        ["B", "Okay, it clicked into place.", "好，它已经喀一声卡进去了。", "It clicked _____.", "它喀一声_____。"],
        ["A", "Great. Now I can pull the cover across.", "太好了。现在我可以把棚布拉过去了。"],
        ["B", "The stall is ready before the first customers arrive.", "第一批顾客来以前，摊位就准备好了。"]
      ],
      groups: [
        ["Keep steady", [["pole", "杆子"], ["frame", "棚架"], ["box", "箱子"]]],
        ["Caught part", [["corner", "角"], ["strap", "带子"], ["piece of fabric", "一块布"]]],
        ["Lock point", [["the leg", "支架脚"], ["the corner", "角落"], ["this joint", "这个接合处"]]],
        ["Button position", [["the bottom", "底部"], ["the joint", "接合处"], ["your hand", "你的手边"]]],
        ["Lock", [["into place", "卡进定位"], ["properly", "正确锁好"], ["all the way", "完全卡好"]]]
      ]
    }),
    makeDialogue({
      id: "a1-noisy-ceiling-fan", level: "A1", linkedSentence: "s-a1-125",
      title: "Reporting a Noisy Ceiling Fan", titleZh: "通报发出异响的吊扇", scene: "community center waiting area",
      goal: "A visitor reports a rattling fan so staff can switch it off and request a safe inspection.", goalZh: "访客通报发出异响的吊扇，让工作人员关闭设备并安排安全检查。",
      roles: [["A", "A visitor sitting below a ceiling fan", "坐在吊扇下方的访客"], ["B", "A front-desk worker responding to the report", "处理通报的柜台工作人员"]],
      lines: [
        ["A", "The ceiling fan is making a strange sound.", "吊扇发出奇怪的声音。", "The _____ is making a strange sound.", "_____发出奇怪的声音。"],
        ["B", "Thank you. I'll switch it off.", "谢谢。我会把它关掉。", "I'll switch _____ off.", "我会把_____关掉。"],
        ["A", "The sound started a few minutes ago.", "几分钟前开始有这个声音。", "The sound started _____.", "_____前开始有这个声音。"],
        ["B", "Please move to the other side of the room.", "请移到房间的另一边。"],
        ["A", "Is it safe to sit near the window?", "坐在窗边安全吗？"],
        ["B", "Yes, that area is away from the fan.", "安全，那个区域离吊扇比较远。", "That area is away from _____.", "那个区域离_____比较远。"],
        ["A", "Do you need to know which fan it is?", "你需要知道是哪一台吊扇吗？"],
        ["B", "Yes. Is it the one above the blue chairs?", "需要。是蓝色椅子上方那台吗？", "Is it the one above _____?", "是_____上方那台吗？"],
        ["A", "That's the one.", "就是那一台。"],
        ["B", "I'll place a sign here and call maintenance.", "我会在这里放上标示，并联络维修人员。"]
      ],
      groups: [
        ["Noisy machine", [["ceiling fan", "吊扇"], ["air conditioner", "空调"], ["water cooler", "饮水机"]]],
        ["Turn off", [["it", "它"], ["the fan", "吊扇"], ["the power", "电源"]]],
        ["Start time", [["a few minutes ago", "几分钟前"], ["just now", "刚才"], ["this morning", "今天早上"]]],
        ["Safe distance", [["the fan", "吊扇"], ["the machine", "机器"], ["that corner", "那个角落"]]],
        ["Location", [["the blue chairs", "蓝色椅子"], ["the front desk", "柜台"], ["the main door", "大门"]]]
      ]
    }),
    makeDialogue({
      id: "a1-loose-park-handrail", level: "A1", linkedSentence: "s-a1-126",
      title: "Reporting a Loose Handrail", titleZh: "通报松动的扶手", scene: "steps in a neighborhood park",
      goal: "A park visitor reports a loose handrail so it can be marked and repaired quickly.", goalZh: "公园访客通报松动扶手，让工作人员尽快标示并维修。",
      roles: [["A", "A visitor who noticed a loose handrail", "发现扶手松动的访客"], ["B", "A park worker checking the steps", "正在检查阶梯的公园工作人员"]],
      lines: [
        ["A", "The handrail feels loose.", "这个扶手感觉有点松。", "The _____ feels loose.", "_____感觉有点松。"],
        ["B", "Thanks for telling me.", "谢谢你告诉我。"],
        ["A", "It moved when I held it.", "我扶着它时，它动了一下。", "It moved when _____.", "_____时，它动了一下。"],
        ["B", "Please use the other side for now.", "现在请先走另一边。", "Please use _____ for now.", "现在请先走_____。"],
        ["A", "Should I keep people away from these steps?", "我应该先请大家不要走这些阶梯吗？"],
        ["B", "Yes, I'll put up a warning sign.", "对，我会放一个警示牌。", "I'll put up _____.", "我会放_____。"],
        ["A", "Do you need the exact spot?", "你需要知道确切位置吗？"],
        ["B", "It's the second post from the bottom.", "是从下面数来第二根柱子。", "It's _____ from the bottom.", "是从下面数来_____。"],
        ["A", "I'll show you before I leave.", "我离开前会指给你看。"],
        ["B", "Good. We can fix it this morning.", "好。我们今天早上就能修好。"]
      ],
      groups: [
        ["Loose part", [["handrail", "扶手"], ["handle", "把手"], ["chair leg", "椅子腿"]]],
        ["Movement", [["I held it", "我扶着它"], ["I leaned on it", "我靠着它"], ["someone used it", "有人使用它"]]],
        ["Safe side", [["the other side", "另一边"], ["the ramp", "斜坡"], ["the main path", "主要步道"]]],
        ["Warning", [["a warning sign", "警示牌"], ["some safety tape", "安全警示带"], ["a small barrier", "小型围挡"]]],
        ["Position", [["the second post", "第二根柱子"], ["the first step", "第一级阶梯"], ["the left rail", "左侧扶手"]]]
      ]
    }),
    makeDialogue({
      id: "a2-wobbly-cafe-table", level: "A2", linkedSentence: "s-a2-123",
      title: "Fixing a Wobbly Café Table", titleZh: "处理摇晃的咖啡店桌子", scene: "café during a busy afternoon",
      goal: "A customer and a server find the missing part that is making a table uneven.", goalZh: "顾客与店员找出让桌子不平稳的缺失部件。",
      roles: [["A", "A customer whose table keeps rocking", "桌子一直摇晃的顾客"], ["B", "A café server checking the table safely", "安全检查桌子的咖啡店员工"]],
      lines: [
        ["A", "This table keeps rocking.", "这张桌子一直摇晃。", "This table keeps _____.", "这张桌子一直_____。"],
        ["B", "Let me check underneath.", "让我检查一下桌子下面。"],
        ["A", "It looks like one of the rubber feet is missing.", "看起来少了一个橡胶脚垫。", "It looks like one of the _____ is missing.", "看起来少了一个_____。"],
        ["B", "That would make the table uneven.", "那会让桌子不平稳。", "That would make the table _____.", "那会让桌子_____。"],
        ["A", "Is there another table available?", "还有其他空桌吗？"],
        ["B", "They're all occupied right now.", "现在全部都有人。"],
        ["A", "Could a folded napkin help for a few minutes?", "折好的餐巾可以暂时垫几分钟吗？", "Could _____ help for a few minutes?", "_____可以暂时垫几分钟吗？"],
        ["B", "Yes, but I'll bring a proper pad.", "可以，但我会拿一个合适的垫片来。"],
        ["A", "Thanks. I don't want the drinks to spill.", "谢谢。我不想让饮料打翻。"],
        ["B", "I'll move them while I fix the table.", "我修桌子时会先把饮料移开。", "I'll move _____ while I fix the table.", "我修桌子时会先把_____移开。"]
      ],
      groups: [
        ["Movement", [["rocking", "摇晃"], ["moving", "移动"], ["leaning to one side", "向一边倾斜"]]],
        ["Missing part", [["rubber feet", "橡胶脚垫"], ["screws", "螺丝"], ["small pads", "小垫片"]]],
        ["Condition", [["uneven", "不平稳"], ["unstable", "不稳定"], ["lower on one side", "一边比较低"]]],
        ["Temporary support", [["a folded napkin", "折好的餐巾"], ["a piece of cardboard", "一片纸板"], ["a small pad", "小垫片"]]],
        ["Move away", [["the drinks", "饮料"], ["the cups", "杯子"], ["your laptop", "你的笔记本电脑"]]]
      ]
    }),
    makeDialogue({
      id: "a2-shoe-store-fit", level: "A2", linkedSentence: "s-a2-124",
      title: "Testing the Fit of Walking Shoes", titleZh: "试穿步行鞋的合脚程度", scene: "shoe store",
      goal: "A customer compares the fit of two pairs before choosing walking shoes.", goalZh: "顾客在选择步行鞋前，比较两双鞋的合脚程度。",
      roles: [["A", "A customer looking for comfortable walking shoes", "正在挑选舒适步行鞋的顾客"], ["B", "A sales assistant helping with fit and sizing", "协助确认合脚程度与尺寸的店员"]],
      lines: [
        ["A", "These feel comfortable, but I'm not sure about the size.", "这双穿起来舒服，但我不确定尺寸。", "I'm not sure about _____.", "我不确定_____。"],
        ["B", "Try walking to the mirror and back.", "试着走到镜子那里再走回来。"],
        ["A", "I'd rather walk around in them before deciding.", "我想先穿着走一走再决定。", "I'd rather _____ before deciding.", "我想先_____再决定。"],
        ["B", "Of course. The floor is clear.", "当然可以。地面很空。"],
        ["A", "The left shoe feels tighter.", "左脚那只鞋感觉比较紧。", "The _____ feels tighter.", "_____感觉比较紧。"],
        ["B", "I can bring a half size larger.", "我可以拿大半号的尺寸。", "I can bring _____.", "我可以拿_____。"],
        ["A", "Please bring the same style in eight and a half.", "请拿同款的八号半。"],
        ["B", "I'll also bring a wider pair.", "我也会拿一双较宽的。"],
        ["A", "Great. I want enough room for thicker socks.", "太好了。我想留足够空间穿厚一点的袜子。", "I want enough room for _____.", "我想留足够空间_____。"],
        ["B", "Take your time with both pairs.", "两双都慢慢试，不用急。"]
      ],
      groups: [
        ["Uncertain detail", [["the size", "尺寸"], ["the width", "宽度"], ["the heel", "后跟"]]],
        ["Try first", [["walk around in them", "穿着走一走"], ["try both pairs", "试穿两双"], ["compare the sizes", "比较尺寸"]]],
        ["Tight side", [["left shoe", "左脚那只鞋"], ["right shoe", "右脚那只鞋"], ["front", "前端"]]],
        ["Different size", [["a half size larger", "大半号"], ["a wider pair", "较宽的一双"], ["the next size up", "大一号"]]],
        ["Extra room", [["thicker socks", "厚一点的袜子"], ["my toes", "脚趾"], ["long walks", "长时间走路"]]]
      ]
    }),
    makeDialogue({
      id: "a2-rented-carpet-cleaner", level: "A2", linkedSentence: "s-a2-125",
      title: "Using a Rented Carpet Cleaner", titleZh: "使用租来的地毯清洗机", scene: "equipment rental counter",
      goal: "A customer learns the basic steps for using a carpet cleaner without damaging the carpet.", goalZh: "顾客学习地毯清洗机的基本使用步骤，避免损坏地毯。",
      roles: [["A", "A customer picking up a rented carpet cleaner", "前来领取租用地毯清洗机的顾客"], ["B", "A rental worker explaining the basic controls", "说明基本操作方式的租赁店员工"]],
      lines: [
        ["A", "I'm here to pick up the carpet cleaner.", "我是来领取地毯清洗机的。", "I'm here to pick up _____.", "我是来领取_____的。"],
        ["B", "Have you used this model before?", "你以前用过这个型号吗？"],
        ["A", "I've never used a carpet cleaner before.", "我以前从没用过地毯清洗机。", "I've never used _____ before.", "我以前从没用过_____。"],
        ["B", "Start by filling the clean-water tank to this line.", "先把清水箱加到这条线。", "Fill the clean-water tank to _____.", "把清水箱加到_____。"],
        ["A", "Which cleaning liquid should I use?", "我应该使用哪一种清洁液？"],
        ["B", "Use only the small bottle we provide.", "只能使用我们提供的小瓶装清洁液。"],
        ["A", "Should I vacuum the room first?", "我应该先把房间吸尘吗？", "Should I _____ first?", "我应该先_____吗？"],
        ["B", "Yes, and test the cleaner in a hidden corner.", "对，而且要先在不明显的角落测试。", "Test the cleaner in _____.", "先在_____测试清洗机。"],
        ["A", "How long should I leave the carpet empty?", "清洗后多久才能把东西放回地毯上？"],
        ["B", "Wait until it is completely dry before replacing the furniture.", "等地毯完全干了再把家具放回去。"]
      ],
      groups: [
        ["Rental item", [["the carpet cleaner", "地毯清洗机"], ["the steam mop", "蒸汽拖把"], ["the floor machine", "地板清洁机"]]],
        ["New equipment", [["a carpet cleaner", "地毯清洗机"], ["this model", "这个型号"], ["a steam mop", "蒸汽拖把"]]],
        ["Fill line", [["this line", "这条线"], ["the maximum mark", "最高刻度"], ["the blue mark", "蓝色标记"]]],
        ["Prepare", [["vacuum the room", "把房间吸尘"], ["move the chairs", "移开椅子"], ["check the label", "检查标签"]]],
        ["Test area", [["a hidden corner", "不明显的角落"], ["a small area", "一小块区域"], ["behind the sofa", "沙发后面"]]]
      ]
    }),
    makeDialogue({
      id: "a2-large-plant-doorway", level: "A2", linkedSentence: "s-a2-126",
      title: "Moving a Large Plant through a Doorway", titleZh: "把大型盆栽搬过门口", scene: "garden center pickup area",
      goal: "A customer and a garden worker protect a plant while moving it through a narrow doorway.", goalZh: "顾客与园艺店员工在把盆栽搬过狭窄门口时保护枝叶。",
      roles: [["A", "A customer taking home a wide indoor plant", "准备带走大型室内盆栽的顾客"], ["B", "A garden worker helping move the plant safely", "协助安全搬运盆栽的园艺店员工"]],
      lines: [
        ["A", "This plant is wider than the doorway.", "这盆植物比门口还宽。", "This plant is wider than _____.", "这盆植物比_____还宽。"],
        ["B", "We can wrap the leaves loosely.", "我们可以把叶子松松地包起来。"],
        ["A", "I found a way to move it without bending the leaves.", "我找到一个能移动它又不会折弯叶子的方法。", "I found a way to _____ without _____.", "我找到一个能_____又不会_____的方法。"],
        ["B", "Show me before we lift the pot.", "我们抬花盆前，先示范给我看。", "Show me before we _____.", "我们_____前，先示范给我看。"],
        ["A", "I'll tie the branches with a soft cloth.", "我会用软布轻轻绑住枝叶。", "I'll tie the branches with _____.", "我会用_____轻轻绑住枝叶。"],
        ["B", "Leave some space around the stems.", "枝茎周围要留一些空间。"],
        ["A", "Could you carry the pot while I guide the leaves?", "我扶着叶子时，你可以搬花盆吗？"],
        ["B", "Yes. Let's tilt it slightly at the doorway.", "可以。到门口时，我们稍微倾斜一下。", "Let's tilt it slightly at _____.", "到_____时，我们稍微倾斜一下。"],
        ["A", "Then we can set it on the mat inside.", "然后我们可以把它放在里面的垫子上。"],
        ["B", "Good. That should protect both the pot and the plant.", "好。这样应该能同时保护花盆和植物。"]
      ],
      groups: [
        ["Narrow space", [["the doorway", "门口"], ["the hall", "走廊"], ["the elevator door", "电梯门"]]],
        ["Safe method", [["move it / bending the leaves", "移动它／折弯叶子"], ["carry it / scratching the floor", "搬运它／刮伤地板"], ["turn it / breaking a branch", "转动它／折断枝条"]]],
        ["Lift", [["lift the pot", "抬花盆"], ["move the plant", "移动植物"], ["carry it outside", "把它搬出去"]]],
        ["Soft material", [["a soft cloth", "软布"], ["a wide strap", "宽带子"], ["a light sheet", "薄布"]]],
        ["Tight point", [["the doorway", "门口"], ["the corner", "转角"], ["the narrow hall", "狭窄走廊"]]]
      ]
    }),
    makeDialogue({
      id: "b1-quieter-work-desk", level: "B1", linkedSentence: "s-b1-123",
      title: "Moving to a Quieter Desk", titleZh: "换到较安静的座位", scene: "shared office workspace",
      goal: "A coworker explains a desk change and checks whether the new setup supports focused work.", goalZh: "同事说明换座位的原因，并确认新环境是否有助于专心工作。",
      roles: [["A", "A coworker testing a quieter desk for a week", "正在试用较安静座位一周的同事"], ["B", "A team lead checking whether the setup works", "确认新工作环境是否合适的组长"]],
      lines: [
        ["A", "What I was trying to improve was my concentration in the afternoon.", "我当时想改善的是下午的专注力。", "What I was trying to improve was _____.", "我当时想改善的是_____。"],
        ["B", "Has it made it easier to concentrate?", "这样有比较容易专心吗？", "Has it made it easier to _____?", "这样有比较容易_____吗？"],
        ["A", "Yes, especially during the late afternoon.", "有，尤其是下午较晚的时候。"],
        ["B", "I noticed you also turned your desk away from the walkway.", "我注意到你也把桌子转离走道。", "You also turned your desk away from _____.", "你也把桌子转离_____。"],
        ["A", "That keeps passing conversations out of sight.", "这样就不会一直看到路过的人交谈。"],
        ["B", "Do you still have enough natural light?", "你那里还有足够的自然光吗？"],
        ["A", "Yes, but I may add a small lamp on cloudy days.", "有，但阴天时我可能会加一盏小灯。", "I may add _____ on cloudy days.", "阴天时我可能会加_____。"],
        ["B", "Let me know if you need a longer cable.", "如果你需要更长的电线，请告诉我。"],
        ["A", "Thanks. I'll test the setup for a week.", "谢谢。我会先试用这个摆设一周。", "I'll test the setup for _____.", "我会先试用这个摆设_____。"],
        ["B", "Good. We can adjust it again if needed.", "好。如果有需要，我们可以再调整。"]
      ],
      groups: [
        ["Area to improve", [["my concentration in the afternoon", "下午的专注力"], ["how clearly I hear calls", "听取通话的清晰度"], ["the way I organize detailed work", "安排细节工作的方式"]]],
        ["Benefit", [["concentrate", "专心"], ["hear calls clearly", "听清楚通话"], ["finish detailed work", "完成细节工作"]]],
        ["Busy area", [["the walkway", "走道"], ["the kitchen", "厨房"], ["the main entrance", "主要入口"]]],
        ["Extra item", [["a small lamp", "小灯"], ["a monitor stand", "屏幕架"], ["a longer cable", "较长的电线"]]],
        ["Trial period", [["a week", "一周"], ["a few days", "几天"], ["the rest of the month", "这个月剩下的时间"]]]
      ]
    }),
    makeDialogue({
      id: "b1-lamp-cord-repair", level: "B1", linkedSentence: "s-b1-124",
      title: "Repairing a Lamp Cord Instead of Replacing the Lamp", titleZh: "维修灯线而不是更换整盏灯", scene: "small appliance repair counter",
      goal: "A customer and a technician choose a focused repair after checking which parts still work.", goalZh: "顾客与维修人员检查仍可使用的部件后，选择针对性维修。",
      roles: [["A", "A customer bringing in a lamp with a damaged cord", "带着电线损坏台灯的顾客"], ["B", "A repair technician inspecting the lamp", "正在检查台灯的维修人员"]],
      lines: [
        ["A", "I could have replaced the lamp, but repairing the cord seemed more practical.", "我本来可以换掉整盏灯，但维修电线似乎更实际。", "I could have _____, but _____ seemed more practical.", "我本来可以_____，但_____似乎更实际。"],
        ["B", "Good choice. The switch and socket are still in excellent condition.", "这是好选择。开关和灯座的状况都还很好。"],
        ["A", "The cord became warm near the plug.", "电线靠近插头的地方会发热。", "The cord became warm near _____.", "电线靠近_____的地方会发热。"],
        ["B", "Then it was right to stop using it.", "那你停止使用是正确的。", "It was right to _____.", "_____是正确的。"],
        ["A", "Can you replace the cord with a longer one?", "你可以换成一条比较长的电线吗？"],
        ["B", "Yes, as long as it doesn't create a trip hazard.", "可以，只要不会造成绊倒危险。", "Yes, as long as _____.", "可以，只要_____。"],
        ["A", "Please keep it close to the original length.", "请让长度接近原本的电线。"],
        ["B", "I can finish the repair by tomorrow.", "我明天以前可以完成维修。"],
        ["A", "Before I take it home, could we test it here?", "我带回家前，可以先在这里测试吗？", "Before I take it home, could we _____?", "我带回家前，可以先_____吗？"],
        ["B", "Absolutely. We'll check the cord and switch together.", "当然可以。我们会一起检查电线和开关。"]
      ],
      groups: [
        ["Practical choice", [["replaced the lamp / repairing the cord", "换掉整盏灯／维修电线"], ["bought a new fan / fixing the switch", "买新电风扇／修理开关"], ["thrown it away / replacing one part", "丢掉它／更换一个零件"]]],
        ["Warm spot", [["the plug", "插头"], ["the switch", "开关"], ["the base", "底座"]]],
        ["Safe action", [["stop using it", "停止使用"], ["unplug it", "拔掉插头"], ["bring it in", "送来检查"]]],
        ["Safety condition", [["it doesn't create a trip hazard", "不会造成绊倒危险"], ["the cord stays away from heat", "电线远离热源"], ["the plug fits safely", "插头能安全插入"]]],
        ["Final check", [["test it here", "在这里测试"], ["check the new cord", "检查新电线"], ["turn it on once", "开机测试一次"]]]
      ]
    }),
    makeDialogue({
      id: "b1-shower-pressure-filter", level: "B1", linkedSentence: "s-b1-125",
      title: "Finding the Cause of Weak Shower Pressure", titleZh: "找出淋浴水压变弱的原因", scene: "apartment bathroom inspection",
      goal: "A tenant and a maintenance worker identify a blocked filter instead of replacing working equipment.", goalZh: "住户与维修人员找出堵塞的滤网，避免更换正常运作的设备。",
      roles: [["A", "A tenant who reported weak shower pressure", "通报淋浴水压变弱的住户"], ["B", "A maintenance worker who inspected the water system", "检查供水系统的维修人员"]],
      lines: [
        ["A", "It turns out the water heater wasn't the problem.", "结果发现，热水器并不是问题所在。", "It turns out _____ wasn't the problem.", "结果发现，_____并不是问题所在。"],
        ["B", "Right. The filter inside the showerhead was blocked.", "对。莲蓬头里面的滤网堵住了。", "The filter inside _____ was blocked.", "_____里面的滤网堵住了。"],
        ["A", "That explains why the kitchen taps still had good pressure.", "这就能解释为什么厨房水龙头的水压一直正常。"],
        ["B", "I cleaned the filter, and the flow is normal again.", "我清洁了滤网，现在水流恢复正常了。", "The flow is _____ again.", "现在水流恢复_____了。"],
        ["A", "Should I replace the showerhead anyway?", "我还是应该更换莲蓬头吗？"],
        ["B", "Not unless the pressure drops again.", "除非水压再次下降，否则不用。", "Not unless _____.", "除非_____，否则不用。"],
        ["A", "Is there a safe way to clean the filter myself?", "有安全的方法可以让我自己清洁滤网吗？"],
        ["B", "Soak it in vinegar, then rinse it thoroughly.", "把它泡在醋里，然后彻底冲洗。", "Soak it in _____, then rinse it thoroughly.", "把它泡在_____，然后彻底冲洗。"],
        ["A", "I'll make a note so I remember next time.", "我会记下来，免得下次忘记。"],
        ["B", "Good. That may save you an unnecessary service call.", "好。这样也许能省下一次不必要的维修服务。"]
      ],
      groups: [
        ["Suspected cause", [["the water heater", "热水器"], ["the main pipe", "主水管"], ["the building pressure", "大楼水压"]]],
        ["Blocked part", [["the showerhead", "莲蓬头"], ["the tap", "水龙头"], ["the hose", "软管"]]],
        ["Normal result", [["normal", "正常"], ["strong", "强劲"], ["steady", "稳定"]]],
        ["When to replace", [["the pressure drops again", "水压再次下降"], ["the filter cracks", "滤网破裂"], ["the leak returns", "漏水再次发生"]]],
        ["Cleaning liquid", [["vinegar", "醋"], ["warm water", "温水"], ["a mild cleaner", "温和清洁剂"]]]
      ]
    }),
    makeDialogue({
      id: "b1-carry-on-size-limit", level: "B1", linkedSentence: "s-b1-126",
      title: "Exchanging a Suitcase That Is Too Large", titleZh: "更换尺寸过大的行李箱", scene: "luggage store service desk",
      goal: "A customer checks the exchange options after comparing a suitcase with an airline size limit.", goalZh: "顾客比较行李箱与航空公司尺寸限制后，了解可用的换货方式。",
      roles: [["A", "A customer whose suitcase is too large for carry-on use", "行李箱尺寸不符合随身行李规定的顾客"], ["B", "A store employee explaining the exchange policy", "说明换货规定的店员"]],
      lines: [
        ["A", "I wish I'd checked the size limit before removing the tags.", "我真希望自己在拆掉标签之前先确认过尺寸限制。", "I wish I'd checked _____ before _____.", "我真希望自己在_____之前先确认过_____。"],
        ["B", "Is the suitcase slightly too large for carry-on use?", "这个行李箱作为随身行李时稍微太大了吗？"],
        ["A", "Yes, especially once the front pocket is full.", "对，尤其是前袋装满以后。", "Especially once _____ is full.", "尤其是_____装满以后。"],
        ["B", "We may still be able to exchange it if it hasn't been used.", "如果没有实际使用过，我们可能仍能帮你换货。", "We may still be able to exchange it if _____.", "如果_____，我们可能仍能帮你换货。"],
        ["A", "I only tested it at home.", "我只在家里试装过。"],
        ["B", "Do you still have the receipt and packaging?", "你还留着收据和包装吗？"],
        ["A", "I have the receipt, but I recycled the box.", "我有收据，但纸箱已经回收了。", "I have _____, but I recycled the box.", "我有_____，但纸箱已经回收了。"],
        ["B", "That's fine. We don't require the original box.", "没关系。我们不要求保留原纸箱。"],
        ["A", "I'd like to compare it with a smaller model.", "我想把它和较小的型号比较一下。", "I'd like to compare it with _____.", "我想把它和_____比较一下。"],
        ["B", "I'll bring one and show you how much it holds.", "我会拿一款过来，让你看看它能装多少东西。"]
      ],
      groups: [
        ["Check first", [["the size limit / removing the tags", "尺寸限制／拆掉标签"], ["the return policy / opening the box", "退货规定／打开包装"], ["the measurements / packing it", "尺寸／装入物品"]]],
        ["Full section", [["the front pocket", "前袋"], ["the outside pocket", "外侧口袋"], ["the suitcase", "行李箱"]]],
        ["Exchange condition", [["it hasn't been used", "没有实际使用过"], ["it is still clean", "仍然干净"], ["the wheels are undamaged", "轮子没有损坏"]]],
        ["Proof of purchase", [["the receipt", "收据"], ["the email receipt", "电子收据"], ["the card record", "刷卡记录"]]],
        ["Comparison", [["a smaller model", "较小的型号"], ["the next size down", "小一号"], ["a lighter suitcase", "较轻的行李箱"]]]
      ]
    })
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.dialogues.push(...newDialogues);
  catalog.version = "1030_today_1";

  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1030_today_1";
})();
