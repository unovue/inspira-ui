<template>
  <div class="flex flex-col items-center justify-center w-full h-96 gap-4">
    <ShaderToy
      :key="selectedExample"
      :shader-code="selectedExample"
      class="w-full h-full"
    />

    <div class="w-full gap-4 flex items-center">
      <div>Select Example:</div>
      <Select v-model="preset">
        <SelectTrigger class="w-[220px]">
          <SelectValue placeholder="Select example shader" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="exampleName in Object.keys(shaderExamples)"
              :key="exampleName"
              :value="exampleName"
            >
              {{ getName(exampleName) }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<script setup lang="ts">
// Source Link: https://www.shadertoy.com/view/XlfGRj
const starNest = `

// Star Nest by Pablo Roman Andrioli
// License: MIT

#define iterations 17
#define formuparam 0.53

#define volsteps 20
#define stepsize 0.1

#define zoom   0.800
#define tile   0.850
#define speed  0.010 

#define brightness 0.0015
#define darkmatter 0.300
#define distfading 0.730
#define saturation 0.850


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	//get coords and direction
	vec2 uv=fragCoord.xy/iResolution.xy-.5;
	uv.y*=iResolution.y/iResolution.x;
	vec3 dir=vec3(uv*zoom,1.);
	float time=iTime*speed+.25;

	//mouse rotation
	float a1=.5+iMouse.z/iResolution.x*2.;
	float a2=.8+iMouse.w/iResolution.y*2.;
	mat2 rot1=mat2(cos(a1),sin(a1),-sin(a1),cos(a1));
	mat2 rot2=mat2(cos(a2),sin(a2),-sin(a2),cos(a2));
	dir.xz*=rot1;
	dir.xy*=rot2;
	vec3 from=vec3(1.,.5,0.5);
	from+=vec3(time*2.,time,-2.);
	from.xz*=rot1;
	from.xy*=rot2;
	
	//volumetric rendering
	float s=0.1,fade=1.;
	vec3 v=vec3(0.);
	for (int r=0; r<volsteps; r++) {
		vec3 p=from+s*dir*.5;
		p = abs(vec3(tile)-mod(p,vec3(tile*2.))); // tiling fold
		float pa,a=pa=0.;
		for (int i=0; i<iterations; i++) { 
			p=abs(p)/dot(p,p)-formuparam; // the magic formula
			a+=abs(length(p)-pa); // absolute sum of average change
			pa=length(p);
		}
		float dm=max(0.,darkmatter-a*a*.001); //dark matter
		a*=a*a; // add contrast
		if (r>6) fade*=1.-dm; // dark matter, don't render near
		//v+=vec3(dm,dm*.5,0.);
		v+=fade;
		v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; // coloring based on distance
		fade*=distfading; // distance fading
		s+=stepsize;
	}
	v=mix(vec3(length(v)),v,saturation); //color adjust
	fragColor = vec4(v*.01,1.);	
	
}
`;

// Source Link: https://www.shadertoy.com/view/wctXWN
const vortex = `
/*

    "Vortex" by @XorDev
    
    https://x.com/XorDev/status/1930594981963505793

    An experiment based on my "3D Fire":
    https://www.shadertoy.com/view/3XXSWS
	
*/
void mainImage(out vec4 O, vec2 I)
{
    //Raymarch iterator
    float i,
    //Raymarch depth
    z = fract(dot(I,sin(I))),
    //Raymarch step size
    d;
    //Raymarch loop (100 iterations)
    for(O *= i; i++<1e2;
        //Sample coloring and glow attenuation
        O+=(sin(z+vec4(6,2,4,0))+1.5)/d)
    {
        //Raymarch sample position
        vec3 p = z * normalize(vec3(I+I,0) - iResolution.xyy);
        //Shift camera back
        p.z += 6.;
        //Distortion (turbulence) loop
        for(d=1.; d<9.; d/=.8)
            //Add distortion waves
            p += cos(p.yzx*d-iTime)/d;
        //Compute distorted distance field of hollow sphere
        z += d = .002+abs(length(p)-.5)/4e1;
    }
    //Tanh tonemapping
    //https://www.shadertoy.com/view/ms3BD7
    O = tanh(O/7e3);
}
`;

// Source Link: https://www.shadertoy.com/view/lcfyDj
const blackhole = `
  // Ref - https://x.com/cmzw_/status/1787147460772864188 (celestianmaze)

  vec4 permute_3d(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt3d(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float simplexNoise3d(vec3 v)
  {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      //  x0 = x0 - 0. + 0.0 * C
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      // Permutations
      i = mod(i, 289.0 );
      vec4 p = permute_3d( permute_3d( permute_3d( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      // Gradients
      // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      // Normalise gradients
      vec4 norm = taylorInvSqrt3d(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  float fbm3d(vec3 x, const in int it) {
      float v = 0.0;
      float a = 0.5;
      vec3 shift = vec3(100);

      
      for (int i = 0; i < 32; ++i) {
          if(i<it) {
              v += a * simplexNoise3d(x);
              x = x * 2.0 + shift;
              a *= 0.5;
          }
      }
      return v;
  }

  vec3 rotateZ(vec3 v, float angle) {
      float cosAngle = cos(angle);
      float sinAngle = sin(angle);
      return vec3(
          v.x * cosAngle - v.y * sinAngle,
          v.x * sinAngle + v.y * cosAngle,
          v.z
      );
  }

  float facture(vec3 vector) {
      vec3 normalizedVector = normalize(vector);

      return max(max(normalizedVector.x, normalizedVector.y), normalizedVector.z);
  }

  vec3 emission(vec3 color, float strength) {
      return color * strength;
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
      // Normalized pixel coordinates (from 0 to 1) and (from -1 to 1)
      vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
      

      vec3 color = vec3(uv.xy, 0.0);
      color.z += 0.5;
      
      color = normalize(color);
      color -= 0.2 * vec3(0.0, 0.0, iTime);
      
      float angle = -log2(length(uv)); // log base 0.5
      
      color = rotateZ( color, angle );
      
      float frequency = 1.4;
      float distortion = 0.01;
      color.x = fbm3d(color * frequency + 0.0, 5) + distortion;
      color.y = fbm3d(color * frequency + 1.0, 5) + distortion;
      color.z = fbm3d(color * frequency + 2.0, 5) + distortion;
      vec3 noiseColor = color; // save
      
      noiseColor *= 2.0;
      noiseColor -= 0.1;
      noiseColor *= 0.188;
      noiseColor += vec3(uv.xy, 0.0);
      
      float noiseColorLength = length(noiseColor);
      noiseColorLength = 0.770 - noiseColorLength;
      noiseColorLength *= 4.2;
      noiseColorLength = pow(noiseColorLength, 1.0);
      
      
      vec3 emissionColor = emission(vec3(0.961,0.592,0.078), noiseColorLength * 0.4);
      
      
      float fac = length(uv) - facture(color + 0.32);
      fac += 0.1;
      fac *= 3.0;
      
      color = mix(emissionColor, vec3(fac), fac + 1.2);
      
      //color = mix(color, vec3(0), fac); // black style


      // Output to screen
      fragColor = vec4(color, 1.0);
  }
`;

const shaderExamples = {
  starNest,
  vortex,
  blackhole,
};

const preset = ref("starNest");

const selectedExample = computed(() => shaderExamples[preset.value]);

function getName(key: string) {
  const names = {
    starNest: "Star Nest",
    vortex: "Vortex",
    blackhole: "Black Hole",
  };

  return names[key];
}
</script>
