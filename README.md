# WebSpell-Codex

> Where pixels once puzzled me, patterns began to whisper.

This repository is my digital forge, the place where raw curiosity meets structure, bugs become teachers, and small experiments evolve into engineered systems. Every folder is a checkpoint in a self-taught web development journey, captured commit by commit as the work moved from first markup to working backend APIs.

It is a learning archive, not a product. The lesson code is intentionally pedagogical: it favors clarity over cleverness so the ideas stay readable months later.

## What lives here

The repository is organized as numbered sections that follow the arc from front end to back end.

| Range | Theme |
| --- | --- |
| Section 01 to 04 | Front end foundations and HTML |
| Section 05 to 12 | CSS, Flexbox, Grid, Bootstrap, and design |
| Section 13 | Front end capstone project |
| Section 14 to 19 | JavaScript, the DOM, and jQuery |
| Section 21 | Unix command line |
| Section 22 to 25 | Backend with Node.js, Express, and EJS |
| Section 28 to 30 | Working with and building REST APIs |
| Section 31 to 32 | SQL and NoSQL fundamentals |
| WebDev_Quickies | Visual notes and quick reference dumps |

## Tech covered

HTML, CSS, Flexbox, Grid, Bootstrap, vanilla JavaScript, the DOM, jQuery, Node.js, Express, EJS, REST APIs, and an introduction to SQL and NoSQL.

## Running the Node sub-projects

Several backend sections ship their own `package.json`. Each one is self contained, so install and run from inside the specific lesson folder:

```bash
cd "Section_24 ExpressJS/3.1 Express Server"
npm install
node index.js
```

Server lessons typically listen on `http://localhost:3000`.

## Security and hygiene

Even though this is a learning archive, the Node sub-projects are kept advisory clean:

- npm `overrides` pin transitive dependencies to patched versions, with caret ranges that stay in major.
- Dependabot watches each Node sub-project weekly.
- CodeQL `security-extended` runs on every push and pull request to `main`, plus a weekly schedule.
- Secret scanning and push protection are enabled, and `.env` files are gitignored and never committed.

See [SECURITY.md](SECURITY.md) for how to report a vulnerability.

## A note on the lessons

The credential placeholders in the API sections are intentionally blank. They are meant to be filled in locally against the public practice API used in the course, and should never be committed.
