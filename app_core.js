// 起動時の更新確認とキャッシュ管理はindex.htmlに集約。
const questionData = {
  ...((typeof window !== "undefined" && window.koukiSpecialQuestionData) || {}),
  "調理理論（グローバル）": globalChoririronQuestions,
  "調理理論": choririronQuestions,
  "フードセーフティ論": foodsafetyQuestions,
  "食品栄養学（食品学）": syokuhingakuQuestions,
  "食品栄養学（栄養学）": eiyougakuQuestions,
  "ヘルシーライフ研究": healthylifeQuestions
};


 // キーワード学習：既存問題を参照し、覚えた・採点履歴を共有する。
 const keywordSynonyms = [
 ["重曹","炭酸水素ナトリウム","炭酸水素Na","重炭酸ナトリウム"],
 ["ビタミンB1","チアミン"],["ビタミンB2","リボフラビン"],
 ["ビタミンC","アスコルビン酸"],["ビタミンB6","ピリドキシン"],
 ["HACCP","ハサップ"],["うま味","旨味","旨み","うまみ"],
 ["ミョウバン","明礬","みょうばん"],["食塩","塩化ナトリウム","塩化Na"],
 ["ベーキングパウダー","ベイキングパウダー"],
 ["グルテンフリー","グルテン・フリー","gluten free","gluten-free"],
 ["アレルギー","アレルギィ"],["ノロウイルス","ノロウィルス"],
 ["腸炎ビブリオ","腸炎ヴィブリオ"],["黄色ブドウ球菌","黄色ぶどう球菌"],
 ["食物繊維","dietary fiber"],["たんぱく質","タンパク質","蛋白質"],
 ["二酸化炭素","炭酸ガス","CO2"],
 ["脂質","リピッド"],["メイラード反応","メーラード反応","アミノカルボニル反応"]
 ];
 function normalizeKeyword(value){
   return String(value ?? "").normalize("NFKC").toLowerCase()
    .replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-96))
    .replace(/\s+/g,"");
 }
 function keywordTerms(value){
   return [...new Set((value.trim().match(/"[^"]+"|[^\s、,，]+/g)||[]).map(v=>normalizeKeyword(v.replace(/^"|"$/g,""))).filter(Boolean))];
 }
 function keywordVariants(term){
   const group=keywordSynonyms.find(g=>g.some(v=>normalizeKeyword(v)===term));
   return group ? [...new Set(group.map(normalizeKeyword))] : [term];
 }
 function keywordMatches(question, terms, mode){
   const fields=[question.question,...(question.choices||[]),question.explanation,
     ...Object.values(question.choiceExplanations||{})].map(v=>normalizeKeyword(String(v??"").replace(/<[^>]*>/g,"")));
   const hit=term=>keywordVariants(term).some(v=>fields.some(field=>{let pos=field.indexOf(v);while(pos!==-1){if(!/\d$/.test(v)||!/^\d/.test(field.slice(pos+v.length)))return true;pos=field.indexOf(v,pos+1);}return false;}));
   return terms.length>0 && (mode==="and"?terms.every(hit):terms.some(hit));
 }
 const KEYWORD_HISTORY_KEY="koukiKeywordHistory";
 function readKeywordHistory(){
   try {const h=JSON.parse(localStorage.getItem(KEYWORD_HISTORY_KEY)||"[]");return Array.isArray(h)?h.filter(v=>typeof v==="string").slice(0,10):[];}catch{return [];}
 }
 function uniqueQuizQuestions(questions){
   // 同じ問題文・選択肢の問題を一度だけ出題。既存の履歴キーは変更しない。
   const seen=new Set();
   return questions.filter(q=>{const key=JSON.stringify([q.question,[...(q.choices||[])].sort()]);if(seen.has(key))return false;seen.add(key);return true;});
 }
 function openKeywordStudy(){
   const area=document.getElementById("categoryArea");
   const settings=document.getElementById("quizSettings");
   if(settings) settings.remove();
   setSettingsVisible(false);
   area.innerHTML='<section class="keyword-panel"><h2>キーワード学習</h2><form id="keywordForm"><label for="keywordInput">復習したいキーワード</label><input id="keywordInput" type="search" autocomplete="off" placeholder="例：重曹、HACCP" maxlength="200"><small>空白・読点で複数指定。類義語・表記ゆれも検索します。</small><div id="keywordHistory"></div><label for="keywordCategory">検索対象カテゴリ</label><select id="keywordCategory"><option value="">すべてのカテゴリ</option></select><fieldset><legend>複数キーワードの条件</legend><label><input type="radio" name="keywordMode" value="or" checked> いずれかを含む（OR）</label><label><input type="radio" name="keywordMode" value="and"> すべてを含む（AND）</label></fieldset><label class="keyword-check"><input type="checkbox" id="keywordExclude" checked> 「覚えた」問題を除外する</label><p id="keywordCount" aria-live="polite"></p><button type="submit" class="nextBtn" id="keywordStart" disabled>学習を開始する</button></form><button type="button" class="backBtn" id="keywordBack">カテゴリ選択へ戻る</button></section>';
   if(settings){area.appendChild(settings);settings.style.display="none";}
   const input=document.getElementById("keywordInput");
   const category=document.getElementById("keywordCategory");
   const form=document.getElementById("keywordForm");
   const exclude=document.getElementById("keywordExclude");
   const count=document.getElementById("keywordCount");
   const start=document.getElementById("keywordStart");
   const history=document.getElementById("keywordHistory");
   Object.keys(questionData).filter(k=>questionData[k].length).forEach(k=>{
     const option=document.createElement("option");option.value=k;option.textContent=k;category.appendChild(option);
   });
   let matches=[];
   function refresh(){
     const terms=keywordTerms(input.value);
     const mode=form.elements.keywordMode.value;
     const source=category.value?questionData[category.value]:Object.values(questionData).flat();
     const all=uniqueQuizQuestions(source.filter(q=>keywordMatches(q,terms,mode)));
     const mastered=new Set(JSON.parse(localStorage.getItem("koukiMasteredQuestions")||"[]"));
     const progress=getCategoryProgress(all,mastered);
     matches=exclude.checked?all.filter(q=>!mastered.has(q.question)):all;
     count.textContent=terms.length?"該当 "+all.length+"問 ｜ 覚えた "+progress.learned+"問（"+progress.percentage+"％）｜ 出題 "+matches.length+"問":"キーワードを入力してください";
     start.disabled=!matches.length;
   }
   function renderHistory(){
     history.replaceChildren();
     const saved=readKeywordHistory();
     const words=saved.length?saved:["重曹","膨張剤","食品添加物","ベーキングパウダー"];
     const title=document.createElement("small");title.textContent=saved.length?"最近の検索":"検索例";history.appendChild(title);
     words.forEach(word=>{const b=document.createElement("button");b.type="button";b.textContent=word;b.onclick=()=>{input.value=word;refresh();};history.appendChild(b);});
     if(saved.length){const b=document.createElement("button");b.type="button";b.textContent="履歴を消去";b.onclick=()=>{localStorage.removeItem(KEYWORD_HISTORY_KEY);renderHistory();};history.appendChild(b);}
   }
   form.addEventListener("input",refresh);
   form.addEventListener("change",refresh);
   form.addEventListener("submit",event=>{
     event.preventDefault();refresh();if(!matches.length)return;
     const word=input.value.trim();
     localStorage.setItem(KEYWORD_HISTORY_KEY,JSON.stringify([word,...readKeywordHistory().filter(v=>v!==word)].slice(0,10)));
     masteredQuestions=JSON.parse(localStorage.getItem("koukiMasteredQuestions")||"[]");
     retryMode=false;quizList=shuffle(matches);currentQuiz=0;score=0;
     area.style.display="none";document.getElementById("quizArea").style.display="block";
     document.getElementById("categoryTitle").textContent="キーワード学習："+word;
     document.getElementById("backCategoryBtn").style.display="block";
     loadQuiz();window.scrollTo({top:0,behavior:"auto"});
   });
   document.getElementById("keywordBack").onclick=()=>{loadCategories();window.scrollTo({top:0,behavior:"auto"});};
   renderHistory();refresh();window.scrollTo({top:0,behavior:"auto"});
 }

let currentQuiz = 0;
let score = 0;
let quizList = [];
let wrongQuestions = JSON.parse(localStorage.getItem("koukiWrongQuestions")) || [];
// 過去に保存した復習問題からも選択肢先頭の丸数字を除く。
let savedChoicesUpdated = false;
wrongQuestions.forEach(quiz => {
  if (!Array.isArray(quiz.choices)) return;
  quiz.choices = quiz.choices.map(choice => {
    if (typeof choice !== "string") return choice;
    const cleanedChoice = choice.replace(/^\s*[①-⑳❶-❿]\s*/u, "");
    if (cleanedChoice !== choice) savedChoicesUpdated = true;
    return cleanedChoice;
  });
});
if (savedChoicesUpdated) {
  localStorage.setItem("koukiWrongQuestions", JSON.stringify(wrongQuestions));
}

let masteredQuestions =  JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];
let retryMode = false;
let currentChoiceOrder = [];

// この端末での設定を保持。未設定時はオフ。
const AUTO_MASTER_KEY = "koukiAutoMasterOnCorrect";
function setupAutoMasterSetting(){
  // 古いHTMLがキャッシュに残っていても、新しい設定UIを補って起動する。
  if(!document.getElementById("autoMasterToggle")){
    const container = document.querySelector(".container");
    if(container) container.insertAdjacentHTML("afterbegin", "<details id=\"quizSettings\" class=\"quiz-settings\">\n  <summary>⚙ 設定 <span id=\"autoMasterStatus\" class=\"settings-status\">自動で覚えた：オフ</span></summary>\n  <label class=\"auto-master-setting\" for=\"autoMasterToggle\">\n    <span>正解した問題を自動で「覚えた」にする</span>\n    <input type=\"checkbox\" id=\"autoMasterToggle\" role=\"switch\" aria-describedby=\"autoMasterHelp\">\n  </label>\n  <p id=\"autoMasterHelp\">オンにすると、正解した問題は次回の出題から外れます。途中でも変更でき、次の採点から適用されます。自動登録後も「覚えた済み」ボタンで解除できます。</p>\n</details>");
  }
  const toggle = document.getElementById("autoMasterToggle");
  const status = document.getElementById("autoMasterStatus");
  if(!toggle || !status) return;
  toggle.checked = localStorage.getItem(AUTO_MASTER_KEY) === "true";
  const updateStatus = () => {
    status.textContent = "自動で覚えた：" + (toggle.checked ? "オン" : "オフ");
  };
  updateStatus();
  toggle.addEventListener("change", () => {
    localStorage.setItem(AUTO_MASTER_KEY, String(toggle.checked));
    updateStatus();
  });
}


function setupDarkModeSetting(){
  // 旧画面が残っていても、独立ボタンを削除し設定内にスイッチを補う。
  const legacyButton = document.getElementById("themeToggle");
  if(legacyButton) legacyButton.remove();
  const settings = document.getElementById("quizSettings");
  if(settings && !document.getElementById("darkModeToggle")){
    settings.insertAdjacentHTML("beforeend", "<label class=\"auto-master-setting\" for=\"darkModeToggle\">\n    <span>ダークモード</span>\n    <input type=\"checkbox\" id=\"darkModeToggle\" role=\"switch\">\n  </label>");
  }
  const toggle = document.getElementById("darkModeToggle");
  const isDark = localStorage.getItem("koukiDarkMode") === "true";
  document.body.classList.toggle("dark", isDark);
  if(!toggle) return;
  toggle.checked = isDark;
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
    localStorage.setItem("koukiDarkMode", String(toggle.checked));
  });
}

