<!DOCTYPE html>
<html lang="ku" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سەرچاوە</title>

<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{
  font-family:"Vazirmatn",sans-serif;
  height:100vh;
  overflow:hidden;
  background:#fffaf4;
  display:flex;
  flex-direction:column;
}

/* HEADER */
.header{
  background:#ffbf80;
  margin:6px;
  padding:18px 24px;
  border-radius:14px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-shrink:0;
}
.header-text h1{font-size:38px;font-weight:900;line-height:1;}
.header-text p{margin-top:5px;font-size:15px;opacity:.8;}

/* MAIN BODY */
#body{
  flex:1;
  display:flex;
  gap:12px;
  padding:10px;
  overflow:hidden;
  min-height:0;
}

/* RIGHT SIDE – resource list */
.right_side{
  width:45%;
  background:white;
  border-radius:20px;
  padding:14px;
  border:1px solid rgba(0,0,0,.08);
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:hidden;
}

#search{
  width:100%;
  height:42px;
  border-radius:20px;
  border:1.5px solid rgba(0,0,0,.18);
  padding:0 16px;
  font-family:"Vazirmatn",sans-serif;
  font-size:14px;
  outline:none;
  flex-shrink:0;
}
#search:focus{border-color:#ffb26b;}

#resources{
  overflow-y:auto;
  flex:1;
  display:flex;
  flex-direction:column;
  gap:10px;
}

.resource{
  display:flex;
  gap:12px;
  border:1px solid rgba(0,0,0,.09);
  border-radius:14px;
  padding:10px;
  align-items:center;
  transition:box-shadow .2s;
  flex-shrink:0;
}
.resource:hover{box-shadow:0 3px 14px rgba(0,0,0,.08);}
.resource img{
  width:56px;height:56px;
  border-radius:10px;
  object-fit:cover;
  flex-shrink:0;
  background:#f0e8df;
}
.resource-info{display:flex;flex-direction:column;gap:3px;}
.resource-info h3{font-size:15px;font-weight:700;}
.resource-info span{font-size:12px;opacity:.65;}
.resource-info .cat-badge{
  display:inline-block;
  margin-top:3px;
  font-size:11px;
  background:#fff0e0;
  color:#c06b00;
  border-radius:20px;
  padding:2px 9px;
  font-weight:600;
}

/* LEFT SIDE – filters + nav */
.left_side{
  width:55%;
  background:#ffeede;
  border-radius:20px;
  padding:14px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}

