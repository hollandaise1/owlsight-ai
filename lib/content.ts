export type Lang = "en" | "zh";

export interface PillarContent {
  num: string;
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  personas: string[];
}

export interface WhoCell {
  tag: string;
  title: string;
  desc: string;
}

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export interface DiffCard {
  kicker: string;
  title: string;
  desc: string;
}

export interface SiteContent {
  nav: {
    services: string;
    approach: string;
    about: string;
    cta: string;
    tooltip: string;
    descriptor: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    desc: string;
    primaryCta: string;
    ghostCta: string;
    stats: { val: string; label: string }[];
  };
  ticker: string[];
  pillars: {
    label: string;
    heading: string;
    intro: string;
    items: PillarContent[];
    buyersLabel: string;
  };
  who: {
    label: string;
    heading: string;
    intro: string;
    cells: WhoCell[];
  };
  approach: {
    label: string;
    heading: string;
    intro: string;
    steps: Step[];
    whyLabel: string;
    whyTagline: string;
    whyPoints: string[];
  };
  diff: {
    label: string;
    heading: string;
    intro: string;
    cards: DiffCard[];
  };
  cta: {
    label: string;
    heading1: string;
    headingEm: string;
    headingSuffix: string;
    desc: string;
    primaryCta: string;
    ghostCta: string;
    footnote: string;
  };
  footer: {
    copyright: string;
  };
}

