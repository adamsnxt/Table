"use client";

type Column = {
  key: string;
  label: string;
};

type ActionsConfig =
  | ((item: Record<string, unknown>) => React.ReactNode)
  | {
      label: string;
      actions: (item: Record<string, unknown>) => React.ReactNode;
    };

type TableProps = {
  columns: Column[];
  items: Record<string, unknown>[];
  onClick?: (item: Record<string, unknown>) => void;
  renderActions?: ActionsConfig;
};

export const Table = ({
  columns,
  items,
  onClick,
  renderActions,
}: TableProps) => {
  const normalizeLabel =
    renderActions && typeof renderActions === "object"
      ? renderActions.label
      : "Actions";

  const actionsRenderer =
    renderActions && typeof renderActions === "object"
      ? renderActions.actions
      : renderActions;

  const colCount = renderActions ? columns.length + 1 : columns.length;

  const colStyle = {
    gridTemplateColumns: `repeat(${colCount}, 1fr)`,
  };

  return (
    <div className="w-full max-w-5xl min-h-52 max-h-120 bg-(--surface) rounded-xl overflow-y-auto normalize-scrollbar">
      <div className="w-full flex flex-col gap-1">
        <div
          className="text-(--foreground) sticky top-0 backdrop-blur w-full grid justify-items-center bg-(--surface) z-10"
          style={colStyle}
        >
          {columns.map((col) => (
            <span className="p-4 font-semibold min-w-20" key={col.key}>
              {col.label}
            </span>
          ))}
          {renderActions && (
            <span className="p-4 font-semibold min-w-20">{normalizeLabel}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 overflow-y-auto normalize-scrollbar">
          {items.map((item, index) => (
            <div
              className={`bg-(--surface-off) w-full grid justify-items-center ${onClick ? "cursor-pointer hover:opacity-80" : ""}`}
              style={colStyle}
              key={index}
              onClick={() => onClick && onClick(item)}
            >
              {columns.map((col) => (
                <span className="p-4 min-w-20 max-w-52 truncate" key={col.key}>
                  {col.key in item ? String(item[col.key]) : "..."}
                </span>
              ))}
              {actionsRenderer && (
                <div
                  className="p-4 min-w-20 flex justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  {actionsRenderer(item)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
