cask "codemerge" do
  version "1.1.0"
  sha256 "63aa85e403d8a7fc525e8081440ddd5cbb11a33ade32f955db82fe5b6add0ca4"

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