function shuffle(array){
  return [...array].sort(() => Math.random() - 0.5);
}

function setSettingsVisible(visible){
  const settings = document.getElementById("quizSettings");
  if(settings) settings.style.display = visible ? "" : "none";
  if(settings && !visible) settings.open = false;
  document.body.classList.toggle("category-screen", visible);
}

// 出題時と同じ「問題文」の保存キーで、現在のデータに対する進捗を計算する。
function getCategoryProgress(questions, mastered){
  const total = questions.length;
  const learned = questions.filter(q => mastered.has(q.question)).length;
  return {
    total,
    learned,
    remaining: total - learned,
    percentage: total === 0 ? 0 : Math.round(learned / total * 100)
  };
}

function arrangeCategorySettings(settings){
  if(!settings || settings.querySelector(".settings-panel")) return;
  const summary = settings.querySelector("summary");
  const panel = document.createElement("div");
  panel.className = "settings-panel";
  const status = summary.querySelector("#autoMasterStatus");
  if(status) panel.appendChild(status);
  Array.from(settings.childNodes).forEach(node => {
    if(node !== summary) panel.appendChild(node);
  });
  summary.innerHTML = '<span class="settings-icon" aria-hidden="true">⚙</span><span>設定</span>';
  settings.appendChild(panel);
  document.addEventListener("click", event => {
    if(settings.open && !settings.contains(event.target)) settings.open = false;
  });
  settings.addEventListener("keydown", event => {
    if(event.key === "Escape"){
      settings.open = false;
      summary.focus();
    }
  });
}

