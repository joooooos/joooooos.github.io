import{R as Qe,V as y,B as et,I as tt,F as we,a as me,b as k,W as nt,c as ve,S as Re,d as ot,U as Me,e as Ee,f as Oe,M as it,g as $,L as st,h as rt,i as D,r as l,u as Ce,C as at,j as ze,k as c,l as ct,P as _e,m as Ie,n as lt,o as ft,p as ut}from"./index--WQNmWoq.js";function q(){return q=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},q.apply(null,arguments)}const De=parseInt(Qe.replace(/\D+/g,"")),Ne=De>=125?"uv1":"uv2";function dt(i,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,o=[new y,new y,new y],s=new y,r=new y,a=new y,f=new y;function p(v){const S=~~(v.x*n),x=~~(v.y*n),j=~~(v.z*n);return`${S},${x},${j}`}const h=i.index?i.toNonIndexed():i,d=h.attributes.position,g={};for(let v=0,S=d.count/3;v<S;v++){const x=3*v,j=o[0].fromBufferAttribute(d,x+0),u=o[1].fromBufferAttribute(d,x+1),m=o[2].fromBufferAttribute(d,x+2);s.subVectors(m,u),r.subVectors(j,u);const w=new y().crossVectors(s,r).normalize();for(let B=0;B<3;B++){const M=o[B],P=p(M);P in g||(g[P]=[]),g[P].push(w)}}const b=new Float32Array(d.count*3),L=new et(b,3,!1);for(let v=0,S=d.count/3;v<S;v++){const x=3*v,j=o[0].fromBufferAttribute(d,x+0),u=o[1].fromBufferAttribute(d,x+1),m=o[2].fromBufferAttribute(d,x+2);s.subVectors(m,u),r.subVectors(j,u),a.crossVectors(s,r).normalize();for(let w=0;w<3;w++){const B=o[w],M=p(B),P=g[M];f.set(0,0,0);for(let N=0,X=P.length;N<X;N++){const F=P[N];a.dot(F)>t&&f.add(F)}f.normalize(),L.setXYZ(x+w,f.x,f.y,f.z)}}return h.setAttribute("normal",L),h}const Ae=new ve,Z=new y;class xe extends tt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new we(e,3)),this.setAttribute("uv",new we(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new me(t,6,1);return this.setAttribute("instanceStart",new k(n,3,0)),this.setAttribute("instanceEnd",new k(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const o=new me(n,t*2,1);return this.setAttribute("instanceColorStart",new k(o,t,0)),this.setAttribute("instanceColorEnd",new k(o,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new nt(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ve);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ae.setFromBufferAttribute(t),this.boundingBox.union(Ae))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Re),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let o=0;for(let s=0,r=e.count;s<r;s++)Z.fromBufferAttribute(e,s),o=Math.max(o,n.distanceToSquared(Z)),Z.fromBufferAttribute(t,s),o=Math.max(o,n.distanceToSquared(Z));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class He extends xe{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let o=0;o<t;o+=3)n[2*o]=e[o],n[2*o+1]=e[o+1],n[2*o+2]=e[o+2],n[2*o+3]=e[o+3],n[2*o+4]=e[o+4],n[2*o+5]=e[o+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,o=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)o[2*s]=e[s],o[2*s+1]=e[s+1],o[2*s+2]=e[s+2],o[2*s+3]=e[s+3],o[2*s+4]=e[s+4],o[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)o[2*s]=e[s],o[2*s+1]=e[s+1],o[2*s+2]=e[s+2],o[2*s+3]=e[s+3],o[2*s+4]=e[s+4],o[2*s+5]=e[s+5],o[2*s+6]=e[s+6],o[2*s+7]=e[s+7];return super.setColors(o,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class ye extends ot{constructor(e){super({type:"LineMaterial",uniforms:Me.clone(Me.merge([Ee.common,Ee.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${De>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const le=new $,Le=new y,je=new y,E=new $,_=new $,U=new $,fe=new y,ue=new rt,A=new st,Te=new y,Q=new ve,ee=new Re,R=new $;let C,W;function Be(i,e,t){return R.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),R.multiplyScalar(1/R.w),R.x=W/t.width,R.y=W/t.height,R.applyMatrix4(i.projectionMatrixInverse),R.multiplyScalar(1/R.w),Math.abs(Math.max(R.x,R.y))}function pt(i,e){const t=i.matrixWorld,n=i.geometry,o=n.attributes.instanceStart,s=n.attributes.instanceEnd,r=Math.min(n.instanceCount,o.count);for(let a=0,f=r;a<f;a++){A.start.fromBufferAttribute(o,a),A.end.fromBufferAttribute(s,a),A.applyMatrix4(t);const p=new y,h=new y;C.distanceSqToSegment(A.start,A.end,h,p),h.distanceTo(p)<W*.5&&e.push({point:h,pointOnLine:p,distance:C.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,[Ne]:null})}}function ht(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,r=i.matrixWorld,a=i.geometry,f=a.attributes.instanceStart,p=a.attributes.instanceEnd,h=Math.min(a.instanceCount,f.count),d=-e.near;C.at(1,U),U.w=1,U.applyMatrix4(e.matrixWorldInverse),U.applyMatrix4(n),U.multiplyScalar(1/U.w),U.x*=s.x/2,U.y*=s.y/2,U.z=0,fe.copy(U),ue.multiplyMatrices(e.matrixWorldInverse,r);for(let g=0,b=h;g<b;g++){if(E.fromBufferAttribute(f,g),_.fromBufferAttribute(p,g),E.w=1,_.w=1,E.applyMatrix4(ue),_.applyMatrix4(ue),E.z>d&&_.z>d)continue;if(E.z>d){const u=E.z-_.z,m=(E.z-d)/u;E.lerp(_,m)}else if(_.z>d){const u=_.z-E.z,m=(_.z-d)/u;_.lerp(E,m)}E.applyMatrix4(n),_.applyMatrix4(n),E.multiplyScalar(1/E.w),_.multiplyScalar(1/_.w),E.x*=s.x/2,E.y*=s.y/2,_.x*=s.x/2,_.y*=s.y/2,A.start.copy(E),A.start.z=0,A.end.copy(_),A.end.z=0;const v=A.closestPointToPointParameter(fe,!0);A.at(v,Te);const S=D.lerp(E.z,_.z,v),x=S>=-1&&S<=1,j=fe.distanceTo(Te)<W*.5;if(x&&j){A.start.fromBufferAttribute(f,g),A.end.fromBufferAttribute(p,g),A.start.applyMatrix4(r),A.end.applyMatrix4(r);const u=new y,m=new y;C.distanceSqToSegment(A.start,A.end,m,u),t.push({point:m,pointOnLine:u,distance:C.origin.distanceTo(m),object:i,face:null,faceIndex:g,uv:null,[Ne]:null})}}}class Ge extends it{constructor(e=new xe,t=new ye({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,o=new Float32Array(2*t.count);for(let r=0,a=0,f=t.count;r<f;r++,a+=2)Le.fromBufferAttribute(t,r),je.fromBufferAttribute(n,r),o[a]=a===0?0:o[a-1],o[a+1]=o[a]+Le.distanceTo(je);const s=new me(o,2,1);return e.setAttribute("instanceDistanceStart",new k(s,1,0)),e.setAttribute("instanceDistanceEnd",new k(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,o=e.camera;o===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;C=e.ray;const r=this.matrixWorld,a=this.geometry,f=this.material;W=f.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),ee.copy(a.boundingSphere).applyMatrix4(r);let p;if(n)p=W*.5;else{const d=Math.max(o.near,ee.distanceToPoint(C.origin));p=Be(o,d,f.resolution)}if(ee.radius+=p,C.intersectsSphere(ee)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Q.copy(a.boundingBox).applyMatrix4(r);let h;if(n)h=W*.5;else{const d=Math.max(o.near,Q.distanceToPoint(C.origin));h=Be(o,d,f.resolution)}Q.expandByScalar(h),C.intersectsBox(Q)!==!1&&(n?pt(this,t):ht(this,o,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(le),this.material.uniforms.resolution.value.set(le.z,le.w))}}class mt extends Ge{constructor(e=new He,t=new ye({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const We=l.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:o,lineWidth:s,segments:r,dashed:a,...f},p){var h,d;const g=Ce(x=>x.size),b=l.useMemo(()=>r?new Ge:new mt,[r]),[L]=l.useState(()=>new ye),v=(n==null||(h=n[0])==null?void 0:h.length)===4?4:3,S=l.useMemo(()=>{const x=r?new xe:new He,j=e.map(u=>{const m=Array.isArray(u);return u instanceof y||u instanceof $?[u.x,u.y,u.z]:u instanceof Oe?[u.x,u.y,0]:m&&u.length===3?[u[0],u[1],u[2]]:m&&u.length===2?[u[0],u[1],0]:u});if(x.setPositions(j.flat()),n){t=16777215;const u=n.map(m=>m instanceof at?m.toArray():m);x.setColors(u.flat(),v)}return x},[e,r,n,v]);return l.useLayoutEffect(()=>{b.computeLineDistances()},[e,b]),l.useLayoutEffect(()=>{a?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[a,L]),l.useEffect(()=>()=>{S.dispose(),L.dispose()},[S]),l.createElement("primitive",q({object:b,ref:p},f),l.createElement("primitive",{object:S,attach:"geometry"}),l.createElement("primitive",q({object:L,attach:"material",color:t,vertexColors:!!n,resolution:[g.width,g.height],linewidth:(d=o??s)!==null&&d!==void 0?d:1,dashed:a,transparent:v===4},f)))}),O=1e-5;function gt(i,e,t){const n=new ze,o=t-O;return n.absarc(O,O,O,-Math.PI/2,-Math.PI,!0),n.absarc(O,e-o*2,O,Math.PI,Math.PI/2,!0),n.absarc(i-o*2,e-o*2,O,Math.PI/2,0,!0),n.absarc(i-o*2,O,O,0,-Math.PI/2,!0),n}const vt=l.forwardRef(function({args:[e=1,t=1,n=1]=[],radius:o=.05,steps:s=1,smoothness:r=4,bevelSegments:a=4,creaseAngle:f=.4,children:p,...h},d){return l.createElement("mesh",q({ref:d},h),l.createElement(xt,{args:[e,t,n],radius:o,steps:s,smoothness:r,bevelSegments:a,creaseAngle:f}),p)}),xt=l.forwardRef(function({args:[e=1,t=1,n=1]=[],radius:o=.05,steps:s=1,smoothness:r=4,bevelSegments:a=4,creaseAngle:f=.4,...p},h){const d=l.useMemo(()=>gt(e,t,o),[e,t,o]),g=l.useMemo(()=>({depth:n-o*2,bevelEnabled:!0,bevelSegments:a*2,steps:s,bevelSize:o-O,bevelThickness:o,curveSegments:r}),[n,o,r,a,s]),b=l.useRef(null);return l.useLayoutEffect(()=>{b.current&&(b.current.center(),dt(b.current,f))},[d,g,f]),l.useImperativeHandle(h,()=>b.current),l.createElement("extrudeGeometry",q({ref:b,args:[d,g]},p))}),de={front:{code:"F-STUDIO / OBJECT 01",handling:"HANDLE WITH INTENT",title:"forma.work",note:"THOUGHTS INTO PRACTICE",barcode:"2607 0419 01"},side:{code:"THOUGHT COMPANION",title:"JUDGMENT",outcome:"WORKFLOW",signature:"FORMA / SIGNAL 2026"},top:{left:"PROBABILITY",right:"JUDGMENT",note:"INTENT FIRST"}},Pe={width:3.35,height:1.92,depth:2.42},ne="#b7b0a7",z="#5f5a54",Fe="#393632",pe="#ff4d00",yt=.085;function I(i,e,t,n,o,s,r=ne){i.save(),i.fillStyle=r,i.font=`500 ${o}px "SFMono-Regular", "Roboto Mono", monospace`;let a=t;for(const f of e)i.fillText(f,a,n),a+=i.measureText(f).width+s;i.restore()}function St(i,e,t,n,o){i.save(),i.strokeStyle=Fe,i.lineWidth=2,i.setLineDash([8,12]),i.beginPath(),i.moveTo(e,t),i.lineTo(n,o),i.stroke(),i.restore()}function bt(i,e,t,n,o){const s=[2,1,3,1,1,4,2,1,3,2,1,1,4,1,2,3,1,2,4,1,1,3],r=s.reduce((f,p)=>f+p,0);let a=e;i.save(),i.fillStyle="#8f8981",s.forEach((f,p)=>{const h=f/r*n;p%2===0&&i.fillRect(a,t,h,o),a+=h}),i.restore()}function he(i){const e=i==="side"?[820,640]:i==="top"?[1100,790]:[1100,640],t=document.createElement("canvas");t.width=e[0],t.height=e[1];const n=t.getContext("2d");if(!n)throw new Error("Unable to create intent box texture");n.fillStyle="#0d0c0b",n.fillRect(0,0,t.width,t.height);const o=n.createLinearGradient(0,0,t.width,t.height);if(o.addColorStop(0,"rgba(245,237,228,0.025)"),o.addColorStop(.52,"rgba(255,255,255,0)"),o.addColorStop(1,"rgba(255,77,0,0.018)"),n.fillStyle=o,n.fillRect(0,0,t.width,t.height),i==="front"){const r=de.front;I(n,r.code,70,96,19,4.5,z),I(n,r.handling,70,132,17,4.2,z),n.fillStyle=pe,n.fillRect(70,172,11,11),n.fillStyle=Fe,n.fillRect(96,176,230,2),St(n,70,246,1030,246),n.fillStyle=ne,n.font='500 54px "SFMono-Regular", "Roboto Mono", monospace',n.fillText(r.title,70,474),I(n,r.note,73,520,15,3.4,z),bt(n,826,472,196,68),I(n,r.barcode,827,566,13,2.5,z)}if(i==="side"){const r=de.side;I(n,r.code,64,350,16,3.6,z),n.fillStyle=ne,n.font='600 48px "SFMono-Regular", "Roboto Mono", monospace',n.fillText(r.title,64,430),n.fillStyle=pe,n.fillRect(65,458,46,7),n.fillStyle=ne,n.font='500 30px "SFMono-Regular", "Roboto Mono", monospace',n.fillText(`→ ${r.outcome}`,64,515),n.save(),n.translate(585,538),n.rotate(-.52),n.fillStyle="#87817a",n.fillRect(0,0,18,44),n.fillStyle="#4f4b47",n.fillRect(24,0,18,30),n.restore(),I(n,r.signature,64,590,13,2.4,z)}if(i==="top"){const r=de.top;n.fillStyle="rgba(255,77,0,0.5)",n.fillRect(t.width/2+6,0,2,190),I(n,r.left,72,112,16,4.4,z),I(n,r.right,628,112,16,4.4,z),I(n,r.note,72,680,14,4,z),n.fillStyle=pe,n.fillRect(1010,652,12,12)}const s=new lt(t);return s.colorSpace=ft,s.anisotropy=4,s.needsUpdate=!0,s}function Ue(i,e,t){const n=new ze,o=-i/2,s=i/2,r=-e/2,a=e/2;return n.moveTo(o+t,r),n.lineTo(s-t,r),n.quadraticCurveTo(s,r,s,r+t),n.lineTo(s,a-t),n.quadraticCurveTo(s,a,s-t,a),n.lineTo(o+t,a),n.quadraticCurveTo(o,a,o,a-t),n.lineTo(o,r+t),n.quadraticCurveTo(o,r,o+t,r),n}function wt({panelWidth:i,panelHeight:e,thickness:t}){const n=l.useMemo(()=>Ue(.71,.22,.108),[]),o=l.useMemo(()=>Ue(.64,.15,.074),[]);return c.jsxs("group",{position:[-i*.08,e*.19,t/2+.012],children:[c.jsxs("mesh",{children:[c.jsx("shapeGeometry",{args:[n,24]}),c.jsx("meshBasicMaterial",{color:"#5f5a55",toneMapped:!1})]}),c.jsxs("mesh",{position:[0,0,.006],children:[c.jsx("shapeGeometry",{args:[o,24]}),c.jsx("meshBasicMaterial",{color:"#050505",toneMapped:!1})]}),c.jsx(We,{points:[[-.235,.048,.009],[.225,.048,.009]],color:"#8a847c",transparent:!0,opacity:.24,lineWidth:.45})]})}function Mt(i,e,t,n){const o=[];return[{x:i-t,y:e-t,start:0},{x:-i+t,y:e-t,start:Math.PI/2},{x:-i+t,y:-e+t,start:Math.PI},{x:i-t,y:-e+t,start:Math.PI*1.5}].forEach(a=>{for(let f=0;f<=7;f+=1){const p=a.start+f/7*(Math.PI/2);o.push(n(a.x+Math.cos(p)*t,a.y+Math.sin(p)*t))}}),o}function Et({points:i,closed:e=!0,opacity:t=1,radius:n=.0125}){const o=l.useMemo(()=>new ut(i,e,"centripetal",.5),[e,i]),s=l.useMemo(()=>e&&i.length>0?[...i,i[0]]:i,[e,i]);return c.jsxs("group",{children:[c.jsxs("mesh",{renderOrder:2,children:[c.jsx("tubeGeometry",{args:[o,Math.max(40,i.length*2),n,8,e]}),c.jsx("meshBasicMaterial",{color:"#6f6a63",transparent:!0,opacity:.72*t,toneMapped:!1,depthWrite:!1})]}),c.jsx(We,{points:s,color:"#aaa39a",transparent:!0,opacity:.46*t,lineWidth:.62,renderOrder:3})]})}const te=.055;function G({width:i,height:e,texture:t,showHandle:n=!1}){const o=Math.min(yt,i*.08,e*.08),s=l.useMemo(()=>Mt(i/2,e/2,o,(r,a)=>new y(r,a,te/2+.012)),[o,e,i]);return c.jsxs("group",{children:[c.jsx(vt,{args:[i,e,te],radius:o,smoothness:6,bevelSegments:4,creaseAngle:.7,children:c.jsx("meshStandardMaterial",{color:"#0d0c0b",roughness:.94,metalness:.015})}),t&&c.jsxs("mesh",{position:[0,0,te/2+.006],children:[c.jsx("planeGeometry",{args:[Math.max(.01,i-o*2.05),Math.max(.01,e-o*2.05)]}),c.jsx("meshStandardMaterial",{map:t,roughness:.92,metalness:.02})]}),c.jsx(Et,{points:s,radius:.0118}),n&&c.jsx(wt,{panelWidth:i,panelHeight:e,thickness:te})]})}function ge(i,e,t){return D.clamp((i-e)/(t-e),0,1)}function Y(i,e,t){const n=ge(i,e,t);return n*n*(3-2*n)}function _t({phase:i,unfoldProgress:e}){const t=l.useRef(null),n=l.useRef(null),o=l.useRef(null),s=l.useRef(null),r=l.useRef(null),a=l.useRef(null),f=l.useRef(null),p=l.useRef(null),h=l.useMemo(()=>he("front"),[]),d=l.useMemo(()=>he("side"),[]),g=l.useMemo(()=>he("top"),[]),b=l.useMemo(()=>{const w=g.clone();return w.repeat.set(.5,1),w.offset.set(0,0),w.needsUpdate=!0,w},[g]),L=l.useMemo(()=>{const w=g.clone();return w.repeat.set(.5,1),w.offset.set(.5,0),w.needsUpdate=!0,w},[g]);l.useEffect(()=>()=>{h.dispose(),d.dispose(),g.dispose(),b.dispose(),L.dispose()},[h,d,b,L,g]),Ie((w,B)=>{const M=t.current,P=n.current,N=o.current,X=s.current,F=r.current,oe=a.current,ie=f.current,se=p.current;if(!M||!P||!N||!X||!F||!oe||!ie||!se)return;const{width:Ve,height:ke,depth:qe}=Pe,Se=Ve/2,J=ke/2,K=qe/2;if(i==="unfold"){const V=e.get(),Ke=Math.sin(ge(V,0,.075)*Math.PI/2),Ye=ge(V,.075,.255),Ze=Math.sin(Ye*Math.PI)*.27,ce=1-Y(V,.255,.32),be=Y(V,.31,.4),H=Y(V,.36,.72),T=Y(V,.5,.88);M.position.y=-Ke*.045+Ze,M.position.z=T*.38,M.rotation.z=0,M.scale.set(1+ce*.026+T*.58,1-ce*.05+T*.58,1+ce*.026+T*.58),ie.rotation.z=-H*.94,se.rotation.z=H*.94,P.rotation.x=H*1.12,N.rotation.y=H*1.01,X.rotation.y=-H*1.01,F.rotation.x=-H*.88,oe.rotation.x=-H*1.05,ie.position.set(-T*1.5,J+be*.012+T*2.15,0),se.position.set(T*1.5,J+be*.012+T*2.15,0),P.position.set(0,-J-T*2.65,K),N.position.set(Se+T*2.15,0,-K),X.position.set(-Se-T*2.15,0,-K),F.position.set(0,-J+T*2.25,-K-T*.72),oe.position.set(0,-J-T*2.5,-K);return}const re=i==="pulse-one",ae=i==="pulse-two",$e=ae?.2:re?.12:0,Xe=ae?1.045:re?1.025:1,Je=ae?.025:re?-.018:0;M.position.y=D.damp(M.position.y,$e,13,B),M.position.z=D.damp(M.position.z,0,13,B),M.scale.setScalar(D.damp(M.scale.x,Xe,14,B)),M.rotation.z=D.damp(M.rotation.z,Je,14,B)});const{width:v,height:S,depth:x}=Pe,j=v/2,u=S/2,m=x/2;return c.jsxs("group",{ref:t,children:[c.jsx("group",{ref:n,position:[0,-u,m],children:c.jsx("group",{position:[0,u,0],children:c.jsx(G,{width:v,height:S,texture:h})})}),c.jsx("group",{ref:o,position:[j,0,-m],children:c.jsx("group",{position:[0,0,m],rotation:[0,Math.PI/2,0],children:c.jsx(G,{width:x,height:S,texture:d,showHandle:!0})})}),c.jsx("group",{ref:s,position:[-j,0,-m],children:c.jsx("group",{position:[0,0,m],rotation:[0,-Math.PI/2,0],children:c.jsx(G,{width:x,height:S})})}),c.jsx("group",{ref:r,position:[0,-u,-m],children:c.jsx("group",{position:[0,u,0],rotation:[0,Math.PI,0],children:c.jsx(G,{width:v,height:S})})}),c.jsx("group",{ref:a,position:[0,-u,-m],children:c.jsx("group",{position:[0,0,m],rotation:[Math.PI/2,0,0],children:c.jsx(G,{width:v,height:x})})}),c.jsx("group",{ref:f,position:[0,u,0],children:c.jsx("group",{position:[-j/2,0,0],rotation:[-Math.PI/2,0,0],children:c.jsx(G,{width:v/2,height:x,texture:b})})}),c.jsx("group",{ref:p,position:[0,u,0],children:c.jsx("group",{position:[j/2,0,0],rotation:[-Math.PI/2,0,0],children:c.jsx(G,{width:v/2,height:x,texture:L})})})]})}function At({unfoldProgress:i}){const{camera:e,size:t}=Ce(),n=l.useRef(new y),o=l.useRef(new y);return l.useEffect(()=>{e instanceof _e&&(t.width<640?(n.current.set(6.5,7.15,8.4),o.current.set(0,.18,10),e.fov=38):(n.current.set(4.8,5.35,5.9),o.current.set(0,.2,8.2),e.fov=31),e.position.copy(n.current),e.lookAt(0,-.18,0),e.updateProjectionMatrix())},[e,t.width]),Ie(()=>{if(!(e instanceof _e))return;const s=Y(i.get(),.34,.64);e.position.lerpVectors(n.current,o.current,s),e.fov=D.lerp(t.width<640?38:31,t.width<640?34:28,s),e.lookAt(0,D.lerp(-.18,0,s),0),e.updateProjectionMatrix()}),null}function jt({phase:i,unfoldProgress:e,onReady:t}){return c.jsx("div",{className:"relative h-full w-full",role:"img","aria-label":"A three-dimensional Forma thought object marked with judgment, workflow, and intent signals",children:c.jsxs(ct,{dpr:[1,1.35],camera:{position:[4.8,5.35,5.9],fov:31,near:.1,far:40},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},onCreated:t,children:[c.jsx(At,{unfoldProgress:e}),c.jsx("ambientLight",{intensity:.55}),c.jsx("directionalLight",{position:[2.5,5,5],intensity:1.25,color:"#f5ede4"}),c.jsx("directionalLight",{position:[-4,1,2],intensity:.4,color:"#ff4d00"}),c.jsx(_t,{phase:i,unfoldProgress:e})]})})}export{jt as default};
