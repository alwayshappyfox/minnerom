#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${1:-.}"

if ! command -v git >/dev/null 2>&1; then
  echo "ERROR: git is required for secrets check."
  exit 2
fi

if [ ! -d "${REPO_DIR}/.git" ]; then
  echo "ERROR: ${REPO_DIR} is not a git repository."
  exit 2
fi

cd "${REPO_DIR}"

if ! command -v grep >/dev/null 2>&1; then
  echo "ERROR: grep is required for secrets check."
  exit 2
fi

tmp_report="$(mktemp)"
trap 'rm -f "${tmp_report}"' EXIT

scan_pattern() {
  local label="$1"
  local regex="$2"

  while IFS= read -r file; do
    if grep -IEn "${regex}" "${file}" >/dev/null 2>&1; then
      echo "[${label}] ${file}" >>"${tmp_report}"
      grep -IEn "${regex}" "${file}" >>"${tmp_report}" || true
      echo >>"${tmp_report}"
    fi
  done < <(git ls-files)
}

# High-signal secret patterns only. Avoid noisy generic regexes.
scan_pattern "private_key" "-----BEGIN (RSA|OPENSSH|EC|DSA|PGP) PRIVATE KEY-----"
scan_pattern "aws_access_key_id" "aws_access_key_id[[:space:]]*[:=][[:space:]]*['\\\"]?[A-Z0-9]{16,}"
scan_pattern "aws_secret_access_key" "aws_secret_access_key[[:space:]]*[:=][[:space:]]*['\\\"]?[A-Za-z0-9/+_=.-]{20,}"
scan_pattern "generic_token_assignment" "(api[_-]?key|auth[_-]?token|secret[_-]?key)[[:space:]]*[:=][[:space:]]*['\\\"][A-Za-z0-9/+_=.-]{20,}['\\\"]"

if [ -s "${tmp_report}" ]; then
  echo "ERROR: potential secrets found:"
  cat "${tmp_report}"
  exit 1
fi

echo "OK: secrets scan passed."
