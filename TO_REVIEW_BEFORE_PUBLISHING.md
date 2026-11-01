# Portfolio review and maintenance checklist

**Reconciled with the published repository:** October 31, 2026.

This is an **ongoing maintenance checklist**, not an initial launch checklist. Checked items have existing repository evidence or were confirmed in the portfolio handoff; unchecked items still require review or implementation. Do not interpret publication as proof that every project or external dependency has been independently reproduced.

## Already published or documented

- [x] GitHub Pages portfolio published at https://arpoaxis.github.io/.
- [x] Four case-study pages: Solar Flare Prediction, Restaurant Booking & Operations, Google Cloud Dataproc Migration, and Watersports Rental Database.
- [x] Solar PR-AUC, TSS, and Brier results documented with charts drawn from the committed capstone results tables; two SVG charts are present in `assets/`.
- [x] Two authentic SDOBenchmark sample montages present in `assets/solar-samples/`, labeled as input observations with subsequent 24-hour target labels.
- [x] Four authentic Restaurant Booking screenshots present in `assets/screenshots/` and shown in the case study; records were confirmed as fictional.
- [x] Restaurant team publication permission confirmed by a project participant; the five-person team and independently verified individual contributions are identified on the site.
- [x] Cloud Dataproc case study documents Serverless and single-node cluster execution, archived metrics, driver-side model training, and evidence limitations.
- [x] Watersports database case study documents the relational model, team context, and known gaps in recovered project files.
- [x] Homepage includes source-based cloud/database diagrams and a restrained NASA solar-animation preview with visible source attribution and an illustrative-footage disclaimer.
- [x] Basic responsive styling, keyboard-focus support, and reduced-motion rules are implemented in source. A full device/accessibility audit is still outstanding.

## Priority — privacy and publication safety

- [ ] **Audit the already-public `Arpoaxis/bookingtables` repository** for account and role CSVs, names, email addresses, phone numbers, demonstration passwords, connection strings, secrets, and other sensitive data. Do not assume all historical content is safe.
- [ ] Inspect relevant **Git history**, not just the current branch. If any real credentials or personal records are exposed, plan appropriate remediation (including credential rotation where applicable) and discuss any history changes with the team before acting.
- [ ] After confirming it is safe and appropriate, add a direct Restaurant Booking source link to the case study and test it. Team publication permission alone does not establish that the repository content is sanitized.
- [ ] Continue checking public screenshots, new project artifacts, and outbound links for privacy, provenance, license and attribution issues before adding them.

## Priority — accuracy and documentation

- [ ] Compare detailed Solar Flare narrative and any *future* calibration claims with the final paper, committed scripts, and experiment tables. Do not imply an implemented SHARP baseline, verified ECE chart, complete temporal-window purging, or live forecasting.
- [ ] Improve clean-machine reproducibility instructions and targeted tests in the separate `solar-flare-pred` repository; the raw dataset, checkpoints, path assumptions, and dependencies still need attention.
- [ ] Consider concise **Challenge → My Contribution → Result** summaries at the top of each case study, with explicit team-vs-individual distinctions.
- [ ] Update `assets/solar-samples/README.md`: its upload-before-merging instruction is stale because both PNGs are already committed.
- [ ] Recheck and maintain source/media credits when changing scientific images, diagrams, NASA assets, or third-party material.

## Priority — user experience and upkeep

- [ ] Test the deployed site at desktop and mobile widths: navigation, all four pages, image enlargement, SVGs, links, screen-reader labeling where applicable, and text contrast.
- [ ] Check keyboard-only operation, focus visibility, reduced-motion behavior and touch-device presentation.
- [ ] Check the externally hosted NASA GIF/still loading, failure fallback, performance and attribution. The existing restrained animation is accepted; no redesign is requested.
- [ ] Verify the site's public contact links and GitHub profile presentation remain accurate.
- [ ] Decide whether a public, contact-information-limited PDF resume would be useful; **none is currently linked**.

## Future additions — not completed work

- [ ] Review completed EE 3450 Tiva C labs as potential evidence for a **single** graduate embedded-systems case study, selecting only strong, tested examples after reviewing starter-code attribution and sharing permissions.
- [ ] Add independent STM32/CubeSat-inspired work only after meaningful firmware, hardware tests and documentation exist. It remains in development.
- [ ] Consider a historical solar-data replay/automated-inference extension as a separate independent project, not an implemented capstone feature.
- [ ] Consider a short, annotated Restaurant Booking walkthrough only if it adds meaningful demonstration evidence.

## Deliberate boundaries

- Historical coursework archives are not described as newly developed projects merely because they were uploaded to GitHub later.
- Team accomplishments are not represented as single-author work.
- No production cloud deployment, operational solar forecasting, flight software, HIL expertise, professional embedded engineering, or unsupported technology claims.
- No invented performance metrics, unverified feature completion, placeholder demos, or premature publication of sensitive source material.
