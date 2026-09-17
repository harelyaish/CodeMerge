<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge-releases/main/banner.png" alt="CodeMerge — the menu-bar utility for macOS" width="100%">
</p>

**CodeMerge** is a macOS menu-bar utility that bundles a dozen small daily-use tools into one dropdown, so you stop juggling separate apps (and their separate Dock icons, keyboard shortcuts, and menu bars) for things you do constantly. Everything lives behind a single icon in your menu bar — click it, or use a global keyboard shortcut, and it's there.

Free to try for 30 days, full features. $5 once, for life — no subscription, no recurring charge.

[![Buy CodeMerge — $5](https://img.shields.io/badge/Buy_CodeMerge-%245_lifetime-FF6B35?style=for-the-badge)](https://harelyaish.gumroad.com/l/codemerge)
[![Download latest release](https://img.shields.io/badge/Download-latest_release-black?style=for-the-badge&logo=apple)](https://github.com/harelyaish/CodeMerge-releases/releases/latest)

This repo hosts only the compiled app — no source code.

## What's inside

- **App launcher** — pin your most-used apps to the dropdown for one-click launching, no Dock hunting.
- **Custom window layouts** — split your screen into a grid (2×, 4×, 8×, or a layout you define) and drop windows into cells by dragging them in a live preview. Windows that don't fit the current grid wait in an overflow tray until you assign them a spot.
- **Window switching** — cycle between your split layout and full-screen-per-app with one shortcut; switching windows raises and activates the one you land on.
- **Screenshots & screen recordings** — capture a region or a window without digging through system shortcuts.
- **Clipboard history** — CodeMerge remembers what you've copied so you can paste something from a few steps back, not just the last thing.
- **File shelf** — drag files onto the menu bar icon to hold onto them temporarily, then drag them out again wherever you need them — useful for moving files between apps or folders without juggling Finder windows.
- **System stats at a glance** — CPU, memory, disk, battery, and temperature, always visible from the dropdown.
- **Quick notes, timers, unit/currency conversion, weather, a command palette, and a one-click Desktop/Dock declutter** — the small utilities you'd otherwise open a separate app for.
- **Accent themes** — match the dropdown's look to your system theme or pick your own accent color.

## Install

Paste this into Terminal and press Return:

```bash
curl -fsSL https://raw.githubusercontent.com/harelyaish/CodeMerge-releases/main/install.sh | bash
```

That downloads the app, installs it to `/Applications`, and opens it — no extra "this app is from an unidentified developer" step needed, since it never goes through a browser download.

### Prefer not to use Terminal?

[Download the zip directly](https://github.com/harelyaish/CodeMerge-releases/releases/latest/download/CodeMerge.zip), unzip it, drag `CodeMerge.app` to Applications, then **right-click the app → Open** the first time (macOS blocks a plain double-click on an app downloaded this way — right-click → Open bypasses that one-time warning).

## After installing

CodeMerge lives in your menu bar — click its icon to open the dropdown, or right-click it for quick actions (Lock Screen, Settings, and — once your trial ends — buying a license). You get full access for 30 days; after that, [buy a lifetime license for $5](https://harelyaish.gumroad.com/l/codemerge) and paste the key Gumroad emails you into **Settings → License**.

## Updates

CodeMerge checks for updates itself — **Settings → General → Check for Updates…** — no need to reinstall from here.

## Requirements

macOS 13 (Ventura) or later.
