#!/bin/bash
# Installs CodeMerge without the Gatekeeper "unidentified developer" warning.
#
# That warning is triggered by the com.apple.quarantine flag macOS attaches
# to anything downloaded via a browser — not by anything about the app
# itself. curl never sets that flag, so a copy fetched this way launches
# cleanly with no extra "Open Anyway" step needed.
set -euo pipefail

# GitHub's "latest" redirect always points at whichever release is newest,
# so this never needs bumping by hand when a new version ships.
URL="https://github.com/harelyaish/CodeMerge/releases/latest/download/CodeMerge.zip"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "Downloading CodeMerge..."
curl -fsSL -o "$TMP_DIR/CodeMerge.zip" "$URL"

echo "Installing to /Applications..."
if [ -d "/Applications/CodeMerge.app" ]; then
    rm -rf "/Applications/CodeMerge.app"
fi
ditto -x -k "$TMP_DIR/CodeMerge.zip" /Applications

echo "Done. Launching CodeMerge..."
open /Applications/CodeMerge.app
