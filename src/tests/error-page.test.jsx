import { describe, it, expect } from "vitest";
import ErrorPage from "../error-page";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("Error Page component", () => {
  it("render correct heading", () =>  {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element:  <ErrorPage />,
          errorElement:  <ErrorPage />
        },
      ],
      {
        initialEntries: ["/"],
        initialIndex: 0,
        error: new Error("Test error"),
      }
    );
    render(<RouterProvider router={router}/>)
    expect(screen.getByRole("heading").textContent).toMatch(/oops/i);
  });
});