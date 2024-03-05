import React from 'react'

type CustomRadioProps = {
  value: string
  checked: boolean
  handleChange: () => void
  labelText: string
  todosNumber: number
}

const CustomRadio = ({
  checked,
  handleChange,
  labelText,
  value,
  todosNumber,
}: CustomRadioProps): React.JSX.Element => {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={handleChange}
          className="h-4 w-4 border-green-300
           text-green-400 focus:ring-green-600"
        />
        <span className="ml-3 block text-sm uppercase
         font-medium leading-6 text-gray-900">
          {labelText}
        </span>
      </label>
      <span className="text-orange-600 font-bold text-xs">({todosNumber})</span>
    </div>
  )
}

export default CustomRadio
