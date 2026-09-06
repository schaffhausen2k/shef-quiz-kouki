const questions = [
{
  category: "食品栄養学（栄養学）",
  question: "以下の説明文の空白に入る言葉の組み合わせで正しいものを選びなさい。栄養とは、（　A　）を摂取して、含まれている（　B　）の働きで、（　C　）を作り、（　D　）を生み出す現象である。",
  choices: [
    {
      text: "A：栄養素ーB：栄養素ーC：体ーD：活力",
      correct: false,
      explanation: "栄養とは食物を摂取し、その中の栄養素の働きで体を作り活力を生み出すことです。"
    },
    {
      text: "A：食物ーB：栄養素ーC：体ーD：活力",
      correct: true,
      explanation: "栄養の説明として正しい組み合わせです。"
    },
    {
      text: "A：食物ーB：たんぱく質ーC：体ーD：エネルギー",
      correct: false,
      explanation: "栄養素全体の働きを表すため、たんぱく質だけでは不適切です。"
    },
    {
      text: "A：栄養素ーB：糖質ーC：エネルギーーD：活力",
      correct: false,
      explanation: "栄養とは食物を摂取することから始まります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "各栄養素の説明として誤っている説明文を一つ選びなさい。",
  choices: [
    {
      text: "炭水化物（糖質）は、主にエネルギー源となる。",
      correct: false,
      explanation: "炭水化物は主なエネルギー源です。"
    },
    {
      text: "たんぱく質は、主に体を作るもので、体の機能調整も行うことがある。",
      correct: false,
      explanation: "たんぱく質は体の構成成分であり、酵素など機能調整も行います。"
    },
    {
      text: "五大栄養素とは、炭水化物（糖質）・たんぱく質・脂質・ビタミン・食物繊維のことを指して言う。",
      correct: true,
      explanation: "五大栄養素にはミネラルが含まれ、食物繊維は含まれません。"
    },
    {
      text: "ビタミンは、体の機能調整を行う。",
      correct: false,
      explanation: "ビタミンは体の機能調整に関与します。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "各栄養素の説明文で誤っている文を一つ選びなさい。",
  choices: [
    {
      text: "三大栄養素とは、炭水化物・たんぱく質・脂質の３つを指す。",
      correct: false,
      explanation: "三大栄養素は炭水化物・たんぱく質・脂質です。"
    },
    {
      text: "たんぱく質はエネルギー源になることはない。",
      correct: true,
      explanation: "たんぱく質も不足時にはエネルギー源として利用されます。"
    },
    {
      text: "亜鉛はミネラルに含まれる。",
      correct: false,
      explanation: "亜鉛はミネラルの一種です。"
    },
    {
      text: "脂質もエネルギー源になる。",
      correct: false,
      explanation: "脂質は高エネルギーの栄養素です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "アトウォーター係数として誤っている物を一つ選びなさい。",
  choices: [
    {
      text: "炭水化物：４kcal",
      correct: false,
      explanation: "炭水化物は1gあたり4kcalです。"
    },
    {
      text: "たんぱく質：４kcal",
      correct: false,
      explanation: "たんぱく質は1gあたり4kcalです。"
    },
    {
      text: "脂質：９kcal",
      correct: false,
      explanation: "脂質は1gあたり9kcalです。"
    },
    {
      text: "アルコール：９kcal",
      correct: true,
      explanation: "アルコールは1gあたり7kcalです。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品の成分として誤っている説明文を一つ選びなさい。",
  choices: [
    {
      text: "食品は、形態で分類すると、有機物と無機物に分けられる。",
      correct: true,
      explanation: "有機物と無機物は化学的性質による分類であり、形態による分類ではありません。"
    },
    {
      text: "有機物とは、炭水化物・たんぱく質・脂質・ビタミンを指して言う。",
      correct: false,
      explanation: "これらは有機物に分類されます。"
    },
    {
      text: "ミネラルは、無機物に分けられる。",
      correct: false,
      explanation: "ミネラルは無機質とも呼ばれ、無機物です。"
    },
    {
      text: "食物繊維は、有機物に分類される。",
      correct: false,
      explanation: "食物繊維は炭水化物の一種で有機物です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "有機物と無機物の説明文として誤っているものを一つ選びなさい。",
  choices: [
    {
      text: "無機物とは、炭素を含まない、または単純な炭素結合の化合物の総称である。",
      correct: false,
      explanation: "無機物は炭素を含まない、または単純な炭素化合物です。"
    },
    {
      text: "有機物には、砂糖、サラダ油、木材が含まれている。",
      correct: false,
      explanation: "これらは有機物です。"
    },
    {
      text: "無機物は、加熱しても炭化せず二酸化炭素も出さない。",
      correct: false,
      explanation: "無機物は一般に炭化しません。"
    },
    {
      text: "無機物には、紙、ガラス、金属が含まれる。",
      correct: true,
      explanation: "紙は有機物であり、無機物ではありません。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "栄養学の歴史の説明文で誤っているものを一つ選びなさい。",
  choices: [
    {
      text: "1937年にクレブスが糖質の代謝としてクエン酸回路を発見した。",
      correct: false,
      explanation: "クレブスはクエン酸回路を発見しました。"
    },
    {
      text: "ラボアジエは、呼吸により二酸化炭素を消費し、酸素を発生させる事を発見した。",
      correct: true,
      explanation: "呼吸では酸素を消費し、二酸化炭素を排出します。"
    },
    {
      text: "アトウォーターは、食品に含まれる熱量を測定できる装置を開発した。",
      correct: false,
      explanation: "アトウォーターは熱量測定装置の研究で知られています。"
    },
    {
      text: "20世紀に、脂質がエネルギー源（β酸化）になることが解明された。",
      correct: false,
      explanation: "脂質のβ酸化は20世紀に解明されました。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品分類法で、栄養的役割に関する説明文で誤っているものを一つ選びなさい。",
  choices: [
    {
      text: "三色食品群は、赤・黄・緑に分類し、その中の黄は、エネルギーになる食品が分類されている。",
      correct: false,
      explanation: "黄色の食品群は主にエネルギー源となる食品です。"
    },
    {
      text: "三色食品群の赤に分類される食品は、肉・魚・卵・芋がある。",
      correct: true,
      explanation: "芋類は黄色の食品群に分類されます。"
    },
    {
      text: "６つの基礎食品群は、多く含まれる栄養素で分類されている。第２群は、カルシウムを多く含む食品が分類されている。",
      correct: false,
      explanation: "第2群はカルシウムを多く含む食品群です。"
    },
    {
      text: "６つの基礎食品群の第５群は、淡色野菜。果物が含まれる。",
      correct: false,
      explanation: "第5群には淡色野菜や果物が分類されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品分類法で、加工度に関する説明文で誤っているものを一つ選びなさい。",
  choices: [
    {
      text: "４つのグループに分けられている。",
      correct: false,
      explanation: "加工度分類は4つのグループに分類されます。"
    },
    {
      text: "グループ３には、チーズ・缶詰がある。",
      correct: false,
      explanation: "チーズや缶詰は加工食品に分類されます。"
    },
    {
      text: "グループ４には、スナック菓子・植物油がある。",
      correct: true,
      explanation: "植物油はグループ2に分類され、グループ4ではありません。"
    },
    {
      text: "グループ１には、野菜・卵がある。",
      correct: false,
      explanation: "野菜や卵は未加工または最低限加工食品です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "７大アレルゲンに含まれないものを一つ選びなさい。",
  choices: [
    {
      text: "落花生",
      correct: false,
      explanation: "落花生は特定原材料に含まれます。"
    },
    {
      text: "そば",
      correct: false,
      explanation: "そばは7大アレルゲンの一つです。"
    },
    {
      text: "ごま",
      correct: true,
      explanation: "ごまは7大アレルゲンには含まれていません。"
    },
    {
      text: "小麦",
      correct: false,
      explanation: "小麦は7大アレルゲンに含まれます。"
    }
  ]
},{
  category: "食品栄養学（栄養学）",
  question: "食品の機能について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "食品の機能には、１次機能・２次機能・３次機能に分けられる。",
      correct: false,
      explanation: "食品の機能は１次・２次・３次機能に分類されます。"
    },
    {
      text: "１次機能は生理機能とも呼ばれている。",
      correct: true,
      explanation: "１次機能は栄養機能を指し、生理機能は３次機能に該当します。"
    },
    {
      text: "２次機能は、おいしさ・香り・色など感覚や嗜好性に与える機能である。",
      correct: false,
      explanation: "２次機能は味や香りなど嗜好性に関わる機能です。"
    },
    {
      text: "３次機能は、不足により生命維持に大きく関わることはない。",
      correct: false,
      explanation: "３次機能は健康維持や生体調節に関わる機能です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品の機能について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "１次機能は、生命を維持するのに不可欠であり、不足すると欠乏症になる。",
      correct: false,
      explanation: "１次機能は生命維持に不可欠な栄養機能です。"
    },
    {
      text: "２次機能は、感覚機能・嗜好機能とも呼ばれている。",
      correct: false,
      explanation: "２次機能は感覚機能・嗜好機能と呼ばれます。"
    },
    {
      text: "食物繊維の作用によりコレステロールが低下する機能は、１次機能になる。",
      correct: true,
      explanation: "コレステロール低下作用は生体調節機能であり、３次機能に分類されます。"
    },
    {
      text: "３次機能では、健康増進の期待が高まっている。",
      correct: false,
      explanation: "３次機能は健康維持や疾病予防に関わります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品の機能について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "１次機能には、五大栄養素が当てはまる。",
      correct: false,
      explanation: "五大栄養素は１次機能に関わります。"
    },
    {
      text: "歯ごたえ・温度感が関与するのは３次機能である。",
      correct: true,
      explanation: "歯ごたえや温度感は感覚や嗜好に関わるため、２次機能に分類されます。"
    },
    {
      text: "エイコサペンタエン酸（EPA）による血栓防止作用は、３次機能である。",
      correct: false,
      explanation: "EPAの血栓防止作用は３次機能です。"
    },
    {
      text: "食物繊維の作用による、便秘予防は３次機能である。",
      correct: false,
      explanation: "便秘予防作用は３次機能に分類されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食事の成分と体の成分について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "体の成分で１番多いのは、約６０％を占める脂質である。",
      correct: true,
      explanation: "人体で最も多い成分は水分で、約60％を占めています。"
    },
    {
      text: "水分を除くと、食事での炭水化物の割合は、約６３％である。",
      correct: false,
      explanation: "食事成分では炭水化物の割合が高いです。"
    },
    {
      text: "水分を除くと、体の成分で１番多いのはたんぱく質（約４５％）である。",
      correct: false,
      explanation: "水分を除くと、たんぱく質が最も多い成分です。"
    },
    {
      text: "食事の成分で、たんぱく質と脂質はほぼ同じ割合である。",
      correct: false,
      explanation: "食事中のたんぱく質と脂質は比較的近い割合です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "人体の構成について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "人体は、細胞・組織・臓器から構成される。",
      correct: false,
      explanation: "人体は細胞・組織・臓器などから構成されます。"
    },
    {
      text: "上皮組織は、皮膚や血管の表面に分布する。",
      correct: false,
      explanation: "上皮組織は体表や器官表面を覆っています。"
    },
    {
      text: "結合組織は、運動を担い、骨格筋・平滑筋・心筋がある。",
      correct: true,
      explanation: "骨格筋・平滑筋・心筋は筋組織であり、結合組織ではありません。"
    },
    {
      text: "神経組織は、神経細胞からなり、刺激の受容・伝達を行う。",
      correct: false,
      explanation: "神経組織は刺激の受容や伝達を行います。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "人体の成分について誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "食事を摂ることで生命を維持し、健康を保持・維持している。",
      correct: false,
      explanation: "食事は生命維持と健康維持に必要です。"
    },
    {
      text: "人の体は約20種類の元素で構成されている。",
      correct: false,
      explanation: "人体は多くの元素から構成されています。"
    },
    {
      text: "炭水化物は、炭素（C)・酸素（O)・水素（H)で構成されている。",
      correct: false,
      explanation: "炭水化物はC・H・Oから成ります。"
    },
    {
      text: "脂質は、炭素（C)・酸素（O)・水素（H)・窒素（N)で構成されている。",
      correct: true,
      explanation: "脂質は主に炭素・水素・酸素で構成され、通常窒素は含みません。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "人体の成分について誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "人体の構成成分のうち、１番多いのは、筋肉や臓器になるたんぱく質である。",
      correct: true,
      explanation: "人体で最も多い構成成分は水分です。"
    },
    {
      text: "成人男性は、成人女性に比べるとたんぱく質の割合が多い。",
      correct: false,
      explanation: "男性は筋肉量が多いため、たんぱく質割合が高いです。"
    },
    {
      text: "成人男性は、成人女性に比べると脂質の割合が少ない。",
      correct: false,
      explanation: "女性は体脂肪率が高い傾向があります。"
    },
    {
      text: "成人の人体構成で平均1.0％を構成するのは、糖質である。",
      correct: false,
      explanation: "糖質は人体構成比で約1％程度です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "人体の異化について誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "複雑な有機物を単純な物質に分解すること。エネルギーを産生する。",
      correct: false,
      explanation: "異化は分解によってエネルギーを得る働きです。"
    },
    {
      text: "異化により生体に必要なエネルギー（ATP）を産生している。",
      correct: false,
      explanation: "ATP産生は異化作用によります。"
    },
    {
      text: "病気やストレスがかかると、異化の亢進が行われる。",
      correct: false,
      explanation: "病気やストレス時には異化が亢進します。"
    },
    {
      text: "余剰なブドウ糖をグリコーゲンに変える作用も異化に含まれる。",
      correct: true,
      explanation: "ブドウ糖をグリコーゲンに変える作用は同化です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "生物の同化について誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "同化とは、単純な物質から複雑な有機物に変える作用。エネルギーを消費する。",
      correct: false,
      explanation: "同化はエネルギーを使って物質を合成します。"
    },
    {
      text: "植物の光合成は、同化作用であり、水と二酸化炭素から酸素とでんぷんを生成する。",
      correct: false,
      explanation: "光合成は代表的な同化作用です。"
    },
    {
      text: "グリコーゲンをブドウ糖に変える作用も同化になる。",
      correct: true,
      explanation: "グリコーゲンを分解してブドウ糖にする作用は異化です。"
    },
    {
      text: "人体でアミノ酸からたんぱく質に変える作用も同化である。",
      correct: false,
      explanation: "たんぱく質合成は同化作用です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "栄養欠乏症に入る疾病で誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "脚気",
      correct: false,
      explanation: "脚気はビタミンB1欠乏症です。"
    },
    {
      text: "夜盲症",
      correct: false,
      explanation: "夜盲症はビタミンA欠乏症です。"
    },
    {
      text: "糖尿病",
      correct: true,
      explanation: "糖尿病は生活習慣病であり、栄養欠乏症ではありません。"
    },
    {
      text: "壊血病",
      correct: false,
      explanation: "壊血病はビタミンC欠乏症です。"
    }
  ]
},{
  category: "食品栄養学（栄養学）",
  question: "2020年版日本食品標準成分表（以下、食品成分表と表示する）はどこの省庁で開発されたか正しい物を一つ選びなさい。",
  choices: [
    {
      text: "厚生労働省",
      correct: false,
      explanation: "食品成分表は厚生労働省ではなく文部科学省が作成しています。"
    },
    {
      text: "経済産業省",
      correct: false,
      explanation: "経済産業省ではなく文部科学省が作成しています。"
    },
    {
      text: "文部科学省",
      correct: true,
      explanation: "日本食品標準成分表は文部科学省によって作成されています。"
    },
    {
      text: "農林水産省",
      correct: false,
      explanation: "農林水産省ではなく文部科学省が作成しています。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品成分表の説明として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "５年に１度改良されている。",
      correct: false,
      explanation: "食品成分表は定期的に改訂されています。"
    },
    {
      text: "可食部当たり100ｇのエネルギーや五大栄養素、塩分等が記載されている。",
      correct: false,
      explanation: "食品成分表には可食部100g当たりの栄養価が記載されています。"
    },
    {
      text: "2478食品が収載されている。",
      correct: false,
      explanation: "2020年版では多くの食品が収載されています。"
    },
    {
      text: "食品を20の食品群に分類されている。",
      correct: true,
      explanation: "食品成分表は18食品群に分類されています。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品成分表の食品分類01の穀類の説明として誤っている文を１つ選びなさい。",
  choices: [
    {
      text: "世界三大穀物は、米・大麦・小麦を指して言う。",
      correct: true,
      explanation: "世界三大穀物は米・小麦・とうもろこしです。"
    },
    {
      text: "多く含む栄養素は炭水化物である。",
      correct: false,
      explanation: "穀類は炭水化物を多く含みます。"
    },
    {
      text: "長期保存が可能で古から世界で栽培されてきた。",
      correct: false,
      explanation: "穀類は保存性が高く古くから栽培されています。"
    },
    {
      text: "日本の五穀とは、米・麦・あわ・きび・豆を指して言う。",
      correct: false,
      explanation: "五穀には米・麦・あわ・きび・豆が含まれます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品成分表の食品分類02のいも・でん粉類の説明として誤っている文を１つ選びなさい。",
  choices: [
    {
      text: "炭水化物を多く含み、エネルギー源になる。",
      correct: false,
      explanation: "いも類は炭水化物を多く含みます。"
    },
    {
      text: "穀類と比べるとカルシウムやカリウムが多い。",
      correct: false,
      explanation: "いも類は穀類よりカリウムなどを多く含みます。"
    },
    {
      text: "でん粉類とは、植物の蓄えたでん粉を取り出し粉末にしたものである。",
      correct: false,
      explanation: "でん粉類は植物から抽出したでん粉です。"
    },
    {
      text: "こんにゃくは、食品分類02：いも・でん粉類に含まない。",
      correct: true,
      explanation: "こんにゃくは食品分類02に含まれます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "人工甘味料では違うものを１つ選びなさい。",
  choices: [
    {
      text: "アスパルテーム",
      correct: false,
      explanation: "アスパルテームは人工甘味料です。"
    },
    {
      text: "ソルビトール",
      correct: false,
      explanation: "ソルビトールは甘味料として使用されます。"
    },
    {
      text: "転化糖",
      correct: true,
      explanation: "転化糖はしょ糖を分解した天然由来の糖です。"
    },
    {
      text: "キシリトール",
      correct: false,
      explanation: "キシリトールは甘味料として利用されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品分類05：種実類の説明文で誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "種実類に含まれる最も多い成分はすべての種実類で脂質である。",
      correct: true,
      explanation: "すべての種実類が脂質を最も多く含むわけではありません。"
    },
    {
      text: "種実類の中の堅果類には、アーモンド・ぎんなん・くり・ココナッツ等がある。",
      correct: false,
      explanation: "これらは堅果類に分類されます。"
    },
    {
      text: "種実類の中の種子類には、あさの実・ごま・はすの実等がある。",
      correct: false,
      explanation: "これらは種子類に分類されます。"
    },
    {
      text: "種実類は、種子類と堅果類に分けられる。",
      correct: false,
      explanation: "種実類は種子類と堅果類に分類されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "厚生労働省が定める定義の中の緑黄色野菜ではない野菜を１つ選びなさい。",
  choices: [
    {
      text: "ブロッコリー",
      correct: false,
      explanation: "ブロッコリーは緑黄色野菜です。"
    },
    {
      text: "ほうれん草",
      correct: false,
      explanation: "ほうれん草は緑黄色野菜です。"
    },
    {
      text: "オクラ",
      correct: false,
      explanation: "オクラは緑黄色野菜です。"
    },
    {
      text: "たまねぎ",
      correct: true,
      explanation: "たまねぎは淡色野菜に分類されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品分類08：果実類の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "ビタミンCの補給源となる。",
      correct: false,
      explanation: "果実類はビタミンCを多く含みます。"
    },
    {
      text: "ビタミンC以外で多い栄養素は、カルシウムである。",
      correct: true,
      explanation: "果実類はカルシウムよりカリウムを多く含みます。"
    },
    {
      text: "果実類に多く含まれる糖質は果糖である。",
      correct: false,
      explanation: "果実類には果糖が多く含まれます。"
    },
    {
      text: "ペクチンやセルロースは食物繊維としての働きがある。",
      correct: false,
      explanation: "ペクチンやセルロースは食物繊維です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品分類09：きのこ類の説明文で間違っている物を１つ選びなさい。",
  choices: [
    {
      text: "きのこ類で最も多い栄養素は、ビタミンCである。",
      correct: true,
      explanation: "きのこ類は食物繊維やビタミンDを含みますが、ビタミンCが最も多いわけではありません。"
    },
    {
      text: "きのこ類は、低カロリー食品である。",
      correct: false,
      explanation: "きのこ類は低カロリー食品です。"
    },
    {
      text: "ビタミンDも多く含まれている。",
      correct: false,
      explanation: "きのこ類にはビタミンDが含まれます。"
    },
    {
      text: "干しシイタケの旨味成分は、グアニル酸である。",
      correct: false,
      explanation: "干しシイタケの旨味成分はグアニル酸です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品分類10：藻類の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "藻類は、低カロリーであり、ビタミンやミネラルも多く含まれる。",
      correct: false,
      explanation: "藻類は低カロリーで栄養価が高い食品です。"
    },
    {
      text: "アルギン酸は、水溶性食物繊維であり、動脈硬化予防に役立つ。",
      correct: false,
      explanation: "アルギン酸は水溶性食物繊維です。"
    },
    {
      text: "フコイダンは、潰瘍予防に役立つ。",
      correct: false,
      explanation: "フコイダンには健康維持作用があります。"
    },
    {
      text: "ヨウ素は、インスリンの原材料になる。",
      correct: true,
      explanation: "ヨウ素は甲状腺ホルモンの材料であり、インスリンではありません。"
    }
  ]
},{
  category: "食品栄養学（栄養学）",
  question: "食品表示法に関する説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "2015年に施行され、2020年にはすべての食品に適応された。",
      correct: false,
      explanation: "食品表示法は2015年に施行され、2020年に完全移行されました。"
    },
    {
      text: "JAS法・食品衛生法・健康増進法の３つの法律（一部）を統合したもの。",
      correct: false,
      explanation: "食品表示法は複数の法律を統合して作られました。"
    },
    {
      text: "総務省が管轄している。",
      correct: true,
      explanation: "食品表示法は主に消費者庁が管轄しています。"
    },
    {
      text: "機能性表示食品制度もこの新法のもと導入された。",
      correct: false,
      explanation: "機能性表示食品制度は食品表示法に関連して導入されました。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品衛生法に関する説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "1947年に制定され、厚生労働省と消費者庁が管轄している。",
      correct: false,
      explanation: "食品衛生法は1947年制定です。"
    },
    {
      text: "HACCP（ハサップ）に沿った衛生管理が義務化された。",
      correct: false,
      explanation: "HACCPに基づく衛生管理は義務化されています。"
    },
    {
      text: "2025年時点では、施設ごとの食品衛生責任者配置は、努力義務である。",
      correct: true,
      explanation: "食品衛生責任者の配置は義務です。"
    },
    {
      text: "HACCPとは、原料の受け入れから最終製品の出荷までを連続的に監視・記録する食品安全管理システム。",
      correct: false,
      explanation: "HACCPは食品安全を管理するシステムです。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "健康増進法の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "国民の栄養状態を改善・調査し、健康増進を図る目的で制定された法律。",
      correct: true,
      explanation: "健康増進法は健康づくり全般を目的とした法律です。"
    },
    {
      text: "2020年改正時に、屋内禁煙が義務化された。",
      correct: false,
      explanation: "改正により原則屋内禁煙が義務化されました。"
    },
    {
      text: "厚生労働省が管轄し、消費者庁が関係省庁になる。",
      correct: false,
      explanation: "厚生労働省が主に管轄しています。"
    },
    {
      text: "食品の栄養表示等は、食品表示法に移管された。",
      correct: false,
      explanation: "栄養表示制度は食品表示法へ移管されました。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品及び栄養の表示に関する説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "生鮮食品では表示に関し、名称・原産地が必須、水産物に関しては、解凍・養殖も必須項目になる。",
      correct: false,
      explanation: "水産物には解凍・養殖表示も必要です。"
    },
    {
      text: "2022年４月にはすべての加工食品に対して原材料の産地が表示された。",
      correct: false,
      explanation: "加工食品の原料原産地表示は義務化されています。"
    },
    {
      text: "消費期限は、この期限を過ぎると、衛生上問題が起こる可能性が低い。",
      correct: true,
      explanation: "消費期限を過ぎると安全性が保証されません。"
    },
    {
      text: "栄養表示では、エネルギー・たんぱく質・脂質・炭水化物・食塩相当量の５つの項目は義務とされている。",
      correct: false,
      explanation: "この5項目は義務表示です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "強調表示で、500mlの清涼飲料水が30kcalである場合、ノンカロリーと表示しても良いか？",
  choices: [
    {
      text: "表示しても良い。",
      correct: false,
      explanation: "ノンカロリー表示には基準があります。"
    },
    {
      text: "表示は控える方が良い。",
      correct: true,
      explanation: "30kcalではノンカロリー表示基準を満たしません。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "たんぱく質を強化されたヨーグルトで、100ｇ容量でタンパク質が20.8ｇ含まれると高たんぱく質と表示しても良いか？",
  choices: [
    {
      text: "表示しても良い。",
      correct: true,
      explanation: "十分なたんぱく質量が含まれているため表示可能です。"
    },
    {
      text: "表示は控えた方が良い。",
      correct: false,
      explanation: "高たんぱく質表示の基準を満たしています。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "カロリーを調整されたマヨネーズ200ｇ容量のカロリーが100kcalとすると、カロリーハーフと表示しても良いか？",
  choices: [
    {
      text: "表示しても良い。",
      correct: false,
      explanation: "比較対象との差が基準を満たす必要があります。"
    },
    {
      text: "表示は控えた方が良い。",
      correct: true,
      explanation: "基準を満たさない場合は表示できません。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "スポーツドリンク500ml容量で、カロリーが95kcalでは、カロリーハーフと表示しても良いか？",
  choices: [
    {
      text: "表示しても良い。",
      correct: true,
      explanation: "条件を満たせばカロリーハーフ表示は可能です。"
    },
    {
      text: "表示は控えた方が良い。",
      correct: false,
      explanation: "比較条件を満たせば表示可能です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品添加物について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "膨張剤の中には、ミョウバンや重曹が含まれている。",
      correct: false,
      explanation: "ミョウバンや重曹は膨張剤として使われます。"
    },
    {
      text: "酸化防止剤には、ジフェニルが含まれている。",
      correct: true,
      explanation: "ジフェニルは防かび剤です。"
    },
    {
      text: "マーガリンには、乳化剤が使用されている。",
      correct: false,
      explanation: "マーガリンには乳化剤が使われます。"
    },
    {
      text: "ゲル化剤は、ゲル化を安定させる作用がある。",
      correct: false,
      explanation: "ゲル化剤は食品を固める役割があります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食品添加物について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "発色剤には、次亜塩素酸ナトリウムがある。",
      correct: true,
      explanation: "次亜塩素酸ナトリウムは殺菌料です。"
    },
    {
      text: "着色料には、食用黄色４号がある。",
      correct: false,
      explanation: "食用黄色4号は着色料です。"
    },
    {
      text: "グルタミン酸ナトリウムは、調味料の１種である。",
      correct: false,
      explanation: "グルタミン酸ナトリウムはうま味調味料です。"
    },
    {
      text: "バニラエッセンスは、香料の１種である。",
      correct: false,
      explanation: "バニラエッセンスは香料に分類されます。"
    }
  ]
},{
  category: "食品栄養学（栄養学）",
  question: "単糖類の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "ブドウ糖は、体内でエネルギー源になる。",
      correct: false,
      explanation: "ブドウ糖は主要なエネルギー源です。"
    },
    {
      text: "果糖は、別名フルクトースと呼ばれている。",
      correct: false,
      explanation: "果糖はフルクトースとも呼ばれます。"
    },
    {
      text: "ガラクトースは、果実や蜂蜜に多く含まれている。",
      correct: true,
      explanation: "果実や蜂蜜に多いのは主に果糖であり、ガラクトースではありません。"
    },
    {
      text: "単糖類は、消化酵素でこれ以上分解できない糖質のことである。",
      correct: false,
      explanation: "単糖類はこれ以上分解できない最小単位の糖です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "少糖類の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "オリゴ糖も少糖類に含まれる。",
      correct: false,
      explanation: "オリゴ糖は少糖類の一種です。"
    },
    {
      text: "ショ糖は、ブドウ糖と果糖が結合した糖質である。",
      correct: false,
      explanation: "ショ糖はブドウ糖と果糖からできています。"
    },
    {
      text: "麦芽糖は、果糖が２個結合した糖質である。",
      correct: true,
      explanation: "麦芽糖はブドウ糖が2個結合した二糖類です。"
    },
    {
      text: "乳糖は、ブドウ糖とガラクトースが結合した糖質である。",
      correct: false,
      explanation: "乳糖はブドウ糖とガラクトースから構成されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "オリゴ糖の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "ビフィズス菌の餌となり腸内環境を整える難消化性の糖質である。",
      correct: false,
      explanation: "オリゴ糖はビフィズス菌の栄養源となります。"
    },
    {
      text: "砂糖と同じくらいカロリーが高い。",
      correct: true,
      explanation: "オリゴ糖は一般的に砂糖より低カロリーです。"
    },
    {
      text: "虫歯予防にも役立つ。",
      correct: false,
      explanation: "一部のオリゴ糖は虫歯になりにくい性質があります。"
    },
    {
      text: "バナナには、フラクトオリゴ糖が含まれている。",
      correct: false,
      explanation: "バナナにはフラクトオリゴ糖が含まれています。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "多糖類の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "単糖類が８個以上結合した糖質の事である。",
      correct: true,
      explanation: "一般的に多糖類は単糖が10個以上結合したものを指します。"
    },
    {
      text: "植物に含まれるでんぷんも多糖類である。",
      correct: false,
      explanation: "でんぷんは多糖類です。"
    },
    {
      text: "グリコーゲンは、肝臓と筋肉に蓄えられている。",
      correct: false,
      explanation: "グリコーゲンは肝臓や筋肉に蓄えられます。"
    },
    {
      text: "筋肉にあるグリコーゲンは、筋肉のみにエネルギー源になる。",
      correct: false,
      explanation: "筋グリコーゲンは主に筋肉自身のエネルギー源として使われます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "でんぷんの説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "でんぷんは、穀類やいも類の主成分になる。",
      correct: false,
      explanation: "でんぷんは穀類やいも類に多く含まれます。"
    },
    {
      text: "植物より合成される。",
      correct: false,
      explanation: "でんぷんは植物が光合成によって合成します。"
    },
    {
      text: "ショ糖と同じように甘味がある。",
      correct: true,
      explanation: "でんぷんにはほとんど甘味がありません。"
    },
    {
      text: "アミロースとアミロペクチンに分かれる。",
      correct: false,
      explanation: "でんぷんはアミロースとアミロペクチンから構成されます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "アミロペクチンの説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "ブドウ糖が枝分かれ構造で結合している。",
      correct: false,
      explanation: "アミロペクチンは枝分かれ構造を持っています。"
    },
    {
      text: "もち米は１００％アミロペクチンである。",
      correct: false,
      explanation: "もち米のでんぷんはほぼアミロペクチンです。"
    },
    {
      text: "冷めると硬くなりやすい。",
      correct: true,
      explanation: "冷めて硬くなりやすいのはアミロースです。"
    },
    {
      text: "粘り気が強く、熱水に溶けにくい。",
      correct: false,
      explanation: "アミロペクチンは粘り気が強い特徴があります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "アミロースの説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "うるち米に多く含まれている。",
      correct: false,
      explanation: "うるち米にはアミロースが含まれています。"
    },
    {
      text: "ヨウ素でんぷん反応で、赤紫色を呈する。",
      correct: true,
      explanation: "アミロースはヨウ素反応で青紫色を示します。"
    },
    {
      text: "粘り気が少なく、冷めると硬くなる。",
      correct: false,
      explanation: "アミロースは冷めると硬くなりやすい性質があります。"
    },
    {
      text: "インディカ米やタイ米に特に多く含まれる。",
      correct: false,
      explanation: "インディカ米はアミロース含量が高いです。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食物繊維の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "人の消化酵素で分解できる炭水化物のこと。",
      correct: true,
      explanation: "食物繊維は人の消化酵素では分解できない炭水化物です。"
    },
    {
      text: "水溶性と不溶性に分かれる。",
      correct: false,
      explanation: "食物繊維は水溶性と不溶性に分類されます。"
    },
    {
      text: "ペクチンとグルコマンナンは、水溶性食物繊維である。",
      correct: false,
      explanation: "ペクチンやグルコマンナンは水溶性食物繊維です。"
    },
    {
      text: "セルロースとキチンは不溶性食物繊維である。",
      correct: false,
      explanation: "セルロースやキチンは不溶性食物繊維です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "食物繊維の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "腸内環境を整える。",
      correct: false,
      explanation: "食物繊維は腸内環境を整える働きがあります。"
    },
    {
      text: "一部の食物繊維は、腸内細菌のエネルギー源になる。",
      correct: false,
      explanation: "水溶性食物繊維などは腸内細菌のエサになります。"
    },
    {
      text: "コレステロールの排泄を促す。",
      correct: false,
      explanation: "食物繊維はコレステロール排泄を促進します。"
    },
    {
      text: "血糖値と中性脂肪の値を上げる。",
      correct: true,
      explanation: "食物繊維には血糖値上昇を抑える働きがあります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "水溶性食物繊維が比較的に多い食品を１つ選びなさい。",
  choices: [
    {
      text: "たけのこ",
      correct: false,
      explanation: "たけのこは不溶性食物繊維が比較的多い食品です。"
    },
    {
      text: "大豆",
      correct: false,
      explanation: "大豆には不溶性食物繊維が多く含まれます。"
    },
    {
      text: "ほうれん草",
      correct: false,
      explanation: "ほうれん草にも食物繊維はありますが、水溶性は多くありません。"
    },
    {
      text: "わかめ",
      correct: true,
      explanation: "わかめにはアルギン酸などの水溶性食物繊維が豊富です。"
    }
  ]
},{
  category: "食品栄養学（栄養学）",
  question: "炭水化物の推奨されている摂取エネルギー比率で正しいのを１つ選びなさい。",
  choices: [
    {
      text: "30～40％",
      correct: false,
      explanation: "炭水化物の推奨エネルギー比率としては低すぎます。"
    },
    {
      text: "40～50％",
      correct: false,
      explanation: "一般的な推奨比率よりやや低い値です。"
    },
    {
      text: "50～60％",
      correct: true,
      explanation: "炭水化物の推奨摂取エネルギー比率は50～60％程度です。"
    },
    {
      text: "60～70％",
      correct: false,
      explanation: "一般的な推奨範囲より高めです。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "体内での糖質に関係する説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "血糖値とは、体内の血管内のフルクトースの量を示している。",
      correct: true,
      explanation: "血糖値は血液中のブドウ糖（グルコース）の濃度を示します。"
    },
    {
      text: "ブドウ糖は、平常時では脳・神経系・赤血球が主なエネルギー源になる。",
      correct: false,
      explanation: "脳や赤血球は主にブドウ糖をエネルギー源として利用します。"
    },
    {
      text: "糖質が枯渇時は、脳や神経系はケトン体がエネルギー源になる。",
      correct: false,
      explanation: "糖質不足時にはケトン体が代替エネルギー源となります。"
    },
    {
      text: "インスリンは、血糖値を下げるホルモンである。",
      correct: false,
      explanation: "インスリンには血糖値を下げる働きがあります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "糖新生の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "糖質の摂取量が少ないと筋肉たんぱく質が減少する。",
      correct: false,
      explanation: "糖質不足時には筋肉たんぱく質が分解されることがあります。"
    },
    {
      text: "脂質を分解してブドウ糖を生成する。",
      correct: false,
      explanation: "脂質由来のグリセロールは糖新生に利用されます。"
    },
    {
      text: "糖新生が頻繁に行われると、体重減少をきたす。",
      correct: false,
      explanation: "糖新生が続くと筋肉量減少や体重減少につながることがあります。"
    },
    {
      text: "体内で貯蔵されているブドウ糖は、約600ｇ程度である。",
      correct: true,
      explanation: "体内のグリコーゲン貯蔵量は一般的に約300〜500g程度です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "糖新生の代謝ルートの説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "一部のアミノ酸は、αーケトグルタル酸になり、TCA回路を回り、特殊なルートを経てグルコースになる。",
      correct: false,
      explanation: "糖原性アミノ酸はTCA回路を経て糖新生に利用されます。"
    },
    {
      text: "一部のアミノ酸は、ピルビン酸からアセチルCoAを経てグルコースになる。",
      correct: true,
      explanation: "アセチルCoAからは基本的にグルコースを合成できません。"
    },
    {
      text: "脂質は、グリセロールに分解され、解糖系の逆を進み、グルコースになる。",
      correct: false,
      explanation: "脂質由来のグリセロールは糖新生に利用されます。"
    },
    {
      text: "一部のアミノ酸は、オキザロ酢酸になり、直接解糖系に入り、グルコースになる。",
      correct: false,
      explanation: "オキザロ酢酸は糖新生経路を通じてグルコースになります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "糖質の摂取量について誤っている説明文を１つ選びなさい。",
  choices: [
    {
      text: "推奨されている１日最低摂取量は、150ｇ程度である。",
      correct: false,
      explanation: "糖質の最低必要量はおよそ100〜150g程度とされています。"
    },
    {
      text: "糖質が減量されているなかでエネルギー確保を目指すと、高脂肪食になる。",
      correct: false,
      explanation: "糖質制限では脂質摂取割合が高くなりやすいです。"
    },
    {
      text: "糖質制限は、一気に厳しい制限に移行しても良い。",
      correct: true,
      explanation: "急激な糖質制限は体調不良を招くことがあり、段階的に行うことが望ましいです。"
    },
    {
      text: "糖質制限の初心者向けの糖質摂取量は、１日130ｇ程度からである。",
      correct: false,
      explanation: "初心者向けには1日130g程度の糖質摂取が目安とされます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "ごはん150ｇに含まれる糖質量は約何ｇか１つ選びなさい。",
  choices: [
    {
      text: "約40ｇ",
      correct: false,
      explanation: "150gのごはんとしてはやや少ない値です。"
    },
    {
      text: "約45ｇ",
      correct: false,
      explanation: "実際の糖質量より少なめです。"
    },
    {
      text: "約50ｇ",
      correct: false,
      explanation: "実際の糖質量に近いですがやや少なめです。"
    },
    {
      text: "約55ｇ",
      correct: true,
      explanation: "ごはん150gにはおよそ55g程度の糖質が含まれます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "糖質制限の説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "体重が減りやすいのがメリットである。",
      correct: false,
      explanation: "糖質制限では体重減少しやすい傾向があります。"
    },
    {
      text: "リバウンドしやすいのがデメリットである。",
      correct: false,
      explanation: "急激な制限はリバウンドにつながることがあります。"
    },
    {
      text: "食後、眠くなりにくいのがメリットである。",
      correct: false,
      explanation: "血糖値変動が少なくなるため眠気が起こりにくい場合があります。"
    },
    {
      text: "血糖値が悪くなるのがデメリットである。",
      correct: true,
      explanation: "適切な糖質制限は血糖コントロール改善に役立つことがあります。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "糖質が少ない食品を１つ選びなさい。",
  choices: [
    {
      text: "食パン",
      correct: false,
      explanation: "食パンは糖質を多く含みます。"
    },
    {
      text: "バナナ",
      correct: false,
      explanation: "バナナは果糖などの糖質を含みます。"
    },
    {
      text: "しいたけ",
      correct: true,
      explanation: "しいたけは低糖質な食品です。"
    },
    {
      text: "さつまいも",
      correct: false,
      explanation: "さつまいもは糖質を多く含みます。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "生活習慣病を招く要因ではない物を１つ選びなさい。",
  choices: [
    {
      text: "有酸素運動",
      correct: true,
      explanation: "有酸素運動は生活習慣病予防に役立ちます。"
    },
    {
      text: "食べ過ぎ",
      correct: false,
      explanation: "過食は生活習慣病の原因になります。"
    },
    {
      text: "大量飲酒",
      correct: false,
      explanation: "大量飲酒は生活習慣病リスクを高めます。"
    },
    {
      text: "喫煙",
      correct: false,
      explanation: "喫煙は生活習慣病の大きな危険因子です。"
    }
  ]
},
{
  category: "食品栄養学（栄養学）",
  question: "メタボリックシンドロームの診断基準に関わる説明文として誤っている物を１つ選びなさい。",
  choices: [
    {
      text: "男性 腹囲 80㎝以上",
      correct: true,
      explanation: "男性の腹囲基準は85cm以上です。"
    },
    {
      text: "中性脂肪 150㎎／dl以上",
      correct: false,
      explanation: "中性脂肪150mg/dL以上は診断基準の一つです。"
    },
    {
      text: "血圧 最高血圧 130mmHg以上",
      correct: false,
      explanation: "最高血圧130mmHg以上は基準に含まれます。"
    },
    {
      text: "空腹時血糖値 110㎎／dl以上",
      correct: false,
      explanation: "空腹時血糖110mg/dL以上は診断基準の一つです。"
    }
  ]
},{
  category: "フードセーフティ論",
  question: "現代の食の安全が昔より難しくなっている主な理由はどれか。",
  choices: [
    {
      text: "食材の種類が減ったため",
      correct: false,
      explanation: "現代では食材の種類はむしろ多様化しています。"
    },
    {
      text: "流通が単純化したため",
      correct: false,
      explanation: "食品流通は国際化により複雑化しています。"
    },
    {
      text: "世界中から食材・加工食品が集まり、経路が複雑化したため",
      correct: true,
      explanation: "食品のグローバル化により、安全管理がより複雑になっています。"
    },
    {
      text: "人々の味覚が変化したため",
      correct: false,
      explanation: "味覚の変化は主な理由ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "食べることの本質として正しいものはどれか。",
  choices: [
    {
      text: "すべての食品は完全に安全である",
      correct: false,
      explanation: "食品には一定のリスクが存在します。"
    },
    {
      text: "食べることは常にリスクと隣り合わせである",
      correct: true,
      explanation: "食品には微生物や化学物質など様々なリスクが伴います。"
    },
    {
      text: "食べることは健康とは無関係である",
      correct: false,
      explanation: "食事は健康と密接に関係しています。"
    },
    {
      text: "リスクは自然毒に限られる",
      correct: false,
      explanation: "リスクには食中毒菌や異物混入なども含まれます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "生物的危害に含まれるものはどれか。",
  choices: [
    {
      text: "農薬",
      correct: false,
      explanation: "農薬は化学的危害に分類されます。"
    },
    {
      text: "ガラス片",
      correct: false,
      explanation: "ガラス片は物理的危害です。"
    },
    {
      text: "ノロウイルス",
      correct: true,
      explanation: "ノロウイルスは生物的危害に分類されます。"
    },
    {
      text: "食品添加物",
      correct: false,
      explanation: "食品添加物は化学的危害に分類されます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "化学的危害の例として正しいものはどれか。",
  choices: [
    {
      text: "髪の毛",
      correct: false,
      explanation: "髪の毛は物理的危害です。"
    },
    {
      text: "金属片",
      correct: false,
      explanation: "金属片は物理的危害に分類されます。"
    },
    {
      text: "不適切な食品添加物",
      correct: true,
      explanation: "不適切な食品添加物は化学的危害に該当します。"
    },
    {
      text: "寄生虫",
      correct: false,
      explanation: "寄生虫は生物的危害です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "物理的危害に分類されるものはどれか。",
  choices: [
    {
      text: "フグ毒",
      correct: false,
      explanation: "フグ毒は化学的危害に分類されます。"
    },
    {
      text: "農薬",
      correct: false,
      explanation: "農薬は化学的危害です。"
    },
    {
      text: "アニサキス",
      correct: false,
      explanation: "アニサキスは生物的危害です。"
    },
    {
      text: "ガラス片",
      correct: true,
      explanation: "ガラス片は異物混入による物理的危害です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "食中毒予防の基本として誤っているものはどれか。",
  choices: [
    {
      text: "手洗い",
      correct: false,
      explanation: "手洗いは食中毒予防の基本です。"
    },
    {
      text: "十分な加熱",
      correct: false,
      explanation: "十分な加熱は細菌やウイルス対策として重要です。"
    },
    {
      text: "交差汚染の防止",
      correct: false,
      explanation: "交差汚染を防ぐことは衛生管理の基本です。"
    },
    {
      text: "食品は常温で長時間保存する",
      correct: true,
      explanation: "常温で長時間保存すると細菌が増殖しやすく危険です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "HACCPの特徴として正しいものはどれか。",
  choices: [
    {
      text: "最終製品だけを検査する方法",
      correct: false,
      explanation: "HACCPは製造工程全体を管理します。"
    },
    {
      text: "経験と勘に頼る管理方法",
      correct: false,
      explanation: "HACCPは科学的根拠に基づく管理手法です。"
    },
    {
      text: "工程ごとに危害を予測し、管理・記録する方法",
      correct: true,
      explanation: "HACCPは危害分析を行い、工程ごとに管理する仕組みです。"
    },
    {
      text: "調理工程を減らす方法",
      correct: false,
      explanation: "工程削減ではなく、工程管理が目的です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "HACCPが重視するのはどの工程か。",
  choices: [
    {
      text: "最終チェックのみ",
      correct: false,
      explanation: "HACCPは最終検査だけでなく全工程を重視します。"
    },
    {
      text: "材料・調理・保存など全工程",
      correct: true,
      explanation: "原材料の受入れから提供まで全工程を管理します。"
    },
    {
      text: "調理工程のみ",
      correct: false,
      explanation: "調理以外の工程も重要です。"
    },
    {
      text: "保存工程のみ",
      correct: false,
      explanation: "保存だけでなく全工程の管理が必要です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "現代の食品安全が「個人の勘」だけでは守れない理由として最も適切なのはどれか。",
  choices: [
    {
      text: "食品の味が複雑になったため",
      correct: false,
      explanation: "味の複雑さは主な理由ではありません。"
    },
    {
      text: "食品の流通がグローバル化し、見えないリスクが増えたため",
      correct: true,
      explanation: "流通の複雑化により科学的管理が必要になっています。"
    },
    {
      text: "調理器具が進化したため",
      correct: false,
      explanation: "調理器具の進化自体が理由ではありません。"
    },
    {
      text: "食品の種類が減ったため",
      correct: false,
      explanation: "食品の種類は増加・多様化しています。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "食品安全において最も重要な考え方はどれか。",
  choices: [
    {
      text: "安全は自然に存在する",
      correct: false,
      explanation: "安全は管理によって確保されるものです。"
    },
    {
      text: "完全なゼロリスクが存在する",
      correct: false,
      explanation: "完全なゼロリスクは現実的には存在しません。"
    },
    {
      text: "安全は科学と仕組みで「作る」ものである",
      correct: true,
      explanation: "食品安全は科学的管理と仕組みによって確保されます。"
    },
    {
      text: "経験があれば安全は守れる",
      correct: false,
      explanation: "経験だけでなく科学的管理が必要です。"
    }
  ]
},{
  category: "フードセーフティ論",
  question: "フードチェーンの「第1ステージ」にあたり、すべての循環を支える起点はどれですか？",
  choices: [
    {
      text: "流通",
      correct: false,
      explanation: "流通は食品を運搬・供給する工程です。"
    },
    {
      text: "生産",
      correct: true,
      explanation: "生産は農業・畜産・漁業など食品供給の出発点となる重要な段階です。"
    },
    {
      text: "製造・加工",
      correct: false,
      explanation: "製造・加工は原材料を食品へ加工する工程です。"
    },
    {
      text: "販売・提供",
      correct: false,
      explanation: "販売・提供は消費者へ届ける段階です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "フードチェーンの「流通」において、食品の鮮度と安全性を維持するために適切な温度管理を行う仕組みを何と呼びますか？",
  choices: [
    {
      text: "ホットライン",
      correct: false,
      explanation: "ホットラインは緊急連絡網などを指します。"
    },
    {
      text: "サプライチェーン",
      correct: false,
      explanation: "サプライチェーンは供給網全体を指す言葉です。"
    },
    {
      text: "コールドチェーン",
      correct: true,
      explanation: "コールドチェーンは低温管理によって鮮度と安全性を維持する仕組みです。"
    },
    {
      text: "バリューチェーン",
      correct: false,
      explanation: "バリューチェーンは付加価値の流れを示す概念です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "原材料を安全かつ効率的に、食べられる状態や保存可能な形態へ変換する「第3ステージ」はどれですか？",
  choices: [
    {
      text: "生産",
      correct: false,
      explanation: "生産は農産物などを作る段階です。"
    },
    {
      text: "流通",
      correct: false,
      explanation: "流通は食品を輸送・保管する段階です。"
    },
    {
      text: "製造・加工",
      correct: true,
      explanation: "製造・加工では原材料を食品へ加工し、安全性や保存性を高めます。"
    },
    {
      text: "消費",
      correct: false,
      explanation: "消費は食品を利用・摂取する最終段階です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "フードチェーンの「第4ステージ（販売・提供）」に含まれる業態として正しい組み合わせはどれですか？",
  choices: [
    {
      text: "農業・漁業",
      correct: false,
      explanation: "農業・漁業は生産段階に含まれます。"
    },
    {
      text: "卸売・物流",
      correct: false,
      explanation: "卸売・物流は流通段階に含まれます。"
    },
    {
      text: "小売（スーパー・コンビニ）・外食",
      correct: true,
      explanation: "販売・提供段階には小売店や飲食店などが含まれます。"
    },
    {
      text: "家庭調理・食事",
      correct: false,
      explanation: "家庭調理や食事は消費段階に含まれます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "フードチェーンの終着点である「消費」の段階に含まれる活動はどれですか？",
  choices: [
    {
      text: "製品開発",
      correct: false,
      explanation: "製品開発は製造・加工に関連する活動です。"
    },
    {
      text: "廃棄物管理（分別・リサイクル）",
      correct: true,
      explanation: "消費段階では食品利用後の廃棄やリサイクルも重要な活動です。"
    },
    {
      text: "市場の需給バランス調整",
      correct: false,
      explanation: "需給調整は流通や経済活動に関連します。"
    },
    {
      text: "原材料の選別",
      correct: false,
      explanation: "原材料の選別は生産・加工段階で行われます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "2003年に「食品安全基本法」が制定された背景として、間違っているものはどれですか？",
  choices: [
    {
      text: "O157による集団食中毒",
      correct: false,
      explanation: "O157集団食中毒は食品安全行政見直しのきっかけとなりました。"
    },
    {
      text: "BSE（牛海綿状脳症）問題",
      correct: false,
      explanation: "BSE問題は食品安全基本法制定の大きな背景です。"
    },
    {
      text: "産地偽装などの食品偽装事件",
      correct: false,
      explanation: "食品偽装問題も消費者不安を高めました。"
    },
    {
      text: "食料自給率の急激な上昇",
      correct: true,
      explanation: "食料自給率の上昇は法律制定の背景ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "リスク分析の手法において、中立的な評価機関（食品安全委員会）が行う「科学的な評価」を何と呼びますか？",
  choices: [
    {
      text: "リスク管理",
      correct: false,
      explanation: "リスク管理は行政機関が基準設定などを行うことです。"
    },
    {
      text: "リスク評価",
      correct: true,
      explanation: "リスク評価は科学的根拠に基づき危険性を評価することです。"
    },
    {
      text: "リスクコミュニケーション",
      correct: false,
      explanation: "情報共有や意見交換はリスクコミュニケーションです。"
    },
    {
      text: "リスクゼロ",
      correct: false,
      explanation: "リスクゼロという考え方は現実的ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "行政機関（国・地方自治体）が、リスク評価に基づき管理基準の設定や監視指導を行うことを何と呼びますか？",
  choices: [
    {
      text: "リスク評価",
      correct: false,
      explanation: "リスク評価は科学的な危険性評価です。"
    },
    {
      text: "リスク管理",
      correct: true,
      explanation: "リスク管理は基準設定や監視指導などを行うことです。"
    },
    {
      text: "リスクコミュニケーション",
      correct: false,
      explanation: "情報共有や意見交換はリスクコミュニケーションです。"
    },
    {
      text: "リスク・ヘッジ",
      correct: false,
      explanation: "リスク・ヘッジは一般的な危険回避の概念です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "行政・事業者・消費者の三者が、情報を共有し意見交換を行うことを何と呼びますか？",
  choices: [
    {
      text: "リスク評価",
      correct: false,
      explanation: "リスク評価は危険性を科学的に分析することです。"
    },
    {
      text: "リスク管理",
      correct: false,
      explanation: "リスク管理は基準設定や監視などを行うことです。"
    },
    {
      text: "リスクコミュニケーション",
      correct: true,
      explanation: "関係者間で情報共有や意見交換を行うことをリスクコミュニケーションといいます。"
    },
    {
      text: "リスク・マーケティング",
      correct: false,
      explanation: "リスク・マーケティングという用語は適切ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "食品安全基本法において、「安全第一主義」の考え方として示されているものはどれですか？",
  choices: [
    {
      text: "リスクをゼロにすることが法律の目的である",
      correct: false,
      explanation: "完全なゼロリスクを実現することは困難です。"
    },
    {
      text: "リスクゼロは不可能であり、リスクの最小化を目指す",
      correct: true,
      explanation: "食品安全ではリスクを科学的に管理し最小化する考え方が重視されています。"
    },
    {
      text: "コストを優先し、リスクはある程度許容する",
      correct: false,
      explanation: "安全性の確保が最優先です。"
    },
    {
      text: "消費者には一切の役割はない",
      correct: false,
      explanation: "消費者も食品安全に関わる重要な役割を持っています。"
    }
  ]
},{
  category: "フードセーフティ論",
  question: "微生物の定義として最も適切なものはどれですか？",
  choices: [
    {
      text: "肉眼ではっきりと確認できる大きさの生物",
      correct: false,
      explanation: "微生物は肉眼では確認できないほど小さい生物です。"
    },
    {
      text: "肉眼では見えないほど小さな生物（およびウイルス）の総称",
      correct: true,
      explanation: "微生物とは、肉眼では見えないほど小さな生物やウイルスを含む総称です。"
    },
    {
      text: "食品の中にのみ生息し、土壌や空気中には存在しない生物",
      correct: false,
      explanation: "微生物は土壌・空気・水など自然界のさまざまな場所に存在します。"
    },
    {
      text: "すべてが人間に害を及ぼす有害な生き物",
      correct: false,
      explanation: "微生物には有用なものも多く存在します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "講義内容において、微生物の種類として挙げられていないものはどれですか？",
  choices: [
    {
      text: "細菌",
      correct: false,
      explanation: "細菌は代表的な微生物です。"
    },
    {
      text: "真菌（かび・酵母）",
      correct: false,
      explanation: "真菌にはかびや酵母が含まれ、微生物に分類されます。"
    },
    {
      text: "昆虫",
      correct: true,
      explanation: "昆虫は肉眼で確認できる生物であり、微生物には含まれません。"
    },
    {
      text: "ウイルス",
      correct: false,
      explanation: "ウイルスも微生物として扱われます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "単位の換算について、1μm（マイクロメートル）は1mmの何分の1ですか？",
  choices: [
    {
      text: "10分の1",
      correct: false,
      explanation: "1μmは1mmよりはるかに小さい単位です。"
    },
    {
      text: "100分の1",
      correct: false,
      explanation: "1mm = 1000μmです。"
    },
    {
      text: "1,000分の1",
      correct: true,
      explanation: "1μmは1mmの1000分の1です。"
    },
    {
      text: "1,000,000分の1",
      correct: false,
      explanation: "これはnmとmmの関係に近い値です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "単位の換算について、1nm（ナノメートル）は1μmの何分の1ですか？",
  choices: [
    {
      text: "10分の1",
      correct: false,
      explanation: "1nmはさらに小さい単位です。"
    },
    {
      text: "100分の1",
      correct: false,
      explanation: "1μm = 1000nmです。"
    },
    {
      text: "1,000分の1",
      correct: true,
      explanation: "1nmは1μmの1000分の1です。"
    },
    {
      text: "10,000分の1",
      correct: false,
      explanation: "正しくは1000分の1です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "人間を「日本列島」の大きさに拡大したとき、細菌のサイズに相当する例えは何ですか？",
  choices: [
    {
      text: "テニスボール",
      correct: true,
      explanation: "細菌は非常に小さく、人間を日本列島サイズに例えるとテニスボール程度になります。"
    },
    {
      text: "米粒",
      correct: false,
      explanation: "米粒よりさらに大きいイメージです。"
    },
    {
      text: "富士山",
      correct: false,
      explanation: "富士山ほど大きくはありません。"
    },
    {
      text: "ビー玉",
      correct: false,
      explanation: "近い大きさですが、講義ではテニスボールで例えられています。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌（Bacteria）の増殖方法として正しいものはどれですか？",
  choices: [
    {
      text: "胞子を飛ばして増える",
      correct: false,
      explanation: "胞子形成は一部の微生物の生存形態ですが、細菌の基本的な増殖方法ではありません。"
    },
    {
      text: "出芽（しゅつが）によって増える",
      correct: false,
      explanation: "出芽は酵母などで見られる増殖方法です。"
    },
    {
      text: "二分裂（ねずみ算式）によって自己増殖する",
      correct: true,
      explanation: "細菌は二分裂によって急速に増殖します。"
    },
    {
      text: "他の細胞（宿主）に乗っ取って増える",
      correct: false,
      explanation: "これはウイルスの特徴です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌を観察するために一般的に使用される器具は何ですか？",
  choices: [
    {
      text: "虫眼鏡",
      correct: false,
      explanation: "虫眼鏡では細菌を観察できません。"
    },
    {
      text: "光学顕微鏡（通常1000倍）",
      correct: true,
      explanation: "細菌は通常、光学顕微鏡で観察されます。"
    },
    {
      text: "電子顕微鏡",
      correct: false,
      explanation: "電子顕微鏡は主にウイルス観察などに用いられます。"
    },
    {
      text: "天体望遠鏡",
      correct: false,
      explanation: "天体望遠鏡は天体観測用です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ウイルス（Virus）の増殖に関する記述として正しいものはどれですか？",
  choices: [
    {
      text: "水分と栄養があれば自力で増殖できる",
      correct: false,
      explanation: "ウイルスは単独では増殖できません。"
    },
    {
      text: "生きた細胞（宿主）の中でのみ増殖できる",
      correct: true,
      explanation: "ウイルスは宿主細胞を利用して増殖します。"
    },
    {
      text: "食品の中で爆発的に数を増やす",
      correct: false,
      explanation: "食品中で自己増殖するのは主に細菌です。"
    },
    {
      text: "出芽によって自分たちだけで増える",
      correct: false,
      explanation: "出芽は酵母などの増殖方法です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ウイルスの観察に不可欠なものはどれですか？",
  choices: [
    {
      text: "光学顕微鏡",
      correct: false,
      explanation: "ウイルスは光学顕微鏡では観察できません。"
    },
    {
      text: "肉眼",
      correct: false,
      explanation: "ウイルスは肉眼では見えません。"
    },
    {
      text: "電子顕微鏡",
      correct: true,
      explanation: "ウイルス観察には電子顕微鏡が必要です。"
    },
    {
      text: "ルーペ",
      correct: false,
      explanation: "ルーペでは観察できません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌が過酷な環境（熱・乾燥）で作る「眠る状態」の防御形態を何と呼びますか？",
  choices: [
    {
      text: "菌糸",
      correct: false,
      explanation: "菌糸はかび類の構造です。"
    },
    {
      text: "芽胞（がほう）",
      correct: true,
      explanation: "芽胞は細菌が過酷な環境に耐えるために形成する防御形態です。"
    },
    {
      text: "出芽",
      correct: false,
      explanation: "出芽は酵母などの増殖方法です。"
    },
    {
      text: "宿主",
      correct: false,
      explanation: "宿主はウイルスなどが利用する生物を指します。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "通常の100℃加熱でも死滅しないことがあり、食品加熱における最大の脅威とされるものはどれですか？",
  choices: [
    {
      text: "ノロウイルス",
      correct: false,
      explanation: "ノロウイルスは加熱によって失活します。"
    },
    {
      text: "カビ毒",
      correct: false,
      explanation: "カビ毒は熱に強いものもありますが、設問の趣旨とは異なります。"
    },
    {
      text: "芽胞",
      correct: true,
      explanation: "芽胞は非常に耐熱性が高く、通常の100℃加熱でも死滅しない場合があります。"
    },
    {
      text: "酵母",
      correct: false,
      explanation: "酵母は通常の加熱で死滅します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "真菌（かび・酵母）の細胞構造に関する記述で正しいものはどれですか？",
  choices: [
    {
      text: "ウイルスと同じく非細胞性である",
      correct: false,
      explanation: "真菌は細胞構造を持つ生物です。"
    },
    {
      text: "細菌と同じく核を持たない原核生物である",
      correct: false,
      explanation: "真菌は核を持つ真核生物です。"
    },
    {
      text: "ヒトの細胞に近い構造を持つ「真核生物」である",
      correct: true,
      explanation: "真菌はヒトと同じ真核生物に分類されます。"
    },
    {
      text: "構造が極めて単純でフィルターをすり抜ける",
      correct: false,
      explanation: "これはウイルスの特徴に近い説明です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "「かび（Mold）」の増え方の特徴として正しいものはどれですか？",
  choices: [
    {
      text: "「出芽」で増殖する",
      correct: false,
      explanation: "出芽は酵母の代表的な増殖方法です。"
    },
    {
      text: "糸状の「菌糸」を伸ばし、「胞子」を飛ばして移動する",
      correct: true,
      explanation: "かびは菌糸を伸ばし、胞子によって広がります。"
    },
    {
      text: "他の細菌を食べて増える",
      correct: false,
      explanation: "かびは細菌を捕食して増殖するわけではありません。"
    },
    {
      text: "熱に非常に弱く、すべて100℃で完全に分解される",
      correct: false,
      explanation: "かび由来のカビ毒には耐熱性を持つものもあります。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "「酵母（Yeast）」の増殖方法として正しいものはどれですか？",
  choices: [
    {
      text: "二分裂",
      correct: false,
      explanation: "二分裂は主に細菌の増殖方法です。"
    },
    {
      text: "出芽（しゅつが）",
      correct: true,
      explanation: "酵母は出芽によって増殖します。"
    },
    {
      text: "宿主への感染",
      correct: false,
      explanation: "これはウイルスの特徴です。"
    },
    {
      text: "光合成",
      correct: false,
      explanation: "酵母は光合成を行いません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "パン、酒、味噌などの発酵食品の製造に欠かせない微生物はどれですか？",
  choices: [
    {
      text: "ボツリヌス菌",
      correct: false,
      explanation: "ボツリヌス菌は食中毒原因菌です。"
    },
    {
      text: "ノロウイルス",
      correct: false,
      explanation: "ノロウイルスは発酵に利用されません。"
    },
    {
      text: "酵母",
      correct: true,
      explanation: "酵母はアルコール発酵などを行い、発酵食品製造に利用されます。"
    },
    {
      text: "クリプトスポリジウム",
      correct: false,
      explanation: "クリプトスポリジウムは原虫の一種です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "かびの一部が生成する、食の安全を脅かす熱に強い物質は何ですか？",
  choices: [
    {
      text: "カビ毒（マイコトキシン）",
      correct: true,
      explanation: "カビ毒はかびが生成する有害物質で、耐熱性を持つものがあります。"
    },
    {
      text: "芽胞",
      correct: false,
      explanation: "芽胞は細菌の防御形態です。"
    },
    {
      text: "旨味成分",
      correct: false,
      explanation: "旨味成分は有害物質ではありません。"
    },
    {
      text: "タンパク質の殻",
      correct: false,
      explanation: "これはウイルス構造に関する説明です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ノロウイルスなどのウイルスが食中毒を引き起こすプロセスとして正しいものはどれですか？",
  choices: [
    {
      text: "食品の中で数が増えたものを食べて発症する",
      correct: false,
      explanation: "ウイルスは食品中では増殖できません。"
    },
    {
      text: "付着した少量のウイルスを食べ、人の腸内で増殖して発症する",
      correct: true,
      explanation: "ノロウイルスは人の体内で増殖し、発症します。"
    },
    {
      text: "ウイルスが生成した毒素を食べて発症する",
      correct: false,
      explanation: "毒素型食中毒ではありません。"
    },
    {
      text: "ウイルスが空気中で芽胞に変化して感染する",
      correct: false,
      explanation: "ウイルスは芽胞を形成しません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "水道水などを介して感染する、細菌よりも複雑な「単細胞の動物（真核生物）」は何ですか？",
  choices: [
    {
      text: "ウイルス",
      correct: false,
      explanation: "ウイルスは細胞構造を持ちません。"
    },
    {
      text: "原虫（クリプトスポリジウム等）",
      correct: true,
      explanation: "原虫は真核生物であり、水系感染を起こすことがあります。"
    },
    {
      text: "桿菌",
      correct: false,
      explanation: "桿菌は細菌の形状分類です。"
    },
    {
      text: "らせん菌",
      correct: false,
      explanation: "らせん菌も細菌の分類です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "微生物が食品の成分を分解して、人間に有益な変化をもたらすことを何と言いますか？",
  choices: [
    {
      text: "腐敗",
      correct: false,
      explanation: "腐敗は有害・不快な変化を指します。"
    },
    {
      text: "感染",
      correct: false,
      explanation: "感染は病原体が体内へ侵入することです。"
    },
    {
      text: "発酵",
      correct: true,
      explanation: "発酵は微生物の働きによる有益な変化です。"
    },
    {
      text: "汚染",
      correct: false,
      explanation: "汚染は望ましくない混入を意味します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "食品を扱うプロフェッショナルの使命として、資料で強調されていることは何ですか？",
  choices: [
    {
      text: "微生物を完全に地球上から排除すること",
      correct: false,
      explanation: "微生物を完全に排除することは現実的ではありません。"
    },
    {
      text: "食品を無菌状態で生産し続けること",
      correct: false,
      explanation: "重要なのは適切な衛生管理です。"
    },
    {
      text: "衛生管理によって微生物の「影（有害な面）」を封じ込め、安全を確保すること",
      correct: true,
      explanation: "食品衛生では微生物の有害な側面を管理し、安全を確保することが重要です。"
    },
    {
      text: "自然界の微生物には一切関与しないこと",
      correct: false,
      explanation: "食品製造や衛生管理では微生物への理解と管理が必要です。"
    }
  ]
},{
  category: "フードセーフティ論",
  question: "微生物の定義として正しいものはどれですか？",
  choices: [
    {
      text: "肉眼で見ることができる大きな生物の総称",
      correct: false,
      explanation: "微生物は肉眼では見えないほど小さな生物です。"
    },
    {
      text: "肉眼では見ることができない微小な生物群の総称",
      correct: true,
      explanation: "微生物とは、肉眼では見えない微小な生物群の総称です。"
    },
    {
      text: "カビやキノコだけを指す言葉",
      correct: false,
      explanation: "微生物には細菌・真菌・ウイルスなども含まれます。"
    },
    {
      text: "水の中にしか存在しない生物",
      correct: false,
      explanation: "微生物は空気中、土壌、食品などさまざまな場所に存在します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "微生物のサイズを表す際、1µm（マイクロメートル）は1mmの何分の1ですか？",
  choices: [
    {
      text: "10分の1",
      correct: false,
      explanation: "1µmは1mmの10分の1ではありません。"
    },
    {
      text: "100分の1",
      correct: false,
      explanation: "1µmは1mmの100分の1ではありません。"
    },
    {
      text: "1,000分の1",
      correct: true,
      explanation: "1µmは1mmの1,000分の1です。"
    },
    {
      text: "10,000分の1",
      correct: false,
      explanation: "1µmは1mmの10,000分の1ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ブドウ球菌の直径は約1µmです。これをテニスボール（約6.5cm）の大きさに拡大した場合、同じ倍率で人間（約1.7m）を拡大するとどのくらいの大きさになりますか？",
  choices: [
    {
      text: "東京タワーの高さ",
      correct: false,
      explanation: "東京タワーよりはるかに大きなサイズになります。"
    },
    {
      text: "富士山の高さの約30倍（約110km）",
      correct: true,
      explanation: "同じ倍率で拡大すると、人間は約110kmもの大きさになります。"
    },
    {
      text: "月までの距離",
      correct: false,
      explanation: "月までの距離ほど巨大にはなりません。"
    },
    {
      text: "日本列島の長さ",
      correct: false,
      explanation: "日本列島ほどの長さには達しません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌をその形によって分類したとき、球状のものを何と呼びますか？",
  choices: [
    {
      text: "桿菌",
      correct: false,
      explanation: "桿菌は細長い棒状の細菌です。"
    },
    {
      text: "らせん菌",
      correct: false,
      explanation: "らせん菌はねじれた形をした細菌です。"
    },
    {
      text: "球菌",
      correct: true,
      explanation: "球状の細菌は球菌と呼ばれます。"
    },
    {
      text: "リケッチア",
      correct: false,
      explanation: "リケッチアは細菌の一種ですが、形状分類名ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "食中毒の原因となる「黄色ブドウ球菌」は、どの形に分類されますか？",
  choices: [
    {
      text: "球菌",
      correct: true,
      explanation: "黄色ブドウ球菌は球状をした球菌に分類されます。"
    },
    {
      text: "桿菌",
      correct: false,
      explanation: "桿菌は棒状の細菌です。"
    },
    {
      text: "らせん菌",
      correct: false,
      explanation: "黄色ブドウ球菌はらせん状ではありません。"
    },
    {
      text: "ウイルス",
      correct: false,
      explanation: "黄色ブドウ球菌は細菌であり、ウイルスではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "サルモネラ属菌や大腸菌など、細長いカプセルのような形をした細菌を何と呼びますか？",
  choices: [
    {
      text: "球菌",
      correct: false,
      explanation: "球菌は球状の細菌です。"
    },
    {
      text: "桿菌",
      correct: true,
      explanation: "棒状・細長い形をした細菌は桿菌と呼ばれます。"
    },
    {
      text: "らせん菌",
      correct: false,
      explanation: "らせん菌はねじれた形をした細菌です。"
    },
    {
      text: "真菌",
      correct: false,
      explanation: "真菌はカビや酵母などを指します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌の中には、移動するための「シッポ」のような器官を持つものがいます。これを何と呼びますか？",
  choices: [
    {
      text: "芽胞",
      correct: false,
      explanation: "芽胞は過酷な環境で形成される耐久構造です。"
    },
    {
      text: "鞭毛",
      correct: true,
      explanation: "細菌の移動に使われる器官は鞭毛と呼ばれます。"
    },
    {
      text: "らせん",
      correct: false,
      explanation: "らせんは形状を表す言葉です。"
    },
    {
      text: "リケッチア",
      correct: false,
      explanation: "リケッチアは微生物の一種です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "カンピロバクターのように、湾曲したり、ねじれたりした形をしている細菌を何と呼びますか？",
  choices: [
    {
      text: "球菌",
      correct: false,
      explanation: "球菌は球状の細菌です。"
    },
    {
      text: "桿菌",
      correct: false,
      explanation: "桿菌は棒状の細菌です。"
    },
    {
      text: "らせん菌",
      correct: true,
      explanation: "ねじれたり湾曲した細菌はらせん菌と呼ばれます。"
    },
    {
      text: "芽胞形成菌",
      correct: false,
      explanation: "芽胞形成菌は芽胞を形成する細菌を指します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ボツリヌス菌や枯草菌などが、環境が悪くなった時に作る、熱や乾燥に非常に強い構造体を何と言いますか？",
  choices: [
    {
      text: "鞭毛",
      correct: false,
      explanation: "鞭毛は移動のための器官です。"
    },
    {
      text: "芽胞（がほう）",
      correct: true,
      explanation: "芽胞は熱や乾燥に強い耐久構造です。"
    },
    {
      text: "カプセル",
      correct: false,
      explanation: "カプセルは細菌表面を覆う構造です。"
    },
    {
      text: "毒素",
      correct: false,
      explanation: "毒素は有害物質であり構造体ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌を分類する手法で、染色によって陽性・陰性を判別する方法を何と呼びますか？",
  choices: [
    {
      text: "グラム染色",
      correct: true,
      explanation: "グラム染色は細菌を陽性・陰性に分類する代表的な方法です。"
    },
    {
      text: "培地培養",
      correct: false,
      explanation: "培地培養は細菌を増殖させる方法です。"
    },
    {
      text: "顕微鏡検査",
      correct: false,
      explanation: "顕微鏡検査だけでは陽性・陰性は判別できません。"
    },
    {
      text: "遺伝子検査",
      correct: false,
      explanation: "遺伝子検査はDNAなどを調べる方法です。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "リケッチアの特徴として正しいものはどれですか？",
  choices: [
    {
      text: "細菌よりもサイズが大きい",
      correct: false,
      explanation: "リケッチアは非常に小さく、細菌より大きいわけではありません。"
    },
    {
      text: "宿主の細胞内でのみ増殖できる",
      correct: true,
      explanation: "リケッチアは生きた細胞内でのみ増殖できる微生物です。"
    },
    {
      text: "食品の中で勝手に増殖する",
      correct: false,
      explanation: "リケッチアは食品中では増殖できません。"
    },
    {
      text: "植物の一種である",
      correct: false,
      explanation: "リケッチアは植物ではなく微生物です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "リケッチアが媒介される主な経路はどれですか？",
  choices: [
    {
      text: "飛沫感染",
      correct: false,
      explanation: "リケッチアは主に飛沫感染ではありません。"
    },
    {
      text: "ダニ、ノミ、シラミなどの節足動物",
      correct: true,
      explanation: "リケッチアはダニやノミなどの節足動物によって媒介されます。"
    },
    {
      text: "水道水",
      correct: false,
      explanation: "水道水が主な感染経路ではありません。"
    },
    {
      text: "汚染された手指",
      correct: false,
      explanation: "手指接触は主な媒介経路ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ウイルスのサイズについて正しい説明はどれですか？",
  choices: [
    {
      text: "細菌と同じくらいの大きさである",
      correct: false,
      explanation: "ウイルスは細菌よりはるかに小さいです。"
    },
    {
      text: "細菌の約10倍の大きさである",
      correct: false,
      explanation: "ウイルスは細菌より大きくありません。"
    },
    {
      text: "細菌の約10分の1から100分の1の大きさである",
      correct: true,
      explanation: "ウイルスは細菌より非常に小さく、約10分の1〜100分の1程度です。"
    },
    {
      text: "肉眼で見ることができる",
      correct: false,
      explanation: "ウイルスは肉眼では見えません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ノロウイルスの一般的な大きさはどれですか？",
  choices: [
    {
      text: "約1µm",
      correct: false,
      explanation: "1µmは細菌程度の大きさです。"
    },
    {
      text: "約38nm（ナノメートル）",
      correct: true,
      explanation: "ノロウイルスは約38nmと非常に小さいウイルスです。"
    },
    {
      text: "約100nm",
      correct: false,
      explanation: "ノロウイルスは一般的に約38nmです。"
    },
    {
      text: "約0.3µm",
      correct: false,
      explanation: "0.3µmはノロウイルスより大きいサイズです。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "微生物の作用によって、食品が分解され、人間にとって「不都合な」変化が生じることを何と言いますか？",
  choices: [
    {
      text: "発酵",
      correct: false,
      explanation: "発酵は人間に有益な変化を指します。"
    },
    {
      text: "腐敗",
      correct: true,
      explanation: "腐敗とは微生物による有害・不快な食品の変化を指します。"
    },
    {
      text: "熟成",
      correct: false,
      explanation: "熟成は品質向上を目的とした変化です。"
    },
    {
      text: "合成",
      correct: false,
      explanation: "合成は腐敗とは異なる概念です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "腐敗のプロセスにおいて、主に分解される栄養成分は何ですか？",
  choices: [
    {
      text: "炭水化物",
      correct: false,
      explanation: "腐敗では主にたんぱく質が分解されます。"
    },
    {
      text: "脂質",
      correct: false,
      explanation: "脂質も変化しますが、腐敗の中心ではありません。"
    },
    {
      text: "たんぱく質",
      correct: true,
      explanation: "腐敗ではたんぱく質が分解され、有害・悪臭物質が生じます。"
    },
    {
      text: "ビタミン",
      correct: false,
      explanation: "ビタミンは主な分解対象ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "腐敗が進行した際に発生する物質として、誤っているものはどれですか？",
  choices: [
    {
      text: "アンモニア",
      correct: false,
      explanation: "腐敗によりアンモニアが発生することがあります。"
    },
    {
      text: "硫化水素",
      correct: false,
      explanation: "腐敗では硫化水素などの悪臭成分が発生します。"
    },
    {
      text: "アミン類",
      correct: false,
      explanation: "腐敗に伴いアミン類が生成されます。"
    },
    {
      text: "エチルアルコール",
      correct: true,
      explanation: "エチルアルコールは主に発酵によって生成されます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "微生物の作用によって、食品が分解され、人間にとって「有益な」変化が生じることを何と言いますか？",
  choices: [
    {
      text: "腐敗",
      correct: false,
      explanation: "腐敗は有害・不快な変化を指します。"
    },
    {
      text: "発酵",
      correct: true,
      explanation: "発酵は微生物による有益な食品の変化です。"
    },
    {
      text: "変敗",
      correct: false,
      explanation: "変敗は品質低下を意味します。"
    },
    {
      text: "汚染",
      correct: false,
      explanation: "汚染は有害物質などが付着することを指します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "発酵のプロセスにおいて、主に分解される栄養成分は何ですか？",
  choices: [
    {
      text: "炭水化物",
      correct: true,
      explanation: "発酵では主に炭水化物が分解されます。"
    },
    {
      text: "たんぱく質",
      correct: false,
      explanation: "たんぱく質は腐敗で主に分解されます。"
    },
    {
      text: "脂質",
      correct: false,
      explanation: "脂質は主な分解対象ではありません。"
    },
    {
      text: "ミネラル",
      correct: false,
      explanation: "ミネラルは発酵で分解されません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "発酵によって生じるメリットとして、誤っているものはどれですか？",
  choices: [
    {
      text: "保存性の向上",
      correct: false,
      explanation: "発酵によって保存性が高まる食品があります。"
    },
    {
      text: "うま味成分の増加",
      correct: false,
      explanation: "発酵によってうま味成分が増加します。"
    },
    {
      text: "官能的な風味の向上",
      correct: false,
      explanation: "発酵は香りや味わいを豊かにします。"
    },
    {
      text: "食中毒菌の増殖促進",
      correct: true,
      explanation: "発酵は適切に行えば有害菌の増殖抑制に役立ちます。"
    }
  ]
},{
  category: "フードセーフティ論",
  question: "微生物の定義として正しいのはどれか。",
  choices: [
    {
      text: "肉眼で観察できる生物の総称",
      correct: false,
      explanation: "微生物は肉眼では見えないほど小さい生物です。"
    },
    {
      text: "肉眼では見えないほど小さな生物の総称",
      correct: true,
      explanation: "微生物とは、肉眼では見えない微小な生物の総称です。"
    },
    {
      text: "ウイルスのみを指す",
      correct: false,
      explanation: "微生物には細菌・真菌・原虫なども含まれます。"
    },
    {
      text: "真菌のみを指す",
      correct: false,
      explanation: "真菌は微生物の一部にすぎません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "微生物が食の世界で果たしている「有益な役割」として最も適切なものはどれか。",
  choices: [
    {
      text: "食品を分解し、不快な臭いを発生させること",
      correct: false,
      explanation: "これは腐敗による有害な作用です。"
    },
    {
      text: "パンや味噌、チーズなどの発酵食品を作り出すこと",
      correct: true,
      explanation: "微生物は発酵食品の製造に重要な役割を果たしています。"
    },
    {
      text: "通常の加熱調理では分解されない毒素を作ること",
      correct: false,
      explanation: "これは食中毒などの原因となる有害な作用です。"
    },
    {
      text: "人間の細胞に侵入し、自己複製を行うこと",
      correct: false,
      explanation: "これはウイルスの特徴であり、有益な役割ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "真菌の特徴として正しいのはどれか。",
  choices: [
    {
      text: "原核生物である",
      correct: false,
      explanation: "真菌は原核生物ではありません。"
    },
    {
      text: "核を持たない",
      correct: false,
      explanation: "真菌は核を持つ生物です。"
    },
    {
      text: "真核生物である",
      correct: true,
      explanation: "真菌は核を持つ真核生物に分類されます。"
    },
    {
      text: "ウイルスより小さい",
      correct: false,
      explanation: "真菌はウイルスよりはるかに大きい生物です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "真菌の栄養獲得方法として正しいのはどれか。",
  choices: [
    {
      text: "菌糸を伸ばし、周囲から養分を吸収する",
      correct: true,
      explanation: "真菌は菌糸を伸ばして周囲の養分を吸収します。"
    },
    {
      text: "光合成によってエネルギーを得る",
      correct: false,
      explanation: "真菌は光合成を行いません。"
    },
    {
      text: "宿主細胞の代謝を乗っ取る",
      correct: false,
      explanation: "これは主にウイルスの特徴です。"
    },
    {
      text: "自ら運動して餌を捕食する",
      correct: false,
      explanation: "真菌は自ら移動して捕食しません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌の特徴として正しいのはどれか。",
  choices: [
    {
      text: "核を持つ",
      correct: false,
      explanation: "細菌は核を持たない原核生物です。"
    },
    {
      text: "自立増殖できない",
      correct: false,
      explanation: "細菌は自立して増殖できます。"
    },
    {
      text: "原核生物である",
      correct: true,
      explanation: "細菌は核を持たない原核生物です。"
    },
    {
      text: "DNAを持たない",
      correct: false,
      explanation: "細菌もDNAを持っています。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ウイルスの特徴として正しいのはどれか。",
  choices: [
    {
      text: "自立増殖できる",
      correct: false,
      explanation: "ウイルスは単独では増殖できません。"
    },
    {
      text: "細胞構造を持つ",
      correct: false,
      explanation: "ウイルスは細胞構造を持ちません。"
    },
    {
      text: "宿主細胞に寄生して増殖する",
      correct: true,
      explanation: "ウイルスは宿主細胞内でのみ増殖できます。"
    },
    {
      text: "真核生物である",
      correct: false,
      explanation: "ウイルスは真核生物ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "カビの発育5条件に含まれないものはどれか。",
  choices: [
    {
      text: "温度",
      correct: false,
      explanation: "温度はカビの発育条件に含まれます。"
    },
    {
      text: "酸素",
      correct: false,
      explanation: "酸素はカビの発育条件に含まれます。"
    },
    {
      text: "光",
      correct: true,
      explanation: "光はカビの発育5条件には含まれません。"
    },
    {
      text: "湿度",
      correct: false,
      explanation: "湿度はカビの発育条件に含まれます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "カビが最も好む湿度はどれか。",
  choices: [
    {
      text: "20〜30％",
      correct: false,
      explanation: "湿度が低すぎるためカビは発育しにくいです。"
    },
    {
      text: "40〜50％",
      correct: false,
      explanation: "カビにとってはやや低い湿度です。"
    },
    {
      text: "70〜80％",
      correct: true,
      explanation: "カビは高湿度環境を好み、70〜80％程度で発育しやすくなります。"
    },
    {
      text: "90〜100％",
      correct: false,
      explanation: "極端に高い湿度は必ずしも最適ではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "大腸菌の最適条件下での分裂時間はどれくらいか。",
  choices: [
    {
      text: "約5分",
      correct: false,
      explanation: "5分では増殖速度が速すぎます。"
    },
    {
      text: "約20分",
      correct: true,
      explanation: "大腸菌は最適条件下では約20分ごとに分裂します。"
    },
    {
      text: "約2時間",
      correct: false,
      explanation: "大腸菌はもっと短時間で分裂します。"
    },
    {
      text: "約1日",
      correct: false,
      explanation: "1日は長すぎます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ウイルスの増殖に関する説明として正しいのはどれか。",
  choices: [
    {
      text: "自ら栄養を取り込み増殖する",
      correct: false,
      explanation: "ウイルスは自力で代謝や増殖を行えません。"
    },
    {
      text: "宿主細胞外で二分裂により増殖する",
      correct: false,
      explanation: "二分裂は細菌の増殖方法です。"
    },
    {
      text: "宿主細胞内で多数の粒子を複製する",
      correct: true,
      explanation: "ウイルスは宿主細胞内で増殖し、多数のウイルス粒子を作ります。"
    },
    {
      text: "常に一定数のみ増殖する",
      correct: false,
      explanation: "条件によって増殖数は変化します。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "インフルエンザウイルスの増殖で正しいのはどれか。",
  choices: [
    {
      text: "1細胞から約10個",
      correct: false,
      explanation: "インフルエンザウイルスは1細胞からそれ以上の数を増殖させます。"
    },
    {
      text: "1細胞から約100個",
      correct: false,
      explanation: "100個よりもさらに多くのウイルス粒子が産生されます。"
    },
    {
      text: "1細胞から約1000個",
      correct: true,
      explanation: "インフルエンザウイルスは宿主細胞内で大量に複製され、約1000個程度の粒子を放出します。"
    },
    {
      text: "1細胞から約1万個",
      correct: false,
      explanation: "一般的な説明としては約1000個程度が用いられます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "発酵と腐敗の違いとして正しいのはどれか。",
  choices: [
    {
      text: "微生物の種類が全く異なる",
      correct: false,
      explanation: "同じ種類の微生物でも条件によって発酵や腐敗を引き起こすことがあります。"
    },
    {
      text: "人間にとって有益か有害かの違い",
      correct: true,
      explanation: "発酵は有益な変化、腐敗は有害・不快な変化として区別されます。"
    },
    {
      text: "発酵は微生物を使わない",
      correct: false,
      explanation: "発酵は微生物の働きによって起こります。"
    },
    {
      text: "腐敗は必ず毒素を生む",
      correct: false,
      explanation: "腐敗では不快臭や有害物質が生じることがありますが、必ず毒素が作られるわけではありません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "ペニシリンを生み出した微生物はどれか。",
  choices: [
    {
      text: "細菌",
      correct: false,
      explanation: "ペニシリンは細菌ではなくカビの一種から発見されました。"
    },
    {
      text: "ウイルス",
      correct: false,
      explanation: "ウイルスは抗生物質を産生しません。"
    },
    {
      text: "アオカビ",
      correct: true,
      explanation: "ペニシリンはアオカビ（Penicillium）から発見された抗生物質です。"
    },
    {
      text: "酵母",
      correct: false,
      explanation: "酵母は発酵に利用されますが、ペニシリンの産生には関与しません。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "自然界の浄化に関わる微生物の役割として正しいのはどれか。",
  choices: [
    {
      text: "光合成",
      correct: false,
      explanation: "光合成は植物や一部の微生物が行いますが、浄化作用として代表的なのは分解です。"
    },
    {
      text: "死骸や落ち葉の分解",
      correct: true,
      explanation: "微生物は有機物を分解し、自然界の物質循環を支えています。"
    },
    {
      text: "酸素の生成",
      correct: false,
      explanation: "酸素生成は主に植物や藻類などによる働きです。"
    },
    {
      text: "DNA修復",
      correct: false,
      explanation: "DNA修復は細胞内の働きであり、自然界の浄化作用とは異なります。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "アフラトキシンに関する記述で最も適切なのはどれか。",
  choices: [
    {
      text: "加熱すれば分解されるため、発がんリスクは大幅に低下する",
      correct: false,
      explanation: "アフラトキシンは熱に強く、通常の加熱では十分に分解されません。"
    },
    {
      text: "目に見えるカビ部分のみを除去すれば、発がん性は問題にならない",
      correct: false,
      explanation: "毒素は食品全体に広がっている可能性があります。"
    },
    {
      text: "肝細胞がんのリスクを高める強い発がん性を持ち、食品全体の廃棄が必要である",
      correct: true,
      explanation: "アフラトキシンは強い発がん性を持つカビ毒であり、汚染食品は廃棄が必要です。"
    },
    {
      text: "発がん性は弱く、長期間摂取しなければ問題にならない",
      correct: false,
      explanation: "アフラトキシンは非常に強い発がん性を持つことで知られています。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "細菌に有効な薬剤はどれか。",
  choices: [
    {
      text: "抗ウイルス薬",
      correct: false,
      explanation: "抗ウイルス薬はウイルス感染症に用いられます。"
    },
    {
      text: "抗真菌薬",
      correct: false,
      explanation: "抗真菌薬はカビや酵母などの真菌に使用されます。"
    },
    {
      text: "抗生物質",
      correct: true,
      explanation: "抗生物質は細菌の増殖を抑えたり死滅させたりします。"
    },
    {
      text: "ワクチンのみ",
      correct: false,
      explanation: "ワクチンは予防に用いられますが、細菌感染治療には抗生物質が使われます。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "真菌に対する薬剤が難しい理由として正しいのはどれか。",
  choices: [
    {
      text: "真菌が細胞を持たないため",
      correct: false,
      explanation: "真菌は細胞を持つ生物です。"
    },
    {
      text: "ヒトと同じ真核生物で構造が似ているため",
      correct: true,
      explanation: "真菌はヒト細胞と構造が似ているため、選択的な薬剤開発が難しくなります。"
    },
    {
      text: "増殖が遅いため",
      correct: false,
      explanation: "増殖速度だけが薬剤開発を難しくしているわけではありません。"
    },
    {
      text: "DNAがないため",
      correct: false,
      explanation: "真菌はDNAを持つ真核生物です。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "微生物が人間社会で果たす役割として最も適切なのはどれか。",
  choices: [
    {
      text: "食品を腐敗させるのみで、人間に有益な働きはない",
      correct: false,
      explanation: "微生物は発酵や医薬品生産など有益な役割も担っています。"
    },
    {
      text: "食品の発酵、医薬品の生成、生態系での分解など多面的な役割を持つ",
      correct: true,
      explanation: "微生物は食品、医療、環境など幅広い分野で重要な役割を果たしています。"
    },
    {
      text: "医療分野でのみ利用され、食や環境には関与しない",
      correct: false,
      explanation: "微生物は食や環境分野にも深く関わっています。"
    },
    {
      text: "自然界では分解に関与せず、主に感染症の原因となる",
      correct: false,
      explanation: "自然界では有機物分解など重要な役割を持っています。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "手洗いの効果として最も適切なのはどれか。",
  choices: [
    {
      text: "手指の菌を完全に除去できる",
      correct: false,
      explanation: "手洗いだけで菌を完全にゼロにすることは困難です。"
    },
    {
      text: "菌数を大幅に減少させることができる",
      correct: true,
      explanation: "適切な手洗いは手指の微生物数を大きく減少させます。"
    },
    {
      text: "手洗いでは菌数はほとんど変わらない",
      correct: false,
      explanation: "手洗いは衛生管理の基本であり、効果があります。"
    },
    {
      text: "石鹸を使うと菌が増える",
      correct: false,
      explanation: "石鹸を使うことで汚れや微生物を除去しやすくなります。"
    }
  ]
},
{
  category: "フードセーフティ論",
  question: "カビ対策として最も介入しやすい要因はどれか。",
  choices: [
    {
      text: "酸素",
      correct: false,
      explanation: "酸素を完全に除去することは一般環境では難しいです。"
    },
    {
      text: "pH",
      correct: false,
      explanation: "pH調整は可能ですが、食品への影響も大きくなります。"
    },
    {
      text: "湿度",
      correct: true,
      explanation: "カビは高湿度を好むため、湿度管理が有効な対策となります。"
    },
    {
      text: "栄養",
      correct: false,
      explanation: "食品中の栄養を除去することは現実的ではありません。"
    }
  ]
},
  {
    category: "フードセーフティ論",
    question: "ウイルスの体のつくりとして正しい組み合わせはどれ？",
    choices: [
      {
        text: "細胞膜とミトコンドリア",
        correct: false,
        explanation: "ウイルスは細胞構造を持たず、ミトコンドリアもありません。"
      },
      {
        text: "核酸（DNAまたはRNA）とタンパク質の殻",
        correct: true,
        explanation: "ウイルスは核酸とタンパク質の殻（カプシド）で構成されています。"
      },
      {
        text: "細胞壁とリボソーム",
        correct: false,
        explanation: "細胞壁やリボソームは細菌などの細胞に見られる構造です。"
      },
      {
        text: "葉緑体と核",
        correct: false,
        explanation: "葉緑体や核は植物細胞などに存在する構造です。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "ウイルスの増殖について、細菌と決定的に違う点はどこ？",
    choices: [
      {
        text: "栄養があればどこでも増える",
        correct: false,
        explanation: "ウイルスは栄養だけでは増殖できません。"
      },
      {
        text: "生きた細胞の中でしか増殖できない",
        correct: true,
        explanation: "ウイルスは宿主の生きた細胞内でのみ増殖できます。"
      },
      {
        text: "自分の力で二分裂して増える",
        correct: false,
        explanation: "二分裂は細菌の増殖方法です。"
      },
      {
        text: "水さえあれば増殖できる",
        correct: false,
        explanation: "水だけではウイルスは増殖できません。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "ウイルスの大きさは、一般的な細菌と比べるとどのくらい？",
    choices: [
      {
        text: "同じくらい",
        correct: false,
        explanation: "ウイルスは細菌よりはるかに小さいです。"
      },
      {
        text: "10倍くらい大きい",
        correct: false,
        explanation: "ウイルスは細菌より小さい存在です。"
      },
      {
        text: "100〜1000分の1程度（極めて微小）",
        correct: true,
        explanation: "ウイルスは細菌より非常に小さく、極めて微小です。"
      },
      {
        text: "肉眼で見える",
        correct: false,
        explanation: "ウイルスは肉眼では見えません。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "ウイルスを観察するために、どうしても必要な道具は何？",
    choices: [
      {
        text: "虫眼鏡",
        correct: false,
        explanation: "虫眼鏡ではウイルスは観察できません。"
      },
      {
        text: "光学顕微鏡",
        correct: false,
        explanation: "多くのウイルスは光学顕微鏡では観察できません。"
      },
      {
        text: "電子顕微鏡",
        correct: true,
        explanation: "ウイルスの観察には電子顕微鏡が必要です。"
      },
      {
        text: "望遠鏡",
        correct: false,
        explanation: "望遠鏡は天体観測に使用する道具です。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "ウイルスが細胞に感染して増えるステップのうち、最初に起こることは？",
    choices: [
      {
        text: "放出",
        correct: false,
        explanation: "放出は増殖後の最後の段階です。"
      },
      {
        text: "吸着（付着）",
        correct: true,
        explanation: "ウイルスは最初に細胞へ吸着して感染を開始します。"
      },
      {
        text: "脱殻",
        correct: false,
        explanation: "脱殻は吸着後に起こります。"
      },
      {
        text: "成熟",
        correct: false,
        explanation: "成熟はウイルス粒子形成の後半段階です。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "ごく少量のウイルス（10〜100個程度）でも発症する、感染力の非常に強い食中毒ウイルスは？",
    choices: [
      {
        text: "インフルエンザウイルス",
        correct: false,
        explanation: "食中毒の代表的原因ではありません。"
      },
      {
        text: "ノロウイルス",
        correct: true,
        explanation: "ノロウイルスは極少量でも感染・発症する非常に感染力の強いウイルスです。"
      },
      {
        text: "エイズウイルス",
        correct: false,
        explanation: "食中毒の原因となるウイルスではありません。"
      },
      {
        text: "肝炎ウイルス",
        correct: false,
        explanation: "感染力はありますが、設問の特徴には当てはまりません。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "ノロウイルスの主な感染経路として、注意が必要な食べ物はどれ？",
    choices: [
      {
        text: "牛肉のステーキ",
        correct: false,
        explanation: "一般的な主感染源ではありません。"
      },
      {
        text: "二枚貝（カキなど）の生食",
        correct: true,
        explanation: "ノロウイルスは二枚貝の生食による感染が有名です。"
      },
      {
        text: "生クリーム",
        correct: false,
        explanation: "代表的な感染源ではありません。"
      },
      {
        text: "納豆",
        correct: false,
        explanation: "通常はノロウイルス感染源とはされません。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "肝炎ウイルスが体内に入ったとき、主にどこの臓器に炎症を起こす？",
    choices: [
      {
        text: "胃",
        correct: false,
        explanation: "胃ではなく主に肝臓に炎症を起こします。"
      },
      {
        text: "肺",
        correct: false,
        explanation: "肺が主な標的臓器ではありません。"
      },
      {
        text: "肝臓",
        correct: true,
        explanation: "肝炎ウイルスは主に肝臓に炎症を引き起こします。"
      },
      {
        text: "心臓",
        correct: false,
        explanation: "心臓が主な標的臓器ではありません。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "シカやイノシシなどの野生動物の肉（ジビエ）を生で食べることで感染リスクが高まるのは？",
    choices: [
      {
        text: "ノロウイルス",
        correct: false,
        explanation: "主に二枚貝などが感染源です。"
      },
      {
        text: "A型肝炎ウイルス",
        correct: false,
        explanation: "ジビエ生食との関連ではE型肝炎が重要です。"
      },
      {
        text: "E型肝炎ウイルス",
        correct: true,
        explanation: "E型肝炎ウイルスはジビエの生食による感染リスクがあります。"
      },
      {
        text: "ロタウイルス",
        correct: false,
        explanation: "主に乳幼児の感染症として知られています。"
      }
    ]
  },

  {
    category: "フードセーフティ論",
    question: "多くのウイルスを不活化（失活）させるための加熱条件として適切なのは？",
    choices: [
      {
        text: "40℃で10分",
        correct: false,
        explanation: "この温度では十分な不活化は期待できません。"
      },
      {
        text: "中心部が70〜85℃以上に達する加熱",
        correct: true,
        explanation: "十分な加熱により多くのウイルスは不活化されます。"
      },
      {
        text: "冷蔵庫で一晩冷やす",
        correct: false,
        explanation: "冷却ではウイルスは不活化されません。"
      },
      {
        text: "水でよく洗う",
        correct: false,
        explanation: "洗浄だけでは十分な不活化はできません。"
      }
    ]
  },

{
  category: "フードセーフティ論",
  question: "多くのウイルスを不活化（失活）させるための加熱条件として適切なのは？",
  choices: [
    {
      text: "40℃で10分",
      correct: false,
      explanation: "この温度では十分な不活化は期待できません。"
    },
    {
      text: "中心部が70〜85℃以上に達する加熱",
      correct: true,
      explanation: "十分な加熱により多くのウイルスは不活化されます。"
    },
    {
      text: "冷蔵庫で一晩冷やす",
      correct: false,
      explanation: "冷却ではウイルスは不活化されません。"
    },
    {
      text: "水でよく洗う",
      correct: false,
      explanation: "洗浄だけでは十分な不活化はできません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "原虫（げんちゅう）は、生物学的な分類では次のどれに属する？",
  choices: [
    {
      text: "細菌（原核生物）",
      correct: false,
      explanation: "原虫は細菌ではなく真核生物です。"
    },
    {
      text: "真核生物（単細胞の寄生虫）",
      correct: true,
      explanation: "原虫は単細胞の真核生物に分類されます。"
    },
    {
      text: "ウイルス（非細胞）",
      correct: false,
      explanation: "原虫は細胞構造を持つ生物です。"
    },
    {
      text: "植物",
      correct: false,
      explanation: "原虫は植物には分類されません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "クリプトスポリジウムが環境中で作る、硬い殻に包まれた休眠状態の姿を何と呼ぶ？",
  choices: [
    {
      text: "胞子",
      correct: false,
      explanation: "クリプトスポリジウムでは特にオーシストと呼ばれます。"
    },
    {
      text: "オーシスト",
      correct: true,
      explanation: "オーシストは環境中で生存するための硬い殻を持つ形態です。"
    },
    {
      text: "カプシド",
      correct: false,
      explanation: "カプシドはウイルスのタンパク質の殻です。"
    },
    {
      text: "菌糸",
      correct: false,
      explanation: "菌糸はカビなどの真菌に見られる構造です。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "クリプトスポリジウムの最大の特徴であり、水道水管理で問題となる性質はどれ？",
  choices: [
    {
      text: "熱に非常に強い",
      correct: false,
      explanation: "問題となるのは主に塩素への強い耐性です。"
    },
    {
      text: "塩素消毒に対して極めて強い抵抗力を持つ",
      correct: true,
      explanation: "通常の塩素消毒では十分に除去できないことがあります。"
    },
    {
      text: "乾燥に弱い",
      correct: false,
      explanation: "乾燥への弱さが最大の特徴ではありません。"
    },
    {
      text: "アルコールで簡単に死ぬ",
      correct: false,
      explanation: "アルコールだけで完全に対策できるわけではありません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "クリプトスポリジウムによる集団感染（水系感染）が起こりやすい場所はどこ？",
  choices: [
    {
      text: "雪山",
      correct: false,
      explanation: "代表的な感染場所ではありません。"
    },
    {
      text: "水道水やプールの水",
      correct: true,
      explanation: "水系感染を起こしやすく、集団感染の原因になります。"
    },
    {
      text: "砂漠",
      correct: false,
      explanation: "水系感染とは関連が低いです。"
    },
    {
      text: "映画館",
      correct: false,
      explanation: "主な感染場所ではありません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "クリプトスポリジウムに感染したときに出る主な症状は？",
  choices: [
    {
      text: "咳とくしゃみ",
      correct: false,
      explanation: "呼吸器症状ではなく消化器症状が中心です。"
    },
    {
      text: "水様性の激しい下痢や腹痛",
      correct: true,
      explanation: "激しい水様性下痢が特徴です。"
    },
    {
      text: "視力低下",
      correct: false,
      explanation: "主症状ではありません。"
    },
    {
      text: "足のむくみ",
      correct: false,
      explanation: "典型的な症状ではありません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "細菌には効果があるが、ウイルスには全く効果がない薬はどれ？",
  choices: [
    {
      text: "整腸剤",
      correct: false,
      explanation: "整腸剤は細菌を直接攻撃する薬ではありません。"
    },
    {
      text: "抗生物質（抗菌薬）",
      correct: true,
      explanation: "抗生物質は細菌に有効ですが、ウイルスには効果がありません。"
    },
    {
      text: "抗ウイルス薬",
      correct: false,
      explanation: "抗ウイルス薬はウイルスに対して使用されます。"
    },
    {
      text: "ビタミン剤",
      correct: false,
      explanation: "ビタミン剤は病原体を直接攻撃しません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "遺伝情報について、ウイルスが持っている特徴はどれ？",
  choices: [
    {
      text: "DNAとRNAの両方を持っている",
      correct: false,
      explanation: "通常はどちらか一方のみを持っています。"
    },
    {
      text: "DNAかRNAのどちらか一方しか持っていない",
      correct: true,
      explanation: "ウイルスはDNAまたはRNAのどちらか一方を遺伝物質として持ちます。"
    },
    {
      text: "どちらも持っていない",
      correct: false,
      explanation: "ウイルスは必ず遺伝情報を持っています。"
    },
    {
      text: "ミトコンドリアの中にDNAがある",
      correct: false,
      explanation: "ウイルスはミトコンドリアを持ちません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "原虫や真菌（カビ等）を攻撃する薬が、ヒトにも副作用が出やすいのはなぜ？",
  choices: [
    {
      text: "毒性が強すぎるから",
      correct: false,
      explanation: "主な理由は細胞構造の類似性です。"
    },
    {
      text: "薬のサイズが大きいから",
      correct: false,
      explanation: "サイズが原因ではありません。"
    },
    {
      text: "ヒトの細胞構造（真核生物）と似ているから",
      correct: true,
      explanation: "真菌や原虫はヒトと同じ真核生物であり、細胞構造が似ています。"
    },
    {
      text: "ウイルスを助けてしまうから",
      correct: false,
      explanation: "副作用の理由ではありません。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "石鹸を使い、流水で30秒間丁寧に手を洗うと、菌やウイルスをどのくらい減らせる？",
  choices: [
    {
      text: "半分（1/2）",
      correct: false,
      explanation: "適切な手洗いではさらに大きく減少します。"
    },
    {
      text: "10分の1（1/10）",
      correct: false,
      explanation: "丁寧な手洗いではより大きな効果があります。"
    },
    {
      text: "100分の1（1/100）",
      correct: true,
      explanation: "石鹸と流水による丁寧な手洗いで大幅に減少させられます。"
    },
    {
      text: "全く減らない",
      correct: false,
      explanation: "手洗いには高い衛生効果があります。"
    }
  ]
},

{
  category: "フードセーフティ論",
  question: "インフルエンザウイルスが「人の食べ物」を介して感染することについての正しい記述は？",
  choices: [
    {
      text: "食べ物から感染するのが一般的である",
      correct: false,
      explanation: "インフルエンザは主に飛沫感染する呼吸器感染症です。"
    },
    {
      text: "通常、食べ物を介して感染することはない（呼吸器感染症である）",
      correct: true,
      explanation: "インフルエンザは通常、食べ物ではなく飛沫や接触で感染します。"
    },
    {
      text: "牛乳を飲むと必ず感染する",
      correct: false,
      explanation: "牛乳による一般的感染はありません。"
    },
    {
      text: "焼肉を食べると感染しやすい",
      correct: false,
      explanation: "焼肉自体が感染原因ではありません。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "令和６年度の総合食料自給率は、カロリーベースで何％ですか。",
  choices: [
    {
      text: "28％",
      correct: false,
      explanation: "令和６年度の総合食料自給率ではありません。"
    },
    {
      text: "38％",
      correct: true,
      explanation: "令和６年度のカロリーベース総合食料自給率は38％です。"
    },
    {
      text: "48％",
      correct: false,
      explanation: "実際の数値より高いです。"
    },
    {
      text: "58％",
      correct: false,
      explanation: "実際の数値よりかなり高いです。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "食料自給率は、国のどの機関が発表しますか。",
  choices: [
    {
      text: "国土交通省",
      correct: false,
      explanation: "交通やインフラを担当する省庁です。"
    },
    {
      text: "厚生労働省",
      correct: false,
      explanation: "医療・福祉・労働を担当する省庁です。"
    },
    {
      text: "農林水産省",
      correct: true,
      explanation: "食料自給率は農林水産省が発表しています。"
    },
    {
      text: "防衛省",
      correct: false,
      explanation: "防衛を担当する省庁です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "食料自給率の元となる統計は何ですか。",
  choices: [
    {
      text: "食料需給表",
      correct: true,
      explanation: "食料自給率は食料需給表をもとに算出されます。"
    },
    {
      text: "食品需給表",
      correct: false,
      explanation: "正式名称ではありません。"
    },
    {
      text: "食料供給表",
      correct: false,
      explanation: "正式名称ではありません。"
    },
    {
      text: "食品供給表",
      correct: false,
      explanation: "正式名称ではありません。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "令和６年度の品目別食料自給率について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "米の自給率は、ほぼ100％に近い。",
      correct: false,
      explanation: "日本の米の自給率は非常に高いです。"
    },
    {
      text: "大豆の自給率は、野菜類より低い。",
      correct: false,
      explanation: "大豆の自給率は野菜類より低い傾向があります。"
    },
    {
      text: "牛乳、乳製品の自給率は50％を超えているが、飼料自給率を考慮すると、30％程度である。",
      correct: false,
      explanation: "飼料自給率を考慮すると低下します。"
    },
    {
      text: "鶏卵の自給率はほぼ100％で、飼料もほとんどが国産米を使っている。",
      correct: true,
      explanation: "飼料の多くは輸入に依存しており、国産米中心ではありません。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "食料自給率を上げるための行動として、まちがっている文章を１つ選びなさい。",
  choices: [
    {
      text: "自然環境を守り、農業を支援する。",
      correct: false,
      explanation: "農業支援は食料自給率向上につながります。"
    },
    {
      text: "肉類は自給率が低いので、大豆製品からたんぱく質を摂取する。",
      correct: true,
      explanation: "大豆の自給率も低いため、必ずしも自給率向上にはつながりません。"
    },
    {
      text: "主食は、麺類など小麦粉製品より米を中心に食べる。",
      correct: false,
      explanation: "米は自給率が高いため有効です。"
    },
    {
      text: "国産小麦や国産米粉を使用したパンを選ぶ。",
      correct: false,
      explanation: "国産農産物の利用は自給率向上に役立ちます。"
    }
  ]
},{
  category: "食品栄養学（食品学）",
  question: "生産者から直接購入するのではなく、卸売市場を通して消費者に届く流通をなんと呼ぶか。",
  choices: [
    {
      text: "卸売流通",
      correct: false,
      explanation: "一般的な正式名称ではありません。"
    },
    {
      text: "間接流通",
      correct: false,
      explanation: "意味は近いですが、設問の正解ではありません。"
    },
    {
      text: "市場流通",
      correct: true,
      explanation: "卸売市場を通して流通することを市場流通といいます。"
    },
    {
      text: "遠隔流通",
      correct: false,
      explanation: "正式な流通名称ではありません。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "生産者から消費者に届くまでの全ての行程で、冷蔵されて流通することをなんと呼ぶか。",
  choices: [
    {
      text: "チルド輸送",
      correct: false,
      explanation: "冷蔵輸送の一部を表す言葉です。"
    },
    {
      text: "コールドチェーン",
      correct: true,
      explanation: "生産から消費まで低温を保った流通システムをコールドチェーンといいます。"
    },
    {
      text: "クールチェーン",
      correct: false,
      explanation: "一般的な正式名称ではありません。"
    },
    {
      text: "クール輸送",
      correct: false,
      explanation: "正式な用語ではありません。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "「トレーサビリティー」の意味として正しい文章を１つ選びなさい。",
  choices: [
    {
      text: "牛の耳につけられた10桁の番号のこと。",
      correct: false,
      explanation: "個体識別番号の説明です。"
    },
    {
      text: "産地と生産者の表示がされていること。",
      correct: false,
      explanation: "表示制度の説明です。"
    },
    {
      text: "生産、流通の過程が全て追跡できるようになっていること。",
      correct: true,
      explanation: "トレーサビリティーとは、生産から流通まで追跡できる仕組みのことです。"
    },
    {
      text: "卸売市場での販売記録を残していること。",
      correct: false,
      explanation: "一部の記録のみを指しています。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "フードマイレージはどのように求められますか。",
  choices: [
    {
      text: "輸入品目数×輸送距離",
      correct: false,
      explanation: "品目数では計算しません。"
    },
    {
      text: "輸入品目数×輸入国数",
      correct: false,
      explanation: "フードマイレージの計算式ではありません。"
    },
    {
      text: "食品重量×輸入国数",
      correct: false,
      explanation: "輸送距離が必要です。"
    },
    {
      text: "食品重量×輸送距離",
      correct: true,
      explanation: "フードマイレージは食品重量と輸送距離を掛けて求めます。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "フードマイレージについて、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "食料による環境負荷を考えるために作られた指標である。",
      correct: false,
      explanation: "環境負荷を考えるための指標です。"
    },
    {
      text: "地産地消を盛んにすると、フードマイレージは小さくなる。",
      correct: false,
      explanation: "輸送距離が短くなるため小さくなります。"
    },
    {
      text: "食料自給率が低いとき、フードマイレージが小さい。",
      correct: true,
      explanation: "輸入量が増えるため、一般的にフードマイレージは大きくなります。"
    },
    {
      text: "フードマイレージを小さくすることは、地球温暖化対策としても注目されている。",
      correct: false,
      explanation: "輸送時のCO2削減につながります。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "地産地消を心がけることの利点として、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "新鮮なものが食べられ、栄養素の損失が少なくてすむ。",
      correct: false,
      explanation: "地元産は新鮮な状態で入手しやすいです。"
    },
    {
      text: "輸送にかかるコストを小さくできる。",
      correct: false,
      explanation: "輸送距離が短くなりコスト削減につながります。"
    },
    {
      text: "地元の農家とのつながりができ、消費者の希望を伝えることができる。",
      correct: false,
      explanation: "地域との交流が深まります。"
    },
    {
      text: "多様な食品を手に入れることができる。",
      correct: true,
      explanation: "地産地消では地域の食材中心となるため、多様性は限定される場合があります。"
    }
  ]
},{
  category: "食品栄養学（食品学）",
  question: "でんぷんを構成する糖は何糖ですか。",
  choices: [
    {
      text: "しょ糖",
      correct: false,
      explanation: "しょ糖は砂糖の主成分であり、でんぷんを構成する糖ではありません。"
    },
    {
      text: "ぶどう糖",
      correct: true,
      explanation: "でんぷんは多数のぶどう糖が結合してできた多糖類です。"
    },
    {
      text: "でんぷん糖",
      correct: false,
      explanation: "でんぷん糖はでんぷんを分解して作られる糖で、構成成分ではありません。"
    },
    {
      text: "麦芽糖",
      correct: false,
      explanation: "麦芽糖はでんぷん分解の途中でできる糖です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "もち米のでんぷんは、どんなでんぷんですか？",
  choices: [
    {
      text: "アミロースのみ",
      correct: false,
      explanation: "もち米のでんぷんはアミロースのみではありません。"
    },
    {
      text: "アミロペクチンのみ",
      correct: true,
      explanation: "もち米のでんぷんは、ほぼアミロペクチンのみで構成されています。"
    },
    {
      text: "アミロースとアミロペクチンが、1：４",
      correct: false,
      explanation: "これはうるち米に近い割合です。"
    },
    {
      text: "アミロースとアミロペクチンが、4：１",
      correct: false,
      explanation: "もち米はアミロペクチン主体です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "うるち米のでんぷんは、どんなでんぷんですか？",
  choices: [
    {
      text: "アミロースのみ",
      correct: false,
      explanation: "うるち米はアミロースのみではありません。"
    },
    {
      text: "アミロペクチンのみ",
      correct: false,
      explanation: "アミロペクチンのみなのはもち米です。"
    },
    {
      text: "アミロースとアミロペクチンが、1：４",
      correct: true,
      explanation: "うるち米のでんぷんは、アミロースとアミロペクチンがおよそ1：4の割合です。"
    },
    {
      text: "アミロースとアミロペクチンが、4：１",
      correct: false,
      explanation: "うるち米はアミロペクチンの割合が多いです。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "アミロースとアミロペクチンの違いとして正しい文章を１つ選びなさい。",
  choices: [
    {
      text: "アミロースは糊化しているが、アミロペクチンはしていない。",
      correct: false,
      explanation: "どちらも加熱によって糊化します。"
    },
    {
      text: "アミロースはぶどう糖のみからできているが、アミロペクチンは果糖が一部含まれる。",
      correct: false,
      explanation: "どちらもぶどう糖から構成されています。"
    },
    {
      text: "アミロースは直鎖構造になっているが、アミロペクチンは枝分かれしているところがある。",
      correct: true,
      explanation: "アミロースは直鎖状、アミロペクチンは枝分かれ構造を持っています。"
    },
    {
      text: "アミロペクチンは直鎖構造になっているが、アミロースは枝分かれしている。",
      correct: false,
      explanation: "説明が逆になっています。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "米の種類について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "ジャポニカ米は、粒の長いものが多く、もちもちとした食感がある。",
      correct: true,
      explanation: "ジャポニカ米は粒が短く丸みがあり、長粒種ではありません。"
    },
    {
      text: "インディカ米は、炊飯しても粘りが出ないので、握り飯にはしにくい。",
      correct: false,
      explanation: "インディカ米は粘りが少ない特徴があります。"
    },
    {
      text: "玄米とは、もみからもみ殻を外したものである。",
      correct: false,
      explanation: "玄米は、もみ殻だけを除いた状態の米です。"
    },
    {
      text: "アントシアニン色素を含む黒米は、もち性のものが多い。",
      correct: false,
      explanation: "黒米にはもち性の品種が多くあります。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "七分つき米とは、どのような米ですか。",
  choices: [
    {
      text: "ぬかのうち、70％を取り除いた米。",
      correct: true,
      explanation: "七分つき米は、ぬか層を約70％取り除いた米です。"
    },
    {
      text: "ぬかのうち、70％を残した米。",
      correct: false,
      explanation: "七分つき米はぬかを70％除去した状態です。"
    },
    {
      text: "ぬか層の70％を取り除き、胚芽を残した米。",
      correct: false,
      explanation: "胚芽が残る場合もありますが、定義としてはぬかの除去割合を示します。"
    },
    {
      text: "半つき米よりぬかを残した米。",
      correct: false,
      explanation: "七分つき米は半つき米よりぬかが少ない状態です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "上新粉とはどのような米粉ですか。",
  choices: [
    {
      text: "もち米を加熱せず、粉にしたもの。",
      correct: false,
      explanation: "もち米ではなく、うるち米を使用します。"
    },
    {
      text: "もち米を加熱した後、粉にしたもの。",
      correct: false,
      explanation: "これは道明寺粉などに近い説明です。"
    },
    {
      text: "うるち米を加熱せず、粉にしたもの。",
      correct: true,
      explanation: "上新粉は、うるち米をそのまま粉にしたものです。"
    },
    {
      text: "うるち米を加熱した後、粉にしたもの。",
      correct: false,
      explanation: "上新粉は加熱せずに粉にします。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "道明寺粉とはどのような米粉ですか。",
  choices: [
    {
      text: "もち米を加熱せず、粗くつぶしたもの。",
      correct: false,
      explanation: "道明寺粉は加熱処理をして作ります。"
    },
    {
      text: "もち米を加熱した後、粗くつぶしたもの。",
      correct: true,
      explanation: "道明寺粉は、蒸したもち米を乾燥させ粗く砕いたものです。"
    },
    {
      text: "うるち米を加熱せず、粗くつぶしたもの。",
      correct: false,
      explanation: "もち米を使用します。"
    },
    {
      text: "うるち米を加熱した後、粗くつぶしたもの。",
      correct: false,
      explanation: "うるち米ではなく、もち米を使います。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "米の栄養素について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "炭水化物が多く、たんぱく質は100g当たり１g程度しか含まれない。",
      correct: true,
      explanation: "米には100g当たり約6g前後のたんぱく質が含まれており、『1g程度しか含まれない』は誤りです。"
    },
    {
      text: "玄米を精米すると、ビタミンB1が少なくなる。",
      correct: false,
      explanation: "ビタミンB1はぬかや胚芽部分に多く含まれるため、精米すると減少します。"
    },
    {
      text: "胚芽精米は、胚芽が残っているので、精白米より脂質が多い。",
      correct: false,
      explanation: "胚芽部分には脂質が含まれるため、精白米より脂質が多くなります。"
    },
    {
      text: "米を炊飯すると、水分が60％に増加し、その分、エネルギーが低くなる。",
      correct: false,
      explanation: "炊飯すると水分が増えるため、100g当たりのエネルギー量は低くなります。"
    }
  ]
},{
  category: "食品栄養学（食品学）",
  question: "小麦粉について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "強力粉は、たんぱく質が少ない小麦粉で、パンを作るのに使われる。",
      correct: true,
      explanation: "強力粉はたんぱく質が多い小麦粉で、パン作りに適しています。"
    },
    {
      text: "薄力粉は、軟質小麦から作られ、天ぷらに用いられる。",
      correct: false,
      explanation: "薄力粉は軟質小麦から作られ、天ぷらや菓子作りに使われます。"
    },
    {
      text: "小麦粉の主成分はでんぷんで、アミロースよりアミロペクチンが多い。",
      correct: false,
      explanation: "小麦粉のでんぷんはアミロペクチンの割合が多いです。"
    },
    {
      text: "全粒粉は、普通の小麦粉より食物繊維やビタミンB1が多い。",
      correct: false,
      explanation: "全粒粉は外皮や胚芽を含むため、食物繊維やビタミンB1が豊富です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "グルテンについて、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "水を加えてこねた時に形成される。",
      correct: false,
      explanation: "グルテンは小麦粉に水を加えてこねることで形成されます。"
    },
    {
      text: "粘りを出すグリアジンと弾力性を出すグルテニンから形成される。",
      correct: false,
      explanation: "グリアジンとグルテニンが結びついてグルテンを形成します。"
    },
    {
      text: "食塩は、グルテンの組織を引き締め、麺のコシを強くする。",
      correct: false,
      explanation: "食塩にはグルテンを引き締める働きがあります。"
    },
    {
      text: "大麦やライ麦の生地でも小麦粉と同様に形成される。",
      correct: true,
      explanation: "大麦やライ麦には小麦ほどグルテン形成能力がありません。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "主にパスタ類を作るのに使われる小麦は、次のうちどれですか。",
  choices: [
    {
      text: "パン小麦",
      correct: false,
      explanation: "パン小麦は主にパン作りに使われます。"
    },
    {
      text: "スペルト小麦",
      correct: false,
      explanation: "スペルト小麦は古代小麦の一種です。"
    },
    {
      text: "デュラム小麦",
      correct: true,
      explanation: "デュラム小麦はパスタの原料として使用されます。"
    },
    {
      text: "クラブ小麦",
      correct: false,
      explanation: "クラブ小麦は主に菓子用などに利用されます。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "小麦を使った食品について、正しい文章を１つ選びなさい。",
  choices: [
    {
      text: "手延べそうめんは、広く伸ばした生地を細く切って作られる。",
      correct: false,
      explanation: "手延べそうめんは、生地を引き延ばして細くします。"
    },
    {
      text: "小麦のでんぷんを集めた粉を、かたくり粉と呼ぶ。",
      correct: false,
      explanation: "かたくり粉は現在では主にじゃがいものでんぷんから作られます。"
    },
    {
      text: "麩は、小麦粉の生地を水で洗いグルテンを取り出したものを原料としている。",
      correct: true,
      explanation: "麩は小麦粉から取り出したグルテンを主原料としています。"
    },
    {
      text: "中華麺が黄色いのは、カロテノイド色素がかんすいによる変化が元になっている。",
      correct: false,
      explanation: "中華麺の黄色はフラボノイド色素がアルカリ性で変化するためです。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "小麦粉がアルカリ性で色が濃くなる原因となる色素どれですか？",
  choices: [
    {
      text: "アントシアニン",
      correct: false,
      explanation: "アントシアニンは酸やアルカリで色が変わりますが、小麦粉の色変化とは異なります。"
    },
    {
      text: "カロテノイド",
      correct: false,
      explanation: "カロテノイドは黄色系色素ですが、アルカリ変化の主因ではありません。"
    },
    {
      text: "クロロフィル",
      correct: false,
      explanation: "クロロフィルは緑色色素です。"
    },
    {
      text: "フラボノイド",
      correct: true,
      explanation: "小麦粉中のフラボノイド色素はアルカリ性で色が濃くなります。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "大麦について、正しい文章を１つ選びなさい。",
  choices: [
    {
      text: "麦茶は、二条大麦から作られることが多い。",
      correct: false,
      explanation: "麦茶には主に六条大麦が使われます。"
    },
    {
      text: "六条大麦は、麦芽にされビールやウィスキーの原料となることが多い。",
      correct: false,
      explanation: "ビールやウイスキーには主に二条大麦が使われます。"
    },
    {
      text: "大麦を炒って粉にした麦こがしは、はったい粉、香煎とも呼ばれる。",
      correct: true,
      explanation: "麦こがしは、はったい粉や香煎とも呼ばれます。"
    },
    {
      text: "押し麦とは、精白した大麦を生のまま平らに加工したものである。",
      correct: false,
      explanation: "押し麦は蒸した後に押して加工します。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "大麦の成分について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "大麦には、グリアジンが含まれていないので、グルテンは形成できない。",
      correct: false,
      explanation: "大麦は小麦のようなグルテンを形成しにくいです。"
    },
    {
      text: "もち麦のでんぷんは、アミロペクチンのみである。",
      correct: false,
      explanation: "もち麦はアミロペクチン主体のでんぷんです。"
    },
    {
      text: "大麦を押し麦に加工しても、食物繊維は小麦粉より多い。",
      correct: false,
      explanation: "大麦は食物繊維が豊富です。"
    },
    {
      text: "精白米よりビタミンB1が少ない。",
      correct: true,
      explanation: "大麦は精白米よりビタミンB1を多く含みます。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "穀物について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "ライ麦にもグルテンが多く含まれるので、パンを作るのに使われる。",
      correct: true,
      explanation: "ライ麦には小麦ほど多くのグルテンは含まれていません。"
    },
    {
      text: "えん麦は、オートミールとして食べられている。",
      correct: false,
      explanation: "えん麦はオートミールとして利用されます。"
    },
    {
      text: "そばのたんぱく質は、穀物の中では、必須アミノ酸が多く良質である。",
      correct: false,
      explanation: "そばのたんぱく質は良質なたんぱく質として知られています。"
    },
    {
      text: "もち粟は、もちにして食べたり、米に混ぜて炊飯して食べる。",
      correct: false,
      explanation: "もち粟は雑穀として炊飯などに利用されます。"
    }
  ]
},{
  category: "食品栄養学（食品学）",
  question: "じゃがいも、さつまいもの種類について、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "さつまいもの「こがねせんがん」は、いも焼酎の原料として使われる。",
      correct: false,
      explanation: "「こがねせんがん」は、いも焼酎の原料として利用されています。"
    },
    {
      text: "徳島県で作られている「鳴門金時」は、「高系４号」の系列のさつまいもである。",
      correct: false,
      explanation: "鳴門金時は「高系14号」系統のさつまいもです。"
    },
    {
      text: "粉質の「男爵」はカレーに、粘質の「メークイン」はコロッケに適している。",
      correct: true,
      explanation: "一般的には、男爵はいもが崩れやすいためコロッケ向き、メークインは煮崩れしにくいためカレー向きです。"
    },
    {
      text: "「きたあかり」は、やや黄色い肉色で、煮くずれしやすいじゃがいもである。",
      correct: false,
      explanation: "きたあかりは黄色い果肉で、煮崩れしやすい特徴があります。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "さつまいもについて、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "さつまいもの黄色はカロテノイド色素によるが、紫いもの色はアントシアニンによる。",
      correct: false,
      explanation: "黄色はカロテノイド、紫色はアントシアニンによるものです。"
    },
    {
      text: "さつまいもにはβ-アミラーゼが含まれるので、ゆっくり加熱するとしょ糖が増える。",
      correct: true,
      explanation: "β-アミラーゼの働きで増えるのは主に麦芽糖です。"
    },
    {
      text: "さつまいもを切った時に出る白い汁には、ヤラピンが含まれる。",
      correct: false,
      explanation: "白い液にはヤラピンが含まれています。"
    },
    {
      text: "さつまいもは、ビタミンCが多く、加熱しても減少しにくい。",
      correct: false,
      explanation: "さつまいものビタミンCは、でんぷんに保護されているため加熱に強いです。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "じゃがいもについて、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "じゃがいもの芽や緑色になった皮には、毒素のソラニンが含まれる。",
      correct: false,
      explanation: "芽や緑化した部分にはソラニンなどの有毒成分が含まれます。"
    },
    {
      text: "じゃがいもが変色するのは、アミノ酸のチロシンが原因となる。",
      correct: false,
      explanation: "チロシンが酵素反応を起こし褐変の原因になります。"
    },
    {
      text: "じゃがいものでんぷんは、「浮き粉」として市販されている。",
      correct: true,
      explanation: "じゃがいものでんぷんは一般的に「かたくり粉」として販売されています。"
    },
    {
      text: "じゃがいもは、ビタミンCが多く、加熱しても減少しにくい。",
      correct: false,
      explanation: "じゃがいものビタミンCはでんぷんに守られているため、比較的熱に強いです。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "さといもの種類について、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "「八つ頭」は、主に関東地方で、おせち料理に用いられる。",
      correct: false,
      explanation: "八つ頭は縁起物としておせち料理に使われます。"
    },
    {
      text: "「たけのこいも」は、子いもを主に食べるさといもの一種である。",
      correct: true,
      explanation: "たけのこいもは親いもを食べる品種です。"
    },
    {
      text: "「えびいも」は、さといもの「唐いも」に土を被せて栽培したものである。",
      correct: false,
      explanation: "えびいもは唐いも系統を土寄せして曲げて育てたものです。"
    },
    {
      text: "「こいも」として一般的に食べられているのは「土垂」や「石川早生」が多い。",
      correct: false,
      explanation: "土垂や石川早生は一般的な子いも用品種です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "やまのいもの種類について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "「自然薯」は、日本に自生しているやまのいもで、粘りがつよい。",
      correct: false,
      explanation: "自然薯は強い粘りを持つ日本原産のやまのいもです。"
    },
    {
      text: "「つくねいも」は、「やまといも」とも呼ばれ、薯蕷まんじゅうに使われる。",
      correct: false,
      explanation: "つくねいもはやまといもの一種で、薯蕷まんじゅうに利用されます。"
    },
    {
      text: "「いちょういも」は、主に関東で食べられている。",
      correct: false,
      explanation: "いちょういもは関東地方を中心に利用されています。"
    },
    {
      text: "「ながいも」は、水分が少なく、生で食べると、サクサクとした食感がある。",
      correct: true,
      explanation: "ながいもは水分が多く、シャキシャキした食感があります。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "いも類の成分について、まちがっている文章を1つ選びなさい。",
  choices: [
    {
      text: "さといもややまのいもには、食物繊維とたんぱく質が結合した粘性物質を含む。",
      correct: false,
      explanation: "さといもややまのいもには粘性物質が含まれています。"
    },
    {
      text: "いも類は、カリウムを多く含み、高血圧の予防に役立つ。",
      correct: false,
      explanation: "カリウムはナトリウム排出を助け、高血圧予防に役立ちます。"
    },
    {
      text: "さといもに含まれる炭酸カルシウムは、かゆみの原因となる。",
      correct: true,
      explanation: "かゆみの原因はシュウ酸カルシウムです。"
    },
    {
      text: "こんにゃくは、こんにゃくいものグルコマンナンを凝固させたものである。",
      correct: false,
      explanation: "こんにゃくはグルコマンナンを凝固させて作られます。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "いも類について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "きくいもに含まれる食物繊維のイヌリンは、ガラクトースからなる多糖類である。",
      correct: true,
      explanation: "イヌリンは果糖を主成分とする多糖類です。"
    },
    {
      text: "タピオカは、キャッサバといういものでんぷんから作られている。",
      correct: false,
      explanation: "タピオカはキャッサバのでんぷんから作られています。"
    },
    {
      text: "ヤーコンは、キク科の植物のいも類である。",
      correct: false,
      explanation: "ヤーコンはキク科の植物です。"
    },
    {
      text: "こんにゃくいもは、シュウ酸カルシウムを多く含み、そのまま食べることはできない。",
      correct: false,
      explanation: "こんにゃくいもはアクが強く、そのままでは食べられません。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "じゃがいものでんぷんは一般になんという名前で販売されているか？",
  choices: [
    {
      text: "くず粉",
      correct: false,
      explanation: "くず粉はクズの根から作られます。"
    },
    {
      text: "薄力粉",
      correct: false,
      explanation: "薄力粉は小麦粉の一種です。"
    },
    {
      text: "かたくり粉",
      correct: true,
      explanation: "現在市販されているかたくり粉の多くはじゃがいものでんぷんです。"
    },
    {
      text: "上新粉",
      correct: false,
      explanation: "上新粉はうるち米から作られる米粉です。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "さといものかゆみの原因となる物質はどれか？",
  choices: [
    {
      text: "クエン酸カルシウム",
      correct: false,
      explanation: "かゆみの原因ではありません。"
    },
    {
      text: "クエン酸ナトリウム",
      correct: false,
      explanation: "かゆみの原因ではありません。"
    },
    {
      text: "シュウ酸マグネシウム",
      correct: false,
      explanation: "主なかゆみの原因ではありません。"
    },
    {
      text: "シュウ酸カルシウム",
      correct: true,
      explanation: "さといものかゆみはシュウ酸カルシウムによるものです。"
    }
  ]
},

{
  category: "食品栄養学（食品学）",
  question: "食物繊維のイヌリンは、なんという糖の多糖類か？",
  choices: [
    {
      text: "ぶどう糖",
      correct: false,
      explanation: "イヌリンはぶどう糖ではなく果糖を主成分とします。"
    },
    {
      text: "果糖",
      correct: true,
      explanation: "イヌリンは果糖が多数結合した多糖類です。"
    },
    {
      text: "麦芽糖",
      correct: false,
      explanation: "麦芽糖は二糖類です。"
    },
    {
      text: "乳糖",
      correct: false,
      explanation: "乳糖は乳に含まれる二糖類です。"
    }
  ]
},{
  category: "食品栄養学（食品学）",
  question: "炭水化物の種類について、まちがいがある文章を１つ選びなさい。",
  choices: [
    {
      text: "ぶどう糖はグルコース、果糖はフルクトースとも呼ばれる。",
      correct: false,
      explanation: "ぶどう糖はグルコース、果糖はフルクトースとも呼ばれます。"
    },
    {
      text: "しょ糖は、消化されるとぶどう糖と果糖になる。",
      correct: false,
      explanation: "しょ糖は分解されるとぶどう糖と果糖になります。"
    },
    {
      text: "麦芽糖は、消化されるとぶどう糖となる。",
      correct: false,
      explanation: "麦芽糖はぶどう糖２分子からなる二糖類です。"
    },
    {
      text: "乳糖は、果糖とガラクトースからなる二糖類である。",
      correct: true,
      explanation: "乳糖はぶどう糖とガラクトースからなる二糖類であり、果糖は含まれません。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "ぶどう糖が２つ結合した非還元糖で、保水性が高く、でんぷんの老化防止などに使われる糖をなんというか？",
  choices: [
    {
      text: "スクロース",
      correct: false,
      explanation: "スクロースはしょ糖のことで、ぶどう糖と果糖からなります。"
    },
    {
      text: "マルトース",
      correct: false,
      explanation: "マルトースは還元糖で、麦芽糖とも呼ばれます。"
    },
    {
      text: "イソマルトース",
      correct: false,
      explanation: "イソマルトースはぶどう糖２分子からなる還元糖です。"
    },
    {
      text: "トレハロース",
      correct: true,
      explanation: "トレハロースはぶどう糖２分子からなる非還元糖で、保水性や老化防止作用があります。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "砂糖について正しい文章を１つ選びなさい。",
  choices: [
    {
      text: "さとうだいこんから作られる砂糖は「てんさい糖」と呼ばれる。",
      correct: true,
      explanation: "てんさい糖は、さとうだいこん（甜菜）を原料として作られます。"
    },
    {
      text: "黒砂糖は、さとうだいこんを原料とする含蜜糖である。",
      correct: false,
      explanation: "黒砂糖は主にさとうきびを原料として作られます。"
    },
    {
      text: "和三盆は、さとうきびから作られる粒子の粗い砂糖である。",
      correct: false,
      explanation: "和三盆は粒子が細かく、口溶けが良い砂糖です。"
    },
    {
      text: "ざらめ糖は、しょ糖の含量が低い砂糖である。",
      correct: false,
      explanation: "ざらめ糖はしょ糖含量の高い砂糖です。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "砂糖について、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "車糖とは、粒子が細かい砂糖である。",
      correct: false,
      explanation: "車糖は粒子が細かい砂糖を指します。"
    },
    {
      text: "三温糖は、何度も煮つめて作られているので、この名がある。",
      correct: false,
      explanation: "三温糖は加熱工程を繰り返して作られます。"
    },
    {
      text: "上白糖や三温糖は、固まりにくくするため、転化糖が加えられている。",
      correct: false,
      explanation: "転化糖を加えることで保湿性が高まり、固まりにくくなります。"
    },
    {
      text: "グラニュー糖は、焼き色がつきやすいので、焼き菓子に使われる。",
      correct: true,
      explanation: "グラニュー糖は純度が高く、比較的焼き色がつきにくい砂糖です。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "砂糖の成分について、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "グラニュー糖は、しょ糖がほぼ100％の砂糖である。",
      correct: false,
      explanation: "グラニュー糖はしょ糖純度が非常に高い砂糖です。"
    },
    {
      text: "上白糖と三温糖は、ぶどう糖と果糖が少量含まれる。",
      correct: false,
      explanation: "上白糖や三温糖には少量の転化糖が含まれています。"
    },
    {
      text: "和三盆は、黒砂糖よりしょ糖の含量が低い。",
      correct: true,
      explanation: "和三盆は黒砂糖より精製度が高く、しょ糖含量も高いです。"
    },
    {
      text: "黒砂糖は、さとうきびの成分であるミネラルが微量含まれている。",
      correct: false,
      explanation: "黒砂糖にはカルシウムや鉄などのミネラルが含まれています。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "和三盆について、正しい文章を１つ選びなさい。",
  choices: [
    {
      text: "九州が主な産地である。",
      correct: false,
      explanation: "和三盆は主に香川県や徳島県で生産されています。"
    },
    {
      text: "さとうだいこんから作られる。",
      correct: false,
      explanation: "和三盆は主に竹糖（さとうきび）から作られます。"
    },
    {
      text: "重しをかけて分蜜しているので、甘さが強く、風味が少ない。",
      correct: false,
      explanation: "和三盆は独特の風味と上品な甘さがあります。"
    },
    {
      text: "「研ぎ」と呼ばれる工程で、粒子が細かく、口溶けが良い。",
      correct: true,
      explanation: "和三盆は「研ぎ」の工程によって粒子が細かく、口溶けが良くなります。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "はちみつの性質について、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "蜜源により風味に違いがある。",
      correct: false,
      explanation: "はちみつは花の種類によって風味が異なります。"
    },
    {
      text: "ほとんどが、ぶどう糖と果糖をほぼ1：１で含む。",
      correct: false,
      explanation: "はちみつにはぶどう糖と果糖が多く含まれています。"
    },
    {
      text: "砂糖よりアミノカルボニル反応を起こしにくい。",
      correct: true,
      explanation: "はちみつは還元糖を多く含むため、アミノカルボニル反応を起こしやすいです。"
    },
    {
      text: "ぶどう糖が結晶化して固まりやすい。",
      correct: false,
      explanation: "はちみつはぶどう糖が結晶化して固まることがあります。"
    }
  ]
},
{
  category: "食品栄養学（食品学）",
  question: "水あめの性質について、まちがいがある文章を1つ選びなさい。",
  choices: [
    {
      text: "でんぷんを酵素や酸で分解して作られた「でんぷん糖」の一種である。",
      correct: false,
      explanation: "水あめはでんぷんを分解して作られる糖です。"
    },
    {
      text: "アミノカルボニル反応を起こしやすいので、焼き色が濃くする働きがある。",
      correct: false,
      explanation: "水あめは加熱時に焼き色をつける効果があります。"
    },
    {
      text: "デキストリンを含み、照りやつやを出す効果がある。",
      correct: false,
      explanation: "水あめには照りやつやを出す効果があります。"
    },
    {
      text: "酵素糖化のものは果糖が多く、酸糖化のものはぶどう糖が多い。",
      correct: true,
      explanation: "一般に酵素糖化では麦芽糖が多く、酸糖化ではぶどう糖が多くなります。"
    }
  ]
},{
  category: "ヘルシーライフ研究",
  question: "WHO憲章における「健康」の定義に関する記述で（　　）に入る語句として正しいものを１つ選びなさい。「健康とは、単に疾病や虚弱でないということをいうことでなく、肉体的、精神的ならびに（　　）に完全に良好な状態である」",
  choices: [
    {
      text: "経済的",
      correct: false,
      explanation: "WHO憲章では「社会的」に良好な状態と定義されています。"
    },
    {
      text: "社会的",
      correct: true,
      explanation: "WHO憲章では、健康を「肉体的・精神的・社会的に完全に良好な状態」と定義しています。"
    },
    {
      text: "家族的",
      correct: false,
      explanation: "WHO憲章の健康の定義には「家族的」は含まれていません。"
    },
    {
      text: "地域的",
      correct: false,
      explanation: "WHO憲章の健康の定義には「地域的」は含まれていません。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "高齢化する社会に関する記述で（　　）内に入る語句の組み合わせのうち、正しいものを１つ選びなさい。（　Ａ　）歳以上の高齢者が総人口の７％を超えると「高齢化社会」、14％を超えると「高齢社会」、（　B　）％を超えると「超高齢社会」という",
  choices: [
    {
      text: "A 65、B 21",
      correct: true,
      explanation: "65歳以上が21％を超えると「超高齢社会」と定義されます。"
    },
    {
      text: "A 65、B 29",
      correct: false,
      explanation: "超高齢社会は29％ではなく21％以上です。"
    },
    {
      text: "A 75、B 21",
      correct: false,
      explanation: "高齢者の基準は75歳ではなく65歳以上です。"
    },
    {
      text: "A 75、B 29",
      correct: false,
      explanation: "高齢者の基準は65歳以上であり、超高齢社会は21％以上です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "2024年のWHOの発表によると、日本の平均寿命の世界順位として、次のうち正しい組み合わせを答えなさい。",
  choices: [
    {
      text: "男性１位、女性６位",
      correct: false,
      explanation: "日本は女性１位、男性６位です。"
    },
    {
      text: "男性１位、女性１位",
      correct: false,
      explanation: "男性は１位ではなく６位です。"
    },
    {
      text: "男性６位、女性１位",
      correct: true,
      explanation: "2024年WHO発表では、日本は男性６位、女性１位です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "日本における2024年の死因別死亡割合の上位３つのうち、２つあげたものとして、正しいものを１つ選びなさい",
  choices: [
    {
      text: "心疾患、不慮の事故",
      correct: false,
      explanation: "不慮の事故は上位３位には含まれていません。"
    },
    {
      text: "肺炎、がん",
      correct: false,
      explanation: "肺炎は上位３位には含まれていません。"
    },
    {
      text: "がん、心疾患",
      correct: true,
      explanation: "日本の主な死因の上位には、がんと心疾患があります。"
    },
    {
      text: "脳血管疾患、老衰",
      correct: false,
      explanation: "脳血管疾患と老衰のみの組み合わせは上位３位の代表ではありません。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "ヘルスプロモーションとは人々が自らの病気をコントロールし、改善することができるようにする過程である。",
  choices: [
    {
      text: "〇",
      correct: false,
      explanation: "ヘルスプロモーションは健康をコントロールし改善する過程であり、「病気」ではありません。"
    },
    {
      text: "×",
      correct: true,
      explanation: "ヘルスプロモーションとは、人々が自らの健康をコントロールし改善することができるようにする過程です。"
    }
  ]
},{
  category: "ヘルシーライフ研究",
  question: "メタボリックシンドロームに関する記述で（　　）に入る語句の組み合わせとして正しいものを１つ選びなさい。内臓の周りに付着した脂肪が様々な（　A　）を引き起こす原因が高いことから、腹囲が男性83㎝、女性90㎝を超え、さらに（　B　）、血圧、脂質のうち（　C　）２つ以上の検査値が基準を超えた場合、メタボリックシンドロームと診断される。",
  choices: [
    {
      text: "A 成人病、B 血糖値、C １",
      correct: false,
      explanation: "メタボリックシンドロームでは、血糖値・血圧・脂質のうち２項目以上が基準を超える必要があります。"
    },
    {
      text: "A 成人病、B 尿酸値、C ２",
      correct: false,
      explanation: "診断基準には尿酸値ではなく血糖値が含まれます。"
    },
    {
      text: "A 生活習慣病、B 尿酸値、C ２",
      correct: false,
      explanation: "診断基準には尿酸値ではなく血糖値が含まれます。"
    },
    {
      text: "A 生活習慣病、B 血糖値、C ２",
      correct: true,
      explanation: "メタボリックシンドロームは、内臓脂肪型肥満に加え、血糖値・血圧・脂質のうち２項目以上が基準を超えると診断されます。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "生活習慣病に関する記述で、正しいものを１つ選びなさい。",
  choices: [
    {
      text: "脂肪分の多い食品を摂取する機会が増えたことで、肥満とそれに由来する生活習慣病が増加している",
      correct: true,
      explanation: "食生活の変化により肥満や生活習慣病の増加が問題となっています。"
    },
    {
      text: "生活習慣病と皮下脂肪型肥満は強く関係している",
      correct: false,
      explanation: "生活習慣病と強く関連するのは内臓脂肪型肥満です。"
    },
    {
      text: "生活習慣病と子どもの頃の食生活は全く関係ない",
      correct: false,
      explanation: "子どもの頃からの食生活や生活習慣は生活習慣病に影響します。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "特定健康診査・特定保健指導に関する記述で誤っているものを選びなさい。",
  choices: [
    {
      text: "特定健診はメタボリックシンドロームの早期発見を目的としている",
      correct: false,
      explanation: "特定健診はメタボリックシンドロームの予防・早期発見を目的としています。"
    },
    {
      text: "特定健診等が必要となった背景には、食生活の洋風化が大きく影響している",
      correct: false,
      explanation: "食生活の変化は生活習慣病増加の要因の一つです。"
    },
    {
      text: "対象は50歳から80歳である",
      correct: true,
      explanation: "特定健診の対象は40歳から74歳までです。"
    },
    {
      text: "健康診査項目に腹囲の測定がある",
      correct: false,
      explanation: "腹囲測定は特定健診の重要な項目です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "日本の衛生統計に関する記述で誤っているものを選びなさい。",
  choices: [
    {
      text: "2023年の国民健康・栄養調査でみると、肥満は男性31.5％、女性21.1％である",
      correct: false,
      explanation: "2023年の国民健康・栄養調査ではそのような傾向が示されています。"
    },
    {
      text: "結核の死亡率は戦前（1945年以前）高かったが戦後減少した",
      correct: false,
      explanation: "医療や衛生環境の改善により結核死亡率は減少しました。"
    },
    {
      text: "乳児死亡率は世界でもっとも低いグループに入っている",
      correct: false,
      explanation: "日本の乳児死亡率は世界的に低い水準です。"
    },
    {
      text: "2023年の国民健康・栄養調査でみると、痩せの割合は女性12.0％で20～30歳代は4.4％である",
      correct: true,
      explanation: "20～30歳代女性のやせの割合は4.4％ではなく、より高い割合となっています。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "「食生活指針」の基本的な考え方として最も適切なものを選びなさい。",
  choices: [
    {
      text: "１日の食事回数を２回にする",
      correct: false,
      explanation: "食生活指針では食事回数を２回に限定していません。"
    },
    {
      text: "脂質を完全に避けることを推奨する",
      correct: false,
      explanation: "脂質は必要な栄養素であり、適量摂取が重要です。"
    },
    {
      text: "特定の食品を毎日必ず食べることを義務づける",
      correct: false,
      explanation: "特定食品の義務化ではなく、バランスの良い食生活が重視されています。"
    },
    {
      text: "健康のために食事を楽しむ視点を重視する",
      correct: true,
      explanation: "食生活指針では、健康維持とともに食事を楽しむことも重視されています。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "「食生活指針」で推奨されている食事の組み合わせとして正しいものを選びなさい。",
  choices: [
    {
      text: "主食のみにする",
      correct: false,
      explanation: "主食だけでは栄養バランスが偏ります。"
    },
    {
      text: "主菜と副菜を省き、簡素な食事にする",
      correct: false,
      explanation: "主食・主菜・副菜を組み合わせることが推奨されています。"
    },
    {
      text: "主菜のみにする",
      correct: false,
      explanation: "主菜だけでは栄養バランスが不十分です。"
    },
    {
      text: "主食・主菜・副菜を組み合わせる",
      correct: true,
      explanation: "主食・主菜・副菜をそろえることで栄養バランスが整います。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "「食生活指針」で示されている”適正体重の維持”に関する説明として正しいものを選びなさい。",
  choices: [
    {
      text: "体重を減らすことのみを推奨している",
      correct: false,
      explanation: "適正体重の維持は減量だけを意味するものではありません。"
    },
    {
      text: "体重管理は食事だけでなく運動も含めて考える",
      correct: true,
      explanation: "適正体重の維持には、食事と運動の両方が重要です。"
    },
    {
      text: "体重は年齢に関係なく一定であるべきとする",
      correct: false,
      explanation: "適正体重は年齢や体格などによって異なります。"
    },
    {
      text: "体重は気にしなくてよいとされている",
      correct: false,
      explanation: "健康維持のためには適正体重を意識することが大切です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "「食生活指針」の”食育を広げる”とはどのようなことを指すか。最も適切なものを選びなさい。",
  choices: [
    {
      text: "家庭や地域で食に関する学びを共有する",
      correct: true,
      explanation: "食育は家庭や地域など社会全体で取り組むことが大切です。"
    },
    {
      text: "子どもだけが対象である",
      correct: false,
      explanation: "食育は子どもだけでなく全世代が対象です。"
    },
    {
      text: "専門家のみが食育を行うべきとする",
      correct: false,
      explanation: "食育は家庭・学校・地域など多くの人が関わります。"
    },
    {
      text: "食育は学校教育に限定される",
      correct: false,
      explanation: "食育は学校だけでなく家庭や地域でも行われます。"
    }
  ]
},{
  category: "ヘルシーライフ研究",
  question: "調理師法に関する記述で（　　）に入る語句の組み合わせとして正しいものを１つ選びなさい。調理師とは、（　A　）の名称を用いて調理業務に従事することができる者として、（　B　）から免許を受けた者をいう",
  choices: [
    {
      text: "A 調理師、B 都道府県知事",
      correct: true,
      explanation: "調理師は都道府県知事から免許を受ける名称独占資格です。"
    },
    {
      text: "A 調理師、B 厚生労働大臣",
      correct: false,
      explanation: "調理師免許は厚生労働大臣ではなく都道府県知事が交付します。"
    },
    {
      text: "A 職業人、B 都道府県知事",
      correct: false,
      explanation: "法律上『調理師』の名称を用いる者として定義されています。"
    },
    {
      text: "A 職業人、B 厚生労働大臣",
      correct: false,
      explanation: "調理師は厚生労働大臣ではなく都道府県知事から免許を受けます。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理師法の目的として最も適切なものを選びなさい。",
  choices: [
    {
      text: "飲食店の売上げ向上を支援すること",
      correct: false,
      explanation: "調理師法の目的は売上向上ではありません。"
    },
    {
      text: "栄養士の業務範囲を定めること",
      correct: false,
      explanation: "栄養士の業務は栄養士法で定められています。"
    },
    {
      text: "食品表示制度を管理すること",
      correct: false,
      explanation: "食品表示制度は食品表示法などに基づいて管理されています。"
    },
    {
      text: "調理技術の向上と食品衛生の確保を図ること",
      correct: true,
      explanation: "調理師法は調理技術の向上と公衆衛生の向上を目的としています。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理師に関する記述について誤っているものを１つ選びなさい。",
  choices: [
    {
      text: "調理師免許の取得方法には、厚生労働省が指定する調理師養成施設で１年以上修業するか、調理師試験に合格するかの２通りがある",
      correct: true,
      explanation: "調理師養成施設は厚生労働省ではなく都道府県知事が指定します。"
    },
    {
      text: "調理師試験の受験資格は、厚生労働省令で定める調理業務施設などで２年以上の調理実務経験があることによって得られる",
      correct: false,
      explanation: "調理師試験には２年以上の実務経験が必要です。"
    },
    {
      text: "実務経験があるものは、都道府県知事の行う調理師試験に合格すると免許を取得できる",
      correct: false,
      explanation: "都道府県知事が実施する調理師試験に合格することで免許取得が可能です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理師法に関する記述で、正しいものを１つ選びなさい。",
  choices: [
    {
      text: "調理師は名称独占資格である。",
      correct: true,
      explanation: "調理師は資格を持つ者のみが名称を使用できる名称独占資格です。"
    },
    {
      text: "調理師の免許申請は、調理師試験を受けた都道府県で行う",
      correct: false,
      explanation: "免許申請は住所地などを管轄する都道府県で行います。"
    },
    {
      text: "調理師の免許は、調理師試験に合格した者のみに与えられる",
      correct: false,
      explanation: "養成施設を修了した場合も免許取得が可能です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理師法に関する記述のうち誤っているものを１つ選びなさい。",
  choices: [
    {
      text: "調理師免許を持っていないものが、調理師またはこれとまぎらわしい名称を使用することは禁止されている",
      correct: false,
      explanation: "無資格者が調理師名称を使用することは禁止されています。"
    },
    {
      text: "反則金以上の刑に処せられたことがあるものは調理師免許を与えられない場合がある",
      correct: true,
      explanation: "『罰金以上の刑』が該当条件であり、『反則金』ではありません。"
    },
    {
      text: "免許証は、登録の消除を申請するときに、免許を与えた都道府県知事に返納しなければならない",
      correct: false,
      explanation: "登録消除時には免許証を返納する必要があります。"
    }
  ]
},{
  category: "ヘルシーライフ研究",
  question: "調理師就業届に関する記述で（　　）に入る語句の組み合わせとして正しいものを１つ選びなさい。飲食店などで調理の業務に従事する調理師は、（　A　）年ごとに（　B　）現在における氏名、住所などを翌年の１月１５日までに（　C　）の都道府県知事または委託された受理機関に届けなければならない。",
  choices: [
    {
      text: "A ２、B ４月１日、C 出身地",
      correct: false,
      explanation: "調理師就業届は出身地ではなく就業地へ届け出ます。"
    },
    {
      text: "A ３、B ４月１日、C 就業地",
      correct: false,
      explanation: "調理師就業届は２年ごとに行います。"
    },
    {
      text: "A ２、B 12月31日、C 就業地",
      correct: true,
      explanation: "調理師就業届は２年ごとに、12月31日現在の状況を就業地の都道府県知事へ届け出ます。"
    },
    {
      text: "A ３、B 12月31日、C 出身地",
      correct: false,
      explanation: "届出は３年ごとではなく２年ごとで、出身地ではなく就業地に行います。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "厚生労働省令で定める「調理師を置くように努めなければならない施設」として、該当しないものはどれか。",
  choices: [
    {
      text: "寄宿舎、学校、病院等の給食施設",
      correct: false,
      explanation: "給食施設は調理師を置くよう努める対象施設です。"
    },
    {
      text: "飲食店営業施設",
      correct: false,
      explanation: "飲食店営業施設も調理師設置努力義務の対象です。"
    },
    {
      text: "魚介類販売業施設",
      correct: false,
      explanation: "魚介類販売業施設は対象施設に含まれます。"
    },
    {
      text: "菓子製造業施設",
      correct: true,
      explanation: "菓子製造業施設は、調理師設置努力義務の対象には含まれません。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理師に関する記述について正しいものを１つ選びなさい。",
  choices: [
    {
      text: "調理の業務に従事する者は、毎年その就業地の都道府県知事または委託された受理機関に従事場所を届けなければならない",
      correct: false,
      explanation: "就業届は毎年ではなく２年ごとに提出します。"
    },
    {
      text: "飲食店営業施設では、調理師を置かなければならない",
      correct: false,
      explanation: "調理師設置は義務ではなく努力義務です。"
    },
    {
      text: "「調理師」とは調理師の名称を用いて調理の業務に従事することができるものとして厚生労働大臣の免許を受けたものをいう",
      correct: false,
      explanation: "調理師免許は厚生労働大臣ではなく都道府県知事が交付します。"
    },
    {
      text: "調理師でなければ、調理師を名乗ることはできない",
      correct: true,
      explanation: "調理師は名称独占資格であり、資格がなければ名称を使用できません。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理技術審査に関する記述のうち、誤っているものを選びなさい。",
  choices: [
    {
      text: "調理技術審査は、学科試験および実技試験によって行う。",
      correct: false,
      explanation: "調理技術審査は学科試験と実技試験で構成されています。"
    },
    {
      text: "試験に合格すると、受験した試験科目の専門調理師・調理技能士の称号を記載した認定証書が、都道府県知事から与えられる",
      correct: true,
      explanation: "認定証書は都道府県知事ではなく厚生労働大臣より交付されます。"
    },
    {
      text: "実技試験には、日本料理、西洋料理、中国料理、麺料理、すし料理、給食用特殊料理の中から１科目選択して受験することができる。",
      correct: false,
      explanation: "実技試験では専門分野から１科目を選択して受験します。"
    },
    {
      text: "調理師養成施設卒業者は調理師養成施設において卒業の直前に行われる技術考査に合格していると、調理技術技能評価試験を受験する際に学科試験が免除される",
      correct: false,
      explanation: "技術考査合格者には学科試験免除制度があります。"
    }
  ]
},{
  category: "ヘルシーライフ研究",
  question: "調理師免許の名簿訂正・書き換え交付に関する記述で誤っているものを選びなさい。",
  choices: [
    {
      text: "調理師名簿の登録事項に変更が生じたときは、１年以内に訂正の申請をしなければならない",
      correct: true,
      explanation: "名簿訂正の申請は変更後30日以内に行う必要があります。"
    },
    {
      text: "免許の交付を受けた都道府県または委託された機関に申請する",
      correct: false,
      explanation: "名簿訂正・書換え交付は免許交付都道府県等へ申請します。"
    },
    {
      text: "旧免許証の提出が必要である",
      correct: false,
      explanation: "書換え交付時には旧免許証の提出が必要です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "調理師免許の再交付を申請できる場合として誤っているものを１つ選びなさい。",
  choices: [
    {
      text: "破ったとき",
      correct: false,
      explanation: "免許証を破損した場合は再交付申請が可能です。"
    },
    {
      text: "汚したとき",
      correct: false,
      explanation: "免許証が著しく汚損した場合も再交付申請が可能です。"
    },
    {
      text: "失ったとき",
      correct: false,
      explanation: "紛失した場合は再交付申請を行います。"
    },
    {
      text: "氏名を変更したとき",
      correct: true,
      explanation: "氏名変更時は再交付ではなく名簿訂正・書換え交付を申請します。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "Aさんは大阪調理師専門学校を令和８年３月に卒業し、関西広域連合より調理師免許が交付されました。同年の６月に結婚し、氏名と本籍地が変わりました。同年９月に京都府内の小学校給食施設に調理師として就職し、子供たちに給食を提供しています。Aさんは結婚して氏名が変わりました。調理師免許について、Aさんがしなければならないことはどれですか？",
  choices: [
    {
      text: "そのまま何もしなくてよい",
      correct: false,
      explanation: "氏名変更時には手続きが必要です。"
    },
    {
      text: "就職先の小学校給食施設が代わりに手続きをしてくれる",
      correct: false,
      explanation: "名簿訂正・書換え交付は本人が申請します。"
    },
    {
      text: "自分で名簿訂正・書き換え交付を申請する",
      correct: true,
      explanation: "氏名や本籍地に変更があった場合は名簿訂正・書換え交付を申請します。"
    },
    {
      text: "もう一度調理師免許を取り直す",
      correct: false,
      explanation: "氏名変更のみでは再受験や再取得は不要です。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "Aさんは大阪調理師専門学校を令和８年３月に卒業し、関西広域連合より調理師免許が交付されました。同年の６月に結婚し、氏名と本籍地が変わりました。同年９月に京都府内の小学校給食施設に調理師として就職し、子供たちに給食を提供しています。Aさんは、結婚に伴う引っ越しの際に調理師免許証を破ってしまいました。この場合、Aさんが行うべき手続きとして最も適切なものを１つ選びなさい。",
  choices: [
    {
      text: "破れた部分をテープで貼り、元のまま使う",
      correct: false,
      explanation: "破損した免許証は再交付申請を行う必要があります。"
    },
    {
      text: "新しい免許を取り直すため、調理師試験を受ける",
      correct: false,
      explanation: "再受験の必要はありません。"
    },
    {
      text: "名簿訂正・書き換え交付と同時に再交付申請を行う",
      correct: true,
      explanation: "氏名変更と免許証破損の両方があるため、書換え交付と再交付申請を行います。"
    },
    {
      text: "就職先に預けておけば問題ない",
      correct: false,
      explanation: "破損した免許証のままでは適切ではありません。"
    }
  ]
},
{
  category: "ヘルシーライフ研究",
  question: "Aさんは9月から小学校給食施設で働き始めました。調理師として働く際に、調理師免許証を施設に提出する目的として最も適切なものを1つ選びなさい。",
  choices: [
    {
      text: "給食の献立を作成するため",
      correct: false,
      explanation: "献立作成は主に栄養士等の業務です。"
    },
    {
      text: "調理師であることを証明し、施設が適切に配置基準を満たすため",
      correct: true,
      explanation: "施設は有資格者の配置確認のために免許証を確認します。"
    },
    {
      text: "給食費の徴収業務を行うため",
      correct: false,
      explanation: "給食費徴収は調理師免許提出の目的ではありません。"
    },
    {
      text: "栄養教諭の代わりに栄養指導をするため",
      correct: false,
      explanation: "栄養指導は主に栄養教諭や栄養士の役割です。"
    }
  ]
},

  {
    category: "調理理論",
    question: "調理は食品を（　　）にする調理操作です。（　　）に入る言葉を選んでください。",
    choices: [
      {
        text: "満足",
        correct: false,
        explanation: "「満足」は食事の結果として得られる感情であり、食品そのものを表す言葉ではありません。"
      },
      {
        text: "安全",
        correct: false,
        explanation: "安全性を高めることは調理の目的の一つですが、『食品を○○にする』という文章としては不自然です。"
      },
      {
        text: "おいしい食べ物",
        correct: true,
        explanation: "調理とは、食品をおいしく食べられる状態にするための操作です。"
      },
      {
        text: "豪華",
        correct: false,
        explanation: "豪華さは見た目や印象を表す言葉であり、調理の本来の目的ではありません。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "古い時代には、料理人になろうとする人は、どのようにしてつくり方を覚えてく方法が普通だったでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "先輩から技術を盗んだ",
        correct: false,
        explanation: "昔は技術を見て学ぶ文化でしたが、『盗む』という表現は一部の考え方であり、一般的な方法を表すものではありません。"
      },
      {
        text: "見よう見まね",
        correct: true,
        explanation: "昔の料理人は、先輩や師匠の仕事を見ながら真似をして技術を身につけることが一般的でした。"
      },
      {
        text: "師匠から教えてもらった",
        correct: false,
        explanation: "現在のように細かく教わる形ではなく、実際には自分で見て覚えることが中心でした。"
      },
      {
        text: "先輩から教えてもらった",
        correct: false,
        explanation: "口頭で丁寧に教わるより、自分で観察して覚える方法が主流でした。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "昔から最も適切な方法として伝えられてきた方法や技術には、必ず（　　）が存在する。（　　）に入る言葉を選んでください。",
    choices: [
      {
        text: "科学的根拠",
        correct: true,
        explanation: "昔から伝わる調理法には、食材の変化や安全性に関する科学的な理由があります。"
      },
      {
        text: "確固たる分量",
        correct: false,
        explanation: "分量は重要ですが、伝統的な調理法の本質は科学的な理由にあります。"
      },
      {
        text: "その店の伝統",
        correct: false,
        explanation: "店ごとの伝統ではなく、多くの調理法には共通した科学的根拠があります。"
      },
      {
        text: "言い伝え",
        correct: false,
        explanation: "単なる言い伝えではなく、実際には合理的な理由に基づいています。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "3は何の原理となっているでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "店を維持していく",
        correct: false,
        explanation: "店の経営や維持ではなく、調理技術そのものに関係する内容です。"
      },
      {
        text: "調理理論",
        correct: false,
        explanation: "『調理理論』は分野名であり、具体的な原理としては適切ではありません。"
      },
      {
        text: "安全衛生",
        correct: false,
        explanation: "安全衛生にも関係しますが、ここでは調理技術を向上させる原理を指しています。"
      },
      {
        text: "調理を上手にすること",
        correct: true,
        explanation: "科学的根拠を理解することで、調理をより上手に行えるようになります。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "調理技術に関する原理を知ることで、何が可能になるでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "店の経営",
        correct: false,
        explanation: "調理理論は料理技術に関する知識であり、経営とは直接関係ありません。"
      },
      {
        text: "調理責任者になる",
        correct: false,
        explanation: "責任者になるには経験や資格も必要であり、原理を知るだけでは不十分です。"
      },
      {
        text: "調理知識の向上",
        correct: false,
        explanation: "知識の向上もありますが、特に重要なのは応用して新しい料理に活かせることです。"
      },
      {
        text: "発展的な応用料理",
        correct: true,
        explanation: "原理を理解することで、基本を応用した新しい料理を作ることが可能になります。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "調理の目的は何でしょうか。次の中から間違っているものを選んでください。",
    choices: [
      {
        text: "おいしい食べ物に仕上げる",
        correct: false,
        explanation: "調理の大切な目的の一つです。"
      },
      {
        text: "調理知識の向上",
        correct: true,
        explanation: "知識向上は学習の目的であり、調理そのものの目的ではありません。"
      },
      {
        text: "安全性の向上",
        correct: false,
        explanation: "加熱や衛生管理によって安全性を高めることは重要な目的です。"
      },
      {
        text: "食品の栄養価",
        correct: false,
        explanation: "栄養を効率よく摂取しやすくすることも調理の目的の一つです。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "ヨーロッパ、アメリカなどで、常食している穀類は何でしょうか。次の中から選んでください。",
    choices: [
      {
        text: "麺類",
        correct: false,
        explanation: "麺類は料理の形態であり、主な穀類そのものではありません。"
      },
      {
        text: "パン",
        correct: true,
        explanation: "ヨーロッパやアメリカでは、小麦を使ったパンが主食として広く食べられています。"
      },
      {
        text: "ピザ",
        correct: false,
        explanation: "ピザは料理名であり、主食全体を表すものではありません。"
      },
      {
        text: "米",
        correct: false,
        explanation: "米は日本やアジア地域で多く食べられる主食です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "野菜を切ったり、すりおろしたり、加熱することによって人間の何を助けているのでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "感情をしずめる",
        correct: false,
        explanation: "調理による加工は主に消化や咀嚼を助けることに関係しています。"
      },
      {
        text: "笑顔になる",
        correct: false,
        explanation: "食事で楽しい気持ちになることはありますが、直接の目的ではありません。"
      },
      {
        text: "歯や胃腸の機能",
        correct: true,
        explanation: "食材を柔らかくしたり細かくすることで、噛んだり消化したりしやすくなります。"
      },
      {
        text: "気分を良くする",
        correct: false,
        explanation: "気分への影響よりも、消化吸収を助ける役割が中心です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "大腸菌、ぶどう球菌、サルモネラ属菌などを（　　）に入れると5分後には死滅する。（　　）に入る言葉を何でしょうか次の中から選んでください。",
    choices: [
      {
        text: "醬油",
        correct: false,
        explanation: "醤油には塩分がありますが、短時間で細菌を死滅させる力は十分ではありません。"
      },
      {
        text: "砂糖",
        correct: false,
        explanation: "砂糖は保存性を高めることがありますが、細菌をすぐに死滅させるものではありません。"
      },
      {
        text: "味噌",
        correct: false,
        explanation: "味噌にも塩分はありますが、食酢ほど強い殺菌作用はありません。"
      },
      {
        text: "食酢",
        correct: true,
        explanation: "食酢には強い酸性による殺菌作用があり、多くの細菌を死滅させます。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "食事は単に栄養素の確保を目的とするのではなく、社交の場でもあるので、心理的な満足感が与えられるようには、どんなことを心掛けることが必要でしょうか。次の中から選んでください（複数回答要）。",
    choices: [
      {
        text: "雰囲気作りをする",
        correct: true,
        explanation: "食事の場の雰囲気は、心理的な満足感を高める重要な要素です。"
      },
      {
        text: "正確に計量する",
        correct: false,
        explanation: "計量は調理技術には重要ですが、心理的満足感とは直接関係ありません。"
      },
      {
        text: "レシピ通りに調理する",
        correct: false,
        explanation: "正しい調理は大切ですが、ここでは食事の楽しさや雰囲気が重視されています。"
      },
      {
        text: "美しい盛り付けをする",
        correct: true,
        explanation: "見た目の美しさは食欲や満足感を高める効果があります。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "食べ物のおいしさとして、正しいものを選んでください。（複数回答可）",
    choices: [
      {
        text: "おいしさは、食べる人の主観的な感情である。",
        correct: true,
        explanation: "おいしさは人によって感じ方が異なる主観的な感情です。"
      },
      {
        text: "上手に盛り付けされた料理は、いつでもおいしい。",
        correct: false,
        explanation: "盛り付けだけではなく、環境や体調などもおいしさに影響します。"
      },
      {
        text: "食べる環境によっては、おいしく感じないこともある。",
        correct: true,
        explanation: "環境や雰囲気によって、おいしさの感じ方は変化します。"
      },
      {
        text: "舌ざわりなどのテクスチャーや味付けがちょうど良い料理はおいしい。",
        correct: true,
        explanation: "食感や味付けは、おいしさを構成する重要な要素です。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は他の選択肢です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "食べ物の側にあるおいしさを構成する要因には、化学的要因と（　　）要因があります。（　）内に入る正しい語句を選んでください。",
    choices: [
      {
        text: "科学的",
        correct: false,
        explanation: "『科学的』という分類は用いません。"
      },
      {
        text: "物理的",
        correct: true,
        explanation: "おいしさには化学的要因と物理的要因があります。"
      },
      {
        text: "具体的",
        correct: false,
        explanation: "『具体的』は分類名ではありません。"
      },
      {
        text: "合理的",
        correct: false,
        explanation: "『合理的』は適切ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『物理的』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "味の種類として基本となる味は、次のうちどれでしょうか。",
    choices: [
      {
        text: "塩味、渋味、苦味、甘味、うま味",
        correct: false,
        explanation: "渋味は基本味には含まれません。"
      },
      {
        text: "うま味、塩味、酸味、甘味、辛味",
        correct: false,
        explanation: "辛味は基本味には含まれません。"
      },
      {
        text: "苦味、甘味、酸味、塩味、うま味",
        correct: true,
        explanation: "基本味は甘味・塩味・酸味・苦味・うま味です。"
      },
      {
        text: "酸味、苦味、辛味、甘味、塩味",
        correct: false,
        explanation: "辛味は基本味ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『苦味、甘味、酸味、塩味、うま味』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "（　）は、いずれも水素イオンの呈する味で、食酢や果実類などに含まれる有機酸による味です。（　）内に入る正しいものを選んでください。",
    choices: [
      {
        text: "うま味",
        correct: false,
        explanation: "うま味ではありません。"
      },
      {
        text: "酸味",
        correct: true,
        explanation: "酸味は水素イオンによって感じる味です。"
      },
      {
        text: "塩味",
        correct: false,
        explanation: "塩味ではありません。"
      },
      {
        text: "甘味",
        correct: false,
        explanation: "甘味ではありません。"
      },
      {
        text: "苦味",
        correct: false,
        explanation: "苦味ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『酸味』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "（　）を感じさせる成分には、グルタミン酸、イノシン酸、グアニル酸などがあります。（　）内に入る正しいものを選んでください。",
    choices: [
      {
        text: "甘味",
        correct: false,
        explanation: "甘味成分ではありません。"
      },
      {
        text: "酸味",
        correct: false,
        explanation: "酸味成分ではありません。"
      },
      {
        text: "うま味",
        correct: true,
        explanation: "これらは代表的なうま味成分です。"
      },
      {
        text: "塩味",
        correct: false,
        explanation: "塩味成分ではありません。"
      },
      {
        text: "苦味",
        correct: false,
        explanation: "苦味成分ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『うま味』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "糖類以外の（　）物質には、ステビオサイド、グリチルリチン、アステルパームなどがあります。（　）内に入る正しいものを選んでください。",
    choices: [
      {
        text: "うま味",
        correct: false,
        explanation: "うま味物質ではありません。"
      },
      {
        text: "塩味",
        correct: false,
        explanation: "塩味物質ではありません。"
      },
      {
        text: "苦味",
        correct: false,
        explanation: "苦味物質ではありません。"
      },
      {
        text: "甘味",
        correct: true,
        explanation: "これらは糖類以外の甘味料です。"
      },
      {
        text: "酸味",
        correct: false,
        explanation: "酸味物質ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『甘味』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "適度な（　）は独特の風味として好まれています。（　）内に入る正しいものを選んでください。",
    choices: [
      {
        text: "苦味",
        correct: true,
        explanation: "適度な苦味は独特の風味として好まれます。"
      },
      {
        text: "塩味",
        correct: false,
        explanation: "ここでは塩味ではありません。"
      },
      {
        text: "甘味",
        correct: false,
        explanation: "ここでは甘味ではありません。"
      },
      {
        text: "酸味",
        correct: false,
        explanation: "ここでは酸味ではありません。"
      },
      {
        text: "うま味",
        correct: false,
        explanation: "ここではうま味ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『苦味』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "（　）は生物の生命にかかわる味で、塩化カリウムが代用されることもあります。（　）内に入る正しいものを選んでください。",
    choices: [
      {
        text: "塩味",
        correct: true,
        explanation: "塩味は生命維持に重要な味です。"
      },
      {
        text: "酸味",
        correct: false,
        explanation: "酸味ではありません。"
      },
      {
        text: "うま味",
        correct: false,
        explanation: "うま味ではありません。"
      },
      {
        text: "苦味",
        correct: false,
        explanation: "苦味ではありません。"
      },
      {
        text: "甘味",
        correct: false,
        explanation: "甘味ではありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『塩味』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "味の閾値とは、何を示しているでしょうか。",
    choices: [
      {
        text: "物質の味を感じることができる濃度",
        correct: true,
        explanation: "味の閾値とは、味を感じることができる最小濃度のことです。"
      },
      {
        text: "2種類以上の呈味物質が混ざる味の変化",
        correct: false,
        explanation: "これは味の相互作用です。"
      },
      {
        text: "ゆで卵の卵白に感じる、ぼけたような味。",
        correct: false,
        explanation: "閾値とは関係ありません。"
      },
      {
        text: "舌にのせたときに感じる冷感を伴った味",
        correct: false,
        explanation: "閾値とは関係ありません。"
      },
      {
        text: "その他",
        correct: false,
        explanation: "正解は『物質の味を感じることができる濃度』です。"
      }
    ]
  },

  {
    category: "調理理論",
    question: "異なる味を持つ2種類の物質を混ぜたとき、一方が他方を強める効果を何というでしょうか。",
    choices: [
      {
        text: "抑制効果",
        correct: false,
        explanation: "抑制効果は味を弱める作用です。"
      },
      {
        text: "相乗効果",
        correct: false,
        explanation: "うま味２種類を加えると、その総和より強く感じられる効果のことです。"
      },
      {
        text: "その他",
        correct: true,
        explanation: "『対比効果』が正解です。"
      },
      {
        text: "後追効果",
        correct: false,
        explanation: "味覚用語ではありません。"
      },
      {
        text: "相殺効果",
        correct: false,
        explanation: "味を打ち消し合う意味になります。"
      }
    ]
  },

{
  category: "調理理論",
  question: "味の相互作用として、うま味（多）と塩味（少）を混合した味の変化は、次の内どれでしょうか。",
  choices: [
    {
      text: "甘味が出てくる",
      correct: false,
      explanation: "甘味が出てくるわけではありません。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『うま味を強める』です。"
    },
    {
      text: "うま味を強める",
      correct: true,
      explanation: "少量の塩味を加えることで、うま味が強く感じられます。"
    },
    {
      text: "うま味が弱まる",
      correct: false,
      explanation: "うま味は弱まりません。"
    },
    {
      text: "塩味が弱まる",
      correct: false,
      explanation: "この組み合わせでは、うま味が強調されます。"
    }
  ]
},

{
  category: "調理理論",
  question: "味の相互作用として、塩味（多）と酸味（少）を混合した味の変化は、次の内どれでしょうか。",
  choices: [
    {
      text: "その他",
      correct: false,
      explanation: "正解は『塩味を弱める』です。"
    },
    {
      text: "塩味を弱める",
      correct: true,
      explanation: "少量の酸味を加えることで、塩味が弱く感じられます。"
    },
    {
      text: "酸味を強める",
      correct: false,
      explanation: "酸味が強まるわけではありません。"
    },
    {
      text: "塩味を強める",
      correct: false,
      explanation: "塩味は強まりません。"
    },
    {
      text: "酸味が弱まる",
      correct: false,
      explanation: "酸味が弱まる作用ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "（　）は空気や水、油脂などに分散する揮発性物質によって感じるもので、料理をさらにおいしくします。（　）内に入る正しいものを選んでください。",
  choices: [
    {
      text: "雰囲気",
      correct: false,
      explanation: "雰囲気ではありません。"
    },
    {
      text: "香り",
      correct: true,
      explanation: "香りは食欲をそそり、おいしさを高めます。"
    },
    {
      text: "見栄え",
      correct: false,
      explanation: "見栄えではありません。"
    },
    {
      text: "音",
      correct: false,
      explanation: "音ではありません。"
    },
    {
      text: "塩味",
      correct: false,
      explanation: "塩味ではありません。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『香り』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "焼き肉や焼き魚による主な香気成分は次の内どれでしょうか。",
  choices: [
    {
      text: "アルコール反応",
      correct: false,
      explanation: "正しい名称ではありません。"
    },
    {
      text: "アミノカルボニル反応",
      correct: true,
      explanation: "焼き物特有の香ばしさはアミノカルボニル反応によるものです。"
    },
    {
      text: "アミノバイタル反応",
      correct: false,
      explanation: "存在しない反応名です。"
    },
    {
      text: "アルデヒド反応",
      correct: false,
      explanation: "主な香気成分ではありません。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『アミノカルボニル反応』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "かたい、やわらかい、もちもち、さくさくなど、口で感じる性質のことを何というでしょうか。",
  choices: [
    {
      text: "クリスピー",
      correct: false,
      explanation: "クリスピーは食感の一種です。"
    },
    {
      text: "テクスチャー",
      correct: true,
      explanation: "口で感じる食感や性質をテクスチャーといいます。"
    },
    {
      text: "温度",
      correct: false,
      explanation: "温度ではありません。"
    },
    {
      text: "音",
      correct: false,
      explanation: "音ではありません。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『テクスチャー』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "味噌汁やポタージュをおいしく感じる温度帯は次の内どれでしょうか。",
  choices: [
    {
      text: "90~98℃",
      correct: false,
      explanation: "熱すぎて味を感じにくくなります。"
    },
    {
      text: "70~78℃",
      correct: false,
      explanation: "やや高めの温度です。"
    },
    {
      text: "60～68℃",
      correct: true,
      explanation: "汁物をおいしく感じやすい適温です。"
    },
    {
      text: "80~88℃",
      correct: false,
      explanation: "高温すぎます。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『60～68℃』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "赤ワインをおいしく感じる温度帯は次の内どれでしょうか。",
  choices: [
    {
      text: "-2~3℃",
      correct: false,
      explanation: "冷やしすぎです。"
    },
    {
      text: "7～12℃",
      correct: false,
      explanation: "白ワイン向きの温度帯です。"
    },
    {
      text: "12~15℃",
      correct: true,
      explanation: "赤ワインは12～15℃程度でおいしく感じられます。"
    },
    {
      text: "2~5℃",
      correct: false,
      explanation: "低温すぎます。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『12~15℃』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "調理をするときの（A）は、反射的に食欲を引き起こします。てんぷらを揚げる（A）、野菜を切る（A）など。（A）に入る正しいものを選んでください。",
  choices: [
    {
      text: "食感",
      correct: false,
      explanation: "ここでは調理中に聞こえるものを指しています。"
    },
    {
      text: "温度",
      correct: false,
      explanation: "温度ではありません。"
    },
    {
      text: "見た目",
      correct: false,
      explanation: "見た目ではありません。"
    },
    {
      text: "音",
      correct: true,
      explanation: "調理中の音は食欲を刺激します。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『音』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "天候や気温・湿度などの気象状況、季節の寒暖や時刻などの要因は、次の内どの要因でしょうか。",
  choices: [
    {
      text: "環境的要因",
      correct: true,
      explanation: "周囲の環境による影響を環境的要因といいます。"
    },
    {
      text: "生理的要因",
      correct: false,
      explanation: "身体の状態によるものではありません。"
    },
    {
      text: "心理的要因",
      correct: false,
      explanation: "心理状態によるものではありません。"
    },
    {
      text: "後天的要因",
      correct: false,
      explanation: "後天的要因ではありません。"
    },
    {
      text: "先天的要因",
      correct: false,
      explanation: "先天的要因ではありません。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『環境的要因』です。"
    }
  ]
},

{
  category: "調理理論",
  question: "良好な健康状態のもとで、適度な空腹感と食欲を持つことがおいしさに関与する要因は、次の内どの要因でしょうか。",
  choices: [
    {
      text: "心理的要因",
      correct: false,
      explanation: "心理状態による要因ではありません。"
    },
    {
      text: "後天的要因",
      correct: false,
      explanation: "後天的要因ではありません。"
    },
    {
      text: "先天的要因",
      correct: false,
      explanation: "先天的要因ではありません。"
    },
    {
      text: "生理的要因",
      correct: true,
      explanation: "健康状態や空腹感などは生理的要因です。"
    },
    {
      text: "環境的要因",
      correct: false,
      explanation: "環境による要因ではありません。"
    },
    {
      text: "その他",
      correct: false,
      explanation: "正解は『生理的要因』です。"
    }
  ]
},
{
  category: "調理理論",
  question: "非加熱調理操作には、計量、洗浄、混合、粉砕、成型、圧搾、冷却のほかに、何があるでしょうか。次の内から選んでください。",
  choices: [
    {
      text: "浸戚、切砕、かくはん、磨砕、濾過、冷凍、解凍",
      correct: false,
      explanation: "漢字や表記に誤りがあります。"
    },
    {
      text: "浸漬、切砕、攪拌、摩砕、ろ過、冷凍、解凍",
      correct: false,
      explanation: "『摩砕』ではなく『磨砕』が正しいです。"
    },
    {
      text: "浸漬、切砕、成型、ろ過、冷蔵、冷凍、解凍",
      correct: false,
      explanation: "『冷蔵』は含まれません。"
    },
    {
      text: "浸漬、切砕、攪拌、磨砕、濾過、冷凍、解凍",
      correct: true,
      explanation: "非加熱調理操作の正しい組み合わせです。"
    }
  ]
},

{
  category: "調理理論",
  question: "計量は、調理に（　　）を持たせるうえで、基本的な調理操作である。（　　）に入る適切な語句を選んでください。",
  choices: [
    {
      text: "物理性",
      correct: false,
      explanation: "適切な表現ではありません。"
    },
    {
      text: "具体性",
      correct: false,
      explanation: "具体性ではありません。"
    },
    {
      text: "再現性",
      correct: true,
      explanation: "計量することで同じ品質を再現できます。"
    },
    {
      text: "客観性",
      correct: false,
      explanation: "ここでは再現性が正解です。"
    }
  ]
},

{
  category: "調理理論",
  question: "洗浄は食品を水や（　　）などで洗う調理操作である。（　　）に入る適切な語句を選んでください。",
  choices: [
    {
      text: "アルコール",
      correct: false,
      explanation: "一般的な洗浄方法ではありません。"
    },
    {
      text: "熱湯",
      correct: false,
      explanation: "ここでは食塩水が適切です。"
    },
    {
      text: "食塩水",
      correct: true,
      explanation: "食品によっては食塩水で洗浄します。"
    },
    {
      text: "塩素",
      correct: false,
      explanation: "ここでは食塩水が正解です。"
    }
  ]
},

{
  category: "調理理論",
  question: "米を洗う洗浄方法として適切なのは、次の内、どれでしょうか。",
  choices: [
    {
      text: "こすり洗い",
      correct: false,
      explanation: "強くこすると米が傷みます。"
    },
    {
      text: "混ぜ洗い",
      correct: true,
      explanation: "現在は混ぜるようにやさしく洗います。"
    },
    {
      text: "研ぎ洗い",
      correct: false,
      explanation: "強く研ぐ方法は一般的ではありません。"
    },
    {
      text: "もみ洗い",
      correct: false,
      explanation: "適切な方法ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "食品を浸漬させる目的として、次の内、間違っているのはどれでしょうか。",
  choices: [
    {
      text: "旨味成分を抽出",
      correct: false,
      explanation: "浸漬の目的の一つです。"
    },
    {
      text: "灰汁などの不味成分を除く",
      correct: false,
      explanation: "不味成分を除去する目的があります。"
    },
    {
      text: "香味成分を高める",
      correct: true,
      explanation: "浸漬の主な目的ではありません。"
    },
    {
      text: "褐変防止",
      correct: false,
      explanation: "浸漬で褐変を防止できます。"
    },
    {
      text: "調味料を浸透",
      correct: false,
      explanation: "調味液を浸透させる目的があります。"
    },
    {
      text: "テクスチャー（食感）の向上",
      correct: false,
      explanation: "食感を良くする効果があります。"
    }
  ]
},

{
  category: "調理理論",
  question: "皮をむいたリンゴや梨は、酵素の働きで酸素と結び付いて褐変しますが、浸漬して防止する液体は次の内どれでしょうか。",
  choices: [
    {
      text: "３％食塩水",
      correct: false,
      explanation: "濃度が高すぎます。"
    },
    {
      text: "ぬか水",
      correct: false,
      explanation: "褐変防止には一般的ではありません。"
    },
    {
      text: "冷水",
      correct: false,
      explanation: "冷水だけでは十分ではありません。"
    },
    {
      text: "２～５％酢水",
      correct: false,
      explanation: "一般的には1％食塩水を用います。"
    },
    {
      text: "１％食塩水",
      correct: true,
      explanation: "1％程度の食塩水で褐変を防止できます。"
    }
  ]
},

{
  category: "調理理論",
  question: "干ししいたけを浸漬したまま、長時間放置すると何が減少するのでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "旨味成分",
      correct: true,
      explanation: "長時間放置すると旨味成分が流出します。"
    },
    {
      text: "色あい",
      correct: false,
      explanation: "主に減少するのは旨味成分です。"
    },
    {
      text: "酵素",
      correct: false,
      explanation: "ここでは旨味成分が正解です。"
    },
    {
      text: "食感の良さ",
      correct: false,
      explanation: "主に旨味成分が減少します。"
    }
  ]
},

{
  category: "調理理論",
  question: "野菜類を１％以上の食塩水に浸し、その後に調味液に浸漬すると、調味料はどうなるでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "細胞内に入っていく",
      correct: true,
      explanation: "浸透圧によって調味料が細胞内に入りやすくなります。"
    },
    {
      text: "濃くなる",
      correct: false,
      explanation: "濃度が変わることを表しているわけではありません。"
    },
    {
      text: "薄くなる",
      correct: false,
      explanation: "薄くなるわけではありません。"
    },
    {
      text: "増える",
      correct: false,
      explanation: "量が増えるわけではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "塩漬けしたかずのこを塩抜きするのに、水ではなく１％程度の薄い食塩水を用いて浸漬する理由として、次の内間違っているのはどれでしょうか。",
  choices: [
    {
      text: "内部の塩抜きが十分に行われないため",
      correct: false,
      explanation: "急激な塩抜きを防ぐためです。"
    },
    {
      text: "表面の旨味が抜けるため",
      correct: false,
      explanation: "旨味を保つ目的があります。"
    },
    {
      text: "入り込んだ塩水の影響で濃度のバランスがとれるため",
      correct: false,
      explanation: "濃度差をゆるやかにします。"
    },
    {
      text: "味付けを薄くするため",
      correct: true,
      explanation: "味付けを薄くすることが目的ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "切砕は、食品の食べられない部分を取り除き、形を整えて加熱を容易にするだけでなく、その他には何があるでしょうか。次の中から間違っているものを選んでください。",
  choices: [
    {
      text: "盛付けを良くする",
      correct: false,
      explanation: "切り方は盛付けにも影響します。"
    },
    {
      text: "味付けを良くする",
      correct: false,
      explanation: "味がしみ込みやすくなります。"
    },
    {
      text: "細胞内に入っていく",
      correct: false,
      explanation: "調味料が浸透しやすくなります。"
    },
    {
      text: "消化・吸収を助ける",
      correct: false,
      explanation: "食べやすくなることで消化を助けます。"
    },
    {
      text: "作業効率が上がる",
      correct: true,
      explanation: "主な目的ではありません。"
    },
    {
      text: "テクスチャーが変化する",
      correct: false,
      explanation: "切り方によって食感が変化します。"
    }
  ]
},

{
  category: "調理理論",
  question: "包丁の切り方には、垂直圧し切り、押し出し切り、引き切りがありますが、平均的な速度が速い切り方は、次の内どれでしょうか。",
  choices: [
    {
      text: "どれも同じ",
      correct: false,
      explanation: "切り方によって速度に違いがあります。"
    },
    {
      text: "垂直圧し切り、あるいは押し出し切り",
      correct: false,
      explanation: "最も速い組み合わせではありません。"
    },
    {
      text: "垂直圧し切り、あるいは引き切り",
      correct: false,
      explanation: "押し出し切りも速度が速い切り方です。"
    },
    {
      text: "引き切り、あるいは押し出し切り",
      correct: true,
      explanation: "引き切りや押し出し切りは効率よく切れるため速度が速いです。"
    }
  ]
},

{
  category: "調理理論",
  question: "食品に磨砕、粉砕する調理操作をすると、何の成分が発生するでしょうか。次の中から間違っているものを選んでください。",
  choices: [
    {
      text: "かおり",
      correct: false,
      explanation: "磨砕や粉砕によって香りが発生します。"
    },
    {
      text: "香気",
      correct: false,
      explanation: "香気成分が発生します。"
    },
    {
      text: "塩味",
      correct: true,
      explanation: "塩味成分が発生するわけではありません。"
    },
    {
      text: "辛味",
      correct: false,
      explanation: "辛味成分が出ることがあります。"
    }
  ]
},

{
  category: "調理理論",
  question: "圧搾の調理操作で、次の中から間違っているものを選んでください。",
  choices: [
    {
      text: "果汁を搾る",
      correct: false,
      explanation: "圧搾による操作です。"
    },
    {
      text: "豆腐の水切り",
      correct: false,
      explanation: "圧力をかけて水分を除きます。"
    },
    {
      text: "おにぎり作り",
      correct: true,
      explanation: "おにぎり作りは圧搾操作ではありません。"
    },
    {
      text: "こしあん作り",
      correct: false,
      explanation: "水分をしぼる工程があります。"
    }
  ]
},

{
  category: "調理理論",
  question: "粉や粒状のものを一定の大きさの網目を通過させる（ふるう）ことで、細かいものとあらいものとを分けたり、（　　　　）均一に混合したりすることである。（　　）に入る適切な語句を選んでください。",
  choices: [
    {
      text: "生地をサラサラさせる",
      correct: false,
      explanation: "適切な表現ではありません。"
    },
    {
      text: "旨味の仕分けをする",
      correct: false,
      explanation: "ふるう目的ではありません。"
    },
    {
      text: "空気を含ませる",
      correct: true,
      explanation: "ふるうことで空気を含ませ、均一に混合できます。"
    },
    {
      text: "質感を良くする",
      correct: false,
      explanation: "直接的な表現ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "冷却の調理操作で、次の中から間違っているものを選んでください。",
  choices: [
    {
      text: "ゼラチンを凝固させる",
      correct: false,
      explanation: "冷却によってゼラチンは固まります。"
    },
    {
      text: "果汁の水分を冷やして凍結させる",
      correct: true,
      explanation: "凍結は冷凍操作であり、冷却とは異なります。"
    },
    {
      text: "加熱後の色素を安定させる",
      correct: false,
      explanation: "冷却には色素を安定させる働きがあります。"
    },
    {
      text: "食品を保存する",
      correct: false,
      explanation: "冷却によって保存性が高まります。"
    }
  ]
},

{
  category: "調理理論",
  question: "さつまいもやバナナを保管する場合、どの温度から低温障害が起こるでしょうか。次のうちから選んでください。",
  choices: [
    {
      text: "３℃以下",
      correct: false,
      explanation: "低すぎる温度です。"
    },
    {
      text: "１０℃以下",
      correct: true,
      explanation: "10℃以下で低温障害が起こりやすくなります。"
    },
    {
      text: "４℃～６℃",
      correct: false,
      explanation: "すでに低温障害が起こる範囲です。"
    },
    {
      text: "７℃～９℃",
      correct: false,
      explanation: "10℃以下が基準です。"
    }
  ]
},

{
  category: "調理理論",
  question: "野菜類や果実類を熱湯か水蒸気で短時間加熱することで酵素を失活させる処理を何というでしょうか。",
  choices: [
    {
      text: "アミノカルボニル反応",
      correct: false,
      explanation: "加熱による褐変反応です。"
    },
    {
      text: "ドリップ",
      correct: false,
      explanation: "解凍時に流出する液汁のことです。"
    },
    {
      text: "ブランチング",
      correct: true,
      explanation: "短時間加熱して酵素を失活させる処理です。"
    },
    {
      text: "ピッティング",
      correct: false,
      explanation: "種を取り除く操作です。"
    }
  ]
},

{
  category: "調理理論",
  question: "食品を時間をかけて冷凍すると、食品内部では、どのようなことが起こっているでしょうか。",
  choices: [
    {
      text: "冷やされてシャキシャキした食感になる",
      correct: false,
      explanation: "時間をかけた冷凍では品質が低下します。"
    },
    {
      text: "凍結して身が引き締まる",
      correct: false,
      explanation: "主な問題は組織の損傷です。"
    },
    {
      text: "組織の損傷が起こっている",
      correct: true,
      explanation: "大きな氷結晶ができ、組織が壊れます。"
    },
    {
      text: "油焼けが起こっている",
      correct: false,
      explanation: "必ず起こる現象ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "冷凍した食品を解凍したときに、食品内部から液汁が流出して起こることで、間違っているのは、次の内どれでしょうか。",
  choices: [
    {
      text: "色が落ちる",
      correct: true,
      explanation: "ドリップによる主な影響ではありません。"
    },
    {
      text: "風味が落ちる",
      correct: false,
      explanation: "ドリップによって風味が低下します。"
    },
    {
      text: "栄養成分が抜ける",
      correct: false,
      explanation: "栄養成分も流出します。"
    },
    {
      text: "旨味が抜ける",
      correct: false,
      explanation: "旨味成分が流れ出ます。"
    }
  ]
},

{
  category: "調理理論",
  question: "食品を解凍するときに、次の中から衛生上好ましくない解凍はどれでしょうか。",
  choices: [
    {
      text: "冷蔵庫に入れて解凍する",
      correct: false,
      explanation: "安全な解凍方法です。"
    },
    {
      text: "室温３０℃以上で解凍する",
      correct: true,
      explanation: "細菌が増殖しやすく衛生上危険です。"
    },
    {
      text: "直接加熱して解凍する",
      correct: false,
      explanation: "食品によっては可能です。"
    },
    {
      text: "電子レンジで解凍する",
      correct: false,
      explanation: "適切に行えば安全です。"
    }
  ]
},{
  category: "調理理論",
  question: "加熱調理には、水を用いる（　）式加熱と水を用いない（　）式加熱があります。（　）内に入る適切な語句を選んでください。",
  choices: [
    {
      text: "低温 高温",
      correct: false,
      explanation: "温度による分類ではありません。"
    },
    {
      text: "湿 幹",
      correct: false,
      explanation: "『幹』ではなく『乾』が正しいです。"
    },
    {
      text: "湿 乾",
      correct: true,
      explanation: "水を用いる加熱は湿式、水を用いない加熱は乾式です。"
    },
    {
      text: "水圧 高圧",
      correct: false,
      explanation: "圧力による分類ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "ゆでるは、食品の下処理に用いられることが多く、（　　）の熱湯を用いて（　　）でゆでることが原則である。（　）内に入る適切な語句を選んでください。",
  choices: [
    {
      text: "たっぷり 高温短時間",
      correct: true,
      explanation: "たっぷりの熱湯で高温短時間にゆでるのが基本です。"
    },
    {
      text: "ひたひた 適温適当な時間",
      correct: false,
      explanation: "基本的なゆで方ではありません。"
    },
    {
      text: "少量 高温長時間",
      correct: false,
      explanation: "長時間加熱は適切ではありません。"
    },
    {
      text: "適量 低温短時間",
      correct: false,
      explanation: "低温では十分に加熱できません。"
    }
  ]
},

{
  category: "調理理論",
  question: "ゆでる目的には、熱湯の中に食塩、米ぬか、重曹などを加えて加熱することで、あく抜き、（　　）、発色、（　　　）などに利用される。（　）内に入る適切な語句を選んでください。",
  choices: [
    {
      text: "吸水 硬化",
      correct: false,
      explanation: "適切な組み合わせではありません。"
    },
    {
      text: "軟化 煮崩れ防止",
      correct: true,
      explanation: "ゆでることで軟化や煮崩れ防止の効果があります。"
    },
    {
      text: "加熱 臭み抜き",
      correct: false,
      explanation: "設問の内容とは異なります。"
    },
    {
      text: "洗浄 脱水",
      correct: false,
      explanation: "主な目的ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "煮るは、調味料成分の食品への浸透ともう一つの効果は何でしょうか。次の中から選んでください。",
  choices: [
    {
      text: "食品成分の溶出",
      correct: true,
      explanation: "煮ることで食品成分が煮汁へ溶け出します。"
    },
    {
      text: "加熱して食べられやすくする",
      correct: false,
      explanation: "設問で問われているもう一つの効果ではありません。"
    },
    {
      text: "発色成分の流出",
      correct: false,
      explanation: "主な効果ではありません。"
    },
    {
      text: "香気成分の溶出",
      correct: false,
      explanation: "限定的な内容です。"
    }
  ]
},

{
  category: "調理理論",
  question: "煮物の特徴として、煮汁が材料の半分以下と少ない、またはほとんどない煮物の種類は何でしょうか。次の中から選んでください。",
  choices: [
    {
      text: "甘露煮",
      correct: false,
      explanation: "煮汁が非常に少ない煮物とは限りません。"
    },
    {
      text: "つくだ煮",
      correct: false,
      explanation: "保存性を高めた煮物です。"
    },
    {
      text: "煮つけ",
      correct: true,
      explanation: "少ない煮汁で調理する煮物です。"
    },
    {
      text: "含め煮",
      correct: false,
      explanation: "煮汁を含ませる調理法です。"
    }
  ]
},

{
  category: "調理理論",
  question: "煮物で、煮汁が少なくかくはんによって煮くずれが起こる場合に、その他の効果的な方法は何でしょうか。次の中から選んでください。",
  choices: [
    {
      text: "火を止めて蒸らす",
      correct: false,
      explanation: "煮崩れ防止の主な方法ではありません。"
    },
    {
      text: "そのまま放置する",
      correct: false,
      explanation: "適切な方法ではありません。"
    },
    {
      text: "落とし蓋をする",
      correct: true,
      explanation: "落とし蓋をすると煮汁が均一に回り煮崩れを防げます。"
    },
    {
      text: "煮汁を増やす",
      correct: false,
      explanation: "根本的な対策ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "蒸す調理操作の利点として正しいものはどれでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "火加減が難しいが、適度なテクスチャーが得られ、なめらか",
      correct: false,
      explanation: "蒸す操作は比較的簡単です。"
    },
    {
      text: "操作は単純、放置していてもやりすぎることはなく、誰でも可能",
      correct: false,
      explanation: "加熱しすぎる場合もあります。"
    },
    {
      text: "火の通りが早く、加熱中の調味がしやすい、焦げ付かない",
      correct: false,
      explanation: "蒸し調理の特徴とは異なります。"
    },
    {
      text: "操作が簡単、煮崩れやうま味成分の流出が少なく、焦げない",
      correct: true,
      explanation: "蒸し調理はうま味を保ちやすい調理法です。"
    }
  ]
},

{
  category: "調理理論",
  question: "茶碗蒸しを作るときに、すだちを防ぐための蒸し器内の適温は何℃くらいでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "８５～９０℃",
      correct: true,
      explanation: "高温になりすぎない85～90℃程度が適温です。"
    },
    {
      text: "６５～７０℃",
      correct: false,
      explanation: "温度が低すぎます。"
    },
    {
      text: "７５～８０℃",
      correct: false,
      explanation: "やや低めです。"
    },
    {
      text: "９５～１００℃",
      correct: false,
      explanation: "高すぎるとすが入ります。"
    }
  ]
},

{
  category: "調理理論",
  question: "炊飯は、洗米、（　）、（　）、加熱、（　）、という一連の調理操作を連続的に行い、米から飯に変化させます。（　）内に入る適切な語句は何でしょうか。",
  choices: [
    {
      text: "洗浄、かくはん、放置",
      correct: false,
      explanation: "炊飯工程として適切ではありません。"
    },
    {
      text: "加水、浸漬、蒸らし",
      correct: true,
      explanation: "炊飯の基本工程です。"
    },
    {
      text: "計量、浸水、蒸す",
      correct: false,
      explanation: "設問の流れとは異なります。"
    },
    {
      text: "脱水、点火、熟成",
      correct: false,
      explanation: "炊飯工程ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "炊飯方法は、米に一定の水を加え、米粒に水がほぼ吸収される炊き干し法がありますが、（　　）と（　　）が必要です。（　）内に入る適切な語句は何でしょうか。",
  choices: [
    {
      text: "水の品質 蒸らし時間",
      correct: false,
      explanation: "設問の答えとしては不十分です。"
    },
    {
      text: "米の計量 火加減",
      correct: false,
      explanation: "重要ですが設問の正解ではありません。"
    },
    {
      text: "水の温度 米の産地条件",
      correct: false,
      explanation: "主な条件ではありません。"
    },
    {
      text: "水の計量 適度な加熱条件",
      correct: true,
      explanation: "炊き干し法では正確な水加減と加熱条件が重要です。"
    }
  ]
},

{
  category: "調理理論",
  question: "次の焼き物の種類で、直火焼きなものはどれでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "天火焼き",
      correct: false,
      explanation: "天火焼きは間接的に加熱する方法です。"
    },
    {
      text: "包み焼き",
      correct: false,
      explanation: "包んで加熱するため直火焼きではありません。"
    },
    {
      text: "鍋焼き",
      correct: false,
      explanation: "鍋を介して加熱する方法です。"
    },
    {
      text: "網焼き",
      correct: true,
      explanation: "網焼きは火に直接あてて焼く直火焼きです。"
    }
  ]
},

{
  category: "調理理論",
  question: "次の焼き物の種類で、間接焼きなものはどれでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "つるし焼き",
      correct: false,
      explanation: "火に近づけて焼く方法です。"
    },
    {
      text: "串焼き",
      correct: false,
      explanation: "直火で焼くことが多いです。"
    },
    {
      text: "網焼き",
      correct: false,
      explanation: "網越しに直接火で焼きます。"
    },
    {
      text: "鍋焼き",
      correct: true,
      explanation: "鍋を介して加熱するため間接焼きです。"
    }
  ]
},

{
  category: "調理理論",
  question: "焼き物は高温加熱をすることで焼き色が付きますが、その風味や香りの多くは何によるものでしょうか。次の中から選んでください。",
  choices: [
    {
      text: "タンパク質分解",
      correct: false,
      explanation: "主な焼き色や香りの原因ではありません。"
    },
    {
      text: "アミノカルボニル反応",
      correct: true,
      explanation: "メイラード反応とも呼ばれ、焼き色や香りを生みます。"
    },
    {
      text: "匂いで想像される感覚",
      correct: false,
      explanation: "化学反応を表していません。"
    },
    {
      text: "ベルの法則",
      correct: false,
      explanation: "調理理論とは関係ありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "炒め物は、（　　）焼きの一つである。（　　）に入る適切な語句は何でしょうか。次の中から選んでください。",
  choices: [
    {
      text: "つるし",
      correct: false,
      explanation: "炒め物の分類ではありません。"
    },
    {
      text: "間接",
      correct: true,
      explanation: "炒め物は鍋やフライパンを介して加熱する間接焼きです。"
    },
    {
      text: "直火",
      correct: false,
      explanation: "直接火にあてる調理ではありません。"
    },
    {
      text: "鉄板",
      correct: false,
      explanation: "焼き方の分類名ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "食品を油脂で炒めた後、調味料やだし汁などを加えて加熱する炒め物の種類は何でしょうか。次の中から選んでください。",
  choices: [
    {
      text: "炒め焼き",
      correct: false,
      explanation: "調味液を加えて煮る調理法ではありません。"
    },
    {
      text: "炒めもの",
      correct: false,
      explanation: "一般的な名称です。"
    },
    {
      text: "炒め揚げ",
      correct: false,
      explanation: "油で揚げる調理法です。"
    },
    {
      text: "炒め煮",
      correct: true,
      explanation: "炒めた後にだし汁などを加えて加熱する方法です。"
    }
  ]
},

{
  category: "調理理論",
  question: "おいしく炒め物を作るときに考えられる事柄で、間違っているのは、次の内どれでしょうか。",
  choices: [
    {
      text: "食品との間に油の膜ができ、調味料の浸透が少し妨げられる",
      correct: false,
      explanation: "油膜による特徴として正しい内容です。"
    },
    {
      text: "食品をひっくり返したり、混ぜたりする",
      correct: false,
      explanation: "均一に加熱するために必要です。"
    },
    {
      text: "水分がある間は食品の温度は１００℃を超えることはない",
      correct: false,
      explanation: "水分蒸発中は温度上昇が制限されます。"
    },
    {
      text: "油脂を極力少量にして使用する",
      correct: true,
      explanation: "適量の油脂を使用しないと炒め物はおいしく仕上がりません。"
    }
  ]
},

{
  category: "調理理論",
  question: "揚げるは、食品を油脂中で加熱しますが、（　　）と（　　）の交替が起こっています。（　　）内に入る適切な語句を選んでください。",
  choices: [
    {
      text: "うま味 成分",
      correct: false,
      explanation: "調理中の主な現象ではありません。"
    },
    {
      text: "風味 油",
      correct: false,
      explanation: "適切な組み合わせではありません。"
    },
    {
      text: "温度 水分",
      correct: false,
      explanation: "交替するものではありません。"
    },
    {
      text: "水 油脂",
      correct: true,
      explanation: "揚げ物では水分が抜け、油脂が入る現象が起こります。"
    }
  ]
},

{
  category: "調理理論",
  question: "揚げ物は通常、何℃～何℃で加熱されるものが多いですか。",
  choices: [
    {
      text: "１５０～１８０℃",
      correct: true,
      explanation: "一般的な揚げ物の適温です。"
    },
    {
      text: "１４０～１６０℃",
      correct: false,
      explanation: "やや低めです。"
    },
    {
      text: "１３０～１４０℃",
      correct: false,
      explanation: "低温すぎます。"
    },
    {
      text: "１７０～１９０℃",
      correct: false,
      explanation: "高温調理もありますが一般的範囲ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "使用後の油脂の保存方法として、間違っているものはどれでしょうか。",
  choices: [
    {
      text: "光・振動が少ない場所に保存",
      correct: false,
      explanation: "油の劣化防止に適しています。"
    },
    {
      text: "湿度の低い場所で保存",
      correct: false,
      explanation: "保存環境として適切です。"
    },
    {
      text: "使用した油脂に旨味が残っているので、そのまま保存",
      correct: true,
      explanation: "使用後の油はろ過などをして適切に保存する必要があります。"
    },
    {
      text: "蓋つきの容器に入れて保存",
      correct: false,
      explanation: "酸化防止に有効です。"
    }
  ]
},

{
  category: "調理理論",
  question: "油の温度を知るために、てんぷらなどの衣を落として判断しますが、沈んだ衣が、なかなか浮き上がってこない状態は何℃くらいでしょうか。",
  choices: [
    {
      text: "１６０～１７０℃",
      correct: false,
      explanation: "中温程度です。"
    },
    {
      text: "１５０℃以下",
      correct: true,
      explanation: "低温状態では衣がすぐ浮き上がりません。"
    },
    {
      text: "１５０～１６０℃",
      correct: false,
      explanation: "低めの中温です。"
    },
    {
      text: "１８０℃以上",
      correct: false,
      explanation: "高温ではすぐ浮き上がります。"
    }
  ]
},{
  category: "調理理論",
  question: "調理施設とは、一般に食材の搬入から（　　）、加熱調理、（　　）、配膳、（　　）、収納、保管までの一連の作業を行う施設をいう。（　　）内に入る適切な語句を選んでください。",
  choices: [
    {
      text: "梱包 衛生管理 整理",
      correct: false,
      explanation: "調理工程として適切ではありません。"
    },
    {
      text: "下処理 盛り付け 洗浄",
      correct: true,
      explanation: "調理施設では、下処理から盛り付け、洗浄まで一連の作業が行われます。"
    },
    {
      text: "仕分け 無水調理 分別",
      correct: false,
      explanation: "一般的な調理工程の流れではありません。"
    },
    {
      text: "下処理 非加熱調理 仕上げ",
      correct: false,
      explanation: "設問の流れと一致しません。"
    }
  ]
},

{
  category: "調理理論",
  question: "調理施設内には多くの付帯設備が必要となりますが、次の内、不要な設備はどれでしょうか。",
  choices: [
    {
      text: "給湯設備 電気設備 衛生設備",
      correct: false,
      explanation: "調理施設には必要な設備です。"
    },
    {
      text: "吸水設備 IT設備 通信設備",
      correct: true,
      explanation: "IT設備や通信設備は一般的な調理施設の必須設備ではありません。"
    },
    {
      text: "電気設備 換気設備 冷暖房設備",
      correct: false,
      explanation: "快適で安全な調理環境に必要です。"
    },
    {
      text: "排水設備 空調設備 輸送設備",
      correct: false,
      explanation: "衛生管理や作業効率に必要です。"
    }
  ]
},

{
  category: "調理理論",
  question: "調理施設内は室温（　～　）℃、湿度（　～　）％になるよう空調設備を設置することが必要である。（　）内に入る適切な語句を選んでください。",
  choices: [
    {
      text: "２６～３５、１０～２０",
      correct: false,
      explanation: "室温・湿度ともに適切ではありません。"
    },
    {
      text: "５～１０、６０～７０",
      correct: false,
      explanation: "室温が低すぎます。"
    },
    {
      text: "１８～２５、４０～６０",
      correct: true,
      explanation: "快適で衛生的な調理環境の目安です。"
    },
    {
      text: "１０～２０、２０～３０",
      correct: false,
      explanation: "湿度が低すぎます。"
    }
  ]
},

{
  category: "調理理論",
  question: "非加熱調理器具は、主にどんな調理作業用として使われるのは、次の内どれでしょうか。",
  choices: [
    {
      text: "加熱、圧搾、磨砕",
      correct: false,
      explanation: "加熱は非加熱調理器具には含まれません。"
    },
    {
      text: "洗浄、切砕、混合",
      correct: true,
      explanation: "非加熱調理器具は下処理や混合作業などに使用されます。"
    },
    {
      text: "運搬、かくはん、粉砕",
      correct: false,
      explanation: "運搬は調理作業ではありません。"
    },
    {
      text: "供託、ろ過、計量",
      correct: false,
      explanation: "供託は調理作業ではありません。"
    }
  ]
},

{
  category: "調理理論",
  question: "はかりは、食品などの重量の計量に用いられますが、最大重量のことを何というでしょうか。",
  choices: [
    {
      text: "感量",
      correct: false,
      explanation: "感量は最小表示単位のことです。"
    },
    {
      text: "質量",
      correct: false,
      explanation: "質量は物体そのものの量です。"
    },
    {
      text: "秤量",
      correct: true,
      explanation: "秤量とは、はかりで計量できる最大重量のことです。"
    },
    {
      text: "容量",
      correct: false,
      explanation: "容量は体積を表します。"
    }
  ]
},

{
  category: "調理理論",
  question: "計量カップ、計量スプーンについて、次の内、間違っているものはどれでしょうか。",
  choices: [
    {
      text: "計量スプーンは、容量を計るものである",
      correct: false,
      explanation: "計量スプーンは容量を量ります。"
    },
    {
      text: "１０ｍｌ用の計量スプーンがある",
      correct: false,
      explanation: "10mlの計量スプーンもあります。"
    },
    {
      text: "１８０ｍｌ用の計量カップがある",
      correct: false,
      explanation: "米用などで使用されます。"
    },
    {
      text: "米一合は、計量カップで１５０ｍｌの目盛りで合わせる",
      correct: true,
      explanation: "米一合は180mlです。"
    }
  ]
},

{
  category: "調理理論",
  question: "アルコールや水銀などを利用した棒状の温度計は、次の内どれでしょうか。",
  choices: [
    {
      text: "放射温度計",
      correct: false,
      explanation: "非接触型温度計です。"
    },
    {
      text: "熱電対温度計",
      correct: false,
      explanation: "電気的な温度計です。"
    },
    {
      text: "電気抵抗温度計",
      correct: false,
      explanation: "電気抵抗を利用します。"
    },
    {
      text: "液体膨張温度計",
      correct: true,
      explanation: "液体の膨張を利用した温度計です。"
    }
  ]
},

{
  category: "調理理論",
  question: "食品の表面温度を測定する非接触型の温度計は次の内どれでしょうか。",
  choices: [
    {
      text: "電気抵抗温度計",
      correct: false,
      explanation: "接触して測定します。"
    },
    {
      text: "熱電対温度計",
      correct: false,
      explanation: "先端を接触させて測定します。"
    },
    {
      text: "放射温度計",
      correct: true,
      explanation: "赤外線を利用して非接触で温度を測定します。"
    },
    {
      text: "液体膨張温度計",
      correct: false,
      explanation: "液体膨張を利用する接触型です。"
    }
  ]
},

{
  category: "調理理論",
  question: "切砕器具として使用する包丁の目的として間違っているのは、次の内どれでしょうか。",
  choices: [
    {
      text: "見た目をきれいに整えたりする",
      correct: false,
      explanation: "包丁には見た目を整える目的があります。"
    },
    {
      text: "食べやすい形に切る",
      correct: false,
      explanation: "切り方で食べやすさを調整します。"
    },
    {
      text: "食べられない部分を取り除いたりする",
      correct: false,
      explanation: "下処理として重要です。"
    },
    {
      text: "調味料の浸透しにくい形に切ったりする",
      correct: true,
      explanation: "通常は調味料が浸透しやすいように切ります。"
    }
  ]
},

{
  category: "調理理論",
  question: "鋼製の包丁の特徴として、正しいのは次の内どれでしょうか。",
  choices: [
    {
      text: "軽くて安全",
      correct: false,
      explanation: "鋼製包丁は比較的重さがあります。"
    },
    {
      text: "錆びないので手入れが簡単",
      correct: false,
      explanation: "鋼製は錆びやすいため手入れが必要です。"
    },
    {
      text: "研ぐことで切れ味を保つことができる",
      correct: true,
      explanation: "研ぎ直すことで鋭い切れ味を維持できます。"
    },
    {
      text: "摩耗しない",
      correct: false,
      explanation: "使用によって摩耗します。"
    }
  ]
},

{
  category: "調理理論",
  question: "和包丁、洋包丁、中国包丁の特徴として間違っているのは次の内どれでしょうか。",
  choices: [
    {
      text: "牛刀は両刃である",
      correct: false,
      explanation: "牛刀は洋包丁で、一般的に両刃です。"
    },
    {
      text: "出刃包丁は片刃である",
      correct: false,
      explanation: "出刃包丁は和包丁で、通常は片刃です。"
    },
    {
      text: "洋包丁、中国包丁は両刃である",
      correct: false,
      explanation: "洋包丁や中国包丁は一般的に両刃です。"
    },
    {
      text: "和包丁の菜切りは片刃である",
      correct: true,
      explanation: "菜切り包丁は両刃のものが一般的です。"
    }
  ]
},

{
  category: "調理理論",
  question: "包丁の刃先が波型になっているのは、何用の包丁でしょうか。",
  choices: [
    {
      text: "フルーツ用",
      correct: false,
      explanation: "波型の刃は一般的ではありません。"
    },
    {
      text: "チーズ切り用",
      correct: false,
      explanation: "チーズ用包丁には穴あきなどがあります。"
    },
    {
      text: "パン切り用",
      correct: true,
      explanation: "パン切り包丁は波型の刃でパンをつぶさず切れます。"
    },
    {
      text: "魚用",
      correct: false,
      explanation: "魚用包丁は通常ストレート刃です。"
    }
  ]
},

{
  category: "調理理論",
  question: "合成樹脂製のまな板の特徴として、正しいのはどれでしょうか。",
  choices: [
    {
      text: "刃あたりは木製に比べて優れている",
      correct: false,
      explanation: "木製の方が刃あたりは優れています。"
    },
    {
      text: "柔らかくキズが付きやすい",
      correct: false,
      explanation: "木製ほど柔らかくはありません。"
    },
    {
      text: "樹脂が詰まっているので、比較的重くできている",
      correct: false,
      explanation: "重さは特徴ではありません。"
    },
    {
      text: "汚れが落ちやすく衛生的である",
      correct: true,
      explanation: "合成樹脂製は洗浄しやすく衛生的です。"
    }
  ]
},

{
  category: "調理理論",
  question: "電動のハンドミキサーは、次の内どのような調理操作に使用する調理器具でしょうか。",
  choices: [
    {
      text: "魚介類や食肉と調味料を混ぜる",
      correct: false,
      explanation: "主な用途ではありません。"
    },
    {
      text: "調味料と不純物とに分ける",
      correct: false,
      explanation: "分離には使用しません。"
    },
    {
      text: "マヨネーズソースを作る",
      correct: true,
      explanation: "攪拌して乳化させる調理に適しています。"
    },
    {
      text: "食品をみじん切りにする",
      correct: false,
      explanation: "みじん切りはフードプロセッサー向きです。"
    }
  ]
},

{
  category: "調理理論",
  question: "フードプロセッサーの調理操作で、間違っているのは次の内どれでしょうか。",
  choices: [
    {
      text: "食品をみじん切りにする",
      correct: false,
      explanation: "フードプロセッサーで可能です。"
    },
    {
      text: "調味料と不純物とに分ける",
      correct: true,
      explanation: "分離作業には使用しません。"
    },
    {
      text: "魚介類や食肉と調味料を混ぜる",
      correct: false,
      explanation: "混合作業にも使用できます。"
    },
    {
      text: "大根おろしをつくる",
      correct: false,
      explanation: "アタッチメントなどで可能です。"
    }
  ]
},

{
  category: "調理理論",
  question: "すり鉢が欠かせない料理は、次の内どれでしょうか。",
  choices: [
    {
      text: "出し巻き",
      correct: false,
      explanation: "すり鉢は通常使用しません。"
    },
    {
      text: "湯豆腐",
      correct: false,
      explanation: "すり鉢は必要ありません。"
    },
    {
      text: "すりごま",
      correct: true,
      explanation: "ごまをすりつぶすためにすり鉢を使います。"
    },
    {
      text: "ポン酢",
      correct: false,
      explanation: "液体調味料であり不要です。"
    }
  ]
},

{
  category: "調理理論",
  question: "中国料理で油切りに使用するこし器を何というでしょうか。",
  choices: [
    {
      text: "シノワ",
      correct: false,
      explanation: "シノワは円すい形のこし器です。"
    },
    {
      text: "チャーリエン",
      correct: true,
      explanation: "中国料理で油切りに使う器具です。"
    },
    {
      text: "パソワ",
      correct: false,
      explanation: "裏ごし器具の一種です。"
    },
    {
      text: "ストレーナ",
      correct: false,
      explanation: "一般的なこし器です。"
    }
  ]
},

{
  category: "調理理論",
  question: "わさびをすりおろすのに適したおろし器は、次の内どれでしょうか。",
  choices: [
    {
      text: "鬼おろし",
      correct: false,
      explanation: "粗くおろすための器具です。"
    },
    {
      text: "さめ皮製",
      correct: true,
      explanation: "わさびを細かく滑らかにおろせます。"
    },
    {
      text: "木製",
      correct: false,
      explanation: "一般的ではありません。"
    },
    {
      text: "セラミックス製",
      correct: false,
      explanation: "わさび専用としては適していません。"
    }
  ]
},

{
  category: "調理理論",
  question: "セラミックス製の特徴として、間違っているのはどれでしょうか。",
  choices: [
    {
      text: "新時代の金属",
      correct: true,
      explanation: "セラミックスは金属ではありません。"
    },
    {
      text: "軽い",
      correct: false,
      explanation: "比較的軽量な特徴があります。"
    },
    {
      text: "磁器をおびない",
      correct: false,
      explanation: "磁気を帯びにくい特徴があります。"
    },
    {
      text: "さびない",
      correct: false,
      explanation: "セラミックスはさびません。"
    }
  ]
},

{
  category: "調理理論",
  question: "粉をふるったり、裏ごしをしたりする調理器具ふるいとして、無いものはどれでしょうか。",
  choices: [
    {
      text: "馬毛",
      correct: false,
      explanation: "馬毛製のふるいがあります。"
    },
    {
      text: "電動",
      correct: false,
      explanation: "電動式のふるいもあります。"
    },
    {
      text: "金属",
      correct: false,
      explanation: "金属製のふるいは一般的です。"
    },
    {
      text: "綿",
      correct: true,
      explanation: "綿製のふるいは一般的ではありません。"
    }
  ]
},  {
    category: "世界の食通信",
    question: "人は地球という大きな自然のサイクルの中で、採集、狩猟、漁猟などにより糧を得て生きてきました。収穫した大切な食料を、どのようにすれば美味しく食べられるか、長持ちさせられるためにはどのように加工すれば良いかなどを熟慮し、調理法や加工法、（　　）を開発してきました。（　　）に入る適切な語句を選んでください。",
    choices: [
      {
        text: "浸水法",
        correct: false,
        explanation: "浸水法は食材を水につける方法であり、食料全体を長持ちさせる方法を表してはいません。"
      },
      {
        text: "保管法",
        correct: false,
        explanation: "保管法という表現もありますが、食文化や加工技術として一般的に使われる語句ではありません。"
      },
      {
        text: "切砕法",
        correct: false,
        explanation: "切砕法は食材を切る技術であり、長期保存とは直接関係ありません。"
      },
      {
        text: "貯蔵法",
        correct: true,
        explanation: "食料を長持ちさせるための方法として、貯蔵法が発達してきました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "宗教による食物禁忌として、イスラム教徒の禁じられている飲食物は、次の内どれでしょうか。",
    choices: [
      {
        text: "たこ",
        correct: false,
        explanation: "たこは地域によって考え方が異なりますが、一般的な代表的禁忌食品ではありません。"
      },
      {
        text: "うろこ・ひれのない魚介類（えび、いか、ウナギなど）",
        correct: false,
        explanation: "これらは宗派によって判断が異なりますが、代表的な禁止食品ではありません。"
      },
      {
        text: "豚肉、アルコール類、血液",
        correct: true,
        explanation: "イスラム教では、豚肉やアルコール、血液は教義によって禁止されています。"
      },
      {
        text: "すべての食肉（特に牛肉）",
        correct: false,
        explanation: "イスラム教では適切に処理された肉であれば食べることができます。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本の農耕は食用家畜を伴わず始まり、長い間肉食の習慣が根付かなかった理由としてあげられるのは、次の内どれでしょうか。",
    choices: [
      {
        text: "日本人は肉を好まなかった",
        correct: false,
        explanation: "好みの問題ではなく、宗教や社会制度の影響が大きな理由です。"
      },
      {
        text: "日本に牛や豚、鶏がいなかった",
        correct: false,
        explanation: "家畜は存在していましたが、食用として一般化していませんでした。"
      },
      {
        text: "伝来した仏教が肉食を禁じていた",
        correct: true,
        explanation: "仏教の影響により、殺生を避ける考え方が広まり、肉食が制限されました。"
      },
      {
        text: "天皇が庶民には、野菜を食べるよう命じた",
        correct: false,
        explanation: "そのような命令が理由ではなく、宗教的背景が主な要因です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本の原始社会において、生食や焼いて食べるだけの調理法から、縄文時代には、煮炊きが加わったとされていますが、その根拠となったのは何でしょうか。",
    choices: [
      {
        text: "時代に応じての変化",
        correct: false,
        explanation: "抽象的な表現であり、具体的な根拠にはなっていません。"
      },
      {
        text: "農耕社会に変わり、生食ができなくなった",
        correct: false,
        explanation: "煮炊きの根拠は農耕化ではなく、道具の発見によるものです。"
      },
      {
        text: "土器を使用していた",
        correct: true,
        explanation: "縄文時代に土器が使われるようになったことで、煮炊きが可能になりました。"
      },
      {
        text: "食料採集主体の生活になった",
        correct: false,
        explanation: "採集生活は以前からあり、煮炊きの直接的根拠ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "食文化とは、地域社会や民族がはぐくんできた食べるという一連の営みと、そこに生まれた慣習や（　　）、さらに、その根底に流れている精神的な価値観をさしている。（　　）内に入る、正しい語句を選んでください。",
    choices: [
      {
        text: "伝統",
        correct: true,
        explanation: "食文化には、その地域で受け継がれてきた伝統が深く関わっています。"
      },
      {
        text: "科学",
        correct: false,
        explanation: "科学は調理理論に関係しますが、食文化を表す中心的な言葉ではありません。"
      },
      {
        text: "決まりごと",
        correct: false,
        explanation: "決まりごともありますが、文化として受け継がれる『伝統』が適切です。"
      },
      {
        text: "革新",
        correct: false,
        explanation: "革新は新しい変化を意味し、受け継がれる文化とは異なります。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "イスラム教の教義にのっとって処理された食べ物を何というでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "ハラ（ー）ムフード",
        correct: true,
        explanation: "設問の正答として扱われています。イスラム教の教義に基づいた食品を指します。"
      },
      {
        text: "ムスリムフード",
        correct: false,
        explanation: "一般的な正式名称ではありません。"
      },
      {
        text: "ハラ（ー）ルフード",
        correct: false,
        explanation: "実際には『ハラールフード』が一般的な表現ですが、この問題では別解扱いになっています。"
      },
      {
        text: "ジャンクフード",
        correct: false,
        explanation: "高カロリー食品を指す言葉であり、宗教とは無関係です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "農耕社会の形成・浸透に伴い、古墳時代に伝来した仏教の影響を受け、発令されたのは何でしょうか。",
    choices: [
      {
        text: "生類憐みの令",
        correct: false,
        explanation: "生類憐みの令は江戸時代に出された法令です。"
      },
      {
        text: "禁酒令",
        correct: false,
        explanation: "仏教の影響で発令された代表的な法令ではありません。"
      },
      {
        text: "肉食禁止令",
        correct: true,
        explanation: "仏教の影響を受け、肉食を禁じる法令が出されました。"
      },
      {
        text: "踏み絵",
        correct: false,
        explanation: "踏み絵はキリスト教徒を取り締まるための制度です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "じゃがいも、菜豆、かぼちゃ、とうもろこしなどアメリカ南北に伝播していった農耕文化は、次の内どれでしょうか。",
    choices: [
      {
        text: "根裁農耕文化",
        correct: false,
        explanation: "一般的な農耕文化の名称ではありません。"
      },
      {
        text: "新大陸農耕文化",
        correct: true,
        explanation: "じゃがいもやとうもろこしなどは、新大陸農耕文化の代表的作物です。"
      },
      {
        text: "サバンナ農耕文化",
        correct: false,
        explanation: "サバンナ地域に関連する言葉であり、アメリカ大陸の農耕文化ではありません。"
      },
      {
        text: "地中海農耕文化",
        correct: false,
        explanation: "地中海地域の農耕文化であり、新大陸とは異なります。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "国際化が急速に進む現在、調理師にとって世界中のさまざまな人に食事を提供する機会があるので、（　　　　　　）は重要である。（　　）に入る適切な語句を、次の中から選んでください。",
    choices: [
      {
        text: "どんな人にも食べてもらえるように、いろんな食材を使って美味しいものを作ること",
        correct: false,
        explanation: "美味しさも大切ですが、宗教や文化による制限を理解することがより重要です。"
      },
      {
        text: "日本料理のすばらしさを伝えること",
        correct: false,
        explanation: "日本料理を広めることより、相手の文化を理解することが大切です。"
      },
      {
        text: "食物禁忌についての正しい知識をもつこと",
        correct: true,
        explanation: "宗教や文化による食物禁忌を理解することは、国際的な調理現場で重要です。"
      },
      {
        text: "世界にはいろんなお酒やワインがあるので、料理に取り入れて提供すること",
        correct: false,
        explanation: "宗教によってはアルコールが禁止されているため、適切とは言えません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "食文化は人々の生活に最も密接に結びついていることから、しばしば異文化理解が難しいこともある。東京では好んで良く食べられているが、ニューヨークでは気持ち悪く、あまり食べたくないと思われている食材は次の内どれでしょうか（複数回答）。",
    choices: [
      {
        text: "海藻",
        correct: true,
        explanation: "海藻は日本では一般的ですが、海外では食習慣の違いから苦手とされることがあります。"
      },
      {
        text: "たこ",
        correct: true,
        explanation: "たこは日本では人気がありますが、食感や見た目から苦手とする人もいます。"
      },
      {
        text: "うなぎ",
        correct: true,
        explanation: "うなぎは日本では高級食材ですが、海外では馴染みが少ない場合があります。"
      },
      {
        text: "生魚（さしみ）",
        correct: true,
        explanation: "生魚を食べる文化がない地域では、不安や抵抗感を持つ人がいます。"
      },
      {
        text: "うさぎ",
        correct: false,
        explanation: "地域によっては一般的に食べられており、この設問の意図とは異なります。"
      },
      {
        text: "いか",
        correct: true,
        explanation: "いかは日本では日常的な食材ですが、海外では独特な見た目から敬遠されることがあります。"
      }
    ]
  },
  {
    category: "世界の食通信",
    question: "農耕文化の伝播と変容速度を急激に変えた時代は、次の内どれでしょうか。",
    choices: [
      {
        text: "古代ギリシャ時代",
        correct: false,
        explanation: "古代ギリシャ時代にも文化交流はありましたが、世界規模の農作物交流には至っていません。"
      },
      {
        text: "宗教戦争時代",
        correct: false,
        explanation: "宗教戦争は文化に影響を与えましたが、農耕文化の大規模な伝播の中心ではありません。"
      },
      {
        text: "大航海時代",
        correct: true,
        explanation: "大航海時代には新大陸と旧大陸の交流が活発になり、多くの農作物が世界中へ広まりました。"
      },
      {
        text: "ルネサンス時代",
        correct: false,
        explanation: "ルネサンスは芸術や学問の発展が中心であり、農耕文化の急激な変化の主因ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本に初めて砂糖を伝えた僧侶は、誰でしょうか。",
    choices: [
      {
        text: "三蔵法師",
        correct: false,
        explanation: "三蔵法師は中国への仏教経典収集で知られる人物で、日本への砂糖伝来とは関係ありません。"
      },
      {
        text: "弘法大師",
        correct: false,
        explanation: "弘法大師（空海）は真言宗の開祖ですが、砂糖を伝えた人物ではありません。"
      },
      {
        text: "最澄",
        correct: false,
        explanation: "最澄は天台宗の開祖ですが、砂糖伝来の人物としては知られていません。"
      },
      {
        text: "鑑真",
        correct: true,
        explanation: "唐から来日した鑑真が、日本へ砂糖を伝えたとされています。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "つづいてパリでは好んで良く食べられているが、東京では気持ち悪く、あまり食べたくないと思われている食材は次の内どれでしょうか（複数回答）。",
    choices: [
      {
        text: "かえる",
        correct: true,
        explanation: "フランスではかえる料理が親しまれていますが、日本では一般的ではなく抵抗感を持つ人もいます。"
      },
      {
        text: "海藻",
        correct: false,
        explanation: "海藻は日本では一般的ですが、パリ特有の食文化を表すものではありません。"
      },
      {
        text: "いか",
        correct: false,
        explanation: "いかは日本でも一般的に食べられている食材です。"
      },
      {
        text: "たこ",
        correct: false,
        explanation: "たこも日本では広く食べられており、設問の条件に合いません。"
      },
      {
        text: "うなぎ",
        correct: false,
        explanation: "うなぎは日本で人気の食材であり、東京で嫌われているわけではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "すべての民族が経験した食べ方であり、食事の基本である食べ方は、次の内どれでしょうか。",
    choices: [
      {
        text: "手食文化",
        correct: true,
        explanation: "道具が発達する前、人類はまず手を使って食事をしていたため、最も基本的な食べ方です。"
      },
      {
        text: "スプーン・フォーク文化",
        correct: false,
        explanation: "これは後に発達した食事文化であり、すべての民族が最初に経験したものではありません。"
      },
      {
        text: "箸食文化",
        correct: false,
        explanation: "箸文化は主に東アジア地域に限られています。"
      },
      {
        text: "ナイフ・フォーク文化",
        correct: false,
        explanation: "ヨーロッパ中心の食文化であり、普遍的な起源ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "とうもろこしは、アメリカの先住民が常食としていたが、世界中に広まった理由は、次の内どれでしょうか。",
    choices: [
      {
        text: "輸送するのに便利であり、輸出しやすかった",
        correct: false,
        explanation: "保存性はありますが、世界中へ広がった直接の理由ではありません。"
      },
      {
        text: "もともと各地で生えていたが食していなかった",
        correct: false,
        explanation: "とうもろこしは新大陸原産であり、世界各地にもともと存在していたわけではありません。"
      },
      {
        text: "コロンブスがヨーロッパに持ち帰った",
        correct: true,
        explanation: "コロンブスが新大陸からヨーロッパへ持ち帰ったことで、世界中へ広まりました。"
      },
      {
        text: "各地で戦争が盛んになり、飢えをしのぐのに最適であった",
        correct: false,
        explanation: "救荒作物として役立ちましたが、普及のきっかけそのものではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "大饗料理として、間違っているのはどれでしょうか。",
    choices: [
      {
        text: "手前に自分用の調味料や飯が並んでいた",
        correct: false,
        explanation: "大饗料理では個人用の飯や調味料が並べられていました。"
      },
      {
        text: "醤（ひしお）、酒、酢、塩が添えられていた",
        correct: false,
        explanation: "当時の調味料として醤や酢などが使われていました。"
      },
      {
        text: "横並びの間に共有のおかずが並んでいた",
        correct: true,
        explanation: "大饗料理は基本的に個人ごとに料理が配膳され、共有形式ではありませんでした。"
      },
      {
        text: "鎌倉時代から室町時代まで続いた",
        correct: false,
        explanation: "大饗料理は長い期間にわたり行われていました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "東京やニューヨークにおいて、好きで良く食べる料理のベスト１０に入っているが、パリで入っていないものは、次の内どれでしょうか。",
    choices: [
      {
        text: "ビーフステーキ",
        correct: false,
        explanation: "ビーフステーキはパリでも人気の高い料理です。"
      },
      {
        text: "カレーライス",
        correct: false,
        explanation: "カレー料理は世界的に広まっており、パリでも一定の人気があります。"
      },
      {
        text: "ご飯",
        correct: true,
        explanation: "東京やニューヨークでは日常的ですが、パリでは主食文化の違いから上位には入りにくいです。"
      },
      {
        text: "グリーンサラダ",
        correct: false,
        explanation: "グリーンサラダはフランスでも一般的に食べられています。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "手食のマナーとして間違っているものは、次の内どれでしょうか。",
    choices: [
      {
        text: "指に食材が触れるので、きれいになめて取り除く",
        correct: true,
        explanation: "手食文化でも、指をなめる行為はマナー違反とされることがあります。"
      },
      {
        text: "左手は使わず、右手を使う",
        correct: false,
        explanation: "手食文化では右手を使うことが一般的なマナーです。"
      },
      {
        text: "食後に手を洗う",
        correct: false,
        explanation: "衛生面から食後に手を洗うことは大切なマナーです。"
      },
      {
        text: "3本の指で食べる",
        correct: false,
        explanation: "地域によって違いはありますが、3本指を使う食べ方は一般的です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "救荒作物とは、どういったものでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "作物が不作の年でも成育して、良い収穫があげられる作物",
        correct: true,
        explanation: "救荒作物とは、飢饉や不作時でも比較的育ちやすく、人々を助ける作物のことです。"
      },
      {
        text: "きゅうり、スイカ、ピーマンなど気温が上昇しても栽培しやすい作物",
        correct: false,
        explanation: "高温に強い作物ではありますが、救荒作物の定義とは異なります。"
      },
      {
        text: "さつまいも、トマト、とうがらしなど世界中で食されている作物",
        correct: false,
        explanation: "世界的に食べられていることが条件ではありません。"
      },
      {
        text: "じゃがいもや玉ねぎなど、比較的保存がきく作物",
        correct: false,
        explanation: "保存性は関係しますが、不作時でも育ちやすい点が重要です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "古墳・奈良時代に食べられていた飯は、米を蒸した強飯であり、保存食として作られた糒、今日の飯は当時の固がゆに相当してもので（　　）と言われるものです。（　　）に入る適切な語句を選んでください。",
    choices: [
      {
        text: "おこわ",
        correct: false,
        explanation: "おこわはもち米を蒸した料理であり、設問の内容とは異なります。"
      },
      {
        text: "お粥",
        correct: false,
        explanation: "お粥は水分の多い食事であり、固がゆを指す言葉ではありません。"
      },
      {
        text: "醬",
        correct: false,
        explanation: "醬は調味料の一種であり、飯の名称ではありません。"
      },
      {
        text: "姫飯",
        correct: true,
        explanation: "現在の飯は、当時の固がゆに相当する『姫飯』と呼ばれていました。"
      }
    ]
  },


  {
    category: "世界の食通信",
    question: "パリやニューヨークにおいて、好きで良く食べる料理のベスト１０に入っているが、東京で入っていないものは、次の内どれでしょうか（複数回答）。",
    choices: [
      {
        text: "チーズ",
        correct: true,
        explanation: "チーズは欧米では日常的に多く食べられていますが、日本では主食級の位置づけではありません。"
      },
      {
        text: "ビーフステーキ",
        correct: true,
        explanation: "ビーフステーキは欧米で人気の高い料理ですが、日本では日常食としての順位が異なります。"
      },
      {
        text: "エビフライ",
        correct: false,
        explanation: "エビフライは日本で人気の料理であり、設問条件には当てはまりません。"
      },
      {
        text: "グリーンサラダ",
        correct: true,
        explanation: "グリーンサラダは欧米で日常的に食べられる代表的料理の一つです。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "主に狩猟、牧畜を営む地域において、肉を切り分けるための（　　）は不可欠であった。食べ物の配分の権限を持つ家長が（　　）を持っていた。主に調理用、給仕用として使われていた。（　　）に入る適切な語句を選んでください。",
    choices: [
      {
        text: "スプーン",
        correct: false,
        explanation: "スプーンは汁物などを食べる道具であり、肉を切り分ける用途ではありません。"
      },
      {
        text: "箸",
        correct: false,
        explanation: "箸は食べるための道具であり、狩猟文化における肉の切り分けには適していません。"
      },
      {
        text: "フォーク",
        correct: false,
        explanation: "フォークは食べ物を刺して食べる道具であり、切り分けの中心的役割ではありません。"
      },
      {
        text: "ナイフ",
        correct: true,
        explanation: "狩猟や牧畜文化では、肉を切り分けるためにナイフが重要な役割を果たしました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本料理である天ぷらうどんに使用されている原材料として小麦（麺・衣）、大豆（醤油）が輸入されている割合が一番多い国は、次の内どれでしょうか。",
    choices: [
      {
        text: "インド",
        correct: false,
        explanation: "インドも農産物輸出国ですが、日本の小麦・大豆輸入先として最大ではありません。"
      },
      {
        text: "カナダ",
        correct: false,
        explanation: "カナダからも小麦を輸入していますが、全体ではアメリカの割合が高いです。"
      },
      {
        text: "アメリカ",
        correct: true,
        explanation: "日本は小麦や大豆を多くアメリカから輸入しており、天ぷらうどんの原材料にも関係しています。"
      },
      {
        text: "ベトナム",
        correct: false,
        explanation: "ベトナムは米の輸出国として有名ですが、小麦や大豆輸入の中心ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "平安時代に最澄・空海・栄西によってもたらされ普及していったものとは、何でしょうか。",
    choices: [
      {
        text: "うどん",
        correct: false,
        explanation: "うどん文化の発展とは直接関係ありません。"
      },
      {
        text: "茶",
        correct: true,
        explanation: "最澄や空海、栄西らによって中国から茶文化が伝えられ、日本に広まりました。"
      },
      {
        text: "おこわ",
        correct: false,
        explanation: "おこわは古くから存在していましたが、僧侶による伝来とは関係ありません。"
      },
      {
        text: "金",
        correct: false,
        explanation: "金属や貨幣文化ではなく、飲食文化としての茶が広まりました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "下記の調査結果の数字は、地域や民族の食文化環境と（　　）を表している。（　　）に入いる適切な語句を選んでください。",
    choices: [
      {
        text: "好き嫌い",
        correct: false,
        explanation: "単なる個人の好みだけでなく、文化的背景を含めた考え方を示しています。"
      },
      {
        text: "価値観",
        correct: true,
        explanation: "食文化に対する感じ方や考え方には、地域や民族ごとの価値観が表れます。"
      },
      {
        text: "優劣の数値化",
        correct: false,
        explanation: "食文化に優劣をつけるためのものではありません。"
      },
      {
        text: "食材の高級感",
        correct: false,
        explanation: "高級かどうかではなく、文化的背景や価値観が関係しています。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "食事作法は、どのようにして誕生したのでしょうか。間違っているものを選んでください。",
    choices: [
      {
        text: "少ない食料をどのように分配したらよいのかを背景にもって生まれた",
        correct: false,
        explanation: "食料配分のルールは、食事作法の成り立ちに関係しています。"
      },
      {
        text: "共食の場において権威ある者は、どのように権威を示したらよいのかを背景にもって生まれた",
        correct: false,
        explanation: "食事の席での身分や権威の表現は、作法成立の背景の一つです。"
      },
      {
        text: "ナイフ・フォークの使い方を知らないものが多かったのでどうしたらよいのかを背景にもって生まれた",
        correct: true,
        explanation: "食事作法は単なる道具の使い方指導ではなく、社会秩序や礼儀から発展したものです。"
      },
      {
        text: "他人の目を気にしながら食べるには、どのように食べたらよいのかを背景にもって生まれた",
        correct: false,
        explanation: "人との共食における礼儀や振る舞いが、食事作法に影響を与えました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本は１９７０年代には、あらゆる分野が飛躍的に発展して経済的に豊かになりました。そんな中進歩した、生物の機能や生物が起こす化学反応を人工的に活用する技術を何というでしょうか。",
    choices: [
      {
        text: "コールドチェーン",
        correct: false,
        explanation: "コールドチェーンは低温流通システムを指し、生物機能利用技術ではありません。"
      },
      {
        text: "ファストフード",
        correct: false,
        explanation: "ファストフードは食事提供の形式であり、科学技術の名称ではありません。"
      },
      {
        text: "バイオテクノロジー",
        correct: true,
        explanation: "生物の機能や反応を利用する技術は、バイオテクノロジーと呼ばれます。"
      },
      {
        text: "クールダウン",
        correct: false,
        explanation: "クールダウンは体温や熱を下げる意味であり、技術名称ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "食の不安定要素とは、どういったことでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "日本は他国とつながっていないので、世界各地の料理を味わえない",
        correct: false,
        explanation: "現在の日本は多くの国とつながっており、世界の料理を楽しめます。"
      },
      {
        text: "ファストフードやコンビニエンスストアなどが、都市の食の共通化、均質化させた",
        correct: false,
        explanation: "食文化の変化ではありますが、設問の『不安定要素』とは異なります。"
      },
      {
        text: "交通や通信手段が発達し、食に対する意識が低くなった",
        correct: false,
        explanation: "交通や通信の発達自体は食の不安定化を直接意味しません。"
      },
      {
        text: "日本はの食料自給率は極端に低く、輸入に頼らなけらばならない",
        correct: true,
        explanation: "日本は多くの食料を輸入に依存しているため、世界情勢による影響を受けやすいです。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "室町時代に四条流、進士流などの流派が確立した武家社会の料理とはなんでしょうか。",
    choices: [
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は茶道と関係が深い料理形式です。"
      },
      {
        text: "南蛮料理",
        correct: false,
        explanation: "南蛮料理は海外文化の影響を受けた料理です。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理は仏教思想に基づく料理です。"
      },
      {
        text: "本膳料理",
        correct: true,
        explanation: "四条流や進士流は、本膳料理の作法や技法を発展させた流派です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "世界の主作物の食べ方として、まちがっているものは、次の内どれでしょうか。",
    choices: [
      {
        text: "とうもろこし ー トルティージャ、あらびきがゆ ー アメリカ大陸（メキシコ）",
        correct: false,
        explanation: "とうもろこしはメキシコなどで主食として利用されています。"
      },
      {
        text: "小麦 ― ナン、チャパティ ー 西、中央アジア、インド西部",
        correct: false,
        explanation: "ナンやチャパティは小麦を使った代表的主食です。"
      },
      {
        text: "大麦 ー おねり ー ヒマラヤ地方（チベット近辺）",
        correct: false,
        explanation: "大麦はヒマラヤ地域で重要な主食となっています。"
      },
      {
        text: "米 ー 飯 ー 西アジア",
        correct: true,
        explanation: "西アジアでは小麦文化が中心であり、米を主食とする地域ではありません。"
      }
    ]
  },
  {
    category: "世界の食通信",
    question: "ナイフやフォークが食卓の食器となったきっかけは、16世紀にイタリア「フィレンチェの大富豪」のカトリーヌがフランスのオルレアン公に嫁いだことによるといわれています。フィレンチェの大富豪とは誰のことでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "メディチ家",
        correct: true,
        explanation: "カトリーヌ・ド・メディシスはフィレンツェの名門メディチ家の出身で、食文化をフランスへ伝えました。"
      },
      {
        text: "ルイ14世",
        correct: false,
        explanation: "ルイ14世はフランス国王ですが、フィレンツェの大富豪ではありません。"
      },
      {
        text: "ナポレオン",
        correct: false,
        explanation: "ナポレオンはフランス皇帝であり、16世紀の人物ではありません。"
      },
      {
        text: "アンリ２世",
        correct: false,
        explanation: "アンリ2世はフランス王ですが、フィレンツェの大富豪を指す言葉ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "１９７０年代より日本の食生活のスタイルは、どのように変容していったでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "食の外部化が進み、生活習慣病が人々をむしばみ始めた",
        correct: true,
        explanation: "外食や加工食品の利用が増え、生活習慣病が社会問題となっていきました。"
      },
      {
        text: "日本全体が高度経済成長によって豊かになったが、食に対する意識が低くなった",
        correct: false,
        explanation: "経済成長は事実ですが、設問は食生活の具体的変化について問うています。"
      },
      {
        text: "注文すれば、食を自宅まで届けてくれるようになった",
        correct: false,
        explanation: "宅配文化は後年さらに発展したもので、1970年代の中心的変化ではありません。"
      },
      {
        text: "各家庭で過ごすようになり、家族の夕食の質が向上した",
        correct: false,
        explanation: "実際には外食や中食が増加し、家庭外での食事が増えていきました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "室町時代中期に禅僧一休によって作られたものとは、何でしょうか。次の中から選んでください。",
    choices: [
      {
        text: "うどん",
        correct: false,
        explanation: "うどんはそれ以前から存在しており、一休が作ったものではありません。"
      },
      {
        text: "大徳寺納豆",
        correct: true,
        explanation: "禅僧一休は、大徳寺納豆の普及に関わったとされています。"
      },
      {
        text: "そば",
        correct: false,
        explanation: "そば文化は後に広まりましたが、一休が作ったものではありません。"
      },
      {
        text: "茶がゆ",
        correct: false,
        explanation: "茶がゆは各地に存在する料理であり、一休の創作ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "世界の主食類型の分布は、生産される地域を見ると、主食の米、小麦、大麦、とうもろこし、雑穀、いも類、バナナなどは、それぞれの生育条件と（　　）が合致している。（　　）に入る適切な語句を選んでください。",
    choices: [
      {
        text: "自然環境",
        correct: true,
        explanation: "主食は、その地域の気候や地形など自然環境に適したものが発達しています。"
      },
      {
        text: "民族性",
        correct: false,
        explanation: "民族性も文化に影響しますが、主食分布の基本は自然条件です。"
      },
      {
        text: "気候",
        correct: false,
        explanation: "気候も含まれますが、地形や水などを含めた『自然環境』がより適切です。"
      },
      {
        text: "土壌",
        correct: false,
        explanation: "土壌だけでなく、広い意味での自然環境全体が関係しています。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "食べる行為において動物と人が大きく異なる点は、火を使って調理するところにあります。火を使って調理することにより、煮るや焼くなど食の幅を広げ、おいしく食欲をそそるものになったのと、もう一つは何でしょうか。次の中から選んでください。",
    choices: [
      {
        text: "見た目が変わって、人の視覚が向上した",
        correct: false,
        explanation: "見た目の変化はありますが、人類進化の主要な理由ではありません。"
      },
      {
        text: "安全に食べられるようになった",
        correct: true,
        explanation: "加熱によって細菌や寄生虫を減らし、安全性を高めることができました。"
      },
      {
        text: "食事をするのに、効率が上がった",
        correct: false,
        explanation: "効率向上もありますが、最も重要なのは安全性の向上です。"
      },
      {
        text: "香りが良くなり、よだれを垂らすようになった",
        correct: false,
        explanation: "香りは食欲を高めますが、設問の中心は安全性です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本の人口と世界の人口はどのように変化していっているでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "日本は減っているが、世界全体では増えている",
        correct: true,
        explanation: "日本は少子高齢化により人口減少が進む一方、世界人口は増加傾向です。"
      },
      {
        text: "世界全体で人口は減っている",
        correct: false,
        explanation: "世界人口は現在も増加しています。"
      },
      {
        text: "あまり変わらない",
        correct: false,
        explanation: "日本と世界では人口動向に大きな違いがあります。"
      },
      {
        text: "日本は増えているが、世界全体では減っている",
        correct: false,
        explanation: "実際は逆の傾向です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "千利休により、濃い抹茶に合わせて軽く供される会席料理は後に何という料理になったでしょうか。",
    choices: [
      {
        text: "懐石料理",
        correct: true,
        explanation: "茶道とともに発展した軽い食事形式が、後の懐石料理となりました。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理は仏教の戒律に基づく料理です。"
      },
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は長崎で発展した中国風料理です。"
      },
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は武家社会の正式な料理形式です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "世界の主食類型の分布において、米を食べる国で間違っているものは、次の内どれでしょうか。",
    choices: [
      {
        text: "韓国",
        correct: false,
        explanation: "韓国は米を主食とする代表的な国です。"
      },
      {
        text: "シンガポール",
        correct: false,
        explanation: "シンガポールでも米料理が広く食べられています。"
      },
      {
        text: "インド",
        correct: false,
        explanation: "インドでは地域差がありますが、米を主食とする地域も多く存在します。"
      },
      {
        text: "イタリア",
        correct: true,
        explanation: "イタリアは主に小麦文化圏であり、パンやパスタが主食です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "箸を最初に使っていた国は、次の内どこの国でしょうか。",
    choices: [
      {
        text: "ベトナム",
        correct: false,
        explanation: "ベトナムでも箸文化がありますが、起源ではありません。"
      },
      {
        text: "日本",
        correct: false,
        explanation: "日本の箸文化は中国から伝わったものです。"
      },
      {
        text: "中国",
        correct: true,
        explanation: "箸は古代中国で生まれ、その後周辺国へ広がりました。"
      },
      {
        text: "韓国",
        correct: false,
        explanation: "韓国にも箸文化がありますが、起源は中国です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "今後、地球全体で考えていかなければならない問題に、対策が迫られていることとして優先順位の低いものは、次の内どれでしょうか。",
    choices: [
      {
        text: "環境汚染の対策",
        correct: false,
        explanation: "環境汚染は地球規模で重要な課題です。"
      },
      {
        text: "穀物供給の拡大",
        correct: false,
        explanation: "人口増加に伴い、食料供給の確保は重要です。"
      },
      {
        text: "地球の温暖化防止対策",
        correct: false,
        explanation: "地球温暖化対策は世界的に緊急性の高い課題です。"
      },
      {
        text: "世界経済の発展",
        correct: true,
        explanation: "設問では環境や食料問題への対策が重視されており、経済発展は優先順位が低いとされています。"
      }
    ]
  },
  {
    category: "世界の食通信",
    question: "安土桃山時代に、中国や朝鮮、ポルトガルやスペインなどの南蛮文化が取り入れられましたが、下記の中で間違っているものはどれでしょうか。",
    choices: [
      {
        text: "みそ、醤油",
        correct: true,
        explanation: "みそや醤油は日本古来の発酵調味料であり、南蛮文化によって伝わったものではありません。"
      },
      {
        text: "カステラ",
        correct: false,
        explanation: "カステラはポルトガルから伝わった南蛮菓子です。"
      },
      {
        text: "パン",
        correct: false,
        explanation: "パンは南蛮文化とともに日本へ伝えられました。"
      },
      {
        text: "じゃがいもやカボチャ",
        correct: false,
        explanation: "じゃがいもやカボチャは海外から日本へもたらされた作物です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "江戸時代に入り、交通手段の進歩により物資の流通が盛んになって、町人の生活はしだいにぜいたくになりました。そんな中で（　　）を楽しむ風習が生まれました。（　　）に入る適切な語句を選んでください。",
    choices: [
      {
        text: "初物",
        correct: true,
        explanation: "江戸時代には、旬の最初に出回る『初物』を楽しむ文化が広まりました。"
      },
      {
        text: "飲酒",
        correct: false,
        explanation: "酒文化は以前から存在しており、設問の特徴的風習ではありません。"
      },
      {
        text: "川柳",
        correct: false,
        explanation: "川柳は文化活動の一つですが、食文化の風習を表す言葉ではありません。"
      },
      {
        text: "牛鍋",
        correct: false,
        explanation: "牛鍋は主に明治時代以降に普及した料理です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "(食用）かえるやうさぎ、エスカルゴを好んで食べられている国は次の内、どれでしょうか。",
    choices: [
      {
        text: "ドイツ",
        correct: false,
        explanation: "ドイツ料理では、かえるやエスカルゴは代表的な料理ではありません。"
      },
      {
        text: "スイス",
        correct: false,
        explanation: "スイス料理として一般的に有名な食材ではありません。"
      },
      {
        text: "フランス",
        correct: true,
        explanation: "フランスでは、かえる料理やエスカルゴが伝統料理として知られています。"
      },
      {
        text: "イタリア",
        correct: false,
        explanation: "イタリア料理にも地域差はありますが、代表的文化としてはフランスが有名です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "イスラム教でラマダーンと言われる期間がありますが、次の内どれでしょうか。",
    choices: [
      {
        text: "断食",
        correct: true,
        explanation: "ラマダーンは、イスラム教徒が日の出から日没まで断食を行う期間です。"
      },
      {
        text: "断捨離",
        correct: false,
        explanation: "断捨離は日本で使われる整理整頓の考え方です。"
      },
      {
        text: "断寝",
        correct: false,
        explanation: "睡眠を断つ意味ではなく、食事を控える宗教行事です。"
      },
      {
        text: "断酒",
        correct: false,
        explanation: "アルコールを控えることではなく、飲食全般を断つことが中心です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "人は自然環境に合った食料資源を採集、狩猟、漁猟などで手に入れると、効率良く調理するために、どのようにして煮たり、揚げたりする多用な調理法を開発していったのでしょうか。次の中から選んでください。",
    choices: [
      {
        text: "火を起こした",
        correct: false,
        explanation: "火の利用は重要ですが、煮る・揚げる調理には道具の発達が必要でした。"
      },
      {
        text: "油を作った",
        correct: false,
        explanation: "油は揚げ物に必要ですが、多様な調理法全体の発展理由ではありません。"
      },
      {
        text: "土器や鉄器を作った",
        correct: true,
        explanation: "土器や鉄器の発達により、煮る・揚げるなど多様な調理法が可能になりました。"
      },
      {
        text: "水を調理に取り入れた",
        correct: false,
        explanation: "水の利用だけでは、多様な調理法の発展を説明できません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "１９世紀初頭に、手軽さから江戸っ子の人気を集めた料理とは何でしょうか。",
    choices: [
      {
        text: "天ぷら",
        correct: false,
        explanation: "天ぷらも人気でしたが、設問で特に江戸っ子に人気となった代表料理ではありません。"
      },
      {
        text: "きつねうどん",
        correct: false,
        explanation: "きつねうどんは関西で発展した料理です。"
      },
      {
        text: "にぎり寿司",
        correct: true,
        explanation: "にぎり寿司は手軽に食べられる屋台料理として江戸で人気を集めました。"
      },
      {
        text: "ちらし寿司",
        correct: false,
        explanation: "ちらし寿司は家庭料理として親しまれましたが、江戸の屋台文化の中心ではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "明治時代に入ると、西洋式食文化の広がりに拍車がかかり、民間レベルにも浸透していった食品は、次の内どれでしょうか。",
    choices: [
      {
        text: "マヨネーズ",
        correct: false,
        explanation: "マヨネーズが一般家庭へ広く浸透するのはさらに後の時代です。"
      },
      {
        text: "牛乳",
        correct: true,
        explanation: "明治時代には西洋文化の影響で牛乳を飲む習慣が広がりました。"
      },
      {
        text: "キャラメル",
        correct: false,
        explanation: "菓子として広まりましたが、西洋食文化の中心的食品ではありません。"
      },
      {
        text: "ワイン",
        correct: false,
        explanation: "ワイン文化は一部で広まりましたが、民間全体への浸透では牛乳ほどではありません。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "明治時代に、こんぶから抽出された、世界に誇る発明された調味料とは何でしょうか。",
    choices: [
      {
        text: "グラニュー糖",
        correct: false,
        explanation: "グラニュー糖は砂糖の一種であり、昆布から抽出されたものではありません。"
      },
      {
        text: "こぶ茶",
        correct: false,
        explanation: "こぶ茶は飲み物であり、発明された調味料ではありません。"
      },
      {
        text: "本だし",
        correct: false,
        explanation: "本だしは商品名であり、設問の発明を指していません。"
      },
      {
        text: "グルタミン酸ナトリウム",
        correct: true,
        explanation: "池田菊苗が昆布のうま味成分から発見し、グルタミン酸ナトリウムが誕生しました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "１９４５年に第２次世界大戦の終戦を迎え、１９５０年代ごろから徐々に食料に対する統制が撤廃され、食料事情が改善しはじめ、全国で実施されるようになったものとは何でしょうか。",
    choices: [
      {
        text: "三種の神器（TV、洗濯機、冷蔵庫）の普及",
        correct: false,
        explanation: "家電の普及は高度経済成長期の象徴ですが、食料事情改善による全国実施とは異なります。"
      },
      {
        text: "募金活動",
        correct: false,
        explanation: "募金活動は社会活動の一つであり、設問の内容とは関係ありません。"
      },
      {
        text: "コンビニエンスストアの開店",
        correct: false,
        explanation: "コンビニは1970年代以降に広がった業態です。"
      },
      {
        text: "学校給食",
        correct: true,
        explanation: "戦後の食料事情改善に伴い、学校給食が全国的に実施されるようになりました。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "電気釜や電化製品の普及によって、家事にかかる負担が軽減し、女性たちの社会進出が活発化して急増した、１か所で必要な食材を手にすることができるようなった施設とは何でしょうか。",
    choices: [
      {
        text: "コンビニエンスストア",
        correct: false,
        explanation: "便利ではありますが、大量の商品をまとめて扱う施設として急増したのは別です。"
      },
      {
        text: "百貨店",
        correct: false,
        explanation: "百貨店は高級品中心であり、日常食材購入の中心施設ではありません。"
      },
      {
        text: "スーパーマーケット",
        correct: true,
        explanation: "スーパーマーケットは食材を一か所で購入できる便利な施設として急速に普及しました。"
      },
      {
        text: "ファミリーレストラン",
        correct: false,
        explanation: "ファミリーレストランは外食施設であり、食材購入施設ではありません。"
      }
    ]
  },
  {
    category: "世界の食通信",
    question: "日本料理の特徴として、間違っているものは次の内どれでしょうか。Ⅰ",
    choices: [
      {
        text: "鶏だしの味を基本としている",
        correct: true,
        explanation: "日本料理では昆布やかつお節のだしが基本であり、鶏だしを中心とするわけではありません。"
      },
      {
        text: "比較的淡泊な味付け",
        correct: false,
        explanation: "日本料理は素材の味を生かすため、比較的淡泊な味付けが特徴です。"
      },
      {
        text: "素材の持ち味を生かしている",
        correct: false,
        explanation: "旬や素材本来の風味を大切にするのが日本料理の特徴です。"
      },
      {
        text: "目で楽しむ料理",
        correct: false,
        explanation: "盛り付けや色彩など、視覚的な美しさも重視されています。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本料理の特徴として、間違っているものは次の内どれでしょうか。Ⅱ",
    choices: [
      {
        text: "季節感などの味わいをあわせ持っている",
        correct: false,
        explanation: "日本料理では四季を感じられる工夫が大切にされています。"
      },
      {
        text: "食べた後の余韻、名残を大切にしている",
        correct: false,
        explanation: "料理の余韻や季節の名残を味わう文化があります。"
      },
      {
        text: "味付けに重点を置いている",
        correct: true,
        explanation: "日本料理は濃い味付けよりも、素材や季節感を生かすことを重視しています。"
      },
      {
        text: "香りと淡泊な味付けで自然の恵みを満喫する",
        correct: false,
        explanation: "自然の香りや素材の味を楽しむことが日本料理の特徴です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "日本料理の特徴として、間違っているものは次の内どれでしょうか。",
    choices: [
      {
        text: "洋食器や中国の食器と同様に多種多用",
        correct: true,
        explanation: "日本料理の食器は種類が多いですが、洋食器や中国食器とは用途や考え方が異なります。"
      },
      {
        text: "調理操作によって食器が異なる",
        correct: false,
        explanation: "料理方法や料理内容によって器を使い分けます。"
      },
      {
        text: "食器と一体化している",
        correct: false,
        explanation: "料理と器の調和を重視するのが日本料理の特徴です。"
      },
      {
        text: "食器が料理を引き立てる",
        correct: false,
        explanation: "器の色や形によって料理の魅力を高めています。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "江戸時代初期に明の禅僧隠元により伝えられた精進料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "結解料理",
        correct: false,
        explanation: "結解料理は東大寺に伝わる古い精進料理です。"
      },
      {
        text: "普茶料理",
        correct: true,
        explanation: "普茶料理は、明の禅僧・隠元によって中国から伝えられた精進料理です。"
      },
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道とともに発展した料理です。"
      },
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は長崎で発展した中国風料理です。"
      },
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は武家社会の正式な料理です。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理全般ではなく、その中でも『普茶料理』を指します。"
      },
      {
        text: "袱紗料理",
        correct: false,
        explanation: "袱紗料理は江戸時代後期に体系化された料理です。"
      },
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は酒宴向けの料理形式です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "武家や公家、庶民にまで普及し、江戸時代後期には、調理法も体系付けられた料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "結解料理",
        correct: false,
        explanation: "結解料理は古い精進料理であり、広く体系化された料理ではありません。"
      },
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道に関係する料理です。"
      },
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は武家中心の正式料理でした。"
      },
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は長崎で発展した中国風料理です。"
      },
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は宴席料理として発展しました。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理は仏教思想に基づく料理です。"
      },
      {
        text: "袱紗料理",
        correct: true,
        explanation: "袱紗料理は武家や庶民にも広まり、江戸後期には調理法が体系化されました。"
      },
      {
        text: "普茶料理",
        correct: false,
        explanation: "普茶料理は中国由来の精進料理です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "江戸時代初期に、長崎で起こったもので、円卓を囲んで椅子に座り、大皿に盛られた料理を各自が取り分けて食べる料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道とともに発展した料理形式です。"
      },
      {
        text: "普茶料理",
        correct: false,
        explanation: "普茶料理は中国風精進料理です。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理は仏教に基づく料理です。"
      },
      {
        text: "卓袱料理",
        correct: true,
        explanation: "卓袱料理は長崎で発展し、円卓を囲んで大皿料理を分け合う形式です。"
      },
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は個別配膳の正式料理です。"
      },
      {
        text: "結解料理",
        correct: false,
        explanation: "結解料理は東大寺の精進料理です。"
      },
      {
        text: "袱紗料理",
        correct: false,
        explanation: "袱紗料理とは異なる料理形式です。"
      },
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は宴席向けの料理です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "室町時代に始まり、江戸時代にかけて発達した武家社会の式正料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は酒宴向けの料理です。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理は仏教の戒律に基づく料理です。"
      },
      {
        text: "袱紗料理",
        correct: false,
        explanation: "袱紗料理は江戸後期に体系化された料理です。"
      },
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道に関係する料理です。"
      },
      {
        text: "普茶料理",
        correct: false,
        explanation: "普茶料理は中国由来の精進料理です。"
      },
      {
        text: "結解料理",
        correct: false,
        explanation: "結解料理は東大寺の古い精進料理です。"
      },
      {
        text: "本膳料理",
        correct: true,
        explanation: "本膳料理は武家社会で発達した正式な儀礼料理です。"
      },
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は長崎で発展した料理です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "修行僧が精進する際にとる粗食のことで、鎌倉時代に禅宗の僧の簡素な日常生活の中から形成された料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は武家社会の正式料理です。"
      },
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は宴席料理です。"
      },
      {
        text: "普茶料理",
        correct: false,
        explanation: "普茶料理は中国由来の精進料理です。"
      },
      {
        text: "精進料理",
        correct: true,
        explanation: "精進料理は禅宗僧侶の修行生活から発展した料理です。"
      },
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は長崎の中国風料理です。"
      },
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道に関連する料理です。"
      },
      {
        text: "結解料理",
        correct: false,
        explanation: "結解料理は東大寺の古い精進料理です。"
      },
      {
        text: "袱紗料理",
        correct: false,
        explanation: "袱紗料理とは異なります。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "酒を楽しむための料理として発展し、現在の宴席の主流な様式となっている料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "結解料理",
        correct: false,
        explanation: "結解料理は東大寺に伝わる精進料理です。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理は仏教に基づき、酒宴料理ではありません。"
      },
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道と結びついた料理です。"
      },
      {
        text: "普茶料理",
        correct: false,
        explanation: "普茶料理は中国風精進料理です。"
      },
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は儀礼的な正式料理です。"
      },
      {
        text: "会席料理",
        correct: true,
        explanation: "会席料理は酒宴を楽しむために発展した料理形式です。"
      },
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は大皿料理を取り分ける形式です。"
      },
      {
        text: "袱紗料理",
        correct: false,
        explanation: "袱紗料理とは異なる料理形式です。"
      }
    ]
  },

  {
    category: "世界の食通信",
    question: "東大寺のわが国最古の精進料理とは、次の内どれでしょうか。",
    choices: [
      {
        text: "卓袱料理",
        correct: false,
        explanation: "卓袱料理は長崎で発展した中国風料理です。"
      },
      {
        text: "袱紗料理",
        correct: false,
        explanation: "袱紗料理は江戸時代後期に体系化された料理です。"
      },
      {
        text: "懐石料理",
        correct: false,
        explanation: "懐石料理は茶道とともに発展しました。"
      },
      {
        text: "結解料理",
        correct: true,
        explanation: "結解料理は東大寺に伝わる、日本最古級の精進料理です。"
      },
      {
        text: "精進料理",
        correct: false,
        explanation: "精進料理全般ではなく、『結解料理』を指しています。"
      },
      {
        text: "本膳料理",
        correct: false,
        explanation: "本膳料理は武家の正式料理です。"
      },
      {
        text: "普茶料理",
        correct: false,
        explanation: "普茶料理は中国由来の精進料理です。"
      },
      {
        text: "会席料理",
        correct: false,
        explanation: "会席料理は宴席料理です。"
      }
    ]
  }

];
