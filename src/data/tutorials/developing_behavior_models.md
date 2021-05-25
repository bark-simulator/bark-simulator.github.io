---
title: "Developing Behavior Models"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

The `BehaviorModel` class is the core component that defines how an agent act/plans in the environment.
In this tutorial, a simple Python behavior model is created that drives in a straight line.
The video below provides additional insights on the development of behavior models for BARK.

<br />

<div align="center">

`youtube: https://www.youtube.com/watch?v=5qS7gzabp_c`

</div>

<br />

All behavior models in BARK are derived from the `BehaviorModel` base-class.
The base class implements three virtual functions that have to be (`Plan`, `Clone`) or can be overloaded (`ActionToBehavior`).
`ActionToBehavior` in most cases does not need to be implemented besides if the action of the behavior model is set externally.

The core functionality resides within the `Plan` function that outputs a state-space trajectory for an agent.
The `Clone` function specifies how a behavior model is cloned, e.g., if members should be preserved or be resetted.

A basic derived behavior model class is given by:

```python
import numpy as np
from bark.core.models.behavior import BehaviorModel

class DerivedBehaviorModel(BehaviorModel):
  def __init__(self,
               params=None):
    BehaviorModel.__init__(self, params)

  def Plan(self, step_time, observed_world):
    pass

  def Clone(self):
    pass

  def ActionToBehavior(self, action):
    pass
```

However, this is not a valid behavior model as the `Plan` function does not return or set a trajectory and the clone function does not return an object.
For a behavior model that drives in s straight line, the `Plan` function can be modified as follows:

```python
def Plan(self, step_time, observed_world):
  trajectory_points = 10
  start_time = observed_world.GetWorldTime()
  ego_vehicle_state = observed_world.CurrentEgoState()
  trajectory_time = np.linspace(
    start_time, start_time + step_time, trajectory_points)
  x_position = np.linspace(
    0, 10, trajectory_points)
  # 10 time steps x (time, x, y, theta and velocity)
  trajectory = np.zeros(shape=(trajectory_points, 5))
  trajectory[:, 0] = trajectory_time
  trajectory[:, 1] = x_position
  trajectory[:, 2:4] = ego_vehicle_state[2:4]
  # store the trajectory and return it
  super().SetTrajectory(trajectory)
  return trajectory
```

<br />

To use the new newly generated behavior model in the scenario generation, the `LaneCorridorConfig` has to be modified slightly from the [getting started](/tutorials/) to:

```python
class CustomLaneCorridorConfig(LaneCorridorConfig):
  def __init__(self,
               params=None,
               **kwargs):
    super(CustomLaneCorridorConfig, self).__init__(params, **kwargs)

  def goal(self, world):
    road_corr = world.map.GetRoadCorridor(
      self._road_ids, XodrDrivingDirection.forward)
    lane_corr = self._road_corridor.lane_corridors[0]
    # defines goal polygon on the left lane
    return GoalDefinitionPolygon(lane_corr.polygon)

  def controlled_behavior_model(self, world):
    return DerivedBehaviorModel(self._params)
```

The ego vehicle's behavior model is now the `DerivedBehaviorModel`.
