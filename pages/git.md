# Git & GitHub

## Windows Setup

### Downloads
- [Git for windows](https://git-scm.com/download/win) - Required
- [Git credential manager for windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/) - Required : _deals with 2FA, personnal access token ..._
- [Desktop version](https://desktop.github.com/) - Optional

### Basic Setup
#### 1. Git for windows setup options:

1. Use Git from the Windows command prompt
1. Use OpenSSL
1. Use the OpenSSL library
1. Checkout windows-style, commit Unix-style line ending
1. Use Windows' default console window - __Important__
1. Enable Git Credential Manager - __Important__

#### 2. Git credential manager for windows :

Nothing to configure here. Simple usage :
```shell
$ git credential-manager [<command> [<args>]]
```
More infos on [gitHub project](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/blob/master/Docs/CredentialManager.md).

#### 3. GitHub Desktop :

@TODO

### Account & security configuration

#### 1. Add user account

```shell
$ git config --global user.name "your github user name"
$ git config --global user.email "your github email"
```
User informations could be set locally _(without --global)_ for specific project configuration.

#### 2. Two-factor authentication : 2FA

If not displayed in the `$ git config --list`, add those lines :
```shell
$ git config --global credential.modalPrompt true
$ git config --global credential.helper manager
```

The first attempt to push on a remote repository will display :

![2FA windows credential manager](images/github-2FA-windows-credential-manager.png)

GitHub generate a __Personal access Token__ for _Windows credential manager_ as shown below :

![windows credential manager github token](images/github-token-credential-manager.png)

If needed, stored credentials could be removed locally :

```shell
$ git credential-manager --delete "https://github.com/user-account/my-project.git"
``` 



