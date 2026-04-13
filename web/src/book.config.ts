export interface PartConfig {
  number: number;
  title: string;
  epigraph: string;
  chapters: number[];
}

export interface ChapterConfig {
  number: number;
  slug: string;
  title: string;
  description: string;
}

export const parts: PartConfig[] = [
  {
    number: 1,
    title: 'Foundations',
    epigraph: 'Before the agent can think, the process must exist.',
    chapters: [1, 2, 3, 4],
  },
  {
    number: 2,
    title: 'The Core Loop',
    epigraph: 'The heartbeat of the agent: stream, act, observe, repeat.',
    chapters: [5, 6, 7],
  },
  {
    number: 3,
    title: 'Multi-Agent Orchestration',
    epigraph: 'One agent is powerful. Many agents working together are transformative.',
    chapters: [8, 9, 10],
  },
  {
    number: 4,
    title: 'Persistence and Intelligence',
    epigraph: 'An agent without memory makes the same mistakes forever.',
    chapters: [11, 12],
  },
  {
    number: 5,
    title: 'The Interface',
    epigraph: 'Everything the user sees passes through this layer.',
    chapters: [13, 14],
  },
  {
    number: 6,
    title: 'Connectivity',
    epigraph: 'The agent reaches beyond localhost.',
    chapters: [15, 16],
  },
  {
    number: 7,
    title: 'Performance Engineering',
    epigraph: 'Making it all fast enough that humans don\'t notice the machinery.',
    chapters: [17, 18],
  },
];

export const chapters: ChapterConfig[] = [
  { number: 1, slug: 'ch01-architecture', title: 'The Architecture of an AI Agent', description: 'The 6 key abstractions, data flow, permission system, build system' },
  { number: 2, slug: 'ch02-bootstrap', title: 'Starting Fast — The Bootstrap Pipeline', description: '5-phase init, module-level I/O parallelism, trust boundary' },
  { number: 3, slug: 'ch03-state', title: 'State — The Two-Tier Architecture', description: 'Bootstrap singleton, AppState store, sticky latches, cost tracking' },
  { number: 4, slug: 'ch04-api-layer', title: 'Talking to Claude — The API Layer', description: 'Multi-provider client, prompt cache, streaming, error recovery' },
  { number: 5, slug: 'ch05-agent-loop', title: 'The Agent Loop', description: 'query.ts deep dive, 4-layer compression, error recovery, token budgets' },
  { number: 6, slug: 'ch06-tools', title: 'Tools — From Definition to Execution', description: 'Tool interface, 14-step pipeline, permission system' },
  { number: 7, slug: 'ch07-concurrency', title: 'Concurrent Tool Execution', description: 'Partition algorithm, streaming executor, speculative execution' },
  { number: 8, slug: 'ch08-sub-agents', title: 'Spawning Sub-Agents', description: 'AgentTool, 15-step runAgent lifecycle, built-in agent types' },
  { number: 9, slug: 'ch09-fork-agents', title: 'Fork Agents and the Prompt Cache', description: 'Byte-identical prefix trick, cache sharing, cost optimization' },
  { number: 10, slug: 'ch10-coordination', title: 'Tasks, Coordination, and Swarms', description: 'Task state machine, coordinator mode, swarm messaging' },
  { number: 11, slug: 'ch11-memory', title: 'Memory — Learning Across Conversations', description: 'File-based memory, 4-type taxonomy, LLM recall, staleness' },
  { number: 12, slug: 'ch12-extensibility', title: 'Extensibility — Skills and Hooks', description: 'Two-phase skill loading, lifecycle hooks, snapshot security' },
  { number: 13, slug: 'ch13-terminal-ui', title: 'The Terminal UI', description: 'Custom Ink fork, rendering pipeline, double-buffer, pools' },
  { number: 14, slug: 'ch14-input-interaction', title: 'Input and Interaction', description: 'Key parsing, keybindings, chord support, vim mode' },
  { number: 15, slug: 'ch15-mcp', title: 'MCP — The Universal Tool Protocol', description: '8 transports, OAuth for MCP, tool wrapping' },
  { number: 16, slug: 'ch16-remote', title: 'Remote Control and Cloud Execution', description: 'Bridge v1/v2, CCR, upstream proxy' },
  { number: 17, slug: 'ch17-performance', title: 'Performance — Every Millisecond and Token Counts', description: 'Startup, context window, prompt cache, rendering, search' },
  { number: 18, slug: 'ch18-epilogue', title: 'Epilogue — What We Learned', description: 'The 5 architectural bets, what transfers, where agents are heading' },
];

