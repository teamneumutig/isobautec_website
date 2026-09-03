/**
 * Projektgalerie
 * - Sticky Scroll mit 3D-Transformationen
 * - Lightbox für Bilder
 * - Hover Parallax Effekt
 */

(function() {
    'use strict';

    // =====================================================================
    // PART 1: STICKY SCROLL MIT 3D-TRANSFORMATIONEN
    // =====================================================================

    const projects = [...document.querySelectorAll('[data-scroll-project]')];
    const desktop = window.matchMedia('(min-width: 1001px)');
    let ticking = false;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    function updateDesktopProject(project) {
        const viewportH = window.innerHeight;
        const rect = project.getBoundingClientRect();
        const scrollable = Math.max(1, project.offsetHeight - viewportH);

        const leadIn = viewportH * 0.75;
        const rawProgress = clamp((leadIn - rect.top) / (scrollable + leadIn), 0, 1);

        const shots = [...project.querySelectorAll('.roof-shot')];
        const count = shots.length;

        const timelineStart = -1.0;
        const timelineEnd = count + 0.42;
        const timeline = timelineStart + rawProgress * (timelineEnd - timelineStart);

        shots.forEach((shot, index) => {
            const distance = index - timeline;
            const abs = Math.abs(distance);
            const direction = index % 2 === 0 ? -1 : 1;

            const y = distance * 66;
            const sharpRadius = 0.28;
            const outside = Math.max(0, abs - sharpRadius);
            const signedOutside = distance === 0 ? 0 : Math.sign(distance) * outside;

            const scale = clamp(
                1.1 / (1 + Math.pow(outside, 1.78) * 1.82),
                0.08,
                1.1
            );

            const visibility = clamp(1 - outside / 1.22, 0, 1);
            const smoothVisibility = visibility * visibility * (3 - 2 * visibility);
            const opacity = Math.pow(smoothVisibility, 1.35);

            const blur = clamp(Math.pow(outside, 1.56) * 20, 0, 30);
            const z = -Math.pow(outside, 1.42) * 720;
            const rx = clamp(signedOutside * 64, -78, 78);
            const ry = clamp(direction * signedOutside * 32, -44, 44);
            const rz = clamp(direction * signedOutside * 12, -18, 18);
            const skew = clamp(direction * signedOutside * 15, -24, 24);

            shot.style.setProperty('--y', `${y.toFixed(3)}vh`);
            shot.style.setProperty('--z', `${z.toFixed(2)}px`);
            shot.style.setProperty('--scale', scale.toFixed(4));
            shot.style.setProperty('--blur', `${blur.toFixed(2)}px`);
            shot.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
            shot.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
            shot.style.setProperty('--rz', `${rz.toFixed(2)}deg`);
            shot.style.setProperty('--skew', `${skew.toFixed(2)}deg`);
            shot.style.opacity = opacity.toFixed(4);
            shot.style.zIndex = String(100 - Math.round(abs * 10));
        });

        const current = clamp(Math.round(timeline) + 1, 1, count);
        const visibleProgress = clamp(
            (timeline - timelineStart) / (timelineEnd - timelineStart),
            0,
            1
        );

        const currentNode = project.querySelector('[data-current]');
        if (currentNode) currentNode.textContent = String(current).padStart(2, '0');
        project.style.setProperty('--progress', visibleProgress.toFixed(4));
    }

    function updateMobileCounter(project) {
        const visual = project.querySelector('.scroll-project__visual');
        const shots = [...project.querySelectorAll('.roof-shot')];
        if (!visual || !shots.length) return;

        const center = visual.scrollLeft + visual.clientWidth / 2;
        let nearest = 0;
        let nearestDistance = Infinity;

        shots.forEach((shot, index) => {
            const shotCenter = shot.offsetLeft + shot.offsetWidth / 2;
            const distance = Math.abs(center - shotCenter);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearest = index;
            }
        });

        const currentNode = project.querySelector('[data-current]');
        if (currentNode) currentNode.textContent = String(nearest + 1).padStart(2, '0');
        project.style.setProperty('--progress', ((nearest + 1) / shots.length).toFixed(4));
    }

    function updateProjects() {
        ticking = false;

        projects.forEach(project => {
            if (desktop.matches) {
                updateDesktopProject(project);
            } else {
                updateMobileCounter(project);
            }
        });
    }

    function requestUpdate() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateProjects);
    }

    projects.forEach(project => {
        const visual = project.querySelector('.scroll-project__visual');
        visual?.addEventListener('scroll', requestUpdate, { passive: true });
    });

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    desktop.addEventListener?.('change', requestUpdate);

    requestUpdate();

    // =====================================================================
    // PART 2: LIGHTBOX
    // =====================================================================

    const lightbox = document.getElementById('projectLightbox');
    const lightboxImage = lightbox?.querySelector('.project-lightbox__image');
    const lightboxCaption = lightbox?.querySelector('.project-lightbox__caption');
    const closeButton = lightbox?.querySelector('.project-lightbox__close');

    if (lightbox && lightboxImage && lightboxCaption && closeButton) {
        const openLightbox = image => {
            const figure = image.closest('.roof-shot');
            const caption = figure?.querySelector('figcaption')?.textContent?.trim() || image.alt;

            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt || '';
            lightboxCaption.textContent = caption;
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            closeButton.focus();
        };

        const closeLightbox = () => {
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        document.querySelectorAll('.roof-shot img').forEach(image => {
            image.addEventListener('click', event => {
                event.stopPropagation();
                openLightbox(image);
            });
        });

        closeButton.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', event => {
            if (event.target === lightbox) closeLightbox();
        });

        window.addEventListener('keydown', event => {
            if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
                closeLightbox();
            }
        });
    }

    // =====================================================================
    // PART 3: HOVER PARALLAX
    // =====================================================================

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    document.querySelectorAll('.roof-shot').forEach(shot => {
        const frame = shot.querySelector('.roof-shot__frame');
        if (!frame) return;

        let raf = null;
        let target = null;

        const render = () => {
            raf = null;
            if (!target) return;

            const { nx, ny, x, y } = target;

            frame.style.setProperty('--frame-x', `${(nx * 7).toFixed(2)}px`);
            frame.style.setProperty('--frame-y', `${(ny * 5).toFixed(2)}px`);
            frame.style.setProperty('--frame-ry', `${(nx * 4.8).toFixed(2)}deg`);
            frame.style.setProperty('--frame-rx', `${(-ny * 3.8).toFixed(2)}deg`);
            frame.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
            frame.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
            frame.style.setProperty('--shine-opacity', '0.48');
        };

        shot.addEventListener('pointermove', event => {
            if (!finePointer.matches) return;

            const opacity = Number.parseFloat(getComputedStyle(shot).opacity);
            if (opacity < 0.72) return;

            const rect = shot.getBoundingClientRect();
            const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
            const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

            target = {
                x,
                y,
                nx: x - 0.5,
                ny: y - 0.5
            };

            if (!raf) raf = requestAnimationFrame(render);
        });

        shot.addEventListener('pointerleave', () => {
            target = null;
            if (raf) {
                cancelAnimationFrame(raf);
                raf = null;
            }

            frame.style.setProperty('--frame-x', '0px');
            frame.style.setProperty('--frame-y', '0px');
            frame.style.setProperty('--frame-ry', '0deg');
            frame.style.setProperty('--frame-rx', '0deg');
            frame.style.setProperty('--frame-rz', '0deg');
            frame.style.setProperty('--frame-scale', '1');
            const img = frame.querySelector('img');
            if (img) {
                img.style.setProperty('--img-x', '0px');
                img.style.setProperty('--img-y', '0px');
                img.style.setProperty('--img-scale', '1');
            }
            frame.style.setProperty('--shine-opacity', '0');
        });
    });

})();
