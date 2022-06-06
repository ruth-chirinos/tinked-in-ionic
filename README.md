# tinked-in-ionic

##### Topicos Selectos de Ingenieria de Sistemas
##### By Ruth Chirinos

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/tinked-in-ionic)


# Running locally info

## Development Requirements

* [Node 10.16.3](https://nodejs.org/en/)
* [Ionic cli 5](http://ionicframework.com/docs/cli/)

## Installation

### NodeJS

#### Windows

##### Via Installer

Download the [installer](https://nodejs.org/dist/v7.9.0/node-v7.9.0-x86.msi) and run it.

#### OSX

##### Via Installer

Download the [installer](https://nodejs.org/dist/v7.9.0/node-v7.9.0.pkg) and run it.

##### Using Homebrew

Install homebrew running the following command from the terminal:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then run brew update to make sure Homebrew is up to date.

```bash
brew update
```

As a safe measure you should run brew doctor to make sure your system is ready to brew. Run the command below and follow any recommendations from brew doctor.

```bash
brew doctor
```

Next, add Homebrew's location to your $PATH in your .bash_profile or .zshrc file.

```bash
export PATH="/usr/local/bin:$PATH"
```

Next, install Node (npm will be installed with Node):

```bash
brew install node
```

To test out your Node and npm install:

```bash
node --version
npm --version
```

#### Linux

##### Debian and Ubuntu based Linux distributions

Update your repository base

```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
```

Install NodeJS

```bash
sudo apt-get install -y nodejs
```

##### Enterprise Linux and Fedora

Run as root on RHEL, CentOS or Fedora, for Node.js v7 LTS:

```bash
curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -
```

Then install, as root:

```bash
yum -y install nodejs
```

Official Fedora Node.js and npm packages are available in Fedora 18 and later. Install with:

```bash
sudo dnf install nodejs
```

Enterprise Linux (RHEL and CentOS) users may use the Node.js and npm packages from the EPEL repository.

Install the appropriate epel-release RPM for your version (found on the EPEL repository homepage), then run:

```bash
sudo yum install nodejs npm --enablerepo=epel
```

### Ionic CLI

To install the Ionic CLI, you will need to first install node and npm. Note: The CLI requires Node 6.x.x LTS. Once installed, run the following command to get the latest version of the Ionic CLI:

```bash
npm install -g ionic
```
Depending which Node installation you have, you may need to add **sudo** to install Ionic CLI globally:

```bash
sudo npm install -g ionic
```

### Other dependencies
```bash
npm install 
```

### Serve

Use ionic serve to start a local development server for app dev and testing. This is useful for both desktop browser testing, and to test within a device browser which is connected to the same network. Additionally, this command starts LiveReload which is used to monitor changes in the file system. As soon as you save a file the browser is refreshed automatically.

```bash
ionic serve
```

### Running on real device
Please review the documentation about how run in Cordova or Capacitor 
* [Capacitor](https://ionicframework.com/docs/cli/commands/capacitor-add)
* [Cordova](https://ionicframework.com/docs/cli/commands/cordova-build)
