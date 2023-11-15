"use strict";exports.id=24,exports.ids=[24],exports.modules={4024:(e,r,s)=>{s.r(r),s.d(r,{default:()=>Document});var t=s(997),n=s(6859),c=s(4298),o=s.n(c);function Document(){return(0,t.jsxs)(n.Html,{lang:"fr",children:[t.jsx(n.Head,{children:t.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",integrity:"sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==",crossorigin:"anonymous",referrerpolicy:"no-referrer"})}),(0,t.jsxs)("body",{children:[t.jsx(o(),{id:"theme-switcher",strategy:"beforeInteractive",children:`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}),t.jsx(n.Main,{}),t.jsx(n.NextScript,{})]})]})}}};