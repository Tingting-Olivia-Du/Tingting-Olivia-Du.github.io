---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download CV (PDF)](/files/CV_TingtingDu_UW_Madison.pdf)

Education
======
* B.S. in Computer Science and Mathematics, University of Wisconsin-Madison, 2027 (expected)
  * GPA: 3.86/4.00
  * Honors: College of Letters & Science Dean's List
  * Relevant Courses: Autonomous Robotics, Operating System, Artificial Neural Network

* Visiting Student in Computer Science, University of California, Berkeley, 2023-2024
  * GPA: 3.77/4.00
  * Honors: Berkeley Global Access Scholarship
  * Relevant Courses: Real Analysis, Data Structures, Algorithm, Intro to Artificial Intelligence

* Undergraduate in Linguistics, Ningbo University, 2021-2023
  * GPA: 3.80/4.00
  * Honors: Zhejiang Provincial Scholarship (Top 3%, 2×)

Research Experience
======
* Jan 2026 - Present: **Vision-Language-Action Model Research**
  * University of Maryland, College Park
  * Advisor: Prof. Ang Li
  * Architected a multi-layer shared projector framework to bridge 2D and 3D representations in VLA models
  * Manuscript in submission to ICML

* Sep 2025 - Jan 2026: **Interpretability of LLM Reasoning**
  * University of Wisconsin-Madison
  * Advisor: Prof. Yiqiao Zhong
  * Developed an interpretability framework using token-level KL-divergence to pinpoint where language models correct logical reasoning errors during RLVR training

* Jul 2024 - Jan 2025: **Student Modeling for Question Generation**
  * University of Notre Dame
  * Advisor: Prof. Meng Jiang
  * Developed a student modeling approach for question generation
  * Published at ACL 2025

* Feb 2024 - Jun 2024: **Situated Language Use**
  * Berkeley Artificial Intelligence Research
  * Advisor: Prof. Alane Suhr
  * Analyzed situated language use and ad-hoc convention formation within a large-scale corpus in a virtual 3D environment

Skills
======
* **Programming Languages**
  * Python, Java, C++, JavaScript, TypeScript
  * LaTeX, Julia, R, SQL, Assembly

* **Frameworks & Tools**
  * ROS 2, Hugging Face Transformers, PyTorch
  * vLLM, PEFT/LoRA, Docker, Linux, AWS

* **Research Areas**
  * Vision-Language-Action Models
  * Large Language Model Reasoning
  * Robotics and Autonomous Systems

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
