// Конфигурация альбомов
const albums = {
    kurgan: {
        name: 'Курган',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['1_glioca', '10_i5txzw', '12_qt3bni', '13_pmphnn', '16_gyo2ns', '17_guka4e', '2_xla1gd', '20_kqrrqg', '41_wkt4sh', '42_vqre3t', '43_j5if9e', '5_bofudc', '6_dx1qhd', '7_jci2rf', '8_mmekqi', '9_skydbm', 'IMG_1052_zurrkx', 'IMG_1053_nzs0tn', 'IMG_1055_iwvzbb', 'IMG_1063_h0xlcy', 'IMG_1067_jhljxn', 'IMG_1068_qsikep', 'IMG_1078_zw0u9y', 'IMG_1080_nrnyfp', 'IMG_1086_nul8b0', 'IMG_1088_irt6zp', 'IMG_1097_qnwfzm', 'IMG_1104_mnunav', 'IMG_1115_wwvbzw', 'IMG_1117_rbgire', 'IMG_1127_lnqb3j', 'IMG_1130_yhhnuc', 'IMG_1154_kdvnoe', 'IMG_1155_uyadoj', 'IMG_1157_jyadd0', 'IMG_1184_mqvddv', 'IMG_1186_o42mge', 'IMG_1217_umkwnr', 'IMG_1218_jb0qca', 'IMG_1247_xgpyzt', 'IMG_1263_ldpq5r', 'IMG_1267_ih1sli', 'IMG_1272_tjw5ha', 'IMG_1273_fc08wb', 'IMG_1298_gybqfc', 'IMG_1311_npxl0g', 'IMG_1338_syrx42', 'IMG_1344_izxtlv', 'IMG_1352_mti9k9', 'IMG_1355_w271j5', 'IMG_1365_tzxgym', 'IMG_1375_ua3afx', 'IMG_1384_xs98sd', 'IMG_1390_aw29f2', 'IMG_1394_atnhyb', 'IMG_1401_lxs61u', 'IMG_1514_pglfcr', 'IMG_1531_ai5e8z', 'IMG_1544_hpnylc', 'IMG_1557_cweyjr', 'IMG_1564_lnpzf5', 'IMG_1600_lm5kko', 'IMG_2175_p8r7qe']
    },
    tyumen: {
        name: 'Тюмень',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['1_rrhc5s', '2_bhmqmm', '14_l32oen', '16_yy4pg6', '19_ebuwlz', '20_pwvx3g', '21_pltpq8', '3_lqvphc', '4_erxjnc', '47_ekfaqh', '48_r3bazr', '58_yv0uyb', '59_rwnarb', '60_gusk1f', '61_mf74gw', '62_ibosic', '63_cuma1y', '64_hianzf', '65_lygq5g', '66_lfo3zq', '67_p6jkcq', '68_cyubwt', '69_xplbro', '70_aegi0m', '71_uwqqke', '72_hbu8xk']
    },
    dolmatovo: {
        name: 'Долматово',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['IMG_1425_a3efrx', 'IMG_1437_aricwn', 'IMG_1438_t79rgd', 'IMG_1445_e65bx1', 'IMG_1450_wd4xmg', 'IMG_1458_yloeey', 'IMG_1461_fuan0e', 'IMG_1465_tit6a7', 'IMG_1473_gcifcj', 'IMG_1490_t5cm3f', 'IMG_1491_mipanv']
    },
    wedding: {
        name: 'Свадьба',
        folder: 'https://res.cloudinary.com/diqfvgfo3/image/upload/v1771873617',
        photos: ['0001_uskgvf.jpg', '0002_n52jva.jpg', '0003_wnz5ky.jpg', '0004_z9llps.jpg', '0005_ecp24t.jpg', '0006_wf4fje', '0007_joxo2k', '0008_fyb9hm', '0009_iblbf8', '0010_utz5fv', '0011_jig9fd', '0012_yhyaw7', '0013_qdwmc7', '0014_ukjniy', '0015_jiaqey', '0016_ifrrhl', '0017_ivhvwg', '0018_jnjgxb', '0019_wysupj', '0020_cstebx', '0021_ce7yk1', '0022_muxobt', '0023_aean5b', '0024_pfkyd7', '0025_ribm3f', '0026_geef9n', '0027_pddm6n', '0028_jr4sk3', '0029_zwwpn7', '0030_oc3h0q', '0031_eny8tl', '0032_cdekvx', '0033_vrrcs9', '0034_z0vw2d', '0035_nomxem', '0036_q9o6hj', '0037_ffwudp', '0038_llqgjo', '0039_zrgwcj', '0040_mhp6tf', '0041_jzrse2', '0042_domebu', '0043_kwplhu', '0044_kycyvb', '0045_mpeeia', '0046_gqjstx', '0047_v6ousq', '0048_gwq9a3', '0049_ut9uvx', '0050_ny4qnq', '0051_abslgr', '0052_hcxdjn', '0053_wvis3k', '0054_ghct2v', '0055_xdfucz', '0056_dz2snn', '0057_psw4mb', '0058_w3cwly', '0059_por1ve', '0060_izycrn', '0061_lwlurg', '0062_hcg4jo', '0063_ccuvsn', '0064_rn5ipt', '0065_tt44w9', '0066_qdbiqg', '0067_w3zd4a', '0068_qwykl1', '0069_l8cmny', '0070_d6tfrm', '0071_d71urd', '0072_dyhcch', '0073_t2g9r9', '0074_bcwbw2', '0075_nkwlbw', '0076_ogc0mz', '0077_qxiy06', '0078_jdlhsw', '0079_scykdt', '0080_jqcc7t', '0081_gmyuiq', '0082_etdakl', '0083_buqrgw', '0084_mtipq3', '0085_svyw2n', '0086_iupsm9', '0087_achmgv', '0088_lr7qep', '0089_k13rkk', '0090_mlabz3', '0091_zwetyw', '0092_cmwn6t', '0093_sar61v', '0094_zua2tb', '0095_xjbcmj', '0096_fci9v9', '0097_idpfyq', '0098_m4zc4b', '0099_pq0iwe', '0100_ng6ynf', '0101_xlhovm', '0102_xbtcpj', '0103_mfvp2w', '0104_sitoti', '0105_vemx1g', '0106_refwsv', '0107_wiaist', '0108_nkwy94', '0109_vketl7', '0110_oc3cyu', '0111_ecepxj', '0112_wieood', '0113_p6exib', '0114_yg9qlg', '0115_lqvgfl', '0116_b62efi', '0117_kpvpxv', '0118_fwz7xh', '0119_a2e1ma', '0120_stcrs7', '0121_jc9qbb', '0122_fcmpql', '0123_ur1eu0', '0124_pfdal5', '0125_msy7xl', '0126_q3wbcj', '0127_mmmjqv', '0128_zmuh6u', '0129_frzawx', '0130_schz4n', '0131_izsl7d', '0132_krgz9f', '0133_uqj5vd', '0134_at0scw', '0135_srrvnj', '0136_gzzado', '0137_lohhre', '0138_b2nmjd', '0139_agsfzl', '0140_vsrqtx', '0141_xcyfu4', '0142_qxqwff', '0143_nfyopi', '0144_xhqtm7', '0145_xoahoo', '0146_htx8qf', '0147_ejjtxa', '0148_ielz76', '0149_c4oxcc', '0150_hqa2yp', '0151_hiemy6', '0152_cmne3d', '0153_t5fhpf', '0154_yfxksx', '0155_vvjtls', '0156_yrgolm', '0157_ep4hdy', '0158_agynzl', '0159_iwe2tr', '0160_imjrjh', '0161_qkjzdk', '0162_mqgfz2', '0163_lbodd0', '0164_aeanwx', '0165_f6u2dt', '0166_lpnpit', '0167_j26xh6', '0168_o3k5iq', '0169_ggtn4j', '0170_mpzpxm', '0171_juwtq7', '0172_dsgmqe', '0173_noa6eu', '0174_mfbvh5', '0175_s1olwi', '0176_n4karn', '0177_kxwchb', '0178_y1l21w', '0179_o7nm9r', '0180_atbxkq', '0181_upnyeh', '0182_aetjbo', '0183_yidscj', '0184_hes5cc', '0185_hxixlb', '0186_jgmv7x', '0187_bteytn', '0188_pqjpce', '0189_fuxz3p', '0190_xo4gsw']
    },
    other: {
        name: 'Невошедшее',
        folder: 'photos/Невошедшее',
        photos: ['5436068101876743088_121.jpg', '5436101349218580697_121.jpg']
    }
};

