#!/bin/bash

# Sync CangjieCorpus documentation
# Usage: ./scripts/sync-corpus.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DOCS_DIR="$PROJECT_DIR/skills/cangjie-dev/docs"
TEMP_DIR="/tmp/CangjieCorpus"

echo "Syncing CangjieCorpus..."

# Clone or update CangjieCorpus
if [ -d "$TEMP_DIR" ]; then
    echo "Updating existing repository..."
    cd "$TEMP_DIR"
    git pull --rebase
else
    echo "Cloning repository..."
    git clone --depth 1 https://github.com/Cangjie-Pub/CangjieCorpus.git "$TEMP_DIR"
fi

# Create docs directories
mkdir -p "$DOCS_DIR/syntax"
mkdir -p "$DOCS_DIR/stdlib"
mkdir -p "$DOCS_DIR/tools"
mkdir -p "$DOCS_DIR/examples"

# Sync documentation
echo "Copying syntax documentation..."
cp -r "$TEMP_DIR/manual/source_zh_cn/"* "$DOCS_DIR/syntax/"

echo "Copying stdlib documentation..."
cp -r "$TEMP_DIR/libs/std/"* "$DOCS_DIR/stdlib/"

echo "Copying tools documentation..."
cp -r "$TEMP_DIR/tools/source_zh_cn/"* "$DOCS_DIR/tools/"

echo "Copying examples..."
if [ -d "$TEMP_DIR/extra" ]; then
    cp -r "$TEMP_DIR/extra/"* "$DOCS_DIR/examples/" 2>/dev/null || true
fi

echo ""
echo "Sync complete!"
echo "Documentation updated in: $DOCS_DIR"
echo ""
echo "File counts:"
echo "  - syntax:   $(find "$DOCS_DIR/syntax" -name "*.md" | wc -l) files"
echo "  - stdlib:   $(find "$DOCS_DIR/stdlib" -name "*.md" | wc -l) files"
echo "  - tools:    $(find "$DOCS_DIR/tools" -name "*.md" | wc -l) files"
echo "  - examples: $(find "$DOCS_DIR/examples" -name "*.md" 2>/dev/null | wc -l) files"
