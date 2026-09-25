type PublicationLinksProps = {
  title: string;
  links: { label: string; href: string }[];
};

export function PublicationLinks({ title, links }: PublicationLinksProps) {
  return (
    <ul className="publication-links" aria-label={`Access options for ${title}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} aria-label={`${link.label}: ${title}`}>{link.label} <span aria-hidden="true">↗</span></a>
        </li>
      ))}
    </ul>
  );
}
