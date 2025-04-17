
import Link from "next/link";
import { services } from "@/app/data/services";

export default function OurServices() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`} className="text-blue-600 hover:underline">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
