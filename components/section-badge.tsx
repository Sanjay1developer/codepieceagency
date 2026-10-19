import type { LucideIcon } from "lucide-react";

type SectionBadgeProps = {
  icon: LucideIcon;
  label: string;
};

export default function SectionBadge({ icon: Icon, label }: SectionBadgeProps) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce5ff] bg-[#f5f7ff] py-2 pl-1.5 pr-3 text-[11px] font-semibold tracking-[0.01em] text-[#315bdc]">
      <span
        aria-hidden="true"
        className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 bg-[#315bdc] text-white shadow-[0_0_0_2px_rgba(49,91,220,0.18),0_0_12px_rgba(49,91,220,0.42)]"
      >
        <Icon size={13} strokeWidth={2} />
      </span>
      {label}
    </div>
  );
}
