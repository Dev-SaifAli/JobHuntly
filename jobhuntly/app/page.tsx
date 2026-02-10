export default function Home() {
  return (
    <div className="p-10 space-y-6">
      {/* Uses 72px and Monument font */}
      <h1 className="font-heading text-h1 text-neutrals-900">
        This is Monument Extended
      </h1>

      {/* Uses 41px and Monument font */}
      <h2 className="font-heading text-h2 text-neutrals-900">
        This is also Monument (smaller)
      </h2>

      {/* Uses 30px (body-xl) and Epilogue font */}
      <p className="font-body text-body-xl text-neutrals-700">
        This is Epilogue font in extra large size.
      </p>

      {/* Uses 16px (body-nm) and Epilogue font */}
      <p className="font-body text-body-nm text-neutrals-500">
        This is Epilogue in regular (normal) size.
      </p>
      
      {/* Side-by-Side Comparison */}
      <div className="mt-10 p-6 border border-neutrals-200 rounded-lg">
        <p className="text-neutrals-300 text-sm mb-2 uppercase tracking-widest">Comparison</p>
        <p className="font-heading text-h2">HEADING: The Quick Brown Fox</p>
        <p className="font-body text-h2">BODY: The Quick Brown Fox</p>
      </div>
    </div>
  );
}