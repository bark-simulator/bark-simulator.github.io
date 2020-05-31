---
title: "Getting Started"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK machine learning (BARK-ML) provides environments for training reinforcement learning agents or imitation learning algorithms.
To use BARK-ML, you need to have the same [prerequisites](/tutorials/) as when using BARK.

## Installing BARK-ML
Similar to BARK, run these steps:
1. Clone the BARK-ML repository and enter the folder: `git clone https://github.com/bark-simulator/bark-ml.git && cd bark-ml`.
2. Create a virtual Python environment and install all packages by running `bash install.sh`.
3. After the virtual Python environment has been created, activate it using `source dev_into.sh`.
4. To make sure BARK is working run all tests using `bazel test //...` (make sure the virtual Python environment is activated).
5. Now, you are ready to go! Try out one of the provided examples, e.g. the [TF-Agents](https://github.com/tensorflow/agents) example: `bazel run //examples:tfa`.

## Modules
The core modules of BARK-ML are:
* Environments:
* Behaviors:
* Observers:
* Evaluators:
* Library Wrappers: