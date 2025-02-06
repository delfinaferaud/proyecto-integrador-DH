export const SelectOptions = ({labelFor, labelText, selectValue, selectName, onChange, defaultText, options }) => {
  return (
    <>
        <label
            className="font-bold text-sm md:text-base"
            htmlFor={labelFor}
          >
            {labelText}
        </label>
          <select
            value={selectValue}
            name={selectName}
            id={selectName}
            onChange={onChange}
          >
            <option
              value=""
              disabled
            >
              {defaultText}
            </option>
            {
                options.map(option => (
                    <option className="capitalize" value={option} key={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                ))
            }
          </select>
    </>
  )
}
