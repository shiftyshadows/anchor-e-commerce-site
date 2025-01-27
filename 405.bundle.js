"use strict";(self.webpackChunkanchor_ecommerce_frontend=self.webpackChunkanchor_ecommerce_frontend||[]).push([[405],{3405:(n,e,r)=>{r.r(e),r.d(e,{default:()=>k});var t=r(6540),o=r(7767),A=r(4976),a=r(5072),i=r.n(a),s=r(7825),l=r.n(s),c=r(7659),m=r.n(c),u=r(5056),p=r.n(u),d=r(540),g=r.n(d),B=r(1113),E=r.n(B),b=r(5430),C={};C.styleTagTransform=E(),C.setAttributes=p(),C.insert=m().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=g(),i()(b.A,C),b.A&&b.A.locals&&b.A.locals;var f=r(8087);function h(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function y(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){x(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function x(n,e,r){return(e=function(n){var e=function(n){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof e?e:e+""}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}const k=()=>{const[n,e]=(0,t.useState)({email:"",password:"",username:""}),[r,a]=(0,t.useState)(null),i=(0,o.Zp)(),s=r=>{const{name:t,value:o}=r.target;e(y(y({},n),{},{[t]:o}))};return t.createElement("div",{className:"signup-container"},t.createElement("div",{className:"signup-card"},t.createElement("h1",{className:"signup-title"},"Sign Up"),t.createElement("p",null,"Create your account to get started!"),r&&t.createElement("p",{className:"signup-error"},r),t.createElement("form",{onSubmit:async e=>{e.preventDefault();try{const e=await f.A.post("/api/auth/signup",n),{isAdmin:r}=e.data;r?(alert("You are the first user and have been granted admin access."),i("/admin")):(alert("Signup successful. Welcome!"),i("/user-dashboard"))}catch(n){a("Signup failed. Please check your inputs and try again.")}},className:"signup-form"},t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"email"},"Email"),t.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",value:n.email,onChange:s,required:!0})),t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"password"},"Password"),t.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Enter your password",value:n.password,onChange:s,required:!0})),t.createElement("div",{className:"form-group"},t.createElement("label",{htmlFor:"username"},"Username"),t.createElement("input",{type:"text",id:"username",name:"username",placeholder:"Enter your username",value:n.username,onChange:s,required:!0})),t.createElement("button",{type:"submit",className:"signup-button"},"Sign Up")),t.createElement("div",{className:"signup-links"},t.createElement("p",null,"Already have an account?"," ",t.createElement(A.N_,{to:"/signin",className:"login-link"},"Log In")))))}},8087:(n,e,r)=>{r.d(e,{A:()=>o});const t=r(1083).A.create({baseURL:"http://localhost:5000",timeout:1e4});t.defaults.headers.common["Content-Type"]="application/json",t.interceptors.request.use((n=>{const e=localStorage.getItem("token");return e&&(n.headers.Authorization="Bearer ".concat(e)),n}),(n=>Promise.reject(n))),t.interceptors.response.use((n=>n),(n=>(console.error("API Error:",n),Promise.reject(n))));const o=t},5430:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(1354),o=r.n(t),A=r(6314),a=r.n(A)()(o());a.push([n.id,"/* Container styles */\n.signup-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f9f9f9;\n  padding: 1rem;\n}\n\n/* Card styles */\n.signup-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n\n/* Title styles */\n.signup-title {\n  font-size: 1.8rem;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n/* Error message */\n.signup-error {\n  color: red;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n\n/* Form styles */\n.signup-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem; /* Adds spacing between inputs */\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nlabel {\n  font-size: 0.9rem;\n  color: #555;\n  margin-bottom: 0.5rem;\n}\n\ninput {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\ninput:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);\n}\n\n/* Button styles */\n.signup-button {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 0.75rem;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.signup-button:hover {\n  background: #0056b3;\n}\n\n/* Links */\n.signup-links {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.login-link {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.login-link:hover {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./src/styles/SignUp.css"],names:[],mappings:"AAAA,qBAAqB;AACrB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;;AAEA,gBAAgB;AAChB;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,yCAAyC;EACzC,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,qBAAqB;EACrB,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW,EAAE,gCAAgC;AAC/C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,0CAA0C;AAC5C;;AAEA,kBAAkB;AAClB;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,UAAU;AACV;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:["/* Container styles */\n.signup-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f9f9f9;\n  padding: 1rem;\n}\n\n/* Card styles */\n.signup-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n\n/* Title styles */\n.signup-title {\n  font-size: 1.8rem;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n/* Error message */\n.signup-error {\n  color: red;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n\n/* Form styles */\n.signup-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem; /* Adds spacing between inputs */\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nlabel {\n  font-size: 0.9rem;\n  color: #555;\n  margin-bottom: 0.5rem;\n}\n\ninput {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\ninput:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);\n}\n\n/* Button styles */\n.signup-button {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 0.75rem;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.signup-button:hover {\n  background: #0056b3;\n}\n\n/* Links */\n.signup-links {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.login-link {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.login-link:hover {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]);const i=a}}]);
//# sourceMappingURL=405.bundle.js.map