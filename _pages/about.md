---
permalink: /
title: "Tingting Du"
hide_title: true
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="hero reveal">
  <p class="hero__eyebrow">Robot Learning &middot; Vision-Language-Action</p>
  <h1 class="hero__name">Tingting Du</h1>
  <p class="hero__lede">
    B.S. student in <strong>Computer Science and Mathematics</strong> at the
    <strong>University of Wisconsin&ndash;Madison</strong>. I build robot learning systems
    that connect language, perception, and physical action &mdash; currently on
    <strong>trimanual manipulation</strong> in the RT&sup2; Lab.
  </p>
  <ul class="hero__chips">
    <li><i class="fas fa-flask"></i> RT&sup2; Lab, UW&ndash;Madison</li>
    <li><i class="fas fa-robot"></i> Trimanual Manipulation</li>
    <li><i class="fas fa-location-dot"></i> Madison, WI</li>
  </ul>
  <div class="btn-row">
    <a class="ui-btn ui-btn--primary" href="{{ '/files/CV_TingtingDu_UW_Madison.pdf' | relative_url }}"><i class="fas fa-file-lines"></i> Curriculum Vitae</a>
    <a class="ui-btn" href="{{ site.author.googlescholar }}"><i class="ai ai-google-scholar"></i> Google Scholar</a>
    <a class="ui-btn" href="https://github.com/{{ site.author.github }}"><i class="fab fa-github"></i> GitHub</a>
    <a class="ui-btn" href="mailto:tdu35@wisc.edu"><i class="fas fa-envelope"></i> Email</a>
  </div>
</div>

## Demos

<p class="section-note">A look at what the systems I work on actually do &mdash; one robot, one model.</p>

<div class="demo-stack">

  <article class="demo-card reveal">
    <header class="demo-card__head">
      <span class="demo-card__index">01</span>
      <div class="demo-card__titles">
        <h3 class="demo-card__title">Trimanual Manipulation &mdash; RT&sup2; Lab, UW&ndash;Madison</h3>
        <p class="demo-card__meta">
          Ongoing, with <a href="https://www.cs.wisc.edu/staff/hagenow-mike/">Prof. Mike Hagenow</a>
          &middot; <a href="https://wisc-rt2.github.io/">Robot Teaching &amp; Teaming Lab</a>
        </p>
      </div>
    </header>

    <figure class="demo-media demo-media--video">
      <video
        src="{{ '/assets/media/trimanual-episode.mp4' | relative_url }}"
        poster="{{ '/assets/media/trimanual-poster.jpg' | relative_url }}"
        muted loop playsinline preload="none"
        aria-label="Four synchronized camera views of a trimanual robot rearranging coloured blocks on a pegboard"></video>
      <div class="demo-media__grid-labels">
        <span>Scene</span>
        <span>Wrist &middot; 1</span>
        <span>Wrist &middot; 2</span>
        <span>Wrist &middot; 3</span>
      </div>
      <span class="demo-media__live">Episode 0011</span>
      <button class="demo-media__play" type="button" aria-label="Pause demo"></button>
    </figure>

    <div class="demo-card__body">
      <p>
        A single recorded episode, played back across the four synchronized camera streams the
        policy sees: one scene overview plus a wrist view per arm. Three coordinating arms
        rearrange coloured blocks across pegboards &mdash; a setting where the hard part is not
        the individual grasp but keeping three end-effectors, three viewpoints, and one shared
        workspace consistent over a long horizon.
      </p>
      <div class="demo-card__footer">
        <ul class="tag-row">
          <li>Trimanual coordination</li>
          <li>Learning from demonstration</li>
          <li>Multi-view perception</li>
          <li>Long-horizon manipulation</li>
        </ul>
        <div class="link-row">
          <a href="https://wisc-rt2.github.io/"><i class="fas fa-arrow-up-right-from-square"></i> Lab site</a>
        </div>
      </div>
    </div>
  </article>

  <article class="demo-card reveal">
    <header class="demo-card__head">
      <span class="demo-card__index">02</span>
      <div class="demo-card__titles">
        <h3 class="demo-card__title">ROCKET &mdash; Spatially-Aware Vision-Language-Action Models</h3>
        <p class="demo-card__meta">
          arXiv 2026 &middot; with the <a href="https://www.ang-li.com/">CASE Lab</a>,
          University of Maryland
        </p>
      </div>
    </header>

    <figure class="demo-media demo-media--figure">
      <img
        src="{{ '/images/demos/rocket-overview.png' | relative_url }}"
        width="1500" height="820" loading="lazy" decoding="async"
        alt="ROCKET architecture: a VLA model's residual stream is aligned layer-by-layer with a frozen 3D foundation model through a shared projector, with Matryoshka-style activation, producing end-effector deltas.">
      <span class="demo-media__zoom"><i class="fas fa-expand"></i> Click to enlarge</span>
    </figure>

    <div class="demo-card__body">
      <p>
        VLA models read pixels well but reason about space poorly. ROCKET aligns the VLA's
        residual stream <em>layer by layer</em> with a frozen 3D foundation model through a shared
        projector, using Matryoshka-style activation so depth cues at different ranges land in
        different parts of the representation. Spatial grounding is distilled into the policy
        during training, so no depth sensor is needed at inference.
      </p>
      <div class="demo-card__footer">
        <ul class="tag-row">
          <li>Multi-layer alignment</li>
          <li>3D foundation models</li>
          <li>Matryoshka representations</li>
          <li>Spatial reasoning</li>
        </ul>
        <div class="link-row">
          <a href="https://arxiv.org/abs/2602.17951"><i class="ai ai-arxiv"></i> arXiv</a>
          <a href="{{ '/files/rocket_overview.pdf' | relative_url }}"><i class="fas fa-file-pdf"></i> Overview</a>
          <a href="{{ '/publication/2026-rocket' | relative_url }}"><i class="fas fa-arrow-up-right-from-square"></i> Details</a>
        </div>
      </div>
    </div>
  </article>

