// =========================================================
// GERMAN VOCABULARY LEARNER PRO
// FINAL CLEAN JS
// SAMPLE VERSION
// =========================================================

// =========================================================
// GLOBAL STATE
// =========================================================

let currentThemes = [];
let currentWords = [];
let filteredWords = [];
let currentTestWords = [];

let currentQuestion = 0;
let currentTest = "";
let score = 0;

let currentFilter = "all";
let currentBatchSize = 20;

let isPlayingAll = false;
let speechRate = 0.8;

let selectedGerman = null;
let selectedEnglish = null;

// =========================================================
// LOCAL STORAGE
// =========================================================

let starData =
  JSON.parse(localStorage.getItem("germanStarData")) || {};

// =========================================================
// SAMPLE WORD DATA
// =========================================================

const wordbankData = [

  // =====================================================
  // PHARMACY
  // =====================================================

  {
    Article: "die",
    German: "Tablette",
    English: "tablet",
    theme: "pharmacy"
  },

  {
    Article: "der",
    German: "Arzt",
    English: "doctor",
    theme: "pharmacy"
  },

  {
    Article: "die",
    German: "Apotheke",
    English: "pharmacy",
    theme: "pharmacy"
  },

  {
    Article: "das",
    German: "Rezept",
    English: "prescription",
    theme: "pharmacy"
  },

  {
    Article: "die",
    German: "Salbe",
    English: "ointment",
    theme: "pharmacy"
  },

  {
    Article: "die",
    German: "Krankheit",
    English: "disease",
    theme: "pharmacy"
  },

  {
    Article: "der",
    German: "Patient",
    English: "patient",
    theme: "pharmacy"
  },

  {
    Article: "die",
    German: "Medizin",
    English: "medicine",
    theme: "pharmacy"
  },

  {
    Article: "das",
    German: "Krankenhaus",
    English: "hospital",
    theme: "pharmacy"
  },

  {
    Article: "die",
    German: "Spritze",
    English: "injection",
    theme: "pharmacy"
  },

  // =====================================================
  // DAILY LIFE
  // =====================================================

  {
    Article: "das",
    German: "Haus",
    English: "house",
    theme: "daily_life"
  },

  {
    Article: "die",
    German: "Schule",
    English: "school",
    theme: "daily_life"
  },

  {
    Article: "der",
    German: "Freund",
    English: "friend",
    theme: "daily_life"
  },

  {
    Article: "die",
    German: "Familie",
    English: "family",
    theme: "daily_life"
  },

  {
    Article: "das",
    German: "Auto",
    English: "car",
    theme: "daily_life"
  },

  {
    Article: "der",
    German: "Bahnhof",
    English: "station",
    theme: "daily_life"
  },

  {
    Article: "die",
    German: "Straße",
    English: "street",
    theme: "daily_life"
  },

  {
    Article: "das",
    German: "Telefon",
    English: "telephone",
    theme: "daily_life"
  },

  {
    Article: "die",
    German: "Zeitung",
    English: "newspaper",
    theme: "daily_life"
  },

  {
    Article: "der",
    German: "Schlüssel",
    English: "key",
    theme: "daily_life"
  },

  // =====================================================
  // VERBS
  // =====================================================

  {
    Article: "",
    German: "gehen",
    English: "to go",
    theme: "verbs"
  },

  {
    Article: "",
    German: "lernen",
    English: "to learn",
    theme: "verbs"
  },

  {
    Article: "",
    German: "arbeiten",
    English: "to work",
    theme: "verbs"
  },

  {
    Article: "",
    German: "essen",
    English: "to eat",
    theme: "verbs"
  },

  {
    Article: "",
    German: "trinken",
    English: "to drink",
    theme: "verbs"
  },

  {
    Article: "",
    German: "schlafen",
    English: "to sleep",
    theme: "verbs"
  },

  {
    Article: "",
    German: "lesen",
    English: "to read",
    theme: "verbs"
  },

  {
    Article: "",
    German: "schreiben",
    English: "to write",
    theme: "verbs"
  },

  {
    Article: "",
    German: "sprechen",
    English: "to speak",
    theme: "verbs"
  },

  {
    Article: "",
    German: "kaufen",
    English: "to buy",
    theme: "verbs"
  }

];

// =========================================================
// INIT
// =========================================================

window.onload = () => {

  buildThemes();

  setupButtons();

  updateStats();

};

// =========================================================
// BUTTONS
// =========================================================

