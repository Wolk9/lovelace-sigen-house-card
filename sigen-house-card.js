const SIGEN_COMPOSITE_SVG = `<g id="sigen-composite-assets">
<defs>
  <radialGradient id="hsBg" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#1e2438"/>
    <stop offset="100%" stop-color="#0d1018"/>
  </radialGradient>
  <linearGradient id="hsFrontWall" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#1c2030"/>
    <stop offset="100%" stop-color="#151822"/>
  </linearGradient>
  <linearGradient id="hsRightWall" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0f1218"/>
    <stop offset="100%" stop-color="#0a0d12"/>
  </linearGradient>
  <linearGradient id="hsLeftWall" x1="100%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#0f1218"/>
    <stop offset="100%" stop-color="#0a0d12"/>
  </linearGradient>
  <linearGradient id="hsRoofLeft" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#1a1e2c"/>
    <stop offset="100%" stop-color="#22263a"/>
  </linearGradient>
  <linearGradient id="hsRoofRight" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0d1018"/>
    <stop offset="100%" stop-color="#090c10"/>
  </linearGradient>
  <linearGradient id="hsGarageTop" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#161924"/>
    <stop offset="100%" stop-color="#10131c"/>
  </linearGradient>
  <radialGradient id="hsWindow" cx="50%" cy="50%" r="60%">
    <stop offset="0%" stop-color="#ffe880"/>
    <stop offset="50%" stop-color="#e89820"/>
    <stop offset="100%" stop-color="#7a3800"/>
  </radialGradient>
  <linearGradient id="hsSolarBg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#182840"/>
    <stop offset="100%" stop-color="#0e1c30"/>
  </linearGradient>
  <linearGradient id="hsEquipFront" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#e8eaf2"/>
    <stop offset="100%" stop-color="#cdd0dc"/>
  </linearGradient>
  <linearGradient id="hsEquipSide" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#b8bcc8"/>
    <stop offset="100%" stop-color="#a8acb8"/>
  </linearGradient>
  <linearGradient id="hsEquipTop" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#d8dce8"/>
    <stop offset="100%" stop-color="#c4c8d4"/>
  </linearGradient>
  <filter id="hsWinGlow" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="6" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="hsBoxGlow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <clipPath id="hsLeftRoofClip">
    <polygon points="420,140 490,125 438,151 368,166"/>
  </clipPath>
</defs>

<!-- Background -->
<rect width="800" height="420" fill="url(#hsBg)"/>

<!-- Ground plane (back) -->
<polygon points="263,264 315,238 560,360 508,386 263,264" fill="#0b0e14"/>
<!-- Ground in front of house -->
<polygon points="315,238 368,212 613,334 560,360 315,238" fill="#0d1018"/>
<!-- Ground edge -->
<polyline points="263,264 315,238 560,360 508,386" fill="none" stroke="#151820" stroke-width="1"/>

<!-- GARAGE LEFT FACE -->
<polygon points="315,238 263,264 263,164 315,138" fill="url(#hsLeftWall)"/>
<polyline points="315,238 263,264 263,164 315,138 315,238" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- GARAGE TOP (flat roof) -->
<polygon points="315,138 263,164 368,216 420,190" fill="url(#hsGarageTop)"/>
<polyline points="315,138 263,164 368,216 420,190 315,138" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- MAIN HOUSE RIGHT FACE -->
<polygon points="560,360 508,386 508,236 560,210" fill="url(#hsRightWall)"/>
<polyline points="560,360 508,386 508,236 560,210 560,360" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- COMBINED FRONT FACE (L-shape) -->
<polygon points="315,238 315,138 420,190 420,140 560,210 560,360 420,290 315,238" fill="url(#hsFrontWall)"/>
<polyline points="315,238 315,138 420,190 420,140 560,210 560,360 420,290 315,238" fill="none" stroke="#1a1e2e" stroke-width="0.8"/>

<!-- Garage/house junction step edge -->
<line x1="420" y1="140" x2="420" y2="190" stroke="#252a3a" stroke-width="2"/>

<!-- GARAGE DOOR (dark opening) -->
<polygon points="343,252 399,280 399,195 343,167" fill="#080a0d"/>
<polyline points="343,252 399,280 399,195 343,167 343,252" fill="none" stroke="#1e2432" stroke-width="1"/>
<!-- Garage door cross lines -->
<line x1="370" y1="267" x2="370" y2="178" stroke="#1a1e28" stroke-width="0.8"/>
<line x1="343" y1="224" x2="399" y2="253" stroke="#1a1e28" stroke-width="0.8"/>

<!-- MAIN HOUSE WINDOWS -->
<!-- Big window - glow effect -->
<polygon points="480,305 543,336 543,201 480,170" fill="#3a2000" opacity="0.6" filter="url(#hsWinGlow)"/>
<!-- Big window fill -->
<polygon points="480,305 543,336 543,201 480,170" fill="url(#hsWindow)" opacity="0.82"/>
<!-- Window pane grid - horizontal bars -->
<line x1="480" y1="256" x2="543" y2="287" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<line x1="480" y1="215" x2="543" y2="246" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<!-- Window pane grid - vertical bars -->
<line x1="496" y1="308" x2="496" y2="173" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<line x1="512" y1="317" x2="512" y2="182" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<line x1="528" y1="326" x2="528" y2="191" stroke="#4a2800" stroke-width="1.2" opacity="0.65"/>
<!-- Window frame -->
<polygon points="480,305 543,336 543,201 480,170" fill="none" stroke="#3a2000" stroke-width="2.5"/>

<!-- Upper left window -->
<polygon points="434,202 469,220 469,180 434,162" fill="url(#hsWindow)" opacity="0.65"/>
<polygon points="434,202 469,220 469,180 434,162" fill="none" stroke="#3a2000" stroke-width="1.5"/>
<line x1="451" y1="211" x2="451" y2="171" stroke="#4a2800" stroke-width="1" opacity="0.5"/>

<!-- ROOF -->
<!-- Left slope - solar panel side -->
<polygon points="420,140 490,125 438,151 368,166" fill="url(#hsRoofLeft)"/>
<!-- Solar panel base layer -->
<polygon points="420,140 490,125 438,151 368,166" fill="url(#hsSolarBg)" opacity="0.85" clip-path="url(#hsLeftRoofClip)"/>
<!-- Solar panel grid - row lines (along depth, at x=0.35/0.75/1.15/1.55) -->
<line x1="429" y1="139" x2="386" y2="161" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="443" y1="136" x2="400" y2="158" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="457" y1="133" x2="414" y2="155" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="471" y1="130" x2="428" y2="152" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<!-- Solar panel grid - column lines (along width, at y=0.3/0.7/1.1) -->
<line x1="413" y1="145" x2="475" y2="131" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="397" y1="152" x2="459" y2="138" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<line x1="381" y1="160" x2="443" y2="146" stroke="#5090c0" stroke-width="0.9" opacity="0.7" clip-path="url(#hsLeftRoofClip)"/>
<!-- Left slope border -->
<polyline points="420,140 490,125 438,151 368,166 420,140" fill="none" stroke="#1a2030" stroke-width="1"/>

<!-- Right slope (shadow side) -->
<polygon points="560,210 490,125 438,151 508,236" fill="url(#hsRoofRight)"/>
<!-- Subtle tile lines on right slope -->
<line x1="548" y1="160" x2="494" y2="214" stroke="#090c10" stroke-width="1.5" opacity="0.5"/>
<line x1="527" y1="143" x2="473" y2="197" stroke="#090c10" stroke-width="1.5" opacity="0.5"/>
<polyline points="560,210 490,125 438,151 508,236 560,210" fill="none" stroke="#1a2030" stroke-width="1"/>

<!-- Front gable triangle -->
<polygon points="420,140 490,125 560,210" fill="#131620"/>
<polyline points="420,140 490,125 560,210" fill="none" stroke="#1a2030" stroke-width="1"/>

<!-- Ridge cap -->
<line x1="490" y1="125" x2="438" y2="151" stroke="#20243a" stroke-width="3"/>

<!-- Roof eave lines -->
<line x1="420" y1="140" x2="560" y2="210" stroke="#20243a" stroke-width="2"/>
<line x1="420" y1="140" x2="368" y2="166" stroke="#20243a" stroke-width="2"/>

<!-- BATTERY BOX (left equipment box) -->
<!-- Front face -->
<polygon points="487,281 525,301 525,231 487,211" fill="url(#hsEquipFront)"/>
<!-- Right face -->
<polygon points="525,301 543,292 543,222 525,231" fill="url(#hsEquipSide)"/>
<!-- Top face -->
<polygon points="487,211 525,231 543,222 504,203" fill="url(#hsEquipTop)"/>
<!-- Indicator LED -->
<circle cx="507" cy="264" r="4" fill="#00d4a8" filter="url(#hsBoxGlow)"/>
<circle cx="507" cy="264" r="2.5" fill="#00ffcc"/>
<!-- Box edges -->
<polyline points="487,281 525,301 543,292 543,222 504,203 487,211 487,281" fill="none" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="525" y1="231" x2="525" y2="301" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="525" y1="231" x2="543" y2="222" stroke="#9aa0b0" stroke-width="0.8"/>

<!-- GATEWAY BOX (right equipment box) -->
<!-- Front face -->
<polygon points="543,309 567,322 567,267 543,254" fill="url(#hsEquipFront)"/>
<!-- Right face -->
<polygon points="567,322 581,315 581,260 567,267" fill="url(#hsEquipSide)"/>
<!-- Top face -->
<polygon points="543,254 567,267 581,260 557,247" fill="url(#hsEquipTop)"/>
<!-- Box edges -->
<polyline points="543,309 567,322 581,315 581,260 557,247 543,254 543,309" fill="none" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="567" y1="267" x2="567" y2="322" stroke="#9aa0b0" stroke-width="0.8"/>
<line x1="567" y1="267" x2="581" y2="260" stroke="#9aa0b0" stroke-width="0.8"/>

<!-- Cable: battery to gateway -->
<path d="M525,296 C533,300 537,305 543,309" fill="none" stroke="#707888" stroke-width="2.5" stroke-linecap="round"/>

<!-- Cable: gateway to house wall -->
<path d="M560,290 C561,290 561,292 561,293" fill="none" stroke="#707888" stroke-width="2" stroke-linecap="round"/>

<!-- WEATHER ICON (top left) -->
<g transform="translate(28,18)">
  <circle cx="28" cy="30" r="13" fill="#f0c830" opacity="0.75"/>
  <line x1="28" y1="13" x2="28" y2="9" stroke="#f0c830" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
  <line x1="40" y1="19" x2="43" y2="16" stroke="#f0c830" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
  <line x1="44" y1="30" x2="48" y2="30" stroke="#f0c830" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
  <ellipse cx="20" cy="34" rx="17" ry="10" fill="#7a8faa"/>
  <ellipse cx="34" cy="31" rx="12" ry="9" fill="#7a8faa"/>
  <ellipse cx="26" cy="27" rx="10" ry="8" fill="#9ab0c8"/>
  <rect x="4" y="33" width="42" height="9" rx="5" fill="#7a8faa"/>
</g>

<g id="house" data-device="house" transform="translate(205.000,80.000) scale(0.287500) translate(-0.000,-0.000)">

  <defs id="house_defs1" />
  <g id="house_layer1">
    <path style="fill:#b3bdd2;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="M 22.09067,438.49979 458.3814,661.61556 795.26411,472.74033 310.37391,308.16484 Z" id="house_path1" />
    <path style="fill:#939dac;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="M 459.20637,600.24748 701.85028,474.19933 700.04655,256.42851 585.76407,122.55902 458.74272,357.82465 Z" id="house_path2" />
    <path style="fill:#b7c4c8;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="M 459.02127,600.1121 185.26968,465.65433 V 259.56537 l 273.75159,98.6539 z" id="house_path3" />
    <path style="fill:#939dac;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="m 189.81954,464.84952 -30.64256,17.88644 2.03921,-171.14165 c 0,0 14.52478,-56.16895 28.77093,-58.93904 z" id="house_path4" />
    <path style="fill:#b7c4c8;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="M 158.50667,482.2938 51.215579,428.66258 50.126041,261.46827 159.86143,308.88479 Z" id="house_path5" />
    <path style="fill:#dbdee3;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="M 586.61015,120.57345 447.07009,377.97744 185.60183,275.01585 146.31385,329.20616 25.740399,276.3706 205.9232,47.416525 310.23955,74.511682 337.3347,39.287978 Z" id="house_path6" />
    <path style="fill:#b7c4c8;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="m 195.08513,250.6302 -0.39573,-65.4241 49.16701,-30.7637 41.9975,54.19031 v 82.64023 z" id="house_path7" />
    <path style="fill:#93a7ac;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="M 286.53835,290.83078 351.5526,183.45562 281.78963,207.27795 Z" id="house_path8" />
    <path style="fill:#6f8a91;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="m 241.1469,151.73288 111.09014,-37.93322 v 69.09265 l -73.15692,24.38564 z" id="house_path9" />
    <path style="fill:#6f8a91;stroke:#91a7a8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers fill stroke" d="m 189.43795,189.61966 52.27226,-37.59805 0.73085,2.13207 -47.07934,34.74923 z" id="house_path10" />
  </g>

</g>
<g id="sigenstor" data-device="battery" transform="translate(549.043,120.000) scale(0.107422) translate(-0.000,-0.000)">
<path transform="translate(416,1094)" d="m0 0h32l508 6 25 1 12 12 6 7 4 1 1 293v579l-4 4-4 2-23-3-20-3h-17l-20 6h-3v26l-13 3-9 1h-42l-28-4-310-49-252-40-6-2-4-11-2-20-1-21-1-663 1-51 4-24 5-15 6-11 9-10 9-6 10-4 5-1 23-1zm566 891-1 2 4-1z" fill="#F8F8F8" />
<path transform="translate(996,1417)" d="m0 0h6l1 15 1 3v558l-4 4-4 2-23-3-20-3h-17l-20 6h-3v26l-13 3-9 1h-42v-1l41-1 18-3 2-1v-5h1l1-18h-2v-23h3v-2l-15 3h-15v-1l24-3 3-1-1-2h3v-41l-1 35-2 1-1-29 1-20 3-2v-19l1-23h-2v37l-2 1v-48l3-2v-42l-1 38h-2v-49l3-2 1-42h-2v35l-2 1v-46l3-3v-40l-1 35-2 3v-46l6-2-14 2-15 1h-27v-1l36-2 14-2 1-2h2v-39l-1 14v16l-2 1v-45l3-3v-40l-1 19v14l-2 3v-48l3-2v-36l-1 23v8l-2 2v-50l3-1v-34l-1 7v17l-2 3-1-10 1-38 3-1v-39l-1 32-2 3v-44l10-2zm-14 568-1 2 4-1z" fill="#B8B8B8" />
<path transform="translate(977,1123)" d="m0 0h24l1 154h1v136l-3 3-68 9-27 3-22 1h-25v-1l42-2 9-1 3-1v-37h-2v8h-1l-1-7v-5l1-1 1-13 1-1v-47l-1 6-2-3v-6l1-2v-12l1-2h2l-1-47-1 18-2-4v-18l1-5v-7l2-3 1-47h-2v10h-1l-1-14 1-4 1-10 1-1v-36l-1 8h-1l-1-12 2-4 4-1z" fill="#B8B8B8" />
<path transform="translate(996,1417)" d="m0 0h6l1 15 1 3v246l-2 2-26 5-66 14-24 2h-27v-1l36-2 14-2 1-2h2v-39l-1 14v16l-2 1v-45l3-3v-40l-1 19v14l-2 3v-48l3-2v-36l-1 23v8l-2 2v-50l3-1v-34l-1 7v17l-2 3-1-10 1-38 3-1v-39l-1 32-2 3v-44l10-2z" fill="#B8B8B8" />
<path transform="translate(252,1170)" d="m0 0h1l1 719-1 42-2-1-3-13-2-35-1-663 1-48z" fill="#B7B7B7" />
<path transform="translate(679,1224)" d="m0 0 4 1 9-1 10 3 8 6 6 9 2 9h2l2 11h5v-7h1v16l-4 13-6 10-8 8-13 5-4 2h-7l-10-3-10-6-8-9-6-11v-5l2 3 4 8 10 11 4-1 1-7-1-2-2 2-1-4 1-3-3-1-6-13-1-6v-13l4-10 6-9z" fill="#9E9D9F" />
<path transform="translate(998,1947)" d="m0 0h2v2l-5 2-3 18-6 17h-4l3 2-3 8h5v1l-14-1-20-3h-17l-20 6h-3v26l-13 3-9 1h-42v-1l41-1 18-3 2-1v-5h1l1-18h-2v-23h3v-2l-2-1 8-3 73-22z" fill="#9D9C9E" />
<path transform="translate(680,1209)" d="m0 0h14l9 4 6 4 5 5 6 7 5 11 3 11-1 11-3 1-2-1-2-7v-4h-2l-4-11-7-9-10-5-9-1-8 1h-3l-7 5-6 10-3 8v13l2 9 5 10 2 1v6l2-2 2 3-1 7-2 2-4-1-7-7-6-9-2-4-2-3-2-12v-10l3-14 7-14 4-5 10-7z" fill="#B8B8B9" />
<path transform="translate(252,1170)" d="m0 0h1v220l-7-2-1-169 1-48z" fill="#B6B6B6" />
<path transform="translate(246,1637)" d="m0 0h1l1 71v-18l4 1 1 2 1 196-1 42-2-1-3-13-2-35z" fill="#9E9D9E" />
<path transform="translate(246,1390)" d="m0 0h1l1 244 5 2v57l-3-1v-2h-2l1 21-1 126h-1l-1-200z" fill="#ADADAE" />
<path transform="translate(1e3 1947)" d="m0 0h1v46l-4 4-4 2-9-1v-2h-5l1-8 1-2h2l1-7 4-10 3-18 3-2z" fill="#B5B5B5" />
<path transform="translate(663,1226)" d="m0 0 3 3-3 9-5 29-4 4-3-4v-20l5-13z" fill="#F9F9F9" />
<path transform="translate(997,1949)" d="m0 0 3 1-4 1v46h-9l-5-1 1-8 1-2h2l1-7 4-10 3-18z" fill="#C5C5C5" />
<path transform="translate(710,1286)" d="m0 0 2 3 1 7 2 1-7 6-11 4-4 2h-7v-1l5-1 1-5 3-8 12-5z" fill="#B8B8B8" />
<path transform="translate(709,1222)" d="m0 0 7 6 6 9 3 7 1 5v13l-2 1-2-1-6-21-7-11z" fill="#F9F9F9" />
<path transform="translate(910,1977)" d="m0 0h3v48l-13 3-9 1h-42v-1l41-1 18-3 2-1v-5h1l1-18h-2z" fill="#B2B2B3" />
<path transform="translate(993,1794)" d="m0 0 3 1-1 39-1 4-3-1v-40z" fill="#9D9C9E" />
<path transform="translate(961,1721)" d="m0 0 3 1-1 38-1 5h-3v-41z" fill="#9D9C9E" />
<path transform="translate(993,1688)" d="m0 0 3 1-1 39-1 3h-3v-40z" fill="#9D9C9E" />
<path transform="translate(993,1527)" d="m0 0 3 1-1 38-1 5h-3v-41z" fill="#9D9C9E" />
<path transform="translate(993,1741)" d="m0 0 3 1-1 38-2 5-2-1v-40z" fill="#9D9C9E" />
<path transform="translate(993,1474)" d="m0 0 3 1-1 38-2 5-2-1v-40z" fill="#9D9C9E" />
<path transform="translate(993,1580)" d="m0 0 3 1-1 38-2 5h-2v-41z" fill="#9D9C9E" />
<path transform="translate(961,1559)" d="m0 0 3 1-1 35-1 8h-3v-42z" fill="#9D9C9E" />
<path transform="translate(992,1901)" d="m0 0h4l-1 38-2 5-2-1v-39z" fill="#9D9C9E" />
<path transform="translate(992,1634)" d="m0 0 4 1-1 37-1 5-3-1v-40z" fill="#9D9C9E" />
<path transform="translate(961,1829)" d="m0 0 3 1-1 35-1 7-3 1v-41z" fill="#9D9C9E" />
<path transform="translate(993,1847)" d="m0 0 3 1-1 38-2 5-2-1v-40z" fill="#9D9C9E" />
<path transform="translate(960,1776)" d="m0 0 4 1-1 35-1 7h-3v-41z" fill="#9D9C9E" />
<path transform="translate(954,1533)" d="m0 0h3l-1 44-3 1-1-2v-39z" fill="#9D9C9E" />
<path transform="translate(974,1557)" d="m0 0h2l1 4-1 30-1 9-3 1v-42z" fill="#9D9C9E" />
<path transform="translate(960,1506)" d="m0 0 4 1-1 31-1 11-3 1v-42z" fill="#9D9C9E" />
<path transform="translate(973,1826)" d="m0 0 4 1-1 33-1 9h-3v-41z" fill="#9D9C9E" />
<path transform="translate(960,1452)" d="m0 0 4 1-1 30-1 12-3 1v-42z" fill="#9D9C9E" />
<path transform="translate(974,1772)" d="m0 0h2l1 4-1 29-1 10-3 1v-41z" fill="#9D9C9E" />
<path transform="translate(973,1504)" d="m0 0 4 1-1 31-1 11h-3v-41z" fill="#9D9C9E" />
<path transform="translate(973,1719)" d="m0 0 4 1-1 31-1 11h-3v-41z" fill="#9D9C9E" />
<path transform="translate(1e3 1413)" d="m0 0 2 1v21l-2-4v-14l-75 10-16 1 4-2 79-10 8-1z" fill="#F9F9F9" />
<path transform="translate(986,1876)" d="m0 0h3l1 3-1 29-1 10-3 1v-41z" fill="#9D9C9E" />
<path transform="translate(993,1421)" d="m0 0 3 1-1 28-1 14-3-1v-39z" fill="#9D9C9E" />
<path transform="translate(987,1608)" d="m0 0 2 1v29l-1 11-1 3h-2v-42z" fill="#9D9C9E" />
<path transform="translate(987,1822)" d="m0 0h2l1 3-1 26-1 12-1 2h-2v-41z" fill="#9D9C9E" />
<path transform="translate(986,1716)" d="m0 0 4 1-1 27-1 12-1 3h-2v-42z" fill="#9D9C9E" />
<path transform="translate(954,1858)" d="m0 0h3v25l-1 17-1 2h-2v-43z" fill="#9D9C9E" />
<path transform="translate(987,1769)" d="m0 0h2l1 3-2 38-1 3h-2v-42z" fill="#9D9C9E" />
<path transform="translate(973,1450)" d="m0 0h3l1 4-2 39-3 1v-42z" fill="#9D9C9E" />
<path transform="translate(954,1750)" d="m0 0 3 1v22l-1 18-1 3h-2v-43z" fill="#9D9C9E" />
<path transform="translate(953,1248)" d="m0 0h3l-1 48h-3v-47z" fill="#9D9C9E" />
<path transform="translate(966,1247)" d="m0 0h3l-1 47-3 1v-47z" fill="#9D9C9E" />
<path transform="translate(955,1696)" d="m0 0 2 1v20l-1 20-1 3h-2v-42z" fill="#9D9C9E" />
<path transform="translate(953,1313)" d="m0 0h3l-1 45-1 3h-2v-47z" fill="#9D9C9E" />
<path transform="translate(986,1502)" d="m0 0h3v21l-1 21-3 1v-42z" fill="#9D9C9E" />
<path transform="translate(954,1426)" d="m0 0 3 1v16l-1 24-1 3h-2v-43z" fill="#9D9C9E" />
<path transform="translate(967,1311)" d="m0 0 2 1-1 44-2 4-1-1v-46z" fill="#9D9C9E" />
<path transform="translate(953,1183)" d="m0 0h3l-1 44-1 3h-2v-46z" fill="#9D9C9E" />
<path transform="translate(954,1803)" d="m0 0h3l-1 42-2 4h-1v-45z" fill="#9D9C9E" />
<path transform="translate(967,1694)" d="m0 0h3v19l-1 21-1 3h-2v-42z" fill="#9D9C9E" />
<path transform="translate(986,1555)" d="m0 0h3v17l-1 24-1 2h-2v-42z" fill="#9D9C9E" />
<path transform="translate(954,1480)" d="m0 0h3v15l-1 26-1 3h-2v-43z" fill="#9D9C9E" />
<path transform="translate(979,1246)" d="m0 0h3l-1 43-1 5h-2v-47z" fill="#9D9C9E" />
<path transform="translate(966,1182)" d="m0 0h3l-1 44-2 4-1-1v-45z" fill="#9D9C9E" />
<path transform="translate(979,1181)" d="m0 0 3 1-1 43-1 4h-2v-47z" fill="#9D9C9E" />
<path transform="translate(967,1854)" d="m0 0h3v14l-1 27-1 3h-2v-43z" fill="#9D9C9E" />
<path transform="translate(955,1587)" d="m0 0 2 1v14l-1 26-1 4h-2v-43z" fill="#9D9C9E" />
<path transform="translate(980,1310)" d="m0 0 2 1-1 40-1 8h-2v-47z" fill="#9D9C9E" />
<path transform="translate(968,1800)" d="m0 0 2 1-1 40-1 4h-2v-43z" fill="#9D9C9E" />
<path transform="translate(967,1908)" d="m0 0h3l-1 40-2 4h-1v-43z" fill="#9D9C9E" />
<path transform="translate(967,1747)" d="m0 0 3 1-1 40-1 3h-2v-43z" fill="#9D9C9E" />
<path transform="translate(967,1531)" d="m0 0 3 1-1 40-1 4h-2v-44z" fill="#9D9C9E" />
<path transform="translate(980,1797)" d="m0 0h3l-1 40-2 5h-1v-44z" fill="#9D9C9E" />
<path transform="translate(967,1639)" d="m0 0h3l-1 40-2 4h-1v-43z" fill="#9D9C9E" />
<path transform="translate(967,1585)" d="m0 0h3l-1 41-1 3h-2v-43z" fill="#9D9C9E" />
<path transform="translate(967,1478)" d="m0 0 3 1-1 39-1 4h-2v-43z" fill="#9D9C9E" />
<path transform="translate(987,1448)" d="m0 0 3 3-1 8-1 30-1 3h-2v-42z" fill="#9D9C9E" />
<path transform="translate(980,1691)" d="m0 0h3l-1 39-1 4h-2v-42z" fill="#9D9C9E" />
<path transform="translate(980,1636)" d="m0 0 3 1-1 39-2 4h-1l-1-38z" fill="#9D9C9E" />
<path transform="translate(980,1744)" d="m0 0 3 1-1 38-1 5h-2v-43z" fill="#9D9C9E" />
<path transform="translate(980,1529)" d="m0 0 3 1-1 39-2 5h-1v-44z" fill="#9D9C9E" />
<path transform="translate(968,1424)" d="m0 0 2 1-1 39-1 4h-2v-42z" fill="#9D9C9E" />
<path transform="translate(980,1904)" d="m0 0 3 1-1 37-2 6h-1v-43z" fill="#9D9C9E" />
<path transform="translate(980,1476)" d="m0 0 3 1-1 38-1 5h-2v-43z" fill="#9D9C9E" />
<path transform="translate(980,1423)" d="m0 0 3 1-1 34-1 8h-2l-1-23v-15z" fill="#9D9C9E" />
<path transform="translate(959,1154)" d="m0 0 4 1-2 45h-2l-1-28v-16z" fill="#9D9C9E" />
<path transform="translate(953,1378)" d="m0 0h3l-1 38h-3v-37z" fill="#9D9C9E" />
<path transform="translate(985,1153)" d="m0 0h3l-1 41-1 5h-1l-1-13v-31z" fill="#9D9C9E" />
<path transform="translate(961,1883)" d="m0 0 3 1-1 30-3 1-1-2v-27z" fill="#9D9C9E" />
<path transform="translate(986,1215)" d="m0 0 2 1-1 39-1 6h-1l-1-12v-32z" fill="#9D9C9E" />
<path transform="translate(961,1613)" d="m0 0h2l1 4-1 25-1 3-3-1v-28z" fill="#9D9C9E" />
<path transform="translate(519,1257)" d="m0 0 12 1 1 1-1 7h-13l-1-1v-7z" fill="#F9F9F9" />
<path transform="translate(406,1253)" d="m0 0h12l1 1v6l-2 2h-9l-3-2v-6z" fill="#F9F9F9" />
<path transform="translate(979,1127)" d="m0 0h3l-1 37-3 1v-37z" fill="#9D9C9E" />
<path transform="translate(966,1127)" d="m0 0h3l-1 35-1 3h-2v-36z" fill="#9D9C9E" />
<path transform="translate(953,1128)" d="m0 0h3l-1 33-2 4-1-1v-35z" fill="#9D9C9E" />
<path transform="translate(959,1280)" d="m0 0 4 1-1 11-1 34h-2l-1-43z" fill="#9D9C9E" />
<path transform="translate(985,1278)" d="m0 0h3l-1 38-1 7h-1l-1-20v-23z" fill="#9D9C9E" />
<path transform="translate(959,1217)" d="m0 0 4 1-1 9-1 36h-2l-1-44z" fill="#9D9C9E" />
<path transform="translate(974,1891)" d="m0 0 2 3v20l-1 8-3 1v-29z" fill="#9D9C9E" />
<path transform="translate(959,1343)" d="m0 0 4 1-1 9-1 36h-2l-1-43z" fill="#9D9C9E" />
<path transform="translate(973,1623)" d="m0 0h2l1 4v18l-1 9h-3v-29z" fill="#9D9C9E" />
<path transform="translate(979,1375)" d="m0 0h3l-1 28-1 10h-2v-37z" fill="#9D9C9E" />
<path transform="translate(949,1159)" d="m0 0h1l1 25v16l-1 3h-3l1-41z" fill="#F9F9F9" />
<path transform="translate(377,1250)" d="m0 0h15v2h-15l1 4 12 1 2 2v6l-1 1h-15v-2l14-1v-4h-13l-2-5z" fill="#A1A0A2" />
<path transform="translate(973,1153)" d="m0 0h2l1 3-1 7-1 31-1 5h-1l-1-43z" fill="#9D9C9E" />
<path transform="translate(949,1349)" d="m0 0h1l1 14v27l-2 3-3-1 1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(985,1340)" d="m0 0h3l-1 32-1 14h-1l-1-25v-19z" fill="#9D9C9E" />
<path transform="translate(493,1254)" d="m0 0 16 1 1 2v6l-1 1h-7v3l8 2v2l-9-2-1-5 1-2h7v-5h-13l-1 13h-1z" fill="#A7A6A8" />
<path transform="translate(992,1181)" d="m0 0 3 1-1 12-1 30-2 1v-43z" fill="#9D9C9E" />
<path transform="translate(972,1279)" d="m0 0h3l-1 39-1 7h-1l-1-43z" fill="#9D9C9E" />
<path transform="translate(992,1245)" d="m0 0 3 1-1 10-1 32-2 1v-43z" fill="#9D9C9E" />
<path transform="translate(949,1222)" d="m0 0h1l1 12v30l-1 2h-3l1-40z" fill="#F9F9F9" />
<path transform="translate(992,1126)" d="m0 0 3 1-2 36h-2v-36z" fill="#9D9C9E" />
<path transform="translate(943,1318)" d="m0 0h1v46h-4l1-3 1-41z" fill="#F9F9F9" />
<path transform="translate(949,1286)" d="m0 0h1l1 41-3 3-1-4 1-39z" fill="#F9F9F9" />
<path transform="translate(972,1216)" d="m0 0h3l1 3-1 4-1 33-1 6h-1l-1-43z" fill="#9D9C9E" />
<path transform="translate(931,1254)" d="m0 0h1l1 43-1 3h-3l1-42z" fill="#F9F9F9" />
<path transform="translate(943,1253)" d="m0 0h1v45l-3 2v-4l1-41z" fill="#F9F9F9" />
<path transform="translate(943,1188)" d="m0 0h1v45h-4l1-3 1-41z" fill="#F9F9F9" />
<path transform="translate(405,1251)" d="m0 0h14l2 1v8l-3 4h-9l-5-2-1-2v-6zm1 2-1 1v6l3 2h9l2-2v-6l-1-1z" fill="#A6A5A6" />
<path transform="translate(931,1319)" d="m0 0h1l1 34-1 13h-3l1-43z" fill="#F9F9F9" />
<path transform="translate(926,1350)" d="m0 0h1v44h-4l1-2 1-41z" fill="#F9F9F9" />
<path transform="translate(926,1287)" d="m0 0h1v44l-3 1 1-44z" fill="#F9F9F9" />
<path transform="translate(937,1286)" d="m0 0h1v44l-3 1 1-44z" fill="#F9F9F9" />
<path transform="translate(926,1223)" d="m0 0h1v44l-3 1 1-44z" fill="#F9F9F9" />
<path transform="translate(931,1188)" d="m0 0h1l1 44-2 3h-2l1-42z" fill="#F9F9F9" />
<path transform="translate(937,1349)" d="m0 0h1v44h-4l1-2 1-40z" fill="#F9F9F9" />
<path transform="translate(937,1159)" d="m0 0h1v44l-3 1 1-43z" fill="#F9F9F9" />
<path transform="translate(926,1159)" d="m0 0h1v44l-3 1 1-44z" fill="#F9F9F9" />
<path transform="translate(944,1810)" d="m0 0h1v42l-3 2v-4l1-39z" fill="#F9F9F9" />
<path transform="translate(938,1513)" d="m0 0h1v42l-4 1 1-4 1-38z" fill="#F9F9F9" />
<path transform="translate(992,1309)" d="m0 0 3 1-1 9-1 29-2 1v-39z" fill="#9D9C9E" />
<path transform="translate(937,1222)" d="m0 0h1v44l-3 1 1-43z" fill="#F9F9F9" />
<path transform="translate(938,1785)" d="m0 0h1v42h-4l1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(944,1539)" d="m0 0h1v42l-4 1 1-3 1-39z" fill="#F9F9F9" />
<path transform="translate(518,1255)" d="m0 0 15 1v10l-2 2h-13l-3-4 1-7zm1 2-2 1v7l1 1h13l1-7-1-1z" fill="#A1A0A2" />
<path transform="translate(937,1894)" d="m0 0h2v41l-4 1 1-3z" fill="#F9F9F9" />
<path transform="translate(944,1864)" d="m0 0h1v42l-4 1 1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(980,1583)" d="m0 0h3l-1 27h-3l-1-22z" fill="#9D9C9E" />
<path transform="translate(973,1341)" d="m0 0 3 3-1 3-1 29-1 11h-1l-1-43z" fill="#9D9C9E" />
<path transform="translate(944,1919)" d="m0 0h1v41l-4 1 1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(932,1813)" d="m0 0h1v43l-3 1 1-41z" fill="#F9F9F9" />
<path transform="translate(938,1731)" d="m0 0h1v41l-4 1 1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(944,1703)" d="m0 0h1v41l-4 1 1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(950,1620)" d="m0 0h1v41h-4l1-3 1-37z" fill="#F9F9F9" />
<path transform="translate(943,1594)" d="m0 0h2v40l-3 2v-4z" fill="#F9F9F9" />
<path transform="translate(937,1568)" d="m0 0h2v40l-1 2-3-1 1-3z" fill="#F9F9F9" />
<path transform="translate(926,1515)" d="m0 0 2 1v40l-1 2-3-1 1-3z" fill="#F9F9F9" />
<path transform="translate(944,1485)" d="m0 0h1v41l-3 2v-4l1-37z" fill="#F9F9F9" />
<path transform="translate(943,1432)" d="m0 0h2v40l-3 2v-4z" fill="#F9F9F9" />
<path transform="translate(448,1253)" d="m0 0 4 1 10 11 1-11 2-1v16l-4-1-10-11-2-1v13h-1z" fill="#A5A5A6" />
<path transform="translate(980,1851)" d="m0 0h3l-1 27-3-1v-25z" fill="#9D9C9E" />
<path transform="translate(937,1840)" d="m0 0h2v40l-3 2-1-2 1-2z" fill="#F9F9F9" />
<path transform="translate(926,1788)" d="m0 0 2 1v40l-3 2-1-2 1-2z" fill="#F9F9F9" />
<path transform="translate(944,1757)" d="m0 0h1v40l-1 2h-3l1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(926,1733)" d="m0 0 2 2v39l-1 2h-2z" fill="#F9F9F9" />
<path transform="translate(944,1647)" d="m0 0h1v41l-3 2-1-2 1-2 1-37z" fill="#F9F9F9" />
<path transform="translate(932,1541)" d="m0 0h1v42l-3 1 1-41z" fill="#F9F9F9" />
<path transform="translate(938,1459)" d="m0 0h1v41l-4 1 1-3 1-38z" fill="#F9F9F9" />
<path transform="translate(926,1897)" d="m0 0 2 3v38l-4 1 1-4z" fill="#F9F9F9" />
<path transform="translate(950,1836)" d="m0 0h1v41l-3 2v-4l1-35z" fill="#F9F9F9" />
<path transform="translate(950,1783)" d="m0 0h1v41h-4l1-3 1-35z" fill="#F9F9F9" />
<path transform="translate(937,1623)" d="m0 0h2v40l-4 1 1-3z" fill="#F9F9F9" />
<path transform="translate(932,1596)" d="m0 0h1v41l-3 1 1-41z" fill="#F9F9F9" />
<path transform="translate(950,1566)" d="m0 0h1v40l-3 2-1-2 1-2 1-37z" fill="#F9F9F9" />
<path transform="translate(950,1458)" d="m0 0h1v41l-3 1-1-2 1-2 1-36z" fill="#F9F9F9" />
<path transform="translate(932,1922)" d="m0 0h1v42l-3 1 1-40z" fill="#F9F9F9" />
<path transform="translate(926,1842)" d="m0 0 2 3v38l-3 2-1-2 1-2z" fill="#F9F9F9" />
<path transform="translate(932,1760)" d="m0 0h1v41l-3 1 1-40z" fill="#F9F9F9" />
<path transform="translate(950,1729)" d="m0 0h1v40l-3 2-1-2 1-2 1-36z" fill="#F9F9F9" />
<path transform="translate(950,1512)" d="m0 0h1v41h-4l1-2 1-36z" fill="#F9F9F9" />
<path transform="translate(932,1488)" d="m0 0h1v41l-3 1 1-40z" fill="#F9F9F9" />
<path transform="translate(932,1434)" d="m0 0h1v41h-3l1-40z" fill="#F9F9F9" />
<path transform="translate(932,1869)" d="m0 0h1v41h-3l1-39z" fill="#F9F9F9" />
<path transform="translate(932,1706)" d="m0 0h1v41l-3 1 1-40z" fill="#F9F9F9" />
<path transform="translate(932,1650)" d="m0 0h1v41l-3 1 1-40z" fill="#F9F9F9" />
<path transform="translate(926,1569)" d="m0 0 2 4v37l-1 2-3-1 1-3z" fill="#F9F9F9" />
<path transform="translate(926,1461)" d="m0 0 2 3v38h-4l1-3z" fill="#F9F9F9" />
<path transform="translate(427,1252)" d="m0 0h15v2l-14 1-1 7 1 3 13 1v3l-14-1-2-3v-10z" fill="#A4A4A5" />
<path transform="translate(950,1890)" d="m0 0h1v41l-1 2-3-1 1-3 1-14v-22z" fill="#F9F9F9" />
<path transform="translate(909,1926)" d="m0 0h2v39l-2 1-1-29z" fill="#B7B7B7" />
<path transform="translate(926,1624)" d="m0 0 2 3v38l-3 2-1-2 1-2z" fill="#F9F9F9" />
<path transform="translate(472,1254)" d="m0 0h15v2l-14 1-1 7 1 3 14 1v2h-14l-3-4v-9z" fill="#A2A1A3" />
<path transform="translate(931,1385)" d="m0 0h1l1 32-2 5-2-1 1-34z" fill="#F9F9F9" />
<path transform="translate(943,1384)" d="m0 0h1v35l-4 1 1-4 1-31z" fill="#F9F9F9" />
<path transform="translate(943,1132)" d="m0 0h1v36h-4l1-3 1-31z" fill="#F9F9F9" />
<path transform="translate(954,1929)" d="m0 0h2v23l-1 3h-2v-25z" fill="#9D9C9E" />
<path transform="translate(954,1659)" d="m0 0h2v23l-1 3h-2v-25z" fill="#9D9C9E" />
<path transform="translate(920,1255)" d="m0 0h1l1 8v37l-4 1 1-6z" fill="#F9F9F9" />
<path transform="translate(931,1133)" d="m0 0h1l1 34-1 2h-3l1-33z" fill="#F9F9F9" />
<path transform="translate(967,1376)" d="m0 0 2 1-2 26-2-4v-21z" fill="#9D9C9E" />
<path transform="translate(920,1321)" d="m0 0h1l1 24v21h-4l1-7z" fill="#F9F9F9" />
<path transform="translate(719,1251)" d="m0 0 2 4 1 7h4v7l-1 3-5-1z" fill="#B7B7B7" />
<path transform="translate(992,1374)" d="m0 0h3l-1 8-1 21-2 1v-29z" fill="#9D9C9E" />
<path transform="translate(911,1709)" d="m0 0 2 2v32l-2 1-1-9z" fill="#F9F9F9" />
<path transform="translate(920,1387)" d="m0 0 2 3v31l-1 2-3-1 1-5z" fill="#F9F9F9" />
<path transform="translate(920,1190)" d="m0 0h1l1 36v8l-1 2-3-1 1-5z" fill="#F9F9F9" />
<path transform="translate(961,1695)" d="m0 0 3 1-1 12-2 4h-2v-15z" fill="#9D9C9E" />
<path transform="translate(960,1667)" d="m0 0 4 1-2 15-3 1v-15z" fill="#9D9C9E" />
<path transform="translate(961,1425)" d="m0 0 3 1-2 16h-3v-15z" fill="#9D9C9E" />
<path transform="translate(915,1224)" d="m0 0h1l1 13v31l-3 1z" fill="#F9F9F9" />
<path transform="translate(974,1692)" d="m0 0h2l1 4-2 12-3 1v-15z" fill="#9D9C9E" />
<path transform="translate(915,1352)" d="m0 0h1l1 12v31l-3 2-1-2 1-3z" fill="#F9F9F9" />
<path transform="translate(920,1133)" d="m0 0 2 2v33l-1 2-3-1 1-7z" fill="#F9F9F9" />
<path transform="translate(960,1937)" d="m0 0 4 1-2 15h-3v-14z" fill="#9D9C9E" />
<path transform="translate(911,1544)" d="m0 0h1l1 7v26l-2 2-1-5z" fill="#F9F9F9" />
<path transform="translate(973,1933)" d="m0 0 4 1-2 15-3 1v-15z" fill="#9E9D9F" />
<path transform="translate(911,1653)" d="m0 0h1l1 10v23l-2 1-1-21z" fill="#F9F9F9" />
<path transform="translate(987,1689)" d="m0 0 2 1v11l-2 5h-2v-15z" fill="#9D9C9E" />
<path transform="translate(974,1664)" d="m0 0h2l1 3-2 13-3 1v-15z" fill="#9D9C9E" />
<path transform="translate(973,1424)" d="m0 0 4 1-2 13-1 2h-2v-15z" fill="#9D9C9E" />
<path transform="translate(987,1929)" d="m0 0h2v11l-2 6h-2v-15z" fill="#9D9C9E" />
<path transform="translate(954,1912)" d="m0 0h3v11l-1 5-3-1v-14z" fill="#9D9C9E" />
<path transform="translate(986,1662)" d="m0 0h3v10l-2 6h-2v-15z" fill="#9D9C9E" />
<path transform="translate(915,1161)" d="m0 0h1l1 8v33l-1 3-3-1 1-4z" fill="#F9F9F9" />
<path transform="translate(955,1641)" d="m0 0 2 1v10l-1 5h-3v-14z" fill="#9D9C9E" />
<path transform="translate(915,1288)" d="m0 0h1l1 28v15l-1 2-3-1 1-4z" fill="#F9F9F9" />
<path transform="translate(685,1210)" d="m0 0 10 1 4 2v1h-23l1-2z" fill="#F9F9F9" />
<path transform="translate(986,1422)" d="m0 0h3v8l-2 8h-2v-15z" fill="#9D9C9E" />
<path transform="translate(916,1899)" d="m0 0h1v43h-3l1-5z" fill="#F9F9F9" />
<path transform="translate(921,1925)" d="m0 0h1v42h-3l1-5z" fill="#F9F9F9" />
<path transform="translate(921,1707)" d="m0 0h1v43h-3l1-4z" fill="#F9F9F9" />
<path transform="translate(916,1626)" d="m0 0h1v42h-3l1-5z" fill="#F9F9F9" />
<path transform="translate(916,1462)" d="m0 0h1v42h-3l1-4z" fill="#F9F9F9" />
<path transform="translate(921,1871)" d="m0 0h1v42h-3l1-4z" fill="#F9F9F9" />
<path transform="translate(916,1735)" d="m0 0h1v43h-3l1-3z" fill="#F9F9F9" />
<path transform="translate(921,1652)" d="m0 0h1v42h-3l1-4z" fill="#F9F9F9" />
<path transform="translate(921,1598)" d="m0 0h1v42l-3-1 1-4z" fill="#F9F9F9" />
<path transform="translate(921,1489)" d="m0 0h1v42h-3l1-4z" fill="#F9F9F9" />
<path transform="translate(916,1845)" d="m0 0h1v42h-3l1-3z" fill="#F9F9F9" />
<path transform="translate(916,1790)" d="m0 0h1v43l-3-1 1-2z" fill="#F9F9F9" />
<path transform="translate(916,1571)" d="m0 0h1v42h-3l1-3z" fill="#F9F9F9" />
<path transform="translate(921,1435)" d="m0 0h1v41h-3l1-4z" fill="#F9F9F9" />
<path transform="translate(509,1259)" d="m0 0 1 4-1 1h-7v3l8 2v2l-9-2-1-5 1-2 7-1z" fill="#A3A3A4" />
<path transform="translate(973,1611)" d="m0 0 4 1-1 10h-4v-9z" fill="#9D9C9E" />
<path transform="translate(518,1255)" d="m0 0 13 1v2h-14v5l-2 1 1-7z" fill="#ABABAC" />
<path transform="translate(980,1879)" d="m0 0 2 1v10l-2 5h-1v-15z" fill="#9D9C9E" />
<path transform="translate(973,1880)" d="m0 0 4 1-1 9h-4v-8z" fill="#9D9C9E" />
<path transform="translate(909,1506)" d="m0 0h2v17l-2 3-1-10z" fill="#B7B7B7" />
<path transform="translate(538,1256)" d="m0 0 4 2 3 2 6-1 4-3-1 4-5 3-6-1-5-4z" fill="#A4A4A5" />
<path transform="translate(980,1611)" d="m0 0 2 2v9l-2 5h-1v-15z" fill="#9D9C9E" />
<path transform="translate(464,1253)" d="m0 0h1v16l-4-1-1-3h2l1-11z" fill="#A8A7A8" />
<path transform="translate(960,1405)" d="m0 0 3 2-2 9-3-1v-7z" fill="#9D9C9E" />
<path transform="translate(960,1127)" d="m0 0h2l1 4-2 7-3-1v-7z" fill="#9D9C9E" />
<path transform="translate(516,1272)" d="m0 0 5 2h8l4-1-4 4h-9l-4-3z" fill="#A2A1A3" />
<path transform="translate(926,1678)" d="m0 0h2v14l-4 1 1-3z" fill="#F9F9F9" />
<path transform="translate(937,1676)" d="m0 0h2v14h-4l1-3z" fill="#F9F9F9" />
<path transform="translate(926,1951)" d="m0 0h2v13l-1 2-3-1 1-3z" fill="#F9F9F9" />
<path transform="translate(937,1948)" d="m0 0h2v14h-4l1-2z" fill="#F9F9F9" />
<path transform="translate(926,1434)" d="m0 0h2v13l-1 2-3-1 1-3z" fill="#F9F9F9" />
<path transform="translate(938,1432)" d="m0 0h1v14l-4 1 1-3 1-11z" fill="#F9F9F9" />
<path transform="translate(986,1126)" d="m0 0 2 1-1 10-3-1v-7z" fill="#9D9C9E" />
<path transform="translate(950,1944)" d="m0 0h1v14l-4 1 2-13z" fill="#F9F9F9" />
<path transform="translate(937,1705)" d="m0 0h2v13l-4 1 1-3z" fill="#F9F9F9" />
<path transform="translate(950,1431)" d="m0 0h1v14h-4l1-2 1-11z" fill="#F9F9F9" />
<path transform="translate(972,1127)" d="m0 0h3v7l-1 3h-2l-1-7z" fill="#9D9C9E" />
<path transform="translate(926,1707)" d="m0 0 2 1v12l-3 2-1-2 1-2z" fill="#F9F9F9" />
<path transform="translate(950,1674)" d="m0 0h1v13l-3 2v-4l1-9z" fill="#F9F9F9" />
<path transform="translate(986,1402)" d="m0 0 2 1-1 9h-3v-7z" fill="#9D9C9E" />
<path transform="translate(403,1254)" d="m0 0 2 1 1 5 8 2v2l-9-1-2-3z" fill="#ADADAE" />
<path transform="translate(950,1702)" d="m0 0h1v14l-3 1-1-2z" fill="#F9F9F9" />
<path transform="translate(960,1647)" d="m0 0h2v10h-3v-8z" fill="#9E9D9F" />
<path transform="translate(960,1917)" d="m0 0h2v9l-3 1v-8z" fill="#9D9D9E" />

</g>

</g>`;

