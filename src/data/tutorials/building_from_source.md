---
title: "Building BARK From Source"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---
The following prerequisites are required to build BARK from source:

* [Bazel.build](https://bazel.build/): Build tool used in BARK:
* [>= Python3.7-dev](https://www.python.org/downloads/) and the package `python-tk`.
* Virtual Python environment: `pip install virtualenv==16.7.8`
* [>= GCC7](https://gcc.gnu.org/gcc-7/): C++ compiler for BARK
* We recommend using [Visual Studio Code](https://code.visualstudio.com/) for development


<br />

First, clone the BARK repository and enter the folder: `git clone https://github.com/bark-simulator/bark.git && cd bark`.
Create a virtual Python environment and install the dependencies of BARK by running `bash install.sh` and enter it using `source dev_into.sh`.
Before running any examples or implementing new code, it is advised to make sure all modules of BARK work properly by running all tests using the command `bazel test //...`.
Finally, you are ready to implement your own code or to run the first example that has been built from source using, e.g., `bazel run //bark/examples:merging`.
A detailed video for installing BARK is shown here:

<br />

<div align="center">

`youtube: https://www.youtube.com/watch?v=U2qRn_ERVsg`

</div>

## Building BARK on macOS

The description from above also applies for building BARK from source on macOS.
If you run into trouble with TKInter have a look [here](https://stackoverflow.com/questions/60469202/unable-to-install-tkinter-with-pyenv-pythons-on-macos) or the Matplotlib TKAgg backend have a look [here](https://stackoverflow.com/questions/21784641/installation-issue-with-matplotlib-python).


## Frequently Asked Questions (FAQs)

### Python.h not found
Make sure that there is a 'Python.h' file in the `bark/python_wrapper/venv` folder.

### GCC: Interal Compiler Error: Killed (program cc1plus)
You might be running out of memory during the bazel build.
Try limiting the memory available to bark via
`bazel build //... --local_ram_resources=HOST_RAM*.4` (or any other build or test call).