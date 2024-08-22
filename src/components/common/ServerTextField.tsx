function ServerTextField({
  textFieldHeader,
  textFieldName,
  textFieldType,
  placeHolderText,
}: {
  textFieldHeader: string;
  textFieldName: string;
  textFieldType: string;
  placeHolderText: string;
}) {
  return (
    <div className="flex flex-col gap-2 my-[20px]">
      <h3 className="text-neutralGrey800 font-[500]">{textFieldHeader}</h3>
      <input
        name={textFieldName}
        type={textFieldType}
        placeholder={placeHolderText}
        className="input input-bordered w-full bg-neutralGrey0 placeholder-neutralGrey400"
      />
    </div>
  );
}

export default ServerTextField;