function setupButtons(){

  document.getElementById("wordbank-btn")
    .onclick = () => {
      openModal("wordbank-modal");
    };

  document.getElementById("testbank-btn")
    .onclick = () => {
      openModal("testbank-modal");
    };

  document.getElementById("close-wordbank")
    .onclick = closeAllModals;

  document.getElementById("close-testbank")
    .onclick = closeAllModals;

  document.getElementById("close-settings")
    .onclick = closeAllModals;

  document.getElementById("show-words-btn")
    .onclick = loadSelectedThemes;

}

// =========================================================
// MODALS
// =========================================================

function openModal(id){
  document.getElementById(id).style.display = "block";
}

function closeAllModals(){

  document.querySelectorAll(".modal")
    .forEach(m => {
      m.style.display = "none";
    });

  stopAudio();

}

// =========================================================
// THEMES
// =========================================================

function buildThemes(){

  const themes =
    [...new Set(wordbankData.map(w => w.theme))];

  const themeButtons =
    document.getElementById("theme-buttons");

  const testThemeButtons =
    document.getElementById("test-theme-buttons");

  themeButtons.innerHTML = "";
  testThemeButtons.innerHTML = "";

  themes.forEach(theme => {

    // WORDBANK

    themeButtons.innerHTML += `
      <label class="theme-checkbox">
        <input
          type="checkbox"
          value="${theme}"
          class="theme-input"
        >
        ${formatTheme(theme)}
      </label>
    `;

    // TESTBANK

    testThemeButtons.innerHTML += `
      <button onclick="selectTestTheme('${theme}')">
        ${formatTheme(theme)}
      </button>
    `;

  });

}

function formatTheme(theme){

  return theme
    .replace(/_/g," ")
    .replace(/\b\w/g,c => c.toUpperCase());

}

// =========================================================
// LOAD THEMES
// =========================================================

function loadSelectedThemes(){

  const selected =
    [...document.querySelectorAll(".theme-input:checked")]
    .map(i => i.value);

  if(selected.length === 0){
    alert("Select at least one theme");
    return;
  }

  currentThemes = selected;

  currentWords =
    wordbankData.filter(w =>
      currentThemes.includes(w.theme)
    );

  applyFilters();

  document.getElementById("theme-selection-area")
    .style.display = "none";

  document.getElementById("word-table-container")
    .style.display = "block";

  document.getElementById("theme-title")
    .innerText =
      currentThemes.map(formatTheme).join(", ");

}

// =========================================================
// FILTERS
// =========================================================

function setFilter(type){

  currentFilter = type;

  applyFilters();

}

function setBatchSize(size){

  currentBatchSize = size;

  applyFilters();

}

function applyFilters(){

  filteredWords = [...currentWords];

  // FILTER

  if(currentFilter === "easy"){

    filteredWords =
      filteredWords.filter(w =>
        getStar(w.German) === "easy"
      );

  }

  else if(currentFilter === "hard"){

    filteredWords =
      filteredWords.filter(w =>
        getStar(w.German) === "hard"
      );

  }

  else if(currentFilter === "neutral"){

    filteredWords =
      filteredWords.filter(w =>
        getStar(w.German) === "neutral"
      );

  }

  // BATCH

  if(currentBatchSize > 0){

    filteredWords =
      filteredWords.slice(0,currentBatchSize);

  }

  renderTable();

  updateStats();

}

// =========================================================
// STAR SYSTEM
// =========================================================

function getStar(word){

  return starData[word] || "neutral";

}

function toggleStar(word,event){

  event.stopPropagation();

  let current = getStar(word);

  if(current === "neutral"){
    current = "hard";
  }

  else if(current === "hard"){
    current = "easy";
  }

  else{
    current = "neutral";
  }

  starData[word] = current;

  localStorage.setItem(
    "germanStarData",
    JSON.stringify(starData)
  );

  renderTable();

  updateStats();

}

function autoUpdateStar(word,correct){

  if(correct){
    starData[word] = "easy";
  }

  else{
    starData[word] = "hard";
  }

  localStorage.setItem(
    "germanStarData",
    JSON.stringify(starData)
  );

}

// =========================================================
// TABLE
// =========================================================

