import { render, screen } from "@testing-library/react";
import Config from "./index";
import { userEvent } from "@testing-library/user-event";

import { test, expect } from "vitest";

test("renders all fields", () => {
  render(<Config />);

  expect(screen.getByText("API Host")).toBeInTheDocument();
  expect(screen.getByText("Server IP")).toBeInTheDocument();
  expect(screen.getByText("Server Port")).toBeInTheDocument();
  expect(screen.getByText("Server Password")).toBeInTheDocument();

  expect(screen.getByText("Scene Transitions")).toBeInTheDocument();
});

test("can add a new scene transition field", async () => {
  render(<Config />);

  expect(screen.getAllByRole("textbox").length).toBe(4);

  await userEvent.click(screen.getByText("Add"));

  expect(screen.getAllByRole("textbox").length).toBe(5);
});
