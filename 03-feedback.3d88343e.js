!function(){var e=document.querySelector("form");e.addEventListener("input",(function(){var e={email:t.value,message:l.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log({email:t.value,message:l.value})}));var a=e.elements,t=a.email,l=a.message;var r=localStorage.getItem("feedback-form-state"),s=JSON.parse(r);t.value=s.email||"",l.value=s.message||"",e.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:t.value,message:l.value}),e.currentTarget.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.3d88343e.js.map
