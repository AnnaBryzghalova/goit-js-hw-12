import{i as p,a as g,S as P}from"./assets/vendor-Bhk2CvIH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const y={position:"topRight",pauseOnHover:!0,closeOnClick:!0};function w(e){p.info({message:e,progressBarColor:"#0071BD",title:"Info",...y})}function c(e){p.error({message:e,progressBarColor:"#b51b1b",title:"Error",...y})}const I="48467053-1861d826b8af29f86703a6302";g.defaults.baseURL="https://pixabay.com";const O={key:I,image_type:"photo",orientation:"horizontal",safesearch:!0};async function q(e,s=1,r=12){return(await g.get("/api/",{params:{q:e,page:s,per_page:r,...O}})).data}function x({webformatURL:e,largeImageURL:s,tags:r,likes:n,views:t,comments:a,downloads:o}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img class="gallery-image" src="${e}" alt="${r}" />
      <div class="gallery-item-info">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value" data-likes>${n}</span>
        </div>
        <div class="field">
          <span class="label">Views</span>
          <span class="value" data-views>${t}</span>
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
</li>`}function S(e){return e.map(x).join("")}const h=12,v=document.querySelector("ul.gallery"),f=document.querySelector(".loading-message"),b=document.querySelector("#search-form");b.addEventListener("submit",D);const l=document.querySelector("#next-page-btn");l.addEventListener("click",()=>B());let d="",i=1,u=0;const E={captionsData:"alt",captionDelay:250},$=new P(".gallery a",E);function D(e){e.preventDefault();const s=b.search.value.trim();if(s===""){c("Please enter a valid search query!");return}s!==d&&(v.innerHTML="",d=s,i=1,L(s,i))}function B(){i++,L(d,i)}async function L(e,s){f.classList.remove("hidden"),m(!1);try{const r=await q(e,s,h);if(u=r.total,u===0){c("Sorry, there are no images matching your search query. Please try again!");return}else C(r.hits);N()?w("We're sorry, but you've reached the end of search results."):m(!0)}catch(r){c(r.message)}finally{f.classList.add("hidden")}}function N(){return i>=Math.ceil(u/h)}function C(e){v.insertAdjacentHTML("beforeend",S(e)),$.refresh()}function m(e){console.log(`setNextPageButtonVisible: ${e}`),e===l.classList.contains("hidden")&&(e?l.classList.remove("hidden"):l.classList.add("hidden"))}
//# sourceMappingURL=index.js.map
