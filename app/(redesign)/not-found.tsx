import Rail from '@/components/r2b/rail';

export default function NotFound() {
  return (
    <div className="shell">
      <Rail />
      <main id="content" className="main">
        <div className="content">
          <h1 className="name">404</h1>
          <p className="identity meta">This page could not be found.</p>
        </div>
      </main>
    </div>
  );
}
