(() => {
  const catalog = window.REVIEW_ROLEPLAY_CATALOG;
  if (!catalog || !Array.isArray(catalog.courses)) return;

  const publishedOn = "2026-11-09";
  const courses = [
    {
      id: "review-17",
      order: 17,
      level: "A1–A2",
      publishedOn,
      title: "A Wallet Found near the Bus Stop",
      titleZh: "在公交站附近捡到钱包",
      patternDrills: [
        {
          frame: "I found + an object + near / in + a place.",
          zh: "我在某个地方附近或里面发现了某样东西。",
          focus: "Change the object and location.",
          note: "Use this when you discover something and need to explain exactly where it was.",
          variations: [
            { en: "I found this wallet beside the bench.", zh: "我在长椅旁边发现了这个钱包。" },
            { en: "I found a set of keys near the ticket machine.", zh: "我在售票机附近发现了一串钥匙。" }
          ]
        },
        {
          frame: "I didn't want to + verb + without + a person / permission / more information.",
          zh: "没有某个人、许可或更多信息，我不想贸然做某件事。",
          focus: "Change the action and reason for waiting.",
          note: "This frame explains a careful decision without sounding defensive.",
          variations: [
            { en: "I didn't want to open every pocket without the owner here.", zh: "失主不在这里，我不想把每个口袋都打开。" },
            { en: "I didn't want to move it without telling the driver.", zh: "没有先告诉司机，我不想移动它。" }
          ]
        },
        {
          frame: "Would it be better to + option A + or + option B?",
          zh: "是选择方案 A 比较好，还是选择方案 B 比较好？",
          focus: "Replace both options with real actions.",
          note: "Use two base-form verbs after to: wait or take, call or ask, stay or leave.",
          variations: [
            { en: "Would it be better to wait here or take it to the station desk?", zh: "在这里等比较好，还是把它送到车站服务台比较好？" },
            { en: "Would it be better to call the owner or let the staff handle it?", zh: "打电话给失主比较好，还是交给工作人员处理比较好？" }
          ]
        },
        {
          frame: "I can + verb, as long as + condition.",
          zh: "只要符合某个条件，我就可以做某件事。",
          focus: "Change both the offer and its limit.",
          note: "The condition should be realistic and directly related to the offer.",
          variations: [
            { en: "I can stay for a few minutes, as long as I don't miss the last bus.", zh: "只要不会错过末班车，我可以再留几分钟。" },
            { en: "I can speak to the staff, as long as you show them where we found it.", zh: "只要你告诉工作人员我们在哪里捡到的，我就可以去跟他们说明。" }
          ]
        }
      ],
      words: [
        { en: "beside the bench", zh: "在长椅旁边" },
        { en: "an ID card", zh: "身份证件" },
        { en: "the clear pocket", zh: "透明夹层" },
        { en: "the station desk", zh: "车站服务台" },
        { en: "report it missing", zh: "通报遗失" },
        { en: "recover the wallet", zh: "取回钱包" }
      ],
      roles: [
        { name: "Role A · Commuter", nameZh: "角色 A · 通勤者", en: "You found a wallet near the bus stop and want to return it without invading the owner's privacy.", zh: "你在公交站附近捡到钱包，希望在不侵犯失主隐私的情况下归还。" },
        { name: "Role B · Nearby Shop Worker", nameZh: "角色 B · 附近店员", en: "You help A choose a safe and practical way to hand in the wallet.", zh: "你帮助 A 选择安全又实际的处理方式。" }
      ],
      lines: [
        { speaker: "A", en: "I found this wallet beside the bench.", zh: "我在长椅旁边发现了这个钱包。" },
        { speaker: "B", en: "Did you see anyone looking for it?", zh: "你有看到谁在找钱包吗？" },
        { speaker: "A", en: "Not yet. I didn't want to _____ without _____.", zh: "还没有。我不想_____，除非_____。", hints: [
          { en: "open every pocket / the owner here", zh: "把每个口袋都打开／失主在场" },
          { en: "take out the cards / a staff member present", zh: "拿出里面的卡片／有工作人员在场" },
          { en: "carry it far away / telling someone nearby", zh: "把它带离这里／先告诉附近的人" }
        ] },
        { speaker: "B", en: "That makes sense. There is an ID card in the clear pocket.", zh: "这样做有道理。透明夹层里有一张身份证件。" },
        { speaker: "A", en: "Would it be better to _____ or _____?", zh: "是_____比较好，还是_____比较好？", hints: [
          { en: "wait here for a few minutes / take it to the station desk", zh: "在这里等几分钟／把它送到车站服务台" },
          { en: "ask the bus driver / give it to the police", zh: "询问公交车司机／交给警察" },
          { en: "leave my contact information / let the staff handle everything", zh: "留下我的联系方式／让工作人员全权处理" }
        ] },
        { speaker: "B", en: "The _____ is still open, and they can _____.", zh: "_____还开着，他们可以_____。", hints: [
          { en: "station desk / record where it was found", zh: "车站服务台／记录找到钱包的地点" },
          { en: "police station / file a lost-property report", zh: "警察局／登记失物" },
          { en: "nearby shop / keep it safe for a few minutes", zh: "附近的店／暂时保管几分钟" }
        ] },
        { speaker: "A", en: "I can _____, as long as _____.", zh: "我可以_____，只要_____。", hints: [
          { en: "walk there with you / my bus has not arrived", zh: "和你一起走过去／我的公交车还没到" },
          { en: "explain what happened / you show them the exact place", zh: "说明发生了什么／你指出确切地点" },
          { en: "leave my phone number / they keep it private", zh: "留下电话号码／他们保护我的隐私" }
        ] },
        { speaker: "B", en: "I'll take a photo of the bench so the location is clear.", zh: "我来拍一张长椅的照片，这样地点就很清楚了。" },
        { speaker: "A", en: "Good idea. I'll tell the staff when and where we found it.", zh: "好主意。我会告诉工作人员我们在什么时间、什么地点捡到的。" },
        { speaker: "B", en: "Then the owner can get it back without us going through anything else.", zh: "这样我们不用再翻看其他东西，失主也能把钱包领回去。" }
      ]
    },
    {
      id: "review-18",
      order: 18,
      level: "A1–A2",
      publishedOn,
      title: "Making Room for a Stroller in a Busy Café",
      titleZh: "在繁忙咖啡馆为婴儿车腾出空间",
      patternDrills: [
        {
          frame: "Would it be possible to + verb + object + a little?",
          zh: "可以把某样东西稍微做一下调整吗？",
          focus: "Change the verb and object.",
          note: "A soft, practical request for a small change in a shared space.",
          variations: [
            { en: "Would it be possible to move this chair a little?", zh: "可以把这把椅子稍微挪一下吗？" },
            { en: "Would it be possible to leave this side open for a moment?", zh: "可以暂时让这一侧保持畅通吗？" }
          ]
        },
        {
          frame: "The + place / object + is + comparative + than I expected.",
          zh: "这个地方或物品比我预想的更……。",
          focus: "Use a natural comparative adjective.",
          note: "Useful choices include narrower, busier, heavier, farther, and quieter.",
          variations: [
            { en: "The aisle is narrower than I expected.", zh: "这条过道比我预想的更窄。" },
            { en: "The stroller is wider than it looks.", zh: "这辆婴儿车比看起来更宽。" }
          ]
        },
        {
          frame: "I'd rather + verb + if that's okay.",
          zh: "如果可以的话，我比较想……。",
          focus: "Replace the preferred action.",
          note: "This states a preference politely without demanding it.",
          variations: [
            { en: "I'd rather keep the stroller near me if that's okay.", zh: "如果可以的话，我比较想把婴儿车放在我旁边。" },
            { en: "I'd rather use the wider entrance if that's okay.", zh: "如果可以的话，我比较想走比较宽的入口。" }
          ]
        },
        {
          frame: "That should work, as long as + condition.",
          zh: "只要符合某个条件，那样应该可行。",
          focus: "Add one clear practical condition.",
          note: "Use this to accept an idea while protecting space, time, or safety.",
          variations: [
            { en: "That should work, as long as we leave the aisle clear.", zh: "只要我们让过道保持畅通，那样应该可行。" },
            { en: "That should work, as long as nobody needs this chair.", zh: "只要没有人需要这把椅子，那样应该可行。" }
          ]
        }
      ],
      words: [
        { en: "the stroller", zh: "婴儿车" },
        { en: "the aisle", zh: "过道" },
        { en: "turn it sideways", zh: "把它转到侧面" },
        { en: "leave it clear", zh: "让它保持畅通" },
        { en: "under the table", zh: "在桌子下面" },
        { en: "enough room", zh: "足够的空间" }
      ],
      roles: [
        { name: "Role A · Parent", nameZh: "角色 A · 家长", en: "You need to move a stroller through a crowded café without blocking the aisle.", zh: "你需要把婴儿车推过拥挤的咖啡馆，同时不能挡住过道。" },
        { name: "Role B · Customer", nameZh: "角色 B · 顾客", en: "Your chair and bag are in the way, and you help create enough space.", zh: "你的椅子和包挡住了一部分空间，你协助腾出足够的位置。" }
      ],
      lines: [
        { speaker: "A", en: "Excuse me. Would it be possible to _____ a little?", zh: "不好意思，可以稍微_____一下_____吗？", hints: [
          { en: "move / this chair", zh: "挪动／这把椅子" },
          { en: "pull in / your bag", zh: "往里面收／你的包" },
          { en: "leave open / this side", zh: "保持畅通／这一侧" }
        ] },
        { speaker: "B", en: "Of course. Are you trying to get the stroller through?", zh: "当然可以。你是想把婴儿车推过去吗？" },
        { speaker: "A", en: "Yes. The _____ is _____ than I expected.", zh: "是的。_____比我预想的更_____。", hints: [
          { en: "aisle / narrower", zh: "过道／狭窄" },
          { en: "turn / tighter", zh: "转弯处／拥挤" },
          { en: "stroller / wider", zh: "婴儿车／宽" }
        ] },
        { speaker: "B", en: "I can _____ and _____.", zh: "我可以_____，再_____。", hints: [
          { en: "put my bag under the table / turn the chair sideways", zh: "把包放到桌子下面／把椅子转到侧面" },
          { en: "move my cup / pull the chair closer", zh: "把杯子移开／把椅子往里面拉" },
          { en: "hold the door / keep this side clear", zh: "扶住门／让这一侧保持畅通" }
        ] },
        { speaker: "A", en: "I'd rather _____ if that's okay.", zh: "如果可以的话，我比较想_____。", hints: [
          { en: "keep the stroller near me", zh: "把婴儿车放在我旁边" },
          { en: "use the wider space by the wall", zh: "使用墙边比较宽的位置" },
          { en: "park it beside my table", zh: "把它停在我的桌子旁边" }
        ] },
        { speaker: "B", en: "That should work, as long as we leave the aisle clear.", zh: "只要我们让过道保持畅通，那样应该可行。" },
        { speaker: "A", en: "Could you _____ while I _____?", zh: "你可以_____吗？我会同时_____。", hints: [
          { en: "hold the chair steady / turn the stroller", zh: "扶稳椅子／转动婴儿车" },
          { en: "watch my cup / move the stroller", zh: "帮我看着杯子／移动婴儿车" },
          { en: "keep this side open / bring the stroller around", zh: "让这一侧保持畅通／把婴儿车绕过来" }
        ] },
        { speaker: "B", en: "Sure. Tell me if you need a little more room.", zh: "可以。如果还需要多一点空间就告诉我。" },
        { speaker: "A", en: "That's enough. Thank you for making space.", zh: "这样就够了。谢谢你帮忙腾出空间。" },
        { speaker: "B", en: "No problem. I'll keep my bag under the table.", zh: "没问题。我会把包放在桌子下面。" }
      ]
    },
    {
      id: "review-19",
      order: 19,
      level: "A1–A2",
      publishedOn,
      title: "A Shopping Bag Tears on the Walk Home",
      titleZh: "回家路上购物袋破了",
      patternDrills: [
        {
          frame: "Something + past verb + while I was + verb-ing.",
          zh: "我正在做某件事时，发生了另一件事。",
          focus: "Change both actions.",
          note: "Use past simple for the sudden event and past continuous for the ongoing action.",
          variations: [
            { en: "The bag tore while I was crossing the street.", zh: "我过马路时，袋子破了。" },
            { en: "One of the bottles fell out while I was walking home.", zh: "我走回家时，其中一个瓶子掉了出来。" }
          ]
        },
        {
          frame: "I was hoping to + verb + before + time / event.",
          zh: "我原本希望在某个时间或事件以前完成某件事。",
          focus: "Change the goal and deadline.",
          note: "This is softer and more natural than simply saying what you must do.",
          variations: [
            { en: "I was hoping to get home before the rain started.", zh: "我原本希望在下雨前到家。" },
            { en: "I was hoping to put the food away before dinner.", zh: "我原本希望在晚餐前把食物收好。" }
          ]
        },
        {
          frame: "Could you + verb + while I + verb?",
          zh: "我做某件事的时候，你可以同时做另一件事吗？",
          focus: "Give each person a different task.",
          note: "Use this to divide a practical task naturally.",
          variations: [
            { en: "Could you hold the bottles while I pick up the fruit?", zh: "我捡水果的时候，你可以帮我拿着瓶子吗？" },
            { en: "Could you check the jar while I find another bag?", zh: "我找另一个袋子的时候，你可以检查一下玻璃罐吗？" }
          ]
        },
        {
          frame: "We could either + option A + or + option B.",
          zh: "我们可以选择方案 A，也可以选择方案 B。",
          focus: "Offer two realistic solutions.",
          note: "Keep both options in the same grammatical form.",
          variations: [
            { en: "We could either split the groceries between us or ask the store for a box.", zh: "我们可以把东西分开拿，也可以回店里要一个箱子。" },
            { en: "We could either walk back together or call someone for a ride.", zh: "我们可以一起走回去，也可以打电话请人来接。" }
          ]
        }
      ],
      words: [
        { en: "the bag tore", zh: "袋子破了" },
        { en: "roll onto the sidewalk", zh: "滚到人行道上" },
        { en: "a reusable bag", zh: "可重复使用的袋子" },
        { en: "split the groceries", zh: "把购买的东西分开拿" },
        { en: "a cracked jar", zh: "裂开的玻璃罐" },
        { en: "make it to the corner", zh: "走到街角" }
      ],
      roles: [
        { name: "Role A · Shopper", nameZh: "角色 A · 买东西的人", en: "Your paper bag tears on the way home, and several items fall out.", zh: "你回家路上纸袋破了，几样东西掉了出来。" },
        { name: "Role B · Neighbor", nameZh: "角色 B · 邻居", en: "You stop to help, check the breakable items, and suggest ways to carry everything.", zh: "你停下来帮忙，检查易碎物品，并提出把东西带回去的方法。" }
      ],
      lines: [
        { speaker: "A", en: "The bag tore while I was crossing the street.", zh: "我过马路时，袋子破了。" },
        { speaker: "B", en: "Are you okay? I can pick up the oranges.", zh: "你没事吧？我可以帮你捡橙子。" },
        { speaker: "A", en: "Thanks. I was hoping to _____ before _____.", zh: "谢谢。我原本希望_____，赶在_____之前。", hints: [
          { en: "get home / the rain starts", zh: "到家／开始下雨" },
          { en: "put the cold food away / dinner", zh: "把冷藏食物收好／晚餐" },
          { en: "finish this errand / my next appointment", zh: "办完这件事／下一个约会" }
        ] },
        { speaker: "B", en: "Do you have another bag with you?", zh: "你身上还有别的袋子吗？" },
        { speaker: "A", en: "I left my reusable bag in the car.", zh: "我把可重复使用的袋子留在车里了。" },
        { speaker: "B", en: "We could either _____ or _____.", zh: "我们可以_____，也可以_____。", hints: [
          { en: "split the groceries between our bags / ask the store for a box", zh: "把东西分装到我们的袋子里／回店里要一个箱子" },
          { en: "carry the heavy items first / leave one bag here for a moment", zh: "先拿较重的东西／暂时把一个袋子留在这里" },
          { en: "walk back together / call someone for a ride", zh: "一起走回去／打电话请人来接" }
        ] },
        { speaker: "A", en: "Could you _____ while I _____?", zh: "你可以_____吗？我会同时_____。", hints: [
          { en: "hold the bottles / gather the fruit", zh: "拿着瓶子／把水果捡起来" },
          { en: "check the jar / tie this bag", zh: "检查玻璃罐／把这个袋子绑好" },
          { en: "carry the cold food / pick up the cans", zh: "拿冷藏食物／捡罐头" }
        ] },
        { speaker: "B", en: "Sure, but let's make sure the glass jar isn't cracked.", zh: "可以，不过我们先确认玻璃罐没有裂开。" },
        { speaker: "A", en: "It looks fine, but this bag won't hold anything else.", zh: "看起来没问题，不过这个袋子不能再装东西了。" },
        { speaker: "B", en: "I'll walk with you to the corner, and then we can decide what to carry first.", zh: "我陪你走到街角，然后我们再决定先拿哪些东西。" }
      ]
    },
    {
      id: "review-20",
      order: 20,
      level: "A1–A2",
      publishedOn,
      title: "Locked Out with a Bag of Groceries",
      titleZh: "提着杂货被锁在门外",
      patternDrills: [
        {
          frame: "I seem to have + past participle.",
          zh: "我好像已经做了某件事，通常是意外造成的。",
          focus: "Change the completed action.",
          note: "Use this when you have just realized a likely mistake or problem.",
          variations: [
            { en: "I seem to have locked myself out.", zh: "我好像把自己锁在门外了。" },
            { en: "I seem to have left my phone inside.", zh: "我好像把手机留在里面了。" }
          ]
        },
        {
          frame: "Do you happen to know whether + clause?",
          zh: "你刚好知道某件事是否属实吗？",
          focus: "Replace the whole information clause.",
          note: "A polite way to ask for information without assuming the other person knows.",
          variations: [
            { en: "Do you happen to know whether the manager is still downstairs?", zh: "你刚好知道管理员是否还在楼下吗？" },
            { en: "Do you happen to know whether anyone has a spare key?", zh: "你刚好知道是否有人有备用钥匙吗？" }
          ]
        },
        {
          frame: "I can + verb, but I need to + verb first.",
          zh: "我可以做某件事，但需要先完成另一件事。",
          focus: "Change the help and the necessary first step.",
          note: "This gives help while clearly explaining a practical limit.",
          variations: [
            { en: "I can call the front desk, but I need to know your apartment number first.", zh: "我可以打给前台，但我需要先知道你的房号。" },
            { en: "I can store the frozen food, but I need to clear one shelf first.", zh: "我可以帮你存放冷冻食品，但我需要先清出一层架子。" }
          ]
        },
        {
          frame: "The sooner + clause, the easier it will be to + verb.",
          zh: "越早完成某件事，接下来就越容易做另一件事。",
          focus: "Change the urgent action and result.",
          note: "Use this to explain priority without sounding like an order.",
          variations: [
            { en: "The sooner we reach the manager, the easier it will be to save the cold food.", zh: "我们越早联系到管理员，就越容易保住这些冷藏食品。" },
            { en: "The sooner we move the frozen items, the easier it will be to sort the rest.", zh: "我们越早把冷冻食品移走，就越容易整理其他东西。" }
          ]
        }
      ],
      words: [
        { en: "lock myself out", zh: "把自己锁在门外" },
        { en: "the building manager", zh: "大楼管理员" },
        { en: "a spare key", zh: "备用钥匙" },
        { en: "the frozen food", zh: "冷冻食品" },
        { en: "clear one shelf", zh: "清出一层架子" },
        { en: "warm up", zh: "回温；变热" }
      ],
      roles: [
        { name: "Role A · Neighbor", nameZh: "角色 A · 邻居", en: "The door locked behind you, and your phone and keys are inside while you are holding groceries.", zh: "门在你身后锁上了，你的手机和钥匙都在屋里，手上还提着杂货。" },
        { name: "Role B · Resident", nameZh: "角色 B · 住户", en: "You are about to leave, but you can help contact the manager and protect the cold food.", zh: "你正准备出门，但可以协助联系管理员并保存冷藏食品。" }
      ],
      lines: [
        { speaker: "A", en: "I seem to have locked myself out.", zh: "我好像把自己锁在门外了。" },
        { speaker: "B", en: "Do you have your phone or a spare key with you?", zh: "你身上有手机或备用钥匙吗？" },
        { speaker: "A", en: "No. My phone is inside, and these groceries need to stay cold.", zh: "没有。我的手机在里面，这些杂货还需要保持低温。" },
        { speaker: "B", en: "Do you happen to know whether _____?", zh: "你刚好知道_____吗？", hints: [
          { en: "the manager is still downstairs", zh: "管理员是否还在楼下" },
          { en: "the front desk keeps a spare key", zh: "前台是否保管备用钥匙" },
          { en: "your roommate will be home soon", zh: "你的室友是否很快回家" }
        ] },
        { speaker: "A", en: "The manager usually leaves at six, but the cleaning staff may know how to reach him.", zh: "管理员通常六点离开，不过清洁人员可能知道怎么联系他。" },
        { speaker: "B", en: "I can _____, but I need to _____ first.", zh: "我可以_____，但我需要先_____。", hints: [
          { en: "call the front desk / know your apartment number", zh: "打给前台／知道你的房号" },
          { en: "ask the cleaning staff / find their phone number", zh: "询问清洁人员／找到他们的电话号码" },
          { en: "store the frozen food / clear one shelf", zh: "存放冷冻食品／清出一层架子" }
        ] },
        { speaker: "A", en: "I'm in 7C. Could I put the frozen food in your freezer for now?", zh: "我住在 7C。我可以暂时把冷冻食品放进你的冷冻柜吗？" },
        { speaker: "B", en: "Yes, as long as we keep everything in your bags.", zh: "可以，只要我们把所有东西都留在你的袋子里。" },
        { speaker: "A", en: "The sooner _____, the easier it will be to _____.", zh: "越早_____，就越容易_____。", hints: [
          { en: "we reach the manager / keep the rest from warming up", zh: "联系到管理员／避免其他东西回温" },
          { en: "we move the frozen items / sort the rest", zh: "移动冷冻食品／整理其他东西" },
          { en: "someone opens the door / put everything away", zh: "有人把门打开／把所有东西收好" }
        ] },
        { speaker: "B", en: "I'll make the call while you separate the cold items.", zh: "你把冷藏食品分出来的时候，我来打电话。" }
      ]
    },
    {
      id: "review-21",
      order: 21,
      level: "A1–A2",
      publishedOn,
      title: "Two Similar Coats after a Theater Show",
      titleZh: "演出结束后拿错了相似的外套",
      patternDrills: [
        {
          frame: "This looks like + noun, but + difference.",
          zh: "这看起来像某样东西，但是有一个不同之处。",
          focus: "Change the object and visible difference.",
          note: "Use this to raise a concern without immediately accusing anyone.",
          variations: [
            { en: "This looks like my coat, but the pockets feel different.", zh: "这看起来像我的外套，但口袋摸起来不一样。" },
            { en: "This looks like your scarf, but the color is slightly darker.", zh: "这看起来像你的围巾，但颜色稍微深一点。" }
          ]
        },
        {
          frame: "I didn't notice + noun / clause + until + event.",
          zh: "我直到某件事发生时，才注意到某个细节。",
          focus: "Change what was noticed and when.",
          note: "The event after until normally uses the past simple.",
          variations: [
            { en: "I didn't notice the label until you stopped me.", zh: "直到你叫住我，我才注意到标签。" },
            { en: "I didn't notice the loose button until I put the coat on.", zh: "直到我穿上外套，我才注意到那颗松动的纽扣。" }
          ]
        },
        {
          frame: "Could we check + detail + before + action?",
          zh: "我们可以在做某件事以前，先检查某个细节吗？",
          focus: "Change the detail and next action.",
          note: "A calm way to verify something together before making a decision.",
          variations: [
            { en: "Could we check the coat tags before either of us leaves?", zh: "我们可以在任何一个人离开前，先检查外套标签吗？" },
            { en: "Could we check the pockets before we switch coats?", zh: "我们可以在交换外套前，先检查口袋吗？" }
          ]
        },
        {
          frame: "If + clue is true, then + conclusion.",
          zh: "如果某个线索属实，那么就能得出一个结论。",
          focus: "Use a real clue and a reasonable conclusion.",
          note: "This helps you reason through a mix-up instead of guessing.",
          variations: [
            { en: "If yours has a loose button, then this coat must be yours.", zh: "如果你的外套有一颗松动的纽扣，那么这件一定是你的。" },
            { en: "If my keys are in that pocket, then the coat on the chair is mine.", zh: "如果我的钥匙在那个口袋里，那么椅子上的外套就是我的。" }
          ]
        }
      ],
      words: [
        { en: "the coat check", zh: "衣帽寄存处" },
        { en: "a loose button", zh: "松动的纽扣" },
        { en: "the inside label", zh: "内侧标签" },
        { en: "feel different", zh: "摸起来不一样" },
        { en: "switch coats", zh: "交换外套" },
        { en: "the left pocket", zh: "左边口袋" }
      ],
      roles: [
        { name: "Role A · Audience Member", nameZh: "角色 A · 观众", en: "You notice that another person may have picked up your coat after the show.", zh: "演出结束后，你发现另一位观众可能拿了你的外套。" },
        { name: "Role B · Audience Member", nameZh: "角色 B · 观众", en: "You thought the coat was yours, but you are willing to compare the details calmly.", zh: "你原本以为那是自己的外套，但愿意冷静比较细节。" }
      ],
      lines: [
        { speaker: "A", en: "Excuse me. I think that may be my coat.", zh: "不好意思，我想那件可能是我的外套。" },
        { speaker: "B", en: "Really? This looks like _____, but _____.", zh: "真的吗？这看起来像_____，但是_____。", hints: [
          { en: "my coat / the pockets feel different", zh: "我的外套／口袋摸起来不一样" },
          { en: "the one I wore / the lining is darker", zh: "我刚才穿的那件／内衬颜色更深" },
          { en: "mine / it feels a little heavier", zh: "我的／感觉重了一点" }
        ] },
        { speaker: "A", en: "Mine has a blue scarf in the left pocket.", zh: "我的外套左边口袋里有一条蓝色围巾。" },
        { speaker: "B", en: "I didn't notice _____ until _____.", zh: "我之前没有注意到_____，直到_____才发现。", hints: [
          { en: "the inside label / you stopped me", zh: "内侧标签／你叫住我" },
          { en: "the loose button / I put it on", zh: "松动的纽扣／我把外套穿上" },
          { en: "the scarf / I checked the pocket", zh: "围巾／我检查口袋" }
        ] },
        { speaker: "A", en: "Could we check _____ before _____?", zh: "我们可以先检查_____，然后再_____吗？", hints: [
          { en: "the coat tags / either of us leaves", zh: "外套标签／各自离开" },
          { en: "the pockets / we switch coats", zh: "口袋／我们交换外套" },
          { en: "the buttons / we ask the staff", zh: "纽扣／询问工作人员" }
        ] },
        { speaker: "B", en: "Sure. My coat has a loose button on the right sleeve.", zh: "可以。我的外套右边袖子上有一颗松动的纽扣。" },
        { speaker: "A", en: "This one has it. Then the coat on the chair may be mine.", zh: "这件有那颗纽扣。那么椅子上的外套可能是我的。" },
        { speaker: "B", en: "If _____, then _____.", zh: "如果_____，那么_____。", hints: [
          { en: "your keys are in that pocket / the coat on the chair is yours", zh: "你的钥匙在那个口袋里／椅子上的外套就是你的" },
          { en: "this label has my name / I picked up the right coat", zh: "这张标签上有我的名字／我拿到的是正确的外套" },
          { en: "the blue scarf is over there / we simply switched coats", zh: "蓝色围巾在那里／我们只是拿错了彼此的外套" }
        ] },
        { speaker: "A", en: "Yes, my keys are here. Sorry for the mix-up.", zh: "对，我的钥匙在这里。抱歉弄混了。" },
        { speaker: "B", en: "No problem. The coats look almost exactly the same in this dark hallway.", zh: "没关系。这条昏暗的走廊里，两件外套看起来几乎一模一样。" }
      ]
    },
    {
      id: "review-22",
      order: 22,
      level: "A1–A2",
      publishedOn,
      title: "Fresh Air without Losing the Paperwork",
      titleZh: "开窗通风又不让文件乱飞",
      patternDrills: [
        {
          frame: "Would you mind if I + past verb + detail?",
          zh: "如果我做某件事，你会介意吗？",
          focus: "Change the action and degree.",
          note: "After Would you mind if I, the past form sounds polite: opened, moved, turned.",
          variations: [
            { en: "Would you mind if I opened the window a little?", zh: "如果我把窗户稍微打开一点，你会介意吗？" },
            { en: "Would you mind if I moved this tray away from the window?", zh: "如果我把这个托盘移到离窗户远一点的地方，你会介意吗？" }
          ]
        },
        {
          frame: "The problem isn't + noun; it's + noun / clause.",
          zh: "问题不在于某件事，而在于另一件事。",
          focus: "Contrast the apparent problem with the real one.",
          note: "Use this to correct the focus without rejecting the other person's idea.",
          variations: [
            { en: "The problem isn't the window; it's where the loose papers are.", zh: "问题不在窗户，而在散页文件放的位置。" },
            { en: "The problem isn't the fresh air; it's the strong draft near the printer.", zh: "问题不在新鲜空气，而在打印机旁边的强风。" }
          ]
        },
        {
          frame: "What if we + verb + instead?",
          zh: "如果我们改成做另一件事呢？",
          focus: "Replace the alternative action.",
          note: "A natural way to suggest an experiment rather than a final decision.",
          variations: [
            { en: "What if we move the paper tray to the other side instead?", zh: "如果我们改把文件托盘移到另一边呢？" },
            { en: "What if we open only the top part of the window instead?", zh: "如果我们改成只打开窗户上半部呢？" }
          ]
        },
        {
          frame: "That works for me, as long as + condition.",
          zh: "只要符合某个条件，我就接受这个做法。",
          focus: "Add a practical condition, not a vague one.",
          note: "This accepts the plan while keeping one important need clear.",
          variations: [
            { en: "That works for me, as long as the papers stay on the table.", zh: "只要文件不会从桌上飞走，我可以接受这个做法。" },
            { en: "That works for me, as long as we keep the door closed.", zh: "只要我们把门关着，我可以接受这个做法。" }
          ]
        }
      ],
      words: [
        { en: "the draft", zh: "穿堂风；气流" },
        { en: "loose papers", zh: "散页文件" },
        { en: "the paper tray", zh: "文件托盘" },
        { en: "clip the stack together", zh: "把一叠文件夹在一起" },
        { en: "the top part", zh: "上半部" },
        { en: "too windy", zh: "风太大" }
      ],
      roles: [
        { name: "Role A · Coworker Who Wants Fresh Air", nameZh: "角色 A · 想开窗通风的同事", en: "The room feels stuffy, so you want to open the window without disturbing anyone's work.", zh: "房间有些闷，你想开窗通风，同时不影响其他人工作。" },
        { name: "Role B · Coworker Handling Documents", nameZh: "角色 B · 正在整理文件的同事", en: "The airflow keeps moving your papers, but you are open to a practical compromise.", zh: "气流一直吹动你的文件，不过你愿意一起找一个实际的折中办法。" }
      ],
      lines: [
        { speaker: "A", en: "Would you mind if I _____?", zh: "如果我_____，你会介意吗？", hints: [
          { en: "opened the window a little", zh: "把窗户稍微打开一点" },
          { en: "let in some fresh air", zh: "让一些新鲜空气进来" },
          { en: "opened only the top part", zh: "只打开窗户上半部" }
        ] },
        { speaker: "B", en: "Not at all, but the papers by the printer keep blowing off the table.", zh: "我不介意，不过打印机旁边的文件一直被吹下桌子。" },
        { speaker: "A", en: "I didn't realize the draft reached that far.", zh: "我没想到气流会吹到那么远。" },
        { speaker: "B", en: "The problem isn't _____; it's _____.", zh: "问题不在_____，而在_____。", hints: [
          { en: "the window / where the loose papers are", zh: "窗户／散页文件放的位置" },
          { en: "the fresh air / the strong draft near the printer", zh: "新鲜空气／打印机旁边的强风" },
          { en: "opening the window / leaving every stack uncovered", zh: "开窗／每叠文件都没有盖住" }
        ] },
        { speaker: "A", en: "What if we _____ instead?", zh: "如果我们改成_____呢？", hints: [
          { en: "move the paper tray to the other side", zh: "把文件托盘移到另一边" },
          { en: "open only the top part of the window", zh: "只打开窗户上半部" },
          { en: "clip each stack together", zh: "把每叠文件夹在一起" }
        ] },
        { speaker: "B", en: "That would help. Could you move the tray while I gather these pages?", zh: "那会有帮助。我收拾这些纸张时，你可以移动托盘吗？" },
        { speaker: "A", en: "Sure. I'll also close the door so the air doesn't rush through the room.", zh: "可以。我也会把门关上，避免气流直接穿过房间。" },
        { speaker: "B", en: "That works for me, as long as _____.", zh: "只要_____，我就可以接受这个做法。", hints: [
          { en: "the papers stay on the table", zh: "文件不会从桌上飞走" },
          { en: "the printer area stays clear", zh: "打印机附近保持整齐" },
          { en: "we can close the window if it gets too cold", zh: "变得太冷时我们可以关窗" }
        ] },
        { speaker: "A", en: "Let me know if it still feels too windy.", zh: "如果还是觉得风太大，请告诉我。" },
        { speaker: "B", en: "This is much better, and the room already feels less stuffy.", zh: "这样好多了，房间也已经没那么闷了。" }
      ]
    }
  ];

  const existing = new Set(catalog.courses.map(course => course.id));
  catalog.courses.push(...courses.filter(course => !existing.has(course.id)));
  catalog.version = "1109_review_flexible_1";
  catalog.publishedOn = publishedOn;
})();
