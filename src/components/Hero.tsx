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

        {/* Main headline - Bold, minimalist, single line */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
          <span className="gradient-text">Code less. Build more.</span>
        </h1>

        {/* Subtitle - More minimalist */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4 font-light">
          Transform your ideas into reality with intelligent automation.
        </p>

        {/* Central input bar - Like in reference image */}
        <div className="mb-16 sm:mb-20 lg:mb-24 px-4 max-w-4xl mx-auto">
          <div className="hero-input-bar rounded-2xl p-1">
            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Describe the app you want to build..."
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/60 text-base sm:text-lg focus:outline-none font-light"
                />
              </div>
              <Button variant="hero" size="lg" className="shrink-0 group">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats section - Pushed down more for mobile spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center max-w-5xl mx-auto px-4">
          <div className="floating-card rounded-xl p-6 sm:p-8 transition-transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-2 sm:mb-3">10x</div>
            <div className="text-muted-foreground/80 text-sm sm:text-base font-light">Faster Development</div>
          </div>
          <div className="floating-card rounded-xl p-6 sm:p-8 transition-transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-2 sm:mb-3">50k+</div>
            <div className="text-muted-foreground/80 text-sm sm:text-base font-light">Developers</div>
          </div>
          <div className="floating-card rounded-xl p-6 sm:p-8 transition-transform hover:scale-105">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-2 sm:mb-3">99.9%</div>
            <div className="text-muted-foreground/80 text-sm sm:text-base font-light">Uptime</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default Hero;