function renderTable(){

  const body =
    document.getElementById("word-table-body");

  body.innerHTML = "";

  filteredWords.forEach((word,index) => {

    let starClass = "star-neutral";
    let starIcon = "⚪";

    if(getStar(word.German) === "easy"){
      starClass = "star-easy";
      starIcon = "🟢";
    }

    if(getStar(word.German) === "hard"){
      starClass = "star-hard";
      starIcon = "🔴";
    }

    const row = document.createElement("tr");

    row.className = "clickable-row";

    row.setAttribute("data-index",index);

    row.innerHTML = `
      <td>
        <span
          class="star-btn ${starClass}"
          onclick="toggleStar('${word.German}',event)"
        >
          ${starIcon}
        </span>
      </td>

      <td>${word.Article || "-"}</td>

      <td>${word.German}</td>

      <td>${word.English}</td>

      <td>
        <button
          class="audio-btn"
          onclick="playGermanSingle('${word.German}','${word.Article}',event)"
        >
          🔊
        </button>
      </td>

      <td>
        <button
          class="audio-btn"
          onclick="playEnglishSingle('${word.English}',event)"
        >
          🔊
        </button>
      </td>
    `;

    row.onclick = () => {
      playAllAudio(index);
    };

    body.appendChild(row);

  });

}

// =========================================================
// STATS
// =========================================================

function updateStats(){

  const total = currentWords.length;

  const easy =
    currentWords.filter(w =>
      getStar(w.German) === "easy"
    ).length;

  const hard =
    currentWords.filter(w =>
      getStar(w.German) === "hard"
    ).length;

  const neutral =
    currentWords.filter(w =>
      getStar(w.German) === "neutral"
    ).length;

  const html = `
    <span>📚 Total: ${total}</span>
    <span>🔴 Hard: ${hard}</span>
    <span>🟢 Easy: ${easy}</span>
    <span>⚪ Neutral: ${neutral}</span>
  `;

  document.getElementById("stats-box").innerHTML = html;

  const testBox =
    document.getElementById("test-stats-box");

  if(testBox){
    testBox.innerHTML = html;
  }

}

// =========================================================
// AUDIO
// =========================================================

function speakGerman(word,article=""){

  speechSynthesis.cancel();

  const text =
    article
    ? `${article} ${word}`
    : word;

  const utter =
    new SpeechSynthesisUtterance(text);

  utter.lang = "de-DE";
  utter.rate = speechRate;

  speechSynthesis.speak(utter);

  return utter;

}

function speakEnglish(word){

  speechSynthesis.cancel();

  const utter =
    new SpeechSynthesisUtterance(word);

  utter.lang = "en-US";

  speechSynthesis.speak(utter);

  return utter;

}

function playGermanSingle(word,article,event){

  event.stopPropagation();

  speakGerman(word,article);

}

function playEnglishSingle(word,event){

  event.stopPropagation();

  speakEnglish(word);

}

function stopAudio(){

  isPlayingAll = false;

  speechSynthesis.cancel();

  document.querySelectorAll("tr")
    .forEach(r => r.classList.remove("playing"));

}

function playAllAudio(startIndex=0){

  if(isPlayingAll) return;

  isPlayingAll = true;

  function next(i,isGerman=true){

    if(i >= filteredWords.length){

      stopAudio();

      return;

    }

    const row =
      document.querySelector(
        `tr[data-index="${i}"]`
      );

    document.querySelectorAll("tr")
      .forEach(r => r.classList.remove("playing"));

    if(row){

      row.classList.add("playing");

      row.scrollIntoView({
        behavior:"smooth",
        block:"center"
      });

    }

    const word = filteredWords[i];

    let utter;

    if(isGerman){

      utter =
        speakGerman(word.German,word.Article);

    }

    else{

      utter =
        speakEnglish(word.English);

    }

    utter.onend = () => {

      if(isGerman){
        next(i,false);
      }

      else{
        next(i+1,true);
      }

    };

  }

  next(startIndex,true);

}

// =========================================================
// TEST THEME
// =========================================================

function selectTestTheme(theme){

  currentThemes = [theme];

  currentWords =
    wordbankData.filter(w =>
      w.theme === theme
    );

  applyFilters();

  document.getElementById("test-theme-title")
    .innerText =
      formatTheme(theme);

}

// =========================================================
// TEST MODE
// =========================================================

function enterTestMode(){

  document.getElementById("test-theme-buttons")
    .style.display = "none";

  document.getElementById("test-type-buttons")
    .style.display = "none";

}

function exitTestMode(){

  document.getElementById("test-theme-buttons")
    .style.display = "grid";

  document.getElementById("test-type-buttons")
    .style.display = "flex";

}

// =========================================================
// TEST WORDS
// =========================================================

function buildTestWords(){

  currentTestWords = [...filteredWords];

  currentTestWords =
    shuffle(currentTestWords);

  currentTestWords =
    currentTestWords.slice(0,10);

}

// =========================================================
// MEANINGS TEST
// =========================================================

