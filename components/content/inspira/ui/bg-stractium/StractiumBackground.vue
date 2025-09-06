<template>
  <div :class="cn('absolute inset-0', props.class)">
    <ShaderToy
      :shader-code="shader"
      :hue="props.hue"
      :saturation="props.saturation"
      :brightness="props.brightness"
      :speed="props.speed"
      :mouse-sensitivity="props.mouseSensitivity"
      :damping="props.damping"
    />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  mouseSensitivity?: number;
  damping?: number;
}

const props = withDefaults(defineProps<Props>(), {
  hue: 0,
  saturation: 1,
  brightness: 1,
  speed: 1,
  mouseSensitivity: 0.5,
  damping: 1,
});

const shader = `
// ShaderToy URL: https://www.shadertoy.com/view/Mlf3R4

// Set this to change detail level. [1 - 10] is a good range.
const int NUM_SIN_REPS = 9;
const int MAX_MARCH_REPS = 250;
const float MARCH_DISTANCE_MULTIPLIER = 0.1;

float localTime = 0.0;

// some noise functions
float Hash(float f)
{
    return fract(cos(f)*7561.0);
}
float Hash2d(vec2 uv)
{
    float f = uv.x + uv.y * 521.0;	// repeats after this value
    float rand = fract(cos(f)*104729.0);
    return rand;
}
vec2 Hash2(vec2 v)
{
    return fract(cos(v*3.333)*vec2(100003.9, 37049.7));
}
float Hash3d(vec3 uv)
{
    float f = uv.x + uv.y * 37.0 + uv.z * 521.0;
    return fract(sin(f)*110003.9);
}

float mixS(float f0, float f1, float a)
{
    if (a < 0.5) return f0;
    return f1;
}

float mixC(float f0, float f1, float a)
{
    return mix(f1, f0, cos(a*3.1415926) *0.5+0.5);
}

float mixP(float f0, float f1, float a)
{
    return mix(f0, f1, a*a*(3.0-2.0*a));
}
vec2 mixP2(vec2 v0, vec2 v1, float a)
{
    return mix(v0, v1, a*a*(3.0-2.0*a));
}

float mixSS(float f0, float f1, float a)
{
    return mix(f0, f1, smoothstep(0.0, 1.0, a));
}

const vec2 zeroOne = vec2(0.0, 1.0);
float noise2dVec(vec2 uv)
{
    vec2 fr = fract(uv);
    vec2 fl = floor(uv);
    vec2 h0 = vec2(Hash2d(fl), Hash2d(fl + zeroOne));
    vec2 h1 = vec2(Hash2d(fl + zeroOne.yx), Hash2d(fl + zeroOne.yy));
    vec2 xMix = mixP2(h0, h1, fr.x);
    return mixC(xMix.x, xMix.y, fr.y);
}
float noise2d(vec2 uv)
{
    vec2 fr = fract(uv);
    vec2 fl = floor(uv);
    float h00 = Hash2d(fl);
    float h10 = Hash2d(fl + zeroOne.yx);
    float h01 = Hash2d(fl + zeroOne);
    float h11 = Hash2d(fl + zeroOne.yy);
    return mixP(mixP(h00, h10, fr.x), mixP(h01, h11, fr.x), fr.y);
}
float noise(vec3 uv)
{
    vec3 fr = fract(uv.xyz);
    vec3 fl = floor(uv.xyz);
    float h000 = Hash3d(fl);
    float h100 = Hash3d(fl + zeroOne.yxx);
    float h010 = Hash3d(fl + zeroOne.xyx);
    float h110 = Hash3d(fl + zeroOne.yyx);
    float h001 = Hash3d(fl + zeroOne.xxy);
    float h101 = Hash3d(fl + zeroOne.yxy);
    float h011 = Hash3d(fl + zeroOne.xyy);
    float h111 = Hash3d(fl + zeroOne.yyy);
    return mixP(
        mixP(mixP(h000, h100, fr.x),
             mixP(h010, h110, fr.x), fr.y),
        mixP(mixP(h001, h101, fr.x),
             mixP(h011, h111, fr.x), fr.y)
        , fr.z);
}

float PI=3.14159265;

vec3 saturate(vec3 a) { return clamp(a, 0.0, 1.0); }
vec2 saturate(vec2 a) { return clamp(a, 0.0, 1.0); }
float saturate(float a) { return clamp(a, 0.0, 1.0); }

vec3 RotateX(vec3 v, float rad)
{
  float cos = cos(rad);
  float sin = sin(rad);
  //if (RIGHT_HANDED_COORD)
  return vec3(v.x, cos * v.y + sin * v.z, -sin * v.y + cos * v.z);
  //else return new float3(x, cos * y - sin * z, sin * y + cos * z);
}
vec3 RotateY(vec3 v, float rad)
{
  float cos = cos(rad);
  float sin = sin(rad);
  //if (RIGHT_HANDED_COORD)
  return vec3(cos * v.x - sin * v.z, v.y, sin * v.x + cos * v.z);
  //else return new float3(cos * x + sin * z, y, -sin * x + cos * z);
}
vec3 RotateZ(vec3 v, float rad)
{
  float cos = cos(rad);
  float sin = sin(rad);
  //if (RIGHT_HANDED_COORD)
  return vec3(cos * v.x + sin * v.y, -sin * v.x + cos * v.y, v.z);
}


// This function basically is a procedural environment map that makes the sun
vec3 sunCol = vec3(258.0, 228.0, 170.0) / 3555.0;//unfortunately, i seem to have 2 different sun colors. :(
vec3 GetSunColorReflection(vec3 rayDir, vec3 sunDir)
{
	vec3 localRay = normalize(rayDir);
	float dist = 1.0 - (dot(localRay, sunDir) * 0.5 + 0.5);
	float sunIntensity = 0.015 / dist;
	sunIntensity = pow(sunIntensity, 0.3)*100.0;

    sunIntensity += exp(-dist*12.0)*300.0;
	sunIntensity = min(sunIntensity, 40000.0);
    //vec3 skyColor = mix(vec3(1.0, 0.95, 0.85), vec3(0.2,0.3,0.95), pow(saturate(rayDir.y), 0.7))*skyMultiplier*0.95;
	return sunCol * sunIntensity*0.0425;
}
vec3 GetSunColorSmall(vec3 rayDir, vec3 sunDir)
{
	vec3 localRay = normalize(rayDir);
	float dist = 1.0 - (dot(localRay, sunDir) * 0.5 + 0.5);
	float sunIntensity = 0.05 / dist;
    sunIntensity += exp(-dist*12.0)*300.0;
	sunIntensity = min(sunIntensity, 40000.0);
	return sunCol * sunIntensity*0.025;
}

vec4 cXX = vec4(0.0, 3.0, 0.0, 0.0);

vec3 camPos = vec3(0.0), camFacing;
vec3 camLookat=vec3(0,0.0,0);

float SinRep(float a)
{
    float h = 0.0;
    float mult = 1.0;
    for (int i = 0; i < NUM_SIN_REPS; i++)
    {
        h += (cos(a*mult)/(mult));
        mult *= 2.0;
    }
    return h;
}

vec2 DistanceToObject(vec3 p)
{
    float material = 0.0;
    float h = 0.0;
    p = RotateY(p, p.y*0.4 - cos(localTime)*0.4);
    h += SinRep(RotateY(p, p.z*3.14*0.25).x);
    h += SinRep(RotateZ(p, p.x*3.14*0.25).y);
    h += SinRep(RotateX(p, p.y*3.14*0.25).z);
    material = h;
    //h += SinRep(RotateX(p, p.y).z);
    //h += SinRep(RotateZ(p, sin(h)).y);
    //h += SinRep(RotateY(p, h*1.0).x);
    //h += SinRep(p.x+h)*0.5;
    //h += SinRep(p.y+h)*0.5;
    float final = (length(p)-4.0 - h*(0.25 + sin(localTime)*0.35));
    return vec2(final, material);
}

float distFromSphere;
float IntersectSphereAndRay(vec3 pos, float radius, vec3 posA, vec3 posB, out vec3 intersectA2, out vec3 intersectB2)
{
	// Use dot product along line to find closest point on line
	vec3 eyeVec2 = normalize(posB-posA);
	float dp = dot(eyeVec2, pos - posA);
	vec3 pointOnLine = eyeVec2 * dp + posA;
	// Clamp that point to line end points if outside
	//if ((dp - radius) < 0) pointOnLine = posA;
	//if ((dp + radius) > (posB-posA).Length()) pointOnLine = posB;
	// Distance formula from that point to sphere center, compare with radius.
	float distance = length(pointOnLine - pos);
	float ac = radius*radius - distance*distance;
	float rightLen = 0.0;
	if (ac >= 0.0) rightLen = sqrt(ac);
	intersectA2 = pointOnLine - eyeVec2 * rightLen;
	intersectB2 = pointOnLine + eyeVec2 * rightLen;
	distFromSphere = distance - radius;
	if (distance <= radius) return 1.0;
	return 0.0;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    localTime = iTime - 1.6;
	// ---------------- First, set up the camera rays for ray marching ----------------
	vec2 uv = fragCoord.xy/iResolution.xy * 2.0 - 1.0;

	// Camera up vector.
	vec3 camUp=vec3(0,1,0); // vuv

	// Camera lookat.
	camLookat=vec3(0,0.0,0);	// vrp

    // debugging camera
    float mx=iMouse.x/iResolution.x*PI*2.0-0.7 + localTime * 0.123;
	float my=-iMouse.y/iResolution.y*10.0 - sin(localTime * 0.31)*0.5;//*PI/2.01;
	camPos += vec3(cos(my)*cos(mx),sin(my),cos(my)*sin(mx))*(9.2); 	// prp


    // add randomness to camera for depth-of-field look close up.
    //camPos += vec3(Hash2d(uv)*0.91, Hash2d(uv+37.0), Hash2d(uv+47.0))*0.01;

	// Camera setup.
	vec3 camVec=normalize(camLookat - camPos);//vpn
	vec3 sideNorm=normalize(cross(camUp, camVec));	// u
	vec3 upNorm=cross(camVec, sideNorm);//v
	vec3 worldFacing=(camPos + camVec);//vcv
	vec3 worldPix = worldFacing + uv.x * sideNorm * (iResolution.x/iResolution.y) + uv.y * upNorm;//scrCoord
	vec3 relVec = normalize(worldPix - camPos);//scp

	// --------------------------------------------------------------------------------
	// I put a bounding sphere around the whole object. If the ray is outside
	// of the bounding sphere, I don't bother ray marching. It's just an optimization.
	vec3 iA, iB;
	float hit = IntersectSphereAndRay(vec3(0,0,0), 7.6, camPos, camPos+relVec, iA, iB);

	// --------------------------------------------------------------------------------
	vec2 distAndMat = vec2(0.05, 0.0);
	float t = 0.0;
	float inc = 0.02;
	float maxDepth = 110.0;
	vec3 pos = vec3(0,0,0);
    // start and end the camera ray at the sphere intersections.
    camPos = iA;
    maxDepth = distance(iA, iB);
	// ray marching time
	if (hit > 0.5)	// check if inside bounding sphere before wasting time ray marching.
	{
        for (int i = 0; i < MAX_MARCH_REPS; i++)	// This is the count of the max times the ray actually marches.
        {
            if ((t > maxDepth) || (abs(distAndMat.x) < 0.0075)) break;
            pos = camPos + relVec * t;
            // *******************************************************
            // This is _the_ function that defines the "distance field".
            // It's really what makes the scene geometry.
            // *******************************************************
            distAndMat = DistanceToObject(pos);
            // adjust by constant because deformations mess up distance function.
            t += distAndMat.x * MARCH_DISTANCE_MULTIPLIER;
        }
    }
    else
    {
		t = maxDepth + 1.0;
        distAndMat.x = 1.0;
    }
	// --------------------------------------------------------------------------------
	// Now that we have done our ray marching, let's put some color on this geometry.

	vec3 sunDir = normalize(vec3(0.93, 1.0, -1.5));
	vec3 finalColor = vec3(0.0);

	// If a ray actually hit the object, let's light it.
	if (abs(distAndMat.x) < 0.75)
    //if (t <= maxDepth)
	{
        // calculate the normal from the distance field. The distance field is a volume, so if you
        // sample the current point and neighboring points, you can use the difference to get
        // the normal.
        vec3 smallVec = vec3(0.005, 0, 0);
        vec3 normalU = vec3(distAndMat.x - DistanceToObject(pos - smallVec.xyy).x,
                           distAndMat.x - DistanceToObject(pos - smallVec.yxy).x,
                           distAndMat.x - DistanceToObject(pos - smallVec.yyx).x);

        vec3 normal = normalize(normalU);

        // calculate 2 ambient occlusion values. One for global stuff and one
        // for local stuff - so the green sphere light source can also have ambient.
        float ambientS = 1.0;
        ambientS *= saturate(DistanceToObject(pos + normal * 0.1).x*10.0);
        ambientS *= saturate(DistanceToObject(pos + normal * 0.2).x*5.0);
        ambientS *= saturate(DistanceToObject(pos + normal * 0.4).x*2.5);
        ambientS *= saturate(DistanceToObject(pos + normal * 0.8).x*1.25);
        float ambient = ambientS * saturate(DistanceToObject(pos + normal * 1.6).x*1.25*0.5);
        ambient *= saturate(DistanceToObject(pos + normal * 3.2).x*1.25*0.25);
        ambient *= saturate(DistanceToObject(pos + normal * 6.4).x*1.25*0.125);
        ambient = max(0.15, pow(ambient, 0.3));	// tone down ambient with a pow and min clamp it.
        ambient = saturate(ambient);

        // Trace a ray toward the sun for sun shadows
        float sunShadow = 1.0;
        float iter = 0.2;
		for (int i = 0; i < 10; i++)
        {
            float tempDist = DistanceToObject(pos + sunDir * iter).x;
	        sunShadow *= saturate(tempDist*10.0);
            if (tempDist <= 0.0) break;
            iter *= 1.5;	// constant is more reliable than distance-based
            //iter += max(0.2, tempDist)*1.2;
        }
        sunShadow = saturate(sunShadow);

        // calculate the reflection vector for highlights
        vec3 ref = reflect(relVec, normal);

        // ------ Calculate texture color of the rock ------
        // base texture can be swirled noise.
		vec3 rp = RotateY(pos, pos.y*0.4 - cos(localTime)*0.4);
        float n = noise(rp*4.0) + noise(rp*8.0) + noise(rp*16.0) + noise(rp*32.0);
        n = saturate(n*0.25 * 0.95 + 0.05);
        vec3 texColor = vec3(0.2,0.3,0.3)*n;

        // fade to reddish texture on outside
        texColor += vec3(0.99, 0.21, 0.213) * clamp(length(pos)-4.0, 0.0, 0.4);
        // give it green-blue texture that matches the shape using normal length
        texColor += vec3(1.0, 21.0, 26.0)*0.6 * saturate(length(normalU)-0.01);
        // Give it a reddish-rust color in the middle
        texColor -= vec3(0.0, 0.3, 0.5)*saturate(-distAndMat.y*(0.9+sin(localTime+0.5)*0.9));
        // make sure it's not too saturated so it looks realistic
        texColor = max(vec3(0.02),texColor);

        // ------ Calculate lighting color ------
        // Start with sun color, standard lighting equation, and shadow
        vec3 lightColor = sunCol * saturate(dot(sunDir, normal)) * sunShadow*14.0;
        // sky color, hemisphere light equation approximation, anbient occlusion
        lightColor += vec3(0.1,0.35,0.95) * (normal.y * 0.5 + 0.5) * ambient * 0.25;
        // ground color - another hemisphere light
        lightColor += vec3(1.0) * ((-normal.y) * 0.5 + 0.5) * ambient * 0.2;

        // finally, apply the light to the texture.
        finalColor = texColor * lightColor;

        // specular highlights - just a little
        vec3 refColor = GetSunColorReflection(ref, sunDir)*0.68;
        finalColor += refColor * sunCol * sunShadow * 9.0 * texColor.g;

        // fog that fades to sun color so that fog is brightest towards sun
        finalColor = mix(vec3(0.98, 0.981, 0.981) + min(vec3(0.25),GetSunColorSmall(relVec, sunDir))*2.0, finalColor, exp(-t*0.007));
        //finalColor = vec3(1.0, 21.0, 26.0) * saturate(length(normalU)-0.01);
	}
    else
    {
        // Our ray trace hit nothing, so draw sky.
        // fade the sky color, multiply sunset dimming
        finalColor = mix(vec3(1.0, 0.95, 0.85), vec3(0.2,0.5,0.95), pow(saturate(relVec.y), 0.7))*0.95;
        // add the sun
        finalColor += GetSunColorSmall(relVec, sunDir);// + vec3(0.1, 0.1, 0.1);
    }

    // vignette?
    finalColor *= vec3(1.0) * saturate(1.0 - length(uv/2.5));
    finalColor *= 1.95;

	// output the final color with sqrt for "gamma correction"
	fragColor = vec4(sqrt(clamp(finalColor, 0.0, 1.0)),1.0);
}
`;
</script>
