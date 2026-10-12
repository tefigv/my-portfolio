import { colors, fonts, fontWeights } from '../styles/tokens';

interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div
      className="border flex items-center justify-center px-3 py-1 rounded-full shrink-0"
      style={{ borderColor: colors.mauve }}
    >
      <p
        className="text-base whitespace-nowrap"
        style={{ fontFamily: fonts.body, fontWeight: fontWeights.regular, color: colors.mauve }}
      >
        {label}
      </p>
    </div>
  );
}