function startMeaningsTest(){

  currentTest = "meanings";

  score = 0;
  currentQuestion = 0;

  buildTestWords();

  enterTestMode();

  renderMeanings();

}

function renderMeanings(){

  if(currentQuestion >= currentTestWords.length){

    finishTest();

    return;

  }

  const q =
    currentTestWords[currentQuestion];

  const correct =
    q.English;

  let options =
    shuffle(
      currentWords
      .filter(w => w.English !== correct)
      .map(w => w.English)
    ).slice(0,3);

  options.push(correct);

  options = shuffle(options);

  document.getElementById("test-content")
    .innerHTML = `
      <div class="question-box">

        <h2>
          Meanings Test
        </h2>

        <div class="word-display">
          ${q.Article} ${q.German}
        </div>

        <div class="options-grid">

          ${options.map(o => `
            <button
              class="option-btn"
              onclick="checkMeaning(this,'${o}','${correct}','${q.German}')"
            >
              ${o}
            </button>
          `).join("")}

        </div>

        <div class="score-box">
          Score: ${score}/${currentQuestion}
        </div>

        <div class="test-controls">

          <button onclick="startMeaningsTest()">
            🔄 Restart
          </button>

          <button onclick="exitTestMode()">
            🏠 Home
          </button>

          <button onclick="closeAllModals()">
            ❌ Close
          </button>

        </div>

      </div>
    `;

  setTimeout(() => {
    speakGerman(q.German,q.Article);
  },300);

}

function checkMeaning(btn,selected,correct,word){

  const buttons =
    document.querySelectorAll(".option-btn");

  buttons.forEach(b => b.disabled = true);

  if(selected === correct){

    btn.classList.add("correct");

    score++;

    autoUpdateStar(word,true);

  }

  else{

    btn.classList.add("incorrect");

    autoUpdateStar(word,false);

    buttons.forEach(b => {

      if(b.innerText === correct){

        b.classList.add("correct");

      }

    });

  }

  setTimeout(() => {

    currentQuestion++;

    renderMeanings();

  },1200);

}

// =========================================================
// DICTATION TEST
// =========================================================

function startDictationTest(){

  currentTest = "dictation";

  score = 0;
  currentQuestion = 0;

  buildTestWords();

  enterTestMode();

  renderDictation();

}

function renderDictation(){

  if(currentQuestion >= currentTestWords.length){

    finishTest();

    return;

  }

  const q =
    currentTestWords[currentQuestion];

  document.getElementById("test-content")
    .innerHTML = `
      <div class="question-box">

        <h2>
          Dictation Test
        </h2>

        <button onclick="speakGerman('${q.German}','${q.Article}')">
          🔊 Listen
        </button>

        <input
          type="text"
          id="dictation-input"
          autocomplete="off"
          placeholder="Type here..."
        >

        <div class="umlaut-buttons">

          <button onclick="insertUmlaut('ä')">ä</button>
          <button onclick="insertUmlaut('ö')">ö</button>
          <button onclick="insertUmlaut('ü')">ü</button>
          <button onclick="insertUmlaut('ß')">ß</button>

        </div>

        <div id="dict-feedback"></div>

        <div class="score-box">
          Score: ${score}/${currentQuestion}
        </div>

        <div class="test-controls">

          <button onclick="startDictationTest()">
            🔄 Restart
          </button>

          <button onclick="exitTestMode()">
            🏠 Home
          </button>

          <button onclick="closeAllModals()">
            ❌ Close
          </button>

        </div>

      </div>
    `;

  const input =
    document.getElementById("dictation-input");

  input.focus();

  setTimeout(() => {
    speakGerman(q.German,q.Article);
  },300);

  input.addEventListener("input", () => {

    const value =
      normalizeGerman(input.value);

    const expected =
      normalizeGerman(
        `${q.Article} ${q.German}`
      );

    if(value === expected){

      score++;

      autoUpdateStar(q.German,true);

      document.getElementById("dict-feedback")
        .innerHTML =
          `<p class="correct">Correct!</p>`;

      setTimeout(() => {

        currentQuestion++;

        renderDictation();

      },700);

    }

  });

}

// =========================================================
// UMLAUT
// =========================================================

function insertUmlaut(char){

  const input =
    document.getElementById("dictation-input");

  if(!input) return;

  let insert = char;

  if(input.value.length === 0){

    if(char === "ä") insert = "Ä";
    if(char === "ö") insert = "Ö";
    if(char === "ü") insert = "Ü";

  }

  input.value += insert;

  input.focus();

}

// =========================================================
// NORMALIZE
// =========================================================

