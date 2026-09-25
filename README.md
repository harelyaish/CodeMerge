<p align="center">
  <a href="https://harelyaish.github.io/CodeMerge/"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/site-banner.svg" alt="Try CodeMerge live in your browser — harelyaish.github.io/CodeMerge" width="100%"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/banner.png" alt="CodeMerge — the menu-bar utility for macOS" width="100%">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=18&pause=1800&color=FF6B35&center=true&vCenter=true&width=600&lines=One+menu+bar.+A+dozen+tools.;Screenshots%2C+clipboard%2C+timers%2C+weather...;Custom+window+layouts%2C+one+shortcut+away.;%245+once.+No+subscription.+Ever." alt="Typing SVG">
</p>

<p align="center">
  <img src="https://img.shields.io/github/downloads/harelyaish/CodeMerge/total?style=flat-square&label=downloads&color=FF6B35">
  <img src="https://img.shields.io/badge/macOS-13%2B-black?style=flat-square&logo=apple">
  <img src="https://img.shields.io/badge/license-personal%20use-lightgrey?style=flat-square">
  <img src="https://img.shields.io/github/v/release/harelyaish/CodeMerge?style=flat-square&color=FF6B35">
  <a href="https://github.com/harelyaish"><img src="https://img.shields.io/badge/follow-%40harelyaish-black?style=flat-square&logo=github"></a>
  <a href="https://www.paypal.com/paypalme/HarelYaish"><img src="https://img.shields.io/badge/tip-PayPal-00457C?style=flat-square&logo=paypal&logoColor=white"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/terminal-hero.svg" alt="CodeMerge in a terminal — the app logo, a dozen tools, $5 once" width="100%">
</p>

**CodeMerge** is a macOS menu-bar utility that bundles dozens of small daily-use tools into one dropdown — and, on Macs with a notch, into the notch itself, so you stop juggling separate apps (and their separate Dock icons, keyboard shortcuts, and menu bars) for things you do constantly. Everything lives behind a single icon in your menu bar — click it, or use a global keyboard shortcut, and it's there.

Free to try for 30 days, full features. $5 once, for life — no subscription, no recurring charge.

