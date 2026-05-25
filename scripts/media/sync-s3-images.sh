#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
AWS_BIN_DEFAULT="/Users/foxhappy/Library/Python/3.9/bin/aws"
AWS_BIN="${AWS_BIN:-$AWS_BIN_DEFAULT}"

S3_ENDPOINT="${S3_ENDPOINT:-https://s3.firstvds.ru}"
S3_BUCKET="${S3_BUCKET:-minnerom-storage}"
S3_PREFIX="${S3_PREFIX:-web}"
AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION:-default}"
JPEG_QUALITY="${JPEG_QUALITY:-86}"

if [[ ! -x "$AWS_BIN" ]]; then
  echo "AWS CLI not found at $AWS_BIN"
  echo "Set AWS_BIN=/path/to/aws"
  exit 1
fi

if [[ -z "${AWS_ACCESS_KEY_ID:-}" || -z "${AWS_SECRET_ACCESS_KEY:-}" ]]; then
  echo "Missing AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY"
  exit 1
fi

if ! command -v sips >/dev/null 2>&1; then
  echo "sips is required to resize images"
  exit 1
fi

export AWS_DEFAULT_REGION
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

upload_variant() {
  local source_file="$1"
  local object_prefix="$2"
  shift 2
  local widths=("$@")

  for width in "${widths[@]}"; do
    local out_file="${TMP_DIR}/$(echo "$object_prefix" | tr '/' '_')-${width}.jpg"
    sips -Z "$width" -s format jpeg -s formatOptions "$JPEG_QUALITY" "$source_file" --out "$out_file" >/dev/null

    local key="${S3_PREFIX}/${object_prefix}-${width}.jpg"
    "$AWS_BIN" --endpoint-url "$S3_ENDPOINT" s3 cp "$out_file" "s3://${S3_BUCKET}/${key}" \
      --acl public-read \
      --content-type image/jpeg \
      --cache-control "public,max-age=31536000,immutable" >/dev/null
    echo "uploaded: ${key}"
  done
}

SOURCE_MAIN="${ROOT_DIR}/photo/background.jpeg"
if [[ ! -f "$SOURCE_MAIN" ]]; then
  echo "Source file not found: $SOURCE_MAIN"
  exit 1
fi

upload_variant "$SOURCE_MAIN" "home/hero/background" 640 960 1280 1600 1920 2560 3200
upload_variant "$SOURCE_MAIN" "photos/morning-light/main" 480 768 1024 1280 1600 1920 2560
upload_variant "$SOURCE_MAIN" "products/fine-art-print-a3/main" 480 768 1024 1280 1600 1920 2560
upload_variant "$SOURCE_MAIN" "products/ru-photo-session/main" 480 768 1024 1280 1600 1920 2560
upload_variant "$SOURCE_MAIN" "products/en-license-pack/main" 480 768 1024 1280 1600 1920 2560

echo "done: https://${S3_BUCKET}.s3.firstvds.ru/${S3_PREFIX}/..."
