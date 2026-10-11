const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const translations = {
  zh: {
    title: '周方璟 · 个人主页', name: '周方璟',
    description: '周方璟，哈尔滨工业大学（深圳）计算机科学与技术专业大二学生。个人项目、随笔与日常。',
    skip: '跳到主要内容', homeLabel: '周方璟 首页', navLabel: '主导航',
    navAbout: '关于', navProjects: '项目', navEssays: '随笔', navContact: '联系',
    hello: '你好，我是', university: '哈尔滨工业大学（深圳）', degree: '计算机科学与技术 · 大二',
    eyebrow: '我的个人空间',
    artLineOne: 'the best people', artLineTwo: 'in life are free.',
    viewProjects: '看看我的项目', artLabel: '由橙色圆形、轨道、字母 FZ 和数字 24 组成的抽象个人标识',
    explore: '向下探索', aboutTitle: '关于我',
    aboutIndex: '01 / 关于', projectsIndex: '02 / 项目', essaysSectionIndex: '03 / 随笔', contactIndex: '04 / 联系',
    bioIntro: '你好，我是周方璟，在哈工大（深圳）读计算机，现在大二。',
    bioSite: '做过的项目和想留下的文字，我会慢慢整理到这里。',
    bioStudy: '最近在学：数字逻辑设计、机器学习（ML）、离散数学、概率论、大学物理等。',
    bioHobbies: '课余喜欢足球、唱歌和听歌。常听 Taylor Swift、Ed Sheeran 和 The Weeknd。',
    educationTitle: '教育经历', schoolShenzhen: '深圳中学', educationUniversityDates: '2025.9–2029.6（预计）',
    updating: '持续更新中', projectsTitle: '一些正在做的事', allRepos: '全部仓库',
    notesVisual: '学习 / 资料整理', notesCover: '课程讲义', notesArtwork: '哈工深 · 自建讲义库',
    notesCategory: '学习资料', notesTitle: '哈工深讲义库', notesDescription: '课程讲义的整理与积累。',
    painterVisual: '创意 / 人工智能工具', painterCoverOne: '一点', painterCoverTwo: '想象力。',
    painterCategory: '创意工具', painterDescription: '将图片改画为水粉画风格的 Codex 技能。',
    essaysIndex: '生活 · 音乐 · 随想', essaysTitle: '随笔集',
    essaysIntro: '关于生活、音乐，以及偶尔想留下的感受。',
    essaysEmpty: '第一篇，慢慢写。', essaysHint: '还没有公开的随笔，写好了就放在这里。',
    emailLabel: '邮箱', wechatLabel: '微信', contactDetails: '联系方式', contactEyebrow: '很高兴认识你。', contactTitle: '保持联系', findGithub: '在 GitHub 上找到我',
    followMe: '关注我', socialLabel: '社交媒体', rednote: '小红书', bilibili: '哔哩哔哩', pending: '待补充',
    pendingRednote: '小红书链接待补充', pendingBilibili: 'bilibili 链接待补充', linkedinLabel: '在 LinkedIn 上关注我',
    zhihuLabel: '在知乎上关注我', rednoteLabel: '在小红书上关注我', githubLabel: '在 GitHub 上关注我', sponsorTitle: '支持我的学习与创作',
    sponsorDescription: '随心支持', sponsorPending: '赞助二维码待补充',
    footerNote: '慢慢积累，常常更新。', backTop: '回到顶部',
    themeDark: '切换到深色模式', themeLight: '切换到浅色模式'
  },
  en: {
    title: 'Felixzhou · Personal Website', name: 'Felixzhou',
    description: 'Felixzhou, a second-year Computer Science and Technology student at Harbin Institute of Technology, Shenzhen. Projects, essays, and everyday life.',
    skip: 'Skip to content', homeLabel: 'Felixzhou home', navLabel: 'Main navigation',
    navAbout: 'About', navProjects: 'Projects', navEssays: 'Essays', navContact: 'Contact',
    hello: "Hi, I'm", university: 'Harbin Institute of Technology, Shenzhen', degree: 'Computer Science and Technology · Year 2',
    eyebrow: 'A LITTLE SPACE ON THE INTERNET',
    artLineOne: 'the best people', artLineTwo: 'in life are free.',
    viewProjects: 'Explore my projects', artLabel: 'An abstract FZ monogram with the number 24, an orange circle, and orbital lines',
    explore: 'Scroll to explore', aboutTitle: 'About me',
    aboutIndex: '01 / ABOUT', projectsIndex: '02 / SELECTED PROJECTS', essaysSectionIndex: '03 / ESSAYS', contactIndex: '04 / SAY HELLO',
    bioIntro: "Hi, I'm Felixzhou. I'm in my second year studying computer science at HIT Shenzhen.",
    bioSite: "I'll use this space to share what I make and write down the things I want to remember.",
    bioStudy: 'Currently studying: Digital Logic Design, Machine Learning (ML), Discrete Mathematics, Probability Theory, University Physics, and more.',
    bioHobbies: 'Outside of class, I enjoy football, singing, and listening to music. Taylor Swift, Ed Sheeran, and The Weeknd are often on my playlist.',
    educationTitle: 'Education', schoolShenzhen: 'Shenzhen Middle School', educationUniversityDates: '2025.9–2029.6 (expected)',
    updating: 'A work in progress', projectsTitle: "Things I'm working on", allRepos: 'All repositories',
    notesVisual: 'LEARNING / DOCUMENTATION', notesCover: 'LECTURE NOTES', notesArtwork: 'HITSZ · Lecture notes',
    notesCategory: 'Learning resources', notesTitle: 'HITSZ Lecture Notes', notesDescription: 'A growing collection of course lecture notes.',
    painterVisual: 'CREATIVE / AI TOOLS', painterCoverOne: 'a little', painterCoverTwo: 'imagination.',
    painterCategory: 'Creative tools', painterDescription: 'A Codex skill that repaints images in a gouache style.',
    essaysIndex: 'Life · Music · Reflections', essaysTitle: 'Essays',
    essaysIntro: 'Thoughts on life, music, and moments I want to remember.',
    essaysEmpty: 'Taking my time with the first one.', essaysHint: 'No published essays yet. They will appear here when ready.',
    emailLabel: 'Email', wechatLabel: 'WeChat', contactDetails: 'Contact details', contactEyebrow: 'Nice to meet you.', contactTitle: 'Keep in touch', findGithub: 'Find me on GitHub',
    followMe: 'Follow me', socialLabel: 'Social media', rednote: 'Xiaohongshu', bilibili: 'bilibili', pending: 'Coming soon',
    pendingRednote: 'Xiaohongshu link coming soon', pendingBilibili: 'bilibili link coming soon', linkedinLabel: 'Follow me on LinkedIn',
    zhihuLabel: 'Follow me on Zhihu', rednoteLabel: 'Follow me on Xiaohongshu', githubLabel: 'Follow me on GitHub', sponsorTitle: 'Support my learning and creative work',
    sponsorDescription: 'Sponsor', sponsorPending: 'Sponsor QR code coming soon',
    footerNote: 'A little at a time, with more to come.', backTop: 'Back to top',
    themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode'
  }
};

function readPreference(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch (_) {}
}
let language = readPreference('fz-language') === 'en' ? 'en' : 'zh';
function updateThemeLabel() {
  const label = translations[language][root.dataset.theme === 'dark' ? 'themeLight' : 'themeDark'];
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
}
function setTheme(theme) {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#20231e' : '#f5f4ee';
  updateThemeLabel();
}
function setLanguage(next) {
  language = next;
  const copy = translations[language];
  root.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-label]').forEach(element => {
    const label = copy[element.dataset.i18nLabel];
    element.setAttribute('aria-label', label);
    if (element.classList.contains('social-icon')) element.title = label;
  });
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  languageToggle.textContent = language === 'zh' ? 'English' : '中文';
  languageToggle.lang = language === 'zh' ? 'en' : 'zh-CN';
  languageToggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  updateThemeLabel();
}
const savedTheme = readPreference('fz-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme);
setLanguage(language);
themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  savePreference('fz-theme', next);
});
languageToggle.addEventListener('click', () => {
  const next = language === 'zh' ? 'en' : 'zh';
  setLanguage(next);
  savePreference('fz-language', next);
});
document.getElementById('year').textContent = new Date().getFullYear();
