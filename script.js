// --- 1. पाठों का डेटाबेस (इतिहास, भूगोल, Science) ---
const subjectsData = {
  "इतिहास": [
    { num: 1, title: "राजस्थान का परिचय एवं प्राचीन नाम", text: "प्राचीन काल में वाल्मीकि जी ने इसे 'मरुकांतार' कहा। 1800 ई. में जॉर्ज थॉमस ने 'राजपूताना' और 1829 में कर्नल जेम्स टॉड ने 'राजस्थान' नाम दिया।" },
    { num: 2, title: "प्रमुख सभ्यताएं (कालीबंगा, आहड़)", text: "कालीबंगा सभ्यता हनुमानगढ़ जिले में घग्घर नदी के किनारे स्थित है। यहाँ जुते हुए खेत के प्राचीनतम साक्ष्य मिले हैं।" },
    { num: 3, title: "1857 की क्रांति और राजस्थान", text: "राजस्थान में 1857 की क्रांति की शुरुआत 28 मई 1857 को नसीराबाद छावनी से हुई थी।" },
    { num: 4, title: "प्रमुख दुर्ग एवं किले", text: "चित्तौड़गढ़ दुर्ग को राजस्थान का गौरव और सभी दुर्गों का सिरमौर कहा जाता है।" },
    { num: 5, title: "राजस्थान का एकीकरण", text: "राजस्थान का एकीकरण कुल 7 चरणों में पूरा हुआ, जो 18 मार्च 1948 से शुरू होकर 1 नवंबर 1956 को समाप्त हुआ।" }
  ],
  "भूगोल": [
    { num: 1, title: "स्थिति एवं विस्तार", text: "राजस्थान भारत के उत्तर-पश्चिम भाग में स्थित है। इसका कुल क्षेत्रफल 3,42,239 वर्ग किमी है (देश का 10.41%)।" },
    { num: 2, title: "भौतिक प्रदेश (अरावली, मरुस्थल)", text: "अरावली पर्वतमाला विश्व की सबसे प्राचीन वलित पर्वतमाला है। इसकी सबसे ऊँची चोटी गुरुशिखर (1722 मीटर) है।" },
    { num: 3, title: "नदियां एवं झीलें", text: "चंबल राजस्थान की एकमात्र बारहमासी नदी है। सांभर झील भारत की सबसे बड़ी अंतःस्थलीय खारे पानी की झील है।" },
    { num: 4, title: "जलवायु एवं वर्षा", text: "राजस्थान की जलवायु उपोष्ण कटिबंधीय शुष्क से आर्द्र प्रकार की है। सबसे अधिक वर्षा झालावाड़ में होती है।" },
    { num: 5, title: "वन एवं राष्ट्रीय उद्यान", text: "रणथंभौर राष्ट्रीय उद्यान सवाई माधोपुर में बाघों के लिए प्रसिद्ध है।" }
  ],
  "Science": [
    { num: 1, title: "दैनिक जीवन में विज्ञान", text: "पदार्थ की तीन मुख्य अवस्थाएं होती हैं: ठोस, द्रव और गैस। ताप बदलने पर अवस्था में बदलाव होता है।" },
    { num: 2, title: "मानव शरीर एवं पोषण", text: "भोजन के मुख्य पोषक तत्व कार्बोहाइड्रेट, प्रोटीन, वसा, विटामिन और खनिज लवण हैं।" },
    { num: 3, title: "प्रकाश एवं परावर्तन", text: "जब प्रकाश की किरण किसी चमकदार सतह से टकराकर उसी माध्यम में लौटती है, तो इसे परावर्तन कहते हैं।" },
    { num: 4, title: "विद्युत धारा और परिपथ", text: "विद्युत आवेश के प्रवाह की दर को विद्युत धारा कहते हैं। इसका मात्रक एम्पीयर (Ampere) होता है।" },
    { num: 5, title: "पर्यावरण एवं पारिस्थितिकी", text: "हरे पौधे प्रकाश संश्लेषण द्वारा अपना भोजन स्वयं बनाते हैं, इसलिए उन्हें उत्पादक कहते हैं।" }
  ]
};

