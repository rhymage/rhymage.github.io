(() => {
  const COMMON = {
    ko: {
      navAbout: "소개",
      navPrivacy: "개인정보처리방침",
      langLabel: "영어로 보기",
    },
    en: {
      navAbout: "About",
      navPrivacy: "Privacy Policy",
      langLabel: "View in Korean",
    },
  };

  const PAGES = {
    home: {
      ko: {
        title: "Rhymage Apps",
        description: "Rhymage의 웹앱, 플러그인, 스크립트, 확장 프로그램",
        navLabel: "주요 메뉴",
        intro: "웹앱, 플러그인, 스크립트와 확장 프로그램을 만들고 있습니다.",
        stockTitle: "단타 적성검사",
        stockDesc: "차트만 보고 확인하는 단타 감각",
        coinTitle: "코인선물 적성검사",
        coinDesc: "롱·숏 선택으로 확인하는 선물 감각",
        tashboardTitle: "Tashboard",
        tashboardDesc: "로컬 프로젝트, 링크, 폴더와 메모 대시보드",
        pinterDownloaderTitle: "PinterDownloader",
        pinterDownloaderDesc: "핀터레스트 이미지를 고화질로 한 번에 다운로드",
        renderToggleTitle: "Render Toggle",
        renderToggleDesc: "렌더링 옵션을 빠르게 전환하는 에디터 플러그인",
        outlinerHierarchyTitle: "Outliner Hierarchy Actions",
        outlinerHierarchyDesc: "하이어라키를 일괄 복제하고 삭제하는 플러그인",
        nullGroupTitle: "Null Group",
        nullGroupDesc: "Cinema 4D 스타일의 Null 그룹핑 플러그인",
        importFromTitle: "Import From",
        importFromDesc: "지정한 위치에서 바로 Import 창 열기",
        rhCharacterToolsTitle: "RH Character Tools",
        rhCharacterToolsDesc: "Mixamo 캐릭터 자동 컨트롤셋 툴 모음",
      },
      en: {
        title: "Rhymage Apps",
        description: "Web apps, plugins, scripts, and extensions by Rhymage",
        navLabel: "Main menu",
        intro: "Building small web apps, plugins, scripts, and extensions.",
        stockTitle: "Stock Day-Trading Test",
        stockDesc: "Test your trading instincts using charts alone",
        coinTitle: "Crypto Futures Test",
        coinDesc: "Test your futures instincts by choosing long or short",
        tashboardTitle: "Tashboard",
        tashboardDesc: "Dashboard for local projects, links, folders, and notes",
        pinterDownloaderTitle: "PinterDownloader",
        pinterDownloaderDesc: "Download Pinterest images in high quality at once",
        renderToggleTitle: "Render Toggle",
        renderToggleDesc: "Editor plugin for quickly toggling render options",
        outlinerHierarchyTitle: "Outliner Hierarchy Actions",
        outlinerHierarchyDesc: "Plugin for batch duplicating and deleting hierarchies",
        nullGroupTitle: "Null Group",
        nullGroupDesc: "Cinema 4D-style null grouping plugin",
        importFromTitle: "Import From",
        importFromDesc: "Open the Import dialog directly from a chosen location",
        rhCharacterToolsTitle: "RH Character Tools",
        rhCharacterToolsDesc: "Automatic Mixamo character control-set tools",
      },
    },
    about: {
      ko: {
        title: "서비스 소개 | Rhymage Apps",
        description: "Rhymage Apps 서비스와 웹게임을 소개합니다.",
        navLabel: "주요 메뉴",
        heading: "서비스 소개",
        lead: "브라우저에서 바로 즐길 수 있는 작고 재미있는 웹앱을 만듭니다.",
        stockTitle: "단타 적성검사",
        stockDesc: "실제 미국 주식의 과거 일봉 차트를 종목명을 모르는 상태에서 플레이하고, 바이앤홀드 대비 성적으로 단타 적성을 확인하는 모의 게임입니다.",
        stockLink: "주식단타 시작하기",
        coinTitle: "코인선물 적성검사",
        coinDesc: "실제 과거 코인 5분봉 차트에서 롱과 숏 포지션을 선택하며 선물 거래 감각과 위험 관리 성향을 확인하는 모의 게임입니다.",
        coinLink: "코인선물 시작하기",
        guideTitle: "이용 안내",
        guideDesc: "모든 서비스는 재미와 교육을 위한 모의 체험이며 투자 권유가 아닙니다. 과거 데이터와 게임 결과는 실제 투자 성과를 보장하지 않습니다.",
        contactTitle: "문의 및 피드백",
        contactDesc: '서비스 관련 문의와 오류 제보는 <a href="https://github.com/rhymage/rhymage.github.io/issues">GitHub Issues</a>를 이용해 주세요.',
      },
      en: {
        title: "About | Rhymage Apps",
        description: "Learn about Rhymage Apps and its browser games.",
        navLabel: "Main menu",
        heading: "About",
        lead: "We build small, playful web apps you can enjoy directly in your browser.",
        stockTitle: "Stock Day-Trading Test",
        stockDesc: "Trade a real historical U.S. stock chart without knowing the company, then compare your result with buy-and-hold to discover your day-trading aptitude.",
        stockLink: "Start Stock Test",
        coinTitle: "Crypto Futures Test",
        coinDesc: "Choose long and short positions on real historical 5-minute crypto charts to test your futures instincts and risk-management style.",
        coinLink: "Start Crypto Futures Test",
        guideTitle: "Important Notice",
        guideDesc: "All services are simulations made for entertainment and education, not investment advice. Historical data and game results do not guarantee real investment performance.",
        contactTitle: "Contact & Feedback",
        contactDesc: 'For questions and bug reports, please use <a href="https://github.com/rhymage/rhymage.github.io/issues">GitHub Issues</a>.',
      },
    },
    privacy: {
      ko: {
        title: "개인정보처리방침 | Rhymage Apps",
        description: "Rhymage Apps 개인정보처리방침",
        navLabel: "주요 메뉴",
        heading: "개인정보처리방침",
        effective: "시행일: 2026년 6월 11일",
        storageTitle: "서비스와 저장 정보",
        storageDesc: "Rhymage Apps는 별도의 회원가입 기능을 제공하지 않습니다. 게임 결과와 플레이 기록은 사용자의 브라우저 로컬 저장소에 저장될 수 있습니다.",
        analyticsTitle: "방문 통계 및 Google Analytics",
        analyticsDesc1: "서비스 개선과 이용 현황 파악을 위해 Google Analytics 4를 사용합니다. 페이지 조회, 게임 시작 및 완료, 획득 등급, 매매 횟수, 도전장 복사, 결과 카드 저장 등의 이용 이벤트와 기기·브라우저·대략적인 지역 정보가 Google에 전송될 수 있습니다. 이름, 이메일, 종목명 등 직접적인 개인 식별 정보는 분석 이벤트로 전송하지 않습니다.",
        analyticsDesc2: '사용자는 <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer">Google Analytics 차단 브라우저 부가기능</a>을 통해 데이터 수집을 제한할 수 있습니다.',
        adsTitle: "광고 및 쿠키",
        adsDesc: '이 사이트는 Google AdSense를 사용할 수 있습니다. Google을 포함한 제3자 광고 제공업체는 쿠키를 사용하여 사용자의 이전 웹사이트 방문 기록을 바탕으로 광고를 게재할 수 있습니다. 사용자는 <a href="https://adssettings.google.com/" rel="noopener noreferrer">Google 광고 설정</a>에서 맞춤 광고를 관리할 수 있습니다.',
        externalTitle: "외부 서비스",
        externalDesc: "서비스 운영을 위해 GitHub Pages, Google Analytics, Google AdSense, jsDelivr 및 Yahoo Finance 기반 데이터가 사용될 수 있으며, 각 서비스에는 해당 사업자의 개인정보처리방침이 적용됩니다.",
        manageTitle: "저장 정보 관리",
        manageDesc: "게임 기록은 브라우저의 로컬 저장소에 최대 50개까지 저장될 수 있습니다. 브라우저 데이터 삭제 기능으로 언제든 삭제할 수 있습니다.",
        contactTitle: "문의",
        contactDesc: '서비스 관련 문의는 <a href="https://github.com/rhymage/rhymage.github.io/issues">GitHub Issues</a>를 이용해 주세요.',
      },
      en: {
        title: "Privacy Policy | Rhymage Apps",
        description: "Privacy Policy for Rhymage Apps",
        navLabel: "Main menu",
        heading: "Privacy Policy",
        effective: "Effective date: June 11, 2026",
        storageTitle: "Service and Stored Information",
        storageDesc: "Rhymage Apps does not provide account registration. Game results and play history may be stored in your browser's local storage.",
        analyticsTitle: "Usage Analytics and Google Analytics",
        analyticsDesc1: "We use Google Analytics 4 to understand usage and improve our services. Events such as page views, game starts and completions, grades, trade counts, challenge-link copies, and result-card saves may be sent to Google together with device, browser, and approximate location information. We do not send directly identifying information such as names, email addresses, or traded asset names as analytics events.",
        analyticsDesc2: 'You can limit data collection with the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.',
        adsTitle: "Advertising and Cookies",
        adsDesc: 'This site may use Google AdSense. Third-party vendors, including Google, may use cookies to serve ads based on your previous visits to websites. You can manage personalized advertising in <a href="https://adssettings.google.com/" rel="noopener noreferrer">Google Ads Settings</a>.',
        externalTitle: "External Services",
        externalDesc: "GitHub Pages, Google Analytics, Google AdSense, jsDelivr, and Yahoo Finance-based data may be used to operate the services. Each provider's own privacy policy applies.",
        manageTitle: "Managing Stored Information",
        manageDesc: "Up to 50 game-history entries may be stored in your browser's local storage. You can remove them at any time by clearing browser data.",
        contactTitle: "Contact",
        contactDesc: 'For service-related questions, please use <a href="https://github.com/rhymage/rhymage.github.io/issues">GitHub Issues</a>.',
      },
    },
  };

  let locale = (() => {
    const saved = localStorage.getItem("lang");
    if (saved === "ko" || saved === "en") return saved;
    return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
  })();

  function applyLocale() {
    const page = document.body.dataset.page;
    const strings = { ...COMMON[locale], ...PAGES[page][locale] };
    document.documentElement.lang = locale;
    document.title = strings.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = strings.description;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (strings[el.dataset.i18n] !== undefined) el.textContent = strings[el.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      if (strings[el.dataset.i18nHtml] !== undefined) el.innerHTML = strings[el.dataset.i18nHtml];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      if (strings[el.dataset.i18nAria] !== undefined) el.setAttribute("aria-label", strings[el.dataset.i18nAria]);
    });
    const button = document.querySelector("#lang-toggle");
    button.textContent = locale === "ko" ? "EN" : "KO";
    button.setAttribute("aria-label", strings.langLabel);
  }

  document.querySelector("#lang-toggle").addEventListener("click", () => {
    locale = locale === "ko" ? "en" : "ko";
    localStorage.setItem("lang", locale);
    applyLocale();
  });
  applyLocale();
})();
