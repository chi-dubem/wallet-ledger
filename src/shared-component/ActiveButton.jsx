export default function ActiveButton({prop}) {
    return (
    <button className="flex gap-2 items-center rounded-full px-2 py-1 bg-gray-300 max-w-fit">
        <div className="h-1.5 w-1.5 bg-[#087A2E] rounded-full shrink-0"></div>
        <span className="text-sm truncate">{prop}</span>
    </button>
    );
}