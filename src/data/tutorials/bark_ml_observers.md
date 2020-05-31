---
title: "Observers"
subtitle: "Las Vegas, 25th of October, 10am to 1pm"
---

BARK-ML observers convert the BARK world into a representation that can be used by machine learning algorithms, e.g. a vectorial representation.
For example, a simple observer could concatenated the n-nearest states of other vehicles around the ego vehicle.
<br />
<br />
The base class of the observer looks as follows:
```python
class StateObserver(ABC):
  def __init__(self,
               params):
    self._params = params
    ...

  @abstractmethod
  def Observe(self, observed_world):
    """Observes the world
    
    Arguments:
        world {bark.ObservedWorld} -- observed BARK world
    
    Returns:
        np.array -- array
    """
    pass

  def Reset(self, world):
    ...

  @property
  def observation_space(self):
    pass
```

Each derived observer has to implements the `Observe` function and has to provide the `observation_space`.
<br />
<br />
Currently available standard observers in BARK-ML:
* <b>NearestAgentsObserver</b>: Concatenates the states of the n-nearest agents that are within a defined threshold radius.
* <b>NearestObserver</b>: C++ observer that concatenates the states of the n-nearest agents that are within a defined threshold radius.
* <b>SimpleObserver</b>: Concatenates all agent states.