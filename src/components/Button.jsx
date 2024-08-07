/* eslint-disable react/prop-types */

function Button({btnColor,btnText,onclick}) {
  return (
    <button
    className={`text-white px-4 py-2 rounded-full ${btnColor}`}
    onClick={onclick}
    >
      {btnText}
    </button>
  )
}

export default Button