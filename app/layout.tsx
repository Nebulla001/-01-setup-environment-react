import Navbar from "../src/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-5 mt-5">{children}</div>
      </body>
    </html>
  );
}
