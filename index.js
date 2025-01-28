import{i as m,a as p,S as P}from"./assets/vendor-Bhk2CvIH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const g={position:"topRight",pauseOnHover:!0,closeOnClick:!0};function w(e){m.info({message:e,progressBarColor:"#0071BD",title:"Info",...g})}function c(e){m.error({message:e,progressBarColor:"#b51b1b",title:"Error",...g})}const I="48467053-1861d826b8af29f86703a6302";p.defaults.baseURL="https://pixabay.com";const O={key:I,image_type:"photo",orientation:"horizontal",safesearch:!0};async function q(e,t=1,r=12){return(await p.get("/api/",{params:{q:e,page:t,per_page:r,...O}})).data}function x({webformatURL:e,largeImageURL:t,tags:r,likes:n,views:s,comments:a,downloads:o}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${e}" alt="${r}" />
      <div class="gallery-item-info">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value" data-likes>${n}</span>
        </div>
        <div class="field">
          <span class="label">Views</span>
          <span class="value" data-views>${s}</span>
        </div>
        <div class="field">
          <span class="label">Comments</span>
          <span class="value" data-comments>${a}</span>
        </div>
        <div class="field">
          <span class="label">Downloads</span>
          <span class="value" data-downloads>${o}</span>
        </div>
      </div>
  </a>
</li>`}function S(e){return e.map(x).join("")}const y=12,h=document.querySelector("ul.gallery"),u=document.querySelector(".loading-message"),v=document.querySelector("#search-form");v.addEventListener("submit",D);const l=document.querySelector("#next-page-btn");l.addEventListener("click",()=>B());let b="",i=1,d=0;const E={captionsData:"alt",captionDelay:250},$=new P(".gallery a",E);function D(e){e.preventDefault();const t=v.search.value.trim();if(t===""){c("Please enter a valid search query!");return}h.innerHTML="",b=t,i=1,L(t,i)}function B(){i++,L(b,i)}async function L(e,t){u.classList.remove("hidden"),f(!1);try{const r=await q(e,t,y);if(d=r.total,d===0){c("Sorry, there are no images matching your search query. Please try again!");return}else C(r.hits);N()?w("We're sorry, but you've reached the end of search results."):f(!0)}catch(r){c(r.message)}finally{u.classList.add("hidden")}}function N(){return i>=Math.ceil(d/y)}function C(e){h.insertAdjacentHTML("beforeend",S(e)),$.refresh()}function f(e){console.log(`setNextPageButtonVisible: ${e}`),e===l.classList.contains("hidden")&&(e?l.classList.remove("hidden"):l.classList.add("hidden"))}
//# sourceMappingURL=index.js.map
