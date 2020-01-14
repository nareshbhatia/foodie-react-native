# Foodie - React Native

Foodie is a demo application for finding restaurants using Yelp's GraphQL API.
We have built it on several tech stacks in order to compare and contrast
technologies. This one is built on:

-   React Native
-   React Apollo Client

## Build Instructions

These instructions are based on the excellent
[React Native DevOps Guide](https://medium.com/@tgpski/setting-up-a-jenkins-agent-part-1-react-native-devops-guide-4c8b763b0961)
by Tyler Pate. You will need a Mac with MacOS installed on it.

### Install Xcode

-   Open app store
-   Search for Xcode
-   Download and install
-   Open Xcode and accept licensing agreements — installs additional components
-   Install Xcode CLI tools

```bash
xcode-select --install
```

-   Sign legal agreement

```bash
sudo xcodebuild -license
```

-   Enable Developer Mode

```bash
DevToolsSecurity -enable
```

-   Install an iOS Simulator in Xcode: open Xcode > Preferences... and select
    the Components tab. Select a simulator with the corresponding version of iOS
    you wish to use.

### Install Homebrew

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install JDK 8

```bash
brew tap caskroom/versions
brew cask install java8
```

### Install other Homebrew packages

```bash
brew install git wget vim watchman imagemagick cairo pixman jpeg librsvg
```

-   Image utilities are used with Fastlane badge plugin for auto-badging
    development releases with build and revision

### Install Node version manager

nvm is a bash script to manage multiple node.js versions. It is better than
using the Node.js installer or Homebrew (see
[this article](https://pawelgrzybek.com/install-nodejs-installer-vs-homebrew-vs-nvm/)).

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

Now install the latest LTS version of Node.js

```bash
nvm install 12.14.1
nvm use 12.14.1
nvm alias default 12.14.1
```

If you get the error `nvm: command not found`, then follow the instructions
under
[Troubleshooting on macOS](https://github.com/nvm-sh/nvm#troubleshooting-on-macos).
I had to source my ~/.bashrc in .bash_profile using this line:

```bash
source "$HOME/.bashrc"
```

### Install Ruby version manager

```bash
curl -sSL https://get.rvm.io | bash -s stable
rvm install ruby-2.7.0
rvm use ruby-2.7.0
```

### Install Ruby gems & Fastlane plugins

```bash
gem install fastlane badge cocoapods
gem install 'fastlane-plugin-get_version_code'
gem install 'fastlane-plugin-get_version_name'
gem install 'fastlane-plugin-versioning'
gem install 'fastlane-plugin-yarn'
gem install 'fastlane-plugin-badge'
```

### Install Yarn

Do note use Homebrew to install Yarn. It can't do this because we did not use
Homebrew to install node. See
[this issue](https://github.com/yarnpkg/website/issues/913).

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Setup Cocoapods

```bash
pod setup
```

### Setup ~/.bashrc

Export the following variables from ~/.bashrc

```bash
# Fastlane
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```

### Clone this repo

Clone this repo wherever you keep projects and install dependencies For example:

```bash
cd ~/projects
git clone https://github.com/nareshbhatia/foodie-react-native.git
cd foodie-react-native
yarn
```

### Run the app in the simulator

```bash
yarn ios
```

## Setting Up Fastlane

This one-time setup is required only when creating new projects. You do not need
it to build foodie-react-native. I have added this section just to document how
Fastlane was set up for foodie-react-native.

### Create an App Id for iOS

```bash
fastlane produce -u <my-apple-id> -a com.publicis.sapient.foodiern --skip_itc
```

### Create a provisioning profile for iOS

Create a `development` provisioning profile for FoodieRN in Apple Developer
Portal. Sign it with a developer certificate. Download the profile on your
machine and double-click to install it.

### Initialize Fastlane

```bash
cd ios

# Create ./fastlane/Appfile & ./fastlane/Fastfile
fastlane init
```

Now tweak Appfile & Fastfile as needed

### Do a test build

```bash
fastlane ios test
```

### Setting Up Certificates Using Fastlane Match (optional)

### Create a private repo for code signing

Create a private repo to store certificates and profiles
(foodie-react-native-fastlane)

### Initialize Fastlane Match

```bash
cd ios
fastlane match init         # creates ./fastlane/Matchfile with your git url
fastlane match development  # creates a provisioning profile and certificate for development
```
