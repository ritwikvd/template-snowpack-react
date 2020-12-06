import { expect, test } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { click, tab, type } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
