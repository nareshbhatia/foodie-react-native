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

### Install Z Shell

Starting MacOS 10.15 (Catalina), the default shell is zsh. If your default shell
is not zsh, I highly recommend changing it to zsh.

Execute the following command in your terminal window to find out your default
shell:

```bash
echo $SHELL
```

If you see something other than `/bin/zsh`, then zsh is not your default shell.
Change it using the following command:

```bash
chsh -s /bin/zsh
```

Now close the terminal and reopen it. Type `echo $SHELL` to make sure that zsh
is the default.

### Install Xcode

-   Open app store
-   Search for Xcode
-   Download and install
-   Open Xcode and accept licensing agreements — installs additional components
-   Install Xcode CLI tools

```bash
xcode-select --install
```

-   Make sure CLI tools are correctly installed: open Xcode > Preferences >
    Locations. The command line tools dropdown should not be blank. It should
    show a version of CLI tools. If not select the latest version from the
    dropdown.

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

### Install Homebrew & Required Packages

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install git wget vim watchman imagemagick cairo pixman jpeg librsvg
```

### Install Node Version Manager & Node

Node Version Manager (nvm) is a bash script to manage multiple node.js versions.
It is better than using the Node.js installer or Homebrew (see
[this article](https://pawelgrzybek.com/install-nodejs-installer-vs-homebrew-vs-nvm/)).

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

Now install the latest LTS version of Node.js

```bash
nvm install 12.14.1
source "$HOME/.zshrc"
node -v    # should print v12.14.1
```

If you get the error `nvm: command not found`, then follow the instructions
under
[Troubleshooting on macOS](https://github.com/nvm-sh/nvm#troubleshooting-on-macos).

Now install Yarn.

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
source "$HOME/.zshrc"
yarn -v    # should print a version number like v1.21.1
```

Note: Do note use Homebrew to install Yarn because we did not use it to install
node. See [this issue](https://github.com/yarnpkg/website/issues/913).

### Install Ruby Version Manager & Ruby

```bash
curl -sSL https://get.rvm.io | bash -s stable
# close and reopen your terminal to enable rvm
# or source "$HOME/.rvm/scripts/rvm"
rvm install ruby-2.7.0
rvm use ruby-2.7.0
ruby -v    # should print a version number like 2.7.0p0
```

### Install Required Ruby Gems

```bash
gem install fastlane badge cocoapods
gem install 'fastlane-plugin-get_version_code'
gem install 'fastlane-plugin-get_version_name'
gem install 'fastlane-plugin-versioning'
gem install 'fastlane-plugin-yarn'
gem install 'fastlane-plugin-badge'
```

### Setup Cocoapods

```bash
pod setup
```

### Setup ~/.zshrc

Export the following variables at the top of your ~/.zshrc file:

```bash
# Fastlane
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```

At this point your .zshrc file should look something like this. Make sure that
each section is in the correct order.

```bash
# Fastlane
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

# Node Version Manager (NVM)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Yarn
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

# Ruby Version Manager (RVM)
# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
```

### Clone this repo

Clone this repo wherever you keep projects and install dependencies. For
example:

```bash
cd ~/projects
git clone https://github.com/nareshbhatia/foodie-react-native.git
cd foodie-react-native
yarn
cd ios
pod install
cd ..
```

### Run the app in the simulator

```bash
yarn ios
```

## Setting Up Fastlane

This one-time setup is required only when creating new projects. You do not need
it to build foodie-react-native. I have added this section just to document how
Fastlane was set up for foodie-react-native.

### Create an App Id and provisioning profile for iOS

-   Create an AppId for FoodieRN in Apple Developer Portal. Alternately you can
    create it using Fastlane:

```bash
fastlane produce -u <my-apple-id> -a com.publicis.sapient.foodiern --skip_itc
```

-   Create a `development` provisioning profile for FoodieRN in Apple Developer
    Portal. Sign it with a developer certificate. Download the profile on your
    machine and double-click to install it.

### Initialize Fastlane

```bash
cd ios

# Create ./fastlane/Appfile & ./fastlane/Fastfile
fastlane init
# Choose the option you want
# I chose option 2 - Automatic beta distribution to TestFlight.
```

This generates a new directory called `fastlane` with two files: `Fastfile` &
`Appfile`. Tweak these files as needed.

Move the `fastlane` directory to the project root folder. This allows running
fastlane from the project root which is much more convenient.

Edit Fastfile to point workspace to the correct directory

    workspace: "./ios/FoodieRN.xcworkspace"

### Do a test build

Change your working directory to the project root and execute the following
command:

```bash
fastlane ios test
```

This will generate two files in the project root:

1. FoodieRN.ipa: This is the application archive that can be deployed to a
   store.
2. FoodieRN.app.dSYM.zip: This file contains the debug symbols for the app.

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