function normalizeGerman(text){

  return text
    .toLowerCase()
    .replace(/ae/g,"ä")
    .replace(/oe/g,"ö")
    .replace(/ue/g,"ü")
    .replace(/ss/g,"ß")
    .trim();

}

// =========================================================
// ARTICLE TEST
// =========================================================

function startArticleTest(){

  currentTest = "article";

  score = 0;
  currentQuestion = 0;

  buildTestWords();

  enterTestMode();

  renderArticle();

}

function renderArticle(){

  if(currentQuestion >= currentTestWords.length){

    finishTest();

    return;

  }

  const q =
    currentTestWords[currentQuestion];

  const options =
    shuffle(["der","die","das"]);

  document.getElementById("test-content")
    .innerHTML = `
      <div class="question-box">

        <h2>
          Article Test
        </h2>

        <div class="word-display">
          ${q.German}
        </div>

        <div class="options-grid">

          ${options.map(o => `
            <button
              class="option-btn"
              onclick="checkArticle(this,'${o}','${q.Article}','${q.German}')"
            >
              ${o}
            </button>
          `).join("")}

        </div>

        <div class="score-box">
          Score: ${score}/${currentQuestion}
        </div>

        <div class="test-controls">

          <button onclick="startArticleTest()">
            🔄 Restart
          </button>

          <button onclick="exitTestMode()">
            🏠 Home
          </button>

          <button onclick="closeAllModals()">
            ❌ Close
          </button>

        </div>

      </div>
    `;

  setTimeout(() => {
    speakGerman(q.German,q.Article);
  },300);

}

function checkArticle(btn,selected,correct,word){

  const buttons =
    document.querySelectorAll(".option-btn");

  buttons.forEach(b => b.disabled = true);

  if(selected === correct){

    btn.classList.add("correct");

    score++;

    autoUpdateStar(word,true);

  }

  else{

    btn.classList.add("incorrect");

    autoUpdateStar(word,false);

  }

  setTimeout(() => {

    currentQuestion++;

    renderArticle();

  },1200);

}

// =========================================================
// MATCHING TEST
// =========================================================

function startMatchingTest(){

  currentTest = "matching";

  score = 0;

  buildTestWords();

  enterTestMode();

  renderMatching();

}

function renderMatching(){

  const german =
    [...currentTestWords];

  const english =
    shuffle([...currentTestWords]);

  document.getElementById("test-content")
    .innerHTML = `
      <div class="question-box">

        <h2>
          Matching Test
        </h2>

        <div class="matching-container">

          <div class="match-column">

            <h3>German</h3>

            ${german.map(w => `
              <div
                class="match-item german-item"
                data-german="${w.German}"
                data-english="${w.English}"
                onclick="selectGerman(this)"
              >
                ${w.Article} ${w.German}
              </div>
            `).join("")}

          </div>

          <div class="match-column">

            <h3>English</h3>

            ${english.map(w => `
              <div
                class="match-item english-item"
                data-german="${w.German}"
                data-english="${w.English}"
                onclick="selectEnglish(this)"
              >
                ${w.English}
              </div>
            `).join("")}

          </div>

        </div>

        <div class="score-box">
          Score: ${score}/${currentTestWords.length}
        </div>

        <div class="test-controls">

          <button onclick="startMatchingTest()">
            🔄 Restart
          </button>

          <button onclick="exitTestMode()">
            🏠 Home
          </button>

          <button onclick="closeAllModals()">
            ❌ Close
          </button>

        </div>

      </div>
    `;

}

function selectGerman(el){

  document.querySelectorAll(".german-item")
    .forEach(i => i.classList.remove("match-selected"));

  el.classList.add("match-selected");

  selectedGerman = el;

  speakGerman(
    el.dataset.german,
    ""
  );

}

function selectEnglish(el){

  if(!selectedGerman) return;

  selectedEnglish = el;

  const g =
    selectedGerman.dataset.german;

  const e =
    selectedEnglish.dataset.english;

  if(
    g === selectedEnglish.dataset.german
  ){

    selectedGerman.classList.add("match-correct");
    selectedEnglish.classList.add("match-correct");

    score++;

    autoUpdateStar(g,true);

  }

  else{

    selectedGerman.classList.add("match-wrong");
    selectedEnglish.classList.add("match-wrong");

    autoUpdateStar(g,false);

  }

  setTimeout(() => {

    renderMatching();

  },800);

}

// =========================================================
// FINISH TEST
// =========================================================

