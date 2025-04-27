// ZAP Labs Visual Examples Component

function VisualExamples() {
  const { useState, useEffect, useRef } = React;
  const containerRef = useRef(null);

  // States for animation
  const [isVisible, setIsVisible] = useState(false);

  // Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Example scenarios with visuals focusing on ICAC investigations
  const examples = [
  {
    id: 1,
    title: "ICAC-Focused Training Scenarios",
    description: "Select from specialized scenarios designed specifically for Internet Crimes Against Children investigations with varying behavioral profiles.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Officer selecting an ICAC training scenario on computer screen"
  },
  {
    id: 2,
    title: "Digital Evidence Integration",
    description: "Practice interviewing techniques with simulated suspects while incorporating digital evidence elements common in ICAC investigations.",
    image: "https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Interview simulation showing digital evidence integration"
  },
  {
    id: 3,
    title: "ICAC-Specific Performance Metrics",
    description: "Receive specialized feedback focused on key ICAC investigation competencies, including digital forensics awareness and trauma-informed interviewing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "ICAC-specific performance dashboard with specialized metrics"
  }];


  return (
    <section className="py-16 bg-white" ref={containerRef} data-id="0yqd3e0y3" data-path="components/VisualExamples.js">
      <div className="container mx-auto px-4" data-id="l9r1uiv58" data-path="components/VisualExamples.js">
        <div className="text-center mb-12" data-id="r10fxysx1" data-path="components/VisualExamples.js">
          <h2 className="text-3xl md:text-4xl font-bold font-ibm text-darkBlue mb-4" data-id="zm3g7ioi3" data-path="components/VisualExamples.js">
            See the Platform in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-id="e9vp0tx8j" data-path="components/VisualExamples.js">
            Our AI-powered interview simulator provides specialized ICAC investigation training scenarios to help law enforcement professionals develop and refine their interviewing skills for these sensitive cases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12" data-id="1kttkzwpf" data-path="components/VisualExamples.js">
          {examples.map((example, index) =>
          <div
            key={example.id}
            className={`bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 200}ms` }} data-id="qfcm6konf" data-path="components/VisualExamples.js">

              <div className="h-56 overflow-hidden" data-id="tvrxrratt" data-path="components/VisualExamples.js">
                <img
                src={example.image}
                alt={example.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" data-id="rtcjtzbxc" data-path="components/VisualExamples.js" />

              </div>
              <div className="p-6" data-id="g2rww204r" data-path="components/VisualExamples.js">
                <div className="flex items-center mb-3" data-id="wu1mawht6" data-path="components/VisualExamples.js">
                  <span className="bg-mediumBlue text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center mr-3" data-id="qib8ry94e" data-path="components/VisualExamples.js">
                    {example.id}
                  </span>
                  <h3 className="text-xl font-bold font-ibm text-darkBlue" data-id="ndp34ewum" data-path="components/VisualExamples.js">
                    {example.title}
                  </h3>
                </div>
                <p className="text-gray-600" data-id="7vyoi5u6r" data-path="components/VisualExamples.js">
                  {example.description}
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center" data-id="asqfse3mh" data-path="components/VisualExamples.js">
          <div className="inline-block bg-gray-100 rounded-lg p-6 max-w-3xl shadow-md" data-id="bytfrjagi" data-path="components/VisualExamples.js">
            <p className="text-gray-700 italic mb-4" data-id="dfpowv7ns" data-path="components/VisualExamples.js">
              <i className="fas fa-quote-left text-lightBlue mr-2 opacity-50" data-id="jlj4725uo" data-path="components/VisualExamples.js"></i>
              The ZAP Labs platform has transformed our ICAC investigation training. The specialized scenarios provide our investigators with consistent, realistic practice opportunities that address the unique challenges of digital evidence cases.
              <i className="fas fa-quote-right text-lightBlue ml-2 opacity-50" data-id="jel77x63c" data-path="components/VisualExamples.js"></i>
            </p>
            <p className="font-semibold text-darkBlue" data-id="3y3rcbbds" data-path="components/VisualExamples.js">- Director, Internet Crimes Against Children Task Force</p>
          </div>
        </div>
        
        <div className="mt-12 text-center" data-id="c6o2rmayp" data-path="components/VisualExamples.js">
          <button className="bg-mediumBlue hover:bg-darkBlue text-white py-3 px-8 rounded-md font-semibold transition-colors duration-200 shadow-md hover:shadow-lg" data-id="yee9ci3x0" data-path="components/VisualExamples.js">
            Start Training Now
          </button>
        </div>
      </div>
    </section>);

}