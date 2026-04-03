import { GlassWater, Mail } from "lucide-react";
import { socials } from "../content";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { SocialLinkButton } from "./SocialLinkButton";

export function MailLink() {
  return (
    <SocialLinkButton
      href="mailto:info@pegasustaproom.com"
      label="Email"
      icon={<Mail size={18} strokeWidth={1} />}
      external={false}
    />
  );
}

export function InstagramLink() {
  return (
    <SocialLinkButton
      href={socials.instagram.href}
      label={socials.instagram.label}
      icon={<InstagramIcon />}
    />
  );
}

export function FacebookLink() {
  return (
    <SocialLinkButton
      href={socials.facebook.href}
      label={socials.facebook.label}
      icon={<FacebookIcon />}
    />
  );
}

export function UntappdLink() {
  return (
    <SocialLinkButton
      href={socials.untappd.href}
      label={socials.untappd.label}
      icon={<GlassWater height={18} width={18} strokeWidth={1} />}
    />
  );
}
