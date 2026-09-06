const APP_CONTENT_VERSION = "20260906-kouki-1";

/*
  問題ファイル更新時のキャッシュ対策。
  「覚えた問題」「間違えた問題」「成績」などのlocalStorageは削除しません。
*/
(async function refreshQuestionFileCache() {
  const versionKey = "koukiQuizAppContentVersion";

  if (localStorage.getItem(versionKey) === APP_CONTENT_VERSION) return;

  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(registration => registration.unregister()));
    }

    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
    }
  } catch (error) {
    console.warn("キャッシュの更新処理に失敗しました。", error);
  }

  localStorage.setItem(versionKey, APP_CONTENT_VERSION);

  const url = new URL(window.location.href);
  url.searchParams.set("v", APP_CONTENT_VERSION);
  window.location.replace(url.toString());
})();


const questionData = {
  "まとめ問題（試験対策）": summaryExamQuestions,
  "食品栄養学（栄養学）": eiyougakuQuestions ,
  "食品栄養学（食品学）": syokuhingakuQuestions ,
  "フードセーフティ論": foodsafetyQuestions ,
  "ヘルシーライフ研究" : healthylifeQuestions ,
  "調理理論・調理科学" : choririronQuestions , 
  "世界の食通信"       : sekaiQuestions,
  "ChatGPT出題予想"     : chatgptPredictedQuestions

};

let currentQuiz = 0;
let score = 0;
let quizList = [];
let wrongQuestions = JSON.parse(localStorage.getItem("koukiWrongQuestions")) || [];
let masteredQuestions =  JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];
let retryMode = false;

function shuffle(array){
  return [...array].sort(() => Math.random() - 0.5);
}

function loadCategories(){

  const area = document.getElementById("categoryArea");

  area.innerHTML = "<h2>カテゴリ選択(後期)</h2>";

  Object.keys(questionData).forEach(category => {

    const btn = document.createElement("button");

    btn.className = "categoryBtn";
    if(questionData[category] === summaryExamQuestions) btn.classList.add("summaryCategoryBtn");
    if(questionData[category] === chatgptPredictedQuestions) btn.classList.add("predictedCategoryBtn");

    btn.innerText = category;

    btn.onclick = () => startQuiz(category);

    area.appendChild(btn);

  });

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

const clearMasterBtn =
  document.createElement("button");

clearMasterBtn.innerText =
  "覚えた問題を全解除";

clearMasterBtn.onclick = ()=>{
  showAppConfirm({
    title: "覚えた問題を全解除",
    message: "覚えた問題をすべて解除しますか？",
    confirmText: "全解除する",
    cancelText: "キャンセル",
    danger: true,
    onConfirm: () => {
      masteredQuestions = [];
      localStorage.setItem(
        "koukiMasteredQuestions",
        JSON.stringify([])
      );
      showAppNotice("覚えた問題をすべて解除しました", "success");
      loadCategories();
    }
  });
};

area.appendChild(clearMasterBtn);

}

function startQuiz(category){

  masteredQuestions = JSON.parse(localStorage.getItem("koukiMasteredQuestions")) || [];

  retryMode = false;

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

  quiz.choices.forEach((choice,index)=>{

    const btn = document.createElement("button");

    btn.className = "choice";

    btn.innerText = choice;

    btn.onclick = ()=>{
      btn.classList.toggle("selected");
    };

    choicesDiv.appendChild(btn);

  });
document.getElementById("submitBtn").style.display = "block";

document.getElementById("nextBtn").style.display = "none";

const masterBtn =
  document.getElementById("masterBtn");

if(masteredQuestions.includes(quiz.question)){
  masterBtn.innerText = "✓ 覚えた済み";
}else{
  masterBtn.innerText = "✓ 覚えた";
}

}

function submitAnswer(){

  const quiz = quizList[currentQuiz];

  const buttons = document.querySelectorAll(".choice");

  let selected = [];

  buttons.forEach((btn,index)=>{

    if(btn.classList.contains("selected")){
      selected.push(index);
    }

  });

  const isCorrect =
    selected.length === quiz.answer.length &&
    selected.every(i=>quiz.answer.includes(i));

  buttons.forEach((btn,index)=>{

    btn.disabled = true;

    if(quiz.answer.includes(index)){
      btn.classList.add("correct");
    }

    if(btn.classList.contains("selected") &&
      !quiz.answer.includes(index)){
      btn.classList.add("wrong");
    }

  });

  if(isCorrect){

  score++;

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
      ${quiz.explanation || ""}
    </div>
  `;

  if(quiz.choiceExplanations){

    explanationHTML += `
      <div class="choiceExplanationTitle">
        <strong>各選択肢の解説</strong>
      </div>
    `;

    quiz.choices.forEach((choice,index)=>{

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

document.getElementById("themeToggle").onclick = ()=>{

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem("koukiDarkMode", isDark);

};

if(localStorage.getItem("koukiDarkMode") === "true"){
  document.body.classList.add("dark");
}

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

      showAppNotice("覚えた登録を解除しました", "info");
      return;
    }

    // 未登録なら覚えた登録（重複防止）
    masteredQuestions.push(quiz.question);
    masteredQuestions = [...new Set(masteredQuestions)];

    localStorage.setItem(
      "koukiMasteredQuestions",
      JSON.stringify(masteredQuestions)
    );

    // 間違えた問題一覧からも削除
    wrongQuestions =
      (JSON.parse(localStorage.getItem("koukiWrongQuestions")) || [])
      .filter(q => q.question !== quiz.question);

    localStorage.setItem(
      "koukiWrongQuestions",
      JSON.stringify(wrongQuestions)
    );

    // 現在位置より後ろに同じ問題が残っていれば除外
    quizList = quizList.filter(
      (q, index) =>
        index <= currentQuiz || q.question !== quiz.question
    );

    document.getElementById("masterBtn").innerText =
      "✓ 覚えた済み";

    showAppNotice("覚えた問題に登録しました", "success");
  };

}
