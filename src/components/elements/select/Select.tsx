interface Option {
  label: string;
  value: string;
}

interface Props {
  htmlFor: string;
  description: string;
  options: Option[];
  children?: React.ReactNode;
}

const Select: React.FC<Props> = ({ htmlFor, options, description }) => {
  return (
    <form className="max-w-sm mx-2">
      <select
        defaultValue={""}
        id={htmlFor}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          {description}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