export const en: SiteContent = {
  nav: {
    services: "services",
    approach: "approach",
    about: "about",
    cta: "Book a Call →",
    tooltip: "Complimentary · no pitch · 30 min",
    descriptor: "AI-Native Analytics Advisory",
  },
  hero: {
    eyebrow: "AI-Native Analytics Advisory",
    line1: "VC-grade.",
    line2: "AI-native.",
    line3: "Executive",
    line4: "operating",
    line5: "model.",
    desc: "Senior analytics and AI leadership — embedded in your team. VC & portfolio support · AI Agent Observability · Marketing Attribution & CLV · Segmentation & A/B Testing · Executive Operating Model.",
    primaryCta: "Book a Call →",
    ghostCta: "See the four pillars →",
    stats: [
      { val: "AWS", label: "Certified practitioner" },
      { val: "Big 4", label: "Consulting rigour" },
      { val: "4", label: "Service pillars" },
      { val: "C-suite", label: "Practitioner, not a pitch team" },
    ],
  },
  ticker: [
    "AI-Native Analytics Advisory",
    "VC-Grade Analytics",
    "AI Agent Observability",
    "Marketing Attribution",
    "Customer Lifetime Value",
    "Segmentation Predictions",
    "A/B Testing",
    "GTM Measurement Science",
    "Incrementality Modeling",
    "Executive Operating Model",
    "WBR / MBR Systems",
    "VC Portfolio Support",
  ],
  pillars: {
    label: "Four pillars",
    heading: "What OwlSight AI\nactually delivers.",
    intro: "Four intelligence pillars — each mapped to a specific buyer and business question. Pick the one that fits your problem today.",
    buyersLabel: "Best-fit buyers",
    items: [
      {
        num: "01",
        tag: "Investor-ready",
        title: "VC-Grade Analytics",
        desc: "Fundraising metrics, board-ready dashboards, and investor narrative built from your data. KPI storytelling, deck-ready charts, and the unit economics your next round will demand — structured before the data room opens.",
        chips: ["fundraising metrics", "board dashboards", "investor narrative", "KPI storytelling", "deck-ready charts", "VC portfolio support"],
        personas: ["Founder / CEO", "COO / Chief of Staff", "VP Finance / Fractional CFO", "VC portfolio support"],
      },
      {
        num: "02",
        tag: "AI-native",
        title: "AI Observability & Analytics",
        desc: "Measure your AI products the way sophisticated buyers expect. Agent quality, AI product usage, cost and latency tracking, hallucination and failure monitoring — and AI ROI dashboards that turn model performance into a business story.",
        chips: ["AI product usage", "agent quality", "cost & latency", "hallucination tracking", "failure monitoring", "AI ROI dashboards"],
        personas: ["AI startup founder", "Head of Product / AI PM", "CTO", "ML / AI Engineering Lead"],
      },
      {
        num: "03",
        tag: "GTM measurement science",
        title: "GTM Measurement Science",
        desc: "Marketing attribution, GTM strategy, causal and incrementality modeling, A/B test design, and ROI analysis — grounded in science, not correlation. Know which channels, campaigns, and segments actually drive revenue, customer lifetime value, and sustainable growth.",
        chips: ["marketing attribution", "customer LTV", "segmentation predictions", "incrementality modeling", "A/B test design", "GTM strategy", "ROI analysis"],
        personas: ["Head of Growth / VP Marketing", "CRO / RevOps Lead", "Product Growth Lead", "CFO"],
      },
      {
        num: "04",
        tag: "Operational excellence",
        title: "Executive Operating Model",
        desc: "WBR/MBR systems, operating plan metrics, metric definitions, KPI ownership, and executive business reviews — the data-driven operating discipline that the world's best-run companies are built on, applied to your org at your scale.",
        chips: ["WBR / MBR systems", "operating plan metrics", "metric definitions", "KPI ownership", "executive business reviews", "Big Four-grade deliverables"],
        personas: ["COO / CEO", "Chief of Staff / BizOps Lead", "Strategy & Ops Lead", "VP Product"],
      },
    ],
  },
  who: {
    label: "Who we work with",
    heading: "Built for operators\nwho move fast.",
    intro: "OwlSight AI works with growth-stage startups and VC portfolios that need senior analytics intelligence — delivered without the enterprise price tag or agency overhead.",
    cells: [
      {
        tag: "Founders & executives",
        title: "You're growing fast and your reporting hasn't kept up.",
        desc: "Metrics live in Notion, boards ask questions you can't answer, and the next raise is coming. You need the intelligence layer built properly — now.",
      },
      {
        tag: "AI product teams",
        title: "You're shipping AI features but can't measure them like a business.",
        desc: "You can build models. You can't yet show investors or enterprise buyers that they work. That's the gap OwlSight closes.",
      },
      {
        tag: "Growth & revenue leaders",
        title: "You're spending across channels with no attribution confidence.",
        desc: "Campaigns running, results visible — but no causal clarity on what's driving them. We build the measurement science, not more dashboards.",
      },
      {
        tag: "Ops & strategy leaders",
        title: "Running a company without a shared definition of what's working.",
        desc: "No WBR cadence, no KPI ownership, no single source of truth. We build the operating intelligence layer that lets your leadership team make fast, aligned decisions.",
      },
    ],
  },
  approach: {
    label: "The approach",
    heading: "How OwlSight\nworks with you.",
    intro: "No bloated discovery. No 40-page proposals. Embedded, async-first, and built around outcomes — not hours.",
    steps: [
      {
        n: "01",
        title: "Free architecture review & diagnostic",
        desc: "A structured look at your data stack, intelligence gaps, and what's worth fixing first. I tell you honestly whether OwlSight is the right fit — no pitch, no pressure.",
      },
      {
        n: "02",
        title: "One-page scope in 48 hours",
        desc: "Clear deliverables, clear timeline. You decide in your own time — no chasing, no manufactured urgency.",
      },
      {
        n: "03",
        title: "A tangible win in week one",
        desc: "By end of week one, you'll have something real — a KPI framework, a live dashboard, or complete clarity on the path forward.",
      },
      {
        n: "04",
        title: "Async-first, always on",
        desc: "Slack, Loom, Notion. I move the way your team already moves — embedded in your rhythm, not added to your overhead.",
      },
    ],
    whyLabel: "Why OwlSight AI",
    whyTagline: "The owl sees what others miss.",
    whyPoints: [
      "AWS-certified with executive BI background built inside one of the world's largest e-commerce environments",
      "Big Four-grade consulting deliverables — structured, presentation-ready, and built to survive scrutiny from investors, boards, and enterprise buyers",
      "Real causal inference and incrementality modeling — not just dashboards that describe the past",
      "AI observability experience baked in — built for the companies shipping LLM features in production",
      "Startup operating cadence — async by default, no bureaucracy, no account managers, just outcomes",
    ],
  },
  diff: {
    label: "Advisory, not an agency",
    heading: "An advisory firm,\nnot an agency.",
    intro: "Senior enough to set strategy. Technical enough to build it. Fast enough to move at startup speed — without the overhead.",
    cards: [
      {
        kicker: "// direct access",
        title: "You work with one senior person. Always.",
        desc: "No account managers. No juniors. Every deliverable comes from the same brain that scoped the engagement — and that's rare in this market.",
      },
      {
        kicker: "// causal, not correlational",
        title: "We measure what caused it — not just what happened.",
        desc: "Incrementality testing, causal inference, and rigorous A/B design. Most analytics describes the past. OwlSight explains it.",
      },
      {
        kicker: "// ai baked in",
        title: "AI observability isn't an add-on. It's core.",
        desc: "Agent quality, cost, hallucination tracking, and AI ROI dashboards are embedded in every AI engagement — not bolted on as a premium tier.",
      },
    ],
  },
  cta: {
    label: "Ready to see clearly",
    heading1: "Your data should be your",
    headingEm: "sharpest",
    headingSuffix: " competitive edge.",
    desc: "Book a complimentary call — no pitch, no agenda. Happy to dive deep on your data problem, upcoming deadlines, or wherever you're most stuck right now.",
    primaryCta: "Book a Call →",
    ghostCta: "Review the four pillars →",
    footnote: "Complimentary · No obligation · Responds within 24 hours",
  },
  footer: {
    copyright: "© 2026 OwlSight AI · All rights reserved",
  },
};

