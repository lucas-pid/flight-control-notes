# Useful Commands

Commands used most often. See [Simulink Basics](../simulink/basics.md) for an example of cross-linking between sections.

## Basics

```bash
git status
git pull --rebase
git checkout -b feature/short-name
git add -p
git commit -m "Add short, imperative summary"
git push -u origin HEAD
```

## History and diff

```bash
git log --oneline -10
git diff
git diff --staged
```

## Undo (safe order)

| Situation | Command |
|-----------|---------|
| Undo file change (unstaged) | `git restore <file>` |
| Unstage a file | `git restore --staged <file>` |
| Undo last commit, keep changes | `git reset --soft HEAD~1` |

!!! note "Prefer restore over reset for beginners"
    `git restore` only touches files. `git reset --hard` discards work — avoid it unless you mean it.

## Footnote example

Commit messages in imperative mood read better in logs[^1].

[^1]: For example: "Add PID example" instead of "Added PID example".
