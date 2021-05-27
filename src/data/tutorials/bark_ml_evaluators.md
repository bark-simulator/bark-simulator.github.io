---
title: "Evaluators"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---
BARK-ML evaluators define the reward signal and wehther an episode is terminal or not.
<br />
<br />
The base evaluator (`BaseEvaluator`) is given by:

```python
class BaseEvaluator(ABC):
  """Evaluates the state of the environment
  """
  def __init__(self,
               params=ParameterServer()):
    self._params = params
    self._evaluators = {}

  @abstractmethod
  def _add_evaluators(self):
    # NOTE: add BARK evaluators
    # evaluators = {}
    # evaluators["goal_reached"] = EvaluatorGoalReached()
    # evaluators["collision"] = EvaluatorCollisionEgoAgent()
    # evaluators["step_count"] = EvaluatorStepCount()
    # evaluators["drivable_area"] = EvaluatorDrivableArea()
    # return evaluators
    pass

  @abstractmethod
  def _evaluate(self, observed_world, eval_results, action):
    """Returns information about the current world state."""
    # terminal = False
    # success = eval_results["goal_reached"]
    # step_count = eval_results["step_count"]
    # collision = eval_results["collision"] or eval_results["drivable_area"] or \
    #  (step_count > self._max_steps)
    # if success or collision or step_count > self._max_steps:
    #   terminal = True

    # calculate reward
    # reward = collision * self._col_penalty + \
    #   success * self._goal_reward
    # return reward, terminal, eval_results
    pass

  def Evaluate(self, observed_world, action):
    """Evaluates the observed world
    """
    eval_results, reward, terminal = None, 0., False
    eval_results = observed_world.Evaluate()
    reward, terminal, eval_results = self._evaluate(
      observed_world, eval_results, action)
    return reward, terminal, eval_results

  def Reset(self, world):
    # reset evaluators
    world.ClearEvaluators()
    evaluators = self._add_evaluators()
    for key, evaluator in evaluators.items():
      world.AddEvaluator(key, evaluator)
    return world
```

Each `Evaluator` needs to overload the abstract functions `_add_evaluators(...)` and `_evaluate(...)`.
<br />
<br />
Currently available evaluators in BARK-ML:
* <b>GoalReached</b>: Gives a positive reward when the goal has been reached and a neagtive reward when a collision occurrs.
* <b>RewardShapingEvaluator</b>: Potential-based reward shaping for the goal-distance, desired velocity and distance to other agents.