function loadCategories(){
  setSettingsVisible(true);

  const area = document.getElementById("categoryArea");
  const settings = document.getElementById("quizSettings");
  // 同じ設定要素を移動し、スイッチの状態とイベントを保持する。
  if(settings) settings.remove();
  area.innerHTML = '<div class="category-header"><h2>カテゴリ選択（後期）</h2></div>';
  if(settings){
    arrangeCategorySettings(settings);
    area.querySelector(".category-header").appendChild(settings);
  }
  masteredQuestions = JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];
  const mastered = new Set(masteredQuestions);
  const cards = document.createElement("div");
  cards.className = "category-cards";
  Object.keys(questionData).filter(category=>questionData[category].length>0).forEach(category => {
    const progress = getCategoryProgress(questionData[category], mastered);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "categoryBtn";
    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = category;
    btn.appendChild(name);
    const counts = document.createElement("span");
    counts.className = "category-counts";
    counts.textContent = `全${progress.total}問 ｜ 覚えた${progress.learned}問`;
    btn.appendChild(counts);
    const remaining = document.createElement("span");
    remaining.className = "category-remaining";
    remaining.innerHTML = `残り <strong>${progress.remaining}</strong>問<span class="category-chevron" aria-hidden="true">›</span>`;
    btn.appendChild(remaining);
    const meter = document.createElement("span");
    meter.className = "category-meter";
    meter.innerHTML = `<span class="category-meter-label">覚えた割合 <strong>${progress.percentage}％</strong></span><span class="category-meter-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percentage}"><span class="category-meter-fill" style="width:${progress.percentage}%"></span></span>`;
    meter.querySelector('[role="progressbar"]').setAttribute("aria-label", category + "の覚えた割合");
    btn.appendChild(meter);
    btn.onclick = () => startQuiz(category);
    cards.appendChild(btn);
  });
  area.appendChild(cards);
  const keywordButton=document.createElement("button");
  keywordButton.type="button";
  keywordButton.className="keyword-study-btn";
  keywordButton.textContent="⌕ キーワード学習 ›";
  keywordButton.onclick=openKeywordStudy;
  area.appendChild(keywordButton);

