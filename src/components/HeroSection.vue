
<script setup>
import heroImage from '../assets/images/legacy/header_img_1.jpg'
</script>

<template>
  <section class="hero">

    <div
        class="hero-background"
        :style="{ backgroundImage: `url(${heroImage})` }"
        aria-hidden="true"
    ></div>

    <div class="hero-background" aria-hidden="true"></div>

    <div class="site-container hero-content">

      <p class="hero-eyebrow">
        RIDERS CLUB OF GRAND RAPIDS
      </p>

      <h1 class="hero-title">
        Riding mower service
        <span>without the hassle.</span>
      </h1>

      <h2 class="hero-description">
        We pick it up. We service it. We bring it back.
        Professional riding mower and small-engine service
        delivered around your schedule.
      </h2>

      <div class="hero-actions">
        <a
            href="tel:+16164460897"
            class="hero-primary-action"
        >
          Call (616) 446-0897
        </a>

        <a
            href="#services"
            class="hero-secondary-action"
        >
          Explore Services
        </a>
      </div>

    </div>

  </section>

  <section class="service-process">
    <div class="site-container process-grid">

      <div class="process-item">
        <span class="process-number">01</span>
        <div>
          <strong>Pickup</strong>
          <p>We come get your rider.</p>
        </div>
      </div>

      <div class="process-item">
        <span class="process-number">02</span>
        <div>
          <strong>Service</strong>
          <p>We handle the maintenance.</p>
        </div>
      </div>

      <div class="process-item">
        <span class="process-number">03</span>
        <div>
          <strong>Return</strong>
          <p>Ready to get back to work.</p>
        </div>
      </div>

    </div>
  </section>
</template>