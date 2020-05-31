---
title: "Getting Started"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK machine learning (BARK-ML) extends the BARK framework for artificial intelligence applications.
It offers training environments as well as sophisticated agents that can master complex traffic scenarios, e.g. by using reinforcement learning.
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
* <b>Behaviors</b>: Behavior models trained with e.g. reinforcement learning.
* <b>Environments</b>: Environments based on blueprints.
* <b>Observers</b>: Module that converts the BARK world into a observation, e.g. a vectorial representation.
* <b>Evaluators</b>: Module evaluating the BARK world, determining the reward signal and whether an episode is terminal.
* <b>Library Wrappers</b>: Integration of several machine learning libraries, such as [TF-Agents](https://github.com/tensorflow/agents).