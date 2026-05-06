export const THEME = {
  colors: {
    background: "#F7F2EA",
    surface: "#EFE7DC",
    claudeOrange: "#D97757",
    text: "#2B2622",
    mutedText: "#6D6259",
    line: "#D8CEC2",
    teal: "#2F7D73",
    terminal: "#221F1C",
    terminalSoft: "#322D28",
    terminalText: "#F8F1E7",
    success: "#4E8F72",
    warning: "#C78A3B",
  },
  fontFamily:
    '"Noto Sans SC", "PingFang SC", "Inter", "Helvetica Neue", Arial, sans-serif',
  monoFamily:
    '"JetBrains Mono", "SF Mono", "Menlo", "Consolas", monospace',
} as const;

export const STAGE = {
  maxWidth: 1480,
  minHeight: 820,
  compactMinHeight: 720,
  horizontalPadding: 92,
} as const;

export const SAFE_AREAS = {
  host: {
    width: 560,
    right: 96,
    top: 118,
    bottom: 214,
  },
  subtitle: {
    left: 220,
    right: 220,
    bottom: 70,
    height: 170,
  },
  content: {
    left: 104,
    right: 720,
    top: 92,
    bottom: 94,
  },
} as const;

export const SHADOWS = {
  panel: "0 28px 70px rgba(43, 38, 34, 0.13)",
  soft: "0 12px 36px rgba(43, 38, 34, 0.1)",
  terminal: "0 36px 90px rgba(34, 31, 28, 0.2)",
} as const;
