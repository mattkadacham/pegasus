import type { ReactNode } from "react";

type SocialLinkButtonProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  ariaLabel?: string;
  external?: boolean;
};

export function SocialLinkButton(props: SocialLinkButtonProps) {
  const { href, label, icon, ariaLabel, external = true } = props;

  return (
    <a
      className="social-link"
      href={href}
      aria-label={ariaLabel ?? label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {icon ? <span className="social-link__icon">{icon}</span> : null}
      <span className="social-link__label">{label}</span>
    </a>
  );
}
