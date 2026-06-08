import { CalendarDays, CreditCard, ShieldAlert } from 'lucide-react'

const policyCards = [
  {
    icon: CalendarDays,
    title: 'Booking Policy',
    description:
      'Appointments are scheduled by confirmation only and are subject to availability. New client bookings follow standard booking procedures to reserve appointment slots.',
  },
  {
    icon: CreditCard,
    title: 'Deposit / Payment Policy',
    description:
      'Booking confirmations may require a deposit or upfront payment depending on the service and appointment type. Payment instructions will be provided during the booking process. Remaining balances, if applicable, are due according to the agreed payment terms.',
  },
  {
    icon: ShieldAlert,
    title: 'Cancellation Policy',
    description:
      'Appointments should be canceled or rescheduled at least 4 hours before the scheduled time. Late cancellations, missed appointments, or no-shows may result in deposit loss or cancellation fees. This policy helps us maintain availability for all clients.',
  },
]

export default function Policy() {
  return (
    <section id="policy" className="section-padding bg-card">
      <div className="container-max space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Booking Information
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
            Appointment Policies
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Please review our booking, payment, and cancellation guidelines before scheduling your visit.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {policyCards.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={index}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-serif text-foreground">{item.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