// Дата начала отношений (измените на вашу дату)
const relationshipStartDate = new Date('2024-08-25');

// ============================================
// КОНФИГУРАЦИЯ ВАЖНЫХ ДАТ
// ============================================
const importantDates = {
    met: new Date('2018-10-26'),      // Дата знакомства
    dating: new Date('2024-08-25'),   // Дата начала отношений
    wedding: new Date('2025-05-15')   // Дата свадьбы
};

// ============================================
// ЗАПИСКИ В КОНВЕРТЫ (отредактируйте текст здесь)
// ============================================
const notes = {
    met: {
        his: `Саша, моя родная,\n\nПомнишь юбилей моей мамы в 2018-м? Мне было 18, и я понятия не имел, сколько тебе лет — просто посмотрел на тебя и всё. Что-то такое есть в тебе, что сразу и навсегда запало мне в душу. Не объяснить словами — просто притяжение, которое я чувствую снова и снова до сих пор.\n\nМы веселились, участвовали в конкурсах, танцевали — и куда же без медленного танца, он тоже был. А потом была та прогулка по скверу... Мы говорили, говорили, говорили — и время пролетело так быстро, что я не заметил, как нас уже разлучили. И кто же? Мои собственные родители! 😄\n\nНо даже это нас не остановило. Когда я добрался до Талгата, мы продолжали переписываться, и в конце — наше первое «спокойной ночи». Такое простое, но такое важное. Именно с него, наверное, всё и началось по-настоящему.\n\nЛюблю тебя, родная моя девочка.\n\nТвой Александр❤️`,
        her: `Если бы мне предложили заново прожить любой день, я бы выбрала тот, наш первый вечер. ❤️\n\nВесь вечер мне казалось, что за мной кто-то наблюдал, но я не понимала кто, возможно из-за того, что я там особо никого не знала…..Но потом я поняла, кто это был)\n\nКогда ведущая сказала, выбрать себе пару,  ты подошел ко мне и протянул мне руку, я была очень приятно удивлена 🥰До сих пор помню, как ты взял меня за руку и мы пошли участвовать в конкурсе.\n\nТот самый танец. В тот момент я почувствовала что-то очень приятное на душе, с тобой я чувствовала себя очень легко и по настоящему. Отчетливо помню твою рубашку, твой запах парфюма и то, как ты очень бережно и нежно прижимал меня к себе.😇\n\nМы много говорили, танцевали, даже прогуляться успели. В тот момент казалось, что мы уже знаем друг друга много лет. Ты поразил меня тем, что очень аккуратно и бережно относился ко мне. Даже предупредил родителей, что забираешь  меня на прогулку😸\n\nЭто были невероятные чувства, эмоции и ощущения.\n\nТвоя Александра❤️\n(Твоя восьмиклассница😸)`
    },
    dating: {
        his: `Любовь моя,\n\nДавай ненадолго вернемся в прошлое. В то время, когда мы еще только шли друг к другу — от моментов нашего самого первого общения до того дня, когда мы стали парой.🥰\n\nЗнаешь, каждый раз, когда я уезжал в Курган на сессии, этот город ассоциировался у меня совсем не с учебой. В первую очередь он ассоциировался с семьей Акуловых, а если быть совсем честным — с тобой. Помнишь те дни? Я заходил к вам в гости на чай, мы подолгу разговаривали обо всем на свете с дядей Ромой. И, конечно же, в этих беседах мы никогда не обходили стороной тебя.🤫\n\nМне всегда было так невероятно легко с тобой общаться — что у вас дома, что в колледже. Но за этой легкостью скрывалось кое-что еще: ты даже не представляешь, как у меня перехватывало дыхание каждый раз, когда я тебя видел. Для меня ты была потрясающе красивой в каждую нашу встречу.😍\n\nА потом случился тот звонок в феврале 2024 года. Я позвонил, чтобы попросить номер телефона дяди Ромы, и мне показалось, что ты тогда так растерялась, звучала такой потерянной... Но всё кардинально изменилось в августе того же года.😊\n\nВсё закрутилось с одной лишь фразы: «А зачем ловить, если он давно пойман?» 😅 (До сих пор улыбаюсь, вспоминая тот разговор про букет невесты). С этого момента нас затянуло. Мы начали переписываться, говорить часами обо всём на свете, и вскоре я решился задать главный вопрос: будешь ли ты моей девушкой?🫣\n\nТы согласилась не сразу. Я помню, как ты упиралась, обдумывала, взвешивала все «за» и «против». Я тогда был на выезде и ждал твоего ответа с таким замиранием сердца, словно решалась моя судьба, ждал как чего-то по-настоящему грандиозного. И вот, наконец, твое заветное «да».❤️‍🔥\n\nВ тот момент ты стала моей маленькой малышкой. Иногда думаю, что судьба просто ждала подходящего момента, чтобы свести нас вновь. Знаешь, я ведь тогда даже представить не мог, что та самая девочка, маленькая восьмиклассница, которая так сильно понравилась мне еще в далеком 2018 году, однажды станет моей.🥰\n\nЭта записка — просто еще один повод сказать тебе о самом главном. О том, как сильно я тебя любил, как безгранично люблю сейчас и буду любить всегда. ❤️❤️❤️`,
        her: `После нашего знакомства мы частенько переписывались, каждая переписка была с особым трепетом и интересом друг к другу, при этом мы были очень искренние😇\n\nЧасто виделись в колледже и я всегда была очень рада тебя видеть, каждая встречала напоминала мне о том самом медленном танце, о том первом вечере, который мы провели вместе с тобой🤗\n\nВ один прекрасный день я узнала, что ты приехал и решила написать тебе, чтобы увидеться с тобой в колледже🥰\n\nКаждую нашу встречу чувствовалось что-то очень приятное и вдохновляющее. В крайнюю встречу я четко помню твой светлый спортивный костюм)\n\nИ вот спустя пол года с той нашей встречи, как мы увиделись ты поздравил меня с окончанием колледжа. В тот момент мне было очень приятно услышать тебя и была рада, что несмотря на все обстоятельства мы так же продолжали общаться☺️\n\nПройдя ещё немного времени мы уже полноценно начали общаться и в процессе я уже понимала, что это всё не просто так)))\n\nТы оказывал знаки внимания, интересовался моими делами и конечно же радовал меня сообщениями «Доброе утро» и «Спокойной ночи»🥰\n\nВ один прекрасный день мне позвонил курьер и сказал выйти из дома, я немного даже напугалась, так как не знала, что меня ждет😸Выйдя из подъезда курьер вручил мне огромный букет моих любимых роз и сказал «Это вам» 🤭😊😻 (До сих пор не понимаю откуда ты узнал про мои любимые цветы)) Я тут же поняла от кого он☺️ Моему счастью не было предела, не описать словами, как я была счастлива🥰 В этот момент внутри зажглась «яркая лампочка» Несмотря на то, что ты был далеко я почувствовала, как будто ты рядом❤️\n\nТот самый день: это было летнее утро, я собиралась на прогулку с подругой и неожиданно у нас с тобой зашел разговор про то, как я поймала букет на свадьбе и в этот момент ты предложил мне стать твоей девушкой🙈❤️🥰 Внутри всё затрепетало, как будто сотни бабочек одновременно взлетели. 🦋🦋🦋И с того момента я стала твоей девушкой❤️❤️❤️С этого дня началась история наших отношений🥰🥰🥰`
    },
    wedding: {
        his: `Родная моя, вот мы и подошли к тому самому моменту... К дню, когда мы официально стали мужем и женой. Знаешь, я смело могу сказать: в тот день мы были самыми счастливыми людьми во всей Вселенной! 🌍✨\n\nДавай отмотаем немного назад и вспомним, как мы к этому шли. Всё закрутилось 25 августа 2024 года, и с того дня наша жизнь превратилась в невероятный калейдоскоп событий. Мы бесконечно переписывались, смеялись до слез, даже успели разок-другой повздорить (ну куда же без этого, правда? 😉).\n\nНо по-настоящему серьезные мысли о нашем «навсегда» накрыли меня еще в командировке. Помнишь, как я приехал к тебе? Эта командировка была полностью посвящена тебе одной. Мы с тобой буквально «облазили» весь Курган, были в Далматово (знакомились с твоими родственниками) и даже успели прочувствовать атмосферу Тюмени (ох уж эти бессонные ночи, разговоры по душам). Хоть это и была командировочная поездка, для меня она стала лучшей в жизни, потому что рядом была ты. ❤️ Когда пришло время уезжать, только мысли о тебе согревали меня 24/7.\n\nА потом был тот самый май... Господи, как же долго мы его ждали! 9 мая, День Победы, я уже был рядом со своей маленькой малышкой. Но решающий момент случился чуть позже. Помнишь, я вез тебя на работу, а сам поехал в Юргамышскую школу? Пока я ехал обратно в город, я прокручивал в голове всё наше прошлое и возможное будущее. И в тот момент я окончательно понял: пора.\n\nЯ сразу рванул в «ГиперСити». Поделился планами с братом (он, кстати, был в восторге и сразу пожелал мне удачи! ✊), спустился в ювелирный и... купил всё сразу: и помолвочное, и обручальные кольца. Рискнул, конечно, но я ведь знаю размер твоего пальчика!\n\nИ вот он — «момент Х». Помнишь, как я настойчиво уговаривал тебя поскорее поехать домой? У меня в кармане буквально жгло кольцо, мне казалось, оно так выпирает, что ты вот-вот всё поймешь! 😂 Но я держался как партизан. Лифт, открывается дверь квартиры, ты заходишь... и тут я опускаюсь на одно колено: «Ты выйдешь за меня?» 💍\n\nТы была в таком шоке, такая растерянная среди всего происходящего вокруг, цветы, конфеты, я на одном колене с кольцом... И эти несколько секунд тишины казались мне вечностью. Но когда ты сказала «Да», я почувствовал себя самым счастливым человеком на свете!\n\nА дальше началась та самая приятная «морока»: фамилия мужа (звучит гордо, правда? 🥰), выбор ресторана, бесконечное меню, костюмы, поиски фотографа... И вот наступило 15 мая 2025 года. Всего шесть дней отпуска, а наша жизнь изменилась навсегда.\n\nПравда, без приключений я не могу! 😅 Если бы не Аленка (жена Димы), которая вовремя спросила про кольца, мы бы так и расписались без них. Как мы неслись через весь город, через все пробки! Я до сих пор не знаю, как я смог за считанные секунды взлететь на 15 этаж и вернуться обратно с заветными колечками. 🏃‍♂️💨\n\nНо когда я вбежал в ЗАГС и увидел тебя — самую красивую девушку в галактике — у меня просто перехватило дыхание. Все слова исчезли, остались одни эмоции. Мы зашли в зал, услышали те самые торжественные слова и оба твердо сказали: «ДА».\n\nИменно в ту секунду началась наша настоящая общая история. Моя жена. Моя жизнь. Моё всё. ❤️❤️❤️\n\nЯ тебя безумно люблю, мой самый родной на свете маленький человечик❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥`,
        her: `Мой дорогой человечек, я прекрасно помню тот период, когда началась наша история❤️\n\nС того самого дня: ты окружал меня заботой, поддержкой и теплом каждый день.🥰\n\nБыло много ярких и важных моментов, но давай ещё раз вспомним их. Начнем по порядку:  Мой день рождения. Тогда я ни о чем не подозревая не знала, что меня ждет. Этот шикарный и огромный букет,  до сих пор у меня перед глазами и как вспоминаю этот день, так сразу улыбка на лице. Это было невероятно приятно и неожиданно. Но это еще не все. В этот день мы друг другу первый раз сказали самые искренние и самые нужные слова: « Я тебя люблю» 🥰❤️🙈\n\nЗатем следовала наша первая встреча. Помню, как ждала тебя с таким большим нетерпением, ты даже не представляешь. И вот день встречи с тобой: я тогда очень волновалась. Хоть мы уже и виделись много раз в живую, но в статусе пары не были.\n\nИ вот ты позвонил в домофон и когда ты поднимался, я не замечала ничего вокург, ждала только тебя ……. И вот ты заходишь …….🙈🙈🙈Внутри все затрепетало и мы сразу же обнялись и долго не могли отойти друг от друга, тогда ты меня так нежно поцеловал  🦋🦋🦋\n\nОтойдя немного от встречи мы пообщались на кухне, но внутри все также трепетало. Как будто мы снова возвратились в тот первый вечер. В этот момент был и первый наш уже поцелуй 🤭😇❤️‍🔥\n\nМы чувствовали друг друга и уже тогда понимали без слов. В тот момент меня очень приятно удивила твоя энергетика, как мужчины. Мне было спокойно и хорошо рядом с тобой. Не нужно было изображать из себя идеальную и быть такой какая есть. С той первой встречи чувства только усилились и мы уже зная всю «Бытовуху совместной жизни, вели себя, как-будто мы семья😇❤️❤️‍🔥 Каждое утро хотелось тебя радовать объятиями, готовить для любимого мужчины, поддерживать порядок и частоту в доме. Тогда я хотела делать так, чтобы ты чувствовал себя комфортно и как дома. 🥰\n\nИ вот самый важный день:\nЭто было обычное утро, ты отвез меня на работу. С самого утра происходили непонятные вещи на работе: разговор про жену, про детей, но внимания на них я не заострила. По пути на обратной дороге, когда заиграла песня про жену и свадьбу ты на меня посмотрел влюбленным взглядом, мы пошутили немного  и поехали дальше. Ты очень торопился домой, но я не понимала почему.\n\nПо приезду домой ты сказал мне остаться в коридоре на 1 минуту, я тут же поняла, что какой-то сюрприз. Зайдя к комнату я увидела на столе огромный букет пионов и коробку конфет и не успела повернуться назад, как увидела тебя, стоящем на одном колене с кольцом……🙊😍🙉❤️‍🔥❤️‍🔥❤️‍🔥\n\nСейчас не описать, какие эмоции испытала в тот момент. Как в самой доброй сказке, как во сне. Я не могла поверить, что это происходит с нами. Тогда я еще спросила у тебя «Я сплю, это сон?» 😸😊🥰❤️\n\nЯ была на 7 небе от счастья и не могла поверить в это и в памяти навсегда твои слова: «Я хотел, чтобы ты была моей» 🥰🥰🥰❤️‍🔥\n\nС того момента ты стал моим женихом, а я твоей невестой👰🤵‍♂️❤️‍🔥\n\nВ день свадьбы мы оба волновались, это такой приятный и волнительный момент: создать семью. Все утро я собиралась, наряжалась и в мыслях был только ты ❤️\n\nУвидев тебя в костюме жениха я ещё раз влюбилась в тебя😍\n\nИ вот приятный и самый главный момент, когда мы друг другу сказали «да»🥰\n\nЯ даже и не заметила, как нас перепутали тогда на регистрации, если бы потом мне не сказали об этом. Сразу же после регистрации почувствовалось, что мы семья: ты очень ответственно ко всему подходил, следил за всем, что происходит, окружал меня своей заботой и очень нежно и бережно относился ко мне, как к настоящей принцессе. И тогда я еще раз поняла, что это мой мужчина, моя поддержка, моя опора и уже мой любимый муж😘😘😘\n\nС того момента мы стали семьёй💍👩‍❤️‍👨❤️\n\nС тобой я узнала, что такое быть счастливой рядом с мужчиной, быть, как за каменой стеной. Для меня ты являешься настоящим примером заботливого и настоящего мужчины. 💪💋❤️‍🔥\n\nЛюблю тебя, родной мой человечек❤️‍🔥❤️‍🔥❤️‍🔥`
    }
};

