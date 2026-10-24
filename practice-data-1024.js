(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1023_today_1") {
    throw new Error("1024 practice patch requires PRACTICE_CATALOG 1023_today_1");
  }

  const publishedOn = "2026-10-24";

  const newSentences = [
    {
      id: "s-a1-107", level: "A1", title: "Saying You Brought the Wrong Item", titleZh: "说明自己带错了东西",
      scene: "wrong belongings", pattern: "I brought the wrong _____.", zh: "我带错_____了。",
      hints: [{ en: "shoes", zh: "鞋子" }, { en: "bag", zh: "袋子" }, { en: "key", zh: "钥匙" }],
      example: { en: "I brought the wrong shoes.", zh: "我带错鞋子了。" }, publishedOn
    },
    {
      id: "s-a1-108", level: "A1", title: "Asking to Leave Something Somewhere", titleZh: "询问东西能否暂时放在某处",
      scene: "temporary storage", pattern: "Can I leave _____ here?", zh: "我可以把_____放在这里吗？",
      hints: [{ en: "my backpack", zh: "我的背包" }, { en: "this box", zh: "这个箱子" }, { en: "my helmet", zh: "我的安全帽" }],
      example: { en: "Can I leave my backpack here?", zh: "我可以把背包放在这里吗？" }, publishedOn
    },
    {
      id: "s-a1-109", level: "A1", title: "Saying Where You Are Waiting", titleZh: "说明自己正在哪里等候",
      scene: "meeting outside", pattern: "I'm waiting outside _____.", zh: "我正在_____外面等。",
      hints: [{ en: "the north entrance", zh: "北门" }, { en: "your building", zh: "你住的大楼" }, { en: "the station", zh: "车站" }],
      example: { en: "I'm waiting outside the north entrance.", zh: "我正在北门外面等。" }, publishedOn
    },
    {
      id: "s-a1-110", level: "A1", title: "Saying What Is Still Needed", titleZh: "说明还缺少什么",
      scene: "getting supplies ready", pattern: "We still need _____.", zh: "我们还需要_____。",
      hints: [{ en: "more water", zh: "更多水" }, { en: "some batteries", zh: "一些电池" }, { en: "a flashlight", zh: "一支手电筒" }],
      example: { en: "We still need more water.", zh: "我们还需要更多水。" }, publishedOn
    },
    {
      id: "s-a2-107", level: "A2", title: "Mentioning Something You Intended to Bring", titleZh: "说明原本打算带某样东西",
      scene: "forgotten items", pattern: "I meant to bring _____.", zh: "我原本打算带_____。",
      hints: [{ en: "the spare key", zh: "备用钥匙" }, { en: "my reusable cup", zh: "我的环保杯" }, { en: "the receipt", zh: "收据" }],
      example: { en: "I meant to bring the spare key.", zh: "我原本打算带备用钥匙。" }, publishedOn
    },
    {
      id: "s-a2-108", level: "A2", title: "Saying You Did Not Notice Something at First", titleZh: "表示自己一开始没有注意到",
      scene: "noticing a problem later", pattern: "I didn't notice _____ at first.", zh: "我一开始没有注意到_____。",
      hints: [{ en: "the cold air", zh: "冷风" }, { en: "the loose handle", zh: "松动的把手" }, { en: "the small crack", zh: "小裂缝" }],
      example: { en: "I didn't notice the cold air at first.", zh: "我一开始没有注意到那股冷风。" }, publishedOn
    },
    {
      id: "s-a2-109", level: "A2", title: "Saying a Task Is Already Done", titleZh: "说明某件事已经处理好了",
      scene: "finishing a task", pattern: "I've already taken care of _____.", zh: "我已经处理好_____了。",
      hints: [{ en: "the front register", zh: "前台收银机" }, { en: "the trash", zh: "垃圾" }, { en: "tomorrow's delivery", zh: "明天的送货安排" }],
      example: { en: "I've already taken care of the front register.", zh: "我已经处理好前台收银机了。" }, publishedOn
    },
    {
      id: "s-a2-110", level: "A2", title: "Saying You Have Not Decided Yet", titleZh: "表示自己还没有决定",
      scene: "making a choice", pattern: "I haven't decided on _____ yet.", zh: "我还没有决定要选_____。",
      hints: [{ en: "a frame", zh: "镜框" }, { en: "a color", zh: "颜色" }, { en: "the thinner lenses", zh: "较薄的镜片" }],
      example: { en: "I haven't decided on a frame yet.", zh: "我还没有决定要选哪副镜框。" }, publishedOn
    },
    {
      id: "s-b1-107", level: "B1", title: "Expressing Relief after Learning the Cause", titleZh: "得知原因后表达安心",
      scene: "learning reassuring news", pattern: "I was relieved to find out that _____.", zh: "得知_____以后，我松了一口气。",
      hints: [{ en: "the wall was not leaking", zh: "墙壁没有漏水" }, { en: "the file had been backed up", zh: "档案已经备份" }, { en: "no one was hurt", zh: "没有人受伤" }],
      example: { en: "I was relieved to find out that the wall was not leaking.", zh: "得知墙壁没有漏水以后，我松了一口气。" }, publishedOn
    },
    {
      id: "s-b1-108", level: "B1", title: "Suggesting a Safer First Step", titleZh: "建议先采取更安全的做法",
      scene: "preventing a safety problem", pattern: "It might be safer to _____ first.", zh: "先_____可能会比较安全。",
      hints: [{ en: "let it thaw in the fridge", zh: "让它在冰箱里解冻" }, { en: "turn off the power", zh: "关闭电源" }, { en: "move the glass away", zh: "把玻璃杯移开" }],
      example: { en: "It might be safer to let it thaw in the fridge first.", zh: "先让它在冰箱里解冻可能会比较安全。" }, publishedOn
    },
    {
      id: "s-b1-109", level: "B1", title: "Explaining What You Would Have Done", titleZh: "说明在另一种情况下会怎么做",
      scene: "a different decision in hindsight", pattern: "I would have _____ if _____.", zh: "如果_____，我本来会_____。",
      hints: [{ en: "rented a smaller van / I'd known about the height limit", zh: "租一辆较小的货车／我早知道限高" }, { en: "left earlier / I'd expected traffic", zh: "早点出发／我预料到会塞车" }, { en: "brought cash / I'd known the café did not take cards", zh: "带现金／我早知道咖啡店不收卡" }],
      example: { en: "I would have rented a smaller van if I'd known about the height limit.", zh: "如果我早知道限高，我本来会租一辆较小的货车。" }, publishedOn
    },
    {
      id: "s-b1-110", level: "B1", title: "Preferring to Wait for the Right Time", titleZh: "表示宁愿等到适当时机",
      scene: "waiting before the next step", pattern: "I'd rather wait until _____.", zh: "我宁愿等到_____。",
      hints: [{ en: "the paint is completely dry", zh: "油漆完全干了" }, { en: "the rain slows down", zh: "雨势变小" }, { en: "we have all the details", zh: "我们掌握所有细节" }],
      example: { en: "I'd rather wait until the paint is completely dry.", zh: "我宁愿等到油漆完全干了。" }, publishedOn
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
      id: "a1-badminton-wrong-shoes", level: "A1", linkedSentence: "s-a1-107",
      title: "Bringing the Wrong Shoes to a Badminton Court", titleZh: "到羽毛球场才发现带错鞋", scene: "community badminton court",
      goal: "A player asks a court attendant for a practical solution after bringing outdoor shoes.", goalZh: "球友发现自己带了户外鞋，请球场工作人员协助解决。",
      roles: [["A", "A player who brought the wrong shoes", "带错鞋子的球友"], ["B", "A court attendant who manages rental gear", "管理租借用品的球场工作人员"]],
      lines: [
        ["A", "I brought the wrong shoes.", "我带错鞋子了。", "I brought the wrong _____.", "我带错_____了。"],
        ["B", "Are those your outdoor shoes?", "那双是你的户外鞋吗？", "Are those your _____ shoes?", "那双是你的_____鞋吗？"],
        ["A", "Yes. My court shoes are at home.", "是的。我的球场鞋放在家里。"],
        ["B", "What size do you wear?", "你穿几号？", "What _____ do you wear?", "你穿几_____？"],
        ["A", "I wear a size eight.", "我穿八号。"],
        ["B", "We have rental shoes behind the desk.", "柜台后面有可以租的鞋。"],
        ["A", "Can I rent them for one hour?", "我可以租一个小时吗？", "Can I rent them for _____?", "我可以租_____吗？"],
        ["B", "Yes. Please wear clean socks with them.", "可以。请穿干净的袜子。"],
        ["A", "No problem. I have an extra pair in my bag.", "没问题。我的袋子里有一双备用袜子。"],
        ["B", "Bring the shoes back to this desk after your game.", "打完球后把鞋拿回这个柜台。", "Bring the shoes back to _____ after your game.", "打完球后把鞋拿回_____。"]
      ],
      groups: [
        ["Wrong item", [["shoes", "鞋子"], ["shirt", "上衣"], ["racket", "球拍"]]],
        ["Shoe type", [["outdoor", "户外"], ["running", "跑步"], ["casual", "休闲"]]],
        ["Size", [["size", "号码"], ["shoe size", "鞋号"], ["fit", "尺寸"]]],
        ["Rental time", [["one hour", "一小时"], ["this game", "这场球"], ["the afternoon", "整个下午"]]],
        ["Return place", [["this desk", "这个柜台"], ["the rental counter", "租借柜台"], ["the front office", "前台办公室"]]]
      ]
    }),
    makeDialogue({
      id: "a1-museum-backpack-check", level: "A1", linkedSentence: "s-a1-108",
      title: "Leaving a Backpack at a Museum Coat Check", titleZh: "把背包寄放在博物馆寄物处", scene: "museum coat check",
      goal: "A visitor stores a large backpack before entering an exhibition.", goalZh: "访客进入展厅前，把大型背包寄放在寄物处。",
      roles: [["A", "A museum visitor carrying a large backpack", "背着大型背包的博物馆访客"], ["B", "A coat-check attendant storing visitors' belongings", "保管访客物品的寄物处工作人员"]],
      lines: [
        ["A", "Can I leave my backpack here?", "我可以把背包放在这里吗？", "Can I leave _____ here?", "我可以把_____放在这里吗？"],
        ["B", "Yes. Large bags cannot go into the exhibition.", "可以。大型袋子不能带进展厅。", "Large _____ cannot go into the exhibition.", "大型_____不能带进展厅。"],
        ["A", "Do I need to take out my wallet?", "我需要把钱包拿出来吗？"],
        ["B", "Please keep your wallet and phone with you.", "请把钱包和手机带在身上。", "Please keep your _____ with you.", "请把_____带在身上。"],
        ["A", "Can I put my jacket in the same locker?", "我可以把外套放进同一个寄物柜吗？", "Can I put _____ in the same locker?", "我可以把_____放进同一个寄物柜吗？"],
        ["B", "Yes. I'll give you one claim tag for both items.", "可以。两样物品我会给你一张领取牌。"],
        ["A", "Is there a fee?", "需要付费吗？"],
        ["B", "No. Just show this tag when you come back.", "不用。回来时出示这张领取牌就好。", "Show this _____ when you come back.", "回来时出示这张_____就好。"],
        ["A", "Great. The museum closes at six, right?", "太好了。博物馆六点关门，对吗？"],
        ["B", "That's right. Please collect your things before then.", "没错。请在那之前取回物品。"]
      ],
      groups: [
        ["Item", [["my backpack", "我的背包"], ["this suitcase", "这个行李箱"], ["my shopping bag", "我的购物袋"]]],
        ["Large item", [["bags", "袋子"], ["backpacks", "背包"], ["umbrellas", "雨伞"]]],
        ["Keep with you", [["wallet and phone", "钱包和手机"], ["passport", "护照"], ["camera", "相机"]]],
        ["Same locker", [["my jacket", "我的外套"], ["this scarf", "这条围巾"], ["my umbrella", "我的雨伞"]]],
        ["Claim item", [["tag", "领取牌"], ["ticket", "领取券"], ["number", "号码牌"]]]
      ]
    }),
    makeDialogue({
      id: "a1-rideshare-north-entrance", level: "A1", linkedSentence: "s-a1-109",
      title: "Finding a Rideshare at the Right Entrance", titleZh: "在正确入口找到叫车司机", scene: "rideshare pickup",
      goal: "A passenger and driver use simple landmarks to find each other outside a busy building.", goalZh: "乘客与司机利用简单地标，在繁忙大楼外找到彼此。",
      roles: [["A", "A passenger leaving a busy building", "正要离开繁忙大楼的乘客"], ["B", "A rideshare driver waiting nearby", "正在附近等候的叫车司机"]],
      lines: [
        ["A", "I'm waiting outside the north entrance.", "我正在北门外面等。", "I'm waiting outside _____.", "我正在_____外面等。"],
        ["B", "I'm near the west entrance right now.", "我现在在西门附近。", "I'm near the _____ entrance right now.", "我现在在_____门附近。"],
        ["A", "The north entrance has a red sign above it.", "北门上方有一个红色标志。"],
        ["B", "What color is your jacket?", "你的外套是什么颜色？", "What color is your _____?", "你的_____是什么颜色？"],
        ["A", "It's green, and I'm holding a paper bag.", "是绿色的，而且我拿着一个纸袋。"],
        ["B", "I see the red sign, but the curb is full.", "我看到红色标志了，但路边停满了车。", "The _____ is full.", "_____停满了车。"],
        ["A", "I can walk to the corner by the bank.", "我可以走到银行旁边的街角。", "I can walk to _____.", "我可以走到_____。"],
        ["B", "Good. I'll stop beside the blue mailbox.", "好。我会停在蓝色邮筒旁边。"],
        ["A", "I can see your car now.", "我现在看到你的车了。"],
        ["B", "Great. Turn left at the corner and I'm right there.", "太好了。在街角左转，我就在那边。"]
      ],
      groups: [
        ["Waiting place", [["the north entrance", "北门"], ["the main entrance", "正门"], ["your building", "你住的大楼"]]],
        ["Entrance", [["west", "西"], ["south", "南"], ["main", "正"]]],
        ["Clothing", [["jacket", "外套"], ["shirt", "上衣"], ["hat", "帽子"]]],
        ["Busy area", [["curb", "路边"], ["pickup area", "上车区"], ["front lane", "前方车道"]]],
        ["Meeting point", [["the corner by the bank", "银行旁边的街角"], ["the bus stop", "公车站"], ["the blue mailbox", "蓝色邮筒"]]]
      ]
    }),
    makeDialogue({
      id: "a1-storm-emergency-supplies", level: "A1", linkedSentence: "s-a1-110",
      title: "Checking Emergency Supplies before a Storm", titleZh: "暴风雨前检查紧急用品", scene: "apartment emergency preparation",
      goal: "Two neighbors check basic supplies before strong wind and rain arrive.", goalZh: "两位邻居在强风豪雨来临前检查基本紧急用品。",
      roles: [["A", "A resident checking the shared emergency box", "正在检查共用紧急箱的住户"], ["B", "A neighbor helping prepare the apartment floor", "协助楼层准备的邻居"]],
      lines: [
        ["A", "We still need more water.", "我们还需要更多水。", "We still need _____.", "我们还需要_____。"],
        ["B", "I can buy two packs of batteries too.", "我也可以买两盒电池。", "I can buy two packs of _____.", "我也可以买两盒_____。"],
        ["A", "Good. The emergency radio works, but the flashlight is weak.", "好。紧急收音机能用，但手电筒的光很弱。"],
        ["B", "Do we have enough drinking water for everyone?", "我们的饮用水够大家使用吗？", "Do we have enough _____ for everyone?", "我们的_____够大家使用吗？"],
        ["A", "We have six bottles in the storage room.", "储藏室里有六瓶。"],
        ["B", "I'll bring four more from the store.", "我会再从商店带四瓶回来。"],
        ["A", "Please put a flashlight near the stairs.", "请在楼梯附近放一支手电筒。", "Please put _____ near the stairs.", "请在楼梯附近放_____。"],
        ["B", "Okay. I'll also close the hallway windows.", "好。我也会把走廊窗户关起来。"],
        ["A", "Let's charge our phones before the rain starts.", "我们在下雨前先把手机充好电吧。"],
        ["B", "I'll charge the power bank as well.", "我也会把行动电源充好电。", "I'll charge _____ as well.", "我也会把_____充好电。"]
      ],
      groups: [
        ["Needed supply", [["more water", "更多水"], ["some batteries", "一些电池"], ["a first-aid kit", "一个急救箱"]]],
        ["Battery item", [["batteries", "电池"], ["candles", "蜡烛"], ["matches", "火柴"]]],
        ["Shared supply", [["drinking water", "饮用水"], ["food", "食物"], ["flashlights", "手电筒"]]],
        ["Safety item", [["a flashlight", "一支手电筒"], ["the emergency box", "紧急箱"], ["a lantern", "一盏提灯"]]],
        ["Charge", [["the power bank", "行动电源"], ["the spare phone", "备用手机"], ["the radio", "收音机"]]]
      ]
    }),
    makeDialogue({
      id: "a2-locksmith-spare-key", level: "A2", linkedSentence: "s-a2-107",
      title: "Having a Spare Key Copied", titleZh: "请锁匠复制备用钥匙", scene: "locksmith counter",
      goal: "A customer discusses how to copy a key after leaving the original at home.", goalZh: "顾客忘了带原钥匙，与锁匠讨论如何完成复制。",
      roles: [["A", "A customer who wants an extra apartment key", "想多配一把住家钥匙的顾客"], ["B", "A locksmith checking what kind of key is needed", "确认钥匙类型的锁匠"]],
      lines: [
        ["A", "I meant to bring the spare key.", "我原本打算带备用钥匙。", "I meant to bring _____.", "我原本打算带_____。"],
        ["B", "Is it a regular key or a security key?", "那是一般钥匙还是防盗钥匙？", "Is it a _____ key?", "那是_____钥匙吗？"],
        ["A", "It's a regular apartment key.", "是一把一般的公寓钥匙。"],
        ["B", "I need the original key to make an accurate copy.", "我需要原钥匙，才能复制得准确。", "I need _____ to make an accurate copy.", "我需要_____，才能复制得准确。"],
        ["A", "I can go home and bring it this afternoon.", "我可以回家，下午再带过来。"],
        ["B", "That works. Copying it takes about five minutes.", "可以。复制大约需要五分钟。"],
        ["A", "Can we test the new key before I pay?", "付款前我们可以先测试新钥匙吗？", "Can we test _____ before I pay?", "付款前我们可以先测试_____吗？"],
        ["B", "Yes. Bring the lock number if your building has a test lock.", "可以。如果大楼有测试锁，请带锁具编号。", "Bring _____ if your building has a test lock.", "如果大楼有测试锁，请带_____。"],
        ["A", "I'll ask the manager for the number.", "我会向管理员索取编号。"],
        ["B", "Good. Then we can make sure the copy turns smoothly.", "好。这样我们就能确定复制的钥匙能顺利转动。"]
      ],
      groups: [
        ["Forgotten item", [["the spare key", "备用钥匙"], ["the original key", "原钥匙"], ["the lock number", "锁具编号"]]],
        ["Key type", [["regular", "一般"], ["security", "防盗"], ["mailbox", "信箱"]]],
        ["Needed item", [["the original key", "原钥匙"], ["a clear key", "一把没有弯曲的钥匙"], ["the key code", "钥匙编码"]]],
        ["Test item", [["the new key", "新钥匙"], ["the copy", "复制的钥匙"], ["both keys", "两把钥匙"]]],
        ["Building detail", [["the lock number", "锁具编号"], ["the manager's note", "管理员的说明"], ["the key code", "钥匙编码"]]]
      ]
    }),
    makeDialogue({
      id: "a2-window-cold-draft", level: "A2", linkedSentence: "s-a2-108",
      title: "Finding Cold Air around a Bedroom Window", titleZh: "发现卧室窗户边有冷风", scene: "apartment window inspection",
      goal: "A tenant shows a building technician where cold air is entering the room.", goalZh: "住户向大楼维修人员指出冷风进入房间的位置。",
      roles: [["A", "A tenant who feels cold air near a window", "发现窗边有冷风的住户"], ["B", "A building technician inspecting the window", "检查窗户的大楼维修人员"]],
      lines: [
        ["A", "I didn't notice the cold air at first.", "我一开始没有注意到那股冷风。", "I didn't notice _____ at first.", "我一开始没有注意到_____。"],
        ["B", "Where do you feel the draft most clearly?", "你在哪里最明显感觉到漏风？", "Where do you feel _____ most clearly?", "你在哪里最明显感觉到_____？"],
        ["A", "Mostly along the bottom of this window.", "主要是在这扇窗户的底部。"],
        ["B", "The rubber seal has come loose in one corner.", "橡胶密封条有一角松脱了。", "The _____ has come loose in one corner.", "_____有一角松脱了。"],
        ["A", "It felt colder during the strong wind last night.", "昨晚风很大时，感觉更冷。", "It felt colder during _____.", "_____时，感觉更冷。"],
        ["B", "That makes sense. The wind is pushing air through the gap.", "这就说得通了。风从缝隙把空气吹进来。"],
        ["A", "Does the whole window need to be replaced?", "整扇窗户都需要更换吗？"],
        ["B", "No. It should close tightly after I replace the seal.", "不用。我更换密封条后，窗户应该就能关紧。", "It should close tightly after I replace _____.", "我更换_____后，窗户应该就能关紧。"],
        ["A", "Great. Please let me know if you find any water damage.", "太好了。如果发现水损，请告诉我。"],
        ["B", "I will. So far, the wall looks dry.", "我会的。目前墙面看起来是干的。"]
      ],
      groups: [
        ["Late discovery", [["the cold air", "冷风"], ["the loose handle", "松动的把手"], ["the small gap", "小缝隙"]]],
        ["Problem", [["the draft", "漏风"], ["the cold air", "冷风"], ["the vibration", "震动"]]],
        ["Window part", [["rubber seal", "橡胶密封条"], ["lower hinge", "下方铰链"], ["window latch", "窗扣"]]],
        ["Weather", [["the strong wind last night", "昨晚的强风"], ["the rain", "下雨"], ["the cold morning", "寒冷的早晨"]]],
        ["Repair", [["the seal", "密封条"], ["the latch", "窗扣"], ["the lower hinge", "下方铰链"]]]
      ]
    }),
    makeDialogue({
      id: "a2-bookstore-closing-tasks", level: "A2", linkedSentence: "s-a2-109",
      title: "Finishing Closing Tasks at a Bookstore", titleZh: "完成书店打烊工作", scene: "bookstore closing shift",
      goal: "Two bookstore employees divide the remaining tasks before locking up.", goalZh: "两位书店员工在锁门前分配剩余的打烊工作。",
      roles: [["A", "A bookstore employee finishing the front area", "正在整理前区的书店员工"], ["B", "A shift supervisor checking the closing list", "检查打烊清单的值班主管"]],
      lines: [
        ["A", "I've already taken care of the front register.", "我已经处理好前台收银机了。", "I've already taken care of _____.", "我已经处理好_____了。"],
        ["B", "Could you bring the return cart to the back room?", "你可以把还书推车送到后面的房间吗？", "Could you bring _____ to the back room?", "你可以把_____送到后面的房间吗？"],
        ["A", "Sure. The books on it are already sorted.", "可以。上面的书已经分好类了。"],
        ["B", "I'll check the lights in the reading area.", "我会检查阅读区的灯。", "I'll check _____ in the reading area.", "我会检查阅读区的_____。"],
        ["A", "Do I need to empty the small trash can too?", "我也需要清空那个小垃圾桶吗？", "Do I need to empty _____ too?", "我也需要清空_____吗？"],
        ["B", "Yes, please. The cleaning crew comes tomorrow morning.", "需要，麻烦你。清洁人员明天早上会来。"],
        ["A", "The front doors are locked, and no customers are inside.", "前门已经锁上，店里也没有顾客了。"],
        ["B", "I'll set the alarm after we leave through the side door.", "我们从侧门离开后，我会设定警报。", "I'll set _____ after we leave.", "我们离开后，我会设定_____。"],
        ["A", "I'll be ready in two minutes.", "我两分钟后就会准备好。"],
        ["B", "Good. I'll wait by the staff entrance.", "好。我会在员工入口等你。"]
      ],
      groups: [
        ["Completed task", [["the front register", "前台收银机"], ["the online orders", "线上订单"], ["the front display", "前方陈列区"]]],
        ["Move to the back", [["the return cart", "还书推车"], ["these boxes", "这些箱子"], ["the step ladder", "折梯"]]],
        ["Check", [["the lights", "灯"], ["the windows", "窗户"], ["the tables", "桌子"]]],
        ["Empty", [["the small trash can", "小垃圾桶"], ["the paper bin", "废纸箱"], ["the recycling box", "回收箱"]]],
        ["Security", [["the alarm", "警报"], ["the door code", "门禁密码"], ["the night lock", "夜间门锁"]]]
      ]
    }),
    makeDialogue({
      id: "a2-optician-frame-choice", level: "A2", linkedSentence: "s-a2-110",
      title: "Choosing Frames at an Optical Shop", titleZh: "在眼镜店挑选镜框", scene: "optical shop",
      goal: "A customer compares comfortable frames with help from an optician.", goalZh: "顾客在验光师协助下比较戴起来舒适的镜框。",
      roles: [["A", "A customer choosing new glasses", "正在挑选新眼镜的顾客"], ["B", "An optician helping with fit and lenses", "协助调整尺寸与镜片的验光师"]],
      lines: [
        ["A", "I haven't decided on a frame yet.", "我还没有决定要选哪副镜框。", "I haven't decided on _____ yet.", "我还没有决定要选_____。"],
        ["B", "Would you like something light or something more solid?", "你想要轻一点的，还是更结实的？", "Would you like something _____?", "你想要_____的？"],
        ["A", "I'd like a light frame for everyday use.", "我想要一副适合每天戴的轻型镜框。"],
        ["B", "These two styles fit the width of your face well.", "这两种款式都很适合你的脸宽。", "These two styles fit _____ well.", "这两种款式都很适合_____。"],
        ["A", "This one feels lighter behind my ears.", "这一副在耳后感觉比较轻。", "This one feels _____ behind my ears.", "这一副在耳后感觉_____。"],
        ["B", "The nose pads can also be adjusted.", "鼻垫也可以调整。"],
        ["A", "Can I wear it for a few minutes before choosing?", "决定前我可以先戴几分钟吗？"],
        ["B", "Of course. I'll also check which lenses fit this frame.", "当然可以。我也会确认哪种镜片适合这副镜框。", "I'll also check which _____ fit this frame.", "我也会确认哪种_____适合这副镜框。"],
        ["A", "That would help. I want them to be comfortable all day.", "那会很有帮助。我希望它们戴一整天都舒服。"],
        ["B", "Take your time. Comfort matters more than choosing quickly.", "慢慢来。舒适比很快做决定更重要。"]
      ],
      groups: [
        ["Choice", [["a frame", "镜框"], ["a color", "颜色"], ["the thinner lenses", "较薄的镜片"]]],
        ["Preference", [["light", "轻巧的"], ["more solid", "更结实的"], ["simple", "简单的"]]],
        ["Fit", [["the width of your face", "你的脸宽"], ["your nose", "你的鼻梁"], ["the area behind your ears", "耳后位置"]]],
        ["Comfort", [["lighter", "比较轻"], ["more comfortable", "比较舒服"], ["less tight", "比较不紧"]]],
        ["Lens option", [["lenses", "镜片"], ["thinner lenses", "较薄的镜片"], ["reading lenses", "阅读镜片"]]]
      ]
    }),
    makeDialogue({
      id: "b1-window-condensation-check", level: "B1", linkedSentence: "s-b1-107",
      title: "Checking Dampness below a Bedroom Window", titleZh: "检查卧室窗户下方的潮气", scene: "home moisture inspection",
      goal: "A tenant and plumber distinguish condensation from a hidden pipe leak.", goalZh: "住户与水管技师判断潮气来自冷凝水还是隐藏水管漏水。",
      roles: [["A", "A tenant worried about a damp wall", "担心墙面潮湿的住户"], ["B", "A plumber checking the source of the moisture", "检查水气来源的水管技师"]],
      lines: [
        ["A", "I was relieved to find out that the wall was not leaking.", "得知墙壁没有漏水以后，我松了一口气。", "I was relieved to find out that _____.", "得知_____以后，我松了一口气。"],
        ["B", "The moisture is coming from condensation around the window.", "这些水气来自窗户周围的冷凝水。", "The moisture is coming from _____.", "这些水气来自_____。"],
        ["A", "I was worried about a pipe behind the wall.", "我原本担心墙后有水管漏水。"],
        ["B", "The meter did not detect moisture inside the wall.", "仪器没有检测到墙内有水分。", "The meter did not detect _____ inside the wall.", "仪器没有检测到墙内有_____。"],
        ["A", "Is the dark mark serious?", "那块深色痕迹严重吗？", "Is _____ serious?", "_____严重吗？"],
        ["B", "It is only on the surface, so it can be cleaned safely.", "它只在表面，所以可以安全清理。"],
        ["A", "How can I stop it from coming back?", "我要怎么避免它再次出现？"],
        ["B", "Run the bathroom fan and open the window for a few minutes each morning.", "每天早上开浴室排风扇，并开窗几分钟。", "Run _____ and open the window each morning.", "每天早上开_____，并把窗户打开。"],
        ["A", "I'll also move the curtain away from the glass.", "我也会把窗帘移开，不让它贴着玻璃。"],
        ["B", "That should improve the airflow and keep the area drier.", "这样应该能改善空气流动，让那个区域更干燥。"]
      ],
      groups: [
        ["Relief", [["the wall was not leaking", "墙壁没有漏水"], ["the pipe was fine", "水管没问题"], ["the damage was only on the surface", "损坏只在表面"]]],
        ["Source", [["condensation around the window", "窗户周围的冷凝水"], ["the wet window frame", "潮湿的窗框"], ["the bathroom steam", "浴室蒸气"]]],
        ["Test result", [["moisture", "水分"], ["a hidden leak", "隐藏漏水"], ["damage", "损坏"]]],
        ["Concern", [["the dark mark", "深色痕迹"], ["the damp paint", "潮湿的油漆"], ["the smell", "气味"]]],
        ["Ventilation", [["the bathroom fan", "浴室排风扇"], ["the exhaust fan", "排风扇"], ["a small dehumidifier", "小型除湿机"]]]
      ]
    }),
    makeDialogue({
      id: "b1-community-kitchen-thawing", level: "B1", linkedSentence: "s-b1-108",
      title: "Thawing Chicken Safely for a Community Meal", titleZh: "为社区餐会安全解冻鸡肉", scene: "community kitchen",
      goal: "A new volunteer and kitchen lead adjust the food-preparation plan to keep it safe.", goalZh: "新志愿者与厨房负责人调整备餐方式，以确保食品安全。",
      roles: [["A", "A kitchen lead responsible for food safety", "负责食品安全的厨房负责人"], ["B", "A new volunteer preparing chicken for lunch", "正在准备午餐鸡肉的新志愿者"]],
      lines: [
        ["A", "It might be safer to let the chicken thaw in the fridge first.", "先让鸡肉在冰箱里解冻可能会比较安全。", "It might be safer to _____ first.", "先_____可能会比较安全。"],
        ["B", "Wouldn't it thaw faster on the counter?", "放在流理台上不是会解冻得更快吗？", "Wouldn't it thaw faster _____?", "放在_____不是会解冻得更快吗？"],
        ["A", "It would, but the outside could get too warm before the center thaws.", "会，但中心解冻前，外层可能会变得太温暖。"],
        ["B", "How long will it need in the fridge?", "它需要在冰箱里放多久？", "How long will it need _____?", "它需要在_____放多久？"],
        ["A", "These pieces should be ready by tomorrow morning.", "这些鸡肉块明天早上应该就会准备好。"],
        ["B", "Then we can cook them before the lunch service.", "那我们可以在午餐供应前把它们煮熟。"],
        ["A", "Please place the tray on the bottom shelf.", "请把托盘放在最下层。", "Please place _____ on the bottom shelf.", "请把_____放在最下层。"],
        ["B", "That will keep any liquid away from the vegetables.", "这样能让流出的液体远离蔬菜。"],
        ["A", "Exactly. Use the red cutting board when we prepare it tomorrow.", "没错。明天处理时请使用红色砧板。"],
        ["B", "I'll label the tray with tomorrow's date now.", "我现在会在托盘上标示明天的日期。", "I'll label the tray with _____ now.", "我现在会在托盘上标示_____。"]
      ],
      groups: [
        ["Safer step", [["let the chicken thaw in the fridge", "让鸡肉在冰箱里解冻"], ["move the meat to the lower shelf", "把肉移到下层"], ["use a clean tray", "使用干净托盘"]]],
        ["Thawing place", [["on the counter", "流理台上"], ["in warm water", "温水里"], ["by the sink", "水槽旁"]]],
        ["Cold place", [["in the fridge", "冰箱里"], ["on the bottom shelf", "最下层"], ["in the cold room", "冷藏室里"]]],
        ["Food container", [["the tray", "托盘"], ["the sealed container", "密封容器"], ["the wrapped package", "包好的包装"]]],
        ["Label", [["tomorrow's date", "明天的日期"], ["the cooking time", "烹煮时间"], ["the meal name", "餐点名称"]]]
      ]
    }),
    makeDialogue({
      id: "b1-moving-van-height-limit", level: "B1", linkedSentence: "s-b1-109",
      title: "Changing a Moving Van after Seeing the Height Limit", titleZh: "看到限高后更换搬家货车", scene: "moving van rental",
      goal: "A renter and rental agent find a workable van after the first vehicle proves too tall.", goalZh: "租车人与租赁人员发现原车辆过高后，改用合适的搬家货车。",
      roles: [["A", "A renter moving boxes into an apartment", "要把纸箱搬进公寓的租车人"], ["B", "A rental agent helping change the vehicle", "协助更换车辆的租赁人员"]],
      lines: [
        ["A", "This van won't fit into my building's parking garage.", "这辆货车进不了我住的大楼停车场。", "This van won't fit into _____.", "这辆货车进不了_____。"],
        ["B", "What is the garage height limit?", "停车场限高是多少？", "What is the _____ height limit?", "_____限高是多少？"],
        ["A", "It's two point one meters.", "是二点一公尺。", "It's _____ meters.", "是_____公尺。"],
        ["B", "This van is two point three meters tall.", "这辆货车高二点三公尺。", "This van is _____ meters tall.", "这辆货车高_____公尺。"],
        ["A", "I would have rented a smaller van if I'd known about the height limit.", "如果我早知道限高，我本来会租一辆较小的货车。", "I would have _____ if _____.", "如果_____，我本来会_____。"],
        ["B", "We have a lower van available in about twenty minutes.", "大约二十分钟后会有一辆较低的货车可用。"],
        ["A", "Will it still hold all twelve boxes and the small desk?", "它还是装得下十二个箱子和小书桌吗？"],
        ["B", "Yes, but you may need to place the desk on its side.", "可以，但你可能需要把书桌侧放。"],
        ["A", "That's fine. I'd rather make two trips than damage the garage entrance.", "没问题。我宁愿跑两趟，也不要撞坏停车场入口。"],
        ["B", "I'll switch the booking and keep the same rental rate.", "我会更改预订，并维持相同租金。"]
      ],
      groups: [
        ["Garage", [["my building's parking garage", "我住的大楼停车场"], ["the underground garage", "地下停车场"], ["the loading entrance", "装卸入口"]]],
        ["Limit", [["garage", "停车场"], ["entrance", "入口"], ["doorway", "门口"]]],
        ["Height", [["two point one", "二点一"], ["two", "二"], ["one point nine", "一点九"]]],
        ["Vehicle height", [["two point three", "二点三"], ["two point two", "二点二"], ["two point four", "二点四"]]],
        ["Different choice", [["rented a smaller van / I'd known about the height limit", "租较小的货车／我早知道限高"], ["booked the lower model / I'd checked the garage", "预订较低车型／我检查过停车场"], ["used two cars / I'd measured the entrance", "使用两辆车／我量过入口"]]]
      ]
    }),
    makeDialogue({
      id: "b1-apartment-paint-drying", level: "B1", linkedSentence: "s-b1-110",
      title: "Waiting before Moving Furniture onto Fresh Paint", titleZh: "等新油漆干透再把家具移回去", scene: "apartment painting",
      goal: "A resident and painter plan when to return furniture without marking the fresh wall.", goalZh: "住户与油漆工安排家具归位时间，避免在新墙面留下痕迹。",
      roles: [["A", "A resident deciding when to move furniture back", "决定何时把家具移回去的住户"], ["B", "A painter explaining the drying time", "说明干燥时间的油漆工"]],
      lines: [
        ["A", "I'd rather wait until the paint is completely dry.", "我宁愿等到油漆完全干了。", "I'd rather wait until _____.", "我宁愿等到_____。"],
        ["B", "The surface will feel dry in about two hours.", "表面大约两小时后会摸起来干燥。", "The surface will feel dry in about _____.", "表面大约_____后会摸起来干燥。"],
        ["A", "The smell is still fairly strong in this room.", "这个房间里的气味还是很浓。"],
        ["B", "The humid weather is slowing the drying time today.", "今天湿度高，所以干燥时间变慢了。", "The _____ is slowing the drying time today.", "今天_____，所以干燥时间变慢了。"],
        ["A", "When can the bookcase go back against the wall?", "书柜什么时候可以移回墙边？"],
        ["B", "Tomorrow morning would be safer for heavy furniture.", "重型家具等到明天早上再移回去会比较安全。"],
        ["A", "Should I keep the window open overnight?", "我应该让窗户整晚开着吗？", "Should I keep _____ open overnight?", "我应该让_____整晚开着吗？"],
        ["B", "Leave it slightly open, but keep the screen closed.", "留一条小缝就好，但纱窗要关着。"],
        ["A", "I'll keep the cat out of the room until morning.", "我会让猫到明天早上前都不要进这个房间。"],
        ["B", "Good idea. I'll leave the door sign up as a reminder.", "好主意。我会把门上的提醒牌继续留着。", "I'll leave _____ up as a reminder.", "我会把_____继续留着作为提醒。"]
      ],
      groups: [
        ["Wait until", [["the paint is completely dry", "油漆完全干了"], ["tomorrow morning", "明天早上"], ["the smell is gone", "气味散去"]]],
        ["Drying time", [["two hours", "两小时"], ["three hours", "三小时"], ["the end of the day", "今天结束前"]]],
        ["Weather factor", [["humid weather", "潮湿天气"], ["cool air", "冷空气"], ["lack of airflow", "空气不流通"]]],
        ["Ventilation", [["the window", "窗户"], ["the door", "门"], ["the balcony door", "阳台门"]]],
        ["Reminder", [["the door sign", "门上的提醒牌"], ["the tape", "胶带"], ["the warning note", "警示纸条"]]]
      ]
    })
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.dialogues.push(...newDialogues);
  catalog.version = "1024_today_1";

  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1024_today_1";
})();