class SigenHouseCard extends HTMLElement {
  setConfig(config) {
    if (!config.entities) {
      throw new Error("Sigen House Card: 'entities' is verplicht in de configuratie.");
    }

    this._config = config;
    this._lastValues = {};

    this.innerHTML = "";
    this._card = document.createElement("ha-card");
    this._card.classList.add("sigen-house-card");

    const title = this._config.title
      ? `<div class="sigen-title">${this._config.title}</div>`
      : "";

    this._card.innerHTML = `
      <style>
        .sigen-house-card {
          --sigen-bg: var(--card-background-color, #ffffff);
          --sigen-border-radius: var(--ha-card-border-radius, 16px);
          --sigen-text-color: var(--primary-text-color, #222);
          --sigen-muted-text: var(--secondary-text-color, #666);
          --sigen-accent: var(--primary-color, #00e5cc);
          padding: 16px;
          box-sizing: border-box;
        }

        .sigen-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .sigen-house-wrapper {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .sigen-svg {
          width: 100%;
          display: block;
        }

        .sigen-device-label {
          font-size: 9px;
          fill: var(--sigen-muted-text);
          text-anchor: middle;
        }

        .sigen-line-static {
          stroke: #555;
          stroke-width: 1.5;
          fill: none;
        }

        .sigen-overlay rect.label-bg {
          fill: rgba(0,0,0,0.05);
          rx: 4;
          ry: 4;
        }

        .sigen-overlay text.label {
          font-size: 9px;
          fill: var(--sigen-muted-text);
        }

        .sigen-overlay text.value {
          font-size: 12px;
          font-weight: 600;
          fill: var(--sigen-text-color);
        }

        .sigen-overlay text.unit {
          font-size: 9px;
          fill: var(--sigen-muted-text);
        }

        .sigen-overlay.missing text.value {
          fill: var(--sigen-muted-text);
        }

        .sigen-overlay.missing rect.label-bg {
          fill: rgba(255,0,0,0.05);
        }

        /* Geanimeerde flow-lijnen */
        .flow-line {
          stroke: var(--sigen-accent);
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 6 10;
          animation: sigen-flow 2.5s linear infinite;
          opacity: 0; /* standaard uit */
          transition: opacity 0.3s ease;
        }

        .flow-line.idle {
          opacity: 0.12;
          animation-play-state: paused;
        }

        .flow-line.active {
          opacity: 1;
          animation-play-state: running;
        }

        .flow-line.reverse {
          animation-direction: reverse;
        }

        @keyframes sigen-flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -40; }
        }
      </style>

      ${title}
      <div class="sigen-house-wrapper">
        <svg class="sigen-svg" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid meet">

          <!-- EMBEDDED ARTWORK -->
          ${SIGEN_COMPOSITE_SVG}

          <!-- GRID (stroomnet paal) -->
          <g id="grid" data-device="grid" transform="translate(50,270)">
            <rect x="5" y="-80" width="10" height="80" fill="#2a3040"/>
            <rect x="-6" y="-86" width="32" height="9" fill="#2a3040"/>
            <circle cx="0" cy="-82" r="2" fill="#444"/>
            <circle cx="20" cy="-82" r="2" fill="#444"/>
            <text x="10" y="12" class="sigen-device-label">GRID</text>
          </g>

          <!-- LOAD (verbruik label) -->
          <g id="load" data-device="load">
            <rect x="610" y="340" width="90" height="28" rx="4" fill="#141820" stroke="#1a2030" stroke-width="1"/>
            <text x="655" y="359" class="sigen-device-label">LOAD</text>
          </g>

          <!-- STATISCHE ACHTERGRONDLIJNEN -->
          <path class="sigen-line-static" d="M60,192 C 130,210 240,270 380,284"/>
          <path class="sigen-line-static" d="M456,132 C 470,165 510,215 543,255"/>
          <path class="sigen-line-static" d="M487,256 C 500,262 512,268 543,278"/>
          <path class="sigen-line-static" d="M563,320 C 580,340 610,350 650,354"/>
          <path class="sigen-line-static" d="M380,284 C 350,278 320,268 290,264"/>

          <!-- GEANIMEERDE FLOW-LIJNEN -->
          <path class="flow-line idle" data-flow="grid"
            d="M60,192 C 130,210 240,270 380,284"/>
          <path class="flow-line idle" data-flow="pv"
            d="M456,132 C 470,165 510,215 543,255"/>
          <path class="flow-line idle" data-flow="battery"
            d="M487,256 C 500,262 512,268 543,278"/>
          <path class="flow-line idle" data-flow="load"
            d="M563,320 C 580,340 610,350 650,354"/>
          <path class="flow-line idle" data-flow="ev"
            d="M380,284 C 350,278 320,268 290,264"/>

          <!-- OVERLAYS MET WAARDEN -->
          <g class="sigen-overlay" data-key="pv_power" data-device="pv">
            <rect class="label-bg" x="30" y="90" width="170" height="30"/>
            <text class="label" x="36" y="100">PV</text>
            <text class="value" x="36" y="112">-</text>
            <text class="unit" x="190" y="112"></text>
          </g>
          <g class="sigen-overlay" data-key="grid_import_power" data-device="grid">
            <rect class="label-bg" x="30" y="126" width="170" height="30"/>
            <text class="label" x="36" y="136">Grid in</text>
            <text class="value" x="36" y="148">-</text>
            <text class="unit" x="190" y="148"></text>
          </g>
          <g class="sigen-overlay" data-key="grid_export_power" data-device="grid">
            <rect class="label-bg" x="30" y="160" width="170" height="30"/>
            <text class="label" x="36" y="170">Grid uit</text>
            <text class="value" x="36" y="182">-</text>
            <text class="unit" x="190" y="182"></text>
          </g>
          <g class="sigen-overlay" data-key="load_power" data-device="load">
            <rect class="label-bg" x="606" y="362" width="160" height="30"/>
            <text class="label" x="612" y="372">Huis</text>
            <text class="value" x="612" y="384">-</text>
            <text class="unit" x="756" y="384"></text>
          </g>
          <g class="sigen-overlay" data-key="battery_power" data-device="battery">
            <rect class="label-bg" x="30" y="300" width="190" height="30"/>
            <text class="label" x="36" y="310">Battery</text>
            <text class="value" x="36" y="322">-</text>
            <text class="unit" x="210" y="322"></text>
          </g>
          <g class="sigen-overlay" data-key="battery_soc" data-device="battery">
            <rect class="label-bg" x="30" y="336" width="190" height="30"/>
            <text class="label" x="36" y="346">SOC</text>
            <text class="value" x="36" y="358">-</text>
            <text class="unit" x="210" y="358">%</text>
          </g>
          <g class="sigen-overlay" data-key="ev_power" data-device="ev">
            <rect class="label-bg" x="30" y="50" width="170" height="30"/>
            <text class="label" x="36" y="60">EV</text>
            <text class="value" x="36" y="72">-</text>
            <text class="unit" x="190" y="72"></text>
          </g>

        </svg>
      </div>
    `;

    this.appendChild(this._card);

    // Devices modulair verbergen
    const devicesConfig = this._config.devices || {};
    ["pv", "grid", "battery", "load", "ev", "gateway", "house"].forEach((dev) => {
      if (devicesConfig[dev] === false) {
        this._card
          .querySelectorAll(`[data-device="${dev}"], [data-flow="${dev}"]`)
          .forEach((el) => (el.style.display = "none"));
      }
    });
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config || !this._card) return;

