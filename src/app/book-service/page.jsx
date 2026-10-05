export default function BookService() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <div className="rounded-2xl bg-white p-8 shadow-xl border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">Book an RO Technician</h2>
        <p className="mt-2 text-sm text-slate-500">Fill in details for immediate confirmation and scheduling within 2 hours.</p>
        
        {/* Replace action URL with your Web3Forms or Formspree endpoint */}
        <form action="https://api.web3forms.com/submit" method="POST" className="mt-8 space-y-6">
          <input type="hidden" name="access_key" value="0250bc2d-19f9-4ab8-a44a-d6626a29c9ef" />
          
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" name="name" required className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone Number</label>
              <input type="tel" name="phone" required className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Select City Region</label>
              <select name="region" required className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none">
                <option>Noida / Greater Noida</option>
                <option>Gurgaon</option>
                <option>Dwarka & West Delhi</option>
                <option>Other Delhi NCR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Society Name & Flat/Block No.</label>
            <input type="text" name="society_address" placeholder="e.g., Gaur City 2, 14th Avenue, Tower G-902" required className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Select Service Needed</label>
            <select name="service_type" className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none">
              <option>General Breakdown / Repair (Machine Not Working)</option>
              <option>Periodic Filter Replacement Service</option>
              <option>Inquire about Yearly AMC Package</option>
              <option>Installation of New RO System</option>
            </select>
          </div>

          <button type="submit" className="w-full rounded-md bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 transition shadow-lg">
            Confirm Booking Request
          </button>
        </form>
      </div>
    </div>
  );
}
