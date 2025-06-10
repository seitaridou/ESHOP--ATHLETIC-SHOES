import Link from 'next/link';

export default function Header() {
  return (
    <header>
    <nav>
      <div className="nav-links">

      <img src="/Logo_NIKE.svg" alt="Site Logo" width={30} height={40} />
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/">Contact</a>
      </div>      
    </nav>
    </header>
  );
}