</div>

## About

<p>
  I am an undergraduate at the <strong>University of Wisconsin&ndash;Madison</strong>, studying
  Computer Science and Mathematics. Before Madison I was a visiting student in Computer Science
  at <strong>UC Berkeley</strong>, and I began my studies in Linguistics at
  <strong>Ningbo University</strong>.
</p>

<p>
  I currently work with <a href="https://www.cs.wisc.edu/staff/hagenow-mike/">Prof. Mike Hagenow</a>
  in the <a href="https://wisc-rt2.github.io/">Robot Teaching and Teaming (RT&sup2;) Lab</a> at
  UW&ndash;Madison on <strong>trimanual manipulation</strong>. Previously I worked with
  <a href="https://www.ang-li.com/">Prof. Ang Li</a> in the <strong>CASE Lab</strong> at the
  University of Maryland on Vision-Language-Action models, with
  <a href="http://www.meng-jiang.com/">Prof. Meng Jiang</a> at the
  <strong>University of Notre Dame</strong> on student modeling and question generation, and with
  <a href="https://alanesuhr.com/">Prof. Alane Suhr</a> at
  <strong>Berkeley AI Research</strong> on situated language understanding.
</p>

## Research Focus

<div class="topic-grid">
  <div class="topic-card reveal">
    <span class="topic-card__icon"><i class="fas fa-cube"></i></span>
    <h3>Vision-Language-Action Models</h3>
    <p>
      Giving policies a sense of 3D space and scale, and understanding what the data
      and benchmarks behind them actually measure.
    </p>
  </div>
  <div class="topic-card reveal">
    <span class="topic-card__icon"><i class="fas fa-hands"></i></span>
    <h3>Multi-Arm Manipulation</h3>
    <p>
      Coordinating several arms and viewpoints on long-horizon, contact-rich tasks,
      and learning those behaviours from human demonstration.
    </p>
  </div>
  <div class="topic-card reveal">
    <span class="topic-card__icon"><i class="fas fa-comments"></i></span>
    <h3>Grounded Language &amp; Reasoning</h3>
    <p>
      How people and models use language in situated, collaborative settings &mdash;
      and how memory and simulation improve agent reasoning.
    </p>
  </div>
</div>

## Updates

<ul class="timeline">
  <li class="is-new">
    <span class="timeline__date">2026.08</span>
    Joined the <a href="https://wisc-rt2.github.io/">RT&sup2; Lab</a> at UW&ndash;Madison with
    <a href="https://www.cs.wisc.edu/staff/hagenow-mike/">Prof. Mike Hagenow</a>, working on
    <strong>trimanual manipulation</strong>.<span class="timeline__new">New</span>
  </li>
  <li>
    <span class="timeline__date">2026.04</span>
    Our Vision-Language-Action survey was accepted to <strong>TMLR</strong>.
  </li>
  <li>
    <span class="timeline__date">2026.02</span>
    <strong>ROCKET</strong> released on arXiv.
  </li>
  <li>
    <span class="timeline__date">2025.12</span>
    Collaborative situated game paper released on arXiv.
  </li>
  <li>
    <span class="timeline__date">2025.01</span>
    <strong>QG-SMS</strong> accepted to <strong>ACL 2025</strong>.
  </li>
  <li>
    <span class="timeline__date">2024.06</span>
    Completed a research internship at <strong>Berkeley AI Research</strong>.
  </li>
</ul>

## Publications

