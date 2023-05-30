
export const Button = ({label, disabled = false, action, isLoading = false}) => {
  return (
    <button
      onClick={() => action()}
      disabled={disabled}
      className="
        border
        border-blue-700
        disabled:opacity-40
        disabled:cursor-not-allowed
        disabled:border-gray-600
        disabled:text-gray-600
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
      {
        isLoading
        ? 
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
        : label
      }
    </button>
  )
}
