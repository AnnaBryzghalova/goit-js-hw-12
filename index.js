import{i as u,S as f}from"./assets/vendor-DFWfNZ6r.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m={position:"topRight",pauseOnHover:!0,closeOnClick:!0};function i(r){u.error({message:r,progressBarColor:"#b51b1b",title:"Error",...m})}const p="48467053-1861d826b8af29f86703a6302",h="https://pixabay.com/api/",g=new URLSearchParams({key:p,image_type:"photo",orientation:"horizontal",safesearch:!0});function y(r){return fetch(`${h}?q=${r}&${g.toString()}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function v({webformatURL:r,largeImageURL:t,tags:a,likes:o,views:e,comments:s,downloads:n}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img class="gallery-image" src="${r}" alt="${a}" />
      <div class="gallery-item-info">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value" data-likes>${o}</span>
        </div>
        <div class="field">
          <span class="label">Views</span>
          <span class="value" data-views>${e}</span>
        </div>
        <div class="field">
          <span class="label">Comments</span>
          <span class="value" data-comments>${s}</span>
        </div>
        <div class="field">
          <span class="label">Downloads</span>
          <span class="value" data-downloads>${n}</span>
        </div>
      </div>
  </a>
</li>`}function b(r){return r.map(v).join("")}const c=document.querySelector("ul.gallery"),l=document.querySelector(".loading-message"),d=document.querySelector("#search-form");d.addEventListener("submit",w);const L={captionsData:"alt",captionDelay:250};var S=new f(".gallery a",L);function w(r){r.preventDefault();const t=d.search.value.trim();if(t===""){i("Please enter a valid search query!");return}c.innerHTML="",l.classList.remove("hidden"),y(t).then(a=>{if(a.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}console.log(a),O(a.hits)}).catch(a=>{i(a)}).finally(()=>{l.classList.add("hidden")})}function O(r){c.insertAdjacentHTML("beforeend",b(r)),S.refresh()}
//# sourceMappingURL=index.js.map
