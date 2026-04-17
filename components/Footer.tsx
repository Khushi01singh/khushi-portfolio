export default function Footer() {
  return (
    <footer style={{ padding: '40px 32px', borderTop: '1px solid rgba(108,99,255,0.12)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {[
          { href: 'mailto:khushisinghara268@gmail.com', label: '✉ Email' },
          { href: 'tel:+917646099321', label: '📞 +91-7646099321' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#7a7a9d',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 500,
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = '#f0f0ff'
              el.style.borderColor = '#6c63ff'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = '#7a7a9d'
              el.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: '12px', color: '#7a7a9d', marginTop: '12px' }}>
        © 2025 Khushi Singh · B.Tech IT, GGSIPU New Delhi
      </div>
    </footer>
  )
}
