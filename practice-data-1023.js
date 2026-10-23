(function () {
  const catalog = window.PRACTICE_CATALOG;
  if (!catalog || catalog.version !== "1019_today_1") {
    throw new Error("1023 practice patch requires PRACTICE_CATALOG 1019_today_1");
  }

  const publishedOn = "2026-10-23";

  const newSentences = [
    {
      id: "s-a1-103", level: "A1", title: "Asking for One More Item", titleZh: "表示还需要一个",
      scene: "needing an extra item", pattern: "I need one more _____.", zh: "我还需要一个_____。",
      hints: [{ en: "copy", zh: "副本" }, { en: "chair", zh: "椅子" }, { en: "bag", zh: "袋子" }],
      example: { en: "I need one more copy.", zh: "我还需要一份副本。" }, publishedOn
    },
    {
      id: "s-a1-104", level: "A1", title: "Saying You Are Ready", titleZh: "表示自己准备好了",
      scene: "being ready", pattern: "I'm ready to _____.", zh: "我准备好_____了。",
      hints: [{ en: "go home", zh: "回家" }, { en: "leave", zh: "离开" }, { en: "start", zh: "开始" }],
      example: { en: "I'm ready to go home.", zh: "我准备好回家了。" }, publishedOn
    },
    {
      id: "s-a1-105", level: "A1", title: "Telling Someone Where to Put Something", titleZh: "告诉别人把东西放在哪里",
      scene: "putting things away", pattern: "Please put _____ in the _____.", zh: "请把_____放进_____。",
      hints: [{ en: "the soup / fridge", zh: "汤／冰箱" }, { en: "the towels / basket", zh: "毛巾／篮子" }, { en: "the receipt / envelope", zh: "收据／信封" }],
      example: { en: "Please put the soup in the fridge.", zh: "请把汤放进冰箱。" }, publishedOn
    },
    {
      id: "s-a1-106", level: "A1", title: "Saying Something Is Not Yours", titleZh: "说明东西不是自己的",
      scene: "wrong belongings", pattern: "This isn't my _____.", zh: "这不是我的_____。",
      hints: [{ en: "letter", zh: "信" }, { en: "umbrella", zh: "雨伞" }, { en: "jacket", zh: "外套" }],
      example: { en: "This isn't my letter.", zh: "这不是我的信。" }, publishedOn
    },
    {
      id: "s-a2-103", level: "A2", title: "Saying You Have Not Used Something Recently", titleZh: "表示有一阵子没用某样东西",
      scene: "using something again", pattern: "I haven't used _____ in a while.", zh: "我有一阵子没用_____了。",
      hints: [{ en: "this rice cooker", zh: "这个电饭锅" }, { en: "my sewing machine", zh: "我的缝纫机" }, { en: "the spare bike", zh: "备用自行车" }],
      example: { en: "I haven't used this rice cooker in a while.", zh: "我有一阵子没用这个电饭锅了。" }, publishedOn
    },
    {
      id: "s-a2-104", level: "A2", title: "Talking about a Past Routine", titleZh: "谈论过去的习惯",
      scene: "past routines", pattern: "I used to _____ every _____.", zh: "我以前每_____都会_____。",
      hints: [{ en: "walk here / morning", zh: "来这里散步／早上" }, { en: "cook at home / weekend", zh: "在家做饭／周末" }, { en: "take this route / day", zh: "走这条路／每天" }],
      example: { en: "I used to walk here every morning.", zh: "我以前每天早上都会来这里散步。" }, publishedOn
    },
    {
      id: "s-a2-105", level: "A2", title: "Explaining What You Were Looking For", titleZh: "说明自己当时想找什么",
      scene: "finding a practical solution", pattern: "I was looking for something to _____.", zh: "我当时想找个东西来_____。",
      hints: [{ en: "remove this stain", zh: "去掉这个污渍" }, { en: "keep the door open", zh: "让门保持打开" }, { en: "protect the table", zh: "保护桌面" }],
      example: { en: "I was looking for something to remove this stain.", zh: "我当时想找个东西来去掉这个污渍。" }, publishedOn
    },
    {
      id: "s-a2-106", level: "A2", title: "Saying How Long Something Has Continued", titleZh: "说明某种情况持续了多久",
      scene: "duration until now", pattern: "I've had this _____ for _____.", zh: "我这个_____已经持续_____了。",
      hints: [{ en: "cough / three days", zh: "咳嗽／三天" }, { en: "headache / two hours", zh: "头痛／两个小时" }, { en: "problem / a week", zh: "问题／一周" }],
      example: { en: "I've had this cough for three days.", zh: "我咳嗽已经三天了。" }, publishedOn
    },
    {
      id: "s-b1-103", level: "B1", title: "Regretting a Missed Step", titleZh: "表示事前应该先做某事",
      scene: "learning from a mistake", pattern: "I should have _____ before _____.", zh: "我本来应该在_____之前先_____。",
      hints: [{ en: "measured the wall / ordering the shelf", zh: "量墙面尺寸／订购架子" }, { en: "checked the weather / leaving", zh: "查看天气／出门" }, { en: "backed up the files / updating the phone", zh: "备份档案／更新手机" }],
      example: { en: "I should have measured the wall before ordering the shelf.", zh: "我本来应该在订购架子前先量墙面尺寸。" }, publishedOn
    },
    {
      id: "s-b1-104", level: "B1", title: "Asking for an Extra Safety Step", titleZh: "希望多做一步以更安心",
      scene: "feeling more certain", pattern: "I'd feel better if we _____.", zh: "如果我们_____，我会比较安心。",
      hints: [{ en: "took a photo first", zh: "先拍张照片" }, { en: "tested the spare key", zh: "测试备用钥匙" }, { en: "checked the brakes", zh: "检查刹车" }],
      example: { en: "I'd feel better if we took a photo first.", zh: "如果我们先拍张照片，我会比较安心。" }, publishedOn
    },
    {
      id: "s-b1-105", level: "B1", title: "Describing a Likely Outcome", titleZh: "说明很可能发生的结果",
      scene: "likely outcomes", pattern: "There's a good chance _____.", zh: "很可能会_____。",
      hints: [{ en: "he'll wake up early", zh: "他会很早醒来" }, { en: "the road will be busy", zh: "路上会很拥挤" }, { en: "we'll need more time", zh: "我们会需要更多时间" }],
      example: { en: "There's a good chance he'll wake up early.", zh: "他很可能会很早醒来。" }, publishedOn
    },
    {
      id: "s-b1-106", level: "B1", title: "Saying Something Is Not Worth the Effort", titleZh: "表示某件事不值得花费力气",
      scene: "weighing effort and value", pattern: "I don't think it's worth _____.", zh: "我觉得_____不太值得。",
      hints: [{ en: "driving across town for a small discount", zh: "为了小折扣开车穿过整个城市" }, { en: "repairing such an old appliance", zh: "维修这么旧的家电" }, { en: "waiting another hour", zh: "再等一个小时" }],
      example: { en: "I don't think it's worth driving across town for a small discount.", zh: "我觉得为了小折扣开车穿过整个城市不太值得。" }, publishedOn
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
      id: "a1-copy-shop-extra-copy", level: "A1", linkedSentence: "s-a1-103",
      title: "Printing One Missing Page at a Copy Shop", titleZh: "在复印店补印少掉的一页", scene: "copy shop",
      goal: "A volunteer notices one page is missing and asks a print clerk to complete the set.", goalZh: "志愿者发现少了一页，请店员补齐整份资料。",
      roles: [["A", "A volunteer preparing handouts", "正在准备讲义的志愿者"], ["B", "A print-shop clerk finishing the set", "协助补齐资料的复印店店员"]],
      lines: [
        ["A", "I need one more copy of page six.", "我还需要一份第六页。", "I need one more _____ of page six.", "我还需要一份第六页的_____。"],
        ["B", "No problem. Is black and white okay?", "没问题。黑白的可以吗？", "Is _____ okay?", "_____的可以吗？"],
        ["A", "Yes. Please print it on both sides.", "可以。请帮我双面打印。"],
        ["B", "Do you need the pages stapled?", "这些页面需要装订吗？", "Do you need the pages _____?", "这些页面需要_____吗？"],
        ["A", "Yes, in the top left corner.", "需要，订在左上角。"],
        ["B", "How many pages should be in each set?", "每一份应该有几页？", "How many _____ should be in each set?", "每一份应该有几_____？"],
        ["A", "There should be twelve pages now.", "现在应该有十二页。"],
        ["B", "I'll check the page order before I staple it.", "装订前我会先检查页码顺序。"],
        ["A", "Thanks. I need the handouts by three o'clock.", "谢谢。我三点前要用这些讲义。", "I need the handouts by _____.", "我_____前要用这些讲义。"],
        ["B", "They'll be ready in five minutes.", "五分钟后就会准备好。"]
      ],
      groups: [
        ["Extra item", [["copy", "副本"], ["sheet", "张"], ["set", "份"]]],
        ["Print option", [["black and white", "黑白"], ["regular paper", "普通纸"], ["single-sided", "单面"]]],
        ["Finishing", [["stapled", "装订"], ["folded", "折叠"], ["hole-punched", "打孔"]]],
        ["Page unit", [["pages", "页"], ["sheets", "张"], ["copies", "份"]]],
        ["Deadline", [["three o'clock", "三点"], ["noon", "中午"], ["the meeting", "会议开始前"]]]
      ]
    }),
    makeDialogue({
      id: "a1-clinic-ready-to-leave", level: "A1", linkedSentence: "s-a1-104",
      title: "Leaving a Clinic after a Blood Test", titleZh: "抽血后准备离开诊所", scene: "clinic",
      goal: "A patient checks that it is safe to leave after a routine blood test.", goalZh: "病人在一般抽血后确认可以安全离开。",
      roles: [["A", "A patient who has finished a blood test", "已经完成抽血的病人"], ["B", "A clinic assistant checking the patient", "确认病人状况的诊所助理"]],
      lines: [
        ["A", "I'm ready to go home.", "我准备好回家了。", "I'm ready to _____.", "我准备好_____了。"],
        ["B", "Let me check your bandage first.", "我先检查一下你的绷带。", "Let me check your _____ first.", "我先检查一下你的_____。"],
        ["A", "It feels fine, and there is no blood.", "感觉没问题，也没有流血。"],
        ["B", "Keep the bandage on for thirty minutes.", "绷带请保留三十分钟。", "Keep the bandage on for _____.", "绷带请保留_____。"],
        ["A", "Can I drive myself home?", "我可以自己开车回家吗？", "Can I _____ home?", "我可以_____回家吗？"],
        ["B", "Are you feeling dizzy or weak?", "你有觉得头晕或无力吗？", "Are you feeling _____?", "你有觉得_____吗？"],
        ["A", "No, I feel normal.", "没有，我感觉正常。"],
        ["B", "Please drink some water before you leave.", "离开前请喝一点水。"],
        ["A", "Okay. I'll sit here for five more minutes.", "好。我会再坐五分钟。"],
        ["B", "Good. Then you can go home.", "好。之后你就可以回家了。"]
      ],
      groups: [
        ["Next action", [["go home", "回家"], ["leave", "离开"], ["stand up", "站起来"]]],
        ["Item to check", [["bandage", "绷带"], ["arm", "手臂"], ["paperwork", "资料"]]],
        ["Time", [["thirty minutes", "三十分钟"], ["one hour", "一小时"], ["the rest of the morning", "今天上午剩下的时间"]]],
        ["Travel home", [["drive myself", "自己开车"], ["walk", "走路"], ["take the bus", "搭公车"]]],
        ["Feeling", [["dizzy or weak", "头晕或无力"], ["sick", "不舒服"], ["light-headed", "头昏"]]]
      ]
    }),
    makeDialogue({
      id: "a1-office-kitchen-leftovers", level: "A1", linkedSentence: "s-a1-105",
      title: "Putting Away Leftovers in an Office Kitchen", titleZh: "在办公室厨房收好剩余食物", scene: "office kitchen",
      goal: "Two coworkers clean up lunch and store the leftovers safely.", goalZh: "两位同事在午餐后收拾，并妥善保存剩余食物。",
      roles: [["A", "A coworker packing the leftover food", "正在收拾剩余食物的同事"], ["B", "A coworker cleaning the shared kitchen", "正在清理共用厨房的同事"]],
      lines: [
        ["A", "Please put the soup in the fridge.", "请把汤放进冰箱。", "Please put _____ in the _____.", "请把_____放进_____。"],
        ["B", "Should I use the top shelf or the bottom shelf?", "我应该放在上层还是下层？", "Should I use the _____ shelf?", "我应该放在_____层？"],
        ["A", "Use the top shelf, please.", "请放在上层。"],
        ["B", "Do I need to cover the bowl first?", "我需要先把碗盖起来吗？", "Do I need to cover _____ first?", "我需要先把_____盖起来吗？"],
        ["A", "Yes. The lid is next to the sink.", "需要。盖子在水槽旁边。"],
        ["B", "What should I do with the bread?", "面包要怎么处理？", "What should I do with _____?", "_____要怎么处理？"],
        ["A", "Leave it on the counter.", "把它留在流理台上。"],
        ["B", "I'll wipe the table too.", "我也会把桌子擦干净。"],
        ["A", "Please turn off the light when you're done.", "弄完后请把灯关掉。", "Please turn off _____ when you're done.", "弄完后请把_____关掉。"],
        ["B", "Okay. The kitchen will be clean in a minute.", "好。厨房马上就会整理干净。"]
      ],
      groups: [
        ["Food and place", [["the soup / fridge", "汤／冰箱"], ["the salad / fridge", "沙拉／冰箱"], ["the fruit / container", "水果／保鲜盒"]]],
        ["Shelf", [["top", "上层"], ["middle", "中层"], ["bottom", "下层"]]],
        ["Item to cover", [["the bowl", "碗"], ["the plate", "盘子"], ["the container", "保鲜盒"]]],
        ["Other food", [["the bread", "面包"], ["the cake", "蛋糕"], ["the fruit", "水果"]]],
        ["Switch off", [["the light", "灯"], ["the fan", "风扇"], ["the coffee machine", "咖啡机"]]]
      ]
    }),
    makeDialogue({
      id: "a1-building-wrong-mail", level: "A1", linkedSentence: "s-a1-106",
      title: "Returning Mail for Another Apartment", titleZh: "退回寄给其他住户的信件", scene: "apartment lobby",
      goal: "A resident brings incorrectly delivered mail to the building concierge.", goalZh: "住户把送错的信件交给大楼管理员处理。",
      roles: [["A", "A resident who received the wrong mail", "收到错误信件的住户"], ["B", "A concierge who checks the apartment number", "确认房号的大楼管理员"]],
      lines: [
        ["A", "This isn't my letter.", "这不是我的信。", "This isn't my _____.", "这不是我的_____。"],
        ["B", "Let me check the name and apartment number.", "我来检查姓名和房号。", "Let me check the _____ and _____.", "我来检查_____和_____。"],
        ["A", "It belongs to the person in 4B.", "这是四楼 B 户住户的。"],
        ["B", "I can put it in their mailbox.", "我可以把它放进他们的信箱。", "I can put it in their _____.", "我可以把它放进他们的_____。"],
        ["A", "Is the mailbox downstairs?", "信箱在楼下吗？", "Is the mailbox _____?", "信箱在_____吗？"],
        ["B", "Yes, beside the front door.", "是的，在大门旁边。"],
        ["A", "I also received a flyer for the old tenant.", "我还收到一张寄给以前住户的传单。"],
        ["B", "Please leave that at the front desk.", "请把那个留在前台。", "Please leave that at the _____.", "请把那个留在_____。"],
        ["A", "Okay. I'll bring both items downstairs.", "好。我会把两样东西都带到楼下。"],
        ["B", "Thank you for returning them.", "谢谢你把它们送回来。"]
      ],
      groups: [
        ["Wrong item", [["letter", "信"], ["package", "包裹"], ["newspaper", "报纸"]]],
        ["Mail details", [["name / apartment number", "姓名／房号"], ["address / floor", "地址／楼层"], ["label / unit number", "标签／户号"]]],
        ["Place for mail", [["mailbox", "信箱"], ["mail slot", "投递口"], ["package shelf", "包裹架"]]],
        ["Mailbox location", [["downstairs", "楼下"], ["in the lobby", "大厅里"], ["near the entrance", "入口附近"]]],
        ["Drop-off place", [["front desk", "前台"], ["mail room", "收发室"], ["concierge desk", "管理员柜台"]]]
      ]
    }),
    makeDialogue({
      id: "a2-rice-cooker-after-break", level: "A2", linkedSentence: "s-a2-103",
      title: "Using a Rice Cooker after a Long Break", titleZh: "隔了一阵子再次使用电饭锅", scene: "home kitchen",
      goal: "A housemate gives a quick refresher on a rice cooker before dinner.", goalZh: "室友在准备晚餐前，简单提醒电饭锅的使用步骤。",
      roles: [["A", "A housemate cooking rice after a long break", "隔了一阵子再次煮饭的室友"], ["B", "A housemate familiar with the rice cooker", "熟悉电饭锅操作的室友"]],
      lines: [
        ["A", "I haven't used this rice cooker in a while.", "我有一阵子没用这个电饭锅了。", "I haven't used _____ in a while.", "我有一阵子没用_____了。"],
        ["B", "The regular setting is fine for white rice.", "煮白饭用一般模式就可以。", "The _____ setting is fine for white rice.", "煮白饭用_____模式就可以。"],
        ["A", "Should I rinse the rice first?", "我应该先洗米吗？", "Should I _____ the rice first?", "我应该先_____米吗？"],
        ["B", "Yes, and use the cup that came with the cooker.", "要，而且要用电饭锅附的量杯。", "Use the _____ that came with the cooker.", "要用电饭锅附的_____。"],
        ["A", "I remember the water lines inside the pot.", "我记得内锅里面有水位线。"],
        ["B", "For two cups of rice, fill the water to line two.", "两杯米的话，水加到第二条线。", "Fill the water to line _____.", "水加到第_____条线。"],
        ["A", "Does it switch to warm automatically?", "它会自动切换到保温吗？"],
        ["B", "Yes. Leave the lid closed for ten minutes afterward.", "会。完成后让锅盖保持关闭十分钟。"],
        ["A", "Got it. Dinner should be ready around seven.", "明白了。晚餐大约七点会准备好。"],
        ["B", "Great. I'll prepare the vegetables.", "好。我来准备蔬菜。"]
      ],
      groups: [
        ["Appliance", [["this rice cooker", "这个电饭锅"], ["the slow cooker", "慢炖锅"], ["this blender", "这个果汁机"]]],
        ["Setting", [["regular", "一般"], ["quick-cook", "快速煮饭"], ["brown-rice", "糙米"]]],
        ["Preparation", [["rinse", "洗"], ["measure", "量"], ["soak", "浸泡"]]],
        ["Measuring tool", [["measuring cup", "量杯"], ["rice cup", "米杯"], ["small cup", "小杯子"]]],
        ["Water line", [["two", "二"], ["three", "三"], ["the marked line", "标示线"]]]
      ]
    }),
    makeDialogue({
      id: "a2-riverside-path-again", level: "A2", linkedSentence: "s-a2-104",
      title: "Walking an Updated Riverside Path", titleZh: "重走整修后的河滨步道", scene: "riverside path",
      goal: "A former neighborhood resident learns what changed along a familiar walking route.", goalZh: "以前住在附近的居民了解熟悉步道整修后的变化。",
      roles: [["A", "A former resident revisiting the neighborhood", "回到旧社区走走的以前住户"], ["B", "A park volunteer who knows the updated route", "熟悉新路线的公园志愿者"]],
      lines: [
        ["A", "I used to walk here every morning.", "我以前每天早上都会来这里散步。", "I used to _____ every _____.", "我以前每_____都会_____。"],
        ["B", "The path reopened last month.", "这条步道上个月重新开放。"],
        ["A", "The riverbank looks much wider now.", "现在河岸看起来宽多了。"],
        ["B", "We added better lighting near the bridge.", "我们在桥附近加了更好的照明。", "We added _____ near the bridge.", "我们在桥附近加了_____。"],
        ["A", "Does the path still reach the train station?", "这条步道还是可以通到火车站吗？"],
        ["B", "Yes, but the footbridge closes at ten.", "可以，不过人行桥十点关闭。", "The footbridge closes at _____.", "人行桥_____关闭。"],
        ["A", "Is there a place to refill a water bottle?", "这里有可以装水的地方吗？"],
        ["B", "There's a fountain beside the playground.", "游乐场旁边有一座饮水台。", "There's a fountain beside _____.", "_____旁边有一座饮水台。"],
        ["A", "I'll come back before work tomorrow.", "我明天上班前会再来。", "I'll come back before _____.", "我会在_____前再来。"],
        ["B", "Morning is the quietest time here.", "早上是这里最安静的时候。"]
      ],
      groups: [
        ["Past routine", [["walk here / morning", "来这里散步／早上"], ["run here / weekend", "来这里跑步／周末"], ["cycle here / evening", "来这里骑车／晚上"]]],
        ["Improvement", [["better lighting", "更好的照明"], ["more benches", "更多长椅"], ["a wider path", "更宽的步道"]]],
        ["Closing time", [["ten", "十点"], ["sunset", "日落时"], ["nine thirty", "九点半"]]],
        ["Landmark", [["the playground", "游乐场"], ["the bridge", "桥"], ["the restrooms", "洗手间"]]],
        ["Return time", [["work tomorrow", "明天上班"], ["breakfast", "早餐"], ["sunset", "日落"]]]
      ]
    }),
    makeDialogue({
      id: "a2-coffee-stain-cleaner", level: "A2", linkedSentence: "s-a2-105",
      title: "Removing a Coffee Stain from a Work Shirt", titleZh: "处理工作衬衫上的咖啡渍", scene: "dry cleaner",
      goal: "A customer asks a cleaner about removing a fresh stain without damaging the shirt.", goalZh: "顾客询问如何在不损伤衬衫的情况下清除新污渍。",
      roles: [["A", "A customer with a stained work shirt", "带着沾到污渍的工作衬衫前来的顾客"], ["B", "A cleaner checking the fabric and stain", "检查布料和污渍的洗衣店人员"]],
      lines: [
        ["A", "I was looking for something to remove this coffee stain.", "我当时想找个东西来去掉这个咖啡渍。", "I was looking for something to _____.", "我当时想找个东西来_____。"],
        ["B", "Did you put any cleaner on it already?", "你已经在上面用过清洁剂了吗？", "Did you put _____ on it already?", "你已经在上面用过_____了吗？"],
        ["A", "No. I only pressed it with a dry towel.", "没有。我只用干毛巾轻压过。"],
        ["B", "That was a good choice for this fabric.", "对于这种布料，那样处理是对的。", "That was a good choice for this _____.", "对于这种_____，那样处理是对的。"],
        ["A", "Can the shirt be ready by tomorrow evening?", "这件衬衫明晚以前能处理好吗？", "Can the shirt be ready by _____?", "这件衬衫_____以前能处理好吗？"],
        ["B", "Yes, unless the stain needs a second treatment.", "可以，除非污渍需要处理第二次。", "The stain may need a second _____.", "污渍可能需要处理第二_____。"],
        ["A", "Please call me if it takes longer.", "如果需要更久，请打电话给我。"],
        ["B", "I will. Keep this claim ticket with you.", "我会的。请保留这张取衣单。"],
        ["A", "Thanks. I need the shirt for a presentation on Friday.", "谢谢。我星期五简报时需要穿这件衬衫。"],
        ["B", "We'll do our best to have it ready tomorrow.", "我们会尽量在明天处理好。"]
      ],
      groups: [
        ["Purpose", [["remove this coffee stain", "去掉这个咖啡渍"], ["protect the fabric", "保护布料"], ["clean the collar", "清洁衣领"]]],
        ["Product", [["any cleaner", "任何清洁剂"], ["stain remover", "去渍剂"], ["soap", "肥皂"]]],
        ["Material", [["fabric", "布料"], ["shirt", "衬衫"], ["color", "颜色"]]],
        ["Deadline", [["tomorrow evening", "明天晚上"], ["Friday morning", "星期五早上"], ["the weekend", "周末"]]],
        ["Extra step", [["treatment", "次处理"], ["cleaning", "次清洗"], ["inspection", "次检查"]]]
      ]
    }),
    makeDialogue({
      id: "a2-pharmacy-cough-duration", level: "A2", linkedSentence: "s-a2-106",
      title: "Asking a Pharmacist about a Cough", titleZh: "向药剂师询问咳嗽问题", scene: "pharmacy",
      goal: "A customer explains how long a cough has lasted and asks what to do next.", goalZh: "顾客说明咳嗽持续的时间，并询问下一步该怎么处理。",
      roles: [["A", "A customer with a recent cough", "最近开始咳嗽的顾客"], ["B", "A pharmacist asking about symptoms", "询问症状的药剂师"]],
      lines: [
        ["A", "I've had this cough for three days.", "我咳嗽已经三天了。", "I've had this _____ for _____.", "我这个_____已经持续_____了。"],
        ["B", "Do you also have a fever or trouble breathing?", "你还有发烧或呼吸困难吗？", "Do you also have _____?", "你还有_____吗？"],
        ["A", "No fever. My throat feels dry at night.", "没有发烧。晚上喉咙会觉得干。"],
        ["B", "Are you taking any other medicine?", "你目前有服用其他药物吗？", "Are you taking _____?", "你目前有服用_____吗？"],
        ["A", "Only my usual allergy medicine.", "只有平常吃的过敏药。"],
        ["B", "This cough medicine may make you sleepy.", "这种咳嗽药可能会让你想睡。"],
        ["A", "How often should I take it?", "我多久应该吃一次？", "How often should I _____?", "我多久应该_____一次？"],
        ["B", "Take one dose before bed for up to three nights.", "睡前服用一次，最多连续三个晚上。", "Take one dose before _____ for up to three nights.", "_____前服用一次，最多连续三个晚上。"],
        ["A", "When should I see a doctor?", "什么情况下我应该去看医生？"],
        ["B", "Get medical help if breathing becomes difficult.", "如果呼吸变得困难，请寻求医疗协助。"]
      ],
      groups: [
        ["Symptom and duration", [["cough / three days", "咳嗽／三天"], ["sore throat / two days", "喉咙痛／两天"], ["headache / several hours", "头痛／几个小时"]]],
        ["Other symptom", [["a fever or trouble breathing", "发烧或呼吸困难"], ["chest pain", "胸痛"], ["a runny nose", "流鼻水"]]],
        ["Other medicine", [["any other medicine", "其他药物"], ["allergy medicine", "过敏药"], ["cold medicine", "感冒药"]]],
        ["Frequency question", [["take it", "服用"], ["use it", "使用"], ["take a dose", "服用一次"]]],
        ["Dose time", [["bed", "睡觉"], ["breakfast", "早餐"], ["your evening meal", "晚餐"]]]
      ]
    }),
    makeDialogue({
      id: "b1-shelf-measurement-mistake", level: "B1", linkedSentence: "s-b1-103",
      title: "A Shelf That Blocks the Light Switch", titleZh: "会挡住电灯开关的架子", scene: "furniture installation",
      goal: "A resident and installer find a practical solution after a measuring mistake.", goalZh: "住户与安装人员在测量失误后找出实际可行的解决方式。",
      roles: [["A", "A resident who ordered a wall shelf", "订购墙面架子的住户"], ["B", "An installer checking the available wall space", "检查墙面空间的安装人员"]],
      lines: [
        ["A", "I should have measured the wall before ordering the shelf.", "我本来应该在订购架子前先量墙面尺寸。", "I should have _____ before _____.", "我本来应该在_____之前先_____。"],
        ["B", "The shelf fits, but it would cover the light switch.", "架子放得下，但会挡住电灯开关。", "It fits, but it would cover _____.", "它放得下，但会挡住_____。"],
        ["A", "Could we install it a little higher?", "我们可以把它装高一点吗？", "Could we install it _____?", "我们可以把它装得_____吗？"],
        ["B", "The top would be difficult to reach from there.", "装在那里以后，最上层会很难拿到。", "The top would be difficult to reach from _____.", "装在_____以后，最上层会很难拿到。"],
        ["A", "What about the wall beside the desk?", "书桌旁边的墙呢？"],
        ["B", "That space is wide enough, and there are no wires behind it.", "那里够宽，后面也没有电线。", "That space is wide enough, and there are no _____ behind it.", "那里够宽，后面也没有_____。"],
        ["A", "Will the shelf still hold the same amount of weight?", "架子还是能承受同样的重量吗？"],
        ["B", "Yes, if we use anchors made for this wall.", "可以，只要我们使用适合这面墙的壁虎。"],
        ["A", "Let's use the space beside the desk, then.", "那就使用书桌旁边的空间吧。"],
        ["B", "Good. I'll mark the new holes before drilling.", "好。我会在钻孔前标记新的位置。"]
      ],
      groups: [
        ["Missed step", [["measured the wall / ordering the shelf", "量墙面尺寸／订购架子"], ["checked the switch / choosing the shelf", "检查开关位置／挑选架子"], ["marked the space / buying it", "标记空间／购买"]]],
        ["Blocked feature", [["the light switch", "电灯开关"], ["the outlet", "插座"], ["the window handle", "窗户把手"]]],
        ["New position", [["a little higher", "高一点"], ["farther to the left", "再往左一点"], ["beside the desk", "书桌旁边"]]],
        ["Position", [["there", "那里"], ["that height", "那个高度"], ["above the desk", "书桌上方"]]],
        ["Hidden item", [["wires", "电线"], ["pipes", "水管"], ["a wall stud", "墙柱"]]]
      ]
    }),
    makeDialogue({
      id: "b1-rental-car-return-photos", level: "B1", linkedSentence: "s-b1-104",
      title: "Documenting a Rental Car before Returning It", titleZh: "还车前记录租赁车辆状况", scene: "rental-car return",
      goal: "A renter and return agent document the car clearly before the keys are handed over.", goalZh: "租车人和还车人员在交还钥匙前清楚记录车辆状况。",
      roles: [["A", "A renter returning a car after a trip", "旅行后准备还车的租车人"], ["B", "A return agent inspecting the vehicle", "检查车辆的还车人员"]],
      lines: [
        ["A", "I'd feel better if we photographed the fuel gauge first.", "如果我们先拍下油表，我会比较安心。", "I'd feel better if we _____.", "如果我们_____，我会比较安心。"],
        ["B", "Of course. The tank shows full right now.", "当然可以。现在油表显示是满的。", "The tank shows _____ right now.", "现在油表显示_____。"],
        ["A", "I also took pictures of the outside this morning.", "我今天早上也拍了车子外观。"],
        ["B", "Please send them through the return link on your receipt.", "请透过收据上的还车连结上传。", "Please send them through the _____ on your receipt.", "请透过收据上的_____上传。"],
        ["A", "There was already a scratch near the rear wheel.", "后轮附近原本就有一道刮痕。"],
        ["B", "I can see it in the pickup report.", "我在取车纪录里看得到。"],
        ["A", "Will I receive a final receipt today?", "我今天会收到最终收据吗？", "Will I receive _____ today?", "我今天会收到_____吗？"],
        ["B", "Yes, after the mileage and fuel level are recorded.", "会，里程和油量记录完成后就会寄出。", "It will be sent after _____ are recorded.", "_____记录完成后就会寄出。"],
        ["A", "I'll keep the photos until the deposit is released.", "押金退还前，我会保留这些照片。"],
        ["B", "That's sensible. Here is your return confirmation.", "这样很稳妥。这是你的还车确认单。"]
      ],
      groups: [
        ["Extra record", [["photographed the fuel gauge first", "先拍下油表"], ["recorded the mileage", "记录里程"], ["checked the car together", "一起检查车辆"]]],
        ["Fuel level", [["full", "满的"], ["three quarters", "四分之三"], ["half full", "一半"]]],
        ["Upload method", [["return link", "还车连结"], ["rental app", "租车应用程式"], ["email address", "电子邮件地址"]]],
        ["Final document", [["a final receipt", "最终收据"], ["the return report", "还车报告"], ["a confirmation email", "确认邮件"]]],
        ["Final details", [["the mileage and fuel level", "里程和油量"], ["the keys and parking space", "钥匙和停车位"], ["the final inspection", "最终检查"]]]
      ]
    }),
    makeDialogue({
      id: "b1-toddler-sleep-away-from-home", level: "B1", linkedSentence: "s-b1-105",
      title: "Helping a Toddler Sleep at a Relative's Home", titleZh: "帮助幼儿在亲戚家入睡", scene: "family overnight stay",
      goal: "A parent explains a familiar bedtime routine so a grandparent can help.", goalZh: "家长说明熟悉的睡前习惯，让祖父母能够协助照顾。",
      roles: [["A", "A parent preparing a toddler for bedtime", "正在准备让幼儿睡觉的家长"], ["B", "A grandparent helping during an overnight stay", "在过夜期间协助照顾的祖父母"]],
      lines: [
        ["A", "There's a good chance he'll wake up if the hallway stays bright.", "如果走廊一直很亮，他很可能会醒来。", "There's a good chance _____.", "很可能会_____。"],
        ["B", "I'll turn off the hall light after we settle him.", "我们让他安顿好以后，我会关掉走廊灯。", "I'll turn off _____ after we settle him.", "我们让他安顿好以后，我会关掉_____。"],
        ["A", "He usually asks for the same story twice.", "他通常会要求同一个故事讲两次。"],
        ["B", "Which book should I leave beside the bed?", "我应该把哪本书放在床边？", "Which _____ should I leave beside the bed?", "我应该把哪本_____放在床边？"],
        ["A", "The blue one with the train on the cover.", "蓝色那本，封面有火车。", "The _____ one with _____ on the cover.", "_____那本，封面有_____。"],
        ["B", "Does he need a night-light?", "他需要小夜灯吗？"],
        ["A", "Yes, but please use the lowest setting.", "需要，不过请用最低亮度。"],
        ["B", "What should I do if he asks for you?", "如果他找你，我应该怎么做？", "What should I do if _____?", "如果_____，我应该怎么做？"],
        ["A", "Tell him I'm downstairs and will check on him soon.", "告诉他我在楼下，很快会来看他。"],
        ["B", "Okay. We'll keep the routine familiar and quiet.", "好。我们会维持他熟悉而安静的睡前流程。"]
      ],
      groups: [
        ["Likely outcome", [["he'll wake up if the hallway stays bright", "走廊一直很亮的话，他会醒来"], ["he'll ask for water", "他会想喝水"], ["he'll need extra time to settle", "他会需要更多时间安顿"]]],
        ["Light", [["the hall light", "走廊灯"], ["the bedroom light", "卧室灯"], ["the lamp", "台灯"]]],
        ["Bedtime item", [["book", "书"], ["toy", "玩具"], ["blanket", "毯子"]]],
        ["Book description", [["blue / a train", "蓝色／火车"], ["green / a bear", "绿色／熊"], ["small / stars", "小本／星星"]]],
        ["Situation", [["he asks for you", "他找你"], ["he wakes up", "他醒来"], ["he gets out of bed", "他下床"]]]
      ]
    }),
    makeDialogue({
      id: "b1-distant-grocery-discount", level: "B1", linkedSentence: "s-b1-106",
      title: "Deciding Whether a Distant Discount Is Worth the Trip", titleZh: "判断是否值得为了折扣跑远路", scene: "household shopping plan",
      goal: "Two roommates compare a small discount with the time and fuel needed to get it.", goalZh: "两位室友比较小折扣与往返所需的时间和油费。",
      roles: [["A", "A roommate who found a discount across town", "发现远处商店折扣的室友"], ["B", "A roommate comparing the actual savings", "计算实际省下金额的室友"]],
      lines: [
        ["A", "The supermarket across town has detergent on sale.", "城另一边的超市洗衣精正在特价。", "The supermarket across town has _____ on sale.", "城另一边的超市_____正在特价。"],
        ["B", "I don't think it's worth driving that far for a small discount.", "我觉得为了小折扣开那么远不太值得。", "I don't think it's worth _____.", "我觉得_____不太值得。"],
        ["A", "Each bottle is four dollars cheaper there.", "那里每瓶便宜四美元。", "Each bottle is _____ cheaper there.", "那里每瓶便宜_____。"],
        ["B", "How many bottles were you planning to buy?", "你原本打算买几瓶？", "How many _____ were you planning to buy?", "你原本打算买几_____？"],
        ["A", "Only two. We don't have space for more.", "只有两瓶。我们没有空间放更多。"],
        ["B", "The fuel and parking would use most of the savings.", "油费和停车费会吃掉大部分省下的钱。", "_____ would use most of the savings.", "_____会吃掉大部分省下的钱。"],
        ["A", "The store nearby has a smaller discount tomorrow.", "附近的商店明天有幅度较小的折扣。"],
        ["B", "That sounds better, especially since we can walk there.", "那听起来更好，尤其我们可以走路去。"],
        ["A", "Let's buy two bottles nearby tomorrow, then.", "那我们明天就在附近买两瓶吧。"],
        ["B", "Good. We still save money without losing an hour.", "好。我们还是能省钱，也不用花掉一小时。"]
      ],
      groups: [
        ["Sale item", [["detergent", "洗衣精"], ["dish soap", "洗碗精"], ["toilet paper", "卫生纸"]]],
        ["Extra effort", [["driving that far for a small discount", "为了小折扣开那么远"], ["spending an hour on the trip", "花一小时往返"], ["paying for parking", "付停车费"]]],
        ["Price difference", [["four dollars", "四美元"], ["two dollars", "两美元"], ["ten percent", "百分之十"]]],
        ["Quantity", [["bottles", "瓶"], ["packs", "包"], ["boxes", "盒"]]],
        ["Travel cost", [["The fuel and parking", "油费和停车费"], ["The bus fare", "公车车资"], ["The extra trip", "额外一趟"]]]
      ]
    })
  ];

  catalog.sentencePractice.push(...newSentences);
  catalog.dialogues.push(...newDialogues);
  catalog.version = "1023_today_1";

  const dialoguePath = catalog.paths.find(path => path.id === "daily-conversation");
  const sentencePath = catalog.paths.find(path => path.id === "listening");
  if (dialoguePath) dialoguePath.meta = `${catalog.dialogues.length} practice sets · A1 / A2 / B1`;
  if (sentencePath) sentencePath.meta = `${catalog.sentencePractice.length} sentence patterns · A1 / A2 / B1`;
  if (window.SITE) window.SITE.version = "1023_today_1";
})();
