const APP_CONTENT_VERSION = "20260710-2";

/*
  問題ファイル更新時のキャッシュ対策。
  「覚えた問題」「間違えた問題」「成績」などのlocalStorageは削除しません。
*/
(async function refreshQuestionFileCache() {
  const versionKey = "quizAppContentVersion";

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
  "食品栄養学（栄養学）": eiyougakuQuestions ,
  "食品栄養学（食品学）": syokuhingakuQuestions ,
  "フードセーフティ論": foodsafetyQuestions ,
  "ヘルシーライフ研究" : healthylifeQuestions ,
  "調理理論・調理科学" : choririronQuestions , 
  "世界の食通信"       : sekaiQuestions

};

let currentQuiz = 0;
let score = 0;
let quizList = [];
let wrongQuestions = JSON.parse(localStorage.getItem("wrongQuestions")) || [];
let masteredQuestions =  JSON.parse(localStorage.getItem("masteredQuestions")) || [];
let retryMode = false;

function shuffle(array){
  return [...array].sort(() => Math.random() - 0.5);
}

function loadCategories(){

  const area = document.getElementById("categoryArea");

  area.innerHTML = "<h2>カテゴリ選択</h2>";

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

    alert("まだ間違えた問題がありません！");

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

  alert("再挑戦対象の問題がありません");

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



  loadQuiz();

};

area.appendChild(retryBtn);

const clearMasterBtn =
  document.createElement("button");

clearMasterBtn.innerText =
  "覚えた問題を全解除";

clearMasterBtn.onclick = ()=>{

  if(!confirm("覚えた問題をすべて解除しますか？"))
    return;

masteredQuestions = [];
localStorage.setItem(
  "masteredQuestions",
  JSON.stringify([])
);

  alert("解除しました");

  loadCategories();

};

area.appendChild(clearMasterBtn);

}

function startQuiz(category){

  masteredQuestions = JSON.parse(localStorage.getItem("masteredQuestions")) || [];

  retryMode = false;

  quizList = shuffle(
    questionData[category].filter(
      q => !masteredQuestions.includes(q.question)
    )
  );

  if(quizList.length === 0){
    alert("このカテゴリの問題はすべて覚えた状態です");
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
      "wrongQuestions",
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
      "wrongQuestions",
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
    JSON.parse(localStorage.getItem("stats") || "{}");

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

  localStorage.setItem("stats", JSON.stringify(stats));

  analyzeWeakQuestions();

}

function analyzeWeakQuestions(){

  const stats =
    JSON.parse(localStorage.getItem("stats") || "{}");

  let weak = [];

  Object.keys(stats).forEach(q => {

    if(stats[q].wrong > stats[q].correct){

      weak.push(q);

    }

  });

  localStorage.setItem(
    "weakQuestions",
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

  localStorage.setItem("darkMode", isDark);

};

if(localStorage.getItem("darkMode") === "true"){
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


const backCategoryBtn = document.getElementById("backCategoryBtn");
if (backCategoryBtn) {
  backCategoryBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const ok = confirm("カテゴリ選択へ戻りますか？");
    if (!ok) return;

    backToCategory();
  });
}

function setupMasterButton(){

  document.getElementById("masterBtn").onclick = ()=>{

    const quiz = quizList[currentQuiz];
    if(!quiz) return;

    // 念のため最新状態を取得
    masteredQuestions =
      JSON.parse(localStorage.getItem("masteredQuestions")) || [];

    // 既に覚えた問題なら解除
    if(masteredQuestions.includes(quiz.question)){

      masteredQuestions =
        masteredQuestions.filter(
          q => q !== quiz.question
        );

      localStorage.setItem(
        "masteredQuestions",
        JSON.stringify(masteredQuestions)
      );

      document.getElementById("masterBtn").innerText =
        "✓ 覚えた";

      alert("覚えた登録を解除しました");
      return;
    }

    // 未登録なら覚えた登録（重複防止）
    masteredQuestions.push(quiz.question);
    masteredQuestions = [...new Set(masteredQuestions)];

    localStorage.setItem(
      "masteredQuestions",
      JSON.stringify(masteredQuestions)
    );

    // 間違えた問題一覧からも削除
    wrongQuestions =
      (JSON.parse(localStorage.getItem("wrongQuestions")) || [])
      .filter(q => q.question !== quiz.question);

    localStorage.setItem(
      "wrongQuestions",
      JSON.stringify(wrongQuestions)
    );

    // 現在位置より後ろに同じ問題が残っていれば除外
    quizList = quizList.filter(
      (q, index) =>
        index <= currentQuiz || q.question !== quiz.question
    );

    document.getElementById("masterBtn").innerText =
      "✓ 覚えた済み";

    alert("覚えた問題に登録しました");
  };

}
