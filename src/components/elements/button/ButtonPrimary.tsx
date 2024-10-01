interface Props {
  text: string;
}

const ButtonPrimary = (text: Props) => {
  return (
    <button className="bg-amber-100 px-4 py-2 rounded-md text-slate-800">
      {text.text}
    </button>
  );
};

export default ButtonPrimary;
