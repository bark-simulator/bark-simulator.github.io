---
title: "Developing Behavior Models"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

Now, to the fun part! In this section, we will develop our first BARK behavior model.
<br />
<br />

In order for a behavior model to work in BARK it needs to be derived from the `BehaviorModel` class.
This class has three virtual functions that can be overloaded: `Plan`, `Clone`, and `ActionToBehavior`.
The latter is only required if the action of the behavior model should be set externally.
The `Plan` function is the main functionality that needs to be implemented.
It returns a trajectory and stores the trajectory internally for the behavior model.
The `Clone` function specifies how a behavior model should be cloned.
<br />
<br />

A basic derived behavior model class could look something like this:

```python
import numpy as np
from bark.models.behavior import BehaviorModel

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
However, this would not be a valid behavior model as the `Plan` function does not return or set a trajectory.
<br />
<br />
To implement a valid behavior model, let us modify the `Plan` function:

```python
def Plan(self, step_time, observed_world):
  trajectory_points = 10
  start_time = observed_world.GetWorldTime()
  ego_vehicle_state = observed_world.CurrentEgoState()
  trajectory_time = np.linspace(
    start_time, start_time + step_time, trajectory_points)
  # 10 time steps x (time, x, y, theta and velocity)
  trajectory = np.zeros(shape=(trajectory_points, 5))
  trajectory[:, 0] = trajectory_time
  trajectory[:, 1:4] = ego_vehicle_state
  # store the trajectory and return it
  super().SetTrajectory(trajectory)
  return trajectory
```
This now poses a fully functional behavior model. Although, it does not do much besides standing on a single point.
However, for simplicity reasons let us continue with this model.
<br />
<br />
Next, we need to generate scenarios and set our newly created behavior model for the ego vehicle.
Therefore, we use the same scenario used as in the [merging example](/tutorials/) but modify the scenario generation slightly.
<br />
<br />
We now set the `DerivedBehaviorModel` for the controlled behavior model as follows:
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
Once you run the modified [merging example](/tutorials/) code, the ego vehicle should just stand still and not move.
<br />
<br />
Congratulations, you just successfully implemented your first behavior model in BARK!
