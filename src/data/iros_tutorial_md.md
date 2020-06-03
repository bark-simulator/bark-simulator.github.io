---
title: "Benchmarking Interactive Behavior Planning for Self-Driving
Vehicles using BARK"
subtitle: "Tutorial at IROS 2020, Oct. 25, Las Vegas, USA"

knoll: "Since 2001, Alois C. Knoll has been a professor of Computer Science at the Department of Informatics of the Technische Universität München. His research interests include cognitive, medical and sensor-based robotics, multi-agent systems, data fusion, adaptive systems, multimedia information retrieval, model-driven development of embedded systems with applications to automotive software and electric transportation, as well as simulation systems for robotics and traffic. In these fields, he has published over 600 technical papers and guest-edited international journals. At present, among other projects, he is the coordinator of the EU-Project ECHORD++, a large initiative for bringing together robotics industry, research institutes and universities with the aim of advancing new robot technologies to market-readiness. He is leader of the EU Human Brain Project's section on Neurorobotics, one of the two EU ICT Flagships with the largest funding ever in the EU's DG for research."

hart: "Patrick Hart is a PhD student at the Technical University of Munich (TUM) and fortiss.
His main research interest is how agents can learn complex behaviors in uncertain environments — using a reward signal or even less.
He obtained his Master's degree from the Karlsruhe Institute of Technology (KIT) and wrote his master thesis at the FZI Karlsruhe about search-based motion planning for autonomous vehicles in 2016.
In 2017, he then joined the autonomous systems group at fortiss and began to pursue his PhD.
At fortiss, he gained valuable insights in the field of autonomous driving working on autonomous valet parking, autonomous vehicles, and on simulation.
He is the initiator of BARK machine learning (BARK-ML) and one of the core developers of BARK."

esterle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ac ipsum luctus faucibus. Aenean dui ligula, cursus porttitor sagittis eu, dictum eget mi. Nullam urna sem, consectetur at nibh non, pellentesque fermentum elit. Pellentesque dapibus viverra consequat. Etiam sed ex ultricies, tempor mauris faucibus, molestie ex. Vestibulum in tristique risus, sit amet vestibulum lacus. Praesent sit amet felis sit amet diam fermentum gravida."

bernhard: "Julian Bernhard is a PhD student at TUM and fortiss. His research focuses on risk-constrained interactive motion planning under behavioral uncertainty. He studied Electrical Engineering at the Technische Universität München with focus on machine learning, control theory and signal processing and graduated with the Master of Science in 2014. Afterwards, he worked as a consulting engineer in the field of signal processing. In 2017, he joined fortiss as a staff researcher in the competence field autonomous systems and sensor systems and started his PhD. He gained experience in autonomous driving during industry cooperations for autonomous vallet parking, during working on autonomous vehicle prototypes and is one of the initiators and main developers of BARK."

kessler: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ac ipsum luctus faucibus. Aenean dui ligula, cursus porttitor sagittis eu, dictum eget mi. Nullam urna sem, consectetur at nibh non, pellentesque fermentum elit. Pellentesque dapibus viverra consequat. Etiam sed ex ultricies, tempor mauris faucibus, molestie ex. Vestibulum in tristique risus, sit amet vestibulum lacus. Praesent sit amet felis sit amet diam fermentum gravida."
---


## About the Tutorial
BARK is an open-source benchmarking platform to foster a comparison of approaches developed in the field of interactive decision making for self-driving vehicles.
BARK offers a unique approach with behavior models being used exchangeably for prediction, planning, and simulation.
To grow the community around a common benchmarking platform, we want to enable participants to employ BARK within research and industry projects.
<br />
<br />
<b>Attendees of the tutorial will:</b>
- Understand the principles of state-of-the-art approaches in interactive behavior planning (POMDP planning, Multi-Agent planning)
- Understand the pros and cons of state-of-the-art approaches
- Understand requirements on benchmarking platforms to systematically develop interactive behavior planners
- Gain hands-on-experience with BARK as benchmarking platform for interactive planners
- Implement and benchmark their own interactive-behavior planner
<br />
<br />

<b>Topics of interest:</b>
- Behavior Benchmarking
- Autonomous Driving
- Multi-Agent Systems
- Interactive Planning
<br />
<br />


<b>Target audience:</b>
- <i>PhD students</i> (in robotics, in software engineering) who want to practically learn about cutting edge benchmarking approaches for interactive decision making algorithms. This tutorial provides a good entry point to understand the state-of-the-art in this field. It gives them an understanding of the current challenges and upcoming future research directions. By gaining hands-on-experience with problems in interactive decision making, new researches are encouraged to directly tackle the open problems in this field.
- <i>Experienced robotics researchers from academia</i> and industry who want to get to know a new benchmarking platform for autonomous driving and multi-agent systems tailored to the analysis of interactive decision making algorithms. BARK offers a unique approach with behavior models being used exchangeably for prediction, planning, and simulation. This could attract domain experts providing them a comprehensive framework for research in behavior modeling.
- <i>Practitioners from industry</i> who want to extend their workflow and easily benchmark developed planning approaches against other state-of-the-art models in a variety of standard scenarios.
<br />
<br />
To take away as much as possible of the tutorial, the participants should have some background in decision making, i.e understand the fundamental principles of decision
problems, e.g. MDPs and POMDPs, and have experience with Python and a basic understanding of C++.
<br />

## Resources

Relevant links giving an impression on the background on which this tutorial is based:
- [Bark Core on GitHub](https://github.com/bark-simulator/bark)
- [Bark Paper](https://arxiv.org/abs/2003.02604)
- [Bark Ecosystem on GitHub](https://github.com/bark-simulator)


## News:
(Last update June 5th)

- June 5th 2020: Tutorial website available


## Program

The tutorial mixes slide presentations and interactive sessions.
Short spot light talks will provide hands-on experience from industry researchers.
<br />
<table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Time</th>
      <th class="px-4 py-2">Talk</th>
      <th class="px-4 py-2">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border px-4 py-2">9:00 - 9:30</td>
      <td class="border px-4 py-2">Principles of Interactive Decision Making</td>
      <td class="border px-4 py-2">Slides presentation</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">9:30 - 10:00</td>
      <td class="border px-4 py-2">Requirements on Benchmarking & Introduction to BARK</td>
      <td class="border px-4 py-2">Slides presentation</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10:00 - 10:30</td>
      <td class="border px-4 py-2">BARK Installation & Setup</td>
      <td class="border px-4 py-2">Interactive Session</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">10:30 - 11:00</td>
      <td class="border px-4 py-2">Coffee Break</td>
      <td class="border px-4 py-2"></td>
    </tr>
    <tr>
      <td class="border px-4 py-2">11:00 - 12:00</td>
      <td class="border px-4 py-2">Design of Scenario Set for Benchmarking, Start Benchmarking</td>
      <td class="border px-4 py-2">Interactive Session</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">12:00 - 12:30</td>
      <td class="border px-4 py-2">Multi-Agent and Uncertainty-Aware Planning</td>
      <td class="border px-4 py-2">Slides Presentation</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">12:30 - 13:00</td>
      <td class="border px-4 py-2">Analysis and Discussion of Benchmark, Open Questions</td>
      <td class="border px-4 py-2">Interactive Session </td>
    </tr>
    <tr>
      <td class="border px-4 py-2">13:00</td>
      <td class="border px-4 py-2">End</td>
      <td class="border px-4 py-2"></td>
    </tr>
  </tbody>
</table>
<br />

### Guests Speakers:

- <b>Constantin Hubmann</b>, PhD, Toyota Research Institute, US

## About BARK

Predicting and planning interactive behaviors in complex traffic situations presents a challenging task.
Especially in scenarios involving multiple traffic participants that interact densely, autonomous vehicles still struggle to interpret situations and to eventually achieve their own driving goal.
BARK is a semantic simulation framework for autonomous agents with a special focus on autonomous driving.
Its behavior model-centric design allows for the rapid development, training, and benchmarking of various decision-making algorithms.
<br />
<br />
In BARK, behavior models are (re-)used for planning, prediction, and simulation.
A range of models is currently available, ranging from simplistic car-following to rule-based intersection crossing models and models derived from the planning community such as Monte-Carlo Tree Search and Reinforcement Learning-based behavior models.
<br />
<br />
In addition to that, BARK provides an easy to use benchmarking process to compare various behavior models based on using BARK's data-based or sampling-based scenario generation.
BARK supports the replay of the [Interaction Dataset](https://interaction-dataset.com/) with the possibility to (partially) exchange recorded behavior with interactive models.
Coverage-based sampling criteria are supported not only over physical scenario properties such as velocity and vehicle distance ranges but also over hidden behavior model parameters.
<br />
<br />

![BARK Simulator](./images/bark_screenshot.png)

<br />
<br />

## Organizers
