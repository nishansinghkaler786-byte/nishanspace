// Stylized wireframe mockups for each case study preview card

export function LighthouseMockup() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#12121a"/>
      {/* header */}
      <rect x="0" y="0" width="320" height="28" fill="#1c1c26"/>
      <rect x="12" y="10" width="60" height="8" rx="2" fill="#4F4FE8" opacity="0.9"/>
      <rect x="240" y="10" width="40" height="8" rx="2" fill="#2a2a36"/>
      <rect x="286" y="10" width="22" height="8" rx="2" fill="#2a2a36"/>
      {/* sidebar */}
      <rect x="0" y="28" width="52" height="172" fill="#0a0a0f"/>
      <rect x="10" y="40" width="32" height="6" rx="2" fill="#4F4FE8" opacity="0.7"/>
      <rect x="10" y="54" width="28" height="5" rx="2" fill="#444"/>
      <rect x="10" y="66" width="30" height="5" rx="2" fill="#444"/>
      <rect x="10" y="78" width="26" height="5" rx="2" fill="#444"/>
      <rect x="10" y="90" width="28" height="5" rx="2" fill="#444"/>
      {/* score circles */}
      <circle cx="100" cy="80" r="28" stroke="#4F4FE8" strokeWidth="4" fill="none" opacity="0.8"/>
      <circle cx="100" cy="80" r="28" stroke="#4F4FE8" strokeWidth="4" fill="none" strokeDasharray="132 176" opacity="0.3"/>
      <text x="100" y="84" textAnchor="middle" fill="#f4f1ea" fontSize="12" fontFamily="monospace">82</text>
      <circle cx="165" cy="80" r="22" stroke="#6E6EFF" strokeWidth="3" fill="none" opacity="0.7"/>
      <text x="165" y="84" textAnchor="middle" fill="#f4f1ea" fontSize="10" fontFamily="monospace">74</text>
      <circle cx="220" cy="80" r="18" stroke="#888" strokeWidth="2.5" fill="none" opacity="0.5"/>
      <text x="220" y="84" textAnchor="middle" fill="#888" fontSize="9" fontFamily="monospace">61</text>
      {/* candidate rows */}
      <rect x="68" y="122" width="240" height="1" fill="#1c1c26"/>
      <rect x="68" y="135" width="80" height="6" rx="2" fill="#2a2a36"/>
      <rect x="156" y="135" width="48" height="6" rx="2" fill="#2a2a36"/>
      <rect x="258" y="133" width="40" height="10" rx="5" fill="#4F4FE8" opacity="0.3"/>
      <rect x="68" y="150" width="1" height="1" fill="none"/>
      <rect x="68" y="150" width="72" height="5" rx="2" fill="#2a2a36" opacity="0.6"/>
      <rect x="156" y="150" width="40" height="5" rx="2" fill="#2a2a36" opacity="0.6"/>
      <rect x="258" y="148" width="40" height="10" rx="5" fill="#2a2a36"/>
      <rect x="68" y="165" width="76" height="5" rx="2" fill="#2a2a36" opacity="0.6"/>
      <rect x="156" y="165" width="52" height="5" rx="2" fill="#2a2a36" opacity="0.6"/>
      <rect x="258" y="163" width="40" height="10" rx="5" fill="#4F4FE8" opacity="0.2"/>
    </svg>
  );
}