// ============================================
// ЛЮБИМЫЕ ФРАЗЫ (добавляйте новые фразы сюда)
// ============================================
const favoritePhrases = [
    'Додох',
    'Я когда тороплюсь, я бегаю',
    'Чмоня',
    'Не щёлкай хлебальничком',
		'Мы посовещались и я решила',
		'Кот сдохнула',
		'Переговоры вознабнаблят',
		'Чехоле',
		'Упал - вставай, встал - упай, упай чокопай',
		'Инопланетяны - интопланетянины',
		'Одно мыло - много мыл',
        'Пошпирляли'
];

// Текущее состояние
let currentAlbum = null;
let currentPhotos = [];
let currentIndex = 0;

// DOM элементы
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxProgress = document.getElementById('lightbox-progress');
const lightboxThumbnails = document.getElementById('lightbox-thumbnails');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

// Текущее состояние для записок
let currentNoteDate = null;

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    loadAllAlbums();
    setupNavigation();
    setupLightbox();
    updateYear();
    updateDaysCounter();
    setupScrollAnimations();
    setupParallax();
    updateImportantDates();
    loadFavoritePhrases();
});

// Создание частиц для hero-секции
function createParticles() {
    const particlesContainer = document.getElementById('hero-particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Счётчик дней вместе
function updateDaysCounter() {
    const daysElement = document.getElementById('days-count');
    if (!daysElement) return;

    const today = new Date();
    const diffTime = Math.abs(today - relationshipStartDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Анимация счётчика
    animateCounter(daysElement, 0, diffDays, 2000);
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + range * easeOutQuart);
        
        element.textContent = current.toLocaleString('ru-RU');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Fade-in анимация при скролле
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
}

// Параллакс эффект для hero
function setupParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero && heroContent && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    });
}

