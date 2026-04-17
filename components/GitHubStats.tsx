'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// ─── Set your GitHub username here ───────────────────────────────────────────
const GITHUB_USERNAME = 'khushi01singh'
// ─────────────────────────────────────────────────────────────────────────────

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  name: string
}

interface Repo {
  name: string
  description: string | null
  stargazers_count: number
  language: string | null
  html_url: string
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  default: '#6c63ff',
}

export default function GitHubStats() {
  const ref = useRef<HTMLElement>(null)
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=4`),
        ])
        if (userRes.ok) setStats(await userRes.json())
        if (reposRes.ok) setRepos(await reposRes.json())
      } catch {
        // silently fail
      } finally {
        setLoading(false)
      }
    }
    fetchGitHub()
  }, [])

  return (
    <section ref={ref} id="github-section" className="reveal" style={{ padding: '72px 32px' }}>
      <span style={{ display: 'inline-block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6c63ff', fontWeight: 600, marginBottom: '12px' }}>
        Open Source
      </span>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '40px', lineHeight: 1.1 }}>
        GitHub{' '}
        <span style={{ background: 'linear-gradient(120deg, #00f5d4, #6c63ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Activity
        </span>
      </h2>

      {loading ? (
        <div style={{ color: '#7a7a9d', fontSize: '14px' }}>Loading GitHub data...</div>
      ) : (
        <>
          {/* Stats row */}
          {stats && (
            <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
              {[
                { val: stats.public_repos, label: 'Repositories' },
                { val: stats.followers, label: 'Followers' },
                { val: stats.following, label: 'Following' },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: '#0f0f1a',
                    border: '1px solid rgba(108,99,255,0.2)',
                    borderRadius: '12px',
                    padding: '20px 28px',
                    textAlign: 'center',
                    minWidth: '120px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '28px', fontWeight: 800, background: 'linear-gradient(120deg, #6c63ff, #00f5d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: '11px', color: '#7a7a9d', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Top repos */}
          {repos.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ borderColor: 'rgba(108,99,255,0.5)', y: -4 }}
                  style={{
                    background: '#0f0f1a',
                    border: '1px solid rgba(108,99,255,0.2)',
                    borderRadius: '12px',
                    padding: '18px 20px',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 700, color: '#f0f0ff' }}>
                      {repo.name}
                    </span>
                    <span style={{ fontSize: '12px', color: '#7a7a9d', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      ★ {repo.stargazers_count}
                    </span>
                  </div>
                  {repo.description && (
                    <p style={{ fontSize: '12px', color: '#7a7a9d', lineHeight: 1.5, marginBottom: '12px' }}>
                      {repo.description.length > 72 ? repo.description.slice(0, 72) + '…' : repo.description}
                    </p>
                  )}
                  {repo.language && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: LANG_COLORS[repo.language] || LANG_COLORS.default, display: 'inline-block' }} />
                      <span style={{ fontSize: '11px', color: '#7a7a9d' }}>{repo.language}</span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          )}

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#6c63ff', textDecoration: 'none', fontWeight: 600, marginTop: '24px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#00f5d4')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#6c63ff')}
          >
            View all repositories on GitHub →
          </a>
        </>
      )}
    </section>
  )
}
