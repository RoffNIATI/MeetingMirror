// Shared wrapper used by every result card
import { ReactNode } from 'react';
import CopyButton from '@/components/ui/CopyButton';

interface CardShellProps {
  title: string;
  icon: ReactNode;
  iconBg?: string;   // Tailwind bg class e.g. 'bg-accent/10'
  iconColor?: string; // Tailwind text class
  copyText?: string;
  children: ReactNode;
  className?: string;
}

export default function CardShell({
  title,
  icon,
  iconBg   = 'bg-accent/10',
  iconColor = 'text-accent',
  copyText,
  children,
  className = '',
}: CardShellProps) {
  return (
    <div className={`bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden fade-up ${className}`}>
      {/* Card header */}
      <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}>
            {icon}
          </div>
          <h3 className="font-display font-semibold text-[var(--text)] text-sm">{title}</h3>
        </div>
        {copyText && <CopyButton text={copyText} />}
      </div>

      {/* Card body */}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
