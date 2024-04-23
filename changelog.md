# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [Released] - 2024-03-06
 
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
- Refused to get unsafe header "access-control-expose-headers" printing to console.

## [Released] - 2024-04-03

### Added
- Authentication Module
    - Authentication page with Login and Register buttons
    - Login and Register Components (forms for email and password)
    - Logout Button within Header that appears when authenticated
    - Added logic to prevent user from accessing pages depending on their login status
- Parse Service with authentication methods including signup, login, and logout
 
### Changed
- Header now includes Logout button when user is authenticated

### Fixed


### Current Errors
- Refused to get unsafe header "access-control-expose-headers" printing to console.
- Warning about useEffect containing a call to setIsAuthenticated w/out a list of dependencies in Header

## [Released] - 2024-05-04

### Added
- Play Component
    - Progress bar shows the user's progress towards the total score for each game
- Database Additions
    - Columns were added to the database to track the score value of each word guess, the total score for a game, and if a guess is the pangram for the game
    - Another data schema was added to track each user's guesses for each game
- Added a How-to-Play page that users can access from the header to read the rules of the game
 
### Changed
- Play Component
    - Letters are now arranged in the beehive structure similar to NYT with different coloring to distinguish the center letter
    - Added styling to display user's guesses and feedback for each guess
- Auth Module
    - Users no longer recieve alerts that they've successfully logged in/out or registered, it now just takes them directly to home or back to the auth page
    - Added styling to if they incorrectly log-in

### Fixed


### Current Errors
- Warning: refused to get unsafe header "access-control-expose-headers" printing to console.
- Warning: useEffect contains a call to setIsAuthenticated w/out a list of dependencies in Header