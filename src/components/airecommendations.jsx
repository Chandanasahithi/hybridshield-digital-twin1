function AIRecommendations({ attackMode }) {
const recommendations = attackMode
? [
"Isolate the affected device immediately.",
"Increase firewall restrictions for suspicious traffic.",
"Perform a detailed malware and intrusion scan.",
"Verify VPN authentication and active sessions.",
]
: [
"Firewall rules are operating normally.",
"VPN gateway is secure and operational.",
"Monitor unusual traffic patterns continuously.",
"Keep security policies and systems updated.",
];

return (


```
  {/* HEADER */}
  <div className="flex items-center gap-3 mb-6">
    <span className="text-3xl">🤖</span>

    <h2 className="text-2xl font-bold text-white">
      AI Security Recommendations
    </h2>
  </div>

  {/* RECOMMENDATIONS */}
  <div className="space-y-4">

    {recommendations.map((item, index) => (
      <div
        key={index}
        className="
          flex items-center gap-4
          bg-[#c7d9e5]
          rounded-xl
          p-4
          border border-[#a2c1d1]
          shadow-sm
          min-h-[64px]
        "
      >

        {/* CHECK ICON */}
        <div
          className="
            flex-shrink-0
            w-8
            h-8
            rounded-lg
            bg-green-400
            flex
            items-center
            justify-center
            text-white
            font-bold
          "
        >
          ✓
        </div>

        {/* TEXT */}
        <p className="text-[#2f4157] font-semibold text-base leading-6">
          {item}
        </p>

      </div>
    ))}

  </div>

  {/* STATUS */}
  <div className="mt-6 pt-4 border-t border-[#567c8e]">

    <p className="text-white text-sm">
      <span className="text-green-300 font-bold">
        ● AI Engine Active
      </span>

      <span className="text-[#e3ecf2]">
        {" "}— Continuous security analysis enabled
      </span>
    </p>

  </div>

</div>
```

);
}

export default AIRecommendations;