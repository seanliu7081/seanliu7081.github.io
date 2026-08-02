---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am working on Robot Policy Learning and Geometric Learning at [The Helping Hands Lab](https://www2.ccs.neu.edu/research/helpinghands/) in [Northeastern University](https://www.northeastern.edu/), advised by Professor [Robert Platt](https://www.khoury.northeastern.edu/people/robert-platt/) and PhD Candidate [Haojie Huang](https://haojhuang.github.io/). Previously, I conducted research on multiple robotic and computer vision topics: Deep Learning Optimization for 3D Vision, FDM Printing for Soft Robotics, and Healthcare Automated Monitoring System. My past research works are supervised by Prof. [Ziming Zhang](https://www.wpi.edu/people/faculty/zzhang15) at [VISLab@WPI](https://zhang-vislab.github.io/), Prof. [Markus P. Nemitz](https://engineering.tufts.edu/me/people/faculty/markus-nemitz) at [Nemitz Robotics Group](https://sites.tufts.edu/nemitz/), and Prof. [Christopher Nycz](https://www.linkedin.com/in/christophernycz/) at [AIM Lab](https://aimlab.wpi.edu/). CV: [Link](../files/Haotian_Liu_CV_25_SPr.pdf). Contact: seanliu0272 [At] gmail [Dot] com

## News

- **June 30, 2024:** Our paper, "Loss Distillation via Gradient Matching for Point Cloud Completion with Weighted Chamfer Distance," has been accepted for an **Oral Presentation** at IEEE/RSJ IROS 2024.
- **January 31, 2024:** Our paper, "Vision-based FDM Printing for Fabricating Airtight Soft Actuators," has been accepted for an **Oral Presentation** at IEEE RoboSoft 2024.

## Research Vision

My long-term research goal is to build automation systems that can adapt reliably to new environments through trustworthy perception and learned motion strategies grounded in structured reasoning. These systems will assist humans in accomplishing challenging tasks in the physical world.

## Selected Publications

<div class="selected-publications">
  <h3 class="publication-category">Policy Learning for Robotic Manipulation</h3>

  <article class="publication">
    <div class="publication__info">
      <h4 class="publication__title">Pix2Act: Image-Space Manipulation Policies with Equivariant Augmentation</h4>
      <p><i>Haojie Huang, Linfeng Zhao, <strong>Haotian Liu</strong>, Zhang Ye, Si-Yuan Huang, Mingxi Jia, Boce Hu, Fangzhou Lin, Yu Qi, Dian Wang, Robin Walters*, Robert Platt*</i> (* Equal Advising)</p>
      <p>In Submission, <a href="https://arxiv.org/abs/2607.11167">Paper</a>, <a href="https://haojhuang.github.io/pix2act_page/">Project Page</a></p>
    </div>
    <figure class="publication__media">
      <img src="{{ '/images/pix2act.png' | relative_url }}" alt="Dual-camera robot-gripper pipeline showing equivariant image augmentations yielding the same triangulated 3D keypoint trajectory" width="2262" height="778" loading="lazy" decoding="async">
    </figure>
  </article>

  <article class="publication">
    <div class="publication__info">
      <h4 class="publication__title">MATCH POLICY: A Simple Pipeline from Point Cloud Registration to Manipulation Policies</h4>
      <p><i>Haojie Huang, <strong>Haotian Liu</strong>, Dian Wang, Robin Walters*, and Robert Platt*</i> (* Equal Advising)</p>
      <p>IEEE International Conference on Robotics and Automation <a href="https://2025.ieee-icra.org/">ICRA 2025</a> at Atlanta USA, <a href="https://www.arxiv.org/abs/2409.15517">Paper</a>, <a href="https://haojhuang.github.io/match_page/">Project Page</a></p>
    </div>
    <figure class="publication__media">
      <img src="{{ '/images/match_policy.png' | relative_url }}" alt="Point-cloud registration aligns demonstrated and observed objects to produce a placement action" width="632" height="303" loading="lazy" decoding="async">
    </figure>
  </article>

  <article class="publication">
    <div class="publication__info">
      <h4 class="publication__title">IMAGINATION POLICY: Using Generative Point Cloud Models for Learning Manipulation Policies</h4>
      <p><i>Haojie Huang, Karl Schmeckpeper*, Dian Wang*, Ondrej Biza*, Yaoyao Qian**, <strong>Haotian Liu</strong>**, Mingxi Jia**, Robert Platt, and Robin Walters</i> (*, ** Equal Contribution)</p>
      <p>Conference on Robot Learning <a href="https://www.corl.org/">CoRL 2024</a> at Munich, Germany, <a href="https://arxiv.org/abs/2406.11740">Paper</a>, <a href="https://haojhuang.github.io/imagine_page/">Project Page</a></p>
    </div>
    <figure class="publication__media">
      <img src="{{ '/images/imgPolicy.png' | relative_url }}" alt="Generated point cloud of a robot gripper approaching a red flower by its stem" width="902" height="712" loading="lazy" decoding="async">
    </figure>
  </article>

  <h3 class="publication-category">Deep Learning Optimization for 3D Vision</h3>

  <article class="publication">
    <div class="publication__info">
      <h4 class="publication__title">GPS: A Probabilistic Distributional Similarity with Gumbel Priors for Set-to-Set Matching</h4>
      <p><i><strong>Haotian Liu</strong>*, Fangzhou Lin*, Ziming Zhang*, Jose Morales, Haichong Zhang, Kazunori Yamada, Vijaya B Kolachalama, Venkatesh Saligrama</i> (* co-first author)</p>
      <p>International Conference on Learning Representations <a href="https://iclr.cc/">ICLR 2025</a> at Singapore, <a href="https://openreview.net/pdf?id=U0SijGsCHJ">Paper</a>, <a href="https://github.com/Zhang-VISLab/ICLR2025-GPS.git">Code</a></p>
    </div>
    <figure class="publication__media">
      <img src="{{ '/images/gps.png' | relative_url }}" alt="Nearest-neighbor example alongside fitted Gumbel probability distributions over negative log distance" width="690" height="268" loading="lazy" decoding="async">
    </figure>
  </article>

  <article class="publication">
    <div class="publication__info">
      <h4 class="publication__title">Loss Distillation via Gradient Matching for Point Cloud Completion with Weighted Chamfer Distance</h4>
      <p><i><strong>Haotian Liu</strong>*, Fangzhou Lin*, Haoying Zhou*, Songlin Hou*, Kazunori Yamada, Gregory S. Fischer, Yanhua Li, Haichong K. Zhang, and Ziming Zhang</i> (* co-first author)</p>
      <p>IEEE/RSJ International Conference on Intelligent Robots and Systems <a href="https://iros2024-abudhabi.org/">IROS 2024</a> at Abu Dhabi UAE, <strong>Oral Presentation</strong>, <a href="https://arxiv.org/abs/2409.06171">Paper</a>, <a href="https://github.com/seanliu7081/LossDistillationWeightedCD_IROS24.git">Code</a>, <a href="https://drive.google.com/file/d/1BoKFYu1weEQomJB_u7ATCbDfiqRkEywd/view?usp=sharing">Presentation</a></p>
    </div>
    <figure class="publication__media">
      <img src="{{ '/images/lossDistill.png' | relative_url }}" alt="Comparison of scaled gradient-weight curves versus Euclidean distance for HyperCD and reference distributions" width="398" height="323" loading="lazy" decoding="async">
    </figure>
  </article>
  
</div>

## Services
Reviewer of: NeurIPS, ICLR, AISTATS, ICML

<style>
  .selected-publications {
    margin-top: 1.5rem;
  }
  .publication-category {
    margin: 2.25rem 0 0;
    padding-bottom: 0.55rem;
    border-bottom: 2px solid #e6e6e6;
    font-size: 1.05em;
    line-height: 1.4;
  }
  .publication {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 40%);
    gap: clamp(1.25rem, 3vw, 2.25rem);
    align-items: center;
    padding: 1.5rem 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .publication__info {
    min-width: 0;
  }
  .publication p {
    margin: 0.45rem 0;
  }
  .publication__title {
    margin: 0 0 0.45rem;
    font-size: 1.03em;
    line-height: 1.4;
  }
  .publication__media {
    width: 100%;
    margin: 0;
    justify-self: end;
  }
  .publication img {
    display: block;
    width: 100%;
    max-width: none;
    height: auto;
    margin: 0;
    float: none;
    border: 1px solid #dedede;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 760px) {
    .publication {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .publication__media {
      max-width: 36rem;
      justify-self: center;
    }
  }
</style>
