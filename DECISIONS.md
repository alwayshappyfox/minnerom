# DECISIONS.md

ADR-lite log for durable decisions.

## Template
### DEC-XXX: <Title>
- Date: YYYY-MM-DD
- Status: Proposed | Accepted | Superseded
- Context:
- Decision:
- Consequences:
- Related Tasks:

## Decisions
### DEC-001: Governance-First Project Bootstrap
- Date: 2026-05-07
- Status: Accepted
- Context:
  - New project has no codebase/process yet.
  - Need reliable continuity between contributors/agents.
- Decision:
  - Introduce mandatory root documentation set (`AGENT.md`, `TASKS.md`, `STATUS.md`, `HISTORY.md`, `MEMORY.md`, `DECISIONS.md`).
  - Enforce documented status lifecycle and append-only history.
- Consequences:
  - Slight documentation overhead per change.
  - Much stronger recoverability and handoff quality.
- Related Tasks:
  - MNN-001
