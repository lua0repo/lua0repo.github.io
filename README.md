# Luther Professional Portfolio

A GitHub Pages-ready personal portfolio and professional marketing site built around Luther's real, verifiable capability stack — not a generic chronological CV.

## Positioning

**Security Operations Manager | 12+ Years SOC/SIEM & Incident Response | IT Consulting | AI-Enabled Automation**

## Structure

```text
luther-professional-portfolio/
├── index.html
├── assets/
│   ├── style.css
│   └── app.js
├── docs/
│   └── resume.html
└── README.md
```

## What's real vs. what's a study roadmap

To protect credibility, the site labels every GitHub repo by evidence level instead of presenting everything as equal proficiency:

| Label | Meaning | Repos |
|---|---|---|
| **Production experience** | Verified 12+ years of real SOC/SIEM/IR work | `Multiple-enterprise-security-platform` |
| **Built tool** | Actual working code | `Threat-Hunting-Python-Tools` |
| **Study roadmap / skill-mapping** | Curated learning banks, not completed builds — shown honestly as breadth, not proof of production work | `PythonProject`, `XML-project`, `ODBC-project`, `SOAP-Project`, `JSONProject`, `RESTfulProject` |
| **Experimentation** | Hands-on but not production-grade | `LLM-Prompt-Engineering-Experiments` |

**Do not relabel the study-roadmap repos as "built projects."** If any of the 60 ideas in those repos get actually implemented, move that specific one into Proof of Work with its own repo/folder link — don't upgrade the whole repo's label.

## Still pending

- Correct GitHub URLs for: PowerShell automation repo, bug bounty repo, and any renamed `python-tecnology` repo (all 404'd under the names provided).
- Verified employer names, dates, education, direct contact email/phone.
- Quantified achievements (MTTR reduction, incident volume, team size, audit outcomes, etc.) — these carry the most weight with security-hiring managers and should be added once available.

## Publish (this repo: lua0repo/lua-cybersecurity-prof.github.io)

Because the repo name doesn't exactly match the account name (`lua0repo`), GitHub serves it as a **project page**, not the root domain. Live URL once published:

```
https://lua0repo.github.io/lua-cybersecurity-prof.github.io/
```

1. Copy `index.html`, `assets/`, `docs/`, `robots.txt` and `sitemap.xml` into the repository root (not a subfolder).
2. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Folder: `/(root)`. Save.
3. Wait 1–2 minutes, then open the URL above to confirm it's live.
4. Replace `YOUR_EMAIL@example.com` in `index.html`.
5. Confirm the LinkedIn URL (`lua-cybersecurity-prof`) is correct.
6. Add the pending items above (employer dates, education, contact, metrics).
7. To get indexed faster: add this site as a property in Google Search Console, verify ownership, and use "Request Indexing" on the homepage. `robots.txt` and `sitemap.xml` are already included and unblocked (`Allow: /`) — just don't add a `noindex` meta tag to any page you want crawled.

## Suggested future modules

- `/case-studies/` — sanitized SOC incidents: situation, action, outcome (no client-identifying detail)
- `/architecture/` — SIEM/detection architecture diagrams
- `/lab/` — the actual code once study-roadmap items get built out
- `/insights/` — writeups on IR methodology, compliance mapping, etc.