export function SmartHealthMockup() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#12121a"/>
      {/* patient header */}
      <rect x="0" y="0" width="320" height="44" fill="#0a0a0f"/>
      <circle cx="26" cy="22" r="14" fill="#1c1c26"/>
      <rect x="48" y="12" width="72" height="7" rx="2" fill="#f4f1ea" opacity="0.8"/>
      <rect x="48" y="24" width="48" height="5" rx="2" fill="#888"/>
      <rect x="240" y="14" width="68" height="16" rx="4" fill="#4F4FE8" opacity="0.9"/>
      {/* two columns */}
      <rect x="12" y="54" width="140" height="7" rx="2" fill="#f4f1ea" opacity="0.6"/>
      <rect x="12" y="68" width="120" height="5" rx="2" fill="#444"/>
      <rect x="12" y="80" width="130" height="5" rx="2" fill="#444"/>
      <rect x="12" y="92" width="100" height="5" rx="2" fill="#444"/>
      <rect x="12" y="108" width="70" height="6" rx="2" fill="#4F4FE8" opacity="0.6"/>
      <rect x="12" y="120" width="140" height="5" rx="2" fill="#444"/>
      <rect x="12" y="132" width="110" height="5" rx="2" fill="#444"/>
      <rect x="12" y="144" width="130" height="5" rx="2" fill="#444"/>
      {/* right column */}
      <rect x="168" y="54" width="140" height="7" rx="2" fill="#f4f1ea" opacity="0.6"/>
      {/* alerts */}
      <rect x="168" y="68" width="16" height="16" rx="3" fill="#4F4FE8" opacity="0.3"/>
      <rect x="190" y="71" width="88" height="5" rx="2" fill="#2a2a36"/>
      <rect x="168" y="90" width="16" height="16" rx="3" fill="#888" opacity="0.3"/>
      <rect x="190" y="93" width="76" height="5" rx="2" fill="#2a2a36"/>
      <rect x="168" y="112" width="16" height="16" rx="3" fill="#888" opacity="0.3"/>
      <rect x="190" y="115" width="92" height="5" rx="2" fill="#2a2a36"/>
      {/* bottom action bar */}
      <rect x="0" y="176" width="320" height="24" fill="#1c1c26"/>
      <rect x="12" y="183" width="60" height="10" rx="5" fill="#4F4FE8" opacity="0.8"/>
      <rect x="80" y="183" width="60" height="10" rx="5" fill="#2a2a36"/>
      <rect x="148" y="183" width="60" height="10" rx="5" fill="#2a2a36"/>
    </svg>
  );
}

export function SmartTrialMockup() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#12121a"/>
      {/* title */}
      <rect x="12" y="16" width="100" height="8" rx="2" fill="#f4f1ea" opacity="0.7"/>
      <rect x="12" y="30" width="64" height="5" rx="2" fill="#888"/>
      {/* funnel bars */}
      <rect x="12" y="52" width="4" height="12" rx="2" fill="#4F4FE8"/>
      <rect x="20" y="48" width="200" height="16" rx="3" fill="#4F4FE8" opacity="0.7"/>
      <rect x="228" y="52" width="48" height="8" rx="2" fill="#888"/>
      <rect x="12" y="76" width="4" height="12" rx="2" fill="#4F4FE8" opacity="0.6"/>
      <rect x="20" y="72" width="160" height="16" rx="3" fill="#4F4FE8" opacity="0.5"/>
      <rect x="188" y="76" width="48" height="8" rx="2" fill="#888"/>
      <rect x="12" y="100" width="4" height="12" rx="2" fill="#4F4FE8" opacity="0.4"/>
      <rect x="20" y="96" width="110" height="16" rx="3" fill="#4F4FE8" opacity="0.3"/>
      <rect x="138" y="100" width="48" height="8" rx="2" fill="#888"/>
      <rect x="12" y="124" width="4" height="12" rx="2" fill="#4F4FE8" opacity="0.25"/>
      <rect x="20" y="120" width="72" height="16" rx="3" fill="#4F4FE8" opacity="0.2"/>
      <rect x="100" y="124" width="48" height="8" rx="2" fill="#888"/>
      {/* labels */}
      <rect x="12" y="145" width="50" height="4" rx="2" fill="#444"/>
      <rect x="12" y="156" width="44" height="4" rx="2" fill="#444"/>
      <rect x="12" y="167" width="56" height="4" rx="2" fill="#444"/>
      <rect x="12" y="178" width="40" height="4" rx="2" fill="#444"/>
      {/* metric */}
      <rect x="240" y="120" width="68" height="40" rx="4" fill="#1c1c26"/>
      <rect x="252" y="130" width="40" height="10" rx="2" fill="#4F4FE8" opacity="0.8"/>
      <rect x="252" y="146" width="32" height="5" rx="2" fill="#444"/>
    </svg>
  );
}