function finishTest(){

  document.getElementById("test-content")
    .innerHTML = `
      <div class="question-box">

        <h2>
          🎉 Test Finished
        </h2>

        <div class="word-display">
          ${score}/${currentTestWords.length}
        </div>

        <div class="test-controls">

          <button onclick="restartCurrentTest()">
            🔄 Restart
          </button>

          <button onclick="exitTestMode()">
            🏠 Home
          </button>

          <button onclick="closeAllModals()">
            ❌ Close
          </button>

        </div>

      </div>
    `;

}

function restartCurrentTest(){

  if(currentTest === "meanings"){
    startMeaningsTest();
  }

  if(currentTest === "dictation"){
    startDictationTest();
  }

  if(currentTest === "article"){
    startArticleTest();
  }

  if(currentTest === "matching"){
    startMatchingTest();
  }

}

// =========================================================
// PDF EXPORT
// =========================================================

function downloadWordList(){

  const body =
    document.getElementById("pdf-word-table-body");

  body.innerHTML = "";

  filteredWords.forEach(w => {

    let star = "⚪";

    if(getStar(w.German) === "easy"){
      star = "🟢";
    }

    if(getStar(w.German) === "hard"){
      star = "🔴";
    }

    body.innerHTML += `
      <tr>
        <td>${star}</td>
        <td>${w.Article}</td>
        <td>${w.German}</td>
        <td>${w.English}</td>
        <td>${w.theme}</td>
      </tr>
    `;

  });

  document.getElementById("pdf-theme-title")
    .innerText =
      currentThemes.join(", ");

  html2pdf()
    .from(document.getElementById("pdf-content"))
    .save("GermanVocabulary.pdf");

}

// =========================================================
// SETTINGS
// =========================================================

function openSettingsModal(){

  openModal("settings-modal");

}

function saveSettings(){

  speechRate =
    parseFloat(
      document.getElementById("speech-rate").value
    );

  closeAllModals();

}

// =========================================================
// BACK
// =========================================================

function backToThemes(){

  document.getElementById("word-table-container")
    .style.display = "none";

  document.getElementById("theme-selection-area")
    .style.display = "block";

}

// =========================================================
// UTIL
// =========================================================

function shuffle(arr){

  return [...arr]
    .sort(() => Math.random() - 0.5);

}
// =========================================================
// FINAL TARGET PATCH
// DO NOT PLACE ABOVE EXISTING CODE
// PLACE AT VERY BOTTOM OF script.js
// =========================================================


// =========================================================
// FULL UI RESET
// =========================================================

function fullResetUI(){

  stopAudio();

  selectedGerman = null;
  selectedEnglish = null;

  const tc = document.getElementById("test-content");

  if(tc){
    tc.innerHTML = "";
  }

  // restore UI

  const ttb = document.getElementById("test-theme-buttons");
  const ttb2 = document.getElementById("test-type-buttons");

  if(ttb){
    ttb.style.display = "grid";
  }

  if(ttb2){
    ttb2.style.display = "flex";
  }

  // restore hidden bars

  document.querySelectorAll(
    ".filter-bar,.batch-bar,.stats-box"
  ).forEach(el => {
    el.classList.remove("hidden-during-test");
  });

}


// =========================================================
// PATCH CLOSE BUTTONS
// =========================================================

const _oldCloseAllModals = closeAllModals;

closeAllModals = function(){

  fullResetUI();

  _oldCloseAllModals();

};


// =========================================================
// TRUE TEST ISOLATION MODE
// =========================================================

const _oldEnterTestMode = enterTestMode;

enterTestMode = function(){

  _oldEnterTestMode();

  document.querySelectorAll(
    ".filter-bar,.batch-bar,.stats-box"
  ).forEach(el => {
    el.classList.add("hidden-during-test");
  });

};

const _oldExitTestMode = exitTestMode;

exitTestMode = function(){

  _oldExitTestMode();

  document.querySelectorAll(
    ".filter-bar,.batch-bar,.stats-box"
  ).forEach(el => {
    el.classList.remove("hidden-during-test");
  });

  const tc = document.getElementById("test-content");

  if(tc){
    tc.innerHTML = "";
  }

};


// =========================================================
// TEST WORDS SHOULD FOLLOW
// FILTERS + STAR LOGIC + 20/50/100
// =========================================================

const _oldBuildTestWords = buildTestWords;

buildTestWords = function(){

  currentTestWords = [...filteredWords];

  currentTestWords = shuffle(currentTestWords);

  // use actual filtered amount
  // NOT hardcoded 10

  if(currentBatchSize > 0){

    currentTestWords =
      currentTestWords.slice(0,currentBatchSize);

  }

};


