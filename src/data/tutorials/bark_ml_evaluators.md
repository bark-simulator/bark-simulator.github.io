---
title: "Evaluators"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---
BARK-ML evaluators output a reward signal and whether an eipsode is terminal given an BARK observerd world.
<br />
<br />
The base evaluator is given by:
```python
class StateEvaluator(ABC):
  """Evaluates the state of the environment
  """
  def __init__(self,
               params=ParameterServer()):
    self._params = params
    self._evaluators = {}
  
  @abstractmethod
  def _add_evaluators(self):
    # here BARK evaluators are added
    pass

  @abstractmethod
  def _evaluate(self, observed_world, eval_results, action):
    # return: reward, done, eval_results
    # 1. calculation of the reward signal
    # 2. whether an episode is terminal
    pass

  def Evaluate(self, observed_world, action):
    """Evaluates the observed world
    """
    eval_results, reward, done = None, 0., False
    eval_results = observed_world.Evaluate()
    reward, done, eval_results = self._evaluate(
      observed_world, eval_results, action)
    return reward, done, eval_results

  def Reset(self, world):
    world.ClearEvaluators()
    self._add_evaluators()
    for key, evaluator in self._evaluators.items():
      world.AddEvaluator(key, evaluator)
    return world
```
Each derived evaluator class needs to implement the abstract functions `_add_evaluators(...)` and `_evaluate(...)`.
<br />
<br />
Currently available evaluators in BARK-ML:
* <b>GoalReached</b>: Gives a positive reward when the goal has been reached and a neagtive reward when a collision occurrs.
* <b>GoalReachedEvaluator</b>: C++ evaluator that gives a positive reward when the goal has been reached and a neagtive reward when a collision occurrs.