import "./styles.css";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      type="search"
      value={searchValue}
      onChange={handleChange}
      className="text-input"
      placeholder="Search..."
    />
  );
};
