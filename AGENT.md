# AGENT.md

## Purpose
This file defines how humans and agents work in `minne` so project state is always recoverable from docs.

## Source of Truth
- `TASKS.md`: task registry, statuses, priorities, owners, acceptance criteria.
- `STATUS.md`: current snapshot (weekly/daily health, blockers, next actions).
- `HISTORY.md`: append-only chronology of changes and events.
- `MEMORY.md`: durable project memory (decisions, constraints, lessons).
- `DECISIONS.md`: architecture/product decisions in ADR-lite format.

## Workflow (Required)
1. Before starting work, create or update a task in `TASKS.md`.
2. During work, keep task status current (`IN_PROGRESS`/`BLOCKED`/`REVIEW`).
3. After each meaningful change, append a record to `HISTORY.md`.
4. If a new rule/constraint/lesson appears, add it to `MEMORY.md`.
5. If a decision has long-term impact, record it in `DECISIONS.md`.
6. Update `STATUS.md` at least once per working day.

## Task Status Model
- `BACKLOG`: known, not planned.
- `PLANNED`: approved for near-term execution.
- `IN_PROGRESS`: actively worked on.
- `BLOCKED`: cannot proceed due to dependency/risk.
- `REVIEW`: implementation done, awaiting verification/review.
- `DONE`: accepted and closed.
- `CANCELLED`: intentionally dropped.

## Prioritization
- `P0`: critical production/business blocker.
- `P1`: high-value near-term deliverable.
- `P2`: normal priority.
- `P3`: optional improvement.

## Definition of Done
A task is `DONE` only when all are true:
- Acceptance criteria are met.
- Required tests/checks are passed (or explicitly waived with reason).
- User-facing/internal docs updated.
- `HISTORY.md`, `STATUS.md`, and task entry updated.

## Branch/Commit Best Practices
- Branch naming: `feat/<id>-<slug>`, `fix/<id>-<slug>`, `chore/<id>-<slug>`.
- Commit format: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, etc.).
- Keep commits atomic and scoped to one intent.

## Handoff Checklist
Before handoff/review:
- Task has latest status and short worklog.
- Blockers and open questions are explicit.
- Next action is assigned and time-bounded.
