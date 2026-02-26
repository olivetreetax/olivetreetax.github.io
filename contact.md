---
layout: default
title: "Case Evaluation"
description: "Request a confidential case evaluation with a licensed tax professional. We respond within 24 business hours."
---

<main class="py-16 lg:py-24 px-6">
  <div class="max-w-[1100px] mx-auto">

    <div class="text-center mb-16">
      <h1 class="font-serif text-4xl lg:text-5xl text-mfa-evergreen mb-4">Request a Case Evaluation</h1>
      <p class="text-mfa-slate max-w-2xl mx-auto">Professional representation starts here. Share the details of your situation in total confidence.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

      <!-- Intake Form -->
      <div class="lg:col-span-2 order-2 lg:order-1">
        <div id="contact-form-container" class="bg-white rounded-mfa shadow-mfa-card border-t-4 border-mfa-evergreen overflow-hidden">
          <form id="evaluation-form" action="https://formspree.io/f/xdalbdng" method="POST" class="p-8 md:p-12 space-y-8">

            <!-- Basic Info -->
            <div class="space-y-6">
              <h3 class="font-serif text-xl text-mfa-evergreen border-b border-mfa-sage/20 pb-2">1. Basic Information</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                  <input type="text" name="full_name" required class="w-full p-3 border border-mfa-sage/40 rounded-sm outline-none focus:border-mfa-evergreen focus:ring-1 focus:ring-mfa-evergreen bg-mfa-cream/10 text-sm">
                </div>
                <div class="space-y-2">
                  <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">Phone Number</label>
                  <input type="tel" name="phone" class="w-full p-3 border border-mfa-sage/40 rounded-sm outline-none focus:border-mfa-evergreen focus:ring-1 focus:ring-mfa-evergreen bg-mfa-cream/10 text-sm">
                </div>
                <div class="space-y-2">
                  <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">Email Address</label>
                  <input type="email" name="_replyto" required class="w-full p-3 border border-mfa-sage/40 rounded-sm outline-none focus:border-mfa-evergreen focus:ring-1 focus:ring-mfa-evergreen bg-mfa-cream/10 text-sm">
                </div>
                <div class="space-y-2">
                  <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">Business Type</label>
                  <select name="business_type" class="w-full p-3 border border-mfa-sage/40 rounded-sm outline-none focus:border-mfa-evergreen focus:ring-1 focus:ring-mfa-evergreen bg-mfa-cream/10 text-sm">
                    <option>Individual (W-2)</option>
                    <option>Sole Proprietor / LLC</option>
                    <option>S-Corp / C-Corp</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Situation -->
            <div class="space-y-6">
              <h3 class="font-serif text-xl text-mfa-evergreen border-b border-mfa-sage/20 pb-2">2. Your Tax Situation</h3>
              <div class="space-y-4">
                <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">What best describes your current status?</label>
                <div class="grid grid-cols-1 gap-3">
                  <label class="flex items-center p-4 border border-mfa-sage/20 rounded-sm cursor-pointer hover:bg-mfa-cream/30 transition-colors">
                    <input type="radio" name="situation" value="IRS letter or notice" class="w-4 h-4 mr-4">
                    <span class="text-sm">I received an IRS letter/notice</span>
                  </label>
                  <label class="flex items-center p-4 border border-mfa-sage/20 rounded-sm cursor-pointer hover:bg-mfa-cream/30 transition-colors">
                    <input type="radio" name="situation" value="Active levy lien or garnishment" class="w-4 h-4 mr-4">
                    <span class="text-sm">I have an active Levy, Lien, or Garnishment</span>
                  </label>
                  <label class="flex items-center p-4 border border-mfa-sage/20 rounded-sm cursor-pointer hover:bg-mfa-cream/30 transition-colors">
                    <input type="radio" name="situation" value="Back taxes or unfiled returns" class="w-4 h-4 mr-4">
                    <span class="text-sm">I owe back taxes (multiple unfiled returns)</span>
                  </label>
                  <label class="flex items-center p-4 border border-mfa-sage/20 rounded-sm cursor-pointer hover:bg-mfa-cream/30 transition-colors">
                    <input type="radio" name="situation" value="Bookkeeping and tax planning" class="w-4 h-4 mr-4">
                    <span class="text-sm">I need general bookkeeping & tax planning</span>
                  </label>
                </div>
              </div>
              <div class="space-y-2">
                <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">Estimated Debt Amount</label>
                <select name="estimated_debt" class="w-full p-3 border border-mfa-sage/40 rounded-sm outline-none focus:border-mfa-evergreen focus:ring-1 focus:ring-mfa-evergreen bg-mfa-cream/10 text-sm">
                  <option>Under $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
            </div>

            <!-- Details -->
            <div class="space-y-4">
              <label class="block font-ui text-[10px] font-bold uppercase tracking-widest">Describe your situation in confidence</label>
              <textarea name="message" rows="4" placeholder="Briefly explain your tax issue or accounting needs..." class="w-full p-3 border border-mfa-sage/40 rounded-sm outline-none focus:border-mfa-evergreen focus:ring-1 focus:ring-mfa-evergreen bg-mfa-cream/10 text-sm"></textarea>
            </div>

            <!-- Honeypot spam trap — bots fill this, humans don't -->
            <input type="text" name="_gotcha" style="display:none">

            <!-- Custom email subject line -->
            <input type="hidden" name="_subject" value="New Case Evaluation — Olive Tree Tax">

            <button type="submit" class="w-full bg-mfa-gold hover:bg-mfa-evergreen text-mfa-evergreen hover:text-mfa-cream font-ui font-bold py-5 rounded-mfa transition-all shadow-xl uppercase tracking-widest text-sm">
              Submit Confidential Case Evaluation →
            </button>
            <p class="text-[10px] text-center text-mfa-slate/60 uppercase tracking-widest">Your information is secure and never shared with third parties.</p>
          </form>

          <!-- Success State -->
          <div id="success-message" class="hidden p-12 text-center space-y-6">
            <div class="w-20 h-20 bg-mfa-sage/20 text-mfa-evergreen rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h2 class="font-serif text-3xl text-mfa-evergreen">Evaluation Request Received</h2>
            <p class="text-mfa-slate">Thank you for sharing your situation. We will review your file and contact you within 24 business hours.</p>
            <a href="/" class="font-ui text-[10px] font-bold uppercase tracking-widest text-mfa-gold hover:text-mfa-evergreen">Return to Home</a>
          </div>
        </div>
      </div>

      <!-- Trust Sidebar -->
      <aside class="order-1 lg:order-2 space-y-8">

        <div class="bg-mfa-evergreen p-8 rounded-mfa text-mfa-cream shadow-lg">
        <div class="flex items-center space-x-3 mb-6">
        <svg class="w-6 h-6 text-mfa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        <h4 class="font-ui text-xs font-bold uppercase tracking-widest">Privacy Guarantee</h4>
        </div>
        <p class="text-sm text-mfa-sage leading-relaxed mb-4">All submissions are protected by Circular 230 confidentiality standards. Your information is never shared with third parties.</p>
        <p class="text-xs italic text-mfa-gold">Our Enrolled Agents are legally bound by the same ethical and confidentiality standards as attorneys and CPAs.</p>
        </div>

        <div class="bg-white p-8 rounded-mfa border border-mfa-sage/20 shadow-sm">
          <div class="flex items-center space-x-3 mb-4">
            <svg class="w-6 h-6 text-mfa-evergreen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h4 class="font-ui text-xs font-bold uppercase tracking-widest text-mfa-evergreen">Fast Action</h4>
          </div>
          <p class="text-sm text-mfa-slate">Expect a response from our team within <span class="font-bold text-mfa-evergreen">24 business hours</span>. IRS deadlines don't wait, and neither do we.</p>
        </div>

        <!-- Firm Credential Badge — replaces the personal EA badge card -->
        <div class="bg-white p-8 rounded-mfa border border-mfa-sage/20 shadow-sm flex flex-col items-center text-center">
        <div class="w-24 h-24 bg-mfa-cream border-4 border-mfa-gold rounded-full flex items-center justify-center mb-4">
        <span class="font-serif text-2xl font-bold text-mfa-evergreen leading-none text-center">EA<br/><span class="text-sm">MS</span></span>
        </div>
        <h4 class="font-serif text-lg text-mfa-evergreen mb-1">Olive Tree Tax</h4>
        <p class="text-[10px] font-ui font-bold uppercase tracking-widest text-mfa-gold mb-4">Licensed Enrolled Agents · MS in Taxation</p>
        <p class="text-xs text-mfa-slate italic">Federally Authorized to Practice Before the<br/>Internal Revenue Service · All 50 States</p>
        </div>

      </aside>
    </div>
  </div>
</main>

<script>
  const form = document.getElementById('evaluation-form');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Show success state
        document.getElementById('evaluation-form').classList.add('hidden');
        document.getElementById('success-message').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Show error if submission fails
        const json = await response.json();
        alert('There was a problem submitting your form. Please email us directly at hello@olivetreetax.com');
        console.error('Formspree error:', json);
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please email us directly at hello@olivetreetax.com');
      console.error('Network error:', error);
    }
  });
</script>