// Загрузка всех альбомов
function loadAllAlbums() {
    for (const [key, album] of Object.entries(albums)) {
        loadAlbum(key, album);
    }
}

// Загрузка альбома
function loadAlbum(albumKey, album) {
    const gridElement = document.getElementById(`grid-${albumKey}`);
    const countElement = document.getElementById(`count-${albumKey}`);

    if (!gridElement) return;

    const photos = album.photos.map(filename => ({
        src: `${album.folder}/${filename}`,
        name: decodeURIComponent(filename.replace(/\.[^.]+$/, ''))
    }));

    // Обновляем счётчик
    if (countElement) {
        countElement.textContent = `${photos.length} фото`;
    }

    // Сохраняем фото для альбома
    window[`photos_${albumKey}`] = photos;

    // Рендерим миниатюры
    renderPhotos(gridElement, photos, albumKey);
}

// Рендеринг фотографий
function renderPhotos(container, photos, albumKey) {
    container.innerHTML = '';

    if (photos.length === 0) {
        container.innerHTML = `
            <div class="empty-album">
                <p>📷 Добавьте фотографии в папку <strong>photos/${albums[albumKey].name}</strong></p>
            </div>
        `;
        return;
    }

    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'photo-item fade-in-section';
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.name}" loading="lazy">
        `;
        item.addEventListener('click', () => openLightbox(albumKey, index));
        container.appendChild(item);
    });

    // Пересоздаём observer для новых элементов
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.photo-item').forEach(item => {
        observer.observe(item);
    });
}

// Текущий активный альбом
let currentViewedAlbum = null;

// Показать альбом
function showAlbum(albumKey) {
    currentViewedAlbum = albumKey;
    
    document.querySelectorAll('.album-section').forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(albumKey);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('visible');
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
}

// Скрыть все альбомы
function hideAllAlbums() {
    currentViewedAlbum = null;
    document.querySelectorAll('.album-section').forEach(section => {
        section.style.display = 'none';
    });
}

// Настройка навигации
function setupNavigation() {
    // Клик по карточкам альбомов
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const albumKey = card.getAttribute('data-album');
            if (albumKey && albums[albumKey]) {
                showAlbum(albumKey);
                window.location.hash = albumKey;
            }
        });
    });

    // Кнопка скролла к альбомам
    const scrollButton = document.querySelector('.scroll-down');
    if (scrollButton) {
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            const albumsNav = document.querySelector('.albums-nav');
            if (albumsNav) {
                albumsNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Кнопки "Назад к альбомам"
    document.querySelectorAll('.back-to-albums').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllAlbums();
            window.location.hash = '';
            const albumsNav = document.querySelector('.albums-nav');
            if (albumsNav) {
                albumsNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Обработка изменения hash
    let hashChangeTimeout = null;
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        
        // Очищаем предыдущий таймаут
        if (hashChangeTimeout) clearTimeout(hashChangeTimeout);
        
        if (!hash || hash === ' ') {
            hideAllAlbums();
            return;
        }
        
        // Проверяем, что hash соответствует альбому
        if (albums[hash]) {
            // Небольшая задержка чтобы избежать конфликтов
            hashChangeTimeout = setTimeout(() => {
                if (currentViewedAlbum !== hash) {
                    showAlbum(hash);
                }
            }, 50);
        }
    });

    // При загрузке страницы
    const initialHash = window.location.hash.slice(1);
    if (initialHash && albums[initialHash]) {
        showAlbum(initialHash);
    } else {
        hideAllAlbums();
    }
}

// Настройка лайтбокса
function setupLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigatePhoto(-1));
    lightboxNext.addEventListener('click', () => navigatePhoto(1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigatePhoto(-1);
                break;
            case 'ArrowRight':
                navigatePhoto(1);
                break;
        }
    });
}

// Открытие лайтбокса
function openLightbox(albumKey, index) {
    const photos = window[`photos_${albumKey}`];
    if (!photos || photos.length === 0) return;

    currentAlbum = albumKey;
    currentIndex = index;
    currentPhotos = photos;

    createThumbnails(index);
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Создание миниатюр
function createThumbnails(activeIndex) {
    lightboxThumbnails.innerHTML = '';

    currentPhotos.forEach((photo, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `lightbox-thumb ${idx === activeIndex ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${photo.src}" alt="${photo.name}">`;
        thumb.addEventListener('click', function() {
            currentIndex = idx;
            updateLightboxImage();
        });
        lightboxThumbnails.appendChild(thumb);
    });
}

