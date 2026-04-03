import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SignInForm } from "./sign-in-form";

afterEach(cleanup);

const mockPush = vi.fn();
const mockSignIn = vi.fn();

vi.mock("../../../services/auth/client", () => ({
  createClient: () => ({ auth: { signInWithPassword: mockSignIn } }),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

test("renders form fields and submit button", () => {
  render(<SignInForm />);
  expect(screen.getByLabelText(/email/i)).toBeDefined();
  expect(screen.getByLabelText(/password/i)).toBeDefined();
  expect(screen.getByRole("button", { name: "Sign in" })).toBeDefined();
});

test("disables button and shows pending label while submitting", async () => {
  mockSignIn.mockReturnValue(new Promise(() => {}));
  render(<SignInForm />);
  await userEvent.type(screen.getByLabelText(/email/i), "a@b.com");
  await userEvent.type(screen.getByLabelText(/password/i), "pass");
  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));
  expect(screen.getByRole("button", { name: "Signing in…" })).toHaveProperty(
    "disabled",
    true,
  );
});

test("shows error alert on failed sign-in", async () => {
  mockSignIn.mockResolvedValue({ error: { message: "Invalid credentials" } });
  render(<SignInForm />);
  await userEvent.type(screen.getByLabelText(/email/i), "a@b.com");
  await userEvent.type(screen.getByLabelText(/password/i), "wrong");
  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));
  const alert = await screen.findByRole("alert");
  expect(alert.textContent).toBe("Invalid credentials");
});

test("redirects to /admin on successful sign-in", async () => {
  mockSignIn.mockResolvedValue({ error: null });
  render(<SignInForm />);
  await userEvent.type(screen.getByLabelText(/email/i), "a@b.com");
  await userEvent.type(screen.getByLabelText(/password/i), "pass");
  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));
  await vi.waitFor(() => expect(mockPush).toHaveBeenCalledWith("/admin"));
});