export const zh: SiteContent = {
  nav: {
    services: "服务",
    approach: "方法论",
    about: "关于",
    cta: "预约通话 →",
    tooltip: "免费通话 · 不推销 · 30分钟",
    descriptor: "AI-Native Analytics Advisory",
  },
  hero: {
    eyebrow: "AI-Native Analytics Advisory",
    line1: "VC 级别。",
    line2: "AI 原生。",
    line3: "高管级",
    line4: "运营",
    line5: "模型。",
    desc: "资深 Analytics 与 AI 专家，直接嵌入你的团队。VC & 投资组合支持 · AI Agent Observability · 营销归因 & CLV · 用户分层 & A/B Testing · 高管运营模型。",
    primaryCta: "预约通话 →",
    ghostCta: "查看核心服务 →",
    stats: [
      { val: "AWS", label: "认证从业者" },
      { val: "Big 4", label: "咨询标准" },
      { val: "4", label: "项核心服务" },
      { val: "C-suite", label: "躬身入局，不是 pitch 团队" },
    ],
  },
  ticker: [
    "AI-Native Analytics Advisory",
    "VC-Grade Analytics",
    "AI Agent Observability",
    "营销归因",
    "用户生命周期价值 CLV",
    "用户分层预测",
    "A/B Testing",
    "GTM Measurement Science",
    "增量效果建模",
    "Executive Operating Model",
    "WBR / MBR Systems",
    "VC 投资组合支持",
  ],
  pillars: {
    label: "四项核心服务",
    heading: "OwlSight AI\n能为你做什么。",
    intro: "四项智能服务，每一项都对应特定的买家和业务问题。选择今天最适合你的那个。",
    buyersLabel: "最适合的买家",
    items: [
      {
        num: "01",
        tag: "融资就绪",
        title: "VC-Grade Analytics",
        desc: "融资指标、董事会 Dashboard、以及基于你数据构建的投资人叙事。KPI 故事化、可直接用于 Deck 的图表，以及下一轮融资需要的单位经济模型——在 Data Room 开放前就整理到位。",
        chips: ["融资指标", "董事会 Dashboard", "投资人叙事", "KPI 故事化", "Deck 图表", "VC 投资组合支持"],
        personas: ["创始人 / CEO", "COO / 首席幕僚", "VP Finance / 分数CFO", "VC 投资组合支持"],
      },
      {
        num: "02",
        tag: "AI-native",
        title: "AI Observability & Analytics",
        desc: "用成熟买家期待的方式衡量你的 AI 产品。Agent 质量、AI 产品使用情况、成本与延迟追踪、幻觉与故障监控——以及将模型表现转化为商业故事的 AI ROI Dashboard。",
        chips: ["AI 产品使用", "Agent 质量", "成本 & 延迟", "幻觉追踪", "故障监控", "AI ROI Dashboard"],
        personas: ["AI 创业公司创始人", "Head of Product / AI PM", "CTO", "ML / AI 工程负责人"],
      },
      {
        num: "03",
        tag: "GTM 测量科学",
        title: "GTM Measurement Science",
        desc: "营销归因、GTM 策略、因果与增量效果建模、A/B Test 设计，以及基于科学而非相关性的 ROI 分析。精准知道哪些渠道、活动和用户分层真正驱动了营收、CLV 和可持续增长。",
        chips: ["营销归因", "用户 LTV", "分层预测", "增量效果建模", "A/B Test 设计", "GTM 策略", "ROI 分析"],
        personas: ["Head of Growth / VP Marketing", "CRO / RevOps 负责人", "Product Growth Lead", "CFO"],
      },
      {
        num: "04",
        tag: "运营卓越",
        title: "Executive Operating Model",
        desc: "WBR/MBR 体系、运营计划指标、Metric 定义、KPI 归属，以及高管业务复盘——这是全球顶尖公司赖以建立的数据驱动运营纪律，以你的规模应用到你的组织中。",
        chips: ["WBR / MBR 体系", "运营计划指标", "Metric 定义", "KPI 归属", "高管业务复盘", "Big Four 级交付物"],
        personas: ["COO / CEO", "Chief of Staff / BizOps 负责人", "战略与运营负责人", "VP Product"],
      },
    ],
  },
  who: {
    label: "我们的服务对象",
    heading: "为敢打敢冲的\n创业者而生。",
    intro: "OwlSight AI 服务成长期创业公司和 VC 投资组合，提供高级 Analytics 智能服务——没有大企业的价格标签，也没有代理商的层层开销。",
    cells: [
      {
        tag: "创始人 & 高管",
        title: "公司快速增长，但报告体系没有跟上。",
        desc: "指标散落在 Notion，董事会提的问题你答不上来，下一轮融资迫在眉睫。你需要把数据智能层搭好——现在就得做。",
      },
      {
        tag: "AI 产品团队",
        title: "你在发布 AI 功能，却无法用商业语言来衡量它。",
        desc: "你能构建模型，但还不能向投资人或企业买家证明它有效。这正是 OwlSight 要填补的缺口。",
      },
      {
        tag: "增长 & 营收负责人",
        title: "你在多渠道投放，却对归因没有信心。",
        desc: "活动在跑，结果看得见——但没有因果清晰度来说明是什么在驱动它。我们构建的是测量科学，而不是更多 Dashboard。",
      },
      {
        tag: "运营 & 战略负责人",
        title: "公司在运转，但没有对「什么有效」的共同定义。",
        desc: "没有 WBR 节奏，没有 KPI 归属，没有统一数据源。我们构建运营智能层，让你的领导团队能够快速、一致地做决策。",
      },
    ],
  },
  approach: {
    label: "工作方法",
    heading: "OwlSight 如何\n与你合作。",
    intro: "开门见山，不绕弯子。深度嵌入、异步优先，以结果论英雄——而非以小时计费。",
    steps: [
      {
        n: "01",
        title: "免费架构诊断",
        desc: "系统梳理你的数据架构、智能缺口，以及最值得优先解决的问题。我会坦诚告诉你 OwlSight 是否适合你——没有推销，没有压力。",
      },
      {
        n: "02",
        title: "48小时内交付一页纸方案",
        desc: "清晰的交付物，清晰的时间线。你自己决定——不催促，不制造紧迫感。",
      },
      {
        n: "03",
        title: "第一周，立竿见影",
        desc: "第一周结束时，你会得到实在的东西——一套 KPI 框架、一个上线的 Dashboard，或者对前进路径的完整清晰认知。",
      },
      {
        n: "04",
        title: "异步优先，随时响应",
        desc: "Slack、Loom、Notion——我按你团队已有的节奏工作，深度嵌入，不增加额外负担。",
      },
    ],
    whyLabel: "为什么选择 OwlSight AI",
    whyTagline: "The owl sees what others miss.",
    whyPoints: [
      "AWS 认证，具备在全球最大电商平台之一积累的高管 BI 背景",
      "Big Four 级别的咨询交付物——结构严谨、演示就绪，经得起投资人、董事会和企业买家的审视",
      "真正的因果推断与增量效果建模——而不只是描述过去的 Dashboard",
      "AI Observability 经验内置——专为在生产环境中部署 LLM 功能的公司打造",
      "创业公司运营节奏——默认异步，没有官僚流程，没有客户经理，只有结果",
    ],
  },
  diff: {
    label: "咨询顾问，不是代理商",
    heading: "咨询顾问公司，\n不是代理商。",
    intro: "既能运筹帷幄，也能冲锋陷阵；以创业公司的速度推进，不带任何冗余开销。",
    cards: [
      {
        kicker: "// 直接对接",
        title: "你永远只与一位资深从业者合作。",
        desc: "没有客户经理，没有初级员工。每一份交付物都来自制定合作方案的同一个大脑——这在市场上很罕见。",
      },
      {
        kicker: "// 因果，而非相关",
        title: "我们追问因果，不止步于现象。",
        desc: "增量效果测试、因果推断、严谨的 A/B 设计。大多数 Analytics 只描述过去，OwlSight 解释它。",
      },
      {
        kicker: "// AI 内置",
        title: "AI Observability 不是附加项，它是核心。",
        desc: "Agent 质量、成本、幻觉追踪以及 AI ROI Dashboard 内嵌于每一个 AI 项目中——不是高价附加服务。",
      },
    ],
  },
  cta: {
    label: "拨云见日",
    heading1: "你的数据应该是你最",
    headingEm: "锐利",
    headingSuffix: "的竞争优势。",
    desc: "预约一次免费通话——没有推销，没有议程。很乐意深入探讨你的数据问题、即将到来的 deadline，或者你现在最卡住的地方。",
    primaryCta: "预约通话 →",
    ghostCta: "查看核心服务 →",
    footnote: "免费通话 · 无义务 · 24小时内回复",
  },
  footer: {
    copyright: "© 2026 OwlSight AI · 保留所有权利",
  },
};
