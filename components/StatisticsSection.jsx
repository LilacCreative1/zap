// ZAP Labs Statistics Section Component

function StatisticsSection() {
  const { useRef, useEffect, useState } = React;

  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Statistics data
  const stats = [
  {
    id: 1,
    value: 95,
    label: "Training Effectiveness",
    description: "Users report improved interview skills",
    icon: "fa-chart-line"
  },
  {
    id: 2,
    value: 1000,
    label: "Law Enforcement Officers",
    description: "Trained on our platform",
    icon: "fa-shield-alt"
  },
  {
    id: 3,
    value: 200,
    label: "Training Scenarios",
    description: "Carefully crafted for realistic training",
    icon: "fa-clipboard-list"
  },
  {
    id: 4,
    value: 98,
    label: "Satisfaction Rate",
    description: "From departments and agencies",
    icon: "fa-star"
  }];


  // Counter animation functionality
  const animateCounter = (target, start, end, duration) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      target.textContent = end >= 100 ? value.toLocaleString() : `${value}%`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Animation on scroll
  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Start counter animation when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const counterElements = document.querySelectorAll('.counter-value');
    counterElements.forEach((counter) => {
      const value = parseInt(counter.getAttribute('data-value'), 10);
      animateCounter(counter, 0, value, 2000);
    });
  }, [isVisible]);

  return (
    <section className="py-16 bg-darkBlue text-white" ref={statsRef} data-id="48ja0s9iw" data-path="components/StatisticsSection.js">
      <div className="container mx-auto px-4" data-id="va2mkwz10" data-path="components/StatisticsSection.js">
        <div className="text-center mb-12" data-id="yu46mctiv" data-path="components/StatisticsSection.js">
          <h2 className="text-3xl md:text-4xl font-bold font-ibm mb-4" data-id="saoierzg6" data-path="components/StatisticsSection.js">
            Training That Makes a Difference
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" data-id="vrspan0pr" data-path="components/StatisticsSection.js">
            Our platform is trusted by law enforcement agencies nationwide to provide effective, realistic interview training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" data-id="on5rajtid" data-path="components/StatisticsSection.js">
          {stats.map((stat, index) =>
          <div
            key={stat.id}
            className={`bg-mediumBlue bg-opacity-20 rounded-lg p-6 text-center transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }} data-id="ylr13dgpx" data-path="components/StatisticsSection.js">

              <div className="w-16 h-16 bg-zapYellow bg-opacity-20 rounded-full flex items-center justify-center text-zapYellow text-2xl mx-auto mb-4" data-id="dpf133z66" data-path="components/StatisticsSection.js">
                <i className={`fas ${stat.icon}`} data-id="vb7qjfgz6" data-path="components/StatisticsSection.js"></i>
              </div>
              <h3 className="counter-value text-4xl font-bold text-zapYellow mb-2" data-value={stat.value} data-id="b8o0wg8qo" data-path="components/StatisticsSection.js">
                0
              </h3>
              <h4 className="text-xl font-semibold mb-2" data-id="ninu1663z" data-path="components/StatisticsSection.js">{stat.label}</h4>
              <p className="text-gray-300" data-id="y1jou5n6b" data-path="components/StatisticsSection.js">{stat.description}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Wave SVG Divider */}
      <div className="w-full overflow-hidden mt-16" data-id="bp5u11ze0" data-path="components/StatisticsSection.js">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 md:h-20" data-id="36o6d18l4" data-path="components/StatisticsSection.js">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#f8fafc" data-id="m4gp6lfya" data-path="components/StatisticsSection.js" />

        </svg>
      </div>
    </section>);

}