// =========================================================
// ARTICLE TEST AUDIO FIX
// MUST READ WITHOUT ARTICLE
// =========================================================

const _oldRenderArticle = renderArticle;

renderArticle = function(){

  _oldRenderArticle();

  const q =
    currentTestWords[currentQuestion];

  if(!q) return;

  speechSynthesis.cancel();

  setTimeout(() => {

    // IMPORTANT:
    // NO ARTICLE

    speakGerman(q.German,"");

  },300);

};


// =========================================================
// DICTATION CURSOR SAFE UMLAUT FIX
// =========================================================

insertUmlaut = function(char){

  const input =
    document.getElementById("dictation-input");

  if(!input) return;

  let insert = char;

  // first letter capital umlaut

  if(
    input.selectionStart === 0 &&
    input.value.length === 0
  ){

    if(char === "ä") insert = "Ä";
    if(char === "ö") insert = "Ö";
    if(char === "ü") insert = "Ü";

  }

  // CURSOR SAFE INSERTION

  const start = input.selectionStart;
  const end = input.selectionEnd;

  const text = input.value;

  input.value =
    text.substring(0,start) +
    insert +
    text.substring(end);

  input.selectionStart =
    input.selectionEnd =
      start + insert.length;

  input.focus();

};


// =========================================================
// DICTATION ENTER SUPPORT
// =========================================================

document.addEventListener("keydown", function(e){

  if(
    currentTest === "dictation" &&
    e.key === "Enter"
  ){

    const q =
      currentTestWords[currentQuestion];

    if(!q) return;

    const input =
      document.getElementById("dictation-input");

    if(!input) return;

    const value =
      normalizeGerman(input.value);

    const expected =
      normalizeGerman(
        `${q.Article} ${q.German}`
      );

    if(value === expected){

      score++;

      autoUpdateStar(q.German,true);

    }

    else{

      autoUpdateStar(q.German,false);

    }

    currentQuestion++;

    renderDictation();

  }

});


// =========================================================
// BETTER DICTATION AUTO SUBMIT
// =========================================================

const _oldRenderDictation = renderDictation;

renderDictation = function(){

  _oldRenderDictation();

  const q =
    currentTestWords[currentQuestion];

  if(!q) return;

  const input =
    document.getElementById("dictation-input");

  if(!input) return;

  input.focus();

  input.addEventListener("input", () => {

    const value =
      normalizeGerman(input.value);

    const expected =
      normalizeGerman(
        `${q.Article} ${q.German}`
      );

    // ONLY auto submit when FULLY CORRECT

    if(value === expected){

      setTimeout(() => {

        if(currentTest !== "dictation") return;

        score++;

        autoUpdateStar(q.German,true);

        currentQuestion++;

        renderDictation();

      },300);

    }

  });

};


// =========================================================
// MEANING TEST FEEDBACK DELAY
// =========================================================

const _oldCheckMeaning = checkMeaning;

checkMeaning = function(btn,selected,correct,word){

  const buttons =
    document.querySelectorAll(".option-btn");

  buttons.forEach(b => {
    b.disabled = true;
  });

  if(selected === correct){

    btn.classList.add("correct");

    score++;

    autoUpdateStar(word,true);

  }

  else{

    btn.classList.add("incorrect");

    autoUpdateStar(word,false);

    buttons.forEach(b => {

      if(b.innerText === correct){

        b.classList.add("correct");

      }

    });

  }

  setTimeout(() => {

    currentQuestion++;

    renderMeanings();

  },1600);

};


// =========================================================
// STABLE MATCHING SYSTEM
// =========================================================

let matchedPairs = 0;

const _oldStartMatching = startMatchingTest;

startMatchingTest = function(){

  matchedPairs = 0;

  _oldStartMatching();

};


const _oldSelectEnglish = selectEnglish;

selectEnglish = function(el){

  if(!selectedGerman) return;

  selectedEnglish = el;

  const g =
    selectedGerman.dataset.german;

  if(
    g === selectedEnglish.dataset.german
  ){

    selectedGerman.classList.add("match-correct");
    selectedEnglish.classList.add("match-correct");

    selectedGerman.style.pointerEvents = "none";
    selectedEnglish.style.pointerEvents = "none";

    score++;

    matchedPairs++;

    autoUpdateStar(g,true);

    speakEnglish(
      selectedEnglish.dataset.english
    );

  }

  else{

    selectedGerman.classList.add("match-wrong");
    selectedEnglish.classList.add("match-wrong");

    autoUpdateStar(g,false);

    setTimeout(() => {

      selectedGerman.classList.remove("match-wrong");
      selectedEnglish.classList.remove("match-wrong");

    },800);

  }

  selectedGerman.classList.remove("match-selected");

  selectedGerman = null;
  selectedEnglish = null;

  document.querySelector(".score-box")
    .innerText =
      `Score: ${score}/${currentTestWords.length}`;

  // FINISH ONLY WHEN COMPLETE

  if(
    matchedPairs >= currentTestWords.length
  ){

    setTimeout(() => {

      finishTest();

    },800);

  }

};