export function Smart360MindMockup() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#12121a"/>
      {/* header */}
      <rect x="0" y="0" width="320" height="36" fill="#0a0a0f"/>
      <rect x="12" y="12" width="88" height="7" rx="2" fill="#f4f1ea" opacity="0.8"/>
      <rect x="112" y="13" width="40" height="5" rx="2" fill="#888"/>
      {/* session template */}
      <rect x="12" y="48" width="60" height="5" rx="2" fill="#4F4FE8" opacity="0.7"/>
      <rect x="12" y="60" width="140" height="32" rx="3" fill="#1c1c26"/>
      <rect x="18" y="66" width="100" height="4" rx="2" fill="#444"/>
      <rect x="18" y="74" width="80" height="4" rx="2" fill="#444"/>
      <rect x="18" y="82" width="116" height="4" rx="2" fill="#444"/>
      {/* mood tracker */}
      <rect x="12" y="100" width="60" height="5" rx="2" fill="#4F4FE8" opacity="0.7"/>
      <circle cx="24" cy="118" r="8" fill="#4F4FE8" opacity="0.8"/>
      <circle cx="46" cy="118" r="8" fill="#4F4FE8" opacity="0.5"/>
      <circle cx="68" cy="118" r="8" fill="#2a2a36"/>
      <circle cx="90" cy="118" r="8" fill="#2a2a36"/>
      <circle cx="112" cy="118" r="8" fill="#2a2a36"/>
      {/* right panel - treatment goals */}
      <rect x="172" y="48" width="136" height="136" rx="4" fill="#1c1c26"/>
      <rect x="180" y="58" width="60" height="5" rx="2" fill="#f4f1ea" opacity="0.6"/>
      {/* goal items */}
      <rect x="180" y="72" width="12" height="12" rx="2" fill="#4F4FE8" opacity="0.8"/>
      <rect x="198" y="74" width="88" height="4" rx="2" fill="#444"/>
      <rect x="198" y="80" width="64" height="3" rx="2" fill="#2a2a36"/>
      <rect x="180" y="92" width="12" height="12" rx="2" fill="#4F4FE8" opacity="0.4"/>
      <rect x="198" y="94" width="76" height="4" rx="2" fill="#444"/>
      <rect x="198" y="100" width="52" height="3" rx="2" fill="#2a2a36"/>
      <rect x="180" y="112" width="12" height="12" rx="2" fill="#2a2a36"/>
      <rect x="198" y="114" width="80" height="4" rx="2" fill="#444"/>
      <rect x="180" y="132" width="116" height="1" fill="#2a2a36"/>
      <rect x="180" y="142" width="80" height="8" rx="4" fill="#4F4FE8" opacity="0.6"/>
      {/* privacy badge */}
      <rect x="12" y="148" width="140" height="24" rx="3" fill="#0a0a0f" stroke="#2a2a36" strokeWidth="1"/>
      <rect x="20" y="156" width="6" height="8" rx="1" fill="#4F4FE8" opacity="0.6"/>
      <rect x="32" y="158" width="80" height="4" rx="2" fill="#444"/>
    </svg>
  );
}

