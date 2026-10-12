import { colors, fonts, fontWeights } from '../styles/tokens';

interface SectionTitleProps {
  overline: string;
  title: string;
}

export default function SectionTitle({ overline, title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-start w-full" style={{ fontFamily: fonts.mono, fontStyle: 'normal' }}>
      <p
        className="text-xl uppercase w-full"
        style={{ fontWeight: fontWeights.regular, color: colors.dark }}
      >
        {overline}
      </p>
      <p
        className="text-[40px] tracking-[-4px] w-full"
        style={{ fontWeight: fontWeights.regular, color: colors.subheading }}
      >
        {title}
      </p>
    </div>
  );
}
