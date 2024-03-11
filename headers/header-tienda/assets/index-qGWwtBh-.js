(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();let m;const L=new Uint8Array(16);function y(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(L)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function b(t,e=0){return r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]}const $=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),h={randomUUID:$};function w(t,e,i){if(h.randomUUID&&!e&&!t)return h.randomUUID();t=t||{};const n=t.random||(t.rng||y)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){i=i||0;for(let o=0;o<16;++o)e[i+o]=n[o];return e}return b(n)}class a{constructor(e,i,n="",o=""){this.id=w(),this.nombre=e,this.descripcion=n,this.precio=i,this.imagenUrl=o}toString(){return`Nombre: ${this.nombre}, Precio: ${this.precio}`}}class C{constructor(){this.productos=[]}agregarProducto(e){this.productos.push(e)}eliminarProducto(e){this.productos=this.productos.filter(i=>i.id!==e)}renderizarCarrito(){let e=document.querySelector("#shoppingCartContainer .my-order-content");e.innerHTML="";for(let o of this.productos){let c=document.createElement("div");c.classList.add("shopping-cart"),c.innerHTML=`
            <figure>
               <img src="${o.imagenUrl}" alt="${o.descripcion}">
            </figure>
            <p>${o.nombre}</p>
            <p>$${o.precio}</p>
            <img src="./icons/icon_close.png" alt="close">
            `,c.dataset.id=o.id,e.appendChild(c)}let i=document.querySelector(".order__total"),n=this.calcularTotal();i.innerHTML=`$${n}`}calcularTotal(){let e=0;for(let i of this.productos)e+=i.precio;return e}}let D=document.querySelector(".navbar-email"),v=document.querySelector(".desktop-menu");D.addEventListener("click",function(){v.classList.toggle("active"),l.classList.contains("active")&&l.classList.toggle("active"),s.classList.contains("active")&&s.classList.toggle("active")});let S=document.querySelector(".menu"),u=document.querySelector(".mobile-menu");S.addEventListener("click",function(){u.classList.toggle("active"),l.classList.contains("active")&&l.classList.toggle("active"),s.classList.contains("active")&&s.classList.toggle("active")});let T=document.querySelector(".navbar-shopping-cart"),l=document.getElementById("shoppingCartContainer");T.addEventListener("click",function(){l.classList.toggle("active"),u.classList.contains("active")&&u.classList.toggle("active"),v.classList.contains("active")&&v.classList.toggle("active"),s.classList.contains("active")&&s.classList.toggle("active")});let U=new a("MTB bike",100,"Descripción del producto 1","https://picsum.photos/200/300"),q=new a("Ropa de ciclismo",200,"Descripción del producto 2","https://loremflickr.com/320/240"),E=new a("Casco",300,"Descripción del producto 3","https://placekitten.com/200/300"),M=new a("ROdilleras",400,"Descripción del producto 4","https://placeimg.com/640/480/tech"),P=new a("MUñequeras",500,"Descripción del producto 5","https://www.placecage.com/200/300"),I=new a("Guantes",600,"Descripción del producto 6","https://www.fillmurray.com/200/300"),_=new a("Zapatos",700,"Descripción del producto 7","https://fakeimg.pl/350x200/"),k=new a("Mochila",800,"Descripción del producto 8","https://images.unsplash.com/photo-1526664650080-28a5f6aa09df"),H=new a("Luces",900,"Descripción del producto 9","https://via.placeholder.com/300"),p=[U,q,E,M,P,I,_,k,H];console.log(p);const x=document.querySelector(".cards-container");function O(t){let e=document.createElement("div");e.classList.add("product-card"),e.innerHTML=`
    <img src="${t.imagenUrl}" alt="">
    <div class="product-info">
      <div>
        <p>$${t.precio}</p>
        <p>${t.nombre}</p>
      </div>
      <figure data-id=${t.id}>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
    `,e.dataset.id=t.id,x.appendChild(e)}p.forEach(t=>{O(t)});let s=document.getElementById("productDetail"),B=t=>{let e=`
        <div class="product-detail-close">
          <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src="${t.imagenUrl}" alt="${t.descripcion}">
        <div class="product-info">
          <p>$${t.precio}</p>
          <p>${t.nombre}</p>
          <p>${t.descripcion}.</p>
          <button class="primary-button add-to-cart-button" data-id=${t.id}>
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
          </button>
        </div>
    `;s.innerHTML=e},R=document.querySelectorAll(".product-card");for(let t of R)t.addEventListener("click",function(){let e=p.find(c=>c.id===this.dataset.id);B(e);let i=document.querySelector(".add-to-cart-button"),n=p.find(c=>c.id===i.dataset.id);i.addEventListener("click",function(){d.agregarProducto(n),f.innerHTML=d.productos.length,d.renderizarCarrito(),console.log(d.productos)});let o=document.querySelector("div.product-detail-close");console.log(o),o.addEventListener("click",function(){s.classList.toggle("active"),console.log("cerrar")}),s.classList.add("active"),l.classList.contains("active")&&l.classList.toggle("active"),u.classList.contains("active")&&u.classList.toggle("active")});let f=document.querySelector(".navbar-shopping-cart div"),d=new C,A=document.querySelectorAll(".product-card .product-info figure");for(let t of A)t.addEventListener("click",function(){let e=p.find(i=>i.id===t.dataset.id);console.log("Button dataset ID:",t.dataset.id),d.agregarProducto(e),f.innerHTML=d.productos.length,d.renderizarCarrito(),console.log(d.productos)});
