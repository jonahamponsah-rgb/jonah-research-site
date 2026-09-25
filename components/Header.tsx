"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [["About", "/about"], ["Research", "/research"], ["Publications", "/publications"], ["Projects", "/projects"], ["Talks", "/talks"], ["CV", "/cv"], ["Contact", "/contact"]];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }}>
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Jonah Amponsah home" onClick={() => setOpen(false)}><span className="brand-mark">JA<span>.</span></span><span className="brand-text">Jonah Amponsah</span></Link>
        <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
        <nav id="primary-navigation" className={`nav${open ? " is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
