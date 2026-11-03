import styles from "./SearchInput.module.css";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder,
}: SearchInputProps) {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={() => onChange("")}
          aria-label="Limpar pesquisa"
        >
          x
        </button>
      )}
    </div>
  );
}
