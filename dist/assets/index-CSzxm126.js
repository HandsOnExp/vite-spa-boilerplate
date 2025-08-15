(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();class d{constructor(){this.init()}init(){console.log("🛡️ SafeKid Accessible App initialized!"),this.setupKeyboardNavigation(),this.setupScreenReaderSupport(),this.setupAccessibleAnimations(),this.setupButtonInteractions(),this.setupLiveRegions(),this.setupFocusManagement(),this.setupFAQToggles(),this.setupScrollAnimations(),this.setupDemoMode()}setupKeyboardNavigation(){const e=document.querySelector(".skip-link");e&&e.addEventListener("click",t=>{t.preventDefault();const n=document.getElementById("main");n&&(n.focus(),n.scrollIntoView({behavior:"smooth"}))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.handleEscape(),t.target.matches(".feature-card, .trust-item, .faq-question")&&this.handleArrowNavigation(t),(t.key==="Enter"||t.key===" ")&&t.target.matches('[role="button"]')&&(t.preventDefault(),t.target.click())}),this.setupTabTrap()}handleArrowNavigation(e){const t=Array.from(document.querySelectorAll(".feature-card, .trust-item, .faq-question")),n=t.indexOf(e.target);let s=n;switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),s=(n+1)%t.length;break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),s=n===0?t.length-1:n-1;break;case"Home":e.preventDefault(),s=0;break;case"End":e.preventDefault(),s=t.length-1;break}s!==n&&t[s].focus()}handleEscape(){const e=document.activeElement;e&&e.matches(".toast")&&this.dismissToast(e)}setupTabTrap(){}setupScreenReaderSupport(){this.announceToScreenReader("SafeKid app loaded. Child safety landing page ready."),this.statusUpdateTimer=setInterval(()=>{this.updateVehicleStatus()},1e4)}updateVehicleStatus(){const e=document.getElementById("vehicle-status"),t=document.getElementById("status-updates");if(e&&t){const n=72+Math.floor(Math.random()*6)-3,s=document.querySelector(".temp-reading span");s&&(s.textContent=`${n}°F`,s.parentElement.setAttribute("aria-label",`Current temperature ${n} degrees Fahrenheit`)),t.textContent=`Temperature updated to ${n} degrees Fahrenheit`}}setupAccessibleAnimations(){window.matchMedia("(prefers-reduced-motion: reduce)").matches||this.enableAnimations(),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",t=>{t.matches?this.disableAnimations():this.enableAnimations()})}enableAnimations(){const e=document.querySelector(".phone-mockup");e&&(e.style.animation="float 6s ease-in-out infinite");const t=document.querySelector(".status-indicator");t&&(t.style.animation="pulse 3s ease-in-out infinite")}disableAnimations(){document.querySelectorAll(".phone-mockup, .status-indicator").forEach(t=>{t.style.animation="none"})}setupButtonInteractions(){document.querySelectorAll(".btn-primary").forEach(e=>{e.addEventListener("click",t=>{this.handleDownload(t)})}),document.querySelectorAll(".btn-secondary").forEach(e=>{e.addEventListener("click",t=>{this.handleDemo(t)})}),document.querySelectorAll(".store-button").forEach(e=>{e.addEventListener("click",t=>{this.handleStoreDownload(t)})}),this.setupRippleEffects()}handleDownload(e){e.preventDefault(),this.announceToScreenReader("Download initiated. SafeKid app download information displayed."),this.showAccessibleToast("🎉 Thank you for your interest in SafeKid! The app will be available soon on both iOS and Android platforms.","success"),setTimeout(()=>{e.target.focus()},100)}handleDemo(e){e.preventDefault(),this.announceToScreenReader("Demo video information displayed."),this.showAccessibleToast("🎬 Demo: Watch how SafeKid protects your family with automatic detection, instant alerts, temperature monitoring, and emergency response.","info"),this.simulateDemoAlert(),setTimeout(()=>{e.target.focus()},100)}handleStoreDownload(e){e.preventDefault();const n=e.currentTarget.querySelector(".store-text .store-name").textContent.includes("App Store")?"App Store":"Google Play";this.announceToScreenReader(`Redirecting to ${n} for SafeKid download.`),this.showAccessibleToast(`🚀 Redirecting to ${n}. SafeKid will be available soon on both iOS and Android!`,"info"),setTimeout(()=>{e.currentTarget.focus()},100)}setupRippleEffects(){document.querySelectorAll(".btn, .store-button").forEach(e=>{e.addEventListener("click",t=>{this.createRipple(t)})})}createRipple(e){const t=e.currentTarget,n=document.createElement("span"),s=t.getBoundingClientRect(),o=Math.max(s.width,s.height),a=e.clientX-s.left-o/2,i=e.clientY-s.top-o/2;n.style.cssText=`
      width: ${o}px;
      height: ${o}px;
      left: ${a}px;
      top: ${i}px;
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `,t.style.position="relative",t.style.overflow="hidden",t.appendChild(n),setTimeout(()=>{n.remove()},600)}setupLiveRegions(){if(!document.getElementById("status-updates")){const e=document.createElement("div");e.id="status-updates",e.className="live-region",e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),document.body.appendChild(e)}if(!document.getElementById("emergency-alerts")){const e=document.createElement("div");e.id="emergency-alerts",e.className="live-region",e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),document.body.appendChild(e)}}announceToScreenReader(e,t="polite"){const n=t==="assertive"?"emergency-alerts":"status-updates",s=document.getElementById(n);s&&(s.textContent=e,setTimeout(()=>{s.textContent=""},1e3))}setupFocusManagement(){document.addEventListener("focusin",e=>{e.target.matches(".feature-card, .trust-item, .faq-question")&&e.target.setAttribute("data-focused","true")}),document.addEventListener("focusout",e=>{e.target.matches(".feature-card, .trust-item, .faq-question")&&e.target.removeAttribute("data-focused")})}setupFAQToggles(){document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",n=>{this.toggleFAQ(n.currentTarget)}),t.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggleFAQ(n.currentTarget))})})}toggleFAQ(e){const t=e.closest(".faq-item"),n=e.nextElementSibling,s=e.getAttribute("aria-expanded")==="true";if(e.setAttribute("aria-expanded",!s),s)t.removeAttribute("data-expanded");else{t.setAttribute("data-expanded","true");const i=n.scrollHeight;n.style.maxHeight=i+20+"px"}const o=e.querySelector("span").textContent,a=s?"collapsed":"expanded";this.announceToScreenReader(`FAQ item ${o} ${a}`)}setupScrollAnimations(){if(!window.IntersectionObserver)return;const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(n=>{n.forEach(s=>{if(s.isIntersecting){s.target.classList.add("visible");const o=s.target.querySelector("h2, h3");o&&this.announceToScreenReader(`Entering ${o.textContent} section`)}})},e);document.querySelectorAll(".features, .trust-section, .faq, .download").forEach(n=>{n.classList.add("fade-in"),t.observe(n)}),document.querySelectorAll(".feature-card, .trust-item, .faq-item").forEach((n,s)=>{n.classList.add("fade-in"),n.style.transitionDelay=`${s*.1}s`,t.observe(n)})}setupDemoMode(){setTimeout(()=>{Math.random()<.3&&this.simulateSafetyDemo()},5e3)}simulateSafetyDemo(){document.getElementById("vehicle-status")&&(this.showAccessibleToast("🚨 Demo Alert: Child detected in vehicle! Emergency response activated.","error"),this.announceToScreenReader("Demo alert activated: Child detection simulation triggered","assertive"),setTimeout(()=>{this.announceToScreenReader("Demo alert resolved: Returning to normal monitoring mode")},3e3))}simulateDemoAlert(){document.getElementById("emergency-alerts")&&this.announceToScreenReader("Demo mode: Simulating safety features including automatic detection, instant alerts, and temperature monitoring","assertive")}showAccessibleToast(e,t="info"){const n=document.createElement("div");n.className=`toast ${t}`,n.setAttribute("role",t==="error"?"alert":"status"),n.setAttribute("aria-atomic","true"),n.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <p style="margin: 0; flex: 1;">${e}</p>
        <button type="button" aria-label="Close notification" style="background: none; border: none; font-size: 1.2em; cursor: pointer; padding: 0; margin-left: 1rem;">&times;</button>
      </div>
    `;const s=n.querySelector("button");s.addEventListener("click",()=>{this.dismissToast(n)}),t!=="error"&&setTimeout(()=>{this.dismissToast(n)},5e3),document.body.appendChild(n),this.announceToScreenReader(e,t==="error"?"assertive":"polite"),setTimeout(()=>{s.focus()},100)}dismissToast(e){e&&e.parentNode&&(e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.remove()},300))}destroy(){this.statusUpdateTimer&&clearInterval(this.statusUpdateTimer)}}document.addEventListener("DOMContentLoaded",()=>{window.safeKidApp=new d});const r=document.createElement("style");r.textContent=`
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
  .faq-question[data-focused="true"] {
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
`;document.head.appendChild(r);
//# sourceMappingURL=index-CSzxm126.js.map
