import{i as g,a as p,S as P}from"./assets/vendor-Bhk2CvIH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const y={position:"topRight",pauseOnHover:!0,closeOnClick:!0};function w(e){g.info({message:e,progressBarColor:"#0071BD",title:"Info",...y})}function c(e){g.error({message:e,progressBarColor:"#b51b1b",title:"Error",...y})}const I="48467053-1861d826b8af29f86703a6302";p.defaults.baseURL="https://pixabay.com";const q={key:I,image_type:"photo",orientation:"horizontal",safesearch:!0};async function O(e,t=1,a=12){return(await p.get("/api/",{params:{q:e,page:t,per_page:a,...q}})).data}function S({webformatURL:e,largeImageURL:t,tags:a,likes:n,views:s,comments:r,downloads:o}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${e}" alt="${a}" />
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
          <span class="value" data-comments>${r}</span>
        </div>
        <div class="field">
          <span class="label">Downloads</span>
          <span class="value" data-downloads>${o}</span>
        </div>
      </div>
  </a>
</li>`}function x(e){return e.map(S).join("")}const h=12,v=document.querySelector("ul.gallery"),f=document.querySelector(".loading-message"),b=document.querySelector("#search-form");b.addEventListener("submit",$);const l=document.querySelector("#next-page-btn");l.addEventListener("click",()=>D());let d="",i=1,u=0;const B={captionsData:"alt",captionDelay:250},E=new P(".gallery a",B);function $(e){e.preventDefault();const t=b.search.value.trim();if(t===""){c("Please enter a valid search query!");return}t!==d&&(v.innerHTML="",d=t,i=1,L(t,i))}function D(){i++,L(d,i)}async function L(e,t){f.classList.remove("hidden"),m(!1);try{const a=await O(e,t,h);if(u=a.total,u===0){c("Sorry, there are no images matching your search query. Please try again!");return}else C(a.hits);N()?w("We're sorry, but you've reached the end of search results."):m(!0),t>1&&M(2)}catch(a){c(a.message)}finally{f.classList.add("hidden")}}function N(){return i>=Math.ceil(u/h)}function C(e){v.insertAdjacentHTML("beforeend",x(e)),E.refresh()}function m(e){console.log(`setNextPageButtonVisible: ${e}`),e===l.classList.contains("hidden")&&(e?l.classList.remove("hidden"):l.classList.add("hidden"))}function M(e){const t=document.querySelector(".gallery-item");if(t==null)return;const a=t.getBoundingClientRect().height;console.log(a),window.scrollBy({top:a*e,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