// Обновление миниатюр
function updateThumbnails() {
    document.querySelectorAll('.lightbox-thumb').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

// Обновление изображения в лайтбоксе
function updateLightboxImage() {
    if (!currentPhotos[currentIndex]) return;

    const photo = currentPhotos[currentIndex];
    
    // Анимация смены фото
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        lightboxImg.src = photo.src;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
    }, 150);
    
    lightboxCaption.textContent = photo.name;
    
    // Обновляем счётчик
    const current = currentIndex + 1;
    const total = currentPhotos.length;
    lightboxCounter.textContent = `${current} / ${total}`;
    
    // Обновляем прогресс-бар
    const progress = (current / total) * 100;
    lightboxProgress.style.width = `${progress}%`;
    
    // Обновляем миниатюры
    updateThumbnails();
}

// Навигация по фото
function navigatePhoto(direction) {
    if (!currentPhotos.length) return;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentPhotos.length - 1;
    if (currentIndex >= currentPhotos.length) currentIndex = 0;

    updateLightboxImage();
}

// Закрытие лайтбокса
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        lightboxImg.src = '';
    }, 300);
}

// Обновление года в футере
function updateYear() {
    const yearElement = document.querySelector('.footer-year');
    if (yearElement) {
        yearElement.textContent = `© ${new Date().getFullYear()} Все права защищены`;
    }
}

