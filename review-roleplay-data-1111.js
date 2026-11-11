(() => {
  const catalog = window.REVIEW_ROLEPLAY_CATALOG;
  if (!catalog || !Array.isArray(catalog.courses)) return;

  const publishedOn = "2026-11-11";
  const courses = [
    {
      id: "review-23",
      order: 23,
      level: "A1–A2",
      publishedOn,
      title: "A Loose Suitcase Wheel before the Shuttle",
      titleZh: "接驳车出发前行李箱轮子松了",
      patternDrills: [
        {
          frame: "Something + seems to have + past participle.",
          zhFrame: "某样东西 + 好像 + 已经 + 发生变化 + 了。",
          focus: "Change the object and what appears to have happened.",
          note: "Use seems to have when the evidence is clear but you have not fully checked the cause.",
          variations: [
            { en: "One of the wheels seems to have come loose.", zh: "其中一个轮子好像松了。" },
            { en: "The side strap seems to have snapped.", zh: "侧面的带子好像断了。" }
          ]
        },
        {
          frame: "Instead of + verb-ing, we could + base verb.",
          zhFrame: "与其 + 做原来的事，我们可以 + 换一种做法。",
          focus: "Replace both the difficult action and the practical alternative.",
          note: "Keep the first action in the -ing form and the second action in the base form.",
          variations: [
            { en: "Instead of dragging it, we could use a luggage cart.", zh: "与其拖着它走，我们可以用行李推车。" },
            { en: "Instead of lifting the whole suitcase, we could remove the small bag first.", zh: "与其抬起整个行李箱，我们可以先把小包拿下来。" }
          ]
        },
        {
          frame: "Could you + action A + while I + action B?",
          zhFrame: "你可以 + 动作 A + 吗？我会同时 + 动作 B。",
          focus: "Give the two people different actions that can happen together.",
          note: "This frame is useful for dividing a practical task without giving a blunt order.",
          variations: [
            { en: "Could you hold the handle while I check the wheel?", zh: "你可以扶住把手吗？我会同时检查轮子。" },
            { en: "Could you steady the cart while I secure the suitcase?", zh: "你可以扶稳推车吗？我会同时固定行李箱。" }
          ]
        },
        {
          frame: "Once + event, I'll + action.",
          zhFrame: "一旦 + 某件事完成，我就会 + 下一步动作。",
          focus: "Change the first event and the action that follows it.",
          note: "Use the present tense after once even when the result is in the future.",
          variations: [
            { en: "Once we reach the lobby, I'll ask the driver for help.", zh: "一到大厅，我就会请司机帮忙。" },
            { en: "Once the suitcase is on the cart, I'll carry the backpack separately.", zh: "行李箱一放上推车，我就会另外背着背包。" }
          ]
        }
      ],
      words: [
        { en: "come loose", zh: "松动" },
        { en: "a luggage cart", zh: "行李推车" },
        { en: "steady the handle", zh: "扶稳把手" },
        { en: "secure the suitcase", zh: "固定行李箱" },
        { en: "stay balanced", zh: "保持平衡" },
        { en: "load it into the shuttle", zh: "把它装上接驳车" }
      ],
      roles: [
        { name: "Role A · Hotel Guest", nameZh: "角色 A · 酒店住客", en: "Your suitcase wheel is loose, and the airport shuttle will arrive soon.", zh: "你的行李箱轮子松了，而机场接驳车很快就会到。" },
        { name: "Role B · Front Desk Attendant", nameZh: "角色 B · 前台工作人员", en: "You help A move the suitcase safely without delaying the shuttle.", zh: "你帮助 A 安全移动行李，同时尽量不耽误接驳车。" }
      ],
      lines: [
        { speaker: "A", en: "One of the suitcase wheels seems to have come loose.", zh: "行李箱的其中一个轮子好像松了。" },
        { speaker: "B", en: "Does it still roll if you keep the handle low?", zh: "如果把手放低一点，它还能拉动吗？" },
        { speaker: "A", en: "Not really. Instead of _____, could I _____?", zh: "不太行。与其_____，我可以_____吗？", hints: [
          { en: "dragging it / use a luggage cart", zh: "拖着它走／用行李推车" },
          { en: "lifting the whole suitcase / remove the small bag first", zh: "抬起整个行李箱／先拿下小包" },
          { en: "pulling it on one wheel / carry the lighter items separately", zh: "只用一个轮子拉／把较轻的东西分开拿" }
        ] },
        { speaker: "B", en: "Of course. Could you _____ while I _____?", zh: "当然可以。你可以_____吗？我会同时_____。", hints: [
          { en: "hold the handle / check the wheel", zh: "扶住把手／检查轮子" },
          { en: "steady the cart / secure the suitcase", zh: "扶稳推车／固定行李箱" },
          { en: "move the backpack / bring the cart closer", zh: "移动背包／把推车拉近" }
        ] },
        { speaker: "A", en: "Sure. It looks like the small screw is missing.", zh: "可以。看起来是那颗小螺丝不见了。" },
        { speaker: "B", en: "I can strap the suitcase to the cart for the trip downstairs.", zh: "我可以把行李箱绑在推车上，再推到楼下。" },
        { speaker: "A", en: "Once _____, I'll _____.", zh: "一旦_____，我就会_____。", hints: [
          { en: "we reach the lobby / ask the shuttle driver for help", zh: "我们到达大厅／请接驳车司机帮忙" },
          { en: "the suitcase is on the cart / carry the backpack separately", zh: "行李箱放上推车／另外背着背包" },
          { en: "we get outside / keep the heavy side facing the cart", zh: "我们走到外面／让较重的一侧朝向推车" }
        ] },
        { speaker: "B", en: "Good. The driver can help load it without using the loose wheel.", zh: "好。司机可以不用那个松动的轮子，直接帮你把行李装上车。" },
        { speaker: "A", en: "I'll keep my documents and phone in the backpack.", zh: "我会把证件和手机放在背包里。" },
        { speaker: "B", en: "Let's leave now. The shuttle should be here in ten minutes.", zh: "我们现在出发吧。接驳车应该十分钟后到。" }
      ]
    },
    {
      id: "review-24",
      order: 24,
      level: "A1–A2",
      publishedOn,
      title: "A Dog Slips out of Its Collar near the Park Gate",
      titleZh: "小狗在公园门口挣脱项圈",
      patternDrills: [
        {
          frame: "I was about to + verb + when + past event.",
          zhFrame: "我正准备 + 做某事，这时 + 突发事件发生了。",
          focus: "Change the planned action and the event that interrupted it.",
          note: "Use was about to for an action that was just going to happen.",
          variations: [
            { en: "I was about to clip on the leash when he pulled away.", zh: "我正准备扣上牵引绳，这时它突然挣脱了。" },
            { en: "I was about to open the gate when the collar slipped off.", zh: "我正准备开门，这时项圈滑掉了。" }
          ]
        },
        {
          frame: "Try not to + action; someone / something might + result.",
          zhFrame: "尽量不要 + 动作；否则某人或某物可能会 + 结果。",
          focus: "Change both the action to avoid and its likely result.",
          note: "This gives calm advice and explains why it matters.",
          variations: [
            { en: "Try not to chase him; he might run toward the road.", zh: "尽量不要追它；否则它可能会跑向马路。" },
            { en: "Try not to shout; the noise might scare him.", zh: "尽量不要大喊；否则声音可能会吓到它。" }
          ]
        },
        {
          frame: "If you + action A, I can + action B.",
          zhFrame: "如果你 + 动作 A，我就可以 + 动作 B。",
          focus: "Give each person one clear and useful role.",
          note: "The two actions should support each other rather than repeat the same task.",
          variations: [
            { en: "If you stay by the gate, I can call him from here.", zh: "如果你守在门口，我就可以从这里叫它。" },
            { en: "If you keep the path quiet, I can offer him a treat.", zh: "如果你让步道保持安静，我就可以拿零食引它过来。" }
          ]
        },
        {
          frame: "The safest way is to + action + until + condition.",
          zhFrame: "最安全的做法是 + 动作，直到 + 条件达成。",
          focus: "Change the safe action and the point when it can stop.",
          note: "Use this to explain a temporary safety plan clearly.",
          variations: [
            { en: "The safest way is to kneel here until he comes closer.", zh: "最安全的做法是蹲在这里，直到它靠近。" },
            { en: "The safest way is to keep the gate closed until the leash is back on.", zh: "最安全的做法是把门关着，直到重新系好牵引绳。" }
          ]
        }
      ],
      words: [
        { en: "slip out of the collar", zh: "挣脱项圈" },
        { en: "clip on the leash", zh: "扣上牵引绳" },
        { en: "run toward the road", zh: "跑向马路" },
        { en: "stay still", zh: "保持不动" },
        { en: "offer a treat", zh: "拿零食引诱" },
        { en: "keep the gate closed", zh: "让门保持关闭" }
      ],
      roles: [
        { name: "Role A · Dog Owner", nameZh: "角色 A · 狗主人", en: "Your dog has slipped out of its collar near a busy park gate.", zh: "你的小狗在繁忙的公园门口挣脱了项圈。" },
        { name: "Role B · Cyclist", nameZh: "角色 B · 骑自行车的人", en: "You stop nearby and help keep the path calm and safe.", zh: "你在附近停下来，协助让步道保持安静和安全。" }
      ],
      lines: [
        { speaker: "A", en: "My dog slipped out of his collar near the gate.", zh: "我的狗在门口附近挣脱了项圈。" },
        { speaker: "B", en: "Try not to _____; he might _____.", zh: "尽量不要_____；否则它可能会_____。", hints: [
          { en: "chase him / run toward the road", zh: "追它／跑向马路" },
          { en: "shout / get more frightened", zh: "大喊／更害怕" },
          { en: "move too quickly / hide behind the bushes", zh: "动作太快／躲到灌木后面" }
        ] },
        { speaker: "A", en: "I was about to _____ when _____.", zh: "我正准备_____，这时_____。", hints: [
          { en: "clip on the leash / he pulled away", zh: "扣上牵引绳／它突然挣脱了" },
          { en: "open the gate / the collar slipped off", zh: "开门／项圈滑掉了" },
          { en: "give him a treat / a scooter went past", zh: "给它零食／一辆滑板车经过" }
        ] },
        { speaker: "B", en: "I'll leave my bike here and stand near the gate.", zh: "我会把自行车放在这里，然后守在门口附近。" },
        { speaker: "A", en: "If you _____, I can _____.", zh: "如果你_____，我就可以_____。", hints: [
          { en: "stay by the gate / call him from here", zh: "守在门口／从这里叫它" },
          { en: "keep people from entering / offer him a treat", zh: "暂时不让别人进来／拿零食引它过来" },
          { en: "keep the path quiet / move closer slowly", zh: "让步道保持安静／慢慢靠近" }
        ] },
        { speaker: "B", en: "Should I ask those walkers to stay still for a moment?", zh: "我要请那些散步的人暂时站着不动吗？" },
        { speaker: "A", en: "Yes, please. Sudden movement makes him nervous.", zh: "好的，麻烦你了。突然的动作会让它紧张。" },
        { speaker: "B", en: "He's looking at the treats in your hand now.", zh: "它现在正看着你手里的零食。" },
        { speaker: "A", en: "The safest way is to _____ until _____.", zh: "最安全的做法是_____，直到_____。", hints: [
          { en: "kneel here / he comes closer", zh: "蹲在这里／它靠近" },
          { en: "speak softly / he looks relaxed", zh: "轻声说话／它放松下来" },
          { en: "keep the gate closed / the leash is back on", zh: "让门保持关闭／重新系好牵引绳" }
        ] },
        { speaker: "B", en: "I'll keep the path clear and give you some space.", zh: "我会让步道保持畅通，也给你留出一些空间。" }
      ]
    },
    {
      id: "review-25",
      order: 25,
      level: "A1–A2",
      publishedOn,
      title: "A Phone Slips between Two Train Seats",
      titleZh: "手机滑进列车座位缝隙",
      patternDrills: [
        {
          frame: "It must have + past participle + when + past event.",
          zhFrame: "它一定是 + 已经发生的动作，是在 + 过去事件 + 的时候。",
          focus: "Change what probably happened and when it happened.",
          note: "Must have expresses a strong conclusion about a past event, not an obligation.",
          variations: [
            { en: "It must have slid farther in when the train moved.", zh: "它一定是在列车移动时滑得更里面了。" },
            { en: "It must have fallen behind the seat when I stood up.", zh: "它一定是在我站起来时掉到座位后面了。" }
          ]
        },
        {
          frame: "There's no point in + verb-ing + while + situation.",
          zhFrame: "在 + 某种情况 + 的时候，继续 + 做某事 + 没有意义。",
          focus: "Change the unhelpful action and the situation that makes it unhelpful.",
          note: "Use this to stop an ineffective action and move toward a better plan.",
          variations: [
            { en: "There's no point in forcing it while the train is moving.", zh: "列车还在移动时，硬把它拿出来没有意义。" },
            { en: "There's no point in reaching blindly while the seat is tilted.", zh: "座椅还倾斜时，盲目伸手去摸没有意义。" }
          ]
        },
        {
          frame: "Could you ask + person + to + action?",
          zhFrame: "你可以请 + 某个人 + 做某件事吗？",
          focus: "Change both the right person and the useful action.",
          note: "Choose someone who can realistically help in the situation.",
          variations: [
            { en: "Could you ask the conductor to keep the seat upright?", zh: "你可以请列车员让座椅保持直立吗？" },
            { en: "Could you ask the passenger in front not to adjust the seat yet?", zh: "你可以请前面的乘客暂时不要调整座椅吗？" }
          ]
        },
        {
          frame: "As soon as + event, we can + action.",
          zhFrame: "某件事一发生，我们就可以 + 下一步动作。",
          focus: "Change the event and the safe next step.",
          note: "Use the present tense after as soon as for a future event.",
          variations: [
            { en: "As soon as the train stops, we can check from the aisle.", zh: "列车一停，我们就可以从过道那边查看。" },
            { en: "As soon as the conductor arrives, we can explain exactly where it fell.", zh: "列车员一到，我们就可以说明手机掉落的确切位置。" }
          ]
        }
      ],
      words: [
        { en: "slide between the seats", zh: "滑进座位缝隙" },
        { en: "the seat mechanism", zh: "座椅机械装置" },
        { en: "keep the seat upright", zh: "让座椅保持直立" },
        { en: "the exact seat number", zh: "确切的座位号" },
        { en: "reach blindly", zh: "盲目伸手去摸" },
        { en: "check from the aisle", zh: "从过道查看" }
      ],
      roles: [
        { name: "Role A · Passenger", nameZh: "角色 A · 乘客", en: "Your phone has slipped into a narrow gap between two adjustable train seats.", zh: "你的手机滑进两张可调式列车座椅之间的狭窄缝隙。" },
        { name: "Role B · Nearby Passenger", nameZh: "角色 B · 邻座乘客", en: "You help A avoid the seat mechanism and contact the conductor safely.", zh: "你协助 A 避开座椅机械装置，并安全联系列车员。" }
      ],
      lines: [
        { speaker: "A", en: "My phone slipped between the seat and the wall when the train moved.", zh: "列车移动时，我的手机滑进了座位和车壁之间。" },
        { speaker: "B", en: "Can you still see it from your side?", zh: "你从那一侧还能看到手机吗？" },
        { speaker: "A", en: "It must have _____ when _____.", zh: "它一定是在_____的时候_____了。", hints: [
          { en: "slid farther in / I tried to reach it", zh: "我伸手去拿／滑得更里面" },
          { en: "fallen behind the seat / I stood up", zh: "我站起来／掉到座位后面" },
          { en: "turned sideways / the train went around the curve", zh: "列车转弯／转到侧面" }
        ] },
        { speaker: "B", en: "Please don't put your hand near the seat mechanism.", zh: "请不要把手伸到座椅机械装置附近。" },
        { speaker: "A", en: "You're right. There's no point in _____ while _____.", zh: "你说得对。在_____的时候，继续_____没有意义。", hints: [
          { en: "forcing it / the train is moving", zh: "列车还在移动／硬把它拿出来" },
          { en: "reaching blindly / the seat is tilted", zh: "座椅还倾斜／盲目伸手去摸" },
          { en: "moving the seat / we cannot see the phone", zh: "我们看不到手机／调整座椅" }
        ] },
        { speaker: "B", en: "I can _____ before _____.", zh: "我可以先_____，赶在_____以前。", hints: [
          { en: "notify the conductor / the next stop", zh: "通知列车员／下一站" },
          { en: "ask a staff member for help / the train reaches the station", zh: "向工作人员求助／列车到站" },
          { en: "note the seat number / the conductor arrives", zh: "记下座位号／列车员到达" }
        ] },
        { speaker: "A", en: "Could you ask _____ to _____?", zh: "你可以请_____做_____吗？", hints: [
          { en: "the conductor / keep the seat upright", zh: "列车员／让座椅保持直立" },
          { en: "the passenger in front / avoid adjusting the seat", zh: "前面的乘客／先不要调整座椅" },
          { en: "a staff member / bring a light", zh: "工作人员／带一盏灯过来" }
        ] },
        { speaker: "B", en: "Yes. I'll also note the exact seat number.", zh: "可以。我也会记下确切的座位号。" },
        { speaker: "A", en: "As soon as _____, we can _____.", zh: "_____一发生，我们就可以_____。", hints: [
          { en: "the train stops / check from the aisle", zh: "列车停下／从过道查看" },
          { en: "the conductor arrives / explain where it fell", zh: "列车员到达／说明手机掉在哪里" },
          { en: "the seat is secured / use the light safely", zh: "座椅固定好／安全使用灯光查看" }
        ] },
        { speaker: "B", en: "Good. That will be safer than reaching into the gap without seeing it.", zh: "好。这样比看不清就直接把手伸进缝隙安全多了。" }
      ]
    },
    {
      id: "review-26",
      order: 26,
      level: "A1–A2",
      publishedOn,
      title: "A Warm Power Strip during a Community Event",
      titleZh: "社区活动中发热的插线板",
      patternDrills: [
        {
          frame: "Something doesn't seem right with + noun.",
          zhFrame: "某样东西的 + 某个部分 + 好像不太对劲。",
          focus: "Change the object or part that appears unusual.",
          note: "This raises a concern calmly before you know the exact cause.",
          variations: [
            { en: "Something doesn't seem right with this power strip.", zh: "这个插线板好像不太对劲。" },
            { en: "Something doesn't seem right with the plug near the kettle.", zh: "热水壶旁边的插头好像不太对劲。" }
          ]
        },
        {
          frame: "Rather than + verb-ing, let's + base verb.",
          zhFrame: "与其继续 + 原来的做法，我们不如 + 采取新做法。",
          focus: "Replace the risky or inefficient action with a better one.",
          note: "Rather than is followed by an -ing form; let's is followed by a base verb.",
          variations: [
            { en: "Rather than leaving everything on one strip, let's move the kettle.", zh: "与其把所有设备都接在同一个插线板上，我们不如把热水壶移开。" },
            { en: "Rather than turning everything back on, let's check each device.", zh: "与其把所有设备重新打开，我们不如逐一检查。" }
          ]
        },
        {
          frame: "If we leave + object + adjective, it might + result.",
          zhFrame: "如果我们让 + 某物 + 保持某种状态，它可能会 + 结果。",
          focus: "Change the object, its condition, and the possible result.",
          note: "Use might for a possible result rather than claiming it will definitely happen.",
          variations: [
            { en: "If we leave everything connected, it might overheat.", zh: "如果我们让所有设备继续连接，插线板可能会过热。" },
            { en: "If we leave the damaged cord plugged in, it might become unsafe.", zh: "如果我们让受损的电线继续插着，可能会变得不安全。" }
          ]
        },
        {
          frame: "We can + action + one at a time.",
          zhFrame: "我们可以 + 逐一进行某个动作。",
          focus: "Change the action that should be done step by step.",
          note: "Use this when checking several items separately makes the situation clearer or safer.",
          variations: [
            { en: "We can reconnect the devices one at a time.", zh: "我们可以逐一重新连接这些设备。" },
            { en: "We can test the lights and speakers one at a time.", zh: "我们可以逐一测试灯光和音响。" }
          ]
        }
      ],
      words: [
        { en: "the power strip", zh: "插线板" },
        { en: "feel warm near the plug", zh: "插头附近摸起来发热" },
        { en: "unplug the kettle", zh: "拔掉热水壶插头" },
        { en: "a wall outlet", zh: "墙上插座" },
        { en: "check the cord for damage", zh: "检查电线是否受损" },
        { en: "reconnect one at a time", zh: "逐一重新连接" }
      ],
      roles: [
        { name: "Role A · Event Volunteer", nameZh: "角色 A · 活动志愿者", en: "You notice that a power strip feels warm while several devices are running.", zh: "几台设备同时运行时，你发现插线板摸起来有些发热。" },
        { name: "Role B · Venue Staff Member", nameZh: "角色 B · 场地工作人员", en: "You pause the equipment and help separate the devices safely.", zh: "你暂停设备运行，并协助安全地把不同设备分开连接。" }
      ],
      lines: [
        { speaker: "A", en: "Something doesn't seem right with this power strip. It's warm near the plug.", zh: "这个插线板好像不太对劲。插头附近摸起来有些发热。" },
        { speaker: "B", en: "Please _____ first, and make sure _____.", zh: "请先_____，并确认_____。", hints: [
          { en: "unplug the kettle / your hands are dry", zh: "拔掉热水壶插头／双手是干的" },
          { en: "switch off the strip / nobody is using the microphone", zh: "关闭插线板／没有人在使用麦克风" },
          { en: "move people back / the floor is clear", zh: "请大家往后站／地面保持畅通" }
        ] },
        { speaker: "A", en: "The lights, speaker, and kettle are all connected to it.", zh: "灯光、音响和热水壶都接在这个插线板上。" },
        { speaker: "B", en: "Rather than _____, let's _____.", zh: "与其_____，我们不如_____。", hints: [
          { en: "leaving everything on one strip / move the kettle to a wall outlet", zh: "把所有设备都接在一个插线板上／把热水壶移到墙上插座" },
          { en: "turning everything back on / check each device", zh: "把所有设备重新打开／逐一检查" },
          { en: "guessing which device caused it / inspect the cord", zh: "猜测是哪台设备造成的／检查电线" }
        ] },
        { speaker: "A", en: "If we leave _____, it might _____.", zh: "如果我们让_____保持原状，它可能会_____。", hints: [
          { en: "everything connected / overheat", zh: "所有设备继续连接／过热" },
          { en: "the damaged cord plugged in / become unsafe", zh: "受损的电线继续插着／变得不安全" },
          { en: "the kettle on the same strip / draw too much power", zh: "热水壶继续接在同一个插线板上／用电量过大" }
        ] },
        { speaker: "B", en: "I'll check the cord for damage before we use the strip again.", zh: "再次使用插线板以前，我会检查电线是否受损。" },
        { speaker: "A", en: "Should I pause the music while you test the equipment?", zh: "你测试设备时，我要暂停音乐吗？" },
        { speaker: "B", en: "Yes. We can _____ one at a time.", zh: "要。我们可以逐一_____。", hints: [
          { en: "reconnect the devices", zh: "重新连接设备" },
          { en: "test the lights and speakers", zh: "测试灯光和音响" },
          { en: "move the plugs to separate outlets", zh: "把插头移到不同的插座" }
        ] },
        { speaker: "A", en: "I'll tell the team that the sound will be off for a few minutes.", zh: "我会告诉团队，音响会暂停几分钟。" },
        { speaker: "B", en: "Good. A short pause is better than risking damaged equipment or a fire.", zh: "好。短暂停一下，总比冒着设备损坏或起火的风险好。" }
      ]
    }
  ];

  const existing = new Set(catalog.courses.map(course => course.id));
  catalog.courses.push(...courses.filter(course => !existing.has(course.id)));
  catalog.version = "1111_review_flexible_2";
  catalog.publishedOn = publishedOn;
})();