// 間違えた問題だけ再挑戦
const retryBtn = document.createElement("button");

retryBtn.className = "retryBtn";

retryBtn.innerText =
  `間違えた問題を再挑戦`;

retryBtn.onclick = () => {

  if(wrongQuestions.length === 0){

    showAppNotice("まだ間違えた問題がありません！", "warning");

    return;

  }

  retryMode = true;

quizList =
 shuffle(
   wrongQuestions.filter(
     q => !masteredQuestions.includes(q.question)
   )
 );

if(quizList.length === 0){

  showAppNotice("再挑戦対象の問題がありません", "warning");

  return;

}

  currentQuiz = 0;

  score = 0;

  document.getElementById("categoryArea").style.display =
    "none";

  document.getElementById("quizArea").style.display =
    "block";

  document.getElementById("categoryTitle").innerText =
    "苦手問題再挑戦";

  // 再挑戦モードでも通常カテゴリと同じ操作ボタンを表示する
  document.getElementById("masterBtn").style.display = "block";
  document.getElementById("backCategoryBtn").style.display = "block";

  loadQuiz();

};

area.appendChild(retryBtn);

const categoryReset = document.createElement("details");
categoryReset.className = "category-master-reset";
const summary = document.createElement("summary");
summary.textContent = "「覚えた」を解除";
categoryReset.appendChild(summary);

const label = document.createElement("label");
label.htmlFor = "masterResetCategory";
label.textContent = "解除する対象";
categoryReset.appendChild(label);

const select = document.createElement("select");
select.id = "masterResetCategory";
const allOption = document.createElement("option");
allOption.value = "";
allOption.textContent = "全カテゴリ";
select.appendChild(allOption);
Object.keys(questionData).forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  select.appendChild(option);
});
categoryReset.appendChild(select);

const count = document.createElement("p");
count.setAttribute("aria-live", "polite");
categoryReset.appendChild(count);