// ============================================
// ФУНКЦИИ ДЛЯ ВАЖНЫХ ДАТ
// ============================================

// Обновление счётчиков дней для важных дат
function updateImportantDates() {
    const today = new Date();
    
    // Дата знакомства
    const metDaysElement = document.getElementById('date-met-days');
    if (metDaysElement) {
        const metDays = Math.floor((today - importantDates.met) / (1000 * 60 * 60 * 24));
        animateCounter(metDaysElement, 0, metDays, 2000);
    }
    
    // Дата начала отношений
    const datingDaysElement = document.getElementById('date-dating-days');
    if (datingDaysElement) {
        const datingDays = Math.floor((today - importantDates.dating) / (1000 * 60 * 60 * 24));
        animateCounter(datingDaysElement, 0, datingDays, 2000);
    }
    
    // Дата свадьбы
    const weddingDaysElement = document.getElementById('date-wedding-days');
    if (weddingDaysElement) {
        const weddingDays = Math.floor((today - importantDates.wedding) / (1000 * 60 * 60 * 24));
        animateCounter(weddingDaysElement, 0, weddingDays, 2000);
    }
}

// Загрузка любимых фраз
function loadFavoritePhrases() {
    const container = document.getElementById('phrases-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    favoritePhrases.forEach((phrase, index) => {
        const phraseCard = document.createElement('div');
        phraseCard.className = 'phrase-card fade-in-section';
        phraseCard.style.animationDelay = `${index * 0.1}s`;
        
        const phraseText = document.createElement('p');
        phraseText.className = 'phrase-text';
        phraseText.textContent = phrase;
        
        phraseCard.appendChild(phraseText);
        container.appendChild(phraseCard);
    });
    
    // Пересоздаём observer для новых элементов
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    container.querySelectorAll('.phrase-card').forEach(card => {
        observer.observe(card);
    });
}

