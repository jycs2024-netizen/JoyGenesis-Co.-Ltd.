# 智遊創生企業官網｜使用與修改說明

本網站只使用 HTML、CSS、JavaScript，不使用框架、套件或外部 CDN。解壓縮後直接開啟 `index.html` 即可瀏覽。

## 檔案結構

- `index.html`：首頁、品牌主視覺、案例輪播、產品與服務預覽
- `product.html`：產品精選輪播、搜尋、分類、排序、收藏與產品詳細視窗
- `column.html`：Header 下方輪播、STEAM 教學法、科技教育與文章專欄
- `contact.html`：專案服務、合作流程、FAQ、企業簡介與聯絡表單
- `style.css`：全站共用、首頁與聯絡頁樣式
- `productstyle.css`：產品頁樣式
- `columnstyle.css`：專欄頁樣式
- `script.js`：產品資料、文章資料、輪播、篩選、彈出視窗與表單功能
- `assets/`：上傳圖片與 SVG

## 修改產品資訊

開啟 `script.js`，搜尋：

```javascript
const PRODUCTS = [
```

每個產品使用以下格式：

```javascript
{
  id: "不可重複的英文代碼",
  category: "robot",
  categoryLabel: "機器人與程式",
  code: "STEAM-R01",
  name: "產品名稱",
  subtitle: "產品副標題",
  image: "assets/圖片檔名.png",
  age: "國小高年級以上",
  ageOrder: 5,
  duration: "4～12 堂",
  skills: "循跡、避障、程式控制",
  tags: ["程式", "感測器"],
  description: "完整產品介紹。",
  deliverables: ["內容物一", "內容物二"]
}
```

分類代碼：

- `digital`：AR／數位互動
- `robot`：機器人與程式
- `engineering`：機構與工程
- `science`：科學與綠能

新增產品後，產品頁會自動產生卡片、搜尋結果與詳細內容視窗。

## 修改文章專欄

開啟 `script.js`，搜尋：

```javascript
const ARTICLES = [
```

文章格式：

```javascript
{
  id: "不可重複的英文代碼",
  category: "steam",
  categoryLabel: "STEAM 教學",
  title: "文章標題",
  image: "assets/圖片檔名.png",
  readTime: "5 分鐘閱讀",
  summary: "列表摘要。",
  body: `
    <p class="article-lead">文章導言。</p>
    <h3>段落標題</h3>
    <p>文章內容。</p>
  `
}
```

文章分類：

- `steam`：STEAM 教學
- `practice`：教學實務
- `future`：AI 與科技

## 修改輪播圖

輪播內容直接寫在各 HTML 的 `[data-carousel]` 區塊中。每張必須包含：

```html
<article class="showcase-slide" data-slide>
  <img src="assets/圖片名稱.png" alt="圖片說明">
  ...
</article>
```

第一張加上 `is-active`。輪播圓點、張數、自動播放、鍵盤與手機滑動皆由 `script.js` 自動處理。

修改自動切換時間：

```html
<div data-carousel data-autoplay="5200">
```

`5200` 代表 5.2 秒。設定為 `0` 可停止自動輪播。

## 修改 Email 與社群網址

1. 在 `script.js` 搜尋：

```javascript
const CONTACT_EMAIL = "hello@your-company.tw";
```

2. 在四個 HTML 中搜尋 `hello@your-company.tw` 並替換。
3. 在 `contact.html` 搜尋 `<div class="social-links">`，替換 Facebook、Instagram、YouTube 與 LINE 網址。

## 圖片注意事項

- 本版保留使用者上傳的圖片尺寸與檔名。
- 圖片必須放在 `assets` 資料夾。
- 建議首頁與專欄橫圖使用 16:9 或接近 1200×628；產品圖使用 1:1。
- 若更改檔名，必須同步修改 HTML 或 `script.js` 中的 `image` 路徑。

## 正式上線前

- 換成正式 Email 與社群連結。
- 確認所有產品規格、價格、庫存與商標授權。
- 純前端表單只會開啟 Email 軟體。如需線上收件，可串接 Google Forms、Formspree、自有 API 或 CRM。
