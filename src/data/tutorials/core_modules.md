---
title: "Core Modules"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

The <b>core modules</b> of the BARK simulator are:

* The `World` and `ObservedWorld` that contain all agents, the map, goals, and more,
* the `Agent` that represents an entity in the environment that is controlled by a policy,
* the `MapInterface` that contains all map-related functionalities, and
* the `BehaviorModel`, `ExecutionModel`, and `DynamicModel` that specify the characteristics of an agent.
</br>
</br>

In this tutorial, a short overview of these components is given.
For deeper insights and a comprehensive overview of the components, we refer to our [documentation](https://bark-simulator.readthedocs.io/en/latest/).


## World and Observed World

The `World` class is in the center of BARK and contains all objects, the map, agents, and all further objects required for the simulation.
The world's step function advances the simulation by the given `delta_time` by calling `DoPlanning` and `DoExecution`.
In the `DoPlanning` function each agent receives an observed world (a world that is derived from the actual world) and plans its action given that world.
This enables introducing perturbation to each agent in BARK, such as measurement uncertainties or occlusions.
The `DoExecution` function interpolates the state between the trajectory states produced by the `DoPlanning` function.

An excerpt of the `World` class and its most important functions and members:

```cpp
class World : public commons::BaseType {
 public:
  explicit World(const commons::ParamsPtr& params);
  explicit World(const std::shared_ptr<World>& world);
  virtual ~World() {}

  std::vector<ObservedWorld> Observe(const std::vector<AgentId>& agent_ids);
  void Step(const float& delta_time);
  void DoPlanning(const float& delta_time);
  void DoExecution(const float& delta_time);
  virtual std::shared_ptr<World> Clone() const;
  ...
 private:
  world::map::MapInterfacePtr map_;
  AgentMap agents_;
  ObjectMap objects_;
  std::map<std::string, EvaluatorPtr> evaluators_;
  double world_time_;
  rtree_agent rtree_agents_;
  bool remove_agents_;
};
```

<br />

The `ObservedWorld` class is at the center of BARK's concept.
It enables introducing deterministic perturbations that can be used to benchmark the influence of, e.g., uncertainties.
As each agent receives one `ObservedWorld` for planning, theses are agent specific and additionally store the `AgentId` (of the observing agent).

An excerpt of the `ObservedWorld` class showing some of the additional functionalities:
```cpp
class ObservedWorld : public World {
 public:
  ObservedWorld(const WorldPtr& world, const AgentId& ego_agent_id) :
    World(world),
    ego_agent_id_(ego_agent_id) {}
  ~ObservedWorld() {}
  FrontRearAgents GetAgentFrontRear() const;
  ...
  std::shared_ptr<const Agent> GetEgoAgent() const {
    return World::GetAgent(ego_agent_id_);
  }
  AgentId GetEgoAgentId() const { return ego_agent_id_; }
  const std::shared_ptr<BehaviorModel> GetEgoBehaviorModel() const {
    return World::GetAgent(ego_agent_id_)->GetBehaviorModel();
  }
  virtual State CurrentEgoState() const {
    return World::GetAgent(ego_agent_id_)->GetCurrentState();
  }
  Point2d CurrentEgoPosition() const {
    return World::GetAgent(ego_agent_id_)->GetCurrentPosition();
  }
  ...
 private:
  AgentId ego_agent_id_;
};
```

## Agent
The agents (vehicles) in BARK are dynamic objects that have a behavior, execution, and dynamic model.
Additionally, to model intent, each agent in BARK has a goal definition.
The behavior model plans a trajectory to reach the defined goal and the execution model makes the trajectory executable by the dynamic system.
The dynamic model can be used by both, the behavior and execution model, to create dynamically feasible trajectories.
BARK additionally offers a high-level map routing called the `RoadGraph` that stores `RoadCorridor` and `LaneCorridor`.
RoadCorridors are multiple concatenated roads that each contain lanes.
`LaneCorridors` are multiple concatenated lanes that are consecutive within the `RoadCorridors`.
<br />
Excerpt of the `Agent` class:
```cpp
class Agent : public Object {
 public:
  friend class World;

  Agent(const State& initial_state,
        const BehaviorModelPtr& behavior_model_ptr,
        const DynamicModelPtr& dynamic_model_ptr,
        const ExecutionModelPtr& execution_model,
        const geometry::Polygon& shape,
        const commons::ParamsPtr& params,
        const GoalDefinitionPtr& goal_definition = GoalDefinitionPtr(),
        const MapInterfacePtr& map_interface = MapInterfacePtr(),
        const geometry::Model3D& model_3d = geometry::Model3D());
  ...
 private:
  BehaviorModelPtr behavior_model_;
  DynamicModelPtr dynamic_model_;
  ExecutionModelPtr execution_model_;
  RoadCorridorPtr road_corridor_;
  StateActionHistory history_;
  uint32_t max_history_length_;
  GoalDefinitionPtr goal_definition_;
};
```

## Map Interface

The `MapInterface` implements all map-related functionalities &ndash; the map itself, routing, and an abstraction layer.
The `RoadGraph` enables querying the shortest route from a start to a goal position returning a sequence of roads and lane identifiers.
Each agent has a routing in the form of multiple connected roads called the `RoadCorridor` the agent (vehicle) should follow these and is only allowed to stay within this `RoadCorridor`.


The `RoadCorridor` polygon is depicted in light blue and the LaneCorridor's contours are depicted as blue lines in the figure below.

![RoadCorridor](../images/roadcorridor_[0, 2, 4].png)


Excerpt of the `RoadCorridor` class:
```cpp
struct RoadCorridor {
  ...

  GetLeftRightLaneCorridor(const Point2d& pt) const;

  static std::size_t GetHash(
    const XodrDrivingDirection& driving_direction,
    const std::vector<XodrRoadId>& road_ids) {
    // calculate hash using driving_direction and road_ids
    ...
  }

  Roads roads_;
  Polygon road_polygon_;
  std::vector<LaneCorridorPtr> unique_lane_corridors_;
  std::vector<XodrRoadId> road_ids_;
  std::map<LaneId, LaneCorridorPtr> lane_corridors_;
};
```

