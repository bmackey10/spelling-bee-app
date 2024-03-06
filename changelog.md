# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased] - 2024-03-06
 
### Added
- Parse Models (SpellingBees and BeeSolutions) and functions for each model.
- Routing to the various pages instead of using <a> tags.
- Play page which lists various Spelling Bee puzzles by date that the user can choose to play.
- CSS Styling (Tailwind) for the Home and Play Pages.
 
### Changed
- No longer rendering Past Spelling Bees as we thought this to be a redundant feature.
- Game now renders spelling bee letters based on actual past puzzle data (from Parse) instead of randomly generated letters.
- Game now checks if the word inputted by user is in BeeSolutions instead of just checking if it exists in the dictionary.

### Fixed