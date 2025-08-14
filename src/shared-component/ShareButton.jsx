export default function ShareButton() {
    return (
        <div className="flex gap-5 items-center">
            <div className="bg-sky-700 rounded-full px-3 py-1 text-white">
                <span>Share</span>
            </div>
            <div className="flex items-center border border-black-1 rounded-full p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                >
                    <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                </svg>
            </div>
        </div>
    );
}