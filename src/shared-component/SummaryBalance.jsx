export default function SummaryBalance({title, amount, percent}) {
    return (
      <div className="bg-gray-100 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-[500]">{title}</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-7"
            >
              <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
            </svg>
          </div>
        </div>
        <p className="pt-4 text-4xl font-[500]">${amount}</p>
        <p className="text-blue-300">{percent}</p>
      </div>
    );
}