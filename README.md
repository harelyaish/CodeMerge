<p align="center">
  <a href="https://harelyaish.github.io/CodeMerge/"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/hero.png" alt="CodeMerge — your Mac's notch, finally useful. $5 once, 30-day trial." width="100%"></a>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=18&pause=1800&color=FF6B35&center=true&vCenter=true&width=640&lines=Your+Mac%27s+notch%2C+finally+useful.;Clocks%2C+capture%2C+health+reminders%2C+stocks...;Shift-drag+any+file+for+a+wheel+of+actions.;Local-first.+No+account.+No+AI.;%245+once.+No+subscription.+Ever." alt="Typing SVG">
</p>

<p align="center">
  <img src="https://img.shields.io/github/downloads/harelyaish/CodeMerge/total?style=flat-square&label=downloads&color=FF6B35">
  <img src="https://img.shields.io/badge/macOS-13%2B-black?style=flat-square&logo=apple">
  <img src="https://img.shields.io/badge/Apple%20Silicon%20%2B%20Intel-universal-black?style=flat-square">
  <img src="https://img.shields.io/badge/local--first-no%20account%20%C2%B7%20no%20AI-3fd17a?style=flat-square">
  <img src="https://img.shields.io/github/v/release/harelyaish/CodeMerge?style=flat-square&color=FF6B35">
  <a href="https://www.paypal.com/paypalme/HarelYaish"><img src="https://img.shields.io/badge/tip-PayPal-00457C?style=flat-square&logo=paypal&logoColor=white"></a>
</p>

**CodeMerge** puts a control center where your Mac's camera sits. Hover the notch (or click the menu-bar icon on any Mac) and everything you reach for all day is one move away — a world clock, screenshots, clipboard history, medicine and water reminders, notifications you can answer, window layouts, stocks, a video downloader and dozens of small tools — **instead of a folder of separate apps**, each with its own Dock icon and shortcut.

**Local-first by design:** no account, no cloud, no AI. Your clipboard, notes, doses and settings never leave your Mac.

**Free to try for 30 days, every feature. Then $5, once, for life** — no subscription, no recurring charge.