    const ents = this._config.entities;

    this._updateValue("pv_power", ents.pv_power);
    this._updateValue("grid_import_power", ents.grid_import_power);
    this._updateValue("grid_export_power", ents.grid_export_power);
    this._updateValue("load_power", ents.load_power);
    this._updateValue("battery_power", ents.battery_power);
    this._updateValue("battery_soc", ents.battery_soc, { forceUnit: "%" });
    this._updateValue("ev_power", ents.ev_power); // optioneel

    this._updateFlows();
  }

  _updateValue(key, entityId, options = {}) {
    const el = this._card.querySelector(`.sigen-overlay[data-key="${key}"]`);
    if (!el) return;

    const hideMissing = !!this._config?.hide_missing;
    const forceUnit = options.forceUnit;

    const setMissing = () => {
      if (hideMissing) {
        el.style.display = "none";
        return;
      }
      el.style.display = "";
      el.classList.add("missing");
      const valueEl = el.querySelector(".value");
      const unitEl = el.querySelector(".unit");
      if (valueEl) valueEl.textContent = "-";
      if (unitEl) unitEl.textContent = forceUnit || "";
      this._lastValues[key] = null;
    };

    if (!entityId) {
      setMissing();
      return;
    }

    const stateObj = this._hass.states[entityId];
    if (!stateObj) {
      setMissing();
      return;
    }

    el.style.display = "";
    el.classList.remove("missing");

    let value = stateObj.state;
    let unit = forceUnit || stateObj.attributes.unit_of_measurement || "";

    const num = Number(value);
    if (!isNaN(num)) {
      this._lastValues[key] = num;
      if (Math.abs(num) >= 100) {
        value = Math.round(num).toString();
      } else {
        value = num.toFixed(2).replace(/\.00$/, "");
      }
    } else {
      this._lastValues[key] = null;
    }

    const valueEl = el.querySelector(".value");
    const unitEl = el.querySelector(".unit");
    if (valueEl) valueEl.textContent = value;
    if (unitEl) unitEl.textContent = unit;
  }

  _updateFlows() {
    const flows = this._lastValues || {};
    const threshold = typeof this._config.flow_threshold_w === "number"
      ? this._config.flow_threshold_w
      : 50;

    const gi = flows.grid_import_power || 0;
    const ge = flows.grid_export_power || 0;
    const netGrid = gi - ge;
    this._setFlowSigned("grid", netGrid, threshold);

    this._setFlowUnsigned("pv", flows.pv_power, threshold);
    this._setFlowSigned("battery", flows.battery_power, threshold);
    this._setFlowUnsigned("load", flows.load_power, threshold);
    this._setFlowUnsigned("ev", flows.ev_power, threshold);
  }

  _setFlowUnsigned(flowId, value, threshold) {
    const path = this._card.querySelector(`.flow-line[data-flow="${flowId}"]`);
    if (!path) return;

    path.classList.remove("active", "idle", "reverse");

    if (value == null || Math.abs(value) < threshold) {
      path.classList.add("idle");
      return;
    }

    path.classList.add("active");
  }

  _setFlowSigned(flowId, value, threshold) {
    const path = this._card.querySelector(`.flow-line[data-flow="${flowId}"]`);
    if (!path) return;

    path.classList.remove("active", "idle", "reverse");

    if (value == null || Math.abs(value) < threshold) {
      path.classList.add("idle");
      return;
    }

    path.classList.add("active");
    if (value < 0) {
      path.classList.add("reverse");
    }
  }

  getCardSize() {
    return 4;
  }

  static getStubConfig() {
    return {
      title: "Sigenstor",
      entities: {
        battery_power: "sensor.sigen_bat_battery_power",
        battery_soc: "sensor.sigen_bat_battery_state_of_charge",
        pv_power: "sensor.sigen_bat_pv_power",
        grid_import_power: "sensor.sigen_bat_grid_import_power",
        grid_export_power: "sensor.sigen_bat_grid_export_power",
        load_power: "sensor.sigen_bat_plant_active_power",
        // optioneel:
        // ev_power: "sensor.sigen_ev_charger_power",
      },
      hide_missing: true,
      devices: { pv: true, grid: true, battery: true, load: true, ev: true, gateway: true, house: true },
      flow_threshold_w: 50,
    };
  }
}

if (!customElements.get("sigen-house-card")) {
  customElements.define("sigen-house-card", SigenHouseCard);
}