const resetBtn = document.createElement("button");
resetBtn.type = "button";
resetBtn.textContent = "選んだ対象の「覚えた」を解除";
const updateResetCount = () => {
  const saved = JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];
  const questions = new Set((questionData[select.value] || []).map(q => q.question));
  const total = new Set(select.value === "" ? saved : saved.filter(q => questions.has(q))).size;
  count.textContent = "覚えた問題：" + total + "問";
  resetBtn.disabled = total === 0;
};
select.addEventListener("change", updateResetCount);
resetBtn.onclick = () => confirmCategoryMasterReset(select.value);
categoryReset.appendChild(resetBtn);
updateResetCount();
area.appendChild(categoryReset);


}


function confirmCategoryMasterReset(category){
  const allCategories = category === "";
  const target = allCategories ? "全カテゴリ" : category;
  const questions = new Set((questionData[category] || []).map(q => q.question));
  const saved = JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];
  const count = new Set(allCategories ? saved : saved.filter(q => questions.has(q))).size;
  if(count === 0){
    showAppNotice("選んだ対象に覚えた問題はありません", "info");
    return;
  }
  showAppConfirm({
    title: "「覚えた」を解除",
    message: "「" + target + "」の覚えた問題 " + count + "問を解除しますか？",
    confirmText: "解除する",
    cancelText: "キャンセル",
    danger: true,
    onConfirm: () => {
      // 確認中の変更も保持するため、保存状態を取り直す。
      masteredQuestions = allCategories ? [] :
        (JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [])
          .filter(q => !questions.has(q));
      localStorage.setItem("koukiMasteredQuestions", JSON.stringify(masteredQuestions));
      loadCategories();
      showAppNotice("「" + target + "」の覚えた登録を解除しました", "success");
    }
  });
}

function startQuiz(category){

  masteredQuestions = JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];

  retryMode = false;

  if(!questionData[category] || questionData[category].length === 0){
    showAppNotice("このカテゴリの問題はまだ登録されていません", "info");
    return;
  }

  quizList = shuffle(
    questionData[category].filter(
      q => !masteredQuestions.includes(q.question)
    )
  );

  if(quizList.length === 0){
    showAppNotice("このカテゴリの問題はすべて覚えた状態です", "info");
    return;
  }

  currentQuiz = 0;
  score = 0;

  document.getElementById("categoryArea").style.display = "none";
  document.getElementById("quizArea").style.display = "block";

  document.getElementById("categoryTitle").innerText = category;

  document.getElementById("masterBtn").style.display = "block";
  document.getElementById("backCategoryBtn").style.display = "block";

  loadQuiz();
}

function loadQuiz(){
  setSettingsVisible(false);

  const quiz = quizList[currentQuiz];

  document.getElementById("question").innerHTML =
    quiz.question;

  document.getElementById("progress").innerHTML =
    `${currentQuiz+1} / ${quizList.length}`;

  document.getElementById("choices").innerHTML = "";

  // 追加
  document.getElementById("result").innerHTML = "";

  // 追加
  document.getElementById("explanation").innerHTML = "";

  const imageArea =
    document.getElementById("imageArea");

  imageArea.innerHTML = "";

  if(quiz.image){

    imageArea.innerHTML =
      `<img src="${quiz.image}">`;

  }

  const choicesDiv = document.getElementById("choices");

  choicesDiv.innerHTML = "";

  // 選択肢は出題のたびにランダム表示する。
  // 値には元データ上の選択肢番号を保持し、正誤判定・解説との対応を崩さない。
  currentChoiceOrder = shuffle(quiz.choices.map((choice, originalIndex) => ({ choice, originalIndex })));

  currentChoiceOrder.forEach(({choice, originalIndex})=>{

    const btn = document.createElement("button");

    btn.className = "choice";
    btn.dataset.originalIndex = String(originalIndex);

    btn.innerText = choice;

    btn.onclick = ()=>{
      // 後期問題はすべて一択。選択した瞬間に採点する。
      if(btn.disabled) return;
      document.querySelectorAll(".choice").forEach(choiceBtn => {
        choiceBtn.classList.remove("selected");
      });
      btn.classList.add("selected");
      submitAnswer();
    };

    choicesDiv.appendChild(btn);

  });
// 後期問題は選択肢を押した瞬間に採点するため「回答する」ボタンは表示しない。
document.getElementById("submitBtn").style.display = "none";

document.getElementById("nextBtn").style.display = "none";
document.getElementById("nextBtnBottom").style.display = "none";

const masterBtn =
  document.getElementById("masterBtn");

if(masteredQuestions.includes(quiz.question)){
  masterBtn.innerText = "✓ 覚えた済み";
}else{
  masterBtn.innerText = "✓ 覚えた";
}
masterBtn.setAttribute("aria-pressed", String(masteredQuestions.includes(quiz.question)));
// 「覚えた」は採点後だけ表示する。
masterBtn.style.display = "none";

}

