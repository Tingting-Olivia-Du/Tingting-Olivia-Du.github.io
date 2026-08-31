/* Progressive enhancements for the homepage: viewport-gated demo videos,
   a figure lightbox, and reveal-on-scroll. Everything degrades to a
   perfectly usable page when JS or IntersectionObserver is unavailable. */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     Demo videos: only load and play while visible, with a manual toggle.
     --------------------------------------------------------------------- */
  function initVideos() {
    var frames = document.querySelectorAll(".demo-media--video");
    if (!frames.length) return;

    Array.prototype.forEach.call(frames, function (frame) {
      var video = frame.querySelector("video");
      var toggle = frame.querySelector(".demo-media__play");
      if (!video) return;

      var userPaused = reduceMotion;

      function setIcon() {
        if (!toggle) return;
        var paused = video.paused;
        toggle.innerHTML =
          '<i class="fas fa-' + (paused ? "play" : "pause") + '"></i>';
        toggle.setAttribute("aria-label", paused ? "Play demo" : "Pause demo");
      }

      function tryPlay() {
        if (userPaused) return;
        var p = video.play();
        if (p && typeof p.catch === "function") p.catch(function () {});
      }

      if (toggle) {
        toggle.addEventListener("click", function () {
          if (video.paused) {
            userPaused = false;
            tryPlay();
          } else {
            userPaused = true;
            video.pause();
          }
          setIcon();
        });
      }

      video.addEventListener("play", setIcon);
      video.addEventListener("pause", setIcon);

      if (!("IntersectionObserver" in window)) {
        video.preload = "metadata";
        tryPlay();
        setIcon();
        return;
      }

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              if (video.preload === "none") video.preload = "auto";
              tryPlay();
            } else if (!video.paused) {
              video.pause();
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(frame);
      setIcon();
    });
  }

  /* ---------------------------------------------------------------------
     Lightbox for figures marked with .demo-media--figure
     --------------------------------------------------------------------- */
  function initLightbox() {
    var figures = document.querySelectorAll(".demo-media--figure");
    if (!figures.length) return;

    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Close">' +
      '<i class="fas fa-xmark"></i></button><img alt="">';
    document.body.appendChild(box);

    var img = box.querySelector("img");
    var closeBtn = box.querySelector(".lightbox__close");
    var lastFocus = null;

    function open(src, alt) {
      lastFocus = document.activeElement;
      img.src = src;
      img.alt = alt || "";
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      // The dialog transitions out of `visibility: hidden`, and a hidden
      // element cannot take focus, so wait for the style to land first.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          closeBtn.focus();
        });
      });
    }

    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    Array.prototype.forEach.call(figures, function (fig) {
      var source = fig.querySelector("img");
      if (!source) return;
      fig.setAttribute("role", "button");
      fig.setAttribute("tabindex", "0");
      fig.addEventListener("click", function () {
        open(source.currentSrc || source.src, source.alt);
      });
      fig.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open(source.currentSrc || source.src, source.alt);
        }
      });
    });

    closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (event) {
      if (event.target === box) close();
    });
    document.addEventListener("keydown", function (event) {
      if (!box.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        close();
      } else if (event.key === "Tab") {
        // Close button is the only focusable child, so keep focus on it.
        event.preventDefault();
        closeBtn.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    Array.prototype.forEach.call(items, function (el) {
      observer.observe(el);
    });
  }

  function init() {
    initVideos();
    initLightbox();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