// =========================================================
// KEEP PLAYING ROW AUTO CENTERED
// =========================================================

const _oldPlayAllAudio = playAllAudio;

playAllAudio = function(startIndex=0){

  _oldPlayAllAudio(startIndex);

  setTimeout(() => {

    const observer =
      new MutationObserver(() => {

        const playing =
          document.querySelector(".playing");

        if(playing){

          playing.scrollIntoView({
            behavior:"smooth",
            block:"center"
          });

        }

      });

    const table =
      document.getElementById("word-table-body");

    if(table){

      observer.observe(table,{
        subtree:true,
        attributes:true
      });

    }

  },300);

};


// =========================================================
// SAFER HOME BUTTON
// =========================================================

document.addEventListener("click", function(e){

  if(
    e.target &&
    e.target.innerText &&
    e.target.innerText.includes("🏠")
  ){

    setTimeout(() => {

      fullResetUI();

    },50);

  }

});


// =========================================================
// FINAL CSS INJECTION
// =========================================================

const patchStyle = document.createElement("style");

patchStyle.innerHTML = `

.hidden-during-test{
  display:none !important;
}

`;

document.head.appendChild(patchStyle);


// =========================================================
// PATCH COMPLETE
// =========================================================

console.log(
  "FINAL TARGET PATCH LOADED SUCCESSFULLY"
);
// =====================================================
// FINAL CONTINUATION PATCH
// PLACE BELOW PREVIOUS PATCH
// =====================================================


// =====================================================
// STRICT ARTICLE FILTER
// ONLY der/die/das ALLOWED
// =====================================================

function isRealArticle(article){

  if(!article) return false;

  const a =
    article.toLowerCase().trim();

  return (
    a === "der" ||
    a === "die" ||
    a === "das"
  );

}


// PATCH ARTICLE TEST WORD BUILD

const _articleStartPatch = startArticleTest;

startArticleTest = function(){

  currentTest = "article";

  currentQuestion = 0;

  score = 0;

  // STRICT FILTER

  currentTestWords =
    filteredWords.filter(
      w => isRealArticle(w.Article)
    );

  currentTestWords =
    shuffle(currentTestWords);

  if(currentBatchSize > 0){

    currentTestWords =
      currentTestWords.slice(
        0,
        currentBatchSize
      );

  }

  // fallback safety

  if(currentTestWords.length === 0){

    document.getElementById(
      "test-content"
    ).innerHTML = `
      <div class="question-box">
        <h2>
          No valid article words found.
        </h2>

        <button onclick="exitTestMode()">
          🏠 Home
        </button>
      </div>
    `;

    return;
  }

  renderArticle();

};


// =====================================================
// FIX AUTOSCROLL
// KEEP CONTROLS FIXED
// =====================================================

const _safePlayAll = playAllAudio;

playAllAudio = function(startIndex = 0){

  _safePlayAll(startIndex);

  setTimeout(() => {

    const rows =
      document.querySelectorAll(
        "#word-table-body tr"
      );

    rows.forEach(row => {

      const observer =
        new MutationObserver(() => {

          if(
            row.classList.contains("playing")
          ){

            // IMPORTANT:
            // ONLY SCROLL INSIDE TABLE AREA

            row.scrollIntoView({
              behavior:"smooth",
              block:"nearest",
              inline:"nearest"
            });

          }

        });

        observer.observe(row,{
          attributes:true
        });

    });

  },300);

};


// =====================================================
// STICKY CONTROL BAR
// CONTROLS NEVER MOVE
// =====================================================

const stickyStyle =
document.createElement("style");

stickyStyle.innerHTML = `

.word-controls,
.controls-bar,
.top-controls{

  position:sticky !important;

  top:0;

  z-index:999;

  background:#ffffff;

  padding:10px;

}

#word-table-container{

  max-height:75vh;

  overflow-y:auto;

}

`;

document.head.appendChild(stickyStyle);


// =====================================================
// PATCH COMPLETE
// =====================================================

console.log(
  "FINAL CONTINUATION PATCH LOADED"
);