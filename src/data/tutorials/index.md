---
title: "Getting Started"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---
Before you start using BARK, you'll need to familiarize yourself with and install some core technologies. <br /><br />
<b>Prerequisites</b> before you start developing:

* [Bazel.build](https://bazel.build/): Build tool used in BARK:
* [Python3.7-dev](https://www.python.org/downloads/) and the package `python3.7-tk`.
* Virtual Python environment: `pip install virtualenv==16.7.8`
* [GCC7](https://gcc.gnu.org/gcc-7/): C++ compiler for BARK
* We recommend using [Visual Studio Code](https://code.visualstudio.com/) for development


## Installing BARK
In this section, we explain how to clone BARK to running the first example in BARK.
<br />
<br />
To get BARK running, follow these steps:
1. Clone the BARK repository and enter the folder by running `git clone https://github.com/bark-simulator/bark.git && cd bark`.
2. Create a virtual Python environment and install all packages by running `bash install.sh`.
3. After the virtual Python environment has been created, activate it by running `source dev_into.sh`.
4. To make sure BARK is working run all tests using `bazel test //...` (make sure the virtual Python environment is activated).
5. Now, you are ready to go! Try out one of the provided examples by running `bazel run //examples:merging`.


## Installing Python on macOS
On macOS, we recommend the following Python setup:

1. BARK requires the latest version of tcl-tk (`brew upgrade tcl-tk`).
2. To isolate the Python version from the macOS system we recommend using pyenv: `brew install pyenv`.
3. Intall Python3.7-dev by running: `pyenv install 3.7-dev`. If you run into trouble with TKInter have a look [here](https://stackoverflow.com/questions/60469202/unable-to-install-tkinter-with-pyenv-pythons-on-macos).
4. Set this as your global Python version: `pyenv global 3.7-dev`.
5. Add pyenv initialization to your shell, e.g. `~/.zshrc` and add `eval "$(pyenv init -)"`.
6. Install the virtual environment package: `pip install virtualenv==16.7.8`
7. If you run into trouble with the Matplotlib TKAgg backend have a look [here](https://stackoverflow.com/questions/21784641/installation-issue-with-matplotlib-python).



## Frequently Asked Questions (FAQs)

### Python.h not found
Make sure that there is a 'Python.h' file in the `python/venv` folder.
