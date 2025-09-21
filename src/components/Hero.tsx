import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Floating ribbon shapes */}
      <div className="ribbon-shape ribbon-shape-1"></div>
      <div className="ribbon-shape ribbon-shape-2"></div>
      <div className="ribbon-shape ribbon-shape-3"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-16 sm:py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 floating-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent animate-pulse" />
          <span className="text-muted-foreground">Next-generation development platform</span>
        </div>

        {/* Main headline - Improved mobile responsiveness */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
          <span className="gradient-text block">Code less.</span>
          <span className="text-foreground block">Build more.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Transform your ideas into reality with our intuitive platform that accelerates development 
          and amplifies creativity through intelligent automation.
        </p>

        {/* CTA buttons - Enhanced mobile layout */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <Button variant="hero" size="xl" className="group w-full sm:w-auto min-w-[200px]">
            Start Building Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="xl" className="floating-card border-border/50 hover:border-accent/50 w-full sm:w-auto min-w-[160px]">
            Watch Demo
          </Button>
        </div>

        {/* Stats or social proof - Better mobile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center max-w-4xl mx-auto px-4">
          <div className="floating-card rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">10x</div>
            <div className="text-muted-foreground text-sm sm:text-base">Faster Development</div>
          </div>
          <div className="floating-card rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">50k+</div>
            <div className="text-muted-foreground text-sm sm:text-base">Developers</div>
          </div>
          <div className="floating-card rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">99.9%</div>
            <div className="text-muted-foreground text-sm sm:text-base">Uptime</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default Hero;