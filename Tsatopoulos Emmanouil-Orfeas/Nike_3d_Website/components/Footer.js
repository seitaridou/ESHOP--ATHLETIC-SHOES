import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
        padding: '1rem',
        fontSize: '0.875rem',
        color: '#666',
        textAlign: 'center',
        borderTop: '1px solid #eee',
        marginTop: '3rem'
      }}>
            <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link href="/about">About</Link>
        <p>© {new Date().getFullYear()} Tsatopoulos Orfeas. All rights reserved.</p>
      </footer>
  );
}