[![Buy CodeMerge — $5](https://img.shields.io/badge/Buy_CodeMerge-%245_lifetime-FF6B35?style=for-the-badge)](https://harelyaish.gumroad.com/l/codemerge)
[![Download latest release](https://img.shields.io/badge/Download-latest_release-black?style=for-the-badge&logo=apple)](https://github.com/harelyaish/CodeMerge/releases/latest)
[![Website](https://img.shields.io/badge/Website-try_it_live-FF6B35?style=for-the-badge&logo=safari&logoColor=white)](https://harelyaish.github.io/CodeMerge/)

## Contents

[Install](#install) · [If macOS won't open the app](#if-macos-wont-open-the-app) · [After installing](#after-installing) · [Features](#features) · [The notch](#the-notch--new-in-12) · [Settings](#settings-in-brief) · [Permissions](#permissions-it-may-ask-you-for) · [Updates](#updates) · [FAQ](#faq) · [Support](#support) · [License](#license) · [Uninstalling](#uninstalling) · [Changelog](#changelog)

## Install

Paste this into Terminal and press Return:

```bash
curl -fsSL https://raw.githubusercontent.com/harelyaish/CodeMerge/main/install.sh | bash
```

That downloads the app, installs it to `/Applications`, and opens it — no extra "this app is from an unidentified developer" step needed, since it never goes through a browser download. **This is the recommended way to install** — it's the only method that skips macOS's blocking dialog entirely.

### Prefer not to use Terminal?

[Download the zip directly](https://github.com/harelyaish/CodeMerge/releases/latest/download/CodeMerge.zip), unzip it, and drag `CodeMerge.app` to Applications. Because this went through a browser, macOS marks the file "quarantined" and will refuse to open it the first time — see **[If macOS won't open the app](#if-macos-wont-open-the-app)** below for the exact steps.

### Prefer Homebrew?

```bash
brew tap harelyaish/codemerge https://github.com/harelyaish/CodeMerge
brew install --cask codemerge
```

Homebrew's download is also quarantined by macOS the same way a browser download is, so the first launch needs the same steps below.

## If macOS won't open the app

This only affects the **zip download** and **Homebrew** install methods (the curl command above skips it entirely). It's standard macOS behavior for any app that isn't distributed through the App Store or an Apple-notarized installer — it isn't specific to CodeMerge, and it isn't a sign anything is wrong with the download.

1. Try **right-click (or Control-click) the app → Open**. On some macOS versions this shows a dialog with an **Open** button — click it and you're done, permanently, for this copy of the app.
2. If that shows a blocking dialog instead (only "Move to Trash" and "Done", no way to open it), go to **System Settings → Privacy & Security**, scroll down to the **Security** section, and look for a line saying *"CodeMerge.app was blocked to protect your Mac"* with an **Open Anyway** button next to it. Click it, authenticate if asked, then try opening the app again — one more confirmation dialog appears, this time with a real **Open** button.

Either way, this is a one-time step per copy of the app — once you've approved it, every future launch (Dock, Spotlight, login items) works normally with no warnings.

## After installing

CodeMerge lives in your menu bar — click its icon to open the dropdown, or right-click it for quick actions (Lock Screen, Settings, and — once your trial ends — buying a license). You get full access for 30 days; after that, [buy a lifetime license for $5](https://harelyaish.gumroad.com/l/codemerge) and paste the key Gumroad emails you into **Settings → License**.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a1a1a,100:FF6B35&height=3&section=header" width="100%">
</p>

## Features

Every tool below is in the $5 lifetime license — nothing is held back for a “Pro” tier.

<table>
<tr>
<td width="50%" valign="top">

#### 🖼 Capture

**Screenshots** — full screen or an area, with an annotation editor<br>**Scrolling screenshots** — click a window, get the whole page<br>**Screen recording** — with a floating pause/stop<br>**Text Grab** — copy any text on screen<br>**Measure** — ruler and magnifier

</td>
<td width="50%" valign="top">

#### 🪟 Windows & desktop

**Window layouts** — halves, quarters or your own grid<br>**Hide desktop & Dock** — a clean screen in one click<br>**Quit all apps**, **Eject disks**, **Lock screen**<br>**Prevent sleep**<br>**Clean keyboard** — lock the keys while you wipe

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### 📋 Everyday

**Clipboard history** — 200 items, searchable, pinned snippets<br>**File shelf** — a drag-and-drop holding tray<br>**Timers**, **Quick note**, **Weather**<br>**Converter** — units, currency and world clocks<br>**Colour picker**, **Random generator**, **Audio output**

</td>
<td width="50%" valign="top">

#### 🛠 Power tools

**Command palette** — your own saved commands<br>**Workflows** — chain tools into one command<br>**Kill process on port**<br>**Speed test** and **Package tracking**<br>**Find a file** in plain words · **Convert any file to Markdown**

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### 🎵 Music & presenting

**Now Playing** — Music & Spotify, with **lyrics**<br>**Draw on screen** — pen, highlighter, arrows, boxes<br>**Show clicks and shortcuts** while you present

</td>
<td width="50%" valign="top">

#### 🌿 Wellbeing & fun

**Water & stretch reminders** that learn your rhythm<br>**Sunrise, sunset & golden hour**<br>**Typing sounds** — 9 keyboards, recorded for real<br>**A mascot** that peeks in and hides from your cursor

</td>
</tr>
</table>

### The notch — new in 1.2

On a Mac with a notch, CodeMerge turns it into a small live panel. Hover it to open:

- **Home** — a mascot that reacts to what you're doing, status at a glance, up to **5 widgets** of your favourite tools, and a chat that takes plain commands: “skip”, “timer 25m”, “remind me at 5 to call mom”, “find my resume”.
- **Tabs** — Today's calendar, music with lyrics, timers and reminders, clipboard, file shelf, voice notes and more; pick up to 8.
- **Live beside the camera** — music, timers, meetings and recordings stay visible while it's closed.
- **Any tool opens right inside it**, plus a camera **mirror** and **voice notes**.

### Settings, in brief

A searchable Settings window — search finds any setting on any page. Pages include **Notch** (style, Home, widgets, tabs), **Mascot**, **Main Window** (which tools show, in what order, and themes), **Keyboard Shortcuts** (a global shortcut for almost anything), **Screenshots**, **Timer**, **Workflows**, **Command Palette**, **Typing Sounds**, **Water & Stretch**, **Weather**, **Connectors** (Pocket) and **License**. CodeMerge starts at login if you like and has no Dock icon.

### Permissions it may ask you for

Nothing is requested up front. Each permission below is only asked for the first time you actually use the one feature that needs it:

| Feature | Permission | Where to check/change it |
|---|---|---|
| Screenshots, screen recording, Text Grab, Measure, scrolling screenshots | Screen Recording | System Settings → Privacy & Security → Screen & System Audio Recording |
| Clean Keyboard, global shortcuts, Lock Screen, window split, typing sounds in other apps, showing shortcuts while presenting, auto-scrolling screenshots | Accessibility | System Settings → Privacy & Security → Accessibility |
| Now Playing controls | Automation (Music, Spotify) | Prompted automatically the first time you use it |
| Today tab, meeting reminders | Calendars | System Settings → Privacy & Security → Calendars |
| Notch mirror | Camera | System Settings → Privacy & Security → Camera |
| Voice notes | Microphone | System Settings → Privacy & Security → Microphone |

CPU temperature and the desktop/Dock declutter feature need **no permission at all**.

### What talks to the network

Very little, and only when you use the feature — no account or API key needed for any of these:

- **Weather** — `ipapi.co` (approximate location from your IP) and `api.open-meteo.com` (forecast).
- **Currency converter** — `api.frankfurter.app` (European Central Bank rates).
- **Lyrics** — `lrclib.net`, sent the song's title and artist.
- **Speed test** — macOS's own `networkQuality` tool, which talks to Apple's test servers.
- **Voice notes to Pocket** — only if you connect your Pocket account in Settings → Connectors.
- **License check** — Gumroad, when you enter a license key.

Package tracking just opens the carrier's own tracking page in your browser. Typing sounds never read what you type — only which key position was pressed — and nothing you type leaves your Mac.

## Updates

CodeMerge checks for updates itself — **Settings → General → Check for Updates…** — no need to reinstall from here.

## Requirements

macOS 13 (Ventura) or later, Apple Silicon or Intel.

## FAQ

**Why does macOS say it's from an "unidentified developer"?**
CodeMerge isn't distributed through the App Store or Apple's notarization service, so any copy that goes through a browser download gets flagged the same way any indie app without an Apple Developer account would be. It isn't a sign anything is wrong with the app — see [If macOS won't open the app](#if-macos-wont-open-the-app) above for the one-time fix, or use the curl install, which skips it entirely.

**Does it work on Apple Silicon and Intel Macs?**
Yes, one universal build covers both.

**Is my data sent anywhere?**
No, aside from two plain HTTPS calls with no account or API key involved — see [What talks to the network](#what-talks-to-the-network) above. Everything else (clipboard history, screenshots, notes, timers, settings) stays on your Mac.

**What if I want a refund?**
Contact Gumroad support from your purchase receipt email — refunds are handled through Gumroad, not this repo.

**Can I use my license on more than one Mac?**
The license is personal and non-transferable, but nothing technical stops you from using it on your own multiple Macs — it isn't hardware-locked.

## Support

Found a bug or have a question? [Open an issue](https://github.com/harelyaish/CodeMerge/issues) on this repo.

Already bought a license and want to support development further? [Leave a tip via PayPal](https://www.paypal.com/paypalme/HarelYaish) — entirely optional, separate from the $5 purchase.

## License

Buying a license key grants you a personal, non-transferable right to install and run the compiled app. It's closed-source and proprietary — the license doesn't grant any right to redistribute, resell, or reverse-engineer it.

## Uninstalling

Drag `CodeMerge.app` from `/Applications` to the Trash, then remove its saved settings:

```bash
rm -f ~/Library/Preferences/com.harelyaish.ClaudeUsageNotch.plist
```

(Installed via Homebrew? `brew uninstall --cask codemerge` does both steps for you.)

## Changelog

### 1.2.0

- **New: the notch.** On Macs with a notch, it becomes a live panel — a mascot, your music with lyrics, timers, calendar, up to 5 widgets, and a chat that takes plain commands. Any tool opens right inside it.
- **New tools:** Presenter tools (draw on screen, show clicks and shortcuts), speed test, package tracking, Measure (ruler and magnifier), one-click scrolling screenshots, sunrise/sunset/golden hour, water and stretch reminders, lyrics in the music tab.
- **Typing sounds** recorded from 9 real keyboards.
- **Settings, redesigned**, with a search that finds any setting and a Widgets editor.
- **The mascot** peeks around the main window and Settings, and shies away from your cursor.
- **Smaller:** 6 MB download, 13 MB installed (was 37 MB).

### 1.1.3

- Workflows: combine tools into one command, built in Settings → Workflows and run from the dropdown.
- Screenshot annotation editor: arrows, lines, shapes, highlighter, pen, numbered steps, blur and text — select, move, resize, restyle, duplicate and delete; copy or save.
- Converter: new Clocks tab — up to 5 world clocks with city/country search, day/night, offsets and a meeting-planner slider.

### 1.1.2

- Timer redesigned: big time with presets and a Custom entry, compact cards, +10s / +1m quick-add, up to 3 timers at once.
- Converter redesigned: From / To cards, swap, and tap to copy.
- Window layouts: glass-tile preview and 12 layouts, including new mixed-size ones (Main + Side, Focus, Center, Top + Two, Big + Three).
- Fixes: Spotify and other Electron apps are now found by the layout preview; fixed a crash when switching layouts.

### 1.1.1

- Themes: separate Light and Dark groups (Default, Midnight, Forest, Sunset, Monochrome, Mirror in each), a sun/moon quick switch in the main window, frosted-glass panels, and controls that follow the theme.
- Now Playing: real-time progress bar, and Shuffle All / Favorites / Playlists / Genres / Open Music in the playing menu.
- Spotify: fixed layout flicker and honest Resume feedback.

### 1.1.0

- New tools: Image Resizer, Random Generator, Audio Output, Text Grab and Kill Process on Port.
- Clipboard history: 200 items, search, pinned snippets.
- File shelf: AirDrop button and automatic compression of large PNGs.
- Now Playing: cover art, seekable real-time progress bar, Music and Spotify volume, Music library/playlist actions, and Music/Spotify launchers when nothing is playing.
- Global shortcuts for the new tools.

See the [Releases page](https://github.com/harelyaish/CodeMerge/releases) for every version.
