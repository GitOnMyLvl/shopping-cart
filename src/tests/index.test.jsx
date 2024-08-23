import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter,  Routes, Route } from "react-router-dom";
import Index from "../routes/index";
import Store from "../routes/store";
import userEvent from "@testing-library/user-event";

describe("Index component", () => {
  it("renders page", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders shop after click", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /newest offers/i });
    await user.click(link);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  })
});
