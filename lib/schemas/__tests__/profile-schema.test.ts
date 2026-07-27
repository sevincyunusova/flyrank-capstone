import { describe, it, expect } from "vitest";
import { profileSchema } from "../profile-schema";

const validPayload = {
  fullName: "Jane Doe",
  email: "jane@example.com",
  theme: "dark" as const,
  emailNotifications: true,
};

describe("profileSchema", () => {
  it("accepts a fully valid payload", () => {
    const result = profileSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  describe("fullName", () => {
    it("rejects an empty name", () => {
      const result = profileSchema.safeParse({ ...validPayload, fullName: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toMatch(/required/i);
      }
    });

    it("rejects a name shorter than 2 characters", () => {
      const result = profileSchema.safeParse({ ...validPayload, fullName: "A" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toMatch(/at least 2 characters/i);
      }
    });

    it("trims whitespace before validating length", () => {
      const result = profileSchema.safeParse({ ...validPayload, fullName: "  A " });
      expect(result.success).toBe(false);
    });

    it("accepts a 2-character name", () => {
      const result = profileSchema.safeParse({ ...validPayload, fullName: "Jo" });
      expect(result.success).toBe(true);
    });
  });

  describe("email", () => {
    it("rejects an empty email", () => {
      const result = profileSchema.safeParse({ ...validPayload, email: "" });
      expect(result.success).toBe(false);
    });

    it("rejects an invalid email format", () => {
      const result = profileSchema.safeParse({ ...validPayload, email: "not-an-email" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toMatch(/valid email/i);
      }
    });

    it("accepts a valid email", () => {
      const result = profileSchema.safeParse({ ...validPayload, email: "user@domain.co" });
      expect(result.success).toBe(true);
    });
  });

  describe("theme", () => {
    it("accepts light, dark, and system", () => {
      for (const theme of ["light", "dark", "system"] as const) {
        const result = profileSchema.safeParse({ ...validPayload, theme });
        expect(result.success).toBe(true);
      }
    });

    it("rejects an invalid theme value", () => {
      const result = profileSchema.safeParse({ ...validPayload, theme: "blue" });
      expect(result.success).toBe(false);
    });
  });

  describe("emailNotifications", () => {
    it("accepts boolean true and false", () => {
      expect(profileSchema.safeParse({ ...validPayload, emailNotifications: true }).success).toBe(true);
      expect(profileSchema.safeParse({ ...validPayload, emailNotifications: false }).success).toBe(true);
    });

    it("rejects a non-boolean value", () => {
      const result = profileSchema.safeParse({ ...validPayload, emailNotifications: "yes" });
      expect(result.success).toBe(false);
    });
  });
});