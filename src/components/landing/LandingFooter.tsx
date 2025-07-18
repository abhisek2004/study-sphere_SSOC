"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/kom-senapati", icon: Github },
  { name: "Twitter", href: "https://twitter.com/kom-senapati", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/kom-senapati", icon: Linkedin },
  { name: "Email", href: "mailto:contact@studysphere.com", icon: Mail }
]

export default function LandingFooter() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Minimal footer content */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur"></div>
                  <div className="relative rounded-lg bg-background px-3 py-1">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Study Sphere
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </motion.div>
          </div>
          {/* Footer navigation links */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start text-center md:text-left">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-foreground/80">Legal</span>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link>
              <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accessibility</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-foreground/80">Company & Support</span>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              <Link href="/documentation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</Link>
              <Link href="/community-guidelines" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community Guidelines</Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-muted-foreground"
            >
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
              <span>by</span>
              <a
                href="https://github.com/kom-senapati"
                className="text-primary hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                kom-senapati
              </a>
              <span className="mx-2">using</span>
              <span className="font-medium">CopilotKit 🪁</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © 2024 Study Sphere. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
