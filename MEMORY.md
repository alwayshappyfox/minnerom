# MEMORY.md

## How to Use
Store only long-lived context that future contributors/agents must not lose.
Do not duplicate ephemeral task chatter.

## Project Identity
- Project: `minne`
- Scope (current): website-oriented product skeleton.
- Repository state at creation (2026-05-07): new workspace, no code yet.

## Stable Constraints
- Single source of project coordination is markdown docs in repo root.
- Task lifecycle and status terms are defined in `AGENT.md`.

## Decisions Snapshot
- Governance-first bootstrap adopted on 2026-05-07.
- Detailed decision records are tracked in `DECISIONS.md`.

## Risks to Watch
- Stack not chosen yet for `website` -> may stall implementation.
- GitHub remote not connected yet -> no backup/collab pipeline.
- CI/CD not configured -> quality gates absent.

## Working Agreements
- Always append meaningful work events to `HISTORY.md`.
- Keep `STATUS.md` current daily while active development continues.
- Use task IDs (`MNN-###`) across commits, PRs, and notes.

## Change Log (Memory Updates)
### 2026-05-07
- Initialized durable memory structure.
- Captured baseline constraints and key startup risks.
