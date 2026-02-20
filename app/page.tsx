export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-8">
      {/* Nav */}
      <nav className="sticky top-0 bg-[#fafaf8]/95 backdrop-blur-sm z-50 py-4 mb-12 border-b border-gray-200">
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
          <a href="#problem" className="hover:text-teal-accent">The Problem</a>
          <a href="#history" className="hover:text-teal-accent">History</a>
          <a href="#trifecta" className="hover:text-teal-accent">The Trifecta</a>
          <a href="#what" className="hover:text-teal-accent">What an APE Does</a>
          <a href="#teams" className="hover:text-teal-accent">Small Teams</a>
          <a href="#scaling" className="hover:text-teal-accent">Scaling</a>
          <a href="#model" className="hover:text-teal-accent">The Model</a>
          <a href="#jd" className="hover:text-teal-accent">The JD</a>
          <a href="#reading" className="hover:text-teal-accent">Reading</a>
          <a href="#hire" className="hover:text-teal-accent">Hire</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-24">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-3">
          Applied Product<br />Engineer
        </h1>
        <p className="font-sans text-lg sm:text-xl text-gray-400 tracking-wide mb-6">
          How software should be built in 2026 and beyond
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Product. Engineering. Compliance. One seat.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A new role for a new era. The Applied Product Engineer merges product thinking,
          software delivery, and security posture into a single function. They build by
          directing AI agents. They sit with users. They ship.
        </p>
      </section>

      {/* The Problem */}
      <section id="problem" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">The Problem</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most organisations split product, engineering, and security into separate teams.
          Each team has its own priorities, its own backlog, its own language. Work moves
          between them through handoffs. Handoffs create drag.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A product manager writes a spec. An engineer interprets it. Something gets lost.
          The build takes longer than expected. When it finally ships, a security review
          happens after the fact. Findings create rework. The cycle repeats.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Three roles. Three backlogs. One slow outcome.
        </p>
        <blockquote className="border-l-2 border-teal-accent pl-4 my-8 text-gray-600 italic">
          &ldquo;Restrictive IT policies have created a generation of knowledge workers who
          will never fully catch up.&rdquo;
          <span className="block mt-2 text-sm not-italic text-gray-400">Kevin Roose</span>
        </blockquote>
      </section>

      {/* We've Been Here Before */}
      <section id="history" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">We&apos;ve Been Here Before</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In 2008, development teams threw code over the wall to operations. Ops complained
          it didn&apos;t work. Deploys took weeks. Everyone blamed each other.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          DevOps dissolved that wall. The people who built it also ran it. One team, one
          responsibility. It created an entire profession, a culture, a toolchain, and a
          salary bracket that didn&apos;t exist five years earlier.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          But DevOps only dissolved one wall. It left the others standing. Product still
          specs. Engineering still builds. Security still reviews after the fact. Three
          teams, three handoffs, three points of friction.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          AI agents change what&apos;s possible. When one person can direct agents to build
          production software without writing syntax, the argument for keeping product and
          engineering in separate seats disappears. And when the time saved on handoffs gets
          redirected to security, the compliance silo dissolves too.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          DevOps merged dev and ops. The Applied Product Engineer merges product, engineering,
          and compliance. Same pattern. Next iteration.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2008</span>
            <span>&ldquo;DevOps&rdquo; coined. Dev and Ops merge.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2010s</span>
            <span>SRE emerges. Platform Engineering follows.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2024</span>
            <span>AI coding agents reach production quality.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">2026</span>
            <span>The APE. Product, engineering, and compliance merge.</span>
          </li>
        </ul>
      </section>

      {/* The Trifecta */}
      <section id="trifecta" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">The Trifecta</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The APE sits with users and understands their problems firsthand. They build
          solutions by directing AI agents. They own security posture from the start.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Security works in two layers. The APE builds it in: authentication, authorisation,
          data handling, sensible defaults. External specialists test what gets built, working
          in a tight agile loop rather than a gate at the end.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This changes the economics. You no longer need three salaries to cover one outcome.
          The budget you free up goes to real security: external pen testing, specialist audits,
          continuous monitoring. Better outcomes for less.
        </p>
        <blockquote className="border-l-2 border-teal-accent pl-4 my-8 text-gray-600 italic">
          &ldquo;The era of humans writing code is over. That&apos;s not to say SWEs don&apos;t
          have work to do, but writing syntax directly is not it.&rdquo;
          <span className="block mt-2 text-sm not-italic text-gray-400">Ryan Dahl, creator of Node.js</span>
        </blockquote>
      </section>

      {/* What an APE Does */}
      <section id="what" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">What an APE Does</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">01</span>
            <span><strong>Sits with users.</strong> Not in a research lab. In the room, at the desk, watching the work happen. Problems are discovered, not reported.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">02</span>
            <span><strong>Builds with AI agents.</strong> The APE directs coding agents, review agents, deployment pipelines. They think in systems, not syntax.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">03</span>
            <span><strong>Owns the full lifecycle.</strong> From discovery through build through production. No handoff to another team. One person, one outcome.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">04</span>
            <span><strong>Builds security in.</strong> Auth, data handling, access control. These are not afterthoughts. They are part of the build from day one.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">05</span>
            <span><strong>Works with external specialists.</strong> Pen testers, auditors, compliance consultants. They test the output in short cycles. Not a gate. A loop.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-accent font-semibold shrink-0">06</span>
            <span><strong>Automates workflows.</strong> Repetitive processes become automated. Internal tools get built on the spot. Friction is the enemy.</span>
          </li>
        </ul>
      </section>

      {/* Why Small Teams */}
      <section id="teams" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">Why Small Teams</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Large organisations cannot merge these roles. Job descriptions are rigid. Budget
          lines are fixed. Compliance frameworks assume separation of duties. The structure
          resists change.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Small teams can. A team of two or three APEs can outship a department of twenty.
          They move faster because there are no handoffs. They build better because they
          talk to users directly. They spend less because AI agents do the heavy lifting.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The future belongs to small teams who build this way. Not because small is
          fashionable, but because the tooling finally makes it possible.
        </p>
      </section>

      {/* When There's More Than One */}
      <section id="scaling" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">When There&apos;s More Than One</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One APE is simple. Two or more need planning permission.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lightweight standups. Shared standards for code, security, and deployment. A common
          stack so agents can move between projects. External specialists who test across all
          output, not per person.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The coordination cost stays low because each APE owns their domain end to end.
          You are not splitting tasks across people. You are splitting domains.
        </p>
      </section>

      {/* Three Humans, Not Three Departments */}
      <section id="model" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">Three Humans, Not Three Departments</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          AI doesn&apos;t replace anyone here. It removes the busywork so humans can do the
          bits only humans can do. Judgment. Trust. Knowing what matters.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          The model has three roles. Not three departments. Three people who trust each other.
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-teal-accent pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">The Commercial Mind</h3>
            <p className="text-gray-700 leading-relaxed">
              Sales, marketing, client relations, and market sensing in one seat. Finds customers,
              tells the story, keeps them happy, knows what&apos;s worth building next. This is the
              founder or the business partner. One person, not four departments.
            </p>
          </div>
          <div className="border-l-2 border-teal-accent pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">The APE</h3>
            <p className="text-gray-700 leading-relaxed">
              Product, engineering, and compliance in one seat. Sits with users, directs AI agents
              to build the solution, owns the security posture from day one. Discovery, build,
              deploy, monitor, iterate. The execution engine.
            </p>
          </div>
          <div className="border-l-2 border-teal-accent pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">The Security Specialist</h3>
            <p className="text-gray-700 leading-relaxed">
              Fractional. Not on payroll. Works across five, ten, twenty small teams. Pen testing
              for one client Tuesday, vulnerability scanning for another Wednesday. Their breadth
              is their value. They see patterns across dozens of products that an in-house hire
              never would.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          A fully functioning product team: one commercial mind, one APE, one fractional security
          specialist. Two people on payroll, one on retainer. Shipping real products to real
          customers with real security. Compare that to the traditional setup: product manager,
          three engineers, QA, scrum master, security analyst, DevOps engineer, customer success
          manager. Nine people doing what three can do now.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          This is why planning permission works. It&apos;s not a process. It&apos;s trust
          between humans. The commercial mind trusts the APE to build it right. The APE trusts
          the security specialist to find the holes. The security specialist trusts the APE to
          fix them fast.
        </p>
        <p className="text-gray-700 leading-relaxed">
          No tickets. No sprint planning. No change advisory boards. Just humans who are good
          at their thing, talking to each other.
        </p>
      </section>

      {/* The JD */}
      <section id="jd" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">The JD</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you were hiring an APE, here is what the job description looks like.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-3">Applied Product Engineer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              You will sit with users, understand their problems, and build solutions using
              AI agents. You will own what you build from discovery through production. You
              will bake security in from the start and work with external specialists to
              validate it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-teal-accent mb-3">What we care about</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Show us something live. A product, a tool, a side project. Something real that people use.</li>
              <li>Talk to customers. Show us you can sit with a user and find the real problem.</li>
              <li>Ship this week. Not next quarter. This week. Show us your pace.</li>
              <li>Think about security before someone asks you to.</li>
              <li>Direct AI agents effectively. Know when to trust them and when to check.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-400 mb-3">What we don&apos;t care about</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>A computer science degree.</li>
              <li>Your LeetCode score.</li>
              <li>A green GitHub contribution graph.</li>
              <li>Years of experience in a specific language.</li>
              <li>Whether you can whiteboard a binary tree.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reading */}
      <section id="reading" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">Reading</h2>
        <div className="space-y-4">
          <a
            href="https://willpalmer.co.uk/unlocking-capability"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-teal-accent hover:underline"
          >
            Unlocking Capability
          </a>
          <a
            href="https://willpalmer.co.uk/post-product-playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-teal-accent hover:underline"
          >
            The Post-Product Playbook
          </a>
        </div>
      </section>

      {/* Hire an APE */}
      <section id="hire" className="mb-24 scroll-mt-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">Hire an APE</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          If you&apos;re a small team with funding, real users, and problems nobody&apos;s
          building solutions for, the first Applied Product Engineer is available for hire.
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
              Combines EPC register, Land Registry, PVGIS solar data, fuel poverty stats,
              and BUS grant data into a free property energy report. No sign-up, no data
              harvesting. Affiliate model. Built in partnership by directing AI agents.
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
              57 million MOT tests analysed across 5,125 vehicle models. Pass rates, failure
              trends, reg checks. All DVSA open data. Agent-built.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Warehouse operations</p>
            <p className="text-gray-700 leading-relaxed mt-1">
              Reverse-engineered a device management platform and built an operational
              worksurface for warehouse operators. Intake, deployment, monitoring, returns,
              retirement across multiple hardware vendors, SIM providers, and a cloud alarm
              platform. No additional hires needed to scale.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          Eight years as a product manager deploying digital telecare across 50+ housing
          associations. Five years running ISO 27001/9001 audits. I built a data warehouse
          (DuckDB, Kimball), defined engagement metrics that drive customer success
          interventions, and I spend time on site with enterprise clients. The trifecta
          isn&apos;t theory for me. It&apos;s how I work.
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
        Written by{' '}
        <a
          href="https://willpalmer.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-accent hover:underline"
        >
          Will Palmer
        </a>
      </footer>
    </main>
  )
}