// --- 2. स्प्लैश स्क्रीन टाइमर (2 सेकंड) ---
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  setTimeout(() => {
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  }, 2000);
});

// --- 3. स्क्रीन बदलने का फंक्शन ---
function goToScreen(screenId) {
  const screens = document.querySelectorAll('.app-view');
  screens.forEach(s => s.classList.remove('active-view'));

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active-view');
  }
}

// --- 4. विषय पर क्लिक: अध्याय दिखाना (स्क्रीन 2) ---
function showSubject(subjectName) {
  const titleElem = document.getElementById('current-subject-title');
  const listElem = document.getElementById('chapters-list');

  titleElem.innerText = subjectName;
  listElem.innerHTML = '';

  const chapters = subjectsData[subjectName] || [
    { num: 1, title: "सामान्य जानकारी", text: "इस विषय के नोट्स जल्द ही जोड़े जाएंगे।" }
  ];

  chapters.forEach(chap => {
    const tile = document.createElement('div');
    tile.className = 'chapter-tile';
    tile.onclick = () => openNotesWithLoading(chap);

    tile.innerHTML = `
      <span class="chap-num">${chap.num}</span>
      <span>${chap.title}</span>
    `;
    listElem.appendChild(tile);
  });

  goToScreen('chapter-screen');
}

// --- 5. अध्याय क्लिक: 2 सेकंड की लोडिंग फिर नोट्स (स्क्रीन 3) ---
function openNotesWithLoading(chap) {
  goToScreen('notes-screen');

  const loader = document.getElementById('chapter-loader');
  const contentArea = document.getElementById('notes-content-area');
  const title = document.getElementById('notes-chapter-title');
  const heading = document.getElementById('note-heading');
  const text = document.getElementById('note-text');

  // पहले 2 सेकंड लोडर दिखाएं
  loader.style.display = 'flex';
  contentArea.style.display = 'none';
  title.innerText = "लोड हो रहा है...";

  setTimeout(() => {
    // 2 सेकंड बाद नोट्स खोलें
    loader.style.display = 'none';
    contentArea.style.display = 'block';

    title.innerText = `पाठ ${chap.num}`;
    heading.innerText = chap.title;
    text.innerText = chap.text;
  }, 2000);
}

// --- 6. नया फ़ोल्डर / पॉप-अप और कैमरा फंक्शन ---
function openAddModal() {
  document.getElementById('add-modal').style.display = 'flex';
}

function closeAddModal() {
  document.getElementById('add-modal').style.display = 'none';
  document.getElementById('new-folder-name').value = '';
  document.getElementById('image-preview').style.display = 'none';
  document.getElementById('image-preview').innerHTML = '';
}

// कैमरा फोटो प्रीव्यू
function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewBox = document.getElementById('image-preview');
      previewBox.innerHTML = `<img src="${e.target.result}" alt="कैमरा फ़ोटो" />`;
      previewBox.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// नया फ़ोल्डर होम स्क्रीन पर जोड़ना
function createNewFolder() {
  const input = document.getElementById('new-folder-name');
  const folderName = input.value.trim();

  if (!folderName) {
    alert("कृपया फ़ाइल या विषय का नाम लिखें!");
    return;
  }

  // डेटाबेस में नया विषय जोड़ें
  subjectsData[folderName] = [
    { num: 1, title: `${folderName} - हस्तलिखित नोट्स`, text: "यह आपकी फ़ाइल में सुरक्षित किया गया अध्याय है।" }
  ];

  // होम स्क्रीन पर नया कार्ड जोड़ें
  const list = document.getElementById('subjects-list');
  const btn = document.createElement('button');
  btn.className = 'subject-card card-custom';
  btn.onclick = () => showSubject(folderName);

  btn.innerHTML = `
    <span class="subj-icon">📁</span>
    <span class="subj-name">${folderName}</span>
    <span class="arrow-badge">➔</span>
  `;

  list.appendChild(btn);
  closeAddModal();
}
