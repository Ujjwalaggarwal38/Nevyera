import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GoldRule } from "@/components/motion/GoldRule";

/**
 * Shell for the pages that aren't built yet.
 *
 * These are honest stubs, not fake finished pages: the nav and footer link to
 * them, so a 404 would be worse, but nobody should mistake one for done.
 */
export function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="section-ink stub">
        <div className="wrap">
          <GoldRule className="mb-5" />
          <p className="t-mono">{eyebrow}</p>
          <h1 className="stub-title">{title}</h1>
          <div className="stub-body">
            {children ?? (
              <p className="t-body">
                This page hasn&rsquo;t been written yet. The homepage is the finished
                reference — everything else is next.
              </p>
            )}
          </div>
          <Link href="/" className="btn btn-primary stub-back">
            Back to the homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
