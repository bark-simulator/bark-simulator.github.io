---
title: "Training BARK-ML Agents"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK-ML offers a variety of reinforcement learning agents to learn behavior policies for autonomous vehicles.
In this tutorial, a soft actor-critic agent based on the [TensorFlow Agents](#) library is used that learns to merge lanes.
<br />
<br />

First, the environment is set up where the agent should learn to behave in:

```python
import gym
import numpy as np
# registers bark-ml environments
import bark_ml.environments.gym  # pylint: disable=unused-import
# import agent and runner
from bark_ml.library_wrappers.lib_tf_agents.agents import BehaviorSACAgent
from bark_ml.library_wrappers.lib_tf_agents.runners import SACRunner
# to handle parameters
from bark.runtime.commons.parameters import ParameterServer

# load gym environment
env = gym.make("merging-v0")
```
<br />

However, the runtime is not used as each `Agent` in BARK-ML provides a runner that runs a specified number of scenarios.

All the code that is required for learning a behavior is outlined below:

```python
# params = ParameterServer(filename="tfa_params.json")
params = ParameterServer()
sac_agent = BehaviorSACAgent(environment=env,
                             params=params)
env.ml_behavior = sac_agent
# runner either trains, evaluates or visualized the agent
runner = SACRunner(params=params,
                   environment=env,
                   agent=sac_agent)
```

<br />

All that remains is to first train and then visualize the `BehaviorSACAgent` using:

```python
runner.Train()
runner.Run(num_episodes=50, render=True)
```

BARK-ML provides several state-of-the-art agents ranging from the proximal policy optimization (PPO) to the soft actor-critic (SAC) algorithms.
