# STATUS.md

## Snapshot (2026-05-07)
- Overall: `YELLOW` (foundation ready, implementation not started).
- Focus: establish project operations and prepare Git/GitHub pipeline.

## Progress Summary
- Completed: governance docs bootstrap (`MNN-001`).
- In progress: none.
- Blocked: GitHub connection (`MNN-002`).
- Planned/Backlog: stack decision and CI setup (`MNN-003`, `MNN-004`).

## Blockers
- Missing GitHub repository URL.
- Missing selected auth path (SSH or HTTPS+PAT).
- Product/technical scope for `website` not finalized.

## Next 24h Actions
1. Provide repo URL and connect `origin`.
2. Decide stack for `website` and record in `DECISIONS.md`.
3. Scaffold project and add basic CI checks.

## Risks
- Delay in stack decision increases rework probability.
- No remote backup until GitHub sync is complete.

## Update Rule
Refresh this snapshot at least once per working day while active development continues.