[![Buy CodeMerge — $5](https://img.shields.io/badge/Buy_CodeMerge-%245_lifetime-FF6B35?style=for-the-badge)](https://harelyaish.gumroad.com/l/codemerge)
[![Download latest release](https://img.shields.io/badge/Download-latest_release-black?style=for-the-badge&logo=apple)](https://github.com/harelyaish/CodeMerge/releases/latest)
[![Website](https://img.shields.io/badge/Website-try_it_live-FF6B35?style=for-the-badge&logo=safari&logoColor=white)](https://harelyaish.github.io/CodeMerge/)
[![Star on GitHub](https://img.shields.io/badge/%E2%98%85_Star-on_GitHub-black?style=for-the-badge&logo=github)](https://github.com/harelyaish/CodeMerge)

## Contents

[See it](#see-it) · [Why](#why-codemerge) · [Install](#install) · [If macOS won't open the app](#if-macos-wont-open-the-app) · [After installing](#after-installing) · [Features](#features) · [New in 1.3](#new-in-13) · [The notch](#the-notch--new-in-12) · [Settings](#settings-in-brief) · [Permissions](#permissions-it-may-ask-you-for) · [Updates](#updates) · [FAQ](#faq) · [Support](#support) · [License](#license) · [Uninstalling](#uninstalling) · [Changelog](#changelog)

## See it

<table>
<tr>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-dashboard.png" alt="The Dashboard in the notch"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-clock.png" alt="World clock with day and night skies and a time slider"></td>
</tr>
<tr>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-health.png" alt="Medicines and reminders"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-capture.png" alt="Capture: one clear button"></td>
</tr>
<tr>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-stocks.png" alt="Stocks with a 52-week bar, market cap and P/E"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-memory.png" alt="Mac Care: free up idle memory"></td>
</tr>
<tr>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-video.png" alt="Video downloader"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-wheel.png" alt="The Shift wheel for files"></td>
</tr>
</table>

<sub>Real captures of the app. The notch panels above open from the camera area; every tool is also in the menu-bar window.</sub>

## Why CodeMerge

| | |
|---|---|
| 🔒 **Yours alone** | No account, no cloud, no AI. It only touches the network when *you* ask — Weather, Stocks, currency, downloads. |
| 💸 **$5, once** | 30 days free with everything on. Then a lifetime licence — no subscription, ever. |
| 🪶 **Light** | A small native SwiftUI app that sleeps when the notch is closed. No Electron. |
| 🧰 **Instead of a folder of apps** | Clipboard manager, window snapper, screenshot tool, OCR, timers, converter, media widget, reminders — one install. |
| 🖥 **Any Mac** | Notch panel on notch Macs; the same tools in a menu-bar window everywhere. Apple Silicon and Intel. |

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

<p align="center"><b>60+ tools · one $5 license · no account</b><br><sub>🆕 = new in 1.3</sub></p>

<table>
<tr>
<td width="46%" valign="middle"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-capture.png" alt="Capture panel"></td>
<td width="54%" valign="middle">

### Capture
<sub>See it, grab it, mark it up</sub>

<img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/screenshot-area.png" width="20" align="absmiddle"> **Screenshots** — full screen or an area, then annotate<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/screen-recording.png" width="20" align="absmiddle"> **Screen recording** with a floating pause and stop<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/text-grab.png" width="20" align="absmiddle"> **Text Grab** — copy any text you can see<br>📜 **Scrolling screenshots** — click a window, get the whole page<br>📏 **Measure** — ruler and magnifier<br>✏️ **Draw on screen** — pen, highlighter, arrows; show clicks and shortcuts

</td>
</tr>
</table>

<table>
<tr>
<td width="54%" valign="middle">

### Mac Care & files
<sub>Free memory, drop duplicates, tidy up — undoable</sub>

🧠 **Free up memory** 🆕 — close idle apps; Auto Care steps in when RAM runs short<br>♊ **Duplicates** 🆕 — copies share space, nothing is deleted<br>🗂 **Organize a folder** 🆕 — by type, month or source, undo for 90 days<br>🎡 **Shift wheel** 🆕 — hold Shift while dragging a file: convert, compress, crop, redact, add a background

</td>
<td width="46%" valign="middle"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-memory.png" alt="Mac Care: free up memory"></td>
</tr>
</table>

<table>
<tr>
<td width="46%" valign="middle"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-health.png" alt="Medicines and reminders"></td>
<td width="54%" valign="middle">

### Health & time
<sub>Doses, clocks and gentle habits</sub>

💊 **Medicines** 🆕 — dose times, a photo of the box, a pill cabinet, missed-dose recovery, refill reminders<br>🌍 **World clock** 🆕 — day and night skies with a time slider<br>⏰ **Alarms, timers & stopwatch laps** 🆕<br>🌸 **Cycle ring, habits, water** 🆕<br>💧 **Water & stretch reminders** that learn your rhythm · 🌅 **Golden hour**

</td>
</tr>
</table>

<table>
<tr>
<td width="54%" valign="middle">

### Markets & downloads
<sub>Watch the tickers, grab the video</sub>

📈 **Stocks** 🆕 — Chart, Stats and News tabs, day range, 52-week bar, market cap, P/E<br>🔔 **One bell** for every price alert<br>⬇️ **Video downloader** 🆕 — paste a link, pick a quality, get the file<br>🔒 Only touches the network when *you* ask

</td>
<td width="46%" valign="middle"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-stocks.png" alt="Stocks"></td>
</tr>
</table>

<table>
<tr>
<td width="46%" valign="middle"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-dashboard.png" alt="The Dashboard"></td>
<td width="54%" valign="middle">

### Everyday & power tools
<sub>The small things you reach for all day</sub>

<img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/clipboard.png" width="20" align="absmiddle"> **Clipboard history** — 200 items, searchable, pinned snippets<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/file-shelf.png" width="20" align="absmiddle"> **File shelf** — a drag-and-drop tray<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/timer.png" width="20" align="absmiddle"> **Timers · Quick note · Weather**<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/converter.png" width="20" align="absmiddle"> **Converter** — units, currency, world clocks<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/command-palette.png" width="20" align="absmiddle"> **Command palette & Workflows** — your commands, chained<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/now-playing.png" width="20" align="absmiddle"> **Now Playing** with lyrics<br>💬 **Reply to Messages and Mail** from the notch 🆕<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/kill-port.png" width="20" align="absmiddle"> **Kill port · Speed test · Package tracking · Find a file · To Markdown**

</td>
</tr>
</table>

<table>
<tr>
<td width="54%" valign="middle">

### Windows & desktop
<sub>A calm, clean screen</sub>

<img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/window-split.png" width="20" align="absmiddle"> **Window layouts** — halves, quarters, your own grid<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/hide-desktop.png" width="20" align="absmiddle"> **Hide desktop & Dock** 🆕 — your real wallpaper stays<br>🪟 **Full view** 🆕 · 🫥 **Privacy blur** 🆕<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/quit-all.png" width="20" align="absmiddle"> **Quit all** · <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/eject.png" width="20" align="absmiddle"> **Eject disks** · <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/lock-screen.png" width="20" align="absmiddle"> **Lock** · <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/prevent-sleep.png" width="20" align="absmiddle"> **Prevent sleep**<br><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/icons/clean-keyboard.png" width="20" align="absmiddle"> **Clean keyboard** — lock the keys while you wipe

</td>
<td width="46%" valign="middle"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/readme/shot-presenter.png" alt="Presenting tools"></td>
</tr>
</table>

<p align="center"><sub>Plus <b>typing sounds</b> (9 recorded keyboards) and a <b>mascot</b> that hides from your cursor. Every tool lives in the menu-bar window; on a notch Mac, hover the notch for the same tools.</sub></p>

### The notch — new in 1.2

On a Mac with a notch, CodeMerge turns it into a small live panel. Hover it to open:

- **Home** — a mascot that reacts to what you're doing, status at a glance, up to **5 widgets** of your favourite tools, and a chat that takes plain commands: “skip”, “timer 25m”, “remind me at 5 to call mom”, “find my resume”.
- **Tabs** — Today's calendar, music with lyrics, timers and reminders, clipboard, file shelf, voice notes and more; pick up to 8.
- **Live beside the camera** — music, timers, meetings and recordings stay visible while it's closed.
- **Any tool opens right inside it**, plus a camera **mirror** and **voice notes**.

### New in 1.3

In the latest download (1.3.0):

- **Shift wheel** — hold Shift while dragging a file (or right-click it in Finder → Services → **CodeMerge Wheel**) for a wheel of things to do with it.
- **Mac Care: Memory, Duplicates, Organize.**
- **Stocks** — Chart / Stats / News tabs and a bell for every price alert.
- **Video downloader**, redesigned; **Settings**, redesigned in dark glass with six places and pages as pills.
- Also: world clock, alarms and stopwatch laps; medicines, a pill cabinet and a cycle ring; a clearer Capture panel; reply to Messages and Mail from the notch; the notch remembers where you were; hide-desktop now keeps your real wallpaper.

### Settings, in brief

A searchable Settings window — search finds any setting on any page. Pages include **Notch** (style, Home, widgets, tabs), **Mascot**, **Menu Bar** (look, position, and which tools show and in what order), **Keyboard Shortcuts** (a global shortcut for almost anything), **Screenshots**, **Timer**, **Workflows**, **Command Palette**, **Typing Sounds**, **Water & Stretch**, **Weather**, **Connectors** (Pocket) and **License**. CodeMerge starts at login if you like and has no Dock icon.

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
- **Stocks** — Yahoo Finance (`query1.finance.yahoo.com`): prices, company facts and headlines for the symbols you add.
- **Video downloader** — only the site whose link you paste; the first time it fetches `yt-dlp` (and `ffmpeg`/`deno`) from their official sources and checks their checksums.
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
No. The few features that use the internet (Weather, Stocks, currency, lyrics, downloads, the licence check) do it only when you use them, with no account or API key — see [What talks to the network](#what-talks-to-the-network) above. Everything else (clipboard history, screenshots, notes, timers, settings) stays on your Mac.

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

### 1.3.1

- **A welcome tour** for new installs — a short, branded walkthrough of the notch, the tools and your privacy.
- **What's New after every update** — a window listing what changed, plus an "Updated to…" notice. Reopen it any time from the menu-bar icon's right-click menu or Settings → General.
- **Smaller updates** — the in-app update downloads about 30% less.

### 1.3.0

- **Shift wheel** — hold Shift while dragging a file (or right-click it in Finder → Services → **CodeMerge Wheel**) for a wheel of things to do with it: convert, compress, crop, redact, add a background.
- **Mac Care** — free up memory by closing idle apps (with Auto Care when RAM runs short), find duplicates that share space instead of deleting, and organize a folder by type, month or source, with undo.
- **Stocks** — Chart, Stats and News tabs; day range, 52-week bar, market cap and P/E; one bell for every price alert.
- **Video downloader**, redesigned: paste a link, pick a quality, get the file.
- **Health & time** — world clock with day/night skies, alarms and stopwatch laps, medicines with a pill cabinet and refill reminders, a cycle ring.
- **Notch & notifications** — reply to Messages and Mail from the notch; the notch remembers where you were; a clearer Capture panel.
- **Settings, redesigned** in dark glass with six places and pages as pills.
- **Hide desktop & Dock** now keeps your real wallpaper and fades in with no flash.

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
