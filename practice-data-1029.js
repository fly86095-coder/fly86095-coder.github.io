(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1028_today_1") {
    throw new Error("1029 practice patch requires PRACTICE_CATALOG 1028_today_1");
  }

  const publishedOn = "2026-10-29";

  const newSentences = [
    {
      id: "s-a1-119", level: "A1", title: "Saying Something Will Not Come Off", titleZh: "说明某样东西取不下来",
      scene: "opening or removing something", pattern: "The _____ won't come off.", zh: "_____取不下来。",
      hints: [{ en: "lid", zh: "盖子" }, { en: "cap", zh: "瓶盖" }, { en: "sticker", zh: "贴纸" }],
      example: { en: "The lid won't come off.", zh: "这个盖子取不下来。" }, publishedOn
    },
    {
      id: "s-a1-120", level: "A1", title: "Asking People to Keep an Area Open", titleZh: "请别人保持通道畅通",
      scene: "keeping a shared area open", pattern: "Please keep _____ clear.", zh: "请保持_____畅通。",
      hints: [{ en: "the hallway", zh: "走廊" }, { en: "the doorway", zh: "门口" }, { en: "this path", zh: "这条通道" }],
      example: { en: "Please keep the hallway clear.", zh: "请保持走廊畅通。" }, publishedOn
    },
    {
      id: "s-a1-121", level: "A1", title: "Asking for a Clean Item", titleZh: "需要一件干净用品",
      scene: "cleaning up a small spill", pattern: "I need a clean _____ for this.", zh: "我需要一个干净的_____来处理这个。",
      hints: [{ en: "cloth", zh: "抹布" }, { en: "towel", zh: "毛巾" }, { en: "sponge", zh: "海绵" }],
      example: { en: "I need a clean cloth for this.", zh: "我需要一块干净的抹布来处理这个。" }, publishedOn
    },
    {
      id: "s-a1-122", level: "A1", title: "Saying Two People Are Needed", titleZh: "说明某样东西需要两个人搬",
      scene: "moving a heavy object safely", pattern: "This _____ needs two people.", zh: "这个_____需要两个人搬。",
      hints: [{ en: "box", zh: "箱子" }, { en: "table", zh: "桌子" }, { en: "plant", zh: "盆栽" }],
      example: { en: "This box needs two people.", zh: "这个箱子需要两个人搬。" }, publishedOn
    },
    {
      id: "s-a2-119", level: "A2", title: "Explaining That You Used the Wrong Item", titleZh: "说明自己误用了另一件物品",
      scene: "using two similar items by mistake", pattern: "I used _____ instead of _____.", zh: "我用了_____，而不是_____。",
      hints: [{ en: "the permanent marker / the dry-erase one", zh: "油性记号笔／白板笔" }, { en: "salt / sugar", zh: "盐／糖" }, { en: "the old key / the new one", zh: "旧钥匙／新钥匙" }],
      example: { en: "I used the permanent marker instead of the dry-erase one.", zh: "我用了油性记号笔，而不是白板笔。" }, publishedOn
    },
    {
      id: "s-a2-120", level: "A2", title: "Talking about Something You Have Not Seen for a While", titleZh: "谈论自己有段时间没见到的事物",
      scene: "revisiting a familiar place", pattern: "I haven't seen _____ since _____.", zh: "自从_____以后，我就没见过_____了。",
      hints: [{ en: "this riverside path / last spring", zh: "这条河边步道／去年春天" }, { en: "my old neighbor / she moved", zh: "以前的邻居／她搬家" }, { en: "the garden / winter", zh: "这个花园／冬天" }],
      example: { en: "I haven't seen this riverside path since last spring.", zh: "自从去年春天以后，我就没来看过这条河边步道了。" }, publishedOn
    },
    {
      id: "s-a2-121", level: "A2", title: "Saying You Are Happy about a Decision", titleZh: "表示自己庆幸做了某个决定",
      scene: "enjoying the result of a simple choice", pattern: "I'm glad we decided to _____.", zh: "我很高兴我们决定_____。",
      hints: [{ en: "come on a weekday", zh: "平日来" }, { en: "bring our own chairs", zh: "自己带椅子" }, { en: "walk instead of drive", zh: "走路而不是开车" }],
      example: { en: "I'm glad we decided to come on a weekday.", zh: "我很高兴我们决定平日来。" }, publishedOn
    },
    {
      id: "s-a2-122", level: "A2", title: "Describing a Routine with an Exception", titleZh: "说明日常习惯与例外情况",
      scene: "an everyday routine that changes when needed", pattern: "I usually _____ unless _____.", zh: "我通常会_____，除非_____。",
      hints: [{ en: "water the herbs / the soil is still damp", zh: "给香草浇水／土壤还是湿的" }, { en: "walk home / it is raining", zh: "走路回家／下雨" }, { en: "cook dinner / I work late", zh: "做晚餐／加班" }],
      example: { en: "I usually water the herbs unless the soil is still damp.", zh: "我通常会给香草浇水，除非土壤还是湿的。" }, publishedOn
    },
    {
      id: "s-b1-119", level: "B1", title: "Describing What Worked Surprisingly Well", titleZh: "说明出乎意料地有效的方法",
      scene: "reflecting on an approach that worked", pattern: "What worked better than I expected was _____.", zh: "比我预期更有效的是_____。",
      hints: [{ en: "introducing the dogs outside first", zh: "先让两只狗在户外见面" }, { en: "splitting the task into short steps", zh: "把任务分成短步骤" }, { en: "moving the meeting to the morning", zh: "把会议移到早上" }],
      example: { en: "What worked better than I expected was introducing the dogs outside first.", zh: "比我预期更有效的是先让两只狗在户外见面。" }, publishedOn
    },
    {
      id: "s-b1-120", level: "B1", title: "Explaining Why You Rejected an Option", titleZh: "说明自己为什么放弃某个选择",
      scene: "choosing a simpler or more sensible option", pattern: "I decided against _____ because _____.", zh: "我决定不_____，因为_____。",
      hints: [{ en: "replacing the whole zipper / the teeth were still fine", zh: "更换整条拉链／链齿还是好的" }, { en: "buying a new chair / the old one could be repaired", zh: "买新椅子／旧椅子还能修" }, { en: "driving there / parking was limited", zh: "开车去／停车位有限" }],
      example: { en: "I decided against replacing the whole zipper because the teeth were still fine.", zh: "我决定不更换整条拉链，因为链齿还是好的。" }, publishedOn
    },
    {
      id: "s-b1-121", level: "B1", title: "Choosing a Different Solution", titleZh: "说明自己为什么改用另一种做法",
      scene: "switching plans after a repeated attempt fails", pattern: "There was no point in _____, so I _____ instead.", zh: "继续_____没有意义，所以我改成_____。",
      hints: [{ en: "restarting the printer / sent the file to a copy shop", zh: "重新启动印表机／把档案送到影印店" }, { en: "waiting in the same line / used another entrance", zh: "继续排同一队／改走另一个入口" }, { en: "tightening the loose screw / replaced it", zh: "继续拧松动的螺丝／换掉它" }],
      example: { en: "There was no point in restarting the printer, so I sent the file to a copy shop instead.", zh: "继续重新启动印表机没有意义，所以我改把档案送到影印店。" }, publishedOn
    },
    {
      id: "s-b1-122", level: "B1", title: "Saying What You Would Do Differently", titleZh: "说明如果重来会采用的做法",
      scene: "learning from an everyday experience", pattern: "If I did it again, I'd _____.", zh: "如果再来一次，我会_____。",
      hints: [{ en: "take photos before moving anything", zh: "搬动东西前先拍照" }, { en: "measure the space first", zh: "先量好空间" }, { en: "leave more time for setup", zh: "预留更多布置时间" }],
      example: { en: "If I did it again, I'd take photos before moving anything.", zh: "如果再来一次，我会在搬动任何东西前先拍照。" }, publishedOn
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
      id: "a1-stuck-jar-lid", level: "A1", linkedSentence: "s-a1-119",
      title: "Opening a Jar with a Stuck Lid", titleZh: "打开盖子卡住的罐子", scene: "picnic table before lunch",
      goal: "Two friends open a jar carefully without dropping or breaking it.", goalZh: "两位朋友小心打开罐子，避免摔落或打破。",
      roles: [["A", "A friend holding a jar with a stuck lid", "拿着盖子卡住的罐子的朋友"], ["B", "A friend using a dry cloth for a better grip", "用干布增加摩擦力的朋友"]],
      lines: [
        ["A", "The lid won't come off.", "这个盖子取不下来。", "The _____ won't come off.", "这个_____取不下来。"],
        ["B", "Let me try with a dry cloth.", "让我用干布试试看。", "Let me try with _____.", "让我用_____试试看。"],
        ["A", "It moved a little that time.", "这次它动了一点。"],
        ["B", "Hold the jar steady, please.", "请把罐子拿稳。", "Hold _____ steady, please.", "请把_____拿稳。"],
        ["A", "Okay. Be careful with the glass.", "好。小心这个玻璃罐。"],
        ["B", "There, it's open now.", "好了，现在打开了。"],
        ["A", "Great. I was turning it the wrong way.", "太好了。我刚才转错方向了。", "I was turning it _____.", "我刚才往_____转了。"],
        ["B", "The edge was also a little sticky.", "盖子边缘也有点黏。"],
        ["A", "I'll wipe the lid before we close it.", "盖回去前，我会把盖子擦干净。", "I'll wipe _____ before we close it.", "盖回去前，我会把_____擦干净。"],
        ["B", "Good. It should open more easily next time.", "好。下次应该会更容易打开。"]
      ],
      groups: [
        ["Stuck part", [["lid", "盖子"], ["cap", "瓶盖"], ["sticker", "贴纸"]]],
        ["Grip", [["a dry cloth", "一块干布"], ["a towel", "一条毛巾"], ["rubber gloves", "橡胶手套"]]],
        ["Hold", [["the jar", "罐子"], ["the bottle", "瓶子"], ["the container", "容器"]]],
        ["Direction", [["the wrong way", "错误的方向"], ["to the right", "向右"], ["back and forth", "来回"]]],
        ["Clean", [["the lid", "盖子"], ["the edge", "边缘"], ["the glass", "玻璃罐"]]]
      ]
    }),
    makeDialogue({
      id: "a1-hallway-bicycle", level: "A1", linkedSentence: "s-a1-120",
      title: "Moving a Bicycle out of a Shared Hallway", titleZh: "把自行车移出共用走廊", scene: "apartment building hallway",
      goal: "A resident moves a bicycle so the shared hallway and emergency door stay open.", goalZh: "住户移开自行车，让共用走廊与紧急出口保持畅通。",
      roles: [["A", "A building custodian checking the hallway", "正在检查走廊的大楼管理员"], ["B", "A resident who left a bicycle near the door", "把自行车停在门边的住户"]],
      lines: [
        ["A", "Please keep the hallway clear.", "请保持走廊畅通。", "Please keep _____ clear.", "请保持_____畅通。"],
        ["B", "Sorry. I'll move my bicycle now.", "抱歉。我现在就移走自行车。", "I'll move _____ now.", "我现在就移走_____。"],
        ["A", "The emergency door needs space at all times.", "紧急出口必须随时留出空间。", "The _____ needs space at all times.", "_____必须随时留出空间。"],
        ["B", "Can I leave it beside the mailboxes?", "我可以把它放在信箱旁边吗？", "Can I leave it _____?", "我可以把它放在_____吗？"],
        ["A", "That area needs to stay open too.", "那个区域也必须保持畅通。"],
        ["B", "Is there another place for bicycles?", "还有其他地方可以停自行车吗？"],
        ["A", "Yes, the bicycle rack is behind the building.", "有，自行车架在大楼后面。"],
        ["B", "Is it covered when it rains?", "下雨时那里有遮棚吗？"],
        ["A", "Yes. Thank you for moving it right away.", "有。谢谢你马上把它移走。", "Thank you for _____ right away.", "谢谢你马上_____。"],
        ["B", "No problem. I didn't know about the rack.", "没问题。我原本不知道有自行车架。"]
      ],
      groups: [
        ["Open area", [["the hallway", "走廊"], ["the doorway", "门口"], ["this path", "这条通道"]]],
        ["Move", [["my bicycle", "我的自行车"], ["these boxes", "这些箱子"], ["the cart", "推车"]]],
        ["Emergency access", [["emergency door", "紧急出口"], ["stairway", "楼梯间"], ["front entrance", "前门入口"]]],
        ["Temporary place", [["beside the mailboxes", "信箱旁边"], ["near the stairs", "楼梯附近"], ["against this wall", "靠着这面墙"]]],
        ["Quick action", [["moving it", "把它移走"], ["clearing the area", "清空这个区域"], ["taking care of it", "处理这件事"]]]
      ]
    }),
    makeDialogue({
      id: "a1-cafe-table-spill", level: "A1", linkedSentence: "s-a1-121",
      title: "Cleaning Up a Small Tea Spill", titleZh: "清理打翻的一点茶", scene: "café seating area",
      goal: "A customer and a staff member clean a small spill before anyone slips or a phone gets wet.", goalZh: "顾客与店员清理少量打翻的茶，避免有人滑倒或手机进水。",
      roles: [["A", "A customer who accidentally spilled tea", "不小心打翻茶的顾客"], ["B", "A café worker helping clean the table and floor", "协助清理桌面和地板的咖啡店员工"]],
      lines: [
        ["A", "I spilled some tea on the table.", "我在桌上打翻了一点茶。", "I spilled _____ on the table.", "我在桌上打翻了_____。"],
        ["B", "I need a clean cloth for this.", "我需要一块干净的抹布来处理这个。", "I need a clean _____ for this.", "我需要一个干净的_____来处理这个。"],
        ["A", "Here are some paper napkins.", "这里有一些纸巾。", "Here are some _____.", "这里有一些_____。"],
        ["B", "Thanks. Please move your phone away from the wet area.", "谢谢。请把手机移离潮湿的地方。", "Please move _____ away from the wet area.", "请把_____移离潮湿的地方。"],
        ["A", "I'll put it on the empty chair.", "我会把它放到空椅子上。"],
        ["B", "The cup is still leaking a little.", "杯子还是有点漏。"],
        ["A", "I'll set it in this tray.", "我会把它放进这个托盘里。"],
        ["B", "Good. I'll wipe the floor too.", "好。我也会擦一下地板。"],
        ["A", "Is there anything else I can do?", "还有什么我可以帮忙的吗？"],
        ["B", "Just watch your step until the floor is dry.", "地板干以前，小心脚下就好。", "Watch your step until _____ is dry.", "_____干以前，请小心脚下。"]
      ],
      groups: [
        ["Spill", [["some tea", "一点茶"], ["some water", "一点水"], ["my drink", "我的饮料"]]],
        ["Cleaning item", [["cloth", "抹布"], ["towel", "毛巾"], ["sponge", "海绵"]]],
        ["Paper item", [["paper napkins", "纸巾"], ["tissues", "面纸"], ["paper towels", "厨房纸巾"]]],
        ["Move away", [["your phone", "你的手机"], ["your bag", "你的袋子"], ["the menu", "菜单"]]],
        ["Dry area", [["the floor", "地板"], ["this area", "这个区域"], ["the tiles", "地砖"]]]
      ]
    }),
    makeDialogue({
      id: "a1-donation-box-lift", level: "A1", linkedSentence: "s-a1-122",
      title: "Lifting a Heavy Donation Box Safely", titleZh: "安全搬运沉重的捐赠箱", scene: "community donation center",
      goal: "A donor and a volunteer move a heavy box together and place it on a low table.", goalZh: "捐赠者与志工一起搬动沉重箱子，并把它放在矮桌上。",
      roles: [["A", "A donor bringing a heavy box of books", "带来一箱沉重书籍的捐赠者"], ["B", "A volunteer helping receive and move the box", "协助接收并搬运箱子的志工"]],
      lines: [
        ["A", "This box needs two people.", "这个箱子需要两个人搬。", "This _____ needs two people.", "这个_____需要两个人搬。"],
        ["B", "I'll take the other side.", "我来搬另一边。", "I'll take _____.", "我来搬_____。"],
        ["A", "Please keep it level.", "请让它保持水平。", "Please keep it _____.", "请让它保持_____。"],
        ["B", "Where should we put it?", "我们应该把它放在哪里？", "Where should we put _____?", "我们应该把_____放在哪里？"],
        ["A", "Put it on the low table near the wall.", "把它放在墙边的矮桌上。", "Put it on _____.", "把它放在_____。"],
        ["B", "Is anything breakable inside?", "里面有易碎物品吗？"],
        ["A", "No, it's mostly books.", "没有，里面大多是书。"],
        ["B", "Okay. Let's lift on three.", "好。数到三一起抬。"],
        ["A", "One, two, three.", "一、二、三。"],
        ["B", "Great. It's safely on the table now.", "很好。现在它安全地放在桌上了。"]
      ],
      groups: [
        ["Heavy item", [["box", "箱子"], ["table", "桌子"], ["plant", "盆栽"]]],
        ["Side", [["the other side", "另一边"], ["this end", "这一端"], ["the bottom", "底部"]]],
        ["Position", [["level", "水平"], ["steady", "稳定"], ["upright", "直立"]]],
        ["Object", [["it", "它"], ["the box", "箱子"], ["these books", "这些书"]]],
        ["Place", [["the low table near the wall", "墙边的矮桌"], ["the empty cart", "空推车"], ["the floor by the desk", "桌子旁的地板"]]]
      ]
    }),
    makeDialogue({
      id: "a2-permanent-marker-whiteboard", level: "A2", linkedSentence: "s-a2-119",
      title: "Removing Permanent Marker from a Whiteboard", titleZh: "清除白板上的油性记号笔", scene: "office meeting room",
      goal: "Two coworkers fix a marker mistake without damaging the whiteboard.", goalZh: "两位同事在不损坏白板的情况下处理记号笔误用。",
      roles: [["A", "A coworker who picked up the wrong marker", "拿错记号笔的同事"], ["B", "An office coordinator who knows a safe cleaning method", "知道安全清洁方法的办公室协调人员"]],
      lines: [
        ["A", "I used the permanent marker instead of the dry-erase one.", "我用了油性记号笔，而不是白板笔。", "I used _____ instead of _____.", "我用了_____，而不是_____。"],
        ["B", "Don't worry. The two markers look very similar.", "别担心。这两种笔看起来很像。", "The two _____ look very similar.", "这两种_____看起来很像。"],
        ["A", "I noticed when the writing wouldn't wipe off.", "我擦不掉字迹时才发现。", "I noticed when _____ wouldn't wipe off.", "我在_____擦不掉时才发现。"],
        ["B", "Use a dry-erase marker over the old lines.", "用白板笔描过原来的线条。", "Use _____ over the old lines.", "用_____描过原来的线条。"],
        ["A", "Really? Why does that help?", "真的吗？为什么这样有用？"],
        ["B", "The fresh ink can loosen the old ink.", "新的墨水可以让原来的墨水松开。"],
        ["A", "I'll test a small corner first.", "我会先测试一个小角落。"],
        ["B", "Good. Then wipe it with a clean cloth.", "好。然后用干净的布擦掉。"],
        ["A", "It's coming off now.", "现在擦得掉了。"],
        ["B", "Let's store the markers in separate cups.", "我们把两种笔分别放在不同的笔筒里吧。", "Let's store the markers _____.", "我们把两种笔_____存放吧。"]
      ],
      groups: [
        ["Wrong choice", [["the permanent marker / the dry-erase one", "油性记号笔／白板笔"], ["the blue pen / the black one", "蓝笔／黑笔"], ["the old label / the new one", "旧标签／新标签"]]],
        ["Similar items", [["markers", "记号笔"], ["labels", "标签"], ["bottles", "瓶子"]]],
        ["Problem", [["the writing", "字迹"], ["the ink", "墨水"], ["the last line", "最后一行"]]],
        ["Cover", [["a dry-erase marker", "白板笔"], ["fresh ink", "新的墨水"], ["the correct pen", "正确的笔"]]],
        ["Separate storage", [["in separate cups", "分别放在不同的笔筒里"], ["on different shelves", "放在不同的架子上"], ["with clear labels", "贴上清楚标签"]]]
      ]
    }),
    makeDialogue({
      id: "a2-riverside-path-return", level: "A2", linkedSentence: "s-a2-120",
      title: "Walking along a Reopened Riverside Path", titleZh: "走在重新开放的河边步道", scene: "riverside path after renovations",
      goal: "Two old neighbors notice practical changes on a familiar walking route.", goalZh: "两位老邻居观察熟悉步行路线整修后的实际变化。",
      roles: [["A", "A former neighbor returning to the area", "回到这个地区的前邻居"], ["B", "A local resident who watched the renovations", "见证整修过程的当地住户"]],
      lines: [
        ["A", "I haven't seen this riverside path since last spring.", "自从去年春天以后，我就没来看过这条河边步道了。", "I haven't seen _____ since _____.", "自从_____以后，我就没见过_____了。"],
        ["B", "The new section opened last month.", "新的路段上个月开放了。", "The new _____ opened last month.", "新的_____上个月开放了。"],
        ["A", "The surface is much smoother than before.", "路面比以前平整多了。", "The surface is _____ than before.", "路面比以前_____多了。"],
        ["B", "They also added lights along the darker section.", "他们也在较暗的路段加了照明。", "They also added _____ along the darker section.", "他们也在较暗的路段加了_____。"],
        ["A", "Are those benches new too?", "那些长椅也是新的吗？"],
        ["B", "Yes. The old ones were damaged by the rain.", "是的。旧长椅被雨水损坏了。"],
        ["A", "I'm glad they kept the large trees.", "我很高兴他们保留了那些大树。"],
        ["B", "Me too. The area feels newer without feeling unfamiliar.", "我也是。这里变新了，但不会让人觉得陌生。"],
        ["A", "Let's walk to the footbridge.", "我们走到人行桥吧。", "Let's walk to _____.", "我们走到_____吧。"],
        ["B", "Sure. The path continues all the way there now.", "好。现在步道会一路延伸到那里。"]
      ],
      groups: [
        ["Time away", [["this riverside path / last spring", "这条河边步道／去年春天"], ["this neighborhood / last year", "这个社区／去年"], ["the old garden / winter", "旧花园／冬天"]]],
        ["New area", [["section", "路段"], ["path", "步道"], ["entrance", "入口"]]],
        ["Improvement", [["much smoother", "平整多了"], ["wider", "更宽"], ["easier to follow", "更容易辨认"]]],
        ["Added feature", [["lights", "照明"], ["signs", "指示牌"], ["railings", "栏杆"]]],
        ["Destination", [["the footbridge", "人行桥"], ["the old trees", "老树旁"], ["the next entrance", "下一个入口"]]]
      ]
    }),
    makeDialogue({
      id: "a2-weekday-museum", level: "A2", linkedSentence: "s-a2-121",
      title: "Visiting a Museum on a Quiet Weekday", titleZh: "平日前往较安静的博物馆", scene: "city photography museum",
      goal: "Two siblings enjoy a museum visit without rushing through the exhibits.", goalZh: "两位手足从容参观博物馆，不必匆忙看完展览。",
      roles: [["A", "A visitor interested in a temporary photo exhibit", "对临时摄影展感兴趣的访客"], ["B", "A sibling who visited the museum on a busy weekend", "曾在拥挤周末来过博物馆的手足"]],
      lines: [
        ["A", "I'm glad we decided to come on a weekday.", "我很高兴我们决定平日来。", "I'm glad we decided to _____.", "我很高兴我们决定_____。"],
        ["B", "The entrance was crowded last Saturday.", "上星期六入口很拥挤。", "The entrance was _____ last Saturday.", "上星期六入口很_____。"],
        ["A", "Today we can take our time with each room.", "今天我们可以慢慢看每个展厅。", "Today we can take our time with _____.", "今天我们可以慢慢看_____。"],
        ["B", "Do you want to start upstairs?", "你想从楼上开始吗？", "Do you want to start _____?", "你想从_____开始吗？"],
        ["A", "Yes. The temporary exhibit closes next week.", "好。临时展览下星期就结束了。"],
        ["B", "I heard the photos of the old neighborhood are excellent.", "我听说老社区的照片很精彩。"],
        ["A", "Let's view those photos first, then visit the permanent rooms.", "我们先看那些照片，再去常设展厅。", "Let's view _____ first, then visit the permanent rooms.", "我们先看_____，再去常设展厅。"],
        ["B", "Good. The café can wait until later.", "好。咖啡厅可以晚点再去。"],
        ["A", "We have two hours before closing.", "离闭馆还有两个小时。"],
        ["B", "That's plenty of time if we don't rush.", "只要不赶时间，这样很充裕。"]
      ],
      groups: [
        ["Good decision", [["come on a weekday", "平日来"], ["arrive early", "提早到"], ["start with this exhibit", "先看这个展览"]]],
        ["Crowd", [["crowded", "拥挤"], ["very busy", "人很多"], ["full of tour groups", "有很多旅行团"]]],
        ["Take time", [["each room", "每个展厅"], ["the photographs", "这些照片"], ["the whole exhibit", "整个展览"]]],
        ["Starting point", [["upstairs", "楼上"], ["on the second floor", "二楼"], ["with the temporary exhibit", "从临时展开始"]]],
        ["First display", [["those photos", "那些照片"], ["the neighborhood exhibit", "社区展览"], ["the temporary rooms", "临时展厅"]]]
      ]
    }),
    makeDialogue({
      id: "a2-balcony-herbs", level: "A2", linkedSentence: "s-a2-122",
      title: "Checking Herbs before Watering Them", titleZh: "给香草浇水前先检查土壤", scene: "apartment balcony garden",
      goal: "Two housemates check different herb pots instead of watering every plant the same way.", goalZh: "两位室友先检查不同香草盆栽，而不是用同一种方式浇所有植物。",
      roles: [["A", "A housemate checking the herb pots", "正在检查香草盆栽的室友"], ["B", "A housemate familiar with the plants' routine", "熟悉植物照顾方式的室友"]],
      lines: [
        ["A", "The soil in this pot looks dry.", "这个盆里的土看起来很干。", "The soil in _____ looks dry.", "_____里的土看起来很干。"],
        ["B", "I usually water the herbs unless the soil is still damp.", "我通常会给香草浇水，除非土壤还是湿的。", "I usually _____ unless _____.", "我通常会_____，除非_____。"],
        ["A", "The basil pot feels lighter than the others.", "罗勒盆栽感觉比其他盆轻。", "The _____ feels lighter than the others.", "_____感觉比其他盆轻。"],
        ["B", "Give it a small amount, not the whole watering can.", "给它少量的水，不要倒完整壶。", "Give it _____, not the whole watering can.", "给它_____，不要倒完整壶。"],
        ["A", "What about the rosemary?", "迷迭香呢？"],
        ["B", "It prefers the soil a little drier.", "它比较喜欢干一点的土壤。"],
        ["A", "I'll check it with my finger first.", "我会先用手指检查土壤。"],
        ["B", "Good. If soil sticks to your finger, wait another day.", "好。如果土会黏在手指上，就再等一天。"],
        ["A", "I'll water the basil first, then.", "那我先给罗勒浇水。"],
        ["B", "Pour slowly so the water doesn't run over the edge.", "慢慢倒，这样水才不会从盆边流出去。", "Pour _____ so the water doesn't run over the edge.", "_____倒，这样水才不会从盆边流出去。"]
      ],
      groups: [
        ["Dry pot", [["this pot", "这个花盆"], ["the basil pot", "罗勒盆栽"], ["the small planter", "小花盆"]]],
        ["Routine", [["water the herbs / the soil is still damp", "给香草浇水／土壤还是湿的"], ["open the window / it is too windy", "开窗／风太大"], ["move the pots outside / it is cold", "把盆栽移到户外／天气冷"]]],
        ["Light pot", [["basil pot", "罗勒盆栽"], ["mint pot", "薄荷盆栽"], ["small pot", "小盆栽"]]],
        ["Amount", [["a small amount", "少量的水"], ["half a cup", "半杯水"], ["just enough to wet the soil", "刚好让土变湿的水量"]]],
        ["Speed", [["slowly", "慢慢地"], ["a little at a time", "一次倒一点"], ["near the center", "靠近中间"]]]
      ]
    }),
    makeDialogue({
      id: "b1-dogs-meet-outside", level: "B1", linkedSentence: "s-b1-119",
      title: "Introducing Two Dogs in a Calm Way", titleZh: "用平静方式让两只狗初次见面", scene: "quiet street before a home visit",
      goal: "Two dog owners compare what helps their pets feel comfortable during a first meeting.", goalZh: "两位狗主人讨论初次见面时，什么方式能让宠物更自在。",
      roles: [["A", "A dog owner whose pet is cautious around visitors", "宠物面对访客时较谨慎的狗主人"], ["B", "A dog owner arranging a short first visit", "安排短暂初次见面的狗主人"]],
      lines: [
        ["A", "What worked better than I expected was introducing the dogs outside first.", "比我预期更有效的是先让两只狗在户外见面。", "What worked better than I expected was _____.", "比我预期更有效的是_____。"],
        ["B", "The neutral space made both dogs less defensive.", "中立的空间让两只狗没那么防备。", "_____ made both dogs less defensive.", "_____让两只狗没那么防备。"],
        ["A", "Mine usually barks when another dog enters the apartment.", "别的狗进入公寓时，我的狗通常会叫。", "Mine usually _____ when another dog enters the apartment.", "别的狗进入公寓时，我的狗通常会_____。"],
        ["B", "He stayed calm once they started walking side by side.", "它们开始并排走以后，它就保持平静了。", "He stayed calm once _____.", "_____以后，它就保持平静了。"],
        ["A", "Did you notice their body language relax?", "你有注意到它们的肢体动作放松下来吗？"],
        ["B", "Yes. Their tails looked less stiff after the first block.", "有。走过第一个街区后，它们的尾巴看起来没那么僵硬。"],
        ["A", "I'll keep the visit short today.", "我今天会让这次拜访保持简短。"],
        ["B", "Good. We can finish while they are both comfortable.", "好。我们可以趁它们都自在时结束。"],
        ["A", "Next time, should we start with the same route?", "下次我们也从同一条路线开始吗？", "Next time, should we start with _____?", "下次我们也从_____开始吗？"],
        ["B", "Yes. A predictable routine may help them settle faster.", "好。可预测的流程可能会让它们更快安定下来。"]
      ],
      groups: [
        ["Successful approach", [["introducing the dogs outside first", "先让两只狗在户外见面"], ["taking a short walk first", "先短暂散步"], ["keeping the first visit brief", "让初次拜访保持简短"]]],
        ["Neutral place", [["The neutral space", "中立的空间"], ["The quiet street", "安静的街道"], ["Walking outside", "在户外散步"]]],
        ["Usual reaction", [["barks", "吠叫"], ["hides", "躲起来"], ["stays near the door", "待在门边"]]],
        ["Calm moment", [["they started walking side by side", "它们开始并排走"], ["we moved away from the entrance", "我们离开入口"], ["the other dog slowed down", "另一只狗慢下来"]]],
        ["Repeat plan", [["the same route", "同一条路线"], ["a short walk", "短暂散步"], ["the quiet street", "安静的街道"]]]
      ]
    }),
    makeDialogue({
      id: "b1-coat-zipper-repair", level: "B1", linkedSentence: "s-b1-120",
      title: "Repairing Only the Damaged Part of a Coat Zipper", titleZh: "只维修外套拉链损坏的部分", scene: "neighborhood alteration shop",
      goal: "A customer and a tailor choose a focused repair instead of replacing a working zipper.", goalZh: "顾客与裁缝选择针对性维修，不更换仍可使用的整条拉链。",
      roles: [["A", "A customer deciding how much of a coat zipper to repair", "正在决定外套拉链维修范围的顾客"], ["B", "A tailor who inspected the zipper and stitching", "检查过拉链与缝线的裁缝"]],
      lines: [
        ["A", "I decided against replacing the whole zipper because the teeth were still fine.", "我决定不更换整条拉链，因为链齿还是好的。", "I decided against _____ because _____.", "我决定不_____，因为_____。"],
        ["B", "That makes sense. Only the pull tab is bent.", "这样很合理。只有拉片弯了。", "Only _____ is bent.", "只有_____弯了。"],
        ["A", "I was worried the repair would cost almost as much as the coat.", "我原本担心维修费几乎会和外套一样贵。", "I was worried _____ would cost almost as much as the coat.", "我原本担心_____几乎会和外套一样贵。"],
        ["B", "Replacing the pull tab will be much cheaper.", "更换拉片会便宜很多。", "Replacing _____ will be much cheaper.", "更换_____会便宜很多。"],
        ["A", "Can the original slider stay in place?", "原本的拉头可以保留吗？"],
        ["B", "Yes. It moves smoothly after a little cleaning.", "可以。稍微清洁后，它滑动得很顺。"],
        ["A", "How long will the repair take?", "维修需要多久？"],
        ["B", "It will be ready tomorrow afternoon.", "明天下午可以完成。"],
        ["A", "Great. The coat is in good condition otherwise.", "太好了。这件外套其他地方状况都很好。"],
        ["B", "Would you like me to reinforce the loose stitching near the pocket too?", "你要我顺便加固口袋旁松开的缝线吗？", "Would you like me to reinforce _____ too?", "你要我顺便加固_____吗？"]
      ],
      groups: [
        ["Repair decision", [["replacing the whole zipper / the teeth were still fine", "更换整条拉链／链齿还是好的"], ["buying a new coat / this one still fit", "买新外套／这件仍合身"], ["changing the slider / it still moved well", "更换拉头／它仍滑动顺畅"]]],
        ["Bent part", [["the pull tab", "拉片"], ["the small hook", "小挂钩"], ["the metal ring", "金属环"]]],
        ["Cost concern", [["the repair", "维修"], ["a full replacement", "全部更换"], ["the new zipper", "新拉链"]]],
        ["Cheaper fix", [["the pull tab", "拉片"], ["one small part", "一个小零件"], ["the loose stitching", "松开的缝线"]]],
        ["Extra repair", [["the loose stitching near the pocket", "口袋旁松开的缝线"], ["the inside seam", "内侧接缝"], ["the cuff", "袖口"]]]
      ]
    }),
    makeDialogue({
      id: "b1-printer-copy-shop", level: "B1", linkedSentence: "s-b1-121",
      title: "Using a Copy Shop after a Printer Failure", titleZh: "印表机故障后改用影印店", scene: "small business office before a client visit",
      goal: "Two coworkers use a practical backup plan when repeated printer restarts do not solve the problem.", goalZh: "多次重启印表机仍无效时，两位同事采用实际的备用方案。",
      roles: [["A", "A coworker responsible for printed client handouts", "负责客户纸本资料的同事"], ["B", "A coworker coordinating the upcoming visit", "正在协调客户来访的同事"]],
      lines: [
        ["A", "There was no point in restarting the printer, so I sent the file to a copy shop instead.", "继续重新启动印表机没有意义，所以我改把档案送到影印店。", "There was no point in _____, so I _____ instead.", "继续_____没有意义，所以我改成_____。"],
        ["B", "Did they say when the copies would be ready?", "他们有说资料什么时候会准备好吗？", "Did they say _____?", "他们有说_____吗？"],
        ["A", "They'll finish them within twenty minutes.", "他们会在二十分钟内完成。", "They'll finish them _____.", "他们会在_____完成。"],
        ["B", "That gives us enough time before the client arrives.", "这样在客户抵达前，我们还有足够时间。", "That gives us enough time before _____.", "这样在_____以前，我们还有足够时间。"],
        ["A", "I emailed the final PDF and requested double-sided printing.", "我寄了最终版PDF，并要求双面列印。"],
        ["B", "Good. The office printer keeps showing the same error.", "好。办公室印表机一直显示相同的错误。"],
        ["A", "A technician is coming tomorrow morning.", "技术人员明天早上会来。"],
        ["B", "For today, I'll pick up the copies on my way back.", "今天我会在回来的路上顺便拿资料。"],
        ["A", "Please bring the receipt so we can record the expense.", "请带回收据，这样我们可以记录费用。", "Please bring _____ so we can record the expense.", "请带回_____，这样我们可以记录费用。"],
        ["B", "I will, and I'll check the first page before leaving.", "会的，而且离开前我会检查第一页。"]
      ],
      groups: [
        ["Backup action", [["restarting the printer / sent the file to a copy shop", "重新启动印表机／把档案送到影印店"], ["waiting for the repair / used another printer", "等待维修／改用另一台印表机"], ["trying the same file / exported a new PDF", "重试同一档案／重新汇出PDF"]]],
        ["Ready time", [["when the copies would be ready", "资料什么时候会准备好"], ["how long it would take", "需要多久"], ["whether they could finish today", "今天是否能完成"]]],
        ["Completion", [["within twenty minutes", "二十分钟内"], ["before noon", "中午前"], ["by two o'clock", "两点前"]]],
        ["Arrival", [["the client arrives", "客户抵达"], ["the meeting starts", "会议开始"], ["we leave the office", "我们离开办公室"]]],
        ["Expense record", [["the receipt", "收据"], ["the invoice", "发票"], ["the payment slip", "付款单"]]]
      ]
    }),
    makeDialogue({
      id: "b1-furniture-cable-photos", level: "B1", linkedSentence: "s-b1-122",
      title: "Taking Photos before Rearranging a Living Room", titleZh: "重新摆放客厅前先拍照", scene: "shared living room during a furniture change",
      goal: "Two housemates make a second attempt easier by documenting cables and measuring the room first.", goalZh: "两位室友用记录线材与先量空间的方式，让下一次重新布置更容易。",
      roles: [["A", "A housemate reconnecting devices after moving furniture", "移动家具后正在重新接线的室友"], ["B", "A housemate checking the new layout and cable labels", "正在检查新摆设与线材标签的室友"]],
      lines: [
        ["A", "If I did it again, I'd take photos before moving anything.", "如果再来一次，我会在搬动任何东西前先拍照。", "If I did it again, I'd _____.", "如果再来一次，我会_____。"],
        ["B", "Especially the cables behind the television.", "尤其是电视后面的线材。", "Especially _____.", "尤其是_____。"],
        ["A", "I can't remember which cable goes into each port.", "我记不得每条线要插进哪个连接埠。", "I can't remember _____.", "我记不得_____。"],
        ["B", "Let's label each cable now.", "我们现在替每条线贴标签吧。", "Let's label _____ now.", "我们现在替_____贴标签吧。"],
        ["A", "Good idea. We should also measure the wall before moving the shelf.", "好主意。移动架子前，我们也应该先量墙面。"],
        ["B", "The shelf blocks an outlet in the new position.", "架子放在新位置会挡住插座。"],
        ["A", "Let's move the lamp first and test the layout.", "我们先移动台灯，测试一下摆法。"],
        ["B", "We don't need to lift the sofa until we're sure.", "在确定以前，我们不需要抬沙发。"],
        ["A", "After we finish, I'll save the photos in a folder.", "完成后，我会把照片存进一个资料夹。"],
        ["B", "Next time, the setup will be much faster.", "下次布置会快很多。", "Next time, _____ will be much faster.", "下次_____会快很多。"]
      ],
      groups: [
        ["Do differently", [["take photos before moving anything", "搬动东西前先拍照"], ["label every cable", "替每条线贴标签"], ["measure the wall first", "先量墙面"]]],
        ["Important detail", [["the cables behind the television", "电视后面的线材"], ["the plugs near the shelf", "架子附近的插头"], ["the outlet behind the sofa", "沙发后面的插座"]]],
        ["Connection", [["which cable goes into each port", "每条线要插进哪个连接埠"], ["where the power cable belongs", "电源线应该接在哪里"], ["which plug is for the speaker", "哪个插头属于音箱"]]],
        ["Label", [["each cable", "每条线"], ["the plugs", "这些插头"], ["both ends", "两端"]]],
        ["Faster next time", [["the setup", "布置"], ["reconnecting everything", "重新接好所有设备"], ["moving the furniture", "搬动家具"]]]
      ]
    })
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.dialogues.push(...newDialogues);
  catalog.version = "1029_today_1";

  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1029_today_1";
})();
