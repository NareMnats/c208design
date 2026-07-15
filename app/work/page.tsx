import ClientCard from "@/components/cards/ClientCard";
import Container from "@/components/ui/Container";
import { clients } from "@/data/clients";

export default function WorkPage() {
  return (
    <main className="bg-[#f2eee9]">
      <section className="border-b border-black/10">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Selected work
            </p>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#111111] sm:text-6xl lg:text-7xl">
              Long-term creative partnerships.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65 sm:text-xl sm:leading-9">
              Identity systems, websites, environmental graphics, and print
              materials developed around the needs of each organization.
            </p>
          </div>
        </Container>
      </section>

      <section>
        {clients.map((client) => (
          <ClientCard key={client.slug} client={client} />
        ))}
      </section>
    </main>
  );
}
