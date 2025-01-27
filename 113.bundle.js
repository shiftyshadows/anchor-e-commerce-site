"use strict";(self.webpackChunkanchor_ecommerce_frontend=self.webpackChunkanchor_ecommerce_frontend||[]).push([[113],{9113:(n,e,r)=>{r.r(e),r.d(e,{default:()=>h});var A=r(6540),t=r(7767),o=r(4977),i=r(8087),s=r(5072),a=r.n(s),l=r(7825),c=r.n(l),m=r(7659),d=r.n(m),g=r(5056),B=r.n(g),E=r(540),u=r.n(E),C=r(1113),p=r.n(C),b=r(7968),f={};f.styleTagTransform=p(),f.setAttributes=B(),f.insert=d().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=u(),a()(b.A,f),b.A&&b.A.locals&&b.A.locals;const h=()=>{const[n,e]=(0,A.useState)(""),[r,s]=(0,A.useState)(""),[a,l]=(0,A.useState)(null),{login:c}=(0,A.useContext)(o.c),m=(0,t.Zp)();return A.createElement("div",{className:"signin-container"},A.createElement("div",{className:"signin-card"},A.createElement("h1",{className:"signin-title"},"Sign In"),a&&A.createElement("p",{className:"signin-error"},a),A.createElement("form",{onSubmit:async e=>{e.preventDefault();try{const e=await i.A.post("/api/auth/signin",{email:n,password:r},{withCredentials:!0}),{token:A,redirectUrl:t}=e.data;c(A),m(t||"/user-dashboard")}catch(n){var A;const e=(null===(A=n.response)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.message)||"An error occurred. Please try again.";l(e)}},className:"signin-form"},A.createElement("div",{className:"form-group"},A.createElement("label",{htmlFor:"email"},"Email"),A.createElement("input",{type:"email",id:"email",placeholder:"Enter your email",value:n,onChange:n=>e(n.target.value),required:!0})),A.createElement("div",{className:"form-group"},A.createElement("label",{htmlFor:"password"},"Password"),A.createElement("input",{type:"password",id:"password",placeholder:"Enter your password",value:r,onChange:n=>s(n.target.value),required:!0})),A.createElement("button",{type:"submit",className:"signin-button"},"Sign In"))))}},8087:(n,e,r)=>{r.d(e,{A:()=>t});const A=r(1083).A.create({baseURL:"shiftyshadows.github.io",timeout:1e4});A.defaults.headers.common["Content-Type"]="application/json",A.interceptors.request.use((n=>{const e=localStorage.getItem("token");return e&&(n.headers.Authorization="Bearer ".concat(e)),n}),(n=>Promise.reject(n))),A.interceptors.response.use((n=>n),(n=>(console.error("API Error:",n),Promise.reject(n))));const t=A},7968:(n,e,r)=>{r.d(e,{A:()=>s});var A=r(1354),t=r.n(A),o=r(6314),i=r.n(o)()(t());i.push([n.id,"/* SignIn.css in styles folder */\n\n/* Container styles */\n.signin-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f9f9f9;\n  padding: 1rem;\n}\n\n/* Card styles */\n.signin-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n\n/* Title styles */\n.signin-title {\n  font-size: 1.8rem;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n/* Error message */\n.signin-error {\n  color: red;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n\n/* Form styles */\n.signin-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  text-align: left;\n}\n\nlabel {\n  font-size: 0.9rem;\n  color: #555;\n}\n\ninput {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\ninput:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);\n}\n\n/* Button styles */\n.signin-button {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 0.75rem;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.signin-button:hover {\n  background: #0056b3;\n}\n\n/* Links */\n.signin-links {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.forgot-password-link,\n.signup-link {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.forgot-password-link:hover,\n.signup-link:hover {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./src/styles/SignIn.css"],names:[],mappings:"AAAA,gCAAgC;;AAEhC,qBAAqB;AACrB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;;AAEA,gBAAgB;AAChB;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,yCAAyC;EACzC,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,qBAAqB;EACrB,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,0CAA0C;AAC5C;;AAEA,kBAAkB;AAClB;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,UAAU;AACV;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;AACvB;;AAEA;;EAEE,0BAA0B;AAC5B",sourcesContent:["/* SignIn.css in styles folder */\n\n/* Container styles */\n.signin-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f9f9f9;\n  padding: 1rem;\n}\n\n/* Card styles */\n.signin-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n\n/* Title styles */\n.signin-title {\n  font-size: 1.8rem;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n/* Error message */\n.signin-error {\n  color: red;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n\n/* Form styles */\n.signin-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  text-align: left;\n}\n\nlabel {\n  font-size: 0.9rem;\n  color: #555;\n}\n\ninput {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\ninput:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);\n}\n\n/* Button styles */\n.signin-button {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 0.75rem;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.signin-button:hover {\n  background: #0056b3;\n}\n\n/* Links */\n.signin-links {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.forgot-password-link,\n.signup-link {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.forgot-password-link:hover,\n.signup-link:hover {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]);const s=i}}]);
//# sourceMappingURL=113.bundle.js.map