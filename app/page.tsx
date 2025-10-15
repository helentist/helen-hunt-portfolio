"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-lg font-medium">Helen Hunt</div>
          <nav className="flex gap-8 items-center">
            <a href="#work" className="text-sm hover:opacity-60 transition-opacity">Work</a>
            <a href="#about" className="text-sm hover:opacity-60 transition-opacity">About me</a>
            <a href="#contact" className="text-sm hover:opacity-60 transition-opacity">Let&apos;s chat!</a>
            <a href="/resume.pdf" download className="text-sm hover:opacity-60 transition-opacity flex items-center gap-1">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[80px] leading-[0.95] font-normal mb-8 tracking-tight">
              Social-first<br />
              Marketing Leader
            </h1>
            <p className="text-xl text-black/60 max-w-2xl leading-relaxed mb-8">
              Driving millions of impressions through strategic campaigns, viral content, 
              and authentic community building. Specializing in sports marketing and tech startups.
            </p>
            <a href="/resume.pdf" download>
              <Button className="rounded-full bg-black hover:bg-black/80 text-white px-8">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="pb-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Project 1: Social-first Campaign */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-6xl font-normal mb-16 tracking-tight">
              Social-first<br />Campaign
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Results Card with Real Data */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white">
                <Image 
                  src="/images/results-1.png" 
                  alt="Campaign Results - Overall Metrics"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Platforms Card with Real Data */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white">
                <Image 
                  src="/images/results-2.png" 
                  alt="Campaign Results - Platform Performance"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <p className="text-base leading-relaxed text-black/70 mb-6">
                Led the launch of over 10 new social media pages and executed full-scale campaigns. 
                Partnered with Estonia&apos;s top influencers to drive awareness and engagement, managing 
                all creative assets, content rollout, and community interactions. Coordinated logistics 
                for six large-scale giveaways, overseeing prize fulfillment and brand partnerships. 
                Delivered performance analytics during and post-campaign to evaluate reach, engagement, and ROI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/10">
                <div>
                  <div className="text-sm font-medium mb-2">Client</div>
                  <div className="text-black/60">Red Band Estonia</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Platforms</div>
                  <div className="text-black/60">TikTok, YouTube, Meta</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Key Results</div>
                  <div className="text-black/60">150K post views, 70K total viewers, 4,658 likes</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Duration</div>
                  <div className="text-black/60">4 weeks campaign</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Project Management */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-6xl font-normal mb-8 tracking-tight">
                  Project<br />management
                </h2>
                <div className="space-y-6 text-base leading-relaxed text-black/70">
                  <p>
                    Managed budget allocation of €10,000 for promotional activities, optimizing ad 
                    spend efficiency which led to a 30% reduction in costs while expanding advertising 
                    coverage by 25%, ensuring maximum exposure within budget constraints.
                  </p>
                  <p>
                    Promoted the event to over 700 youth athletes through direct engagement at club 
                    training sessions.
                  </p>
                  <p>
                    Orchestrated the setup and management of exclusive VIP areas, enhancing sponsor 
                    and stakeholder engagement by providing tailored experiences that increased 
                    satisfaction ratings by 30%.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white">
                <Image 
                  src="/images/volleyball.jpg" 
                  alt="Volleyball Championship Event"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Project 3: Content Creation */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-6xl font-normal mb-16 tracking-tight">
              Content<br />Creation
            </h2>
            
            <div className="grid grid-cols-3 gap-0 rounded-sm overflow-hidden mb-8">
              <div className="relative aspect-square">
                <Image 
                  src="/images/redband.png" 
                  alt="Red Band Campaign Content"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-square">
                <Image 
                  src="/images/dhl.png" 
                  alt="DHL Express Campaign"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-2xl font-semibold mb-2">100+</div>
                  <div className="text-sm opacity-80">Posts/Month</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <p className="text-base leading-relaxed text-black/70 mb-6">
                Ideated, scripted, and edited over 100 videos and posts each month, maintaining 
                consistent brand voice while maximizing engagement. Worked with top influencers 
                in Estonia to create authentic content that resonates with target audiences.
              </p>
              <div className="pt-6 border-t border-black/10">
                <div className="text-sm font-medium mb-2">Brands Worked With</div>
                <div className="text-black/60">Red Band, DHL Express, GOAL, Estonia Volleyball Federation</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-6xl font-normal mb-8 tracking-tight">About me</h2>
              <div className="relative w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden mb-8">
                <Image 
                  src="/images/helen-professional.jpeg" 
                  alt="Helen Hunt"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:pt-20">
              <p className="text-xl leading-relaxed mb-6">
                Hi, I&apos;m Helen!
              </p>
              <p className="text-base leading-relaxed text-black/70 mb-6">
                Social-first marketer obsessed with building brands and communities that actually 
                connect. I&apos;ve led campaigns, influencer collaborations, and sports marketing projects 
                that drive real engagement.
              </p>
              <p className="text-base leading-relaxed text-black/70 mb-6">
                At GOAL, I managed content strategy and production for brands like DHL Express, 
                blending creative storytelling with performance data. Before that, I led marketing 
                for Estonia&apos;s largest youth volleyball club, turning local initiatives into national 
                campaigns that inspired families, athletes, and fans alike.
              </p>
              <p className="text-base leading-relaxed text-black/70 mb-8">
                I thrive in fast-paced environments where creativity meets strategy, and I&apos;m passionate 
                about sports marketing and tech startups that are building something meaningful.
              </p>
              
              {/* Team Photo */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
                <Image 
                  src="/images/team-photo.jpeg" 
                  alt="Helen with team at volleyball event"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-6xl font-normal mb-8 tracking-tight">Let&apos;s chat!</h2>
              <p className="text-base leading-relaxed text-black/70 mb-8">
                Looking for a Head of Marketing or Social Media Manager who can drive real results? 
                I&apos;d love to hear about your project.
              </p>
              <a 
                href="mailto:hunt.helen99@gmail.com"
                className="inline-flex items-center gap-2 text-lg hover:opacity-60 transition-opacity"
              >
                hunt.helen99@gmail.com
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-end justify-end">
              <a 
                href="https://www.linkedin.com/in/helen-hunt" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-60 transition-opacity underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-sm text-black/40">
          <div>© 2025 Helen Hunt</div>
          <div className="flex gap-6">
            <a href="mailto:hunt.helen99@gmail.com" className="hover:text-black transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/helen-hunt" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="/resume.pdf" download className="hover:text-black transition-colors">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
