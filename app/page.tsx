export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-8">
      {/* Nav */}
      <nav className="sticky top-0 bg-[#fafaf8]/95 backdrop-blur-sm z-50 py-4 mb-12 border-b border-gray-200">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
          <a href="#problem" className="hover:text-teal-accent">The Problem</a>
          <a href="#history" className="hover:text-teal-accent">History</a>
          <a href="#solution" className="hover:text-teal-accent">The Solution</a>
                    <a href="#hire" className="hover:text-teal-accent">Hire</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-24">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-3">
          Applied Product<br />Engineer
        </h1>
        <p className="font-sans text-lg sm:text-xl text-gray-400 tracking-wide mb-6">
          How value will be created in 2026 and beyond
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Product. Engineering. Compliance. One seat.
        </p>
        <p className="text-gray-700 leading-relaxed">
          One person who sits with users, builds the solution by directing AI agents, and owns the security of what they ship.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mt-6">
          This is an early attempt to map what effective AI-first teams look like. Built from experience, not theory. Meant to be built on, not followed.
        </p>
      </section>

      {/* The Problem */}
      <section id="problem" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">The Problem</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most organisations split product, engineering, and security into separate teams. Each has its own priorities, its own backlog, its own language. Work moves between them through handoffs. Handoffs create drag.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A product manager writes a spec. An engineer interprets it. Something gets lost. The build takes longer than expected. When it finally ships, a security review happens after the fact. Findings create rework. The cycle repeats.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Three roles. Three backlogs. One slow outcome.
        </p>
        <blockquote className="border-l-2 border-teal-accent pl-4 my-8 text-gray-600 italic">
          &ldquo;Restrictive IT policies have created a generation of knowledge workers who will never fully catch up.&rdquo;
          <span className="block mt-2 text-sm not-italic text-gray-400">Kevin Roose</span>
        </blockquote>
      </section>

      {/* We've Been Here Before */}
      <section id="history" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">We&apos;ve Been Here Before</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In 2008, DevOps dissolved the wall between development and operations. The people who built it also ran it. It created an entire profession and a salary bracket that didn&apos;t exist five years earlier.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          But DevOps only dissolved one wall. Product still specs. Engineering still builds. Security still reviews after the fact.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          AI agents change what&apos;s possible. When one person can direct agents to build production software, the argument for keeping product and engineering in separate seats disappears. When the time saved gets redirected to security, the compliance silo dissolves too.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          DevOps merged dev and ops. The Applied Product Engineer merges product, engineering, and compliance. Same pattern. Next iteration.
        </p>

        <ul className="space-y-4 text-gray-700 mb-8">
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2008</span>
            <span>&ldquo;DevOps&rdquo; coined. Dev and Ops merge.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2010s</span>
            <span>SRE emerges. Platform Engineering follows.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2025</span>
            <span>AI coding agents reach production quality.</span>
          </li>
          <li className="flex gap-3">

          </li>
        </ul>

        <blockquote className="border-l-2 border-teal-accent pl-4 my-8 text-gray-600 italic">
          &ldquo;The era of humans writing code is over. That&apos;s not to say SWEs don&apos;t have work to do, but writing syntax directly is not it.&rdquo;
          <span className="block mt-2 text-sm not-italic text-gray-400">Ryan Dahl, creator of Node.js</span>
        </blockquote>
      </section>

      {/* The Solution */}
      <section id="solution" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">The Solution</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The APE sits with users, builds by directing AI agents, and owns security from the start. Two layers: the APE builds it in (auth, data handling, sensible defaults), external specialists test it in a tight loop.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Three functions make a team. Not three departments. Three people who trust each other.
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-teal-accent pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">The Commercial Mind</h3>
            <p className="text-gray-700 leading-relaxed">
              Sales, marketing, client relations. Knows what&apos;s worth building because they know what people will pay for. Fractional across multiple ventures.
            </p>
          </div>
          <div className="border-l-2 border-teal-accent pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">The APE</h3>
            <p className="text-gray-700 leading-relaxed">
              Product, engineering, and compliance in one seat. Takes &ldquo;this is worth building&rdquo; and makes it exist. Fractional across multiple products. Every project makes the next one faster.
            </p>
          </div>
          <div className="border-l-2 border-teal-accent pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">The Security Specialist</h3>
            <p className="text-gray-700 leading-relaxed">
              Fractional by definition. Works across multiple teams. Finds the same vulnerability in five products, writes one fix, shares it across all five. The network gets more secure with every test.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          These are functions, not job titles. The lines blur. This is a heuristic for lean AI-first teams, not an org chart.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Planning permission holds it together. The commercial mind trusts the APE to build it right. The APE trusts the specialist to find the holes. When there are multiple APEs, they coordinate through lightweight standups and shared standards. Each owns their domain end to end.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Large organisations cannot merge these roles. Their org charts won&apos;t allow it. Small teams can. They hire the person, not the job title.
        </p>
      </section>

      {/* Hire an APE */}
      <section id="hire" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">Hire an APE</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          If you&apos;re a small team with funding, real users, and problems nobody&apos;s building solutions for, the first Applied Product Engineer is available for hire.
        </p>

        <h3 className="font-serif text-xl font-semibold mb-4">What I&apos;ve shipped</h3>
        <div className="space-y-6 mb-8">
          <div>
            <a
              href="https://ukhomeenergyguide.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-accent hover:underline font-semibold"
            >
              ukhomeenergyguide.co.uk
            </a>
            <p className="text-gray-700 leading-relaxed mt-1">
              Five government data sources combined into free property energy reports. Affiliate model. Agent-built.
            </p>
          </div>
          <div>
            <a
              href="https://motdata.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-accent hover:underline font-semibold"
            >
              motdata.uk
            </a>
            <p className="text-gray-700 leading-relaxed mt-1">
              57 million MOT tests across 5,125 vehicle models. DVSA open data. Agent-built.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Warehouse operations</p>
            <p className="text-gray-700 leading-relaxed mt-1">
              Reverse-engineered a device management platform. Built an operational worksurface for warehouse operators covering the full device lifecycle. No additional hires needed to scale.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          Eight years deploying digital telecare across 50+ housing associations. Five years running ISO 27001/9001 audits. I built a data warehouse, defined engagement metrics, and spend time on site with enterprise clients. This isn&apos;t theory. It&apos;s how I work.
        </p>

        <p className="text-gray-700">
          <a
            href="mailto:will@willpalmer.co.uk"
            className="text-teal-accent hover:underline"
          >
            will@willpalmer.co.uk
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8 pb-12 text-sm text-gray-400">
        <p>Written by Will Palmer</p>
        <p className="mt-1">
          Reading:{' '}
          <a
            href="https://willpalmer.co.uk/unlocking-capability"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-accent hover:underline"
          >
            Unlocking Capability
          </a>
          {' | '}
          <a
            href="https://willpalmer.co.uk/post-product-playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-accent hover:underline"
          >
            Post-Product Playbook
          </a>
        </p>
      </footer>
    </main>
  )
}