function submitAnswer(){

  const quiz = quizList[currentQuiz];

  const buttons = document.querySelectorAll(".choice");

  let selected = [];

  buttons.forEach((btn)=>{

    if(btn.classList.contains("selected")){
      selected.push(Number(btn.dataset.originalIndex));
    }

  });

  const isCorrect =
    selected.length === quiz.answer.length &&
    selected.every(i=>quiz.answer.includes(i));

  buttons.forEach((btn)=>{

    btn.disabled = true;
    const originalIndex = Number(btn.dataset.originalIndex);

    if(quiz.answer.includes(originalIndex)){
      btn.classList.add("correct");
    }

    if(btn.classList.contains("selected") &&
      !quiz.answer.includes(originalIndex)){
      btn.classList.add("wrong");
    }

  });

  if(isCorrect){

  score++;

  if(localStorage.getItem(AUTO_MASTER_KEY) === "true"){
    markQuestionMastered(quiz);
  }


  // 再挑戦モードなら卒業
  if(retryMode){

    wrongQuestions =
      wrongQuestions.filter(
        q => q.question !== quiz.question
      );

    localStorage.setItem(
      "koukiWrongQuestions",
      JSON.stringify(wrongQuestions)
    );

  }

}else{

  // 重複保存防止
  if(!wrongQuestions.some(
    q => q.question === quiz.question
  )){

    wrongQuestions.push(quiz);

    localStorage.setItem(
      "koukiWrongQuestions",
      JSON.stringify(wrongQuestions)
    );

  }

}

  saveStats(isCorrect, quiz);

  document.getElementById("result").innerHTML =
    isCorrect ? "⭕ 正解" : "❌ 不正解";



  let explanationHTML = `
    <div class="mainExplanation">
      <strong>解説</strong><br>
      ${(quiz.explanation || "").replace(/^正解です[。！!、][\\s　]*/, "")}
    </div>
  `;

  if(quiz.choiceExplanations){

    explanationHTML += `
      <div class="choiceExplanationTitle">
        <strong>各選択肢の解説</strong>
      </div>
    `;

    // 出題時の表示順を使い、正解・解説は元の選択肢番号で参照する。
    currentChoiceOrder.forEach(({choice, originalIndex: index})=>{

      const mark =
        quiz.answer.includes(index) ? "⭕" : "❌";

      explanationHTML += `
        <div class="choiceExplanationItem">
          <strong>${mark} ${choice}</strong><br>
          ${quiz.choiceExplanations[index] || ""}
        </div>
      `;

    });

  }

  document.getElementById("explanation").innerHTML =
    explanationHTML;

document.getElementById("submitBtn").style.display = "none";

document.getElementById("nextBtn").style.display = "block";
document.getElementById("nextBtnBottom").style.display = "block";
document.getElementById("masterBtn").style.display = "block";

}

function nextQuestion(){

  currentQuiz++;

  if(currentQuiz < quizList.length){

    loadQuiz();


  }else{

    finishQuiz();

  }

}

function finishQuiz(){

  retryMode = false;

  document.getElementById("categoryTitle").innerText = "終了！";

  document.getElementById("progress").innerHTML = "";

  document.getElementById("question").innerHTML = `
    点数: ${score} / ${quizList.length}<br>
    正答率: ${Math.round(score / quizList.length * 100)}%
  `;

  document.getElementById("imageArea").innerHTML = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("explanation").innerHTML = "";

  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
document.getElementById("nextBtnBottom").style.display = "none";
  document.getElementById("masterBtn").style.display = "none";
  document.getElementById("backCategoryBtn").style.display = "block";
}

