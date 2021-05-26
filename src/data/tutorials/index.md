---
title: "Getting Started With BARK"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK can simply be installed using `pip install bark-simulator`.
To build BARK from source, have a look [here](/tutorials/building_from_source/).
The output of this first tutorial should be the merging scenario shown below with the ego vehicle being depicted in blue.

<div align="center">

![BARK Simulator](../images/merging.gif)

</div>


First, several Python and C++ BARK modules have to be imported.
The `ParameterServer` in BARK manages all parameters and their default values.
BARK offers several visualization options with the Matplotlib viewer (`MPViewer`) primed for scientific publications.
The `ScenarioGeneration` module specifies the initial placement, states, behavior models, goals and more of the scenario.
The `Runtime` is used to step the BARK simulator for a pre-defined number of steps.

All modules having a path prefix of `bark.core.*` are C++ modules that are wrapped for Python.
For the example, some OpenDrive, goal definitions, and behavior models have to be imported.

```python
# BARK Python imports
from bark.runtime.commons.parameters import ParameterServer
from bark.runtime.viewer.matplotlib_viewer import MPViewer
from bark.runtime.scenario.scenario_generation.config_with_ease import \
  LaneCorridorConfig, ConfigWithEase
from bark.runtime.runtime import Runtime

# BARK c++ imports
from bark.core.world.opendrive import *
from bark.core.world.goal_definition import *
from bark.core.models.behavior import *
```

<br />


The `ParameterServer` in BARK handles all default and passed parameters as shown here:

```python
# parameters can also be set using JSON files
# param_server = ParameterServer(filename="config.json")
param_server = ParameterServer()
# this sets a default value
param_server["BehaviorIDMClassic"]["DesiredVelocity", "Default velocity", 8.]
# overwrites the default value
param_server["BehaviorIDMClassic"]["DesiredVelocity"] = 10.
```

<br />

The scenario can be easily set up using the `ConfigWithEase` scenario generation which enables configuring lanes individually.
For the merging scenario, the left and right lane are configured using a `LaneCorridorConfig`.

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

# configure both lanes
left_lane = CustomLaneCorridorConfig(params=param_server,
                                     lane_corridor_id=0,
                                     road_ids=[0, 1],
                                     behavior_model=BehaviorMobilRuleBased(param_server),
                                     s_min=0.,
                                     s_max=50.)

# this lane has controlled_ids; ego vehicle is placed on this lane
right_lane = CustomLaneCorridorConfig(params=param_server,
                                      lane_corridor_id=1,
                                      road_ids=[0, 1],
                                      controlled_ids=True,
                                      behavior_model=BehaviorMobilRuleBased(param_server),
                                      s_min=0.,
                                      s_max=20.)


# finally, generate 3 scenarios on the merging map
scenarios = \
  ConfigWithEase(
    num_scenarios=3,
    map_file_name=os.path.join(os.path.dirname(__file__),
      "../runtime/tests/data/DR_DEU_Merging_MT_v01_shifted.xodr"),
    random_seed=0,
    params=param_server,
    lane_corridor_configs=[left_lane, right_lane])
```

<br/>

To visualize the scenario, a viewer has to be passed to the BARK runtime.
Here, the `MPViewer` for scientific plots is used.

The `Runtime` additionally requires the scenario generator to be passed, the simulation step-time, and whether the scenarios should be rendered.

```python
viewer = MPViewer(params=param_server,
                  x_range=[-35, 35],
                  y_range=[-35, 35],
                  follow_agent_id=True)
env = Runtime(step_time=0.2,
              viewer=viewer,
              scenario_generator=scenarios,
              render=True)
```

<br />

Now everything is set up and the BARK `Runtime` can be stepped.
In the code below, each of the three scenarios is stepped and visualized for 90 steps.

```python
# run 3 scenarios
for _ in range(0, 3):
  env.reset()
  # step scenario 90 time-steps
  for step in range(0, 90):
    env.step()
```
<br />
The video below provides a deeper understanding of and motivation for BARK:

<br />
<br />

<div align="center">

`youtube: https://www.youtube.com/watch?v=pJuvZkHkdu0`

</div>
<br />