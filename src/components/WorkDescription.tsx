import Tag from './Tag';
import { colors, fonts, fontWeights } from '../styles/tokens';

interface WorkDescriptionProps {
  title: string;
  description: string;
  tags: string[];
}

export default function WorkDescription({ title, description, tags }: WorkDescriptionProps) {
  return (
    <div className="flex flex-col gap-3 items-start w-full">
      <div className="flex flex-col items-start w-full">
        <p
          className="text-2xl w-full"
          style={{ fontFamily: fonts.body, fontWeight: fontWeights.regular, color: colors.headingDark }}
        >
          {title}
        </p>
        <p
          className="text-base w-full"
          style={{ fontFamily: fonts.body, fontWeight: fontWeights.regular, color: colors.muted }}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
