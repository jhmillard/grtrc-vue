<script setup>
import logo from '../assets/images/legacy/grtrc-logo-clean.png'
</script>

<template>
  <header class="site-header">
    <div class="site-container header-inner">

      <RouterLink
          to="/"
          class="site-brand"
          aria-label="The Riders Club home"
      >
        <img
            :src="logo"
            alt="The Riders Club"
            class="site-logo"
        />
      </RouterLink>

      <nav
          class="main-nav"
          aria-label="Main navigation"
      >
        <RouterLink to="/">Home</RouterLink>
        <a href="#services">Services</a>
        <a href="#pickup">Pickup & Delivery</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
          href="tel:+16164460897"
          class="header-call"
      >
        (616) 446-0897
      </a>

    </div>
  </header>
</template>