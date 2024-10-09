interface Props {
  text: string;
}

const ButtonPrimary = (text: Props) => {
  return (
    <button className="bg-amber-500 hover:bg-amber-600 px-8 py-2 rounded-md text-slate-200">
      {text.text}
    </button>
  );
};

export default ButtonPrimary;
