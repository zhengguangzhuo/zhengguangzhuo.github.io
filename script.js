const translations = {
  zh: {
    meta: {
      title: 'zhengguangzhuo — AI 系统架构 · 智能体工程 · 开源',
      description: 'zhengguangzhuo——专注 AI 系统架构、智能体工程、语义与数据系统，以及工业智能应用。',
      ogTitle: 'zhengguangzhuo — AI 系统架构 · 智能体工程 · 开源',
      ogDescription: '把复杂业务，构造成可运行的智能系统。',
    },
    language: { toggle: '切换为英文' },
    accessibility: {
      skip: '跳到主要内容',
      top: '返回顶部',
      navigation: '主导航',
      capabilities: '核心能力',
      currentFocus: '当前关注',
      systemDiagram: '系统关系图',
      overview: '概览',
    },
    nav: { menu: '菜单', about: '关于我', systems: '系统', notes: '笔记', work: '项目', openSource: '开源', contact: '联系', github: 'GitHub' },
    hero: {
      kicker: 'zhengguangzhuo · AI Systems · Agent Engineering',
      eyebrowLead: 'AI 系统架构师',
      eyebrowTail: '智能体工程',
      titleLead: '把复杂业务，',
      titleAccent: '构造成可运行的智能系统。',
      text: '围绕模型、Agent、数据、知识、工具与业务流程，构建真正进入生产环境的 AI 系统。',
      explore: '查看项目',
      contact: '联系我',
      metaOne: 'AI Systems',
      metaTwo: 'Agents · Data · Ontology',
      panelLabel: 'SYSTEM VIEW',
      panelTitle: '让 AI 从能力展示，进入真实业务。',
      focusOne: '智能体工程',
      focusTwo: '语义与数据基础',
      focusThree: 'AI 系统工程',
      panelNote: '持续构建，持续验证。',
      diagramModel: 'AI Model',
      diagramKnowledge: 'Knowledge',
      diagramAgent: 'Agent',
      diagramTools: 'Tools',
      diagramOntology: 'Ontology',
      diagramData: 'Business Data',
      diagramSystem: 'Business System',
    },
    signal: { builds: '公开项目', aiData: 'AI + 数据', systems: '面向实际的系统', openSource: '开源', community: '共同改进' },
    engineering: {
      title: '从模型能力，到业务执行。',
      intro: '把模型、数据、知识、工具与业务流程组织成一个可执行、可治理、可持续演进的 AI 系统。',
      cardOneTitle: 'Agent Systems',
      cardOneText: '设计 Agent、Workflow、MCP、Tool Calling 与业务动作之间的执行链路。',
      cardTwoTitle: 'Semantic Systems',
      cardTwoText: '使用 Ontology、RDF、SHACL 和知识图谱建立统一业务语义层。',
      cardThreeTitle: 'AI Infrastructure',
      cardThreeText: '构建模型服务、推理网关、OCR 和 AI 服务运行基础设施。',
      cardFourTitle: 'Data Systems',
      cardFourText: '建设面向 AI 与业务系统的数据访问、流处理与分析能力.',
    },
    section: {
      positioningLabel: '一句话定位',
      engineeringLabel: 'Engineering at a Glance',
      aboutLabel: 'ABOUT',
      capabilitiesLabel: 'SYSTEM CAPABILITIES',
      workLabel: 'SELECTED WORK',
      openSourceLabel: 'OPEN SOURCE',
      contactLabel: '联系方式',
    },
    positioning: { text: '把模型、数据、知识、工具与业务流程组织成一个可执行、可治理、可持续演进的 AI 系统。' },
    about: {
      title: '我关注 AI 如何真正进入业务系统。',
      lead: '我专注于 AI 系统架构、智能体工程与工业智能应用。',
      text: '工作覆盖模型服务、Agent 工作流、MCP 工具、数据服务、知识与语义建模，以及 AI 与既有业务系统之间的集成。相比单点模型能力，我更关注如何建立清晰的系统边界、可靠的执行链路和可持续演进的工程体系。',
      note: '当前关注：AI Systems · Agent Engineering · Ontology · Industrial AI',
      contactLabel: '联系我',
    },
    capabilities: {
      title: '从系统架构，到智能执行。',
      cardOneTitle: 'AI 系统架构',
      cardOneText: '设计模型、数据、知识、工具与业务系统之间的协作边界，构建可扩展、可治理的 AI 系统架构。',
      cardOneTagOne: 'AI Platform',
      cardOneTagTwo: 'Model Service',
      cardOneTagThree: 'Integration',
      cardTwoTitle: '智能体与语义工程',
      cardTwoText: '围绕 Agent、MCP、Workflow 与 Ontology，将业务知识、数据关系和工具能力组织成可执行的智能任务链。',
      cardTwoTagOne: 'Agents',
      cardTwoTagTwo: 'MCP',
      cardTwoTagThree: 'Workflow',
      cardTwoTagFour: 'Ontology',
      cardThreeTitle: '工程化交付',
      cardThreeText: '通过 API、测试、部署、监控、版本治理与文档体系，让 AI 能力从原型进入稳定运行的生产环境。',
      cardThreeTagOne: 'API',
      cardThreeTagTwo: 'Test',
      cardThreeTagThree: 'Deployment',
      cardThreeTagFour: 'Governance',
      cardFourTitle: '数据工程',
      cardFourText: '建设面向 AI 与业务系统的数据访问、流处理与分析能力。',
      cardFourTagOne: 'Doris',
      cardFourTagTwo: 'Kafka',
      cardFourTagThree: 'Flink',
      cardFourTagFour: 'MinIO',
    },
    work: {
      title: '用真实系统验证技术判断。',
      intro: '从 AI 平台、智能体工具到数据可视化，持续将架构设计落实为可运行的软件。',
    },
    project: {
      mlText: '面向 AI 模型全生命周期的工程平台，覆盖数据集管理、标注、训练、评估与推理，采用 FastAPI + Vue 构建前后端能力。',
      mlFlow: 'Data → Train → Evaluate → Inference',
      dbTitle: 'Dify 数据库工具',
      dbText: '面向智能体数据访问场景的数据库工具，为 Dify Workflow / Agent 提供结构化数据查询与业务数据调用能力。',
      chartTitle: 'ECharts 生成器',
      chartText: '面向 AI 数据分析场景，将结构化结果转换为经过校验的 Apache ECharts 配置与可视化页面。',
    },
    tag: { aiPlatform: 'AI Platform', data: 'Database', visualization: 'Visualization' },
    open: {
      titleLead: '公开构建，',
      titleAccent: '持续演进。',
      text: '通过代码、文档、Issue、评审与工程实践参与开源，也将实际项目中验证过的方法沉淀为可复用的工具与能力。',
      link: '查看开源项目',
      projectOne: 'ML-Platform',
      projectTwo: 'Dify Database Tools',
      projectThree: 'ECharts Generator',
      profile: 'GitHub Profile',
    },
    closing: {
      title: '讨论系统，也讨论如何把它真正做出来。',
      text: '欢迎通过 Email 或 GitHub 联系我，交流 AI 系统架构、智能体工程、工业智能与开源项目。',
    },
    contact: { emailLabel: 'Email', githubLabel: 'GitHub' },
    footer: { copyright: '© 2026 zhengguangzhuo', tagline: 'AI Systems · Agent Engineering · Open Source', github: 'GitHub ↗', email: 'Email ↗', backToTop: '返回顶部' },
  },
  en: {
    meta: {
      title: 'zhengguangzhuo — AI Systems · Agent Engineering · Open Source',
      description: 'zhengguangzhuo — focused on AI systems architecture, agent engineering, and industrial intelligence.',
      ogTitle: 'zhengguangzhuo — AI Systems · Agent Engineering · Open Source',
      ogDescription: 'Turning complex business problems into runnable intelligent systems.',
    },
    language: { toggle: 'Switch to Chinese' },
    accessibility: {
      skip: 'Skip to content',
      top: 'Back to top',
      navigation: 'Primary navigation',
      capabilities: 'Core capabilities',
      currentFocus: 'Current focus',
      systemDiagram: 'System relationship diagram',
      overview: 'At a glance',
    },
    nav: { menu: 'Menu', about: 'About', systems: 'Systems', notes: 'Notes', work: 'Work', openSource: 'Open source', contact: 'Contact', github: 'GitHub' },
    hero: {
      kicker: 'zhengguangzhuo · AI Systems · Agent Engineering',
      eyebrowLead: 'AI systems architect',
      eyebrowTail: 'agent engineering',
      titleLead: 'Turning complex business into ',
      titleAccent: 'runnable intelligent systems.',
      text: 'I design complete systems across AI, agents, data, and business semantics—from model capabilities to business execution—so AI can enter production workflows.',
      explore: 'Explore projects',
      contact: 'Get in touch',
      metaOne: 'AI Systems',
      metaTwo: 'Agents · Data · Ontology',
      panelLabel: 'Current focus',
      panelTitle: 'Taking AI from capability demos into real business.',
      focusOne: 'Agent engineering',
      focusTwo: 'Semantic & data foundations',
      focusThree: 'AI systems engineering',
      panelNote: 'Build continuously. Validate continuously.',
      diagramModel: 'AI Model',
      diagramKnowledge: 'Knowledge',
      diagramAgent: 'Agent',
      diagramTools: 'Tools',
      diagramOntology: 'Ontology',
      diagramData: 'Business Data',
      diagramSystem: 'Business System',
    },
    signal: { builds: 'public builds', aiData: 'AI + data', systems: 'practical systems', openSource: 'Open source', community: 'improve together' },
    engineering: {
      title: 'From model capability to business execution.',
      intro: 'Organizing models, data, knowledge, tools, and business workflows into AI systems that are executable, governable, and built to evolve.',
      cardOneTitle: 'Agent Systems',
      cardOneText: 'Design execution paths across Agents, Workflows, MCP, Tool Calling, and business actions.',
      cardTwoTitle: 'Semantic Systems',
      cardTwoText: 'Build a unified business semantic layer with Ontology, RDF, SHACL, and knowledge graphs.',
      cardThreeTitle: 'AI Infrastructure',
      cardThreeText: 'Build the runtime foundation for model services, inference gateways, OCR, and AI services.',
      cardFourTitle: 'Data Systems',
      cardFourText: 'Build data access, stream processing, and analytics capabilities for AI and business systems.',
    },
    section: {
      positioningLabel: 'one-line positioning',
      engineeringLabel: 'Engineering at a Glance',
      aboutLabel: 'ABOUT',
      capabilitiesLabel: 'SYSTEM CAPABILITIES',
      workLabel: 'SELECTED WORK',
      openSourceLabel: 'OPEN SOURCE',
      contactLabel: 'contact',
    },
    positioning: { text: 'I organize models, data, knowledge, tools, and business workflows into AI systems that are executable, governable, and built to evolve.' },
    about: {
      title: 'I care about how AI actually enters business systems.',
      lead: 'I focus on AI systems architecture, agent engineering, and industrial intelligence.',
      text: 'My work spans model services, Agent workflows, MCP tools, data services, knowledge and semantic modeling, and the integration of AI with existing business systems. Beyond isolated model capability, I care about clear system boundaries, reliable execution paths, and engineering systems that can evolve.',
      note: 'Currently focused on: AI Systems · Agent Engineering · Ontology · Industrial AI',
      contactLabel: 'Get in touch',
    },
    capabilities: {
      title: 'From system architecture to intelligent execution.',
      cardOneTitle: 'AI systems architecture',
      cardOneText: 'Design collaboration boundaries across models, data, knowledge, tools, and business systems to build scalable, governable AI architectures.',
      cardOneTagOne: 'AI Platform',
      cardOneTagTwo: 'Model Service',
      cardOneTagThree: 'Integration',
      cardTwoTitle: 'Agents & semantic engineering',
      cardTwoText: 'Organize business knowledge, data relationships, and tool capabilities into executable task chains with Agents, MCP, Workflows, and Ontology.',
      cardTwoTagOne: 'Agents',
      cardTwoTagTwo: 'MCP',
      cardTwoTagThree: 'Workflow',
      cardTwoTagFour: 'Ontology',
      cardThreeTitle: 'Engineering delivery',
      cardThreeText: 'Use APIs, testing, deployment, monitoring, version governance, and documentation to move AI capabilities from prototypes into stable production environments.',
      cardThreeTagOne: 'API',
      cardThreeTagTwo: 'Test',
      cardThreeTagThree: 'Deployment',
      cardThreeTagFour: 'Governance',
      cardFourTitle: 'Data engineering',
      cardFourText: 'Build data access, stream processing, and analytics capabilities for AI and business systems.',
      cardFourTagOne: 'Doris',
      cardFourTagTwo: 'Kafka',
      cardFourTagThree: 'Flink',
      cardFourTagFour: 'MinIO',
    },
    work: {
      title: 'Validating technical judgment with real systems.',
      intro: 'From AI platforms and agent tools to data visualization, turning architecture decisions into runnable software.',
    },
    project: {
      mlText: 'An engineering platform for the AI model lifecycle, covering dataset management, annotation, training, evaluation, and inference with FastAPI + Vue.',
      mlFlow: 'Data → Train → Evaluate → Inference',
      dbTitle: 'Dify Database Tools',
      dbText: 'Database tools for agent data access, giving Dify Workflows and Agents structured queries and business data calling capabilities.',
      chartTitle: 'ECharts Generator',
      chartText: 'For AI data analysis, transforming structured results into validated Apache ECharts configurations and visualization pages.',
    },
    tag: { aiPlatform: 'AI Platform', data: 'Database', visualization: 'Visualization' },
    open: {
      titleLead: 'Build in public.',
      titleAccent: 'Keep evolving.',
      text: 'I contribute to open source through code, documentation, issues, reviews, and engineering practice—and turn methods validated in real projects into reusable tools and capabilities.',
      link: 'See open-source projects',
      projectOne: 'ML-Platform',
      projectTwo: 'Dify Database Tools',
      projectThree: 'ECharts Generator',
      profile: 'GitHub Profile',
    },
    closing: {
      title: 'Discuss the system—and how to actually build it.',
      text: 'Reach out by Email or GitHub to discuss AI systems architecture, agent engineering, industrial intelligence, or open-source projects.',
    },
    contact: { emailLabel: 'Email', githubLabel: 'GitHub' },
    footer: { copyright: '© 2026 zhengguangzhuo', tagline: 'AI Systems · Agent Engineering · Open Source', github: 'GitHub ↗', email: 'Email ↗', backToTop: 'Back to top' },
  },
};

