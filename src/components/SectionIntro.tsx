type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
};

export function SectionIntro(props: SectionIntroProps) {
  const { eyebrow, title, body, align = "left" } = props;

  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="section-tag">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-body">{body}</p>
    </div>
  );
}
