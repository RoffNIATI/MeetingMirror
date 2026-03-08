interface BadgeProps {
  label: string;
  variant?: 'default' | 'green' | 'amber' | 'red' | 'blue' | 'purple';
  size?: 'sm' | 'xs';
}

const variants = {
  default: 'bg-[var(--border)] text-[var(--muted)]',
  green:   'bg-green/10 text-green border border-green/20',
  amber:   'bg-amber/10 text-amber border border-amber/20',
  red:     'bg-danger/10 text-danger border border-danger/20',
  blue:    'bg-accent/10 text-accent border border-accent/20',
  purple:  'bg-purple-500/10 text-purple-600 border border-purple-200',
};

export default function Badge({ label, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center rounded-full font-medium
      ${size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-0.5 text-xs'}
      ${variants[variant]}
    `}>
      {label}
    </span>
  );
}