// Открытие/закрытие карточки с датой
function toggleDateCard(dateKey) {
    const card = document.querySelector(`.date-card[data-date="${dateKey}"]`);
    if (!card) return;
    
    // Закрываем другие карточки
    document.querySelectorAll('.date-card').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });
    
    // Переключаем текущую
    card.classList.toggle('expanded');
}

// Открытие конверта
function openEnvelope(envelopeElement, author, dateKey) {
    // Если конверт уже открыт, ничего не делаем
    if (envelopeElement.classList.contains('opened')) return;
    
    // Открываем конверт
    envelopeElement.classList.add('opened');
    
    // Получаем текст записки
    const noteText = notes[dateKey][author];
    
    // Показываем записку с небольшой задержкой
    setTimeout(() => {
        showNote(noteText);
    }, 400);
}

// Показ записки
function showNote(text) {
    const noteDisplay = document.getElementById('note-display');
    const noteTextElement = document.getElementById('note-text');
    
    if (!noteDisplay || !noteTextElement) return;
    
    noteTextElement.textContent = text;
    noteDisplay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие записки
function closeNote() {
    const noteDisplay = document.getElementById('note-display');
    if (!noteDisplay) return;
    
    noteDisplay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Закрываем все конверты
    document.querySelectorAll('.envelope').forEach(env => {
        env.classList.remove('opened');
    });
    
    currentNoteDate = null;
}

// Закрытие записки по клику на фон
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('note-display')) {
        closeNote();
    }
});

// Закрытие записки по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNote();
    }
});
