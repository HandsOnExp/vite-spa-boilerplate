(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();class d{constructor(){this.init()}init(){console.log("🛡️ SafeKid Accessible App initialized!"),this.setupKeyboardNavigation(),this.setupScreenReaderSupport(),this.setupAccessibleAnimations(),this.setupButtonInteractions(),this.setupLiveRegions(),this.setupFocusManagement(),this.setupScrollAnimations(),this.setupDemoMode()}setupKeyboardNavigation(){const e=document.querySelector(".skip-link");e&&e.addEventListener("click",t=>{t.preventDefault();const o=document.getElementById("main");o&&(o.focus(),o.scrollIntoView({behavior:"smooth"}))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.handleEscape(),t.target.matches(".feature-card, .trust-item, .faq-item")&&this.handleArrowNavigation(t),(t.key==="Enter"||t.key===" ")&&t.target.matches('[role="button"]')&&(t.preventDefault(),t.target.click())}),this.setupTabTrap()}handleArrowNavigation(e){const t=Array.from(document.querySelectorAll(".feature-card, .trust-item, .faq-item")),o=t.indexOf(e.target);let n=o;switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),n=(o+1)%t.length;break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),n=o===0?t.length-1:o-1;break;case"Home":e.preventDefault(),n=0;break;case"End":e.preventDefault(),n=t.length-1;break}n!==o&&t[n].focus()}handleEscape(){const e=document.activeElement;e&&e.matches(".toast")&&this.dismissToast(e)}setupTabTrap(){}setupScreenReaderSupport(){this.announceToScreenReader("SafeKid app loaded. Child safety landing page ready."),this.statusUpdateTimer=setInterval(()=>{this.updateVehicleStatus()},1e4)}updateVehicleStatus(){const e=document.getElementById("vehicle-status"),t=document.getElementById("status-updates");if(e&&t){const o=72+Math.floor(Math.random()*6)-3,n=document.querySelector(".temp-reading span");n&&(n.textContent=`${o}°F`,n.parentElement.setAttribute("aria-label",`Current temperature ${o} degrees Fahrenheit`)),t.textContent=`Temperature updated to ${o} degrees Fahrenheit`}}setupAccessibleAnimations(){window.matchMedia("(prefers-reduced-motion: reduce)").matches||this.enableAnimations(),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",t=>{t.matches?this.disableAnimations():this.enableAnimations()})}enableAnimations(){const e=document.querySelector(".phone-mockup");e&&(e.style.animation="float 6s ease-in-out infinite");const t=document.querySelector(".status-indicator");t&&(t.style.animation="pulse 3s ease-in-out infinite")}disableAnimations(){document.querySelectorAll(".phone-mockup, .status-indicator").forEach(t=>{t.style.animation="none"})}setupButtonInteractions(){document.querySelectorAll(".btn-primary").forEach(e=>{e.addEventListener("click",t=>{this.handleDownload(t)})}),document.querySelectorAll(".btn-secondary").forEach(e=>{e.addEventListener("click",t=>{this.handleDemo(t)})}),document.querySelectorAll(".store-button").forEach(e=>{e.addEventListener("click",t=>{this.handleStoreDownload(t)})}),this.setupRippleEffects()}handleDownload(e){e.preventDefault(),this.announceToScreenReader("Download initiated. SafeKid app download information displayed."),this.showAccessibleToast("🎉 Thank you for your interest in SafeKid! The app will be available soon on both iOS and Android platforms.","success"),setTimeout(()=>{e.target.focus()},100)}handleDemo(e){e.preventDefault(),this.announceToScreenReader("Demo video information displayed."),this.showAccessibleToast("🎬 Demo: Watch how SafeKid protects your family with automatic detection, instant alerts, temperature monitoring, and emergency response.","info"),this.simulateDemoAlert(),setTimeout(()=>{e.target.focus()},100)}handleStoreDownload(e){e.preventDefault();const o=e.currentTarget.querySelector(".store-text .store-name").textContent.includes("App Store")?"App Store":"Google Play";this.announceToScreenReader(`Redirecting to ${o} for SafeKid download.`),this.showAccessibleToast(`🚀 Redirecting to ${o}. SafeKid will be available soon on both iOS and Android!`,"info"),setTimeout(()=>{e.currentTarget.focus()},100)}setupRippleEffects(){document.querySelectorAll(".btn, .store-button").forEach(e=>{e.addEventListener("click",t=>{this.createRipple(t)})})}createRipple(e){const t=e.currentTarget,o=document.createElement("span"),n=t.getBoundingClientRect(),s=Math.max(n.width,n.height),i=e.clientX-n.left-s/2,c=e.clientY-n.top-s/2;o.style.cssText=`
      width: ${s}px;
      height: ${s}px;
      left: ${i}px;
      top: ${c}px;
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `,t.style.position="relative",t.style.overflow="hidden",t.appendChild(o),setTimeout(()=>{o.remove()},600)}setupLiveRegions(){if(!document.getElementById("status-updates")){const e=document.createElement("div");e.id="status-updates",e.className="live-region",e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),document.body.appendChild(e)}if(!document.getElementById("emergency-alerts")){const e=document.createElement("div");e.id="emergency-alerts",e.className="live-region",e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),document.body.appendChild(e)}}announceToScreenReader(e,t="polite"){const o=t==="assertive"?"emergency-alerts":"status-updates",n=document.getElementById(o);n&&(n.textContent=e,setTimeout(()=>{n.textContent=""},1e3))}setupFocusManagement(){document.addEventListener("focusin",e=>{e.target.matches(".feature-card, .trust-item, .faq-item")&&e.target.setAttribute("data-focused","true")}),document.addEventListener("focusout",e=>{e.target.matches(".feature-card, .trust-item, .faq-item")&&e.target.removeAttribute("data-focused")})}setupScrollAnimations(){if(!window.IntersectionObserver)return;const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(n=>{if(n.isIntersecting){n.target.classList.add("visible");const s=n.target.querySelector("h2, h3");s&&this.announceToScreenReader(`Entering ${s.textContent} section`)}})},e);document.querySelectorAll(".features, .trust-section, .faq, .download").forEach(o=>{o.classList.add("fade-in"),t.observe(o)}),document.querySelectorAll(".feature-card, .trust-item, .faq-item").forEach((o,n)=>{o.classList.add("fade-in"),o.style.transitionDelay=`${n*.1}s`,t.observe(o)})}setupDemoMode(){setTimeout(()=>{Math.random()<.3&&this.simulateSafetyDemo()},5e3)}simulateSafetyDemo(){document.getElementById("vehicle-status")&&(this.showAccessibleToast("🚨 Demo Alert: Child detected in vehicle! Emergency response activated.","error"),this.announceToScreenReader("Demo alert activated: Child detection simulation triggered","assertive"),setTimeout(()=>{this.announceToScreenReader("Demo alert resolved: Returning to normal monitoring mode")},3e3))}simulateDemoAlert(){document.getElementById("emergency-alerts")&&this.announceToScreenReader("Demo mode: Simulating safety features including automatic detection, instant alerts, and temperature monitoring","assertive")}showAccessibleToast(e,t="info"){const o=document.createElement("div");o.className=`toast ${t}`,o.setAttribute("role",t==="error"?"alert":"status"),o.setAttribute("aria-atomic","true"),o.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <p style="margin: 0; flex: 1;">${e}</p>
        <button type="button" aria-label="Close notification" style="background: none; border: none; font-size: 1.2em; cursor: pointer; padding: 0; margin-left: 1rem;">&times;</button>
      </div>
    `;const n=o.querySelector("button");n.addEventListener("click",()=>{this.dismissToast(o)}),t!=="error"&&setTimeout(()=>{this.dismissToast(o)},5e3),document.body.appendChild(o),this.announceToScreenReader(e,t==="error"?"assertive":"polite"),setTimeout(()=>{n.focus()},100)}dismissToast(e){e&&e.parentNode&&(e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.remove()},300))}destroy(){this.statusUpdateTimer&&clearInterval(this.statusUpdateTimer)}}document.addEventListener("DOMContentLoaded",()=>{window.safeKidApp=new d});const a=document.createElement("style");a.textContent=`
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { 
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0.2);
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0.4);
      transform: scale(1.05);
    }
  }
  
  /* Enhanced focus styles */
  .feature-card[data-focused="true"],
  .trust-item[data-focused="true"],
  .faq-item[data-focused="true"] {
    outline: var(--focus-ring);
    outline-offset: 2px;
  }
  
  /* Toast animations */
  .toast {
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 0.3s ease forwards;
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* High contrast adjustments */
  @media (prefers-contrast: high) {
    .toast {
      border-width: 2px;
    }
    
    .btn:focus,
    .store-button:focus {
      outline: 3px solid currentColor;
      outline-offset: 2px;
    }
  }
  
  /* Print accessibility */
  @media print {
    .toast,
    .live-region {
      display: none !important;
    }
  }
`;document.head.appendChild(a);
//# sourceMappingURL=index-s2SEtMm7.js.map