.filter-btn{
  width:100%;
  padding:11px;
  border:none;
  border-radius:12px;
  background:#ffb26b;
  font-family:"Vazirmatn",sans-serif;
  font-size:15px;
  font-weight:700;
  cursor:pointer;
  margin-bottom:10px;
  flex-shrink:0;
  transition:background .2s;
}
.filter-btn:hover{background:#ffa04a;}

.filters{
  display:none;
  overflow-y:auto;
  flex:1;
}
.filter-item{
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:8px;
  font-size:14px;
}
.filter-item input[type=checkbox]{accent-color:#ff8c2a;width:16px;height:16px;cursor:pointer;}

/* BOTTOM NAV ICONS */
.nav-icons{
  display:flex;
  gap:10px;
  margin-top:auto;
  padding-top:12px;
  flex-shrink:0;
}
.nav-icon-btn{
  width:46px;height:46px;
  border:none;
  border-radius:50%;
  background:#ffb26b;
  color:white;
  font-size:18px;
  cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:background .2s, transform .15s;
  box-shadow:0 2px 8px rgba(0,0,0,.12);
}
.nav-icon-btn:hover{background:#ff8c2a;transform:scale(1.08);}

/* FOOTER */
.footer{
  background:#fff1e3;
  padding:10px;
  text-align:center;
  flex-shrink:0;
}
.footer i{margin:0 7px;opacity:.7;cursor:pointer;transition:opacity .2s;}
.footer i:hover{opacity:1;}
.footer p{font-size:11px;opacity:.55;margin-top:4px;}

/* ===== MODAL BASE ===== */
.modal-overlay{
  display:none;
  position:fixed;inset:0;
  background:rgba(0,0,0,.45);
  z-index:1000;
  align-items:center;
  justify-content:center;
}
.modal-overlay.open{display:flex;}

.modal{
  background:white;
  border-radius:20px;
  padding:28px 28px 24px;
  width:min(480px,92vw);
  max-height:88vh;
  overflow-y:auto;
  position:relative;
  animation:popIn .25s ease;
  direction:rtl;
}
@keyframes popIn{from{transform:scale(.88);opacity:0;}to{transform:scale(1);opacity:1;}}

.modal-close{
  position:absolute;
  top:14px;left:14px;
  background:none;border:none;
  font-size:20px;cursor:pointer;
  color:#999;transition:color .2s;
}
.modal-close:hover{color:#333;}

.modal h2{font-size:22px;font-weight:900;margin-bottom:18px;color:#3a2000;}

/* ABOUT MODAL */
.about-content{font-size:15px;line-height:1.9;color:#4a3010;}
.about-content strong{color:#c06b00;}

/* ADD SOURCE FORM */
.form-group{margin-bottom:14px;display:flex;flex-direction:column;gap:5px;}
.form-group label{font-size:13px;font-weight:700;color:#5a3a10;}
.form-group input,
.form-group select,
.form-group textarea{
  width:100%;
  padding:10px 13px;
  border:1.5px solid rgba(0,0,0,.15);
  border-radius:11px;
  font-family:"Vazirmatn",sans-serif;
  font-size:14px;
  outline:none;
  transition:border-color .2s;
  background:#fffdf9;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus{border-color:#ffb26b;}
.form-group textarea{resize:vertical;min-height:90px;}
.form-group select{cursor:pointer;}

.form-file-label{
  display:flex;
  align-items:center;
  gap:9px;
  padding:9px 13px;
  border:1.5px dashed rgba(0,0,0,.2);
  border-radius:11px;
  cursor:pointer;
  font-size:13px;
  color:#888;
  transition:border-color .2s;
}
.form-file-label:hover{border-color:#ffb26b;color:#c06b00;}
.form-file-label input{display:none;}

.btn-submit{
  width:100%;
  padding:13px;
  background:#ffb26b;
  border:none;
  border-radius:13px;
  font-family:"Vazirmatn",sans-serif;
  font-size:16px;
  font-weight:800;
  cursor:pointer;
  margin-top:6px;
  transition:background .2s;
  color:#3a2000;
}
.btn-submit:hover{background:#ff8c2a;}

.success-msg{
  display:none;
  text-align:center;
  padding:18px;
  background:#fff5e8;
  border-radius:14px;
  margin-top:12px;
  font-size:15px;
  color:#8a4a00;
  font-weight:700;
}
</style>
</head>
<body>

<!-- HEADER -->
<div class="header">
  <div class="header-text">
    <h1>سەرچاوە</h1>
    <p>سەرچاوە بۆ دۆزینەوەی سەرچاوەکان بە ئاسانی</p>
  </div>
</div>

<!-- BODY -->
<div id="body">

  <!-- RIGHT SIDE -->
  <div class="right_side">
    <input id="search" placeholder="گەڕان..." oninput="render()">
    <div id="resources"></div>
  </div>

  <!-- LEFT SIDE -->
  <div class="left_side">
    <button class="filter-btn" onclick="toggleFilters()">
      <i class="fas fa-filter" style="margin-left:7px;"></i>فلتەرکردن
    </button>
    <div class="filters" id="filters"></div>

    <!-- Bottom nav icons -->
    <div class="nav-icons">
      <button class="nav-icon-btn" title="زیادکردنی سەرچاوە" onclick="openModal('addModal')">
        <i class="fas fa-plus"></i>
      </button>
      <button class="nav-icon-btn" title="دەربارەی ئێمە" onclick="openModal('aboutModal')">
        <i class="fas fa-info"></i>
      </button>
    </div>
  </div>

</div>

<!-- FOOTER -->
<div class="footer">
  <i class="fab fa-facebook"></i>
  <i class="fab fa-instagram"></i>
  <i class="fab fa-youtube"></i>
  <p>© 2026 Sarchawa</p>
</div>


<!-- ===== ABOUT MODAL ===== -->
<div class="modal-overlay" id="aboutModal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('aboutModal')"><i class="fas fa-times"></i></button>
    <h2>دەربارەی سەرچاوە</h2>
    <div class="about-content">
      <p>بەخێربێیت بۆ <strong>سەرچاوە</strong> — شوێنی یەکەمی کوردی بۆ کۆکردنەوەی سەرچاوە و بەرچاوخەرەکانی فێرکاری و زانستی.</p>
      <br>
      <p>مەبەستی ئێمە ئەوەیە کە هەموو سەرچاوەی باشی کوردی و کوردیزەکراو لە شوێنێکدا بیکەینەوە بۆ ئەوەی فێرخواز و پسپۆڕەکان بتوانن بە ئاسانی بیاندۆزنەوە.</p>
      <br>
      <p>ئەگەر سەرچاوەیەکت هەیە کە بەسوودی دیکان دەبێت، دەتوانیت بیزیادبکەیت — تیمی ئێمە پشتی ئەو داواکارییە دەبینێت و دوای پەسەندکردن بڵاودەبێتەوە.</p>
      <br>
      <p style="font-size:13px;opacity:.65;">پەیوەندی: info@sarchawa.com</p>
    </div>
  </div>
</div>


<!-- ===== ADD SOURCE MODAL ===== -->
<div class="modal-overlay" id="addModal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('addModal')"><i class="fas fa-times"></i></button>
    <h2><i class="fas fa-plus-circle" style="margin-left:8px;color:#ffb26b;"></i>زیادکردنی سەرچاوە</h2>

    <form id="addForm" onsubmit="handleSubmit(event)">

      <div class="form-group">
        <label>ناوی سەرچاوە *</label>
        <input type="text" name="source_name" placeholder="ناوی سەرچاوەکەت بنووسە" required>
      </div>

      <div class="form-group">
        <label>بەستەری سەرچاوە (URL) *</label>
        <input type="url" name="source_url" placeholder="https://example.com" required>
      </div>

      <div class="form-group">
        <label>پۆلەکە (Category) *</label>
        <select name="category" required>
          <option value="" disabled selected>پۆلێک هەڵبژێرە...</option>
          <option value="Technology">Technology – تێکنەلۆژیا</option>
          <option value="History">History – مێژوو</option>
          <option value="Language">Language – زمان</option>
          <option value="Science">Science – زانست</option>
          <option value="Programming">Programming – پرۆگرامسازی</option>
          <option value="AI">AI – زیرەکی دەستکرد</option>
          <option value="Math">Math – بیرکاری</option>
          <option value="Physics">Physics – فیزیا</option>
          <option value="Chemistry">Chemistry – کیمیا</option>
          <option value="Biology">Biology – زیندەزانست</option>
          <option value="Geography">Geography – جوگرافیا</option>
          <option value="Economics">Economics – ئابووری</option>
          <option value="Politics">Politics – سیاسەت</option>
          <option value="Philosophy">Philosophy – فەلسەفە</option>
          <option value="Art">Art – هونەر</option>
          <option value="Culture">Culture – کەلتوور</option>
          <option value="Health">Health – تەندروستی</option>
          <option value="Education">Education – فێرکاری</option>
          <option value="Law">Law – یاسا</option>
          <option value="Media">Media – میدیا</option>
          <option value="Agriculture">Agriculture – کشتوکاڵ</option>
          <option value="Religion">Religion – ئایین</option>
          <option value="Psychology">Psychology – دەروونناسی</option>
          <option value="Statistics">Statistics – ئامار</option>
          <option value="Networks">Networks – تۆڕەکان</option>
        </select>
      </div>

      <div class="form-group">
        <label>ئیمەیڵی خاوەنەکە *</label>
        <input type="email" name="owner_email" placeholder="email@example.com" required>
      </div>

      <div class="form-group">
        <label>دەربارەی سەرچاوەکە</label>
        <textarea name="description" placeholder="کورتەیەک دەربارەی ئەم سەرچاوەیە بنووسە..."></textarea>
      </div>

      <div class="form-group">
        <label>لۆگۆی سەرچاوەکە</label>
        <label class="form-file-label">
          <i class="fas fa-image"></i>
          <span id="file-label-text">وێنەیەک هەڵبژێرە...</span>
          <input type="file" name="logo" accept="image/*" onchange="updateFileLabel(this)">
        </label>
      </div>

      <button type="submit" class="btn-submit">ناردنی داواکاری</button>
    </form>

    <div class="success-msg" id="successMsg">
      ✅ داواکارییەکەت بەسەرکەوتوویی نێردرا! دوای پەسەندکردنی ئەدمین بڵاودەبێتەوە.
    </div>

  </div>
</div>


<script>
const categories = [
 ["Technology","تێکنەلۆژیا"],["History","مێژوو"],["Language","زمان"],["Science","زانست"],
 ["Programming","پرۆگرامسازی"],["AI","زیرەکی دەستکرد"],["Math","بیرکاری"],["Physics","فیزیا"],
 ["Chemistry","کیمیا"],["Biology","زیندەزانست"],["Geography","جوگرافیا"],["Economics","ئابووری"],
 ["Politics","سیاسەت"],["Philosophy","فەلسەفە"],["Art","هونەر"],["Culture","کەلتوور"],
 ["Health","تەندروستی"],["Education","فێرکاری"],["Law","یاسا"],["Media","میدیا"],
 ["Agriculture","کشتوکاڵ"],["Religion","ئایین"],["Psychology","دەروونناسی"],
 ["Statistics","ئامار"],["Networks","تۆڕەکان"]
];

// Minimal demo data — will be replaced by PHP/MySQL output
const data = [
 {title:"Python Programming", cat:["Programming","Technology"], img:"https://placehold.co/60x60/ffb26b/fff?text=Py", desc:"Learn Python basics"},
 {title:"AI Basics",           cat:["AI","Technology"],          img:"https://placehold.co/60x60/ffb26b/fff?text=AI", desc:"Introduction to AI concepts"},
 {title:"History of Kurdistan",cat:["History"],                  img:"https://placehold.co/60x60/ffb26b/fff?text=KU", desc:"Kurdish history summary"},
];

// Fill filters
const filtersBox = document.getElementById("filters");
categories.forEach(c=>{
  const div=document.createElement("div");
  div.className="filter-item";
  div.innerHTML=`<input type="checkbox" value="${c[0]}" onchange="render()"> ${c[1]} / ${c[0]}`;
  filtersBox.appendChild(div);
});

function toggleFilters(){
  filtersBox.style.display = filtersBox.style.display==="block"?"none":"block";
}

function render(){
  const search=document.getElementById("search").value.toLowerCase();
  const active=[...filtersBox.querySelectorAll("input:checked")].map(i=>i.value);
  const container=document.getElementById("resources");
  container.innerHTML="";
  data
    .filter(r=>!active.length||active.some(a=>r.cat.includes(a)))
    .filter(r=>r.title.toLowerCase().includes(search))
    .forEach(r=>{
      const div=document.createElement("div");
      div.className="resource";
      div.innerHTML=`
        <img src="${r.img}" alt="${r.title}">
        <div class="resource-info">
          <h3>${r.title}</h3>
          <span>${r.desc}</span>
          <span class="cat-badge">${r.cat[0]}</span>
        </div>`;
      container.appendChild(div);
    });
}

render();

// Modal helpers
function openModal(id){document.getElementById(id).classList.add("open");}
function closeModal(id){document.getElementById(id).classList.remove("open");}
// Close on overlay click
document.querySelectorAll(".modal-overlay").forEach(o=>{
  o.addEventListener("click",e=>{if(e.target===o)o.classList.remove("open");});
});

// File label
function updateFileLabel(input){
  document.getElementById("file-label-text").textContent=
    input.files[0]?input.files[0].name:"وێنەیەک هەڵبژێرە...";
}

// Form submit (front-end only — hook to PHP action later)
function handleSubmit(e){
  e.preventDefault();
  document.getElementById("addForm").style.display="none";
  document.getElementById("successMsg").style.display="block";
  setTimeout(()=>{
    closeModal("addModal");
    document.getElementById("addForm").style.display="block";
    document.getElementById("successMsg").style.display="none";
    document.getElementById("addForm").reset();
    document.getElementById("file-label-text").textContent="وێنەیەک هەڵبژێرە...";
  },3000);
}
</script>
</body>
</html>