export const zhParts: PartConfig[] = [
  {
    number: 1,
    title: '基礎',
    epigraph: '代理人能夠思考之前，程序必須先存在。',
    chapters: [1, 2, 3, 4],
  },
  {
    number: 2,
    title: '核心迴圈',
    epigraph: '代理人的心跳：串流、行動、觀察、重複。',
    chapters: [5, 6, 7],
  },
  {
    number: 3,
    title: '多代理人協調',
    epigraph: '一個代理人強大。多個代理人協力，則能改變一切。',
    chapters: [8, 9, 10],
  },
  {
    number: 4,
    title: '持久化與智能',
    epigraph: '沒有記憶的代理人，會永遠重蹈覆轍。',
    chapters: [11, 12],
  },
  {
    number: 5,
    title: '介面層',
    epigraph: '使用者看到的一切，都經過這一層。',
    chapters: [13, 14],
  },
  {
    number: 6,
    title: '連線能力',
    epigraph: '代理人觸及 localhost 之外的世界。',
    chapters: [15, 16],
  },
  {
    number: 7,
    title: '效能工程',
    epigraph: '讓一切足夠快，快到人類感受不到機械的存在。',
    chapters: [17, 18],
  },
];

export const zhChapters: ChapterConfig[] = [
  { number: 1, slug: 'ch01-architecture', title: 'AI 代理人的架構', description: '六大核心抽象、資料流、權限系統、建置系統' },
  { number: 2, slug: 'ch02-bootstrap', title: '快速啟動——Bootstrap 管線', description: '五階段初始化、模組級 I/O 並行、信任邊界' },
  { number: 3, slug: 'ch03-state', title: '狀態——雙層架構', description: 'Bootstrap 單例、AppState 儲存、黏性閂鎖、成本追蹤' },
  { number: 4, slug: 'ch04-api-layer', title: '與 Claude 對話——API 層', description: '多提供者客戶端、提示詞快取、串流、錯誤復原' },
  { number: 5, slug: 'ch05-agent-loop', title: '代理人迴圈', description: 'query.ts 深度解析、四層壓縮、錯誤復原、Token 預算' },
  { number: 6, slug: 'ch06-tools', title: '工具——從定義到執行', description: '工具介面、14 步管線、權限系統' },
  { number: 7, slug: 'ch07-concurrency', title: '並行工具執行', description: '分區演算法、串流執行器、推測執行' },
  { number: 8, slug: 'ch08-sub-agents', title: '產生子代理人', description: 'AgentTool、15 步 runAgent 生命週期、內建代理人類型' },
  { number: 9, slug: 'ch09-fork-agents', title: 'Fork 代理人與提示詞快取', description: '位元組完全相同前綴技巧、快取共享、成本優化' },
  { number: 10, slug: 'ch10-coordination', title: '任務、協調與群集', description: '任務狀態機、協調者模式、群集訊息傳遞' },
  { number: 11, slug: 'ch11-memory', title: '記憶——跨對話學習', description: '檔案型記憶、四種類型分類、LLM 召回、陳舊性' },
  { number: 12, slug: 'ch12-extensibility', title: '可擴展性——技能與鉤子', description: '雙階段技能載入、生命週期鉤子、快照安全性' },
  { number: 13, slug: 'ch13-terminal-ui', title: '終端 UI', description: '客製化 Ink 分支、渲染管線、雙緩衝、物件池' },
  { number: 14, slug: 'ch14-input-interaction', title: '輸入與互動', description: '按鍵解析、快捷鍵綁定、和弦支援、vim 模式' },
  { number: 15, slug: 'ch15-mcp', title: 'MCP——通用工具協定', description: '八種傳輸方式、MCP OAuth、工具包裝' },
  { number: 16, slug: 'ch16-remote', title: '遠端控制與雲端執行', description: 'Bridge v1/v2、CCR、上游代理' },
  { number: 17, slug: 'ch17-performance', title: '效能——每毫秒、每個 Token 都重要', description: '啟動、上下文視窗、提示詞快取、渲染、搜尋' },
  { number: 18, slug: 'ch18-epilogue', title: '後記——我們學到了什麼', description: '五項架構賭注、可移植之處、代理人的未來走向' },
];

export function getPartForChapter(chapterNumber: number, locale: 'en' | 'zh' = 'en'): PartConfig | undefined {
  const p = locale === 'zh' ? zhParts : parts;
  return p.find(pt => pt.chapters.includes(chapterNumber));
}

export function getChapterNumber(slug: string): number {
  const match = slug.match(/^ch(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export function getAdjacentChapters(chapterNumber: number, locale: 'en' | 'zh' = 'en') {
  const chs = locale === 'zh' ? zhChapters : chapters;
  const idx = chs.findIndex(c => c.number === chapterNumber);
  return {
    prev: idx > 0 ? chs[idx - 1] : null,
    next: idx < chs.length - 1 ? chs[idx + 1] : null,
  };
}

export function isFirstChapterOfPart(chapterNumber: number): boolean {
  return parts.some(p => p.chapters[0] === chapterNumber);
}
