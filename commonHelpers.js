import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as y}from"./assets/vendor-77e16229.js";const n=document.querySelector("button[data-start]"),f=document.querySelector("#datetime-picker"),e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let c=null;n.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){c=t[0],c<new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};h(f,S);function C(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:l,seconds:m}}function o(t){return String(t).padStart(2,"0")}n.addEventListener("click",()=>{n.disabled=!0;const t=setInterval(()=>{const r=c-new Date;if(r<=0){clearInterval(t),e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00";return}const{days:d,hours:u,minutes:s,seconds:a}=C(r);e.days.textContent=o(d.toString()),e.hours.textContent=o(u.toString()),e.minutes.textContent=o(s.toString()),e.seconds.textContent=o(a.toString())})},1e3);
//# sourceMappingURL=commonHelpers.js.map
