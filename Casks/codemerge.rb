cask "codemerge" do
  version "1.3.1"
  sha256 "68648a01fe7010038b7c96f32f36f7b8dbfced1d3c7230438ed66fac3de361d5"

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
