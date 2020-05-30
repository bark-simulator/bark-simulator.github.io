---
title: "Installation"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

## Prerequisites

* Bazel > 3(requires Java)
* Python3.7 (`sudo apt-get install python3.7 python3.7-dev python3.7-tk`)
* Virtual Env (`pip3 install virtualenv==16.7.8`) (note that the newest version does not seem to link the Python.h)
* gcc7 (needs to be set as the default compiler)
* Visual Studio Code


## Setup on Linux

1. Use `git clone https://github.com/bark-simulator/bark.git` or download the repository from this page.
2. Run `bash install.sh`: creates a virtual environment (located in python/venv) and installs all python packages
2. Run `source dev_into.sh`: activates the virtual environment (make sure to run this before bazel)
3. Use `bazel test //...` to validate that BARK is working.
4. Finally, try one of the examples provided in BARK by running `bazel run //examples:od8_const_vel_two_agent`.


## Setup on MacOS

1. Install pyenv: `brew install pyenv`.
2. Install a newer version of tcl-tk: `brew upgrade tcl-tk`.
3. Run `pyenv install python3.7-dev`. If you run into trouble with TKInter have a look [here](https://stackoverflow.com/questions/60469202/unable-to-install-tkinter-with-pyenv-pythons-on-macos).
4. Set this as your global Python version: `pyenv global 3.7-dev`.
5. Also add this Python version to your `~/.zshrc` by adding `eval "$(pyenv init -)"`.
6. Install an older version of the virtualenv package by running: `pip install virtualenv==16.7.8`
7. In order to set TKAgg as backend have a look [here](https://stackoverflow.com/questions/21784641/installation-issue-with-matplotlib-python).
8. Modify the file `install.sh` by using `virtualenv -p python ./python/venv` instead as python is now the pyenv version.
9. Now you can follow the same steps as when using Linux.


## Frequently Asked Questions (FAQs)

### Python.h not found

Make sure that there is a 'Python.h' file in the `python/venv` folder.

### Feel free to add your questions here or asks us directly by submitting an issue!