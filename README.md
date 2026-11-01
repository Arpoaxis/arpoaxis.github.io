# Gerard McCallion — Engineering Portfolio

**Live site:** https://arpoaxis.github.io/  
**Source:** https://github.com/Arpoaxis/arpoaxis.github.io

A published, responsive portfolio of academic software engineering, scientific computing, data/cloud, and database projects. It documents what was built, how it was evaluated, individual contributions where verifiable, and known limitations.

Gerard earned a B.S. in Computer Science from California State University, Dominguez Hills (2026) and is pursuing an M.S. in Electrical Engineering at California State University, Los Angeles. Embedded systems and avionics development are current learning directions, not claims of completed spacecraft systems.

## Featured project case studies

| Case study | Scope and evidence |
| --- | --- |
| [Solar Flare Prediction](projects/solar-flare.html) | 2026 CSUDH senior capstone. Python/PyTorch models using NASA SDO/SDOBenchmark imagery, active-region-disjoint and chronological evaluation, original sample-image panels, and results verified against [published experiment tables](https://github.com/Arpoaxis/solar-flare-pred/tree/main/reports/tables). [Source repository](https://github.com/Arpoaxis/solar-flare-pred). |
| [Restaurant Booking & Operations](projects/restaurant-booking.html) | 2025 five-person Java/Servlets/JSP/SQLite team application. Verified individual contributions, four authentic local-application screenshots using fictional demonstration records, and candid implementation limitations. The team's source repository is already public, but is **not linked from the case study** pending an account/credential and history audit. |
| [Google Cloud Dataproc Migration](projects/cloud-dataproc.html) | 2026 six-person academic project: PySpark preprocessing and driver-side TensorFlow/Keras training using Dataproc Serverless and a single-node cluster, with archived Serverless results and clearly stated evidence gaps. Not a continuously deployed service or a distributed neural-network training system. |
| [Watersports Rental Database](projects/watersports-database.html) | Five-person academic MySQL project. Four-table rental schema, example data, SQL reporting, and documented limitations of the original artifacts. |

Team projects are credited to their teams; contributions are identified separately when supported by source or Git history.

## Site implementation

- **HTML5, CSS3, and minimal vanilla JavaScript**, hosted on GitHub Pages. No React, Node.js, bundler, or build step is required.
- Responsive page layouts, accessible navigation and focus styles, subtle hover/focus interactions, and reduced-motion styling.
- Original project screenshots, annotated solar observation montages, result charts rendered as SVG, and diagrams reconstructed from project evidence.
- The solar homepage preview uses externally hosted NASA Scientific Visualization Studio media. The JavaScript attempts to display a frame from the same NASA animation as the resting poster, retaining a fallback still if the animation is unavailable. An internet connection is needed for that external media.

## Repository structure

```text
index.html                            Homepage and featured projects
projects/
  solar-flare.html                    Scientific ML case study
  restaurant-booking.html             Java team application case study
  cloud-dataproc.html                 Cloud/data migration case study
  watersports-database.html           Relational database case study
assets/
  styles.css                          Shared styles and responsive behavior
  main.js                             Footer year and NASA media logic
  favicon.svg
  results-ar-disjoint.svg             Source-derived solar test-results chart
  results-chronological.svg           Source-derived chronological chart
  screenshots/                        Four restaurant demonstration screenshots
  solar-samples/                      Two SDOBenchmark observation montages
README.md                             This document
TO_REVIEW_BEFORE_PUBLISHING.md        Ongoing verification and maintenance checklist
```

The `assets/screenshots/` and `assets/solar-samples/` directories each have their own provenance README.

## Run and check locally

There is no installation or build process. For a quick review, open `index.html` in a browser. Alternatively, from the repository root, use a basic local static server (if Python is installed):

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Check all four project links, assets and navigation on desktop and mobile widths. The NASA animation is requested from NASA's servers, so it may not appear offline or if the remote service is unavailable; the rest of the site is static.

## Publishing and maintenance

The site is published with **GitHub Pages** from the `main` branch at the repository root. Work on a small topic branch, open a pull request against `main`, review the diff and site impact, and **merge only after Gerard approves it**. GitHub Pages then publishes from the updated branch according to its deployment configuration.

When using the local Windows checkout (`E:\arpoaxis.github.io`), check for uncommitted changes before syncing after a merge; use `git pull --ff-only` when appropriate. There is no need to recreate the GitHub Pages repository or re-run initial setup instructions.

## Evidence, image credits, and publication boundaries

- **Solar results:** Charts are based on the capstone's committed AR-disjoint and chronological test-result CSVs. The two protocols have different test distributions; results should not be presented as directly interchangeable. The capstone is an academic experiment, **not operational solar-flare forecasting**.
- **Solar sample panels:** `assets/solar-samples/` contains annotated montages of original SDOBenchmark samples from NASA Solar Dynamics Observatory AIA/HMI observations. Sample labels are future-24-hour classification labels, not visual proof of a flare in those images. Source: [SDOBenchmark](https://i4ds.github.io/SDOBenchmark/).
- **Homepage NASA media:** The real September 8, 2017 M8.1 solar-flare imagery comes from [NASA Scientific Visualization Studio, visualization 12706](https://svs.gsfc.nasa.gov/12706/). The externally hosted still and AIA 131 Å GIF illustrate an event; **neither is a capstone model input or prediction**.
- **Restaurant screenshots:** `assets/screenshots/` contains local demonstration captures using fictional records, with captions distinguishing observed interactions from unverified or planned functionality. The seating-status hover overlay is illustrative.
- **Cloud and database diagrams:** Simplified illustrations of documented academic architectures and relationships, not screenshots of running cloud infrastructure.
- **Security and privacy:** The existing public `Arpoaxis/bookingtables` repository still requires a review of demonstration account/role files, any passwords or personal details, and relevant Git history before this site promotes a direct source link. Do not add real credentials, private student records, transcripts, or third-party course material to the public portfolio.
- **Embedded/avionics work:** Ongoing graduate labs and independent development are not portrayed as completed flight hardware or professional engineering experience.

See [the ongoing maintenance checklist](TO_REVIEW_BEFORE_PUBLISHING.md) for remaining reviews and proposed improvements.
