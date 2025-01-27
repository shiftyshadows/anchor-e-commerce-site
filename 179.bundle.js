"use strict";(self.webpackChunkanchor_ecommerce_frontend=self.webpackChunkanchor_ecommerce_frontend||[]).push([[179],{6179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(6540),o=n(7767),a=n(8087),c=n(5072),i=n.n(c),d=n(7825),u=n.n(d),A=n(7659),l=n.n(A),p=n(5056),s=n.n(p),m=n(540),b=n.n(m),g=n(1113),E=n.n(g),f=n(9021),h={};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}h.styleTagTransform=E(),h.setAttributes=s(),h.insert=l().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=b(),i()(f.A,h),f.A&&f.A.locals&&f.A.locals;const k=()=>{const{id:e}=(0,o.g)(),t=(0,o.Zp)(),[n,c]=(0,r.useState)(null),[i,d]=(0,r.useState)({name:"",description:"",price:"",stock:"",image:"",featured:!1});(0,r.useEffect)((()=>{u()}),[e]);const u=async()=>{try{const t=await a.A.get("/api/products/".concat(e));c(t.data),d(t.data)}catch(e){console.error("Error fetching product details:",e)}},A=e=>{const{name:t,value:n,type:r,checked:o}=e.target;d(B(B({},i),{},{[t]:"checkbox"===r?o:n}))};return r.createElement("div",{className:"editproduct-container"},r.createElement("h1",null,"Edit Product"),n?r.createElement("form",{className:"editproduct-form",onSubmit:async t=>{t.preventDefault();try{await a.A.put("/api/products/".concat(e),i),alert("Product updated successfully!")}catch(e){console.error("Error updating product:",e),alert("Failed to update product. Please try again.")}}},r.createElement("input",{type:"text",name:"name",value:i.name,onChange:A,placeholder:"Product Name",required:!0}),r.createElement("textarea",{name:"description",value:i.description,onChange:A,placeholder:"Product Description"}),r.createElement("input",{type:"number",name:"price",value:i.price,onChange:A,placeholder:"Product Price",required:!0}),r.createElement("input",{type:"number",name:"stock",value:i.stock,onChange:A,placeholder:"Stock Quantity",required:!0}),r.createElement("input",{type:"text",name:"image",value:i.image,onChange:A,placeholder:"Image URL"}),r.createElement("label",null,r.createElement("input",{type:"checkbox",name:"featured",checked:i.featured,onChange:A}),"Featured"),r.createElement("div",{className:"button-group"},r.createElement("button",{type:"submit",className:"update-button"},"Update Product"),r.createElement("button",{type:"button",className:"delete-button",onClick:async()=>{try{await a.A.delete("/api/products/".concat(e)),alert("Product deleted successfully!"),t("/view-products")}catch(e){console.error("Error deleting product:",e),alert("Failed to delete product. Please try again.")}}},"Delete Product"))):r.createElement("p",null,"Loading product details..."))}},8087:(e,t,n)=>{n.d(t,{A:()=>o});const r=n(1083).A.create({baseURL:"http://localhost:5000",timeout:1e4});r.defaults.headers.common["Content-Type"]="application/json",r.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(e=>Promise.reject(e))),r.interceptors.response.use((e=>e),(e=>(console.error("API Error:",e),Promise.reject(e))));const o=r},9021:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1354),o=n.n(r),a=n(6314),c=n.n(a)()(o());c.push([e.id,".editproduct-container {\n  padding: 2rem;\n  background: #f9f9f9;\n  min-height: 100vh;\n  text-align: center;\n}\n\n.editproduct-form {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.editproduct-form input,\n.editproduct-form textarea {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.editproduct-form label {\n  font-size: 1rem;\n  color: #555;\n  display: block;\n  margin-bottom: 1rem;\n}\n\n.button-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.update-button,\n.delete-button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n.update-button {\n  background: #007bff;\n  color: white;\n}\n\n.update-button:hover {\n  background: #0056b3;\n}\n\n.delete-button {\n  background: #dc3545;\n  color: white;\n}\n\n.delete-button:hover {\n  background: #c82333;\n}\n","",{version:3,sources:["webpack://./src/styles/EditProduct.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:[".editproduct-container {\n  padding: 2rem;\n  background: #f9f9f9;\n  min-height: 100vh;\n  text-align: center;\n}\n\n.editproduct-form {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.editproduct-form input,\n.editproduct-form textarea {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.editproduct-form label {\n  font-size: 1rem;\n  color: #555;\n  display: block;\n  margin-bottom: 1rem;\n}\n\n.button-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.update-button,\n.delete-button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n.update-button {\n  background: #007bff;\n  color: white;\n}\n\n.update-button:hover {\n  background: #0056b3;\n}\n\n.delete-button {\n  background: #dc3545;\n  color: white;\n}\n\n.delete-button:hover {\n  background: #c82333;\n}\n"],sourceRoot:""}]);const i=c}}]);
//# sourceMappingURL=179.bundle.js.map