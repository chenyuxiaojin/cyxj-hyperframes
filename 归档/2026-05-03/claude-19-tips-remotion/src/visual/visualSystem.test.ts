import { describe, expect, test } from "vitest";
import { STAGE, THEME } from "./visualSystem";

describe("Claude warm visual system", () => {
  test("uses the required warm Claude palette", () => {
    expect(THEME.colors.background).toBe("#F7F2EA");
    expect(THEME.colors.surface).toBe("#EFE7DC");
    expect(THEME.colors.claudeOrange).toBe("#D97757");
    expect(THEME.colors.text).toBe("#2B2622");
    expect(THEME.colors.line).toBe("#D8CEC2");
    expect(THEME.colors.teal).toBe("#2F7D73");
  });

  test("uses a centered full-frame stage instead of host safe areas", () => {
    expect(STAGE.maxWidth).toBeGreaterThanOrEqual(1320);
    expect(STAGE.maxWidth).toBeLessThanOrEqual(1500);
    expect(STAGE.minHeight).toBeGreaterThanOrEqual(720);
    expect(STAGE.horizontalPadding).toBe(92);
  });
});
