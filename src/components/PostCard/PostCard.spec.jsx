import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import mock from "./mock";

describe("<PostCard />", () => {
  it("should renderized correctly", () => {
    render(<PostCard {...mock} />);

    expect(screen.getByRole("img", { alt: "title 1" })).toHaveAttribute(
      "src",
      mock.cover
    );

    expect(
      screen.getByRole("heading", { title: "title 1 1" })
    ).toBeInTheDocument();

    expect(screen.getByText("body1")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
