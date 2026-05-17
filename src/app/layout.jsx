import "./globals.css";

export const metadata = {
  title: "Arihant Upadhyay Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Background Video */}
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/fallback.jpg"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>



     
        <div className="content">{children}</div>
      </body>
    </html>
  );
}