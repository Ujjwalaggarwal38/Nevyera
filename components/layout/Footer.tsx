import Link from "next/link";
import { company, footerColumns } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <div className="wordmark footer-wordmark">
              Nevyera<span>.</span>
            </div>
            <p className="footer-tagline">{company.tagline}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {company.name}
          </span>
          <span>
            {company.city}, {company.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