const languageStorageKey = 'zhengguangzhuo-language';
const languageToggle = document.querySelector('[data-language-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('#primary-nav');

function getTranslation(language, key) {
  return key.split('.').reduce((value, part) => value?.[part], translations[language]);
}

function readLanguagePreference() {
  try {
    return window.localStorage.getItem(languageStorageKey) === 'en' ? 'en' : 'zh';
  } catch {
    return 'zh';
  }
}

function applyLanguage(language) {
  const selectedLanguage = language === 'en' ? 'en' : 'zh';
  const locale = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.language = selectedLanguage;
  document.title = locale.meta.title;

  document.querySelector('meta[name="description"]')?.setAttribute('content', locale.meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', locale.meta.ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', locale.meta.ogDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', selectedLanguage === 'zh' ? 'zh_CN' : 'en_US');
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', locale.meta.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', locale.meta.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translatedText = getTranslation(selectedLanguage, element.dataset.i18n);
    if (translatedText) element.textContent = translatedText;
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const translatedLabel = getTranslation(selectedLanguage, element.dataset.i18nAriaLabel);
    if (translatedLabel) element.setAttribute('aria-label', translatedLabel);
  });

  if (languageToggle) {
    languageToggle.querySelector('[data-language-label]').textContent = selectedLanguage === 'zh' ? 'EN' : '中文';
    languageToggle.setAttribute('aria-label', locale.language.toggle);
    languageToggle.setAttribute('aria-pressed', String(selectedLanguage === 'en'));
  }
}

function setMenuOpen(isOpen) {
  if (!menuToggle || !siteNav) return;
  siteNav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('[aria-hidden="true"]')?.replaceChildren(document.createTextNode(isOpen ? '−' : '+'));
}

menuToggle?.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

languageToggle?.addEventListener('click', () => {
  const nextLanguage = document.documentElement.dataset.language === 'zh' ? 'en' : 'zh';
  applyLanguage(nextLanguage);

  // 浏览器禁用存储时仍允许切换语言，只是不持久化用户偏好。
  try {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
  } catch {
    // 隐私模式下的存储失败不应影响页面内容切换。
  }
});

applyLanguage(readLanguagePreference());
