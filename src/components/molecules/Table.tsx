"use client";

const colStyle = {
  gridTemplateColumns: `repeat(5, 1fr)`,
};

export const Table = () => {
  return (
    <div className="w-full max-w-5xl min-h-52 max-h-120 bg-(--surface) rounded-xl overflow-y-auto normalize-scrollbar">
      <div className="w-full flex flex-col gap-1">
        <div
          className="text-(--foreground) sticky top-0 backdrop-blur w-full grid justify-items-center bg-(--surface) z-10"
          style={colStyle}
        >
          <span className="p-4 font-semibold min-w-20">Name</span>
          <span className="p-4 font-semibold min-w-20">Age</span>
          <span className="p-4 font-semibold min-w-20">City</span>
          <span className="p-4 font-semibold min-w-20">Mail</span>
          <span className="p-4 font-semibold min-w-20">Country</span>
        </div>
        <div className="flex flex-col gap-1 overflow-y-auto normalize-scrollbar">
          <div
            className="bg-(--surface-off) w-full grid justify-items-center"
            style={colStyle}
          >
            <span className="p-4 min-w-20 max-w-52 truncate">John Doe</span>
            <span className="p-4 min-w-20 max-w-52 truncate">30</span>
            <span className="p-4 min-w-20 max-w-52 truncate">New York</span>
            <span className="p-4 min-w-20 max-w-52 truncate">
              john.doe@example.com
            </span>
            <span className="p-4 min-w-20 max-w-52 truncate">USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
