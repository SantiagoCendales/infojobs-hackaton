
export const Button = ({label, disabled = false, action}) => {
  return (
    <button
      onClick={() => action()}
      disabled={disabled}
      className="
        border
        border-blue-700
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-md
        hover:bg-neutral-100
        transition
        px-4
        py-2
        text-xs
        text-blue-700
        font-medium
      "
    >
      {label}
    </button>
  )
}