function backToCategory(){

  retryMode = false;

  document.getElementById("quizArea").style.display = "none";
  document.getElementById("categoryArea").style.display = "block";

  document.getElementById("categoryTitle").innerText = "";
  document.getElementById("progress").innerHTML = "";
  document.getElementById("question").innerHTML = "";
  document.getElementById("imageArea").innerHTML = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("explanation").innerHTML = "";

  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
document.getElementById("nextBtnBottom").style.display = "none";
  document.getElementById("masterBtn").style.display = "none";
  document.getElementById("backCategoryBtn").style.display = "none";

  loadCategories();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function saveStats(isCorrect, quiz){

  let stats =
    JSON.parse(localStorage.getItem("koukiStats") || "{}");

  const key = quiz.question;

  if(!stats[key]){

    stats[key] = {
      correct:0,
      wrong:0
    };

  }

  if(isCorrect){
    stats[key].correct++;
  }else{
    stats[key].wrong++;
  }

  localStorage.setItem("koukiStats", JSON.stringify(stats));

  analyzeWeakQuestions();

}

function analyzeWeakQuestions(){

  const stats =
    JSON.parse(localStorage.getItem("koukiStats") || "{}");

  let weak = [];

  Object.keys(stats).forEach(q => {

    if(stats[q].wrong > stats[q].correct){

      weak.push(q);

    }

  });

  localStorage.setItem(
    "koukiWeakQuestions",
    JSON.stringify(weak)
  );

}

document.getElementById("submitBtn").onclick =
  submitAnswer;

document.getElementById("nextBtn").onclick =
  nextQuestion;

// 解説を読み終えた位置から次へ進み、次の問題の先頭を表示する。
document.getElementById("nextBtnBottom").onclick = () => {
  nextQuestion();
  window.scrollTo({ top: 0, behavior: "auto" });
};

async function loadCSV(url){

  const text = await fetch(url).then(r=>r.text());

  console.log("CSV loaded:", text);

}

async function loadGoogleSheet(){

  const SHEET_CSV_URL =
    "YOUR_GOOGLE_SHEET_CSV_URL";

  loadCSV(SHEET_CSV_URL);

}

/* 旧キャッシュ競合防止のためService Workerを無効化 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then(regs => regs.forEach(reg => reg.unregister()))
    .catch(() => {});
}

setupAutoMasterSetting();
setupDarkModeSetting();
loadCategories();
setupMasterButton();



// ブラウザ標準のalert()/confirm()を使わないアプリ内通知
function showAppNotice(message, type = "info"){
  const existing = document.getElementById("appNoticeToast");
  if(existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "appNoticeToast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  const marks = {
    success: "✓",
    warning: "!",
    info: "i"
  };

  toast.innerHTML = `
    <span aria-hidden="true" style="font-weight:800;font-size:1.1rem;">${marks[type] || "i"}</span>
    <span>${message}</span>
  `;

  toast.style.cssText = `
    position: fixed;
    left: 50%;
    bottom: max(24px, env(safe-area-inset-bottom));
    transform: translateX(-50%);
    z-index: 11000;
    display: flex;
    align-items: center;
    gap: 10px;
    width: max-content;
    max-width: min(90vw, 520px);
    padding: 13px 18px;
    border-radius: 12px;
    background: rgba(35, 35, 40, 0.96);
    color: #fff;
    box-shadow: 0 8px 28px rgba(0,0,0,.28);
    font-weight: 700;
    line-height: 1.45;
    text-align: left;
  `;

  document.body.appendChild(toast);
  window.setTimeout(() => {
    if(toast.isConnected) toast.remove();
  }, 2400);
}

function showAppConfirm({
  title = "確認",
  message = "実行しますか？",
  confirmText = "実行する",
  cancelText = "キャンセル",
  danger = false,
  onConfirm = () => {},
  onCancel = () => {}
} = {}){
  const existing = document.getElementById("appConfirmDialogOverlay");
  if(existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "appConfirmDialogOverlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 12000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(0,0,0,.56);
  `;

  const dialog = document.createElement("div");
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "appConfirmDialogTitle");
  dialog.style.cssText = `
    width: min(92vw, 430px);
    padding: 24px;
    border-radius: 15px;
    background: var(--card-bg, #fff);
    color: inherit;
    box-shadow: 0 14px 40px rgba(0,0,0,.34);
    text-align: center;
  `;

  dialog.innerHTML = `
    <div id="appConfirmDialogTitle" style="font-size:1.15rem;font-weight:800;margin-bottom:12px;">
      ${title}
    </div>
    <div style="line-height:1.65;margin-bottom:22px;white-space:pre-wrap;">${message}</div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button type="button" id="appConfirmCancelBtn" style="min-width:120px;padding:12px 16px;">
        ${cancelText}
      </button>
      <button type="button" id="appConfirmOkBtn" style="min-width:120px;padding:12px 16px;${danger ? 'background:#c62828;color:#fff;border:none;' : ''}">
        ${confirmText}
      </button>
    </div>
  `;

  overlay.appendChild(dialog);
  document.body.appendChild(overlay);

  const close = () => {
    document.removeEventListener("keydown", onKeydown);
    overlay.remove();
  };
  const cancel = () => {
    close();
    onCancel();
  };
  const confirmAction = () => {
    close();
    onConfirm();
  };
  const onKeydown = (event) => {
    if(event.key === "Escape") cancel();
  };

  document.addEventListener("keydown", onKeydown);
  document.getElementById("appConfirmCancelBtn").onclick = cancel;
  document.getElementById("appConfirmOkBtn").onclick = confirmAction;
  overlay.addEventListener("click", (event) => {
    if(event.target === overlay) cancel();
  });
  document.getElementById("appConfirmOkBtn").focus();
}

const backCategoryBtn = document.getElementById("backCategoryBtn");
if (backCategoryBtn) {
  backCategoryBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showBackCategoryDialog();
  });
}

// ブラウザ標準のconfirm()は「今後ダイアログを表示しない」を選ぶと
// 以後の操作が止まることがあるため、アプリ内の確認画面を使用する。
function showBackCategoryDialog(){
  if(document.getElementById("backCategoryDialogOverlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "backCategoryDialogOverlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.55);
  `;

  const dialog = document.createElement("div");
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "backCategoryDialogTitle");
  dialog.style.cssText = `
    width: min(92vw, 420px);
    padding: 24px;
    border-radius: 14px;
    background: var(--card-bg, #ffffff);
    color: inherit;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
    text-align: center;
  `;

  dialog.innerHTML = `
    <div id="backCategoryDialogTitle" style="font-size:1.1rem;font-weight:700;margin-bottom:20px;">
      カテゴリ選択へ戻りますか？
    </div>
    <div style="display:flex;gap:12px;justify-content:center;">
      <button type="button" id="cancelBackCategoryBtn" style="min-width:110px;padding:12px 16px;">
        キャンセル
      </button>
      <button type="button" id="confirmBackCategoryBtn" style="min-width:110px;padding:12px 16px;">
        戻る
      </button>
    </div>
  `;

  overlay.appendChild(dialog);
  document.body.appendChild(overlay);

  const closeDialog = () => {
    document.removeEventListener("keydown", handleKeydown);
    overlay.remove();
  };

  const handleKeydown = (event) => {
    if(event.key === "Escape") closeDialog();
  };

  document.addEventListener("keydown", handleKeydown);

  document.getElementById("cancelBackCategoryBtn").onclick = closeDialog;
  document.getElementById("confirmBackCategoryBtn").onclick = () => {
    closeDialog();
    backToCategory();
  };

  overlay.addEventListener("click", (event) => {
    if(event.target === overlay) closeDialog();
  });

  document.getElementById("confirmBackCategoryBtn").focus();
}

// 自動・手動で同じ保存処理を使い、現在の問題と解説は表示したままにする。
function markQuestionMastered(quiz){
  masteredQuestions = JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];
  masteredQuestions = [...new Set([...masteredQuestions, quiz.question])];
  localStorage.setItem("koukiMasteredQuestions", JSON.stringify(masteredQuestions));

  wrongQuestions = (JSON.parse(localStorage.getItem("koukiWrongQuestions")) || [])
    .filter(q => q.question !== quiz.question);
  localStorage.setItem("koukiWrongQuestions", JSON.stringify(wrongQuestions));

  quizList = quizList.filter((q, index) => index <= currentQuiz || q.question !== quiz.question);
  const masterBtn = document.getElementById("masterBtn");
  masterBtn.innerText = "✓ 覚えた済み";
  masterBtn.setAttribute("aria-pressed", "true");
}

function setupMasterButton(){

  document.getElementById("masterBtn").onclick = ()=>{

    const quiz = quizList[currentQuiz];
    if(!quiz) return;

    // 念のため最新状態を取得
    masteredQuestions =
      JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];

    // 既に覚えた問題なら解除
    if(masteredQuestions.includes(quiz.question)){

      masteredQuestions =
        masteredQuestions.filter(
          q => q !== quiz.question
        );

      localStorage.setItem(
        "koukiMasteredQuestions",
        JSON.stringify(masteredQuestions)
      );

      document.getElementById("masterBtn").innerText =
        "✓ 覚えた";

      document.getElementById("masterBtn").setAttribute("aria-pressed", "false");
      showAppNotice("覚えた登録を解除しました", "info");
      return;
    }

    markQuestionMastered(quiz);

    showAppNotice("覚えた問題に登録しました", "success");
  };

}

