// 起動時の更新確認とキャッシュ管理はindex.htmlに集約。
const questionData = {
  "調理理論（グローバル）": globalChoririronQuestions,
  "調理理論": choririronQuestions,
  "フードセーフティ論": foodsafetyQuestions,
  "食品栄養学（食品学）": syokuhingakuQuestions,
  "食品栄養学（栄養学）": eiyougakuQuestions,
  "ヘルシーライフ研究": healthylifeQuestions
};

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


function shuffle(array){
  return [...array].sort(() => Math.random() - 0.5);
}

function loadCategories(){

  const area = document.getElementById("categoryArea");

  area.innerHTML = "<h2>カテゴリ選択(後期)</h2>";

  Object.keys(questionData).forEach(category => {

    const btn = document.createElement("button");

    btn.className = "categoryBtn";

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

  let automaticallyMastered = false;

  if(isCorrect){

  score++;

  if(localStorage.getItem(AUTO_MASTER_KEY) === "true"){
    markQuestionMastered(quiz);
    automaticallyMastered = true;
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

  if(automaticallyMastered){
    document.getElementById("result").innerHTML +=
      '<div class="auto-master-notice">✓ 自動で「覚えた」に登録しました。下の「覚えた済み」で解除できます。</div>';
  }


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

setupAutoMasterSetting();
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
