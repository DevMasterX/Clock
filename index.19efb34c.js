!function(){var t=document.querySelector(".js-week-day"),e=document.querySelector(".js-date"),n=document.querySelector(".js-month"),o=document.querySelector(".js-hours"),r=document.querySelector(".js-minutes"),u=document.querySelector(".js-seconds"),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];setInterval((function(){var d,s,c,S,i,m,g;!function(a){var d=a.day,s=a.date,c=a.month,S=a.hours,i=a.minutes,m=a.seconds;o.textContent=S,r.textContent=i,u.textContent=m,t.textContent=d,e.textContent=s,n.textContent=Number(c)+1}((d=new Date,s=a[d.getDay()],c=String(d.getDate()).padStart(2,"0"),S=String(d.getMonth()).padStart(2,"0"),i=String(d.getHours()).padStart(2,"0"),m=String(d.getMinutes()).padStart(2,"0"),g=String(d.getSeconds()).padStart(2,"0"),{day:s,date:c,month:S,hours:i,minutes:m,seconds:g}))}),1e3)}();
//# sourceMappingURL=index.19efb34c.js.map
