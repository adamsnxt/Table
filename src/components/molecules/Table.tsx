"use client";
import { ReactNode } from "react";

type Column = {
  key: string;
  label: string;
};

type ActionsConfig<T> =
  | ((item: T) => ReactNode)
  | { label: string; actions: (item: T) => ReactNode };

type TableProps<T extends object> = {
  columns: Column[];
  items: T[];
  renderActions?: ActionsConfig<T>;
  onClick?: (item?: T) => void;
};

export const Table = <T extends object>({
  columns,
  items,
  renderActions,
  onClick,
}: TableProps<T>) => {
  const actionsLabel =
    renderActions && typeof renderActions === "object"
      ? renderActions.label
      : "Actions";
  const actionsRenderer =
    renderActions && typeof renderActions === "object"
      ? renderActions.actions
      : renderActions;

  const colCount = columns.length + (renderActions ? 1 : 0);
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
            <span key={col.key} className="p-4 font-semibold min-w-20">
              {col.label}
            </span>
          ))}
          {renderActions && (
            <span className="p-4 font-semibold min-w-20">{actionsLabel}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 overflow-y-auto normalize-scrollbar">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-(--surface-off) w-full grid justify-items-center ${onClick ? "cursor-pointer hover:opacity-80" : ""} `}
              style={colStyle}
              onClick={() => onClick && onClick(item)}
            >
              {columns.map((col) => (
                <span key={col.key} className="p-4 min-w-20 max-w-52 truncate">
                  {col.key in item
                    ? String((item as Record<string, unknown>)[col.key])
                    : "..."}
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
