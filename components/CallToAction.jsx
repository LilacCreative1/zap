// ZAP Labs Call To Action Component

function CallToAction() {
  const { useRef, useEffect } = React;
  const { Link } = ReactRouterDOM;

  const ctaRef = useRef(null);

  // Animation on scroll
  useEffect(() => {
    if (!ctaRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ctaRef.current);

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={ctaRef}
      className="py-16 md:py-24 bg-white transition-all duration-1000 ease-out transform translate-y-10 opacity-0" data-id="lu7nuc4wg" data-path="components/CallToAction.js">

      <div className="container mx-auto px-4 md:px-6" data-id="s7owmkrbf" data-path="components/CallToAction.js">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-darkBlue to-mediumBlue rounded-2xl overflow-hidden shadow-xl" data-id="38r6bfvsh" data-path="components/CallToAction.js">
          <div className="flex flex-col lg:flex-row" data-id="mnnar4or1" data-path="components/CallToAction.js">
            <div className="p-10 lg:p-12 lg:w-7/12" data-id="7paitrciq" data-path="components/CallToAction.js">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-id="aunweykk3" data-path="components/CallToAction.js">
                Ready to Enhance Your Interviewing Skills?
              </h2>
              <p className="text-gray-200 mb-8 text-lg" data-id="rp5x4s7r9" data-path="components/CallToAction.js">
                Join hundreds of law enforcement professionals who use ZAP Labs to improve their suspect interview techniques through realistic AI-powered simulations.
              </p>
              
              <div className="space-y-4" data-id="38cplmu35" data-path="components/CallToAction.js">
                <div className="flex items-start" data-id="t48cgazwg" data-path="components/CallToAction.js">
                  <div className="flex-shrink-0 mt-1" data-id="l90n3yh38" data-path="components/CallToAction.js">
                    <i className="fas fa-check-circle text-zapYellow" data-id="zd9u3v7yp" data-path="components/CallToAction.js"></i>
                  </div>
                  <p className="ml-3 text-gray-200" data-id="lwghay9n1" data-path="components/CallToAction.js">
                    <span className="font-semibold text-white" data-id="ndc6rh2u2" data-path="components/CallToAction.js">Realistic Simulations</span> - Practice with AI-driven suspect personas
                  </p>
                </div>
                
                <div className="flex items-start" data-id="u2ds4pz6i" data-path="components/CallToAction.js">
                  <div className="flex-shrink-0 mt-1" data-id="auy53xrw7" data-path="components/CallToAction.js">
                    <i className="fas fa-check-circle text-zapYellow" data-id="mlj97lgp3" data-path="components/CallToAction.js"></i>
                  </div>
                  <p className="ml-3 text-gray-200" data-id="oa1ngvbhk" data-path="components/CallToAction.js">
                    <span className="font-semibold text-white" data-id="dhj4s3uf8" data-path="components/CallToAction.js">Detailed Feedback</span> - Receive comprehensive evaluation after each session
                  </p>
                </div>
                
                <div className="flex items-start" data-id="h6b8if85j" data-path="components/CallToAction.js">
                  <div className="flex-shrink-0 mt-1" data-id="tfr1uyeds" data-path="components/CallToAction.js">
                    <i className="fas fa-check-circle text-zapYellow" data-id="xxyhn30yq" data-path="components/CallToAction.js"></i>
                  </div>
                  <p className="ml-3 text-gray-200" data-id="10tb1jl4k" data-path="components/CallToAction.js">
                    <span className="font-semibold text-white" data-id="hjahono07" data-path="components/CallToAction.js">Progress Tracking</span> - Monitor your improvement over time
                  </p>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4" data-id="ehbkgaybg" data-path="components/CallToAction.js">
                <Link
                  to="/login"
                  className="btn-accent py-3 px-8 rounded-md font-bold text-lg shadow-lg hover:shadow-xl text-center">

                  Start Training Now
                </Link>
                <Link
                  to="/resources"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200 text-center">

                  Explore Resources
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block lg:w-5/12 relative" data-id="fjxuz035x" data-path="components/CallToAction.js">
              <div className="absolute inset-0 bg-black bg-opacity-20" data-id="2y2roen4d" data-path="components/CallToAction.js"></div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Law enforcement training"
                className="h-full w-full object-cover" data-id="oxfzs0xt3" data-path="components/CallToAction.js" />

            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 text-center" data-id="ubrb567ap" data-path="components/CallToAction.js">
          <div className="inline-block rounded-lg p-1 bg-gray-100" data-id="9tyima8si" data-path="components/CallToAction.js">
            <span className="px-4 py-1 text-sm text-gray-500" data-id="a12mr9hxy" data-path="components/CallToAction.js">Trusted by departments nationwide</span>
          </div>
          <h3 className="text-2xl font-bold text-darkBlue mt-6 mb-8" data-id="2td1ky86t" data-path="components/CallToAction.js">Our Platform's Security and Privacy Standards</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="s18ly65qw" data-path="components/CallToAction.js">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" data-id="kiic5hc8e" data-path="components/CallToAction.js">
              <div className="w-12 h-12 bg-lightBlue bg-opacity-10 rounded-full flex items-center justify-center text-lightBlue mx-auto mb-4" data-id="rvtrmvlkl" data-path="components/CallToAction.js">
                <i className="fas fa-lock text-xl" data-id="14tbc122y" data-path="components/CallToAction.js"></i>
              </div>
              <h4 className="font-bold text-lg text-darkBlue mb-2" data-id="n3xpcil5h" data-path="components/CallToAction.js">End-to-End Encryption</h4>
              <p className="text-gray-600" data-id="hitxo10r9" data-path="components/CallToAction.js">All data is encrypted in transit and at rest for maximum security.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" data-id="1bcpkx248" data-path="components/CallToAction.js">
              <div className="w-12 h-12 bg-lightBlue bg-opacity-10 rounded-full flex items-center justify-center text-lightBlue mx-auto mb-4" data-id="0w0hvvyrv" data-path="components/CallToAction.js">
                <i className="fas fa-shield-alt text-xl" data-id="vy89wp1v3" data-path="components/CallToAction.js"></i>
              </div>
              <h4 className="font-bold text-lg text-darkBlue mb-2" data-id="hqbusa10v" data-path="components/CallToAction.js">CJIS Compliance</h4>
              <p className="text-gray-600" data-id="xr68jdy1y" data-path="components/CallToAction.js">Our platform adheres to Criminal Justice Information Services security policies.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" data-id="4p3px4mei" data-path="components/CallToAction.js">
              <div className="w-12 h-12 bg-lightBlue bg-opacity-10 rounded-full flex items-center justify-center text-lightBlue mx-auto mb-4" data-id="ie44hw5ng" data-path="components/CallToAction.js">
                <i className="fas fa-user-shield text-xl" data-id="jpz51238e" data-path="components/CallToAction.js"></i>
              </div>
              <h4 className="font-bold text-lg text-darkBlue mb-2" data-id="8flr8vog8" data-path="components/CallToAction.js">Privacy Focused</h4>
              <p className="text-gray-600" data-id="mwvv5n0rl" data-path="components/CallToAction.js">No real suspect or case data is ever stored in our system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}