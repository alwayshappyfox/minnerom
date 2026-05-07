# TASKS.md

## Status Legend
`BACKLOG` | `PLANNED` | `IN_PROGRESS` | `BLOCKED` | `REVIEW` | `DONE` | `CANCELLED`

## Active Registry
| ID | Title | Status | Priority | Owner | Updated | Depends On |
|---|---|---|---|---|---|---|
| MNN-001 | Bootstrap project governance docs | DONE | P1 | @agent | 2026-05-07 | - |
| MNN-002 | Initialize git and connect GitHub remote | BLOCKED | P1 | @agent | 2026-05-07 | GitHub repo URL + auth |
| MNN-003 | Decide web stack for `website` | PLANNED | P1 | @owner | 2026-05-07 | Product requirements |
| MNN-004 | Setup CI quality gates (lint/test/build) | BACKLOG | P2 | @owner | 2026-05-07 | Stack selection |

## Task Cards

### MNN-001
- Title: Bootstrap project governance docs
- Status: `DONE`
- Priority: `P1`
- Owner: `@agent`
- Created: `2026-05-07`
- Description: Create best-practice operational docs with history, statuses, and task tracking.
- Acceptance Criteria:
  - `AGENT.md`, `MEMORY.md`, `TASKS.md`, `HISTORY.md`, `STATUS.md`, `DECISIONS.md` exist.
  - Files contain practical templates and initial project entries.
- Worklog:
  - 2026-05-07: Completed initial documentation baseline.

### MNN-002
- Title: Initialize git and connect GitHub remote
- Status: `BLOCKED`
- Priority: `P1`
- Owner: `@agent`
- Created: `2026-05-07`
- Blocker: Missing target GitHub repository URL and authentication context.
- Acceptance Criteria:
  - Repository initialized with `main` default branch.
  - Remote `origin` configured.
  - First push to GitHub succeeds.
- Next Action:
  - Provide GitHub repo URL and preferred auth method (SSH or HTTPS+PAT).

### MNN-003
- Title: Decide web stack for `website`
- Status: `PLANNED`
- Priority: `P1`
- Owner: `@owner`
- Created: `2026-05-07`
- Description: Select framework/runtime and baseline conventions.
- Acceptance Criteria:
  - Decision captured in `DECISIONS.md`.
  - Initial project scaffold created in `website/`.

### MNN-004
- Title: Setup CI quality gates
- Status: `BACKLOG`
- Priority: `P2`
- Owner: `@owner`
- Created: `2026-05-07`
- Description: Add minimal CI for lint/test/build and PR gating.

## New Task Template
### MNN-XXX
- Title:
- Status: `BACKLOG`
- Priority: `P2`
- Owner:
- Created: `YYYY-MM-DD`
- Description:
- Acceptance Criteria:
- Worklog:
  - YYYY-MM-DD:
