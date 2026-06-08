'use client'

const packages = [
  {
    name: 'Signature Massage',
    duration: '60 minutes',
    price: '$150',
    description: 'Choose from Swedish or aromatherapy massage',
    features: [
      'Full body massage',
      'Custom pressure',
      'Relaxing aromatics',
      'Complimentary tea',
    ],
  },
  {
    name: 'Deep Therapy',
    duration: '90 minutes',
    price: '$200',
    description: 'Intensive deep tissue or therapeutic massage',
    features: [
      'Full body deep tissue',
      'Problem area focus',
      'Myofascial release',
      'Complimentary tea',
      'Personalized recommendations',
    ],
    featured: true,
  },
  {
    name: 'Wellness Package',
    duration: '120 minutes',
    price: '$250',
    description: 'Combination massage with aromatherapy elements',
    features: [
      'Swedish + deep tissue',
      'Aromatherapy treatment',
      'Hot stone therapy',
      'Complimentary tea',
      'Holistic wellness plan',
      'Priority booking',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="container-max space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Transparent Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
            Flexible Packages
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Choose the perfect package for your wellness needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all p-8 flex flex-col ${
                pkg.featured
                  ? 'bg-primary/5 border-primary shadow-lg scale-105'
                  : 'bg-background border-border hover:border-primary/50'
              }`}
            >
              {pkg.featured && (
                <div className="mb-4 inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-fit">
                  Most Popular
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-2xl font-serif text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-foreground/60 mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-foreground/60 text-sm">
                      / {pkg.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-full font-semibold transition-all text-center ${
                  pkg.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                Book Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
