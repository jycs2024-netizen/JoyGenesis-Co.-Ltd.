/* =========================================================
   智遊創生 Geneowisen｜共用互動程式
   純原生 JavaScript，不使用框架或外部套件。

   修改產品：搜尋 const PRODUCTS
   修改文章：搜尋 const ARTICLES
   修改聯絡信箱：搜尋 CONTACT_EMAIL
   ========================================================= */
"use strict";

const CONTACT_EMAIL = "hello@your-company.tw";

/* ---------------------------------------------------------
   產品資料
   category：digital / robot / engineering / science
   圖片名稱保留使用者上傳的原始檔名。
   --------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "ar-kit",
    category: "digital",
    categoryLabel: "AR／數位互動",
    code: "STEAM-XR01",
    name: "一次搞懂 AR 是什麼",
    subtitle: "掃描圖卡，看見 3D 互動內容",
    image: "assets/教具商品圖 (19).png",
    age: "國小中年級以上",
    ageOrder: 3,
    duration: "1～3 堂",
    skills: "AR 原理、立體互動、動手實作",
    tags: ["AR", "3D 互動", "圖卡", "科技啟蒙"],
    description: "以教學手冊、反絲字塔與掃描圖卡，讓學生理解擴增實境如何將數位內容疊加到真實畫面，適合作為 AR 科技入門、親子體驗與數位互動課程。",
    deliverables: ["教學手冊 × 1", "反絲字塔 × 3", "吸盤 × 3", "掃描圖卡與互動體驗"]
  },
  {
    id: "mango-car",
    category: "robot",
    categoryLabel: "機器人與程式",
    code: "STEAM-R01",
    name: "Mango 自走車",
    subtitle: "程式控制 × 感測應用 × STEM 學習",
    image: "assets/教具商品圖 (20).png",
    age: "國小高年級以上",
    ageOrder: 5,
    duration: "4～12 堂",
    skills: "循跡、避障、程式控制",
    tags: ["AI 機器人", "超音波", "循跡", "程式"],
    description: "以小型自走車搭配超音波與循跡感測器，讓學生從圖形化程式開始，完成移動、避障與路線任務，建立輸入、判斷、輸出的系統概念。",
    deliverables: ["Mango 自走車主體", "超音波與循跡感測模組", "圖形化程式任務", "避障與循線挑戰"]
  },
  {
    id: "microbit-robotics",
    category: "robot",
    categoryLabel: "機器人與程式",
    code: "STEAM-R02",
    name: "機器人工作坊 micro:bit 編程組",
    subtitle: "STEAM × 程式設計 × 機構應用",
    image: "assets/教具商品圖 (21).png",
    age: "國小高年級以上",
    ageOrder: 5,
    duration: "6～20 堂",
    skills: "程式設計、感測器、機械結構",
    tags: ["micro:bit", "鼓手機器人", "輸送帶", "機械手臂"],
    description: "以積木結構、BBC micro:bit、馬達與感測器完成鼓手機器人、輸送帶與機械手臂等主題，適合系列課程、社團與程式機器人工作坊。",
    deliverables: ["245 片積木與機構零件", "三大應用主題", "20 堂學習任務", "美圖文說明書"]
  },
  {
    id: "simple-machines",
    category: "engineering",
    categoryLabel: "機構與工程",
    code: "STEAM-E01",
    name: "簡單機械：力的轉變與測量",
    subtitle: "斜面、齒輪、槓桿、車軸與滑輪",
    image: "assets/教具商品圖 (27).png",
    age: "建議 8 歲以上",
    ageOrder: 8,
    duration: "6～12 堂",
    skills: "力學、量測、機械工程",
    tags: ["簡單機械", "彈簧測力計", "力學", "模型實驗"],
    description: "透過 26 種模型與精緻彈簧測力計，實際比較斜面、槓桿、齒輪、車軸與滑輪如何改變施力方向與大小。",
    deliverables: ["132 PCS 零件", "26 種可組裝模型", "精緻彈簧測力計", "組裝與實驗說明"]
  },
  {
    id: "structural-bridges",
    category: "engineering",
    categoryLabel: "機構與工程",
    code: "STEAM-E02",
    name: "結構密碼：橋樑與摩天大樓",
    subtitle: "結構工程 × 動手實作 × STEAM 學習",
    image: "assets/教具商品圖 (25).png",
    age: "建議 8 歲以上",
    ageOrder: 8,
    duration: "8～20 堂",
    skills: "結構作用力、橋樑、工程設計",
    tags: ["橋樑", "桁架", "摩天大樓", "結構工程"],
    description: "從基礎結構元素、桁架與繩索固定開始，搭建橋樑與高塔模型，理解拉力、壓力、支撐配置與結構穩定。",
    deliverables: ["323 PCS 零件", "25 種模型", "20 個實驗", "實驗與結構原理手冊"]
  },
  {
    id: "science-tour",
    category: "science",
    categoryLabel: "科學與綠能",
    code: "STEAM-S01",
    name: "科學探索組",
    subtitle: "動手做 × 科學探索 × 邏輯思考",
    image: "assets/教具商品圖 (22).png",
    age: "建議 7 歲以上",
    ageOrder: 7,
    duration: "40 堂主題課程",
    skills: "科學原理、觀察、問題解決",
    tags: ["科學實驗", "自動鋼琴", "走鋼索人", "遊樂園"],
    description: "以多種機構與科學主題模型，搭配組裝手冊及輔助教材，引導學生從觀察、假設、操作到解釋，適合社團與課後學習。",
    deliverables: ["256 PCS 零件", "64 頁組裝手冊", "40 堂主題課程", "補充包延伸主題"]
  },
  {
    id: "architectural-curves",
    category: "engineering",
    categoryLabel: "機構與工程",
    code: "STEAM-E03",
    name: "結構密碼：曲線結構建築",
    subtitle: "彈性零件 × 曲線結構 × 建築探索",
    image: "assets/教具商品圖 (26).png",
    age: "建議 8 歲以上",
    ageOrder: 8,
    duration: "8～16 堂",
    skills: "曲線結構、建築設計、模型建構",
    tags: ["建築", "拱門", "摩天輪", "曲線結構"],
    description: "從鷹架、拱門到圓頂與摩天輪，使用彈性零件搭建現代建築結構，探索造型、受力與空間穩定的關係。",
    deliverables: ["308 PCS 零件", "26 種模型", "現代建築結構主題", "曲線構造實作"]
  },
  {
    id: "solar-rovers",
    category: "science",
    categoryLabel: "科學與綠能",
    code: "STEAM-S02",
    name: "太陽能輕量未來車",
    subtitle: "綠能科技 × 動手實作 × 永續未來",
    image: "assets/教具商品圖 (1).png",
    age: "建議 8 歲以上",
    ageOrder: 8,
    duration: "3～8 堂",
    skills: "太陽能、能源轉換、創意組裝",
    tags: ["太陽能", "綠能", "探測車", "永續"],
    description: "利用太陽能驅動模型，組裝汽車、機器人、探測車、風扇與賽車，理解光能轉換與綠色能源應用。",
    deliverables: ["54 PCS 零件", "5 種模型", "太陽能驅動模組", "綠能主題學習"]
  }
];

/* ---------------------------------------------------------
   文章資料
   category：steam / practice / future
   body 可使用簡單 HTML。
   --------------------------------------------------------- */
