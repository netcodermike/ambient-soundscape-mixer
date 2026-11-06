# Ambient Soundscape Mixer

Mix synthesized surf, rain, wind, and drone layers locally with a sleep fade timer.

**Language:** JavaScript · **License:** MIT · **Data:** Local by default

## What it does

- Four independent procedural layers
- Live per-layer gain control
- Timed final fade and stop

## Requirements

Node.js 22+ for tests; Python 3 for the optional local HTTP server.

## Install, validate, and run

```sh
npm install --ignore-scripts
npm test
npm start
```

Open http://127.0.0.1:8080 in a modern browser. TypeScript source compiles to `dist/` when running `npm test` or `npm run build`. Start audio with an explicit button click.

## Usage and examples

See [docs/usage.md](docs/usage.md) for a walkthrough and [docs/architecture.md](docs/architecture.md) for implementation details. Tests are deterministic and do not require an exchange, paid API, external model, microphone, or private data.

## Boundaries

Procedural noise is an approximation of natural sounds. No therapeutic claims.

## Privacy

No analytics or accounts are built in. Local file tools process only the paths you supply. For model-server and weather apps, the interface and usage guide identify the destination and the data sent. Do not commit personal input files, model credentials, or generated recordings.

## Development

Run the validation commands above before submitting changes. GitHub Actions runs these checks on pushes and pull requests. See the workflow for the reproducible toolchain. A successful workflow verifies the tested paths; manual audio-device behavior is documented separately.