export function AntierWeb3Mockup() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#12121a"/>
      {/* wallet header */}
      <rect x="0" y="0" width="320" height="52" fill="#0a0a0f"/>
      <circle cx="26" cy="26" r="14" fill="#4F4FE8" opacity="0.3"/>
      <rect x="48" y="16" width="48" height="6" rx="2" fill="#888"/>
      <rect x="48" y="28" width="88" height="8" rx="2" fill="#f4f1ea" opacity="0.9"/>
      <rect x="254" y="16" width="54" height="20" rx="4" fill="#4F4FE8" opacity="0.8"/>
      {/* address display */}
      <rect x="12" y="64" width="296" height="28" rx="4" fill="#1c1c26"/>
      <rect x="20" y="72" width="40" height="5" rx="2" fill="#888"/>
      <rect x="68" y="71" width="180" height="6" rx="2" fill="#4F4FE8" opacity="0.5"/>
      <rect x="256" y="71" width="40" height="6" rx="2" fill="#4F4FE8" opacity="0.9"/>
      {/* confirmation screen */}
      <rect x="12" y="104" width="296" height="84" rx="6" fill="#1c1c26" stroke="#4F4FE8" strokeWidth="1" strokeOpacity="0.4"/>
      <rect x="24" y="114" width="80" height="6" rx="2" fill="#f4f1ea" opacity="0.5"/>
      {/* amount */}
      <rect x="24" y="128" width="140" height="14" rx="3" fill="#0a0a0f"/>
      <rect x="32" y="133" width="88" height="4" rx="2" fill="#4F4FE8" opacity="0.8"/>
      {/* fee */}
      <rect x="24" y="150" width="60" height="4" rx="2" fill="#888"/>
      <rect x="90" y="150" width="48" height="4" rx="2" fill="#444"/>
      {/* confirm button */}
      <rect x="168" y="124" width="128" height="32" rx="4" fill="#4F4FE8"/>
      <rect x="196" y="136" width="72" height="8" rx="2" fill="white" opacity="0.9"/>
    </svg>
  );
}

export function AIMockup() {
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#12121a"/>
      {/* AI recommendation card */}
      <rect x="12" y="12" width="200" height="80" rx="4" fill="#1c1c26" stroke="#4F4FE8" strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="20" y="20" width="30" height="5" rx="2" fill="#4F4FE8" opacity="0.7"/>
      <rect x="56" y="20" width="60" height="5" rx="2" fill="#f4f1ea" opacity="0.7"/>
      <rect x="20" y="34" width="180" height="4" rx="2" fill="#444"/>
      <rect x="20" y="44" width="160" height="4" rx="2" fill="#444"/>
      <rect x="20" y="54" width="120" height="4" rx="2" fill="#444"/>
      {/* confidence bar */}
      <rect x="20" y="68" width="180" height="6" rx="3" fill="#0a0a0f"/>
      <rect x="20" y="68" width="144" height="6" rx="3" fill="#4F4FE8" opacity="0.7"/>
      <rect x="170" y="66" width="22" height="10" rx="2" fill="#4F4FE8"/>
      <rect x="174" y="68" width="14" height="6" rx="1" fill="white" opacity="0.9"/>
      {/* evidence panel */}
      <rect x="224" y="12" width="84" height="80" rx="4" fill="#0a0a0f" stroke="#2a2a36" strokeWidth="1"/>
      <rect x="232" y="20" width="40" height="4" rx="2" fill="#888"/>
      <rect x="232" y="30" width="64" height="3" rx="2" fill="#2a2a36"/>
      <rect x="232" y="36" width="56" height="3" rx="2" fill="#2a2a36"/>
      <rect x="232" y="42" width="60" height="3" rx="2" fill="#4F4FE8" opacity="0.4"/>
      <rect x="232" y="48" width="52" height="3" rx="2" fill="#2a2a36"/>
      <rect x="232" y="54" width="64" height="3" rx="2" fill="#4F4FE8" opacity="0.4"/>
      {/* similar cases */}
      <rect x="12" y="104" width="296" height="5" rx="2" fill="#888"/>
      {/* case thumbnails */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={12 + i * 76} y="118" width="64" height="52" rx="3" fill="#1c1c26"/>
          <rect x={20 + i * 76} y="126" width="48" height="3" rx="2" fill="#444"/>
          <rect x={20 + i * 76} y="132" width="36" height="3" rx="2" fill="#444"/>
          <rect x={20 + i * 76} y="142" width="48" height="16" rx="2" fill={i < 2 ? '#4F4FE8' : '#2a2a36'} opacity={i < 2 ? 0.3 : 0.5}/>
          <rect x={20 + i * 76} y="160" width="32" height="4" rx="2" fill="#444"/>
        </g>
      ))}
    </svg>
  );
}

export const mockupMap: Record<string, React.FC> = {
  lighthouse: LighthouseMockup,
  smarthealth: SmartHealthMockup,
  smarttrial: SmartTrialMockup,
  smart360mind: Smart360MindMockup,
  'antier-web3': AntierWeb3Mockup,
  'ai-interfaces': AIMockup,
};
