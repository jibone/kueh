import "@testing-library/jest-dom";
import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Load App", () => {
  it("Loads App", async () => {
    render(<App />);

    expect(screen.getByText("Kueh")).toBeInTheDocument();
  });
});
