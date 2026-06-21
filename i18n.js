// ==================== i18n Translations ====================
const translations = {
  en: {
    // Topbar
    topbarCta: "Book a Call",
    // Hero
    heroBadge: "ZHUHAI · DUBAI · EST. 2026",
    heroTitle: 'Invest in China\'s<br><span class="gold">Most Promising</span> Ventures',
    heroSub: "Ant Capital connects discerning UAE angel investors with carefully selected, high-growth Chinese projects across F&B, education, STEAM, and smart retail — with real financial models, real teams, and real traction.",
    heroCta: "Explore Our Portfolio",
    heroCta2: "Schedule a Call",
    // Trust Bar
    trust1: "Headquartered in Zhuhai, China",
    trust2: "Angel-Stage Focus, ¥2M–15M Tickets",
    trust3: "NDA-Protected Deal Flow",
    trust4: "Arabic · English · Chinese",
    // Why
    whyTitle: "Why Invest Through Ant Capital?",
    whySub: "We don't pitch ideas. We present operational businesses with verified financials.",
    why1Title: "Real Financial Models",
    why1Desc: "Every project comes with a detailed feasibility report, unit economics, and verified revenue projections — not napkin math. We've already stress-tested the numbers.",
    why2Title: "On-the-Ground Operator",
    why2Desc: "Our founder is a hands-on operator based in Zhuhai, not a middleman in a Dubai office. You get direct access to deal sourcing, due diligence, and post-investment monitoring.",
    why3Title: "Cultural Bridge",
    why3Desc: "Bilingual, bicultural — fluent in both Arab and Chinese business etiquette. No lost-in-translation moments when it comes to term sheets and trust.",
    // Projects
    projTitle: "Angel Investment Portfolio",
    projSub: "Four operational businesses seeking angel capital. Detailed pitch decks available upon NDA.",
    statusOpen: "Open",
    tag1: "F&B · Restaurant Chain",
    tag2: "Education",
    tag3: "STEAM · EdTech",
    tag4: "Smart Retail",
    metricCapital: "Capital Required",
    metricReturn: "Key Return Metric",
    metricRisk: "Risk Level",
    riskMedium: "Medium",
    riskMedHigh: "Medium-High",
    riskLowMed: "Low-Medium",
    coopLabel: "Use of Funds:",
    projInquiry: "Request Full Pitch Deck →",
    // Project 1: 王妈妈
    proj1Logo: "🍜",
    proj1Name: "Wang Mama — Hunan Cuisine Chain",
    proj1OneLiner: "\"Small pot, small stir-fry\" — fast-casual Hunan chain with proven unit economics",
    proj1Desc: "Wang Mama is a fast-casual Hunan cuisine brand with two proven store formats: B-store (90㎡, 52 seats, ¥263K/mo revenue, ¥40K net profit, 17% margin, 12.4-mo payback, 96.7% annualized ROI) and C-store (50㎡, 30 seats + delivery, ¥103K/mo revenue, ¥36K net profit, 35.1% margin, 3.7-mo payback, 322.6% annualized ROI). Both formats have been validated with detailed feasibility reports, site selection scorecards, and ramp-up projections.",
    proj1Fund1: "8–12 New Stores",
    proj1Fund2: "Central Kitchen",
    proj1Fund3: "Franchise System",
    // Project 2: 英华
    proj2Logo: "🎓",
    proj2Name: "Yinghua International Education",
    proj2OneLiner: "Cambridge CIE / Oxford AQA / Edexcel / Cognia accredited — 9-year track record",
    proj2Desc: "Yinghua operates as a fully accredited international education platform with official exam center authorization from Cambridge CIE, Oxford AQA, Edexcel, AP, and Cognia. The 'Elite Off-Campus Program' enables partner institutions to offer international curriculum pathways under Yinghua's credentials. Revenue model: annual partner fees + ¥1,500/student/semester service fees + 8% tuition revenue share. Business model validated with V3.0 partner recruitment framework and detailed financial projections.",
    proj2Fund1: "Accreditation Expansion",
    proj2Fund2: "Partner Acquisition",
    proj2Fund3: "Digital Platform",
    // Project 3: STEAM
    proj3Logo: "🚁",
    proj3Name: "Drone + AI STEAM Education Program",
    proj3OneLiner: "Curriculum-as-a-Service — zero inventory, 80%+ gross margin, asset-light model",
    proj3Desc: "A turnkey STEAM curriculum program combining drone technology and AI education for K-12 schools. The OPC (One Person Company) model has been validated: founder-led demo-class sales achieve 20–40% school conversion. Zero hardware inventory (drop-shipping). 12-month OPC projection: 25+ schools, ¥500K+/month revenue, ¥1.56M cumulative surplus. Detailed 12-month execution roadmap, pricing strategy, and risk analysis available.",
    proj3Fund1: "Curriculum Team",
    proj3Fund2: "Sales Expansion",
    proj3Fund3: "SaaS Platform",
    // Project 4: 啤酒机
    proj4Logo: "🍺",
    proj4Name: "Craft Beer Smart Self-Serve Kiosk Network",
    proj4OneLiner: "Community unmanned craft beer retail — 41.4% CAGR market, IRR >60%",
    proj4Desc: "A community-deployed smart self-serve kiosk network for craft beer, riding China's 41.4% CAGR craft beer wave and unmanned retail infrastructure buildout. Triple revenue streams: equipment leasing, 10–15% sales commission, data monetization. At 50-kiosk scale: ¥84–132万 annual profit, >60% IRR, 14–18 month payback per unit. Full feasibility report includes sensitivity analysis, competitive landscape, veteran entrepreneur partnership model, and three-phase expansion roadmap.",
    proj4Fund1: "100 Kiosks",
    proj4Fund2: "Supply Chain",
    proj4Fund3: "Data Platform",
    projNote: "* All financial projections based on verified operational data and detailed feasibility reports. Full documentation available upon NDA signing. Past performance does not guarantee future results.",
    // Team
    teamTitle: "About the Founder",
    t1Name: "Wang Junma (王俊马)",
    t1Role: "Founder & Managing Partner, Ant Capital",
    t1Bio: "Entrepreneur and angel investor based in Zhuhai, China. Hands-on operator with a portfolio spanning F&B chain operations, international education, STEAM edtech, and smart retail. Fluent in English, Arabic, and Mandarin. Bridging UAE capital with China's most promising early-stage ventures through rigorous due diligence and operational involvement.",
    t1Tag1: "F&B Operations",
    t1Tag2: "EdTech",
    t1Tag3: "Cross-Border",
    t1Tag4: "Angel Investing",
    // Process
    processTitle: "How It Works",
    p1: "Introductory Call",
    p1d: "We understand your investment thesis, sector preferences, and ticket size expectations. 30 minutes, no commitment.",
    p2: "Deal Room Access",
    p2d: "After NDA signing, you receive full pitch decks, financial models, and feasibility reports for projects matching your criteria.",
    p3: "Due Diligence",
    p3d: "We arrange site visits, management interviews, and financial audits. You verify everything firsthand — we facilitate.",
    p4: "Close & Monitor",
    p4d: "From term sheet to capital deployment, we support the entire process. Post-investment, you receive quarterly operational reports.",
    // CTA
    ctaTitle: "Ready to Explore China's Best Deals?",
    ctaSub: "Direct access to the founder. No gatekeepers, no runaround.",
    whatsappBtn: "WhatsApp",
    telegramBtn: "Telegram",
    emailBtn: "ant.wang@qq.com",
    ctaNote: "🔒 All conversations are strictly confidential. NDA available upon request.",
    socialLabel: "Follow Ant Capital:",
    // Footer
    footerTagline: "Zhuhai · Dubai · Est. 2026",
    disclaimer: "This website does not constitute investment advice or an offer to sell securities. All investments involve risk. Past performance is not indicative of future results."
  },

  ar: {
    topbarCta: "احجز مكالمة",
    heroBadge: "تشوهاي · دبي · تأسست 2026",
    heroTitle: 'استثمر في<br><span class="gold">أفضل</span> مشاريع الصين',
    heroSub: "تربط Ant Capital المستثمرين الملائكيين الإماراتيين بمشاريع صينية عالية النمو مختارة بعناية عبر قطاعات المطاعم والتعليم والتكنولوجيا والتجزئة الذكية — بنماذج مالية حقيقية وفرق حقيقية ونتائج حقيقية.",
    heroCta: "تصفح محفظتنا",
    heroCta2: "احجز مكالمة",
    trust1: "المقر الرئيسي: تشوهاي، الصين",
    trust2: "تركيز على المرحلة الملائكية، 2–15 مليون يوان",
    trust3: "صفقات محمية باتفاقية السرية",
    trust4: "العربية · الإنجليزية · الصينية",
    whyTitle: "لماذا تستثمر عبر Ant Capital؟",
    whySub: "لا نعرض أفكاراً. نقدم شركات تشغيلية بأرقام مالية موثقة.",
    why1Title: "نماذج مالية حقيقية",
    why1Desc: "كل مشروع يأتي مع تقرير جدوى مفصل واقتصاديات الوحدة وتوقعات إيرادات مثبتة — وليس تقديرات عشوائية. لقد اختبرنا الأرقام بالفعل.",
    why2Title: "مشغل على الأرض",
    why2Desc: "مؤسسنا مشغّل عملي مقيم في تشوهاي، وليس وسيطاً في مكتب بدبي. تحصل على وصول مباشر لتدفق الصفقات والعناية الواجبة والمتابعة بعد الاستثمار.",
    why3Title: "جسر ثقافي",
    why3Desc: "ثنائي اللغة وثقافة — طليق في آداب الأعمال العربية والصينية. لا لحظات ضياع في الترجمة عندما يتعلق الأمر باتفاقيات الشروط والثقة.",
    projTitle: "محفظة الاستثمار الملائكي",
    projSub: "أربع شركات تشغيلية تبحث عن رأس مال ملائكي. ملفات تعريفية مفصلة متاحة بعد توقيع اتفاقية السرية.",
    statusOpen: "متاح",
    tag1: "مطاعم · سلسلة",
    tag2: "تعليم",
    tag3: "STEAM · تكنولوجيا تعليمية",
    tag4: "تجزئة ذكية",
    metricCapital: "رأس المال المطلوب",
    metricReturn: "مؤشر العائد الرئيسي",
    metricRisk: "مستوى المخاطر",
    riskMedium: "متوسط",
    riskMedHigh: "متوسط-مرتفع",
    riskLowMed: "منخفض-متوسط",
    coopLabel: "استخدام الأموال:",
    projInquiry: "اطلب الملف التعريفي الكامل ←",
    proj1Logo: "🍜",
    proj1Name: "وانغ ماما — سلسلة مطاعم هونان",
    proj1OneLiner: "\"طبق صغير، قلي سريع\" — سلسلة هونان بنموذج اقتصادي مثبت",
    proj1Desc: "وانغ ماما هي علامة تجارية لمطبخ هونان بنموذجين مثبتين: المتجر B (90م²، 52 مقعداً، إيرادات 263 ألف يوان/شهر، صافي ربح 40 ألف، هامش 17%، استرداد 12.4 شهراً، عائد سنوي 96.7%) والمتجر C (50م²، 30 مقعداً + توصيل، إيرادات 103 ألف يوان/شهر، صافي ربح 36 ألف، هامش 35.1%، استرداد 3.7 شهراً، عائد سنوي 322.6%). تم التحقق من كلا النموذجين بتقارير جدوى مفصلة وبطاقات تقييم المواقع.",
    proj1Fund1: "8–12 متجراً جديداً",
    proj1Fund2: "مطبخ مركزي",
    proj1Fund3: "نظام الامتياز",
    proj2Logo: "🎓",
    proj2Name: "ينغهوا للتعليم الدولي",
    proj2OneLiner: "معتمد من Cambridge CIE / Oxford AQA / Edexcel / Cognia — 9 سنوات خبرة",
    proj2Desc: "تعمل ينغهوا كمنصة تعليم دولي معتمدة بالكامل مع ترخيص مركز امتحانات رسمي من Cambridge CIE و Oxford AQA و Edexcel و AP و Cognia. يمكّن 'برنامج النخبة خارج الحرم' المؤسسات الشريكة من تقديم مسارات مناهج دولية تحت اعتماد ينغهوا. نموذج الإيرادات: رسوم سنوية للشركاء + 1,500 يوان/طالب/فصل دراسي + حصة 8% من رسوم الدراسة. تم التحقق من نموذج العمل بإطار شراكة V3.0.",
    proj2Fund1: "توسيع الاعتمادات",
    proj2Fund2: "اكتساب الشركاء",
    proj2Fund3: "منصة رقمية",
    proj3Logo: "🚁",
    proj3Name: "برنامج تعليم الطائرات بدون طيار والذكاء الاصطناعي STEAM",
    proj3OneLiner: "منهج كخدمة — بدون مخزون، هامش ربح 80%+، نموذج خفيف الأصول",
    proj3Desc: "برنامج منهج STEAM متكامل يجمع بين تكنولوجيا الطائرات بدون طيار وتعليم الذكاء الاصطناعي للمدارس. تم التحقق من نموذج OPC (شركة الشخص الواحد): مبيعات عبر الحصص التجريبية للمؤسس تحقق تحويل 20–40% للمدارس. بدون مخزون أجهزة. توقعات 12 شهراً: 25+ مدرسة، إيرادات 500 ألف+ يوان/شهر، فائض تراكمي 1.56 مليون يوان. خريطة طريق تنفيذية مفصلة متاحة.",
    proj3Fund1: "فريق المناهج",
    proj3Fund2: "توسيع المبيعات",
    proj3Fund3: "منصة SaaS",
    proj4Logo: "🍺",
    proj4Name: "شبكة أكشاك البيرة الحرفية الذكية ذاتية الخدمة",
    proj4OneLiner: "تجارة بيرة حرفية مجتمعية بدون موظفين — سوق بنمو 41.4% سنوياً، عائد >60%",
    proj4Desc: "شبكة أكشاك ذكية ذاتية الخدمة للبيرة الحرفية في المجتمعات، مستفيدة من نمو سوق البيرة الحرفية بنسبة 41.4% سنوياً وبنية التجزئة بدون موظفين. ثلاث قنوات إيرادات: تأجير المعدات، عمولة مبيعات 10–15%، تحقيق الدخل من البيانات. على نطاق 50 كشكاً: ربح سنوي 84–132万 يوان، عائد >60%، استرداد 14–18 شهراً لكل وحدة. يتضمن التقرير تحليل الحساسية والمشهد التنافسي.",
    proj4Fund1: "100 كشك",
    proj4Fund2: "سلسلة التوريد",
    proj4Fund3: "منصة البيانات",
    projNote: "* جميع التوقعات المالية مبنية على بيانات تشغيلية مثبتة وتقارير جدوى مفصلة. الوثائق الكاملة متاحة بعد توقيع اتفاقية السرية. الأداء السابق لا يضمن النتائج المستقبلية.",
    teamTitle: "عن المؤسس",
    t1Name: "وانغ جونما (王俊马)",
    t1Role: "المؤسس والشريك الإداري، Ant Capital",
    t1Bio: "رائد أعمال ومستثمر ملائكي مقيم في تشوهاي، الصين. مشغّل عملي بمحفظة تغطي عمليات سلاسل المطاعم والتعليم الدولي وتكنولوجيا التعليم STEAM والتجزئة الذكية. يتحدث الإنجليزية والعربية والصينية بطلاقة. يربط رأس المال الإماراتي بأفضل المشاريع الصينية في المراحل المبكرة.",
    t1Tag1: "عمليات المطاعم",
    t1Tag2: "تكنولوجيا التعليم",
    t1Tag3: "عبر الحدود",
    t1Tag4: "استثمار ملائكي",
    processTitle: "كيف نعمل",
    p1: "مكالمة تمهيدية",
    p1d: "نفهم أطروحتك الاستثمارية وتفضيلاتك القطاعية وحجم التذكرة المتوقع. 30 دقيقة، بدون التزام.",
    p2: "الوصول لغرفة الصفقات",
    p2d: "بعد توقيع اتفاقية السرية، تستلم ملفات تعريفية كاملة ونماذج مالية وتقارير جدوى للمشاريع المطابقة لمعاييرك.",
    p3: "العناية الواجبة",
    p3d: "نرتب زيارات ميدانية ومقابلات إدارية ومراجعات مالية. تتحقق من كل شيء بنفسك — ونحن نسهل ذلك.",
    p4: "الإغلاق والمتابعة",
    p4d: "من اتفاقية الشروط إلى نشر رأس المال، ندعم العملية بأكملها. بعد الاستثمار، تتلقى تقارير تشغيلية ربع سنوية.",
    ctaTitle: "مستعد لاكتشاف أفضل صفقات الصين؟",
    ctaSub: "وصول مباشر للمؤسس. بدون حراس بوابات، بدون مراوغة.",
    whatsappBtn: "واتساب",
    telegramBtn: "تيليجرام",
    emailBtn: "ant.wang@qq.com",
    ctaNote: "🔒 جميع المحادثات سرية للغاية. اتفاقية عدم الإفصاح متاحة عند الطلب.",
    socialLabel: "تابع Ant Capital:",
    footerTagline: "تشوهاي · دبي · تأسست 2026",
    disclaimer: "هذا الموقع لا يشكل نصيحة استثمارية أو عرضاً لبيع أوراق مالية. جميع الاستثمارات تنطوي على مخاطر. الأداء السابق لا يضمن النتائج المستقبلية."
  },

  zh: {
    topbarCta: "预约通话",
    heroBadge: "珠海 · 迪拜 · 创立于 2026",
    heroTitle: '投资中国<br><span class="gold">最具潜力</span>的项目',
    heroSub: "蚂蚁资本连接阿联酋天使投资人与中国精选高成长项目，覆盖餐饮连锁、国际教育、STEAM科创、智能零售四大赛道——真实财务模型、真实运营团队、真实增长数据。",
    heroCta: "查看投资项目",
    heroCta2: "预约咨询",
    trust1: "总部位于中国珠海",
    trust2: "专注天使轮，¥200–1500万区间",
    trust3: "NDA 保密协议保障",
    trust4: "阿拉伯语 · 英语 · 中文",
    whyTitle: "为什么通过蚂蚁资本投资？",
    whySub: "我们不卖概念，只呈现有真实财务数据的运营项目。",
    why1Title: "真实财务模型",
    why1Desc: "每个项目附带详细的可行性报告、单位经济模型和已验证的收入预测——不是纸上谈兵。我们已对数据做过压力测试。",
    why2Title: "一线操盘手",
    why2Desc: "创始人亲自在珠海运营，不是迪拜办公室里的中间人。你直接接触到项目来源、尽职调查和投后管理。",
    why3Title: "文化桥梁",
    why3Desc: "双语双文化——精通阿拉伯和中国商业礼仪。谈条款、谈信任，不存在翻译偏差。",
    projTitle: "天使投资项目组合",
    projSub: "四个运营中的项目寻求天使轮融资。签署保密协议后可获取完整商业计划书。",
    statusOpen: "开放中",
    tag1: "餐饮 · 连锁",
    tag2: "教育",
    tag3: "STEAM · 教育科技",
    tag4: "智能零售",
    metricCapital: "融资金额",
    metricReturn: "核心回报指标",
    metricRisk: "风险等级",
    riskMedium: "中等",
    riskMedHigh: "中高",
    riskLowMed: "中低",
    coopLabel: "资金用途：",
    projInquiry: "← 索取完整商业计划书",
    proj1Logo: "🍜",
    proj1Name: "王妈妈 — 湘菜连锁品牌",
    proj1OneLiner: "「小锅小炒」——快时尚湘菜连锁，已验证单店盈利模型",
    proj1Desc: "王妈妈是快时尚湘菜品牌，拥有两种已验证门店模型：B店（90㎡、52座、月营收26.3万、月净利4万、净利率17%、回本期12.4月、年化ROI 96.7%）和C店（50㎡、30座+外卖、月营收10.3万、月净利3.6万、净利率35.1%、回本期3.7月、年化ROI 322.6%）。两种模型均已通过详细的可行性报告、选址评分卡和爬坡预测验证。",
    proj1Fund1: "8–12家新店",
    proj1Fund2: "中央厨房",
    proj1Fund3: "加盟体系",
    proj2Logo: "🎓",
    proj2Name: "英华国际教育",
    proj2OneLiner: "剑桥CIE / 牛津AQA / 爱德思 / Cognia 全认证 — 9年行业积淀",
    proj2Desc: "英华国际教育拥有剑桥CIE、牛津AQA、爱德思Edexcel、AP、Cognia等全套国际考试官方考点授权。通过「校外精英项目」使合作机构可在英华资质下开展国际课程。收入模型：年度合作费 + ¥1,500/生/学期服务费 + 8%学费分成。商业模式已通过V3.0渠道合作框架验证，含详细财务测算。",
    proj2Fund1: "资质拓展",
    proj2Fund2: "渠道获客",
    proj2Fund3: "数字平台",
    proj3Logo: "🚁",
    proj3Name: "无人机+AI STEAM 教育项目",
    proj3OneLiner: "课程即服务——零库存、80%+毛利率、纯轻资产模式",
    proj3Desc: "面向K-12学校的无人机+AI STEAM课程解决方案。OPC（单人公司）模式已验证：创始人示范课驱动销售，学校转化率20–40%。硬件零库存（一件代发模式）。12个月OPC预测：25+签约学校、月营收50万+、累计盈余156万。附带完整的12个月执行路线图、定价策略和风险分析。",
    proj3Fund1: "课程团队",
    proj3Fund2: "销售扩张",
    proj3Fund3: "SaaS平台",
    proj4Logo: "🍺",
    proj4Name: "精酿啤酒智能自助机社区网络",
    proj4OneLiner: "社区无人精酿零售——41.4%年复合增长赛道，IRR >60%",
    proj4Desc: "精酿啤酒社区智能自助机网络，乘中国精酿啤酒41.4%年复合增长率和无人零售基建浪潮。三重收入：设备租赁、销售抽成10–15%、数据变现。50台规模：年净利84–132万、IRR>60%、单台回本14–18月。完整可行性报告包含敏感性分析、竞争格局、退伍军人合伙人模式和三阶段扩张路线图。",
    proj4Fund1: "100台设备",
    proj4Fund2: "供应链",
    proj4Fund3: "数据平台",
    projNote: "* 所有财务预测均基于已验真的运营数据和详细可行性报告。完整文档在签署NDA后提供。过往业绩不代表未来收益。",
    teamTitle: "创始人介绍",
    t1Name: "王俊马（Wang Junma）",
    t1Role: "创始人 & 管理合伙人，蚂蚁资本",
    t1Bio: "创业者、天使投资人，常驻中国珠海。一线操盘手，投资组合覆盖餐饮连锁运营、国际教育、STEAM教育科技和智能零售。精通英文、阿拉伯文和中文。通过严格的尽职调查和深度运营参与，连接阿联酋资本与中国最具潜力的早期项目。",
    t1Tag1: "餐饮运营",
    t1Tag2: "教育科技",
    t1Tag3: "跨境投资",
    t1Tag4: "天使投资",
    processTitle: "合作流程",
    p1: "初步沟通",
    p1d: "我们了解你的投资逻辑、行业偏好和投资额度预期。30分钟，无需承诺。",
    p2: "项目资料库",
    p2d: "签署保密协议后，你将收到符合标准的项目的完整商业计划书、财务模型和可行性报告。",
    p3: "尽职调查",
    p3d: "我们安排实地考察、管理层访谈和财务审计。你亲自验证一切——我们协助推进。",
    p4: "投资交割与投后",
    p4d: "从投资条款到资金到位，我们全程支持。投资后，你每季度收到运营报告。",
    ctaTitle: "准备好探索中国最好的投资机会了吗？",
    ctaSub: "直接对接创始人，没有中间人，没有绕弯子。",
    whatsappBtn: "WhatsApp",
    telegramBtn: "Telegram",
    emailBtn: "ant.wang@qq.com",
    ctaNote: "🔒 所有沟通严格保密。可根据要求签署保密协议（NDA）。",
    socialLabel: "关注蚂蚁资本：",
    footerTagline: "珠海 · 迪拜 · 创立于 2026",
    disclaimer: "本网站不构成投资建议或证券销售要约。所有投资均有风险。过往业绩不代表未来收益。"
  }
};

// ==================== Language Switcher ====================
let currentLang = localStorage.getItem('ant-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ant-lang', lang);

  const html = document.documentElement;
  const body = document.body;

  html.lang = lang;
  body.setAttribute('lang', lang);

  if (lang === 'ar') {
    html.dir = 'rtl';
    body.style.direction = 'rtl';
  } else {
    html.dir = 'ltr';
    body.style.direction = 'ltr';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  if (lang === 'ar') {
    body.style.fontFamily = "'Noto Sans Arabic', sans-serif";
  } else if (lang === 'zh') {
    body.style.fontFamily = "'Noto Sans SC', sans-serif";
  } else {
    body.style.fontFamily = "'Inter', sans-serif";
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
