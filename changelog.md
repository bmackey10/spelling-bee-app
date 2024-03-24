# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased] - 2024-03-06
 
### Added
- Parse Models (SpellingBees and BeeSolutions) and functions for each model.
- Routing to the various pages instead of using <a> tags.
- Play page which lists various Spelling Bee puzzles by date that the user can choose to play.
- CSS Styling (Tailwind) for the Home, Play, and SpellingBee Pages.
 
### Changed
- No longer rendering Past Spelling Bees as we thought this to be a redundant feature.
- Game now renders spelling bee letters based on actual past puzzle data (from Parse) instead of randomly generated letters.
- Game now checks if the word inputted by user is in BeeSolutions instead of just checking if it exists in the dictionary.

### Fixed


### Current Errors
- Refused to get unsafe header"access-control-expose-headers" printing to console.

## [Unreleased] - 2024-03-24

### Added
- Authentication Module
    - Authentication page with Login and Register buttons
    - Login and Register Components (forms for email and password)
    - Logout Button within Header that appears when authenticated
- Parse Service with authentication methods including signup, login, and logout
 
### Changed
- Header now includes Logout button when user is authenticated

### Fixed


### Current Errors
- Refused to get unsafe header"access-control-expose-headers" printing to console.
- Warning about useEffect containing a call to setIsAuthenticated w/out a list of dependencies in Header