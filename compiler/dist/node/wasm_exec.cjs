"use strict";var T=Object.create;var g=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var P=(l,o)=>{for(var s in o)g(l,s,{get:o[s],enumerable:!0})},v=(l,o,s,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of j(o))!R.call(l,a)&&a!==s&&g(l,a,{get:()=>o[a],enumerable:!(i=U(o,a))||i.enumerable});return l};var w=(l,o,s)=>(s=l!=null?T(I(l)):{},v(o||!l||!l.__esModule?g(s,"default",{value:l,enumerable:!0}):s,l)),E=l=>v(g({},"__esModule",{value:!0}),l);var D={};P(D,{default:()=>y});module.exports=E(D);var d=w(require("crypto"),1),b=w(require("fs"),1),_=require("util");globalThis.fs||Object.defineProperty(globalThis,"fs",{value:b.default});globalThis.process||Object.defineProperties(globalThis,"process",{value:process});globalThis.crypto||Object.defineProperty(globalThis,"crypto",{value:d.default.webcrypto?d.default.webcrypto:{getRandomValues(l){return d.default.randomFillSync(l)}}});globalThis.performance||Object.defineProperty(globalThis,"performance",{value:{now(){let[l,o]=process.hrtime();return l*1e3+o/1e6}}});var x=new _.TextEncoder("utf-8"),C=new _.TextDecoder("utf-8");var y=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;let o=(t,e)=>{this.mem.setUint32(t+0,e,!0),this.mem.setUint32(t+4,Math.floor(e/4294967296),!0)},s=t=>{let e=this.mem.getUint32(t+0,!0),n=this.mem.getInt32(t+4,!0);return e+n*4294967296},i=t=>{let e=this.mem.getFloat64(t,!0);if(e===0)return;if(!isNaN(e))return e;let n=this.mem.getUint32(t,!0);return this._values[n]},a=(t,e)=>{if(typeof e=="number"&&e!==0){if(isNaN(e)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,e,!0);return}if(e===void 0){this.mem.setFloat64(t,0,!0);return}let r=this._ids.get(e);r===void 0&&(r=this._idPool.pop(),r===void 0&&(r=this._values.length),this._values[r]=e,this._goRefCounts[r]=0,this._ids.set(e,r)),this._goRefCounts[r]++;let c=0;switch(typeof e){case"object":e!==null&&(c=1);break;case"string":c=2;break;case"symbol":c=3;break;case"function":c=4;break}this.mem.setUint32(t+4,2146959360|c,!0),this.mem.setUint32(t,r,!0)},h=t=>{let e=s(t+0),n=s(t+8);return new Uint8Array(this._inst.exports.mem.buffer,e,n)},f=t=>{let e=s(t+0),n=s(t+8),r=new Array(n);for(let c=0;c<n;c++)r[c]=i(e+c*8);return r},m=t=>{let e=s(t+0),n=s(t+8);return C.decode(new DataView(this._inst.exports.mem.buffer,e,n))},u=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":t=>{t>>>=0;let e=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(e)},"runtime.wasmWrite":t=>{t>>>=0;let e=s(t+8),n=s(t+16),r=this.mem.getInt32(t+24,!0);b.default.writeSync(e,new Uint8Array(this._inst.exports.mem.buffer,n,r))},"runtime.resetMemoryDataView":t=>{t>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,o(t+8,(u+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;let e=new Date().getTime();o(t+8,e/1e3),this.mem.setInt32(t+16,e%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;let e=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(e,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(e);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(t+8)+1)),this.mem.setInt32(t+16,e,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;let e=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(e)),this._scheduledTimeouts.delete(e)},"runtime.getRandomData":t=>{t>>>=0,globalThis.crypto.getRandomValues(h(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;let e=this.mem.getUint32(t+8,!0);if(this._goRefCounts[e]--,this._goRefCounts[e]===0){let n=this._values[e];this._values[e]=null,this._ids.delete(n),this._idPool.push(e)}},"syscall/js.stringVal":t=>{t>>>=0,a(t+24,m(t+8))},"syscall/js.valueGet":t=>{t>>>=0;let e=Reflect.get(i(t+8),m(t+16));t=this._inst.exports.getsp()>>>0,a(t+32,e)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(i(t+8),m(t+16),i(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(i(t+8),m(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,a(t+24,Reflect.get(i(t+8),s(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(i(t+8),s(t+16),i(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{let e=i(t+8),n=Reflect.get(e,m(t+16)),r=f(t+32),c=Reflect.apply(n,e,r);t=this._inst.exports.getsp()>>>0,a(t+56,c),this.mem.setUint8(t+64,1)}catch(e){t=this._inst.exports.getsp()>>>0,a(t+56,e),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{let e=i(t+8),n=f(t+16),r=Reflect.apply(e,void 0,n);t=this._inst.exports.getsp()>>>0,a(t+40,r),this.mem.setUint8(t+48,1)}catch(e){t=this._inst.exports.getsp()>>>0,a(t+40,e),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{let e=i(t+8),n=f(t+16),r=Reflect.construct(e,n);t=this._inst.exports.getsp()>>>0,a(t+40,r),this.mem.setUint8(t+48,1)}catch(e){t=this._inst.exports.getsp()>>>0,a(t+40,e),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,o(t+16,parseInt(i(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;let e=x.encode(String(i(t+8)));a(t+16,e),o(t+24,e.length)},"syscall/js.valueLoadString":t=>{t>>>=0;let e=i(t+8);h(t+16).set(e)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,i(t+8)instanceof i(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;let e=h(t+8),n=i(t+32);if(!(n instanceof Uint8Array||n instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}let r=n.subarray(0,e.length);e.set(r),o(t+40,r.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;let e=i(t+8),n=h(t+16);if(!(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}let r=n.subarray(0,e.length);e.set(r),o(t+40,r.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}async run(o){if(!(o instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=o,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,globalThis,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[globalThis,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096,i=u=>{let t=s,e=x.encode(u+"\0");return new Uint8Array(this.mem.buffer,s,e.length).set(e),s+=e.length,s%8!==0&&(s+=8-s%8),t},a=this.argv.length,h=[];this.argv.forEach(u=>{h.push(i(u))}),h.push(0),Object.keys(this.env).sort().forEach(u=>{h.push(i(`${u}=${this.env[u]}`))}),h.push(0);let m=s;h.forEach(u=>{this.mem.setUint32(s,u,!0),this.mem.setUint32(s+4,0,!0),s+=8}),this._inst.exports.run(a,m),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(o){let s=this;return function(){let i={id:o,this:this,args:arguments};return s._pendingEvent=i,s._resume(),i.result}}};
