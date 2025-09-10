import { Button } from "@/components/ui/button"
import { Github, Shield, Zap, Code, Settings, Package, Star, GitBranch, Cpu } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f1eb" }}>
      {/* Header Banner */}
      <div className="bg-zinc-900 text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          <a
            href="https://github.com/Hookflo/tern"
            className="underline hover:no-underline inline-flex items-center gap-1"
          >
            <Star className="w-4 h-4" />
            Star us on GitHub
          </a>{" "}
          for the latest updates on Tern - Self-Healing Autonomous Webhook Verification
        </p>
      </div>

      {/* Navigation */}
      <header className="bg-transparent sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-zinc-900" />
              <span className="text-2xl font-bold text-zinc-900">Tern</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-medium text-zinc-900 hover:text-zinc-700 transition-colors">
                Home
              </a>
              <a href="#features" className="font-medium text-zinc-900 hover:text-zinc-700 transition-colors">
                Features
              </a>
              <a href="#examples" className="font-medium text-zinc-900 hover:text-zinc-700 transition-colors">
                Examples
              </a>
              <a href="#docs" className="font-medium text-zinc-900 hover:text-zinc-700 transition-colors">
                Docs
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Try It Live
              </Button>
              <Button
                variant="outline"
                className="border-zinc-900 text-zinc-900 hover:bg-zinc-100 bg-transparent px-6 py-2 rounded-lg font-medium transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Cpu className="w-4 h-4" />
              Self-Healing • Autonomous • Algorithm-Agnostic
            </span>
          </div>

          <h1 className="text-7xl mb-8 text-zinc-900 md:text-7xl font-serif tracking-normal leading-[] bg-transparent mt-0 font-light">
            Verify Less,
            <br />
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">Build More</span>
          </h1>

          <p className="mb-12 leading-relaxed max-w-4xl mx-auto text-zinc-700 font-medium font-mono tracking-tighter text-xl">
            The next-generation webhook verification framework that adapts, heals, and scales automatically.
            <span className="text-zinc-900 font-semibold"> Zero maintenance, infinite possibilities.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 text-lg rounded-xl font-semibold transition-all hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              Try it live
            </Button>
            <Button
              variant="outline"
              className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-10 py-4 text-lg bg-transparent rounded-xl font-semibold transition-all hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-2">
              <div className="w-3 h-12 bg-zinc-900 rounded-full animate-pulse"></div>
              <div className="w-3 h-12 bg-zinc-700 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-3 h-12 bg-zinc-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>

          {/* Code Demo */}
          <div className="rounded-3xl p-10 text-left max-w-5xl mx-auto shadow-2xl opacity-100 shadow border-slate-50 border bg-sidebar-accent-foreground">
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-zinc-400 text-sm font-mono">webhook-verification.ts</div>
            </div>
            <div className="font-mono text-base text-zinc-300 space-y-3 leading-relaxed">
              <div className="text-emerald-400">import {"{ WebhookVerificationService }"} from '@hookflo/tern';</div>
              <div className="text-zinc-500">
                // Self-healing verification - adapts to platform changes automatically
              </div>
              <div>
                <span className="text-blue-400">const</span> result = <span className="text-blue-400">await</span>{" "}
                WebhookVerificationService
              </div>
              <div className="ml-4">
                .<span className="text-yellow-400">verifyWithPlatformConfig</span>(
              </div>
              <div className="ml-8">
                request, <span className="text-emerald-400">'stripe'</span>,{" "}
                <span className="text-emerald-400">'whsec_your_secret'</span>
              </div>
              <div className="ml-4">);</div>
              <div className="mt-6">
                <span className="text-blue-400">if</span> (result.<span className="text-yellow-400">isValid</span>){" "}
                {"{"}
              </div>
              <div className="ml-4">
                console.<span className="text-yellow-400">log</span>(
                <span className="text-emerald-400">'Webhook verified autonomously!'</span>, result.
                <span className="text-yellow-400">payload</span>);
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-zinc-900">Why Tern Leads the Future</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-zinc-700 font-medium">
              Most webhook verifiers break when platforms change. Tern evolves with them,
              <span className="text-zinc-900 font-semibold"> automatically healing and adapting</span> to keep your
              systems running.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/60 p-10 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
              <div className="bg-zinc-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Self-Healing Architecture</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">
                Automatically detects and adapts to platform signature changes. No more broken webhooks when providers
                update their systems.
              </p>
            </div>

            <div className="bg-white/60 p-10 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
              <div className="bg-zinc-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Algorithm Agnostic</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">
                Supports HMAC-SHA256, HMAC-SHA1, HMAC-SHA512, and custom algorithms. One framework for all signature
                types.
              </p>
            </div>

            <div className="bg-white/60 p-10 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
              <div className="bg-zinc-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Platform Specific</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">
                Battle-tested implementations for Stripe, GitHub, Supabase, Clerk, and 20+ major platforms out of the
                box.
              </p>
            </div>

            <div className="bg-white/60 p-10 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
              <div className="bg-zinc-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Type Safe</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">
                Full TypeScript support with comprehensive type definitions. Catch errors at compile time, not runtime.
              </p>
            </div>

            <div className="bg-white/60 p-10 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
              <div className="bg-zinc-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <GitBranch className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Framework Agnostic</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">
                Works seamlessly with Express.js, Next.js, Cloudflare Workers, Deno, and any JavaScript runtime.
              </p>
            </div>

            <div className="bg-white/60 p-10 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
              <div className="bg-zinc-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Zero Dependencies</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">
                Lightweight TypeScript framework with no external dependencies. Keep your bundle size minimal and
                secure.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mt-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-zinc-900">Trusted by Major Platforms</h2>
            <p className="text-xl text-zinc-700 font-medium">
              Battle-tested with the world's leading webhook providers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Stripe", icon: "S" },
              { name: "GitHub", icon: "G" },
              { name: "Supabase", icon: "S" },
              { name: "Clerk", icon: "C" },
              { name: "Shopify", icon: "S" },
              { name: "Vercel", icon: "V" },
            ].map((platform) => (
              <div key={platform.name} className="text-center group">
                <div className="bg-white/60 p-8 rounded-3xl border-2 border-zinc-200 mb-4 group-hover:border-zinc-300 transition-all group-hover:shadow-lg">
                  <div className="text-3xl font-black text-zinc-900">{platform.icon}</div>
                </div>
                <p className="text-sm font-semibold text-zinc-700">{platform.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Installation */}
        <section className="mt-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-zinc-900">Get Started in Seconds</h2>
            <p className="text-xl text-zinc-700 font-medium">One command to unlock autonomous webhook verification</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10 max-w-3xl mx-auto border border-zinc-800">
            <div className="flex items-center justify-between mb-6">
              <div className="text-zinc-400 text-sm font-mono">Terminal</div>
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                <Package className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
            <div className="font-mono text-emerald-400 text-xl">npm install @hookflo/tern</div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-40 text-center">
          <div className="rounded-3xl p-16 border bg-yellow-500 border-stone-400 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-8">Ready for Autonomous Webhooks?</h2>
              <p className="text-xl text-zinc-300 mb-12 leading-relaxed font-medium">
                Join thousands of developers who trust Tern for self-healing, scalable webhook verification.
                <span className="text-white font-semibold"> No maintenance required.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="bg-white text-zinc-900 hover:bg-zinc-100 px-10 py-4 text-lg rounded-xl font-semibold transition-all hover:scale-105">
                  <Zap className="w-5 h-5 mr-2" />
                  Try it live
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-zinc-900 px-10 py-4 text-lg bg-transparent rounded-xl font-semibold transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/40 border-t-2 border-zinc-200 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Shield className="w-8 h-8 text-zinc-900" />
              <span className="text-2xl font-bold text-zinc-900">Tern</span>
            </div>
            <div className="flex items-center space-x-8 text-sm font-medium text-zinc-700">
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Examples
              </a>
              <a href="https://github.com/Hookflo/tern" className="hover:text-zinc-900 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-zinc-900 transition-colors">
                MIT License
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-600">
            <p className="font-medium">© 2025 Hookflo. The same framework that powers webhook verification at scale.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