const ARTICLES = [
  {
    id: "grade-roadmap",
    category: "steam",
    categoryLabel: "STEAM 教學",
    title: "1～9 年級 STEAM 科技素養，如何循序培養？",
    image: "assets/科技教育文章圖 (1).png",
    readTime: "7 分鐘閱讀",
    summary: "從基礎啟蒙、科學探索到 AI、AR、3D 列印與專題製作，建立逐年進階的科技學習地圖。",
    body: `<p class="article-lead">科技課程需要累積，而不是每年重新開始。循序進階的重點，是讓學生的操作、思考與表達能力同步成長。</p><h3>低年級：建立好奇與操作信心</h3><p>以造型、結構、桌上創意遊戲與簡單機構為主。重點不是完成複雜作品，而是願意嘗試、遵守流程並說明自己的想法。</p><h3>中年級：加入科學探究與機構原理</h3><p>透過農業科技、海洋科技、機構實驗與簡單量測，引導學生提出假設、記錄結果，再根據證據調整模型。</p><h3>高年級到國中：走向程式與專題整合</h3><p>逐步加入 micro:bit、AI、AR、3D 列印、虛擬網紅、機器人與專題製作。學生不只操作工具，也要處理需求、分工、測試與成果表達。</p>`
  },
  {
    id: "learning-moments",
    category: "practice",
    categoryLabel: "教學實務",
    title: "為什麼動手實作，能讓學生更專注？",
    image: "assets/steam科技教育案例文章圖 (3).png",
    readTime: "5 分鐘閱讀",
    summary: "專注投入、動手實作與合作成長，不是活動附加價值，而是科技學習的重要歷程。",
    body: `<p class="article-lead">學生不是因為教具新奇就會持續專注，而是因為任務清楚、回饋即時，並且看得見自己的進步。</p><h3>把大任務拆成可完成的小步驟</h3><p>先完成基本結構，再測試功能，最後才加入創意變化。每一步都能確認成果，學生比較不容易因難度過高而放棄。</p><h3>讓操作產生立即回饋</h3><p>輪子是否轉動、結構是否穩定、程式是否執行，都是學生能直接觀察的回饋，會自然引導他們找原因與修正。</p><h3>合作需要清楚角色</h3><p>材料管理、組裝、測試、紀錄與報告等角色需要被明確設計並輪替，才能讓每一位學生真正參與。</p>`
  },
  {
    id: "vtuber-workshop",
    category: "future",
    categoryLabel: "AI 與科技",
    title: "Vtuber 工作坊，如何整合角色、音樂、剪輯與數位表達？",
    image: "assets/steam科技文章圖.png",
    readTime: "6 分鐘閱讀",
    summary: "從虛擬角色創作、AI 音樂到 MV 剪輯，讓學員在完整作品中練習數位內容製作。",
    body: `<p class="article-lead">跨域科技課程的價值，不在於同時使用很多工具，而是讓每個工具服務同一個清楚的作品目標。</p><h3>先決定作品，再選工具</h3><p>以一支虛擬角色 MV 為最終成果，學員會更容易理解角色設定、鏡頭、音樂、剪輯與發布之間的關係。</p><h3>讓 AI 成為輔助，而不是代替</h3><p>AI 可協助產生初步歌詞、音樂方向或腳本，但學員仍要進行選擇、修改、整合與表達。</p><h3>成果發表是學習的一部分</h3><p>透過公開展示與同儕回饋，學員需要說明自己的創作決策，從工具使用走向內容表達。</p>`
  },
  {
    id: "steam-cycle",
    category: "steam",
    categoryLabel: "STEAM 教學",
    title: "STEAM 課程的四個循環：探索、建構、測試、分享",
    image: "assets/steam科技教育案例文章圖 (1).png",
    readTime: "4 分鐘閱讀",
    summary: "用四個清楚階段設計任務，讓課程不只是照步驟組裝，而能形成真正的探究學習。",
    body: `<p class="article-lead">好的 STEAM 任務需要讓學生有機會做決定，而不是只照著唯一答案完成。</p><h3>探索</h3><p>觀察情境、理解限制、提出問題。</p><h3>建構</h3><p>選擇材料與方法，把想法變成可測試的模型。</p><h3>測試</h3><p>記錄結果、辨識問題、根據證據修正。</p><h3>分享</h3><p>說明設計選擇、展示成果，也回顧下一次可以如何改進。</p>`
  },
  {
    id: "teacher-prep",
    category: "practice",
    categoryLabel: "教學實務",
    title: "降低 STEAM 備課負擔：教師最需要的不是更多素材",
    image: "assets/科技教育文章圖 (2).png",
    readTime: "5 分鐘閱讀",
    summary: "用標準化任務、設備清單、時間節點與常見錯誤，讓教師更容易掌握課程。",
    body: `<p class="article-lead">素材很多不等於容易備課。教師真正需要的是可以快速判斷、準備與帶領的結構。</p><h3>一頁看懂課程</h3><p>清楚列出目標、材料、流程、時間、學生產出與評量方式。</p><h3>預先整理常見錯誤</h3><p>把接線、零件方向、程式設定與安全提醒整理成檢查表，可大幅降低現場中斷。</p><h3>保留調整彈性</h3><p>同一任務應有基本版、挑戰版與延伸版，教師能依班級節奏調整。</p>`
  },
  {
    id: "ai-creator",
    category: "future",
    categoryLabel: "AI 與科技",
    title: "AI 時代的科技教育：從會使用工具，到能提出好問題",
    image: "assets/steam科技教育案例文章圖 (2).png",
    readTime: "6 分鐘閱讀",
    summary: "當工具越來越容易使用，學習重點更需要回到問題定義、選擇判斷與成果責任。",
    body: `<p class="article-lead">AI 降低了產生文字、圖片、音樂與程式的門檻，也讓判斷品質與說明選擇變得更重要。</p><h3>問題定義</h3><p>先釐清要解決什麼問題、服務誰、有哪些限制，再決定是否使用 AI。</p><h3>驗證與修正</h3><p>AI 產出需要被測試、查核與修改，不能直接視為正確答案。</p><h3>成果責任</h3><p>學生需要說明哪些部分由 AI 協助、自己做了什麼判斷，以及如何確保作品符合目標。</p>`
  }
];

