export const InputContainer = ({ forLabel, textLabel, typeInput, placeholder, onChange, inputValue, inputName,inputClass, divClass }) => {
  return (
    <div className={`${divClass} flex flex-col gap-2 my-4`}>
      <label
        className="font-bold text-sm md:text-base"
        htmlFor={forLabel}
      >
        {textLabel}
      </label>

      {forLabel === 'description' ? (
        <textarea
          className="rounded-md placeholder:text-sm px-2 text-sm focus:outline-none py-2 md:text-base md:placeholder:text-base"
          value={inputValue}
          id={forLabel}
          type={typeInput}
          name={inputName}
          placeholder={placeholder}
          rows="3"
          cols="20"
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={`${
            typeInput === 'file' && 'py-1 md:h-10 hover:cursor-pointer'
          } ${inputClass} rounded-md placeholder:text-sm px-2 text-sm h-8 focus:outline-none bg-white inline-block leading-4 md:placeholder:text-base md:text-base md:w-[220px]`}
          value={inputValue}
          id={forLabel}
          name={inputName}
          type={typeInput}
          placeholder={placeholder}
          onChange={onChange}
          multiple={typeInput === 'file'}
        />
      )}
    </div>
  );
};
