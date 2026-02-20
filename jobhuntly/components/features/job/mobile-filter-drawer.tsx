"use client";

import { useEffect } from "react";
import { FilterGroup } from "@/lib/types";

interface MobileFilterDrawerProps {
  open: boolean;
  onClose: () => void;
  filterGroups: FilterGroup[];
  activeFilters: Map<string, Set<string>>;
  onToggle: (key: string, value: string) => void;
  onClear: () => void;
}

export function MobileFilterDrawer({
  open,
  onClose,
  filterGroups,
  activeFilters,
  onToggle,
  onClear,
}: MobileFilterDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const totalActive = Array.from(activeFilters.values()).reduce(
    (sum, set) => sum + set.size, 0
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-background z-50 lg:hidden
          flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Job filters"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg text-foreground">Filters</span>
            {totalActive > 0 && (
              <span className="bg-primary text-white text-xs font-bold font-body px-2 py-0.5 rounded-full">
                {totalActive}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-60 hover:text-neutral-100 hover:bg-neutral-20 rounded transition-all"
            aria-label="Close filters"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable filters */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filterGroups.map((group) => (
            <DrawerFilterSection
              key={group.label}
              group={group}
              activeFilters={activeFilters}
              onToggle={onToggle}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border shrink-0 flex gap-3">
          <button
            onClick={onClear}
            className="flex-1 border-2 border-border font-body font-semibold text-sm text-neutral-80
              hover:border-primary hover:text-primary py-2.5 transition-all duration-200"
          >
            Clear all
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-primary text-white font-body font-semibold text-sm
              hover:bg-primary/90 py-2.5 transition-all duration-200"
          >
            Show results
          </button>
        </div>
      </div>
    </>
  );
}

// Only used by MobileFilterDrawer above — stays in this file
function DrawerFilterSection({
  group,
  activeFilters,
  onToggle,
}: {
  group: FilterGroup;
  activeFilters: Map<string, Set<string>>;
  onToggle: (key: string, value: string) => void;
}) {
  const checked = activeFilters.get(group.key) || new Set<string>();

  return (
    <div className="mb-6">
      <p className="font-body font-bold text-sm text-foreground mb-3">{group.label}</p>
      <div className="flex flex-col gap-3">
        {group.options.map((opt) => {
          const isChecked = checked.has(opt.value);
          return (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer group/item"
              onClick={() => onToggle(group.key, opt.value)}
            >
              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-150
                ${isChecked ? "bg-primary border-primary" : "border-neutral-40 bg-white group-hover/item:border-primary"}`}
              >
                {isChecked && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-body text-sm text-neutral-80 group-hover/item:text-neutral-100 transition-colors flex-1">
                {opt.label}
                <span className="text-neutral-40 ml-1">({opt.count})</span>
              </span>
            </label>
          );
        })}
      </div>
      <div className="border-t border-border mt-6" />
    </div>
  );
}