---
title: "Getting Started With BARK-ML"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK-Machine Learning (BARK-ML) offers easy to use OpenAI-Gym environments and agents to learn behaviors for autonomous vehicles.
It can be installed using `pip install bark-ml`. Building BARK-ML from source is similar to building BARK which is described [here](/tutorials/building_from_source/).
<br />
<br />
BARK-ML provides blueprints for several scenarios. To run the merging scenario, run the following code:

```python
import gym
import numpy as np
# registers bark-ml environments
import bark_ml.environments.gym  # pylint: disable=unused-import

env = gym.make("merging-v0")

initial_state = env.reset()
done = False
while done is False:
  action = np.array([0., 0.]) # acceleration and steering-rate
  observed_state, reward, done, info = env.step(action)
  print(f"Observed state: {observed_state}, Action: {action}, "
        f"Reward: {reward}, Done: {done}.")
```

<br />
As in the BARK tutorial, the code above will result in running the merging scenario with the ego vehicle depicted in blue:

<div align="center">

![BARK Simulator](../images/merging.gif)

</div>
<br />

BARK-ML extends the BARK environment with `Observer`, `Evaluator` and `Agent` modules.
The `Observer` converts a BARK world into a suitable representation for machine learning &ndash; e.g., a feature vector or graph structure.
The `Evaluator` returns a reward signal and determines whether the simulation state is terminal or not.
And, finally, BARK-ML offers an `Agent` that is able to learn behaviors for autonomous systems.