const STEAM_CONTENT = {
  science: { letter: "S", title: "Science｜科學探究", lead: "觀察現象、提出假設、設計測試，並用證據解釋結果。", points: ["辨識變因與觀察條件", "建立預測、測試與紀錄習慣", "用證據修正原本的想法"] },
  technology: { letter: "T", title: "Technology｜科技工具", lead: "理解工具如何運作，並選擇合適的數位或實體技術完成任務。", points: ["程式、感測器與數位工具", "理解輸入、處理與輸出", "安全、倫理與負責任使用"] },
  engineering: { letter: "E", title: "Engineering｜工程設計", lead: "在材料、時間與功能限制下，反覆建構、測試與改良。", points: ["需求與限制條件分析", "原型製作與功能測試", "從失敗中迭代與改善"] },
  art: { letter: "A", title: "Art｜設計與表達", lead: "讓功能、故事、視覺與使用體驗互相配合，使成果更容易被理解。", points: ["造型、色彩與資訊表達", "角色、故事與創意發想", "從使用者角度改善體驗"] },
  math: { letter: "M", title: "Mathematics｜數學思考", lead: "運用量測、比例、數據與邏輯，協助判斷設計是否有效。", points: ["長度、角度、速度與比例", "整理數據與比較結果", "以邏輯支持設計決策"] }
};

