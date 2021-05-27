---
title: "Observers"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK-ML observers convert the BARK world into a suitable input representation for machine learning, such as a vectorial representation that can be used by deep neural networks.
There are several observers available ranging from concatenated state vector to graph representations.
<br />
<br />
The observer base class (`BaseObserver`) looks as follows:

```python
class BaseObserver(ABC):
  def __init__(self,
               params):
    self._params = params

  @abstractmethod
  def Observe(self, observed_world):
    """Generates an observation for the BARK world

    Arguments:
        world {bark.ObservedWorld} -- observed BARK world

    Returns:
        e.g., np.array, graph, ...
    """
    pass

  def Reset(self, world):
    pass

  @property
  def observation_space(self):
    pass
```

Each `Observer` in BARK has to implement two functions (`Observe` and `Reset`) and the property `observation_space`.
The `Observe` function returns a machine learning friendly input representation, such as a numpy array or graph.
Observers that trace vehicles over the course of an episode might require the `Reset` function to be overloaded to, e.g., reset member variables.
And, finally, the property `observation_space` needs to be defined that tells the learning agent the dimension of the input space.
<br />
<br />
BARK-ML implements currently these observers:
* <b>NearestAgentsObserver</b>: Concatenates the states of the n-nearest agents that are within a defined threshold radius.
* <b>NearestObserver</b>: C++ observer that concatenates the states of the n-nearest agents that are within a defined threshold radius.
* <b>SimpleObserver</b>: Concatenates the states of agents in the environment and returns a row vector.
* <b>GraphObserver</b>: Returns a directed graph of N vehicles.