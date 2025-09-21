import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Floating ribbon shapes */}
      <div className="ribbon-shape ribbon-shape-1"></div>
      <div className="ribbon-shape ribbon-shape-2"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 floating-card rounded-full px-4 py-2 mb-8 text-sm">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-muted-foreground">Next-generation development platform</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Code less.</span>
          <br />
          <span className="text-foreground">Build more.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into reality with our intuitive platform that accelerates development 
          and amplifies creativity through intelligent automation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="xl" className="group">
            Start Building Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="floating-card border-border/50 hover:border-accent/50">
            Watch Demo
          </Button>
        </div>

        {/* Stats or social proof */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="floating-card rounded-lg p-6">
            <div className="text-3xl font-bold gradient-text mb-2">10x</div>
            <div className="text-muted-foreground">Faster Development</div>
          </div>
          <div className="floating-card rounded-lg p-6">
            <div className="text-3xl font-bold gradient-text mb-2">50k+</div>
            <div className="text-muted-foreground">Developers</div>
          </div>
          <div className="floating-card rounded-lg p-6">
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default Hero;