const SERVICES = {
  school: { label: "學校與教師", title: "從一堂示範課，到校本科技課程與教師接手。", intro: "依年級、班級數、節數、設備與教師經驗，規劃可落地的課程與教具配置。", items: [{name:"課程設計",text:"體驗課、系列課、社團、營隊與專題。"},{name:"教具配置",text:"依人數與課程流程規劃套數、耗材與備品。"},{name:"教師培訓",text:"操作、教案共備、試教與回饋。"}], output: "可交付：課程架構、教案、教材、教具清單、教師培訓、學習成果與成效紀錄。" },
  enterprise: { label: "企業 ESG／CSR", title: "把教育投入轉化為可執行、可紀錄的社會影響力。", intro: "以偏鄉教育、員工親子、科技普及或地方連結為主題，設計企業可參與的教育方案。", items: [{name:"教育認養",text:"學校課程、教具、師資與年度陪伴。"},{name:"員工參與",text:"親子日、志工共教與成果展演。"},{name:"影響溝通",text:"受益人次、活動紀錄、故事與媒體素材。"}], output: "可交付：ESG／CSR 合作方案、執行計畫、活動成果、影像素材與影響力指標。" },
  government: { label: "公部門與展館", title: "整合內容、科技互動、場域工程與維運需求。", intro: "適用於教育館舍、宣導專案、互動展覽、AR／VR 體驗與地方文化科技應用。", items: [{name:"內容策劃",text:"教育目標、腳本、任務與展示架構。"},{name:"互動整合",text:"AR、VR、體感、觸控與遊戲化。"},{name:"履約管理",text:"設備、場域、測試、教育訓練與驗收。"}], output: "可交付：需求規格、企劃腳本、互動系統、硬體整合、教育訓練、驗收與維運文件。" },
  local: { label: "地方創生與社區", title: "讓文化、產業與科技體驗形成可持續的場域服務。", intro: "以地方故事、特色店家、親子旅遊與青年培力為基礎，發展任務票、導覽與科技體驗。", items: [{name:"文化任務",text:"AR 集章、解謎、店家任務與小旅行。"},{name:"人才培力",text:"科技嚮導、青年講師與在地協作者。"},{name:"產品服務",text:"任務票、禮盒、紀念品與常設體驗。"}], output: "可交付：場域體驗流程、任務內容、數位導覽、人才培訓、營運工具與成果追蹤。" }
};

/* --------------------------- 共用功能 --------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollUI();
  initReveal();
  initStarFields();
  initTiltCards();
  initCarousels();
  initModals();
  initProductPage();
  initSteamExplorer();
  initArticlePage();
  initServiceTabs();
  initContactForm();
  document.querySelectorAll("[data-current-year]").forEach(el => { el.textContent = String(new Date().getFullYear()); });
});

function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  const page = document.body.dataset.page;
  const setActive = () => {
    document.querySelectorAll("[data-nav]").forEach(link => link.classList.remove("is-active"));
    let key = page;
    if (page === "contact") key = location.hash === "#contact" ? "contact" : "services";
    document.querySelector(`[data-nav="${key}"]`)?.classList.add("is-active");
  };
  setActive();
  window.addEventListener("hashchange", setActive);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("is-menu-open", !open);
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a") && nav.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("is-menu-open");
      }
    });
  }
  const onScroll = () => header?.classList.toggle("is-scrolled", scrollY > 12);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
}

function initScrollUI() {
  const progress = document.querySelector(".scroll-progress span");
  const back = document.querySelector(".back-to-top");
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const percent = max > 0 ? Math.min(100, (scrollY / max) * 100) : 0;
    if (progress) progress.style.width = `${percent}%`;
    back?.classList.toggle("is-visible", scrollY > 550);
  };
  update();
  addEventListener("scroll", update, { passive: true });
  back?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const items = [...document.querySelectorAll(".reveal")];
  items.forEach(item => item.style.setProperty("--reveal-delay", `${Number(item.dataset.delay || 0)}ms`));
  if (!("IntersectionObserver" in window)) { items.forEach(item => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: .12, rootMargin: "0px 0px -40px" });
  items.forEach(item => observer.observe(item));
}

function initStarFields() {
  document.querySelectorAll("[data-star-field]").forEach(field => {
    const total = Math.max(0, Number(field.dataset.starField || 18));
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < total; i += 1) {
      const star = document.createElement("i");
      star.className = "star-particle";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty("--size", `${5 + Math.random() * 16}px`);
      star.style.setProperty("--opacity", String(.25 + Math.random() * .7));
      star.style.setProperty("--duration", `${2.4 + Math.random() * 4.2}s`);
      star.style.setProperty("--delay", `${-Math.random() * 5}s`);
      star.style.setProperty("--star-color", Math.random() > .45 ? "#f5b335" : "#1c77be");
      fragment.appendChild(star);
    }
    field.appendChild(fragment);
  });
}

function initTiltCards() {
  if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* --------------------------- 輪播 --------------------------- */
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);
}

function setupCarousel(root) {
  const slides = [...root.querySelectorAll("[data-slide]")];
  if (slides.length < 1) return;
  const prev = root.querySelector("[data-carousel-prev]");
  const next = root.querySelector("[data-carousel-next]");
  const dotsBox = root.querySelector("[data-carousel-dots]");
  const toggle = root.querySelector("[data-carousel-toggle]");
  const currentLabel = root.querySelector("[data-carousel-current]");
  const totalLabel = root.querySelector("[data-carousel-total]");
  const intervalMs = Math.max(2500, Number(root.dataset.autoplay || 0));
  let index = Math.max(0, slides.findIndex(slide => slide.classList.contains("is-active")));
  let timer = null;
  let playing = intervalMs > 0;
  let startX = 0;
  if (totalLabel) totalLabel.textContent = String(slides.length).padStart(2, "0");

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `前往第 ${i + 1} 張`);
    dot.addEventListener("click", () => go(i, true));
    dotsBox?.appendChild(dot);
    return dot;
  });

  function render() {
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    if (currentLabel) currentLabel.textContent = String(index + 1).padStart(2, "0");
  }
  function go(nextIndex, userAction = false) {
    index = (nextIndex + slides.length) % slides.length;
    render();
    if (userAction) restart();
  }
  function start() {
    if (!playing || intervalMs === 0 || slides.length < 2) return;
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), intervalMs);
  }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }
  function updateToggle() {
    if (!toggle) return;
    toggle.textContent = playing ? "Ⅱ" : "▶";
    toggle.setAttribute("aria-label", playing ? "暫停自動播放" : "開始自動播放");
  }

  prev?.addEventListener("click", () => go(index - 1, true));
  next?.addEventListener("click", () => go(index + 1, true));
  toggle?.addEventListener("click", () => { playing = !playing; updateToggle(); playing ? start() : stop(); });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", event => { if (!root.contains(event.relatedTarget)) start(); });
  root.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { event.preventDefault(); go(index - 1, true); }
    if (event.key === "ArrowRight") { event.preventDefault(); go(index + 1, true); }
  });
  root.addEventListener("touchstart", event => { startX = event.changedTouches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", event => {
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1), true);
  }, { passive: true });
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  render(); updateToggle(); start();
}

/* --------------------------- Modal --------------------------- */
function initModals() {
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => { if (event.target === modal || event.target.closest("[data-modal-close]")) closeModal(modal); });
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") document.querySelectorAll(".modal.is-open").forEach(closeModal);
  });
}
function openModal(modal) {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => modal.querySelector(".modal-close")?.focus(), 30);
}
function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

/* --------------------------- 產品頁 --------------------------- */
function initProductPage() {
  const grid = document.querySelector("#product-grid");
  if (!grid) {
    document.addEventListener("click", event => {
      const button = event.target.closest("[data-open-product]");
      if (button) showProductModal(button.dataset.openProduct);
    });
    return;
  }
  const search = document.querySelector("#product-search");
  const sort = document.querySelector("#product-sort");
  const filters = [...document.querySelectorAll("[data-product-filter]")];
  const count = document.querySelector("#product-count");
  const resultText = document.querySelector("#product-result-text");
  let activeFilter = "all";
  let favorites = loadFavorites();

  function renderProducts() {
    const query = (search?.value || "").trim().toLowerCase();
    let list = PRODUCTS.filter(product => {
      const searchable = [product.name, product.subtitle, product.categoryLabel, product.skills, ...product.tags].join(" ").toLowerCase();
      const matchText = !query || searchable.includes(query);
      const matchCategory = activeFilter === "all" || (activeFilter === "favorite" ? favorites.has(product.id) : product.category === activeFilter);
      return matchText && matchCategory;
    });
    if (sort?.value === "name") list.sort((a,b) => a.name.localeCompare(b.name,"zh-Hant"));
    if (sort?.value === "age") list.sort((a,b) => a.ageOrder - b.ageOrder);
    grid.innerHTML = list.length ? list.map(product => productCardHTML(product, favorites.has(product.id))).join("") : `<div class="empty-state"><strong>沒有符合條件的產品</strong><span>請調整分類或搜尋關鍵字。</span></div>`;
    if (count) count.textContent = `共 ${PRODUCTS.length} 項產品`;
    if (resultText) resultText.textContent = `目前顯示 ${list.length} 項`;
  }

  filters.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.productFilter;
    filters.forEach(item => item.classList.toggle("is-active", item === button));
    renderProducts();
  }));
  search?.addEventListener("input", renderProducts);
  sort?.addEventListener("change", renderProducts);
  grid.addEventListener("click", event => {
    const favorite = event.target.closest("[data-favorite-product]");
    if (favorite) {
      const id = favorite.dataset.favoriteProduct;
      favorites.has(id) ? favorites.delete(id) : favorites.add(id);
      saveFavorites(favorites);
      renderProducts();
      return;
    }
    const open = event.target.closest("[data-open-product]");
    if (open) showProductModal(open.dataset.openProduct);
  });
  document.addEventListener("click", event => {
    const open = event.target.closest("[data-open-product]");
    if (open && !grid.contains(open)) showProductModal(open.dataset.openProduct);
  });
  renderProducts();
}

function productCardHTML(product, favorite) {
  return `<article class="product-card">
    <div class="product-image"><img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy"><button class="favorite-button ${favorite ? "is-favorite" : ""}" type="button" data-favorite-product="${product.id}" aria-label="${favorite ? "取消收藏" : "加入收藏"}">★</button><span class="product-category">${product.categoryLabel}</span></div>
    <div class="product-content"><span class="product-code">${product.code}</span><h3>${product.name}</h3><p class="product-subtitle">${product.subtitle}</p><div class="product-specs"><span>${product.age}</span><span>${product.duration}</span></div><div class="product-tags">${product.tags.slice(0,4).map(tag => `<span>${tag}</span>`).join("")}</div><div class="product-actions"><button class="product-open" type="button" data-open-product="${product.id}">查看內容 →</button></div></div>
  </article>`;
}

function showProductModal(id) {
  const product = PRODUCTS.find(item => item.id === id);
  const modal = document.querySelector("#product-modal");
  const content = document.querySelector("#product-modal-content");
  if (!product || !modal || !content) return;
  content.innerHTML = `<div class="product-modal-layout"><div class="product-modal-image"><img src="${product.image}" alt="${escapeHTML(product.name)}"></div><div class="product-modal-copy"><span>${product.categoryLabel}・${product.code}</span><h2 id="product-modal-title">${product.name}</h2><p class="lead">${product.subtitle}</p><p>${product.description}</p><div class="product-modal-meta"><div><small>建議年齡</small><strong>${product.age}</strong></div><div><small>課程時數</small><strong>${product.duration}</strong></div><div><small>學習能力</small><strong>${product.skills}</strong></div><div><small>產品分類</small><strong>${product.categoryLabel}</strong></div></div><h3>建議內容</h3><ul>${product.deliverables.map(item => `<li>${item}</li>`).join("")}</ul><a class="button button-small" href="contact.html#contact">洽詢此產品</a><p class="product-modal-note">產品規格、內容物、庫存、採購數量與報價，請以人工確認為準。</p></div></div>`;
  openModal(modal);
}

function loadFavorites() {
  try { return new Set(JSON.parse(localStorage.getItem("geneowisen-favorites") || "[]")); }
  catch { return new Set(); }
}
function saveFavorites(set) {
  try { localStorage.setItem("geneowisen-favorites", JSON.stringify([...set])); } catch { /* localStorage may be disabled */ }
}

/* --------------------------- STEAM 頁 --------------------------- */
function initSteamExplorer() {
  const panel = document.querySelector("#steam-panel");
  const tabs = [...document.querySelectorAll("[data-steam]")];
  if (!panel || tabs.length === 0) return;
  function render(key) {
    const item = STEAM_CONTENT[key];
    if (!item) return;
    panel.innerHTML = `<div class="steam-letter">${item.letter}</div><h3>${item.title}</h3><p class="lead">${item.lead}</p><ul>${item.points.map(point => `<li>${point}</li>`).join("")}</ul>`;
    tabs.forEach(tab => { const active = tab.dataset.steam === key; tab.classList.toggle("is-active",active); tab.setAttribute("aria-selected",String(active)); });
  }
  tabs.forEach(tab => tab.addEventListener("click", () => render(tab.dataset.steam)));
  render("science");
}

/* --------------------------- 文章頁 --------------------------- */
function initArticlePage() {
  const grid = document.querySelector("#article-grid");
  if (!grid) return;
  const search = document.querySelector("#article-search");
  const filters = [...document.querySelectorAll("[data-article-filter]")];
  const count = document.querySelector("#article-count");
  let active = "all";
  function render() {
    const query = (search?.value || "").trim().toLowerCase();
    const list = ARTICLES.filter(article => {
      const text = [article.title, article.summary, article.categoryLabel].join(" ").toLowerCase();
      return (!query || text.includes(query)) && (active === "all" || article.category === active);
    });
    grid.innerHTML = list.length ? list.map(articleCardHTML).join("") : `<div class="empty-state"><strong>沒有符合條件的文章</strong><span>請調整分類或搜尋關鍵字。</span></div>`;
    if (count) count.textContent = `共 ${ARTICLES.length} 篇文章，目前顯示 ${list.length} 篇`;
  }
  filters.forEach(button => button.addEventListener("click", () => { active = button.dataset.articleFilter; filters.forEach(item => item.classList.toggle("is-active",item===button)); render(); }));
  search?.addEventListener("input",render);
  grid.addEventListener("click", event => { const button = event.target.closest("[data-open-article]"); if (button) showArticleModal(button.dataset.openArticle); });
  render();
}
function articleCardHTML(article) {
  return `<article class="article-card"><div class="article-image"><img src="${article.image}" alt="${escapeHTML(article.title)}" loading="lazy"></div><div class="article-content"><div class="article-meta"><span>${article.categoryLabel}</span><span>${article.readTime}</span></div><h3>${article.title}</h3><p>${article.summary}</p><button class="article-read" type="button" data-open-article="${article.id}">閱讀文章 <span>→</span></button></div></article>`;
}
function showArticleModal(id) {
  const article = ARTICLES.find(item => item.id === id);
  const modal = document.querySelector("#article-modal");
  const content = document.querySelector("#article-modal-content");
  if (!article || !modal || !content) return;
  content.innerHTML = `<div class="article-modal-hero"><img src="${article.image}" alt="${escapeHTML(article.title)}"></div><div class="article-modal-meta"><span>${article.categoryLabel}</span><span>${article.readTime}</span></div><h2 id="article-modal-title">${article.title}</h2><div class="article-body">${article.body}</div>`;
  openModal(modal);
}

/* --------------------------- 服務頁 --------------------------- */
function initServiceTabs() {
  const panel = document.querySelector("#service-tab-panel");
  const tabs = [...document.querySelectorAll("[data-service]")];
  if (!panel || tabs.length === 0) return;
  function render(key) {
    const service = SERVICES[key];
    if (!service) return;
    panel.innerHTML = `<div class="service-panel-head"><div><span>${service.label}</span><h3>${service.title}</h3><p>${service.intro}</p></div></div><div class="service-panel-grid">${service.items.map(item => `<article><b>${item.name}</b><p>${item.text}</p></article>`).join("")}</div><p class="service-output">${service.output}</p><a class="button button-small" href="#contact">洽詢這項服務</a>`;
    tabs.forEach(tab => { const active = tab.dataset.service === key; tab.classList.toggle("is-active",active); tab.setAttribute("aria-selected",String(active)); });
  }
  tabs.forEach(tab => tab.addEventListener("click", () => render(tab.dataset.service)));
  render("school");
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  const copy = document.querySelector("[data-copy-email]");
  copy?.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(CONTACT_EMAIL); copy.textContent = "已複製"; setTimeout(() => copy.textContent = "複製 Email",1500); }
    catch { location.href = `mailto:${CONTACT_EMAIL}`; }
  });
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `【智遊創生合作洽詢】${data.get("organization") || data.get("name")}｜${data.get("type")}`;
    const body = [
      `姓名／稱呼：${data.get("name")}`,
      `單位名稱：${data.get("organization") || "未填寫"}`,
      `Email：${data.get("email")}`,
      `聯絡電話：${data.get("phone") || "未填寫"}`,
      `合作類型：${data.get("type")}`,
      `預計對象／年齡：${data.get("audience") || "未填寫"}`,
      "",
      "需求說明：",
      String(data.get("message") || "")
    ].join("\n");
    if (status) status.textContent = "正在開啟 Email 軟體；若沒有反應，請直接寄信至頁面所列信箱。";
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[character]));
}
