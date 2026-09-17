cask "codemerge" do
  version "1.0.3"
  sha256 "e26fd101e548e388197fac4b8b8843926e9c9a27a94673d899fa8e522e8509a9"

  url "https://github.com/harelyaish/CodeMerge/releases/download/v#{version}/CodeMerge.zip"
  name "CodeMerge"
  desc "Menu-bar utility for macOS: app launcher, window splitting, screenshots, clipboard history, and more"
  homepage "https://harelyaish.gumroad.com/l/codemerge"

  depends_on macos: :ventura

  app "CodeMerge.app"

  zap trash: [
    "~/Library/Preferences/com.harelyaish.ClaudeUsageNotch.plist",
  ]
end
