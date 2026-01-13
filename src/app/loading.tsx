export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <div className="w-full h-full border-4 border-[#D4C4B0] border-t-[#8B7355] rounded-full animate-spin" />
        </div>
        <p className="text-[#6B7280]">Loading...</p>
      </div>
    </div>
  );
}
