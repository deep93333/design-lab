import { createContext, useContext, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CachedImage } from "./CachedImage";

type PopoverContent = {
  name: string;
  url: string;
  ogImage?: string;
  position: { x: number; y: number };
};

type SharedPopoverContextType = {
  show: (content: PopoverContent) => void;
  hide: () => void;
  isActive: boolean;
};

const SharedPopoverContext = createContext<SharedPopoverContextType | null>(null);

export const useSharedPopover = () => {
  const context = useContext(SharedPopoverContext);
  if (!context) {
    throw new Error("useSharedPopover must be used within SharedPopoverProvider");
  }
  return context;
};

export const SharedPopoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<PopoverContent | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const show = useCallback((newContent: PopoverContent) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const isSameContent = content?.url === newContent.url;
    if (isSameContent) return;

    setContent(newContent);
    setIsActive(true);
    setImageLoaded(false);
    setImageError(false);
  }, [content]);

  const hide = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
      setContent(null);
      setImageLoaded(false);
      setImageError(false);
    }, 150);
  }, []);

  return (
    <SharedPopoverContext.Provider value={{ show, hide, isActive }}>
      {children}
      
      <AnimatePresence>
        {isActive && content && (
          <motion.div
            key="shared-popover"
            initial={{ opacity: 0, scale: 0.95, y: -10, left: "50%" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              left: content.position.x - 150,
            }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ 
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed z-[99999] pointer-events-none"
            style={{
              left: "-150px",
              top: content.position.y - 8,
              transform: "translateX(-50%)",
            }}
          >
            <div className="w-[300px] p-1 rounded-xl overflow-hidden bg-white shadow-2xl ring-[0.8px] ring-black/10">
              {content.ogImage && !imageError ? (
                <div className="w-full rounded-lg aspect-[16/10] overflow-hidden bg-gray-50 relative">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                        style={{
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s infinite',
                        }}
                      />
                    </div>
                  )}
                  <CachedImage
                    src={content.url}
                    alt={`${content.name} preview`}
                    className={`w-full rounded-lg h-full object-contain transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                  <div className="absolute inset-0 rounded-lg ring-[0.65px] ring-inset ring-black/10 pointer-events-none" />
                </div>
              ) : (
                <div className="w-full aspect-[16/10] bg-gray-200 flex items-center justify-center">
                  <p className="text-sm text-gray-500">Loading preview...</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SharedPopoverContext.Provider>
  );
};