<ul class="pub-list">
  <li>
    <div class="pub-list__top">
      <span class="venue">arXiv 2026</span>
      <span class="pub-title">ROCKET: Residual-Oriented Multi-Layer Alignment for Spatially-Aware Vision-Language-Action Models</span>
    </div>
    <p class="pub-authors">G. Sun, <strong>T. Du</strong>, K. Feng, C. Luo, X. Ding, Z. Shen, Z. Wang, Y. He, A. Li</p>
    <p class="pub-venue-line">arXiv:2602.17951</p>
    <div class="link-row">
      <a href="https://arxiv.org/abs/2602.17951"><i class="ai ai-arxiv"></i> arXiv</a>
      <a href="https://doi.org/10.48550/arXiv.2602.17951"><i class="fas fa-link"></i> DOI</a>
      <a href="{{ '/publication/2026-rocket' | relative_url }}"><i class="fas fa-arrow-up-right-from-square"></i> Details</a>
    </div>
  </li>
  <li>
    <div class="pub-list__top">
      <span class="venue">TMLR 2026</span>
      <span class="pub-title">Vision-Language-Action in Robotics: A Survey of Datasets, Benchmarks, and Data Engines</span>
    </div>
    <p class="pub-authors">Z. Wang, B. Wang, H. Zhang, <strong>T. Du</strong>, T. Chen, G. Sun, Y. He, Z. Shen, W. Ye, A. Li</p>
    <p class="pub-venue-line">Transactions on Machine Learning Research</p>
    <div class="link-row">
      <a href="https://arxiv.org/abs/2604.23001"><i class="ai ai-arxiv"></i> arXiv</a>
      <a href="https://doi.org/10.48550/arXiv.2604.23001"><i class="fas fa-link"></i> DOI</a>
      <a href="{{ '/publication/2026-vla-survey' | relative_url }}"><i class="fas fa-arrow-up-right-from-square"></i> Details</a>
    </div>
  </li>
  <li>
    <div class="pub-list__top">
      <span class="venue">ACL 2025</span>
      <span class="pub-title">QG-SMS: Enhancing Test Item Analysis via Student Modeling and Simulation</span>
    </div>
    <p class="pub-authors">B. Nguyen, <strong>T. Du</strong>, M. Yu, L. Angrave, M. Jiang</p>
    <p class="pub-venue-line">Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics</p>
    <div class="link-row">
      <a href="{{ '/publication/2025-qg-sms' | relative_url }}"><i class="fas fa-arrow-up-right-from-square"></i> Details</a>
    </div>
  </li>
  <li>
    <div class="pub-list__top">
      <span class="venue venue--muted">arXiv 2025</span>
      <span class="pub-title">Characterizing Language Use in a Collaborative Situated Game</span>
    </div>
    <p class="pub-authors">N. Tomlin, N. Zhou, E. Fleisig, L. Chen, T. Wright, L. Vinh, L.X. Ma, S. Eisape, <strong>T. Du</strong>, T. Zhang, A. Koller, A. Suhr</p>
    <p class="pub-venue-line">arXiv:2512.03381</p>
    <div class="link-row">
      <a href="https://arxiv.org/abs/2512.03381"><i class="ai ai-arxiv"></i> arXiv</a>
      <a href="https://doi.org/10.48550/arXiv.2512.03381"><i class="fas fa-link"></i> DOI</a>
      <a href="{{ '/publication/2025-situated-language' | relative_url }}"><i class="fas fa-arrow-up-right-from-square"></i> Details</a>
    </div>
  </li>
  <li>
    <div class="pub-list__top">
      <span class="venue venue--muted">ICML 2025 Workshop</span>
      <span class="pub-title">Agent KB: A Hierarchical Memory Framework for Cross-Domain Agentic Problem Solving</span>
    </div>
    <p class="pub-authors">X. Tang, T. Qin, T. Peng, Z. Zhou, D. Shao, <strong>T. Du</strong>, X. Wei, H. Zhu, G. Zhang, et al.</p>
    <p class="pub-venue-line">Workshop on Collaborative and Federated Agentic Workflows</p>
    <div class="link-row">
      <a href="{{ '/publication/2025-agent-kb' | relative_url }}"><i class="fas fa-arrow-up-right-from-square"></i> Details</a>
    </div>
  </li>
</ul>

## Education

<ul class="edu-list">
  <li>
    <span class="edu-list__when">Jan 2025 &ndash; May 2027</span>
    <span class="edu-list__what">
      <strong>University of Wisconsin&ndash;Madison</strong>
      <span>B.S. in Computer Science and Mathematics (expected)</span>
    </span>
  </li>
  <li>
    <span class="edu-list__when">2023 &ndash; 2024</span>
    <span class="edu-list__what">
      <strong>University of California, Berkeley</strong>
      <span>Visiting Student in Computer Science</span>
    </span>
  </li>
  <li>
    <span class="edu-list__when">2021 &ndash; 2023</span>
    <span class="edu-list__what">
      <strong>Ningbo University</strong>
      <span>Undergraduate studies in Linguistics</span>
    </span>
  </li>
</ul>
