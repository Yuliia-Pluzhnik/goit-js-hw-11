import{i as c,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),container:document.querySelector(".container"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function p(){s.loader&&(s.loader.style.display="block")}function f(){s.loader&&(s.loader.style.display="none")}s.form.addEventListener("submit",i=>{i.preventDefault();const r=s.input.value;if(r===""){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}p();function n(o){const e="https://pixabay.com",t="/api/",a=new URLSearchParams({key:"43022038-5a6e0a87a795a8bbaa0a62c30",q:o,type:"photo",orientation:"horizontal"}),l=`${e}${t}?${a}`;return fetch(l).then(u=>u.json())}n(r).then(o=>{h(o.hits)}).catch(o=>{console.error(o)})});const m=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(i){if(s.list.innerHTML="",i.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const r=y(i);s.list.innerHTML=r,m.refresh(),f()}function y(i){return i.map(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:t,comments:a,downloads:l})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${o}"
            width="360"
          />
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${e}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${t}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${a}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${l}</p>
          